# QVAC SDK Content Strategy & Production Skill — Design Spec

**Date:** 2026-04-26
**Author:** Matteo Giardino (with Claude)
**Goal:** Become the third-party SEO reference for QVAC SDK content. Ship 13 posts × 2 languages (EN + IT) = 26 published pieces, produced by two purpose-built Claude Code skills.

---

## 1. Strategic context

QVAC SDK is Tether's open-source JavaScript SDK for local AI (LLM, ASR, TTS, OCR, translation, image generation, embeddings, on-device LoRA fine-tuning). It launched **April 9, 2026**. As of this spec (April 26, 2026), the SDK is ~17 days old.

**SEO landscape (April 2026):**
- Outside Tether's own properties, third-party English content is essentially nonexistent (~6 articles, mostly crypto press)
- Italian QVAC dev content is **literally zero**
- /r/LocalLLaMA has zero QVAC threads; HN has 2 modest threads (30 + 3 points)
- Empty SERPs for: `QVAC vs Ollama`, `QVAC vs llama.cpp`, `QVAC iOS`, `QVAC Android`, `QVAC RAG`, `QVAC benchmark`, `QVAC Expo`, `QVAC RAG`, `QVAC LoRA fine-tuning`

**Positioning:** SEO-volume play — tech-writer authority, not deep practitioner. The bilingual blog (it/en) already has hreflang and `translationSlug` infrastructure from 87 existing posts.

**Differentiating angles claimed:**
- The drop-in Ollama replacement story (port 11434 + OpenAI-compat server)
- P2P delegated inference (genuinely unique to QVAC)
- On-device LoRA fine-tuning on mobile (Tether's first-mover claim)
- Cross-platform JS-first AI on mobile (iOS Expo + Android)

---

## 2. Decisions locked in

| Decision | Choice | Rationale |
|---|---|---|
| Goal | SEO volume + tech-writer recognition | User stated explicitly |
| Skill mode | Mixed: deep for tutorials, light synthesis for explainers/cookbook | Tutorials need real install/code/screenshots; explainers don't |
| Languages | EN + IT every post (bilingual via `translationSlug`) | Matches existing pattern; Italian SERP is empty so trivial wins |
| Autonomy | C2 — semi-autonomous queue, runs locally on Mac, opens PR | User in the loop on every post initially |
| Content shape | S3 funnel (cornerstones + tutorials + cookbook) — adjusted to 3/8/2 | Tutorial-heavy because empty-SERP tutorial queries outnumbered comparison queries in research |
| Skill architecture | K2 — two skills + shared helpers in `.claude/skills/qvac-shared/` | Tutorial and explainer have genuinely different lifecycles |
| Auto-PR | Yes, at end of SHIP phase | Lower friction; user can close PR if unhappy |
| qvac-facts.md updates | Skill updates autonomously, notes diff in PR description | Avoids stale facts; PR is the review gate |

---

## 3. The 13-post queue

Each post ships in EN + IT. Order = publish order.

### Cornerstones (3 posts) — synthesis mode

1. **What is QVAC SDK? Tether's local AI framework, explained**
   - slug: `what-is-qvac-sdk`
   - keyword: `what is QVAC SDK`
2. **QVAC vs Ollama: which local AI server should you use in 2026?**
   - slug: `qvac-vs-ollama-2026`
   - keyword: `QVAC vs Ollama`
   - light verification: install both, run identical prompt, capture side-by-side
3. **Top 10 Ollama alternatives in 2026 (with QVAC, MLX, llama.cpp, vLLM…)**
   - slug: `ollama-alternatives-2026`
   - keyword: `Ollama alternatives 2026`

### Tutorials (8 posts) — deep mode (install + code + screenshot)

4. **Run a local LLM on your iPhone with QVAC SDK and Expo (2026 guide)**
   - slug: `qvac-iphone-expo-local-llm`
   - keyword: `run local LLM iPhone 2026` + `QVAC iOS Expo`
5. **Build an offline transcription tool with QVAC + Whisper on macOS**
   - slug: `qvac-whisper-offline-transcription-macos`
   - keyword: `QVAC Whisper transcription`
6. **Build a private on-device RAG with QVAC SDK and SQLite-WASM**
   - slug: `qvac-private-rag-sqlite-wasm`
   - keyword: `QVAC RAG` + `local RAG JavaScript`
7. **Local image generation on Mac with QVAC and FLUX.2-klein**
   - slug: `qvac-flux2-image-generation-mac`
   - keyword: `QVAC image generation` + `local image generation Mac`
8. **Drop Ollama: use QVAC's OpenAI-compatible server with Continue.dev**
   - slug: `qvac-openai-server-continue-dev`
   - keyword: `QVAC OpenAI compatible server` + `Ollama replacement`
9. **Fine-tune an LLM on your phone with QVAC's on-device LoRA**
   - slug: `qvac-mobile-lora-fine-tuning`
   - keyword: `on-device LoRA fine-tuning` + `QVAC fine-tune mobile`
10. **P2P delegated AI inference: run QVAC on your laptop from your phone**
    - slug: `qvac-p2p-delegated-inference`
    - keyword: `peer-to-peer AI inference` + `QVAC delegated inference`
11. **Build a real-time translator app with QVAC + Bergamot on Expo**
    - slug: `qvac-bergamot-translator-expo`
    - keyword: `QVAC Bergamot translation` + `on-device translation SDK`

### Cookbook (2 posts) — synthesis mode

12. **Fixing common QVAC install errors on Linux, macOS, and Android**
    - slug: `qvac-install-errors-fixes`
    - keyword: `QVAC install error` + `QVAC vulkaninfo`
13. **Resumable model downloads in QVAC SDK (handling big GGUFs)**
    - slug: `qvac-resumable-model-downloads`
    - keyword: `QVAC sharded model loading` + `QVAC resumable downloads`

**Italian slugs** are derived during writing, recorded in queue, and pointed to via `translationSlug` in frontmatter.

---

## 4. Repo file layout

```
.claude/skills/
├── write-qvac-tutorial/
│   └── SKILL.md
├── write-qvac-explainer/
│   └── SKILL.md
└── qvac-shared/
    ├── frontmatter.md       # exact MDX frontmatter spec from contentlayer.config.ts
    ├── mdx-components.md    # CtaCard, image patterns, when to use each
    ├── seo-checklist.md     # title length, H2 keyword placement, meta rules
    ├── translation-rules.md # EN→IT terminology rules
    ├── qvac-facts.md        # canonical QVAC facts (port, OS matrix, package names)
    └── image-conventions.md # screenshot naming, location, alt text

contents/blog/
├── what-is-qvac-sdk.mdx              # EN
├── cos-e-qvac-sdk.mdx                # IT
└── ...                               # 26 files total when complete

public/images/blog/
├── what-is-qvac-sdk.png              # OG cover image (1200×630)
└── what-is-qvac-sdk/                 # supporting screenshots subfolder
    ├── 01-architecture.png
    └── ...

docs/superpowers/specs/
└── 2026-04-26-qvac-content-strategy-design.md  # this file

dev/qvac/                             # gitignored scratch
├── queue.yaml                        # the post queue (single source of truth)
└── runs/<slug>/                      # per-post sandbox: code, logs, plan, research
    ├── plan.md                       # outline before writing (tutorial mode)
    ├── research.md                   # synthesized facts (explainer mode)
    ├── sandbox/                      # npm install + code lives here
    └── logs/run.log                  # captured stdout/stderr
```

**New convention:** `public/images/blog/<slug>/` subfolder for posts with multiple screenshots. Existing posts (flat) are unaffected — only new QVAC tutorials use subfolders.

---

## 5. Queue file format — `dev/qvac/queue.yaml`

```yaml
- slug: what-is-qvac-sdk
  title_en: "What is QVAC SDK? Tether's local AI framework, explained"
  title_it: "Cos'è il QVAC SDK? Il framework AI locale di Tether, spiegato"
  it_slug: cos-e-qvac-sdk
  type: cornerstone        # cornerstone | tutorial | cookbook
  mode: synthesis          # synthesis | deep
  primary_keyword: "what is QVAC SDK"
  status: pending          # pending | in_progress | drafted | shipped
  pr_url: null
  shipped_at: null
  notes: "First post — establish baseline coverage of capabilities"

# ... 12 more entries
```

The queue is the single source of truth. Both skills read it; both update it.

---

## 6. Skill specifications

### 6.1 `write-qvac-tutorial` — 9 phases

```
1. PICK     → read queue.yaml, claim next pending tutorial-mode post
              flip status: in_progress
2. PLAN     → outline H2 sections, code blocks, required screenshots
              write plan.md to dev/qvac/runs/<slug>/
3. SETUP    → mkdir sandbox, npm init, npm install @qvac/sdk + plugins
4. RUN      → execute example code, capture stdout/stderr
              retry up to 3 times on failure; pause for user help if persistent
5. CAPTURE  → take screenshots (terminal via screencapture, web via browser MCP,
              Expo via xcrun simctl)
              save to public/images/blog/<slug>/
              generate OG image
6. WRITE EN → draft contents/blog/<slug>.mdx using shared frontmatter, real
              code blocks (never invented), real screenshots, CtaCard rules
7. WRITE IT → translate per translation-rules.md, same images, locale: 'it',
              translationSlug pointing at EN slug
8. VALIDATE → run pnpm build, check Contentlayer accepts both files,
              run seo-checklist.md programmatically
9. SHIP     → git checkout -b qvac/<slug>, commit, gh pr create
              flip queue status: drafted, save pr_url
```

### 6.2 `write-qvac-explainer` — 6 phases

```
1. PICK     → same as tutorial
2. RESEARCH → fetch fresh docs (llms-full.txt + qvac.tether.io/blog +
              GitHub release notes)
              cross-reference with qvac-facts.md
              if facts conflict: NEW info wins, update qvac-facts.md
              write research.md
3. WRITE EN → draft MDX from research.md
              SPECIAL CASE qvac-vs-ollama-2026: light install of both,
              capture identical-prompt screenshots
4. WRITE IT → translate
5. VALIDATE → same as tutorial
6. SHIP     → same as tutorial
```

### 6.3 Failure handling (both skills)

| Phase | Failure | Recovery |
|---|---|---|
| SETUP | npm install fails | retry once with `--force`, then ask user |
| RUN | code crashes | read error, fix, retry up to 3x, then pause |
| RUN | output is wrong (model garbage) | don't proceed; ask user (content quality call) |
| CAPTURE | screenshot blank/missing | re-run; if still missing, ship with placeholder + flag in PR |
| VALIDATE | Contentlayer build fails | fix frontmatter, retry; if persistent, abort PR, leave files in tree |
| SHIP | gh pr create fails | leave branch local, log push instructions |
| Anywhere | unexpected state | write `error.md` with full context to run dir, flip queue status back to pending, halt |

### 6.4 Invocation

```
/write-qvac-tutorial         # picks next pending tutorial from queue
/write-qvac-explainer        # picks next pending explainer/cookbook
/write-qvac-tutorial <slug>  # explicit override
```

---

## 7. Shared building blocks — what each file contains

### `qvac-shared/frontmatter.md`
Exact frontmatter contract derived from `contentlayer.config.ts`:
- Required: `title`, `createdAt`, `modifiedAt`, `summary`, `image`, `authorId`
- Optional: `tags` (default `[]`), `locale` (default `'it'`), `translationSlug`
- `authorId: matteo` always (existing convention)
- `summary` ≤ 160 chars (Google meta description cap)
- `tags` for QVAC posts: include `'qvac'`, `'ai'`, plus task-specific (`'llm'`, `'rag'`, `'image-generation'`, etc.)

### `qvac-shared/mdx-components.md`
- `<CtaCard>` usage: 1× mid-post for cornerstones, 2× for tutorials (mid + end), 0× for cookbook
- Primary CTA target: `/contacts` (consulting) — match existing pattern
- Code blocks use Shiki (already configured in repo)
- Image references: relative to `/images/blog/<slug>/` for screenshots, `/images/blog/<slug>.png` for OG

### `qvac-shared/seo-checklist.md`
- Title 50–60 chars, includes primary keyword
- Summary/meta 130–160 chars, includes primary keyword
- H1 = title, H2s include keyword variants
- First paragraph contains primary keyword in first 100 words
- 3+ internal links to other QVAC posts (when available) and 1+ to other blog content
- 2+ outbound links to authoritative sources (Tether docs, GitHub)
- Alt text on every image, includes keyword variant on first image

### `qvac-shared/translation-rules.md`
- Brand and product names stay English: "QVAC SDK", "Ollama", "llama.cpp", "Hyperswarm"
- Technical terms stay English when commonly used in Italian dev community: "fine-tuning", "embedding", "RAG", "inference", "deploy", "endpoint"
- Code, CLI commands, file paths, error messages: never translated
- Italian frontmatter: title and summary translated; tags shared (English) for SEO consistency
- Tone: same as existing Italian posts (informal "tu", direct, no marketing fluff)

### `qvac-shared/qvac-facts.md`
Pinned facts with last-verified date:
- SDK package: `@qvac/sdk` (latest version pinned)
- CLI: `@qvac/cli`, command `qvac`
- OpenAI server port: **11434** (same as Ollama)
- JS runtimes: Node ≥22.17, Bare ≥1.24, Expo ≥54
- OS matrix: macOS 14+ arm64 Metal, iOS 17+ Metal, Linux Ubuntu 22+ Vulkan, Android 12+ Vulkan/OpenCL, Windows 10+ Vulkan
- No browser/WASM target
- License: Apache-2.0
- Genesis dataset: 148B tokens
- Public launch: Plan B Forum Lugano, Oct 2025

Updated by `write-qvac-explainer` when fresh docs reveal changes.

### `qvac-shared/image-conventions.md`
- OG cover: 1200×630 PNG, lives at `/images/blog/<slug>.png`
- Screenshots: 1600×~1000 PNG (compressed), live in `/images/blog/<slug>/`, named `01-thing.png`, `02-thing.png`
- Alt text: descriptive, no "image of" prefix, includes keyword on first image
- Diagrams: simple SVG generated from text description, exported to PNG

---

## 8. Out of scope (explicit non-goals)

- WDK / Bitcoin payment integration content (not yet shipped in `@qvac/sdk` — would be evergreen waste)
- Python QVAC content (Python client doesn't exist yet)
- Browser/WASM QVAC content (not supported by SDK)
- Video content / YouTube tutorials (blog doesn't currently embed video)
- Newsletter / lead-magnet integrations
- Existing post (non-QVAC) maintenance
- A `validate-only` mode for fixing SEO drift on already-published posts
- A third "translation-only" skill (translation lives inside both writer skills)
- Sub-agents / parallelism within a single post (each post is sequential)

---

## 9. Success criteria

- All 13 EN posts + 13 IT posts ship within ~10 weeks at C2 cadence (~1.3 posts/week)
- Each post passes `pnpm build` (Contentlayer + Next.js) before PR opens
- Each tutorial post embeds ≥3 real screenshots from a working QVAC install (not stock or fabricated)
- Each post passes the `seo-checklist.md` programmatic check
- Cornerstone posts (1, 2, 3) ship in week 1 to capture SERP space
- After 3 shipped posts, user upgrades to C3 (scheduled execution) if quality is consistent

---

## 10. Open questions deferred to implementation

These were raised during brainstorming but the user opted to defer in favor of starting:

- Whether to auto-push the branch + open PR, or stop at "branch ready" → defaulted to **auto-PR**
- Whether to add a `validate-only` mode → defaulted to **no, YAGNI**
- Whether the skill updates `qvac-facts.md` autonomously → defaulted to **yes, with PR diff note**
- OG image template → defaulted to **simple text-on-gradient**, revisit when user provides Figma template

These can be revisited after the first 1–2 posts ship.
