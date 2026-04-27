"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { mermaidThemes, type MermaidCustomTheme } from "@/lib/mermaid-themes";

/* -------------------------------------------------------------------------------------------------
 * Types
 * -----------------------------------------------------------------------------------------------*/

export type MermaidBuiltinTheme =
  | "default"
  | "dark"
  | "forest"
  | "neutral"
  | "base";
export type MermaidTheme = MermaidBuiltinTheme | MermaidCustomTheme;

const BUILTIN_THEMES = new Set<string>([
  "default",
  "dark",
  "forest",
  "neutral",
  "base",
]);

export interface MermaidConfig {
  theme?: MermaidTheme;
  darkMode?: boolean;
  look?: "classic" | "handdrawn";
  themeVariables?: Record<string, string>;
  flowchart?: {
    curve?: "linear" | "cardinal";
    padding?: number;
    htmlLabels?: boolean;
  };
  sequence?: {
    diagramMarginX?: number;
    diagramMarginY?: number;
    actorMargin?: number;
    width?: number;
    height?: number;
    boxMargin?: number;
    useMaxWidth?: boolean;
  };
  fontFamily?: string;
  fontSize?: number;
  logLevel?: "trace" | "debug" | "info" | "warn" | "error" | "fatal";
}

export interface MermaidProps {
  chart: string;
  config?: MermaidConfig;
  className?: string;
  onError?: (error: string) => void;
  onSuccess?: (svg: string) => void;
  /** Delay in ms before rendering triggers (useful for live editors) */
  debounceTime?: number;
}

/* -------------------------------------------------------------------------------------------------
 * Hook: useMermaid
 * Handles dynamic imports, configuration, and rendering logic.
 * -----------------------------------------------------------------------------------------------*/

function useMermaid({
  chart,
  config,
  debounceTime = 300,
}: {
  chart: string;
  config?: MermaidConfig;
  debounceTime?: number;
}) {
  const [svg, setSvg] = React.useState<string | null>(null);
  const [error, setError] = React.useState<string | null>(null);
  const [status, setStatus] = React.useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  // Unique ID for this diagram instance
  const id = React.useId().replace(/:/g, "");

  // Hidden container for Mermaid's size calculations
  const renderRef = React.useRef<HTMLDivElement>(null);

  // Debounce the input chart string to avoid thrashing
  const debouncedChart = useDebounce(chart, debounceTime);

  // Memoize config to prevent deep object comparison issues in effects
  const configString = React.useMemo(
    () => JSON.stringify(config ?? {}),
    [config],
  );

  React.useEffect(() => {
    if (!debouncedChart.trim()) {
      setStatus("idle");
      setSvg(null);
      setError(null);
      return;
    }

    let isCancelled = false;

    const render = async () => {
      setStatus("loading");
      setError(null);

      try {
        // Dynamic import to keep bundle size small
        const mermaid = (await import("mermaid")).default;

        if (isCancelled) return;

        const parsedConfig: MermaidConfig = JSON.parse(configString);

        // Resolve Theme
        const isCustomTheme =
          parsedConfig.theme && !BUILTIN_THEMES.has(parsedConfig.theme);
        const resolvedThemeVars = isCustomTheme
          ? {
              ...mermaidThemes[parsedConfig.theme as MermaidCustomTheme],
              ...parsedConfig.themeVariables,
            }
          : parsedConfig.themeVariables;

        const explicitTheme = parsedConfig.theme as MermaidBuiltinTheme;
        const resolvedMermaidTheme = isCustomTheme
          ? "base"
          : (!explicitTheme || explicitTheme === "default") &&
              parsedConfig.darkMode
            ? "dark"
            : (explicitTheme ?? "default");

        // Initialize Mermaid
        // Note: startOnLoad must be false so we can manually render
        mermaid.initialize({
          startOnLoad: false,
          theme: resolvedMermaidTheme,
          themeVariables: resolvedThemeVars,
          look: parsedConfig.look === "handdrawn" ? "handDrawn" : "classic",
          flowchart: {
            htmlLabels: parsedConfig.flowchart?.htmlLabels ?? true,
            ...(parsedConfig.flowchart?.padding != null
              ? { padding: parsedConfig.flowchart.padding }
              : {}),
          },
          sequence: parsedConfig.sequence,
          fontFamily: parsedConfig.fontFamily ?? "Inter, sans-serif",
          fontSize: parsedConfig.fontSize ?? 14,
          logLevel: parsedConfig.logLevel ?? "error",
          securityLevel: "loose",
        });

        // Ensure we have a DOM node for calculation
        if (!renderRef.current) return;
        renderRef.current.innerHTML = "";

        // Generate unique ID for this specific render cycle
        const uniqueId = `mermaid-${id}-${Date.now()}`;

        // Render
        // We pass the ref as the container so Mermaid can calculate dimensions accurately
        const { svg: svgOutput } = await mermaid.render(
          uniqueId,
          debouncedChart.trim(),
          renderRef.current,
        );

        if (!isCancelled) {
          setSvg(svgOutput);
          setStatus("success");
          // Clean up the calculation node to free memory
          renderRef.current.innerHTML = "";
        }
      } catch (err) {
        if (!isCancelled) {
          const message =
            err instanceof Error ? err.message : "Failed to render diagram";
          console.error("Mermaid Render Error:", err);
          setError(message);
          setStatus("error");
          setSvg(null);
        }
      }
    };

    render();

    return () => {
      isCancelled = true;
    };
  }, [debouncedChart, configString, id]);

  return { svg, error, status, renderRef };
}

/* -------------------------------------------------------------------------------------------------
 * Helper: useDebounce
 * -----------------------------------------------------------------------------------------------*/

function useDebounce<T>(value: T, delay: number): T {
  const [debouncedValue, setDebouncedValue] = React.useState(value);

  React.useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
}

/* -------------------------------------------------------------------------------------------------
 * Component: Mermaid
 * -----------------------------------------------------------------------------------------------*/

export function Mermaid({
  chart,
  config,
  className,
  onError,
  onSuccess,
  debounceTime = 300,
}: MermaidProps) {
  const { svg, error, status, renderRef } = useMermaid({
    chart,
    config,
    debounceTime,
  });

  // Propagate events to parent
  React.useEffect(() => {
    if (status === "success" && svg) onSuccess?.(svg);
    if (status === "error" && error) onError?.(error);
  }, [status, svg, error, onSuccess, onError]);

  return (
    <div className={cn("relative w-full min-h-[100px]", className)}>
      {/* 1. Visible Output Container */}
      {status === "success" && svg && (
        <div
          className="flex items-center justify-center w-full h-full overflow-auto animate-in fade-in duration-300 [&_svg]:max-w-full [&_svg]:h-auto"
          dangerouslySetInnerHTML={{ __html: svg }}
          role="img"
          aria-label="Mermaid diagram"
        />
      )}

      {/* 2. Hidden Calculation Container 
          Mermaid needs this to calculate layout dimensions before we show it. 
      */}
      <div
        ref={renderRef}
        className="absolute inset-0 invisible -z-50 w-full h-full pointer-events-none overflow-hidden"
        aria-hidden="true"
      />

      {/* 3. Loading State */}
      {status === "loading" && (
        <div className="absolute inset-0 flex items-center justify-center bg-background/50 backdrop-blur-[1px]">
          <div className="flex flex-col items-center gap-3">
            <div className="w-5 h-5 border-2 border-primary rounded-full animate-spin border-t-transparent" />
            <span className="text-xs text-muted-foreground font-medium">
              Rendering...
            </span>
          </div>
        </div>
      )}

      {/* 4. Error State */}
      {status === "error" && error && (
        <div className="flex items-center justify-center w-full p-6 border border-destructive/20 bg-destructive/5 rounded-lg">
          <div className="flex flex-col items-center gap-2 max-w-md text-center">
            <span className="text-xs font-bold text-destructive uppercase tracking-wider">
              Syntax Error
            </span>
            <code className="text-xs text-muted-foreground font-mono bg-background/50 px-2 py-1 rounded w-full break-all">
              {error.split("\n")[0]}{" "}
              {/* Show only first line of error for brevity */}
            </code>
          </div>
        </div>
      )}

      {/* 5. Idle State */}
      {status === "idle" && (
        <div className="flex items-center justify-center w-full h-full min-h-[150px] border-2 border-dashed rounded-lg border-muted-foreground/20">
          <p className="text-sm text-muted-foreground">
            No diagram code provided
          </p>
        </div>
      )}
    </div>
  );
}
