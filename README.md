<p align="center">
  <img alt="" src="https://matteogiardino.com/images/og/og.png">
</p>

<h1 align="center">
  matteogiardino.com
</h1>

This repository houses the code for my personal website and blog, where I share my thoughts, projects, and insights. Feel free to explore and get inspired.

## ✨ Features

-   ⚡️ Next.js 14 with App Router (Turbo)
-   📝 MDX
-   🎨 Tailwind CSS - for styling
-   🌈 shadcn/ui & Radix UI - UI components
-   🛡 Strict TypeScript and ESLint configuration
-   📱 Responsive design
-   🌗 Light / Dark mode
-   📈 SEO optimized with meta tags and JSON-LD
-   📰 RSS feed
-   🗺 Sitemap
-   📊 Google Analytics
-   📖 Table of contents for blog posts
-   📷 Image zoom - zoom in on images in blog posts
-   📝 Code syntax highlighting - using Shiki
-   🎨 Animation - using Framer Motion
-   🤖 GitHub Actions for CI/CD
-   🏠 LightHouse score of nearly 100
-   💄 Prettier - code formatting
-   〰️ Prisma - ORM
-   👷🏻‍♂️ t3-env - validate environment variables before building

## 🔨 Requirements

-   Node, recommended `20.x`
-   pnpm, recommended `8.14.0`
-   PostgreSQL, recommended `14.x` (optional if you don't need all the functionalities)
-   [Visual Studio Code](https://code.visualstudio.com/) with [recommended extensions](.vscode/extensions.json)
-   Optionally [React Developer Tools](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=en)

## 👋 Getting Started

Follow these steps to run the project locally on your machine:

```bash
git clone https://github.com/gatteo/matteogiardino.com.git
cd matteogiardino.com
pnpm install
```

Create a `.env.local` file based on the provided `.env.example` file and fill in the necessary variables.

OR you can skip this by modifying `apps/web/src/env.ts`:

```ts
export const env = createEnv({
    skipValidation: true,

    server: {
        // ...
    },
})
```

You may notice that some functionalities will not work properly. But it's okay for learning.

To run the app in development mode:

```bash
pnpm dev
```

The app will be available at `localhost:3000`.

## ✍🏻 Author

[@gatteo](https://github.com/gatteo)

## ❤️ Credits

This project has been has been heavly inspired by [@tszhong0411](https://github.com/tszhong0411) personal website.

## 🪪 License

This project is open source and available under the [MIT License](LICENSE).

<hr>
<p align="center">
Made with ❤️ in Turin (Italy)
</p>
