import { MDXOptions } from 'contentlayer/core'
import { defineDocumentType, makeSource } from 'contentlayer/source-files'

import { BlogAuthors } from './config/blog'
import { rehypePlugins, remarkPlugins } from './lib/mdx/plugins'

const Project = defineDocumentType(() => ({
    name: 'Project',
    filePathPattern: 'projects/**/*.mdx',
    contentType: 'mdx',
    fields: {
        name: {
            type: 'string',
            description: 'The name of the project',
            required: true,
        },
        title: {
            type: 'string',
            description: 'The meta title of the project',
            required: false,
        },
        description: {
            type: 'string',
            description: 'The description of the project',
            required: true,
        },
        url: {
            type: 'string',
            description: "The link to the project's homepage",
            required: false,
        },
        github: {
            type: 'string',
            description: "The url to the project's github page",
            required: false,
        },
        icon: {
            type: 'string',
            description: 'The name of the icon to use',
            required: true,
        },
        image: {
            type: 'string',
            description: 'Image for the project',
            required: false,
        },
        featured: {
            type: 'boolean',
            description: 'Whether to feature this project',
            required: false,
        },
        collab: {
            type: 'boolean',
            description: 'Whether this project is a collaboration',
            required: true,
        },
    },
    computedFields: {
        slug: {
            type: 'string',
            resolve: (doc) => doc._raw.sourceFileName.replace(/\.mdx$/, ''),
        },
    },
}))

const BlogPost = defineDocumentType(() => ({
    name: 'BlogPost',
    filePathPattern: 'blog/**/*.mdx',
    contentType: 'mdx',
    fields: {
        title: {
            type: 'string',
            description: 'The title of the blog post',
            required: true,
        },
        createdAt: {
            type: 'string',
            description: 'The date of the blog post',
            required: true,
        },
        modifiedAt: {
            type: 'string',
            description: 'The modified time of the blog post',
            required: true,
        },
        summary: {
            type: 'string',
            description: 'The summary of the blog post',
            required: true,
        },
        image: {
            type: 'string',
            description: 'Image for the blog post',
            required: true,
        },
        authorId: {
            type: 'string',
            description: 'The author of the blog post',
            required: true,
        },
        tags: { type: 'list', of: { type: 'string' }, default: [] },
    },
    computedFields: {
        slug: {
            type: 'string',
            resolve: (doc) => doc._raw.sourceFileName.replace(/\.mdx$/, ''),
        },
        author: {
            type: 'nested',
            resolve: (doc) => BlogAuthors.find((author) => author.id === doc.authorId),
        },
    },
}))

const Pages = defineDocumentType(() => ({
    name: 'Pages',
    filePathPattern: 'pages/**/*.mdx',
    contentType: 'mdx',
    computedFields: {
        slug: {
            type: 'string',
            resolve: (doc) => doc._raw.sourceFileName.replace(/\.mdx$/, ''),
        },
    },
}))

export default makeSource({
    contentDirPath: 'contents',
    documentTypes: [Project, BlogPost, Pages],
    mdx: {
        remarkPlugins: remarkPlugins,
        rehypePlugins: rehypePlugins,
    } as MDXOptions,
})
