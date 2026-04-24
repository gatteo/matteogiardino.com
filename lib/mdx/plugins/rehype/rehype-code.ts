/**
 * Adapted from: https://github.com/fuma-nama/fumadocs/blob/691f12aa93df25bd10fa5bd6f91f70766c1fef12/packages/core/src/mdx-plugins/rehype-code.ts
 *
 * Uses @shikijs/rehype/core with a module-shared highlighter so every MDX file
 * in the contentlayer build reuses the same Shiki instance (no more
 * "N instances have been created" warnings).
 */
import rehypeShikiFromHighlighter, { type RehypeShikiCoreOptions } from '@shikijs/rehype/core'
import { transformerMetaHighlight } from '@shikijs/transformers'
import type { Root } from 'hast'
import type { Plugin, Transformer } from 'unified'

import { DEFAULT_SHIKI_THEMES, getSharedHighlighter } from './shiki-singleton'

export { DEFAULT_SHIKI_THEMES } from './shiki-singleton'

const titleRegex = /title="([^"]*)"/

const rehypeCodeOptions: RehypeShikiCoreOptions = {
    transformers: [
        {
            preprocess: (code, { meta }) => {
                if (meta) meta.__raw = meta.__raw?.replace(titleRegex, '')
                return code.replace(/\n$/, '')
            },
        },
        transformerMetaHighlight(),
    ],
    parseMetaString: (meta) => {
        const titleMatch = meta.match(titleRegex)
        return { title: titleMatch?.[1] ?? null }
    },
    themes: DEFAULT_SHIKI_THEMES,
    defaultColor: false,
}

// Lazily bind the shared highlighter to @shikijs/rehype's transformer on first
// call. Subsequent calls reuse the same bound transformer.
export const rehypeCode: Plugin<[], Root> = () => {
    let transformer: Transformer<Root> | null = null

    return async (tree, file) => {
        if (!transformer) {
            const highlighter = await getSharedHighlighter()
            transformer = rehypeShikiFromHighlighter(highlighter, rehypeCodeOptions) as Transformer<Root>
        }
        // Unified transformers may return void or a Promise; await in case.
        await transformer(tree, file, () => {})
    }
}
