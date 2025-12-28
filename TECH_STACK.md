# Tech Stack

This document outlines the technologies and tools used in this project.

## Core Framework

| Technology | Version | Description |
|------------|---------|-------------|
| [Next.js](https://nextjs.org/) | 16.1.1 | React framework with App Router, SSR, SSG, and ISR |
| [React](https://react.dev/) | 19.2.3 | UI library |
| [TypeScript](https://www.typescriptlang.org/) | 5.9.3 | Type-safe JavaScript |

## Content Management

| Technology | Version | Description |
|------------|---------|-------------|
| [Contentlayer2](https://contentlayer.dev/) | 0.5.4 | Type-safe content SDK for MDX |
| [MDX](https://mdxjs.com/) | - | Markdown with JSX support |
| [mdx-bundler](https://github.com/kentcdodds/mdx-bundler) | 10.1.1 | MDX compilation and bundling |

## Internationalization (i18n)

| Technology | Version | Description |
|------------|---------|-------------|
| [next-intl](https://next-intl-docs.vercel.app/) | 4.5.5 | Internationalization for Next.js |

Supported locales: `it` (Italian), `en` (English)

## Styling

| Technology | Version | Description |
|------------|---------|-------------|
| [Tailwind CSS](https://tailwindcss.com/) | 3.4.13 | Utility-first CSS framework |
| [tailwindcss-animate](https://github.com/jamiebuilds/tailwindcss-animate) | 1.0.7 | Animation utilities |
| [@tailwindcss/typography](https://tailwindcss.com/docs/typography-plugin) | 0.5.10 | Prose styling for content |
| [class-variance-authority](https://cva.style/) | 0.7.0 | Component variant management |
| [tailwind-merge](https://github.com/dcastil/tailwind-merge) | 2.5.3 | Merge Tailwind classes |
| [clsx](https://github.com/lukeed/clsx) | 2.1.1 | Conditional class names |

## UI Components

| Technology | Version | Description |
|------------|---------|-------------|
| [Radix UI](https://www.radix-ui.com/) | Various | Accessible, unstyled UI primitives |
| [Lucide React](https://lucide.dev/) | 0.344.0 | Icon library |
| [@tabler/icons-react](https://tabler-icons.io/) | 2.47.0 | Additional icons |
| [react-simple-icons](https://simpleicons.org/) | 9.3.0 | Brand icons |

### Radix UI Components Used
- `@radix-ui/react-aspect-ratio`
- `@radix-ui/react-avatar`
- `@radix-ui/react-dialog`
- `@radix-ui/react-dropdown-menu`
- `@radix-ui/react-label`
- `@radix-ui/react-navigation-menu`
- `@radix-ui/react-scroll-area`
- `@radix-ui/react-slot`

## Animation

| Technology | Version | Description |
|------------|---------|-------------|
| [Framer Motion](https://www.framer.com/motion/) | 12.23.24 | Animation library |
| [GSAP](https://greensock.com/gsap/) | 3.12.5 | Advanced animations |

## MDX/Markdown Processing

| Technology | Version | Description |
|------------|---------|-------------|
| [unified](https://unifiedjs.com/) | 11.0.5 | Content processing pipeline |
| [remark](https://github.com/remarkjs/remark) | 15.0.1 | Markdown processor |
| [remark-gfm](https://github.com/remarkjs/remark-gfm) | 4.0.1 | GitHub Flavored Markdown |
| [rehype-parse](https://github.com/rehypejs/rehype) | 9.0.1 | HTML parser |
| [rehype-stringify](https://github.com/rehypejs/rehype) | 10.0.1 | HTML serializer |
| [Shiki](https://shiki.matsu.io/) | 1.22.0 | Syntax highlighting |
| [@shikijs/rehype](https://shiki.matsu.io/) | 1.22.0 | Shiki rehype integration |
| [@shikijs/transformers](https://shiki.matsu.io/) | 1.22.0 | Shiki transformers |

## Data Fetching & State

| Technology | Version | Description |
|------------|---------|-------------|
| [SWR](https://swr.vercel.app/) | 2.2.5 | React hooks for data fetching |
| [usehooks-ts](https://usehooks-ts.com/) | 3.1.0 | TypeScript React hooks |

## Forms & Validation

| Technology | Version | Description |
|------------|---------|-------------|
| [Zod](https://zod.dev/) | 3.23.8 | TypeScript-first schema validation |
| [@t3-oss/env-nextjs](https://env.t3.gg/) | 0.9.2 | Type-safe environment variables |

## Integrations

| Technology | Version | Description |
|------------|---------|-------------|
| [@calcom/embed-react](https://cal.com/) | 1.5.3 | Cal.com scheduling embed |
| [@paypal/react-paypal-js](https://paypal.github.io/react-paypal-js/) | 8.7.0 | PayPal integration |
| [react-share](https://github.com/nygardk/react-share) | 5.1.0 | Social sharing buttons |
| [react-qr-code](https://github.com/rosskhanas/react-qr-code) | 2.0.15 | QR code generation |

## Image & Media

| Technology | Version | Description |
|------------|---------|-------------|
| [Sharp](https://sharp.pixelplumbing.com/) | 0.33.3 | Image optimization |
| [react-medium-image-zoom](https://github.com/rpearce/react-medium-image-zoom) | 5.2.10 | Image zoom |

## SEO & Analytics

| Technology | Version | Description |
|------------|---------|-------------|
| [schema-dts](https://github.com/google/schema-dts) | 1.1.2 | Schema.org TypeScript types |
| [@vercel/speed-insights](https://vercel.com/docs/speed-insights) | 1.0.12 | Performance monitoring |
| [rss](https://github.com/dylang/node-rss) | 1.2.2 | RSS feed generation |

## Theming

| Technology | Version | Description |
|------------|---------|-------------|
| [next-themes](https://github.com/pacocoursey/next-themes) | 0.2.1 | Dark/light mode |
| [colord](https://colord.omgovich.ru/) | 2.9.3 | Color manipulation |

## Development Tools

| Technology | Version | Description |
|------------|---------|-------------|
| [ESLint](https://eslint.org/) | 8.57.0 | Code linting |
| [Prettier](https://prettier.io/) | 3.3.3 | Code formatting |
| [concurrently](https://github.com/open-cli-tools/concurrently) | 8.2.2 | Run multiple commands |
| [PostCSS](https://postcss.org/) | 8.x | CSS processing |
| [Autoprefixer](https://autoprefixer.github.io/) | 10.4.20 | CSS vendor prefixes |

### ESLint Plugins
- `eslint-config-next`
- `eslint-config-prettier`
- `eslint-plugin-prettier`
- `eslint-plugin-tailwindcss`
- `eslint-plugin-unused-imports`
- `@typescript-eslint/eslint-plugin`

## Utilities

| Technology | Description |
|------------|-------------|
| [date-fns](https://date-fns.org/) | Date manipulation |
| [gray-matter](https://github.com/jonschlinkert/gray-matter) | Front-matter parsing |
| [github-slugger](https://github.com/Flet/github-slugger) | GitHub-style slugs |
| [slugify](https://github.com/simov/slugify) | URL-safe slugs |
| [sonner](https://sonner.emilkowal.ski/) | Toast notifications |

## Project Structure

```
matteogiardino.com/
├── app/                    # Next.js App Router pages
│   ├── [locale]/           # Internationalized routes
│   │   └── (core)/         # Main site pages
│   └── api/                # API routes
├── components/             # React components
├── config/                 # Site configuration
├── contents/               # MDX content (blog, projects, pages)
├── hooks/                  # Custom React hooks
├── lib/                    # Utility libraries
│   └── mdx/                # MDX processing plugins
├── locales/                # Translation files (it.json, en.json)
├── public/                 # Static assets
├── styles/                 # Global styles
├── types/                  # TypeScript type definitions
└── utils/                  # Helper functions
```

## Scripts

```bash
pnpm dev          # Start development server
pnpm build        # Build for production
pnpm start        # Start production server
pnpm lint         # Run ESLint
pnpm lint:fix     # Fix ESLint errors
pnpm type-check   # Run TypeScript type checking
pnpm format       # Format code with Prettier
pnpm clean        # Clean build artifacts
```

## Deployment

- **Platform**: [Vercel](https://vercel.com/)
- **Build Command**: `contentlayer2 build && next build`
- **Node Version**: >= 18
- **Package Manager**: pnpm >= 8

## Key Features

- **Static Generation (SSG)** with Incremental Static Regeneration (ISR)
- **Server Components** with React 19
- **Turbopack** for fast development builds
- **MDX Content** with syntax highlighting and custom components
- **Multi-language Support** (Italian/English)
- **Dark/Light Mode** theming
- **SEO Optimized** with structured data and sitemap
- **RSS Feed** generation
- **PayPal Integration** for payments
- **Cal.com Integration** for scheduling
