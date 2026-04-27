export interface MermaidThemeVariables {
  primaryColor: string
  primaryTextColor: string
  primaryBorderColor: string
  background: string
  textColor: string
  lineColor: string
  secondaryColor: string
  tertiaryColor: string
  [key: string]: string
}

export const mermaidThemes: Record<string, MermaidThemeVariables> = {
  // Classic Green Family
  emerald: {
    primaryColor: "#22c55e",
    primaryTextColor: "#ffffff",
    primaryBorderColor: "#16a34a",
    background: "#f0fdf4",
    textColor: "#166534",
    lineColor: "#166534",
    secondaryColor: "#dcfce7",
    tertiaryColor: "#f0fdf4",
  },

  // Warm Family
  coral: {
    primaryColor: "#f97316",
    primaryTextColor: "#ffffff",
    primaryBorderColor: "#ea580c",
    background: "#fff7ed",
    textColor: "#9a3412",
    lineColor: "#c2410c",
    secondaryColor: "#fed7aa",
    tertiaryColor: "#fff7ed",
  },
  amber: {
    primaryColor: "#eab308",
    primaryTextColor: "#ffffff",
    primaryBorderColor: "#ca8a04",
    background: "#fefce8",
    textColor: "#854d0e",
    lineColor: "#a16207",
    secondaryColor: "#fef08a",
    tertiaryColor: "#fefce8",
  },
  crimson: {
    primaryColor: "#ef4444",
    primaryTextColor: "#ffffff",
    primaryBorderColor: "#dc2626",
    background: "#fef2f2",
    textColor: "#991b1b",
    lineColor: "#b91c1c",
    secondaryColor: "#fecaca",
    tertiaryColor: "#fef2f2",
  },
  bronze: {
    primaryColor: "#d97706",
    primaryTextColor: "#ffffff",
    primaryBorderColor: "#b45309",
    background: "#fef3c7",
    textColor: "#78350f",
    lineColor: "#92400e",
    secondaryColor: "#fcd34d",
    tertiaryColor: "#fef3c7",
  },

  // Cool Blue Family
  ocean: {
    primaryColor: "#0ea5e9",
    primaryTextColor: "#ffffff",
    primaryBorderColor: "#0284c7",
    background: "#eff6ff",
    textColor: "#1e40af",
    lineColor: "#0369a1",
    secondaryColor: "#bae6fd",
    tertiaryColor: "#eff6ff",
  },
  sky: {
    primaryColor: "#38bdf8",
    primaryTextColor: "#ffffff",
    primaryBorderColor: "#0ea5e9",
    background: "#f0f9ff",
    textColor: "#0369a1",
    lineColor: "#0284c7",
    secondaryColor: "#bae6fd",
    tertiaryColor: "#f0f9ff",
  },
  indigo: {
    primaryColor: "#6366f1",
    primaryTextColor: "#ffffff",
    primaryBorderColor: "#4f46e5",
    background: "#eef2ff",
    textColor: "#3730a3",
    lineColor: "#4338ca",
    secondaryColor: "#c7d2fe",
    tertiaryColor: "#eef2ff",
  },

  // Green Variations
  teal: {
    primaryColor: "#14b8a6",
    primaryTextColor: "#ffffff",
    primaryBorderColor: "#0d9488",
    background: "#f0fdfa",
    textColor: "#0f766e",
    lineColor: "#115e59",
    secondaryColor: "#ccfbf1",
    tertiaryColor: "#f0fdfa",
  },
  lime: {
    primaryColor: "#84cc16",
    primaryTextColor: "#ffffff",
    primaryBorderColor: "#65a30d",
    background: "#f4f4af",
    textColor: "#415f0b",
    lineColor: "#4d7c0f",
    secondaryColor: "#d4ed87",
    tertiaryColor: "#f4f4af",
  },
  mint: {
    primaryColor: "#6ee7b7",
    primaryTextColor: "#ffffff",
    primaryBorderColor: "#10b981",
    background: "#f0fdf4",
    textColor: "#047857",
    lineColor: "#059669",
    secondaryColor: "#a7f3d0",
    tertiaryColor: "#ecfdf5",
  },

  // Purple/Pink Family
  violet: {
    primaryColor: "#a855f7",
    primaryTextColor: "#ffffff",
    primaryBorderColor: "#9333ea",
    background: "#faf5ff",
    textColor: "#581c87",
    lineColor: "#7c3aed",
    secondaryColor: "#e9d5ff",
    tertiaryColor: "#faf5ff",
  },
  rose: {
    primaryColor: "#ec4899",
    primaryTextColor: "#ffffff",
    primaryBorderColor: "#db2777",
    background: "#fdf2f8",
    textColor: "#be185d",
    lineColor: "#c026d3",
    secondaryColor: "#fbcfe8",
    tertiaryColor: "#fdf2f8",
  },

  // Dark Professional
  slate: {
    primaryColor: "#64748b",
    primaryTextColor: "#f8fafc",
    primaryBorderColor: "#475569",
    background: "#0f172a",
    textColor: "#f1f5f9",
    lineColor: "#334155",
    secondaryColor: "#1e293b",
    tertiaryColor: "#1e293b",
  },
  charcoal: {
    primaryColor: "#475569",
    primaryTextColor: "#f8fafc",
    primaryBorderColor: "#334155",
    background: "#111827",
    textColor: "#f9fafb",
    lineColor: "#6b7280",
    secondaryColor: "#1f2937",
    tertiaryColor: "#374151",
  },
} as const

export type MermaidCustomTheme = keyof typeof mermaidThemes

export const themeGroups = [
  {
    label: "Green",
    themes: ["emerald", "teal", "lime", "mint"] as MermaidCustomTheme[],
  },
  {
    label: "Warm",
    themes: ["coral", "amber", "crimson", "bronze"] as MermaidCustomTheme[],
  },
  {
    label: "Cool",
    themes: ["ocean", "sky", "indigo"] as MermaidCustomTheme[],
  },
  {
    label: "Purple / Pink",
    themes: ["violet", "rose"] as MermaidCustomTheme[],
  },
  {
    label: "Dark",
    themes: ["slate", "charcoal"] as MermaidCustomTheme[],
  },
] as const
