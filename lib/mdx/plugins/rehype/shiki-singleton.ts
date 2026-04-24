/**
 * One Shiki highlighter shared across rehype-code and rehype-inline-code.
 * Without this, each MDX file spins up its own highlighter (loads WASM +
 * themes + language grammars all over again) — build warnings like
 * "10 instances have been created..." come from exactly that.
 */
import { bundledLanguages, getHighlighter, type Highlighter } from 'shiki'

export const DEFAULT_SHIKI_THEMES = {
    light: 'github-light',
    dark: 'github-dark',
}

let highlighterPromise: Promise<Highlighter> | null = null

export function getSharedHighlighter(): Promise<Highlighter> {
    if (!highlighterPromise) {
        highlighterPromise = getHighlighter({
            themes: Object.values(DEFAULT_SHIKI_THEMES),
            langs: Object.keys(bundledLanguages),
        })
    }
    return highlighterPromise
}
