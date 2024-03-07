// contentlayer.config.ts
import { defineDocumentType, makeSource } from "contentlayer/source-files";

// lib/mdx/plugins/index.ts
import remarkGfm from "remark-gfm";

// lib/mdx/plugins/rehype/rehype-code.ts
import rehypeShiki from "@shikijs/rehype";
import { transformerMetaHighlight } from "@shikijs/transformers";
var titleRegex = /title="([^"]*)"/;
var DEFAULT_SHIKI_THEMES = {
  light: "github-light",
  dark: "github-dark"
};
var rehypeCode = [
  rehypeShiki,
  {
    transformers: [
      {
        /**
         * - Remove trailing newline
         * - Remove title from meta
         */
        preprocess: (code, { meta }) => {
          if (meta) {
            meta.__raw = meta.__raw?.replace(titleRegex, "");
          }
          return code.replace(/\n$/, "");
        },
        root(hast) {
          const pre = hast.children[0];
          if (pre?.type !== "element")
            return;
          hast.children = [
            {
              ...pre,
              properties: {
                ...pre.properties,
                "data-lang": this.options.lang
              }
            }
          ];
        }
      },
      transformerMetaHighlight()
    ],
    parseMetaString: (meta) => {
      const titleMatch = meta.match(titleRegex);
      const title = titleMatch?.[1] ?? null;
      return { title };
    },
    themes: DEFAULT_SHIKI_THEMES,
    defaultColor: false
  }
];

// lib/mdx/plugins/rehype/rehype-inline-code.ts
import { bundledLanguages, getHighlighter } from "shiki";
import { visit } from "unist-util-visit";
var inlineShikiRegex = /(.*){:(.*)}$/;
var themeNames = Object.values(DEFAULT_SHIKI_THEMES);
var themeKeys = Object.keys(DEFAULT_SHIKI_THEMES);
var rehypeInlineCode = () => {
  let promise;
  return async (tree) => {
    if (!promise) {
      promise = getHighlighter({
        themes: themeNames,
        langs: Object.keys(bundledLanguages)
      });
    }
    const highlighter = await promise;
    return visit(tree, "element", (node, index, parent) => {
      if (node.tagName !== "code")
        return;
      const match = node.children[0]?.value?.match(inlineShikiRegex);
      if (!match)
        return;
      const [, code, lang] = match;
      const isLang = lang[0] !== ".";
      const hast = highlighter.codeToHast(code, {
        themes: DEFAULT_SHIKI_THEMES,
        lang: isLang ? lang : "plaintext",
        defaultColor: false
      });
      const inlineCode = hast.children[0].children[0];
      if (!inlineCode)
        return;
      if (!isLang) {
        const colors = themeNames.map(
          (name) => highlighter.getTheme(name).settings.find(({ scope }) => scope?.includes(lang.slice(1)))?.settings.foreground ?? "inherit"
        );
        inlineCode.children[0].children[0].properties.style = themeKeys.map((key, i) => `--shiki-${key}:${colors[i]}`).join(";");
      }
      inlineCode.properties.className = ["shiki"];
      parent?.children.splice(index ?? 0, 1, inlineCode);
    });
  };
};

// lib/mdx/plugins/remark/remark-code.ts
import { visit as visit2 } from "unist-util-visit";
var remarkCode = () => {
  return (tree) => {
    visit2(tree, "code", (node) => {
      if (node.type !== "code")
        return;
      if (!node.lang)
        node.lang = "plaintext";
    });
  };
};

// lib/mdx/plugins/remark/remark-heading.ts
import Slugger from "github-slugger";
import { visit as visit3 } from "unist-util-visit";
var slugger = new Slugger();
var remarkHeading = () => {
  return (tree, file) => {
    const toc = [];
    slugger.reset();
    visit3(tree, "heading", (node) => {
      var _a;
      node.data || (node.data = {});
      (_a = node.data).hProperties || (_a.hProperties = {});
      const text = node.children[0].value;
      const id = slugger.slug(text);
      node.data.hProperties.id = id;
      toc.push({
        title: text,
        url: id,
        depth: node.depth
      });
      return "skip";
    });
    file.data.toc = toc;
  };
};

// lib/mdx/plugins/index.ts
var remarkPlugins = [remarkGfm, remarkHeading, remarkCode];
var rehypePlugins = [rehypeCode, rehypeInlineCode];

// contentlayer.config.ts
var BlogAuthors = [
  {
    id: "matteo",
    name: "Matteo Giardino",
    url: "https://matteogiardino.com",
    image: "https://github.com/gatteo.png"
  }
];
var Project = defineDocumentType(() => ({
  name: "Project",
  filePathPattern: "projects/**/*.mdx",
  contentType: "mdx",
  fields: {
    name: {
      type: "string",
      description: "The name of the project",
      required: true
    },
    description: {
      type: "string",
      description: "The description of the project",
      required: true
    },
    homepage: {
      type: "string",
      description: "The link to the project's homepage",
      required: false
    },
    github: {
      type: "string",
      description: "The url to the project's github page",
      required: false
    },
    icon: {
      type: "string",
      description: "The name of the icon to use",
      required: true
    },
    image: {
      type: "string",
      description: "Image for the project",
      required: false
    },
    featured: {
      type: "boolean",
      description: "Whether to feature this project",
      required: false
    },
    collab: {
      type: "boolean",
      description: "Whether this project is a collaboration",
      required: true
    }
  },
  computedFields: {
    slug: {
      type: "string",
      resolve: (doc) => doc._raw.sourceFileName.replace(/\.mdx$/, "")
    }
  }
}));
var BlogPost = defineDocumentType(() => ({
  name: "BlogPost",
  filePathPattern: "blog/**/*.mdx",
  contentType: "mdx",
  fields: {
    title: {
      type: "string",
      description: "The title of the blog post",
      required: true
    },
    createdAt: {
      type: "string",
      description: "The date of the blog post",
      required: true
    },
    modifiedAt: {
      type: "string",
      description: "The modified time of the blog post",
      required: true
    },
    summary: {
      type: "string",
      description: "The summary of the blog post",
      required: true
    },
    image: {
      type: "string",
      description: "Image for the blog post",
      required: true
    },
    authorId: {
      type: "string",
      description: "The author of the blog post",
      required: true
    },
    tags: { type: "list", of: { type: "string" }, default: [] }
  },
  computedFields: {
    slug: {
      type: "string",
      resolve: (doc) => doc._raw.sourceFileName.replace(/\.mdx$/, "")
    },
    author: {
      type: "nested",
      resolve: (doc) => BlogAuthors.find((author) => author.id === doc.authorId)
    }
  }
}));
var Pages = defineDocumentType(() => ({
  name: "Pages",
  filePathPattern: "pages/**/*.mdx",
  contentType: "mdx",
  computedFields: {
    slug: {
      type: "string",
      resolve: (doc) => doc._raw.sourceFileName.replace(/\.mdx$/, "")
    }
  }
}));
var contentlayer_config_default = makeSource({
  contentDirPath: "contents",
  documentTypes: [Project, BlogPost, Pages],
  mdx: {
    remarkPlugins,
    rehypePlugins
  }
});
export {
  contentlayer_config_default as default
};
//# sourceMappingURL=compiled-contentlayer-config-HDW6ATIQ.mjs.map
