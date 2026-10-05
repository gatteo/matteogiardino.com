# Private proposal pages

Client proposals are rendered at `/p/<token>` (Italian) and `/en/p/<token>` (English).
The **content never lives in this repository**: it is a JSON document per
proposal, validated against `lib/proposals/schema.ts`, stored in a private
repository and fetched at request time.

## How it works

-   Route: `app/[locale]/(proposal)/p/[token]/page.tsx`, rendered dynamically.
-   Loader: `lib/proposals/index.ts` reads `<token>.json` from `PROPOSALS_DIR`
    (local development) or from the private GitHub repository named by
    `PROPOSALS_GITHUB_REPO` using `PROPOSALS_GITHUB_TOKEN` (fine-grained PAT,
    read-only on Contents). Results are cached for one minute.
-   Privacy: tokens are `<client-slug>-<12 random chars>`; pages send
    `X-Robots-Tag: noindex`, `Referrer-Policy: no-referrer` and `Cache-Control:
no-store` (see `next.config.mjs`), carry `robots: noindex` metadata, and are
    not listed in the sitemap. An unknown token renders the standard 404.
-   Analytics: a `proposal_viewed` event is sent to PostHog server-side in production.

## Tooling

```bash
pnpm proposal new <client-slug> [--locale it|en]   # scaffold from the private repo's template.json
pnpm proposal check                                 # validate every proposal, print its URL
pnpm proposal url <token>                           # print the shareable URL
```

`PROPOSALS_DIR` is read from `.env.local`.
