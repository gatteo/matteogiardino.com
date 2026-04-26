# QVAC Content Production System Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build the production infrastructure (two skills, six shared reference files, a local post queue) so Matteo can run `/write-qvac-explainer` or `/write-qvac-tutorial` and ship the first QVAC blog post end-to-end.

**Architecture:** Two purpose-built Claude Code skills under `.claude/skills/` share a `qvac-shared/` reference folder. A `dev/qvac/queue.yaml` file holds 13 post entries as the single source of truth. Per-post sandboxes live in `dev/qvac/runs/<slug>/`. The skills are self-contained markdown files that Claude reads when invoked; no compiled code, no tests in the classical sense — validation is a parse + frontmatter check at the end.

**Tracking note (per user decision):** Both `.claude/` and `dev/` remain gitignored as-is. The skills, shared refs, and queue are **local-only** — they don't ship in the repo and won't survive a fresh clone. The user accepts this trade-off explicitly. No gitignore changes are part of this plan.

**Tech Stack:** Markdown + YAML for skills and queue. Node ≥22 already required by repo. `js-yaml` is pulled in transitively via Contentlayer (no new deps). Existing repo: Next.js 14, MDX, Contentlayer2, Shiki, Tailwind, pnpm.

**Spec reference:** `docs/superpowers/specs/2026-04-26-qvac-content-strategy-design.md`

---

## File map

**Files to create:**
- `dev/qvac/queue.yaml` — 13 post entries, single source of truth
- `dev/qvac/README.md` — explains the directory layout for future-Matteo
- `.claude/skills/qvac-shared/qvac-facts.md` — pinned QVAC facts
- `.claude/skills/qvac-shared/frontmatter.md` — MDX frontmatter contract
- `.claude/skills/qvac-shared/mdx-components.md` — CtaCard rules, image patterns
- `.claude/skills/qvac-shared/seo-checklist.md` — SEO criteria (LLM-followed)
- `.claude/skills/qvac-shared/translation-rules.md` — EN→IT terminology rules
- `.claude/skills/qvac-shared/image-conventions.md` — screenshot naming/sizing
- `.claude/skills/write-qvac-explainer/SKILL.md` — explainer skill (synthesis mode)
- `.claude/skills/write-qvac-tutorial/SKILL.md` — tutorial skill (deep mode)

**Files to modify:** (none — `.gitignore` stays as-is per user decision)

---

## Phase A — Infrastructure

### Task 1: Verify `.gitignore` is as expected (no changes)

**Files:**
- (none modified)

This task confirms the existing `.gitignore` already covers `.claude/` and `dev/`, which is what we want — the QVAC skills and queue stay local-only by design.

- [ ] **Step 1: Confirm `.claude` and `dev` are ignored**

Run:
```bash
git check-ignore -v .claude/skills/test/SKILL.md
git check-ignore -v dev/qvac/queue.yaml
git check-ignore -v dev/qvac/runs/foo/x.txt
```

Expected: all three commands return `.gitignore:NN:<pattern>  <path>` lines (i.e. all three paths are ignored). No output indicates the path is NOT ignored, which would be wrong.

- [ ] **Step 2: No commit needed**

Nothing changed. Move to Task 2.

---

### Task 2: Create `dev/qvac/queue.yaml` with all 13 posts

**Files:**
- Create: `dev/qvac/queue.yaml`

- [ ] **Step 1: Create `dev/qvac/` directory**

Run: `mkdir -p dev/qvac/runs`

The `runs/` subfolder is gitignored but creating it now documents the convention.

- [ ] **Step 2: Write `dev/qvac/queue.yaml`**

```yaml
# QVAC SDK content queue — single source of truth.
# Read by .claude/skills/write-qvac-explainer and write-qvac-tutorial.
# Status flow: pending → in_progress → drafted → shipped
# (drafted = PR open, shipped = PR merged + URL recorded)

- slug: what-is-qvac-sdk
  it_slug: cos-e-qvac-sdk
  title_en: "What is QVAC SDK? Tether's local AI framework, explained"
  title_it: "Cos'è il QVAC SDK? Il framework AI locale di Tether, spiegato"
  type: cornerstone
  mode: synthesis
  primary_keyword: "what is QVAC SDK"
  status: pending
  pr_url: null
  shipped_at: null
  notes: "First post — establishes baseline coverage of capabilities"

- slug: qvac-vs-ollama-2026
  it_slug: qvac-vs-ollama-2026-confronto
  title_en: "QVAC vs Ollama: which local AI server should you use in 2026?"
  title_it: "QVAC vs Ollama: quale server AI locale usare nel 2026?"
  type: cornerstone
  mode: synthesis
  primary_keyword: "QVAC vs Ollama"
  status: pending
  pr_url: null
  shipped_at: null
  notes: "Light verify mode — install both, run identical prompt, capture side-by-side. Highest priority for SERP grab (empty SERP, both run on port 11434)."

- slug: ollama-alternatives-2026
  it_slug: alternative-a-ollama-2026
  title_en: "Top 10 Ollama alternatives in 2026 (with QVAC, MLX, llama.cpp, vLLM…)"
  title_it: "Le 10 migliori alternative a Ollama nel 2026 (con QVAC, MLX, llama.cpp, vLLM…)"
  type: cornerstone
  mode: synthesis
  primary_keyword: "Ollama alternatives 2026"
  status: pending
  pr_url: null
  shipped_at: null
  notes: "Trojan-horse listicle — slots QVAC into existing high-volume Ollama-alternatives traffic"

- slug: qvac-iphone-expo-local-llm
  it_slug: llm-locale-iphone-qvac-expo
  title_en: "Run a local LLM on your iPhone with QVAC SDK and Expo (2026 guide)"
  title_it: "Far girare un LLM in locale su iPhone con QVAC SDK ed Expo (guida 2026)"
  type: tutorial
  mode: deep
  primary_keyword: "run local LLM iPhone 2026"
  secondary_keywords:
    - "QVAC iOS Expo"
    - "local LLM iOS"
  status: pending
  pr_url: null
  shipped_at: null
  notes: "Empty SERP + adjacent high-volume query bridge. Requires physical iPhone (Expo Go won't work)."

- slug: qvac-whisper-offline-transcription-macos
  it_slug: trascrizione-offline-qvac-whisper-macos
  title_en: "Build an offline transcription tool with QVAC + Whisper on macOS"
  title_it: "Costruire uno strumento di trascrizione offline con QVAC + Whisper su macOS"
  type: tutorial
  mode: deep
  primary_keyword: "QVAC Whisper transcription"
  secondary_keywords:
    - "local speech to text macOS"
  status: pending
  pr_url: null
  shipped_at: null
  notes: "Easy demo — feed a podcast file, paste output. Empty SERP."

- slug: qvac-private-rag-sqlite-wasm
  it_slug: rag-privato-qvac-sqlite-wasm
  title_en: "Build a private on-device RAG with QVAC SDK and SQLite-WASM"
  title_it: "Costruire un RAG privato on-device con QVAC SDK e SQLite-WASM"
  type: tutorial
  mode: deep
  primary_keyword: "QVAC RAG"
  secondary_keywords:
    - "local RAG JavaScript"
    - "private RAG on-device"
  status: pending
  pr_url: null
  shipped_at: null
  notes: "ragChunk/ragIngest/ragSearch demo. Empty SERP, RAG is high-intent."

- slug: qvac-flux2-image-generation-mac
  it_slug: generazione-immagini-locale-qvac-flux2-mac
  title_en: "Local image generation on Mac with QVAC and FLUX.2-klein"
  title_it: "Generazione di immagini in locale su Mac con QVAC e FLUX.2-klein"
  type: tutorial
  mode: deep
  primary_keyword: "QVAC image generation"
  secondary_keywords:
    - "local image generation Mac"
    - "FLUX.2 klein local"
  status: pending
  pr_url: null
  shipped_at: null
  notes: "Visually compelling — generated images make great proof. FLUX.2 needs split VAE + LLM text encoder setup."

- slug: qvac-openai-server-continue-dev
  it_slug: server-openai-locale-qvac-continue-dev
  title_en: "Drop Ollama: use QVAC's OpenAI-compatible server with Continue.dev"
  title_it: "Sostituisci Ollama: usa il server OpenAI-compatibile di QVAC con Continue.dev"
  type: tutorial
  mode: deep
  primary_keyword: "QVAC OpenAI compatible server"
  secondary_keywords:
    - "Ollama replacement"
    - "QVAC Continue.dev"
  status: pending
  pr_url: null
  shipped_at: null
  notes: "qvac serve openai → port 11434 → Continue.dev in VSCode. Drop-in narrative."

- slug: qvac-mobile-lora-fine-tuning
  it_slug: fine-tuning-lora-mobile-qvac
  title_en: "Fine-tune an LLM on your phone with QVAC's on-device LoRA"
  title_it: "Fai fine-tuning di un LLM sul telefono con il LoRA on-device di QVAC"
  type: tutorial
  mode: deep
  primary_keyword: "on-device LoRA fine-tuning"
  secondary_keywords:
    - "QVAC fine-tune mobile"
    - "mobile LoRA training"
  status: pending
  pr_url: null
  shipped_at: null
  notes: "Tether's first-mover claim. SFT JSONL + finetune() with pause/resume. Loss curve screenshot."

- slug: qvac-p2p-delegated-inference
  it_slug: inferenza-p2p-distribuita-qvac
  title_en: "P2P delegated AI inference: run QVAC on your laptop from your phone"
  title_it: "Inferenza AI P2P delegata: far girare QVAC dal laptop al telefono"
  type: tutorial
  mode: deep
  primary_keyword: "peer-to-peer AI inference"
  secondary_keywords:
    - "QVAC delegated inference"
    - "Hyperswarm AI"
  status: pending
  pr_url: null
  shipped_at: null
  notes: "Most unique QVAC angle. Provider/consumer scripts, Hyperswarm topic + public-key auth, fallbackToLocal."

- slug: qvac-bergamot-translator-expo
  it_slug: traduttore-realtime-qvac-bergamot-expo
  title_en: "Build a real-time translator app with QVAC + Bergamot on Expo"
  title_it: "Costruire un traduttore in tempo reale con QVAC + Bergamot su Expo"
  type: tutorial
  mode: deep
  primary_keyword: "QVAC Bergamot translation"
  secondary_keywords:
    - "on-device translation SDK"
  status: pending
  pr_url: null
  shipped_at: null
  notes: "Bergamot plugin, EN↔IT pair, mobile UI screenshot. Empty SERP."

- slug: qvac-install-errors-fixes
  it_slug: errori-installazione-qvac-soluzioni
  title_en: "Fixing common QVAC install errors on Linux, macOS, and Android"
  title_it: "Risolvere gli errori comuni di installazione QVAC su Linux, macOS e Android"
  type: cookbook
  mode: synthesis
  primary_keyword: "QVAC install error"
  secondary_keywords:
    - "QVAC vulkaninfo"
    - "QVAC g++ 13 Linux"
  status: pending
  pr_url: null
  shipped_at: null
  notes: "Troubleshooting matrix — long-tail SEO compounds over time."

- slug: qvac-resumable-model-downloads
  it_slug: download-modelli-ripristinabili-qvac
  title_en: "Resumable model downloads in QVAC SDK (handling big GGUFs)"
  title_it: "Download dei modelli ripristinabili in QVAC SDK (gestire GGUF di grandi dimensioni)"
  type: cookbook
  mode: synthesis
  primary_keyword: "QVAC sharded model loading"
  secondary_keywords:
    - "QVAC resumable downloads"
    - "QVAC big GGUF"
  status: pending
  pr_url: null
  shipped_at: null
  notes: "downloadAsset, sharded GGUF (-00001-of-0000X), cache management."
```

- [ ] **Step 3: Verify YAML parses and has 13 entries**

Run:
```bash
node --input-type=module -e "
import('node:fs').then(fs => fs.promises.readFile('dev/qvac/queue.yaml','utf8'))
  .then(text => import('js-yaml').then(yaml => yaml.load(text)))
  .then(data => {
    if (!Array.isArray(data)) throw new Error('not an array');
    if (data.length !== 13) throw new Error('expected 13 entries, got ' + data.length);
    const required = ['slug','it_slug','title_en','title_it','type','mode','primary_keyword','status'];
    for (const e of data) for (const k of required) if (!(k in e)) throw new Error('missing ' + k + ' in ' + e.slug);
    console.log('OK: ' + data.length + ' entries valid');
  })
  .catch(e => { console.error('FAIL:', e.message); process.exit(1); });
"
```

Expected: `OK: 13 entries valid`

If `js-yaml` import fails, fall back to:
```bash
pnpm add -D js-yaml @types/js-yaml
```
Then re-run. (Contentlayer transitively depends on js-yaml so it should already be in node_modules.)

- [ ] **Step 4: No commit (gitignored)**

`dev/qvac/queue.yaml` is gitignored by design (per user decision). Skip git operations for this task.

---

### Task 3: Create `dev/qvac/README.md`

**Files:**
- Create: `dev/qvac/README.md`

- [ ] **Step 1: Write `dev/qvac/README.md`**

```markdown
# QVAC content production scratch

This directory is the working space for the QVAC SDK content pipeline.

## Files

- `queue.yaml` — **tracked.** The 13-post production queue. Single source of truth for what gets published next. Read by both QVAC writer skills.
- `README.md` — **tracked.** This file.
- `runs/<slug>/` — **gitignored.** Per-post sandbox. Each invocation of a writer skill creates a folder here for that post containing:
  - `plan.md` (tutorials only) — outline written before drafting
  - `research.md` (explainers only) — facts synthesized from fresh QVAC docs
  - `sandbox/` — npm install + example code (tutorials only)
  - `logs/run.log` — captured stdout/stderr from `RUN` phase

## Invocation

From the repo root in Claude Code:

- `/write-qvac-explainer` — picks the next pending `mode: synthesis` post
- `/write-qvac-tutorial` — picks the next pending `mode: deep` post
- Either can take an explicit slug: `/write-qvac-tutorial qvac-flux2-image-generation-mac`

## Status flow

```
pending → in_progress → drafted → shipped
```

- `pending` — not yet started
- `in_progress` — a skill claimed it; sandbox/research dir exists
- `drafted` — MDX written, PR open, `pr_url` populated
- `shipped` — PR merged, `shipped_at` populated

The skill flips status forward; you (or the merge hook) flip it to `shipped` after merge.

## Recovery

If a skill aborts mid-run, it writes `runs/<slug>/error.md` with full context and flips the queue entry back to `pending`. The sandbox stays for inspection.

## Spec

See `docs/superpowers/specs/2026-04-26-qvac-content-strategy-design.md` for the full design rationale.
```

- [ ] **Step 2: No commit (gitignored)**

`dev/qvac/README.md` is gitignored. Skip git operations.

---

## Phase B — Shared reference files

These are read by both skills. Build them before the skills so the skills can reference real files.

### Task 4: Create `qvac-shared/qvac-facts.md`

**Files:**
- Create: `.claude/skills/qvac-shared/qvac-facts.md`

- [ ] **Step 1: Create the directory**

Run: `mkdir -p .claude/skills/qvac-shared`

- [ ] **Step 2: Write `qvac-facts.md`**

```markdown
# QVAC facts — pinned reference

**Last verified:** 2026-04-26
**Source of truth:** https://docs.qvac.tether.io/llms-full.txt

This file is read by both QVAC writer skills. The `write-qvac-explainer` skill updates this file in its RESEARCH phase when fresh docs reveal changes (and notes the diff in its PR description). The `write-qvac-tutorial` skill trusts whatever is here.

## Identity

- **Brand:** QVAC SDK (by Tether)
- **What:** Open-source JavaScript/TypeScript SDK for local AI on every device
- **License:** Apache-2.0
- **Public launch:** October 2025, Plan B Forum Lugano (Paolo Ardoino keynote "Fiat Lux")
- **SDK launch:** April 9, 2026
- **Tagline (theirs):** "One SDK for all of your AI"

## Packages (npm)

- `@qvac/sdk` — the main SDK. One import, all capabilities.
- `@qvac/cli` — the `qvac` command. Includes `qvac bundle sdk` (tree-shaking) and `qvac serve openai` (local OpenAI-compatible HTTP server).

## Network defaults

- **OpenAI-compat server port: 11434** — same default as Ollama. This is intentional and is the basis for the drop-in-replacement story.

## Runtime support

- Node.js ≥ v22.17
- Bare ≥ v1.24 (Holepunch's lightweight JS runtime — addons run in-process here)
- Expo ≥ v54 (mobile; Expo Go does **not** work — must be a dev build with `react-native-bare-kit@^0.11.5`, `bare-pack@^1.5.1`, `expo-file-system`, `expo-build-properties`, `expo-device`)

## Platform support

| Platform | Min version | Architectures | GPU backend | Notes |
|---|---|---|---|---|
| macOS | 14.0+ | arm64 | Metal | x64 is CPU only; Intel iGPU not supported |
| iOS | 17.0+ | arm64 | Metal | Requires Expo; **physical device only** (no simulator) |
| Linux | Ubuntu 22+ | arm64, x64 | Vulkan | requires `g++` ≥ 13, Vulkan loader |
| Android | 12+ | arm64 | Vulkan, OpenCL (Adreno 700+) | Requires Expo; **physical device only** |
| Windows | 10+ | x64 | Vulkan | Vulkan-capable GPU + drivers required |

**No browser / WASM target.** This is a real differentiator vs. transformers.js and web-llm.

## Built-in capabilities and engines

| Capability | Plugin | Underlying engine |
|---|---|---|
| LLM completion (chat, streaming, tool calls, KV cache, multimodal) | `@qvac/sdk/llamacpp-completion/plugin` | `qvac-fabric-llm.cpp` (Tether's llama.cpp fork) |
| Text embeddings | `@qvac/sdk/llamacpp-embedding/plugin` | `qvac-fabric-llm.cpp` |
| Speech-to-text (ASR) | `@qvac/sdk/whispercpp-transcription/plugin` | `qvac-ext-lib-whisper.cpp` |
| ASR with diarization | `@qvac/sdk/parakeet-transcription/plugin` | NVIDIA Parakeet via ONNX Runtime |
| Translation | `@qvac/sdk/nmtcpp-translation/plugin` | Bergamot (Marian) or `qvac-fabric-llm.cpp` |
| Text-to-speech | `@qvac/sdk/onnx-tts/plugin` | ONNX Runtime (Chatterbox, Supertonic) |
| OCR | `@qvac/sdk/onnx-ocr/plugin` | ONNX Runtime (FastText, CRAFT) |
| Image generation | `@qvac/sdk/sdcpp-generation/plugin` | `qvac-ext-stable-diffusion.cpp` |

## Cross-cutting features

- **Model registry** — typed constants (e.g. `LLAMA_3_2_1B_INST_Q4_0`, `WHISPER_TINY`, `BERGAMOT_EN_ES`, `SDXL`, `FLUX_2_KLEIN_4B_Q4_0`). Backed by Hyperdrive on Hyperswarm. ~653 models in v0.9.0.
- **Runtime discovery:** `modelRegistrySearch()`, `modelRegistryList()`, `modelRegistryGetModel()`.
- **P2P delegated inference** — `startQVACProvider()` / `loadModel({ delegate: { topic, providerPublicKey, fallbackToLocal } })`.
- **Blind relays** for NAT/firewall traversal — `swarmRelays` config option.
- **RAG primitives** — `ragChunk`, `ragIngest`, `ragSearch`, `ragSaveEmbeddings`, `ragDeleteEmbeddings`, `ragReindex`, `ragListWorkspaces`, `ragCloseWorkspace`, `ragDeleteWorkspace`. Bring your own vector DB (HyperDB, LanceDB, ChromaDB, SQLite-Vec).
- **Sharded model loading** — for big GGUF (`name-00001-of-0000X.gguf` + `model.tensors.txt`). HTTP/local archives `.tar`, `.tar.gz`, `.tgz`.
- **Resumable downloads** — `downloadAsset()` + `cancel({ operation: "downloadAsset", downloadKey, clearCache })`.
- **On-device LoRA fine-tuning** — `finetune()` with SFT or Causal modes, pause/resume/cancel, `assistantLossOnly: true` for chat JSONL. Outputs a `.gguf` adapter consumed via `modelConfig: { lora: "./artifacts/lora" }`. **Tether claims first-mover on mobile.**
- **Profiler** — `profiler.enable() / .exportSummary() / .exportTable() / .exportJSON()`.
- **Logging** — `getLogger()`, `loggingStream()` with `SDK_LOG_ID`, `loggerLevel`, `loggerConsoleOutput`.
- **Custom plugins** — `definePlugin()`, `defineHandler()`, `defineDuplexHandler()`, two-entrypoint package convention (`.` for client, `./plugin` for Bare worker side), JSON-only payloads.
- **Lifecycle:** `heartbeat()`, `suspend()`, `resume()`, `close()`, `deleteCache()`.
- **Device defaults:** `deviceDefaults` config block to force CPU/GPU per device.

## Compatibility / drop-in

- HTTP server is OpenAI-compatible at `http://localhost:11434/v1/`.
- Verified drop-in for: **Continue.dev**, **LangChain**, **Open Interpreter**.

## Other Tether-side context

- **Genesis Data** — synthetic STEM/logic dataset, 148B tokens (research artifact, separate from SDK).
- **WDK (Wallet Development Kit)** — Tether's marketing pitches QVAC + WDK for "Machine Economy" agents that pay in BTC/USDt. **Not yet in `@qvac/sdk` — do not write content claiming it works.**
- **Companion apps:** QVAC Workbench (desktop chat), QVAC Health, QVAC Translate.

## Update log

| Date | Change | Skill that made the change |
|---|---|---|
| 2026-04-26 | Initial pinning | manual (plan task 4) |
```

- [ ] **Step 3: No commit (gitignored)**

All `.claude/skills/qvac-shared/*.md` files are gitignored. Skip git for the entire Phase B.

---

### Task 5: Create `qvac-shared/frontmatter.md`

**Files:**
- Create: `.claude/skills/qvac-shared/frontmatter.md`

- [ ] **Step 1: Write `frontmatter.md`**

```markdown
# MDX frontmatter contract

Derived from `contentlayer.config.ts` (BlogPost type). Both QVAC writer skills MUST produce frontmatter that matches this contract exactly. Mismatch will cause `pnpm build` to fail in the VALIDATE phase.

## Required fields

| Field | Type | Constraint |
|---|---|---|
| `title` | string | 50–60 chars, includes primary keyword (see seo-checklist.md) |
| `createdAt` | ISO datetime string | format: `'2026-04-26T00:00:00Z'` |
| `modifiedAt` | ISO datetime string | same format; equal to createdAt on first publish |
| `summary` | string | 130–160 chars, includes primary keyword, becomes meta description |
| `image` | string | path to OG cover image, e.g. `'/images/blog/<slug>.png'` |
| `authorId` | string | always `'matteo'` (only author in `config/blog.ts`) |

## Optional fields

| Field | Type | Default | Use |
|---|---|---|---|
| `tags` | string[] | `[]` | always include `'qvac'`, `'ai'`; add task-specific (`'llm'`, `'rag'`, `'image-generation'`, `'transcription'`, `'translation'`, `'mobile'`, `'ios'`, `'android'`, `'electron'`, `'fine-tuning'`, `'p2p'`, `'troubleshooting'`) |
| `locale` | string | `'it'` | MUST be `'en'` for English posts, `'it'` for Italian |
| `translationSlug` | string | absent | the slug of the *other* language version of the same post |

## Examples

**English version:**

```yaml
---
title: "QVAC vs Ollama: which local AI server should you use in 2026?"
createdAt: '2026-04-28T00:00:00Z'
modifiedAt: '2026-04-28T00:00:00Z'
summary: "QVAC and Ollama both run on port 11434 and speak the OpenAI API. Here's when to pick each one in 2026 — feature-by-feature."
image: '/images/blog/qvac-vs-ollama-2026.png'
authorId: matteo
locale: 'en'
tags: ['qvac', 'ai', 'ollama', 'llm', 'local-ai']
translationSlug: 'qvac-vs-ollama-2026-confronto'
---
```

**Italian version (paired):**

```yaml
---
title: "QVAC vs Ollama: quale server AI locale usare nel 2026?"
createdAt: '2026-04-28T00:00:00Z'
modifiedAt: '2026-04-28T00:00:00Z'
summary: "QVAC e Ollama girano entrambi sulla porta 11434 e parlano l'API OpenAI. Ecco quando scegliere ciascuno nel 2026 — feature per feature."
image: '/images/blog/qvac-vs-ollama-2026.png'
authorId: matteo
locale: 'it'
tags: ['qvac', 'ai', 'ollama', 'llm', 'local-ai']
translationSlug: 'qvac-vs-ollama-2026'
---
```

## Critical rules

1. **`translationSlug` MUST point to the OTHER language's slug** — the EN file's `translationSlug` is the IT slug, and vice versa. The hreflang pairing breaks otherwise.
2. **The `image` value is the SAME for both languages** — the OG cover doesn't get translated.
3. **Tags are SHARED (English) across both languages** for SEO consistency. Don't translate tag values.
4. **`createdAt` and `modifiedAt` MUST match between EN and IT** — they were drafted together.
5. **`authorId: matteo`** — always. No quotes around the value (existing posts don't use them).
6. **YAML strings with apostrophes need double quotes** — e.g. `title: "Cos'è il QVAC SDK"` not `title: 'Cos'è il QVAC SDK'`.
7. **`createdAt` value uses today's date** — when the skill runs the post, not the queue entry's creation date.

## What Contentlayer rejects (fatal build errors)

- Missing required field
- Wrong type (e.g. `tags` as a string instead of list)
- Invalid date format (`createdAt: '2026-04-26'` without time/Z)
- Unknown top-level fields (Contentlayer is strict)
```

- [ ] **Step 2: No commit (gitignored)**

---

### Task 6: Create `qvac-shared/mdx-components.md`

**Files:**
- Create: `.claude/skills/qvac-shared/mdx-components.md`

- [ ] **Step 1: Write `mdx-components.md`**

```markdown
# MDX components — usage rules for QVAC posts

The blog uses custom MDX components rendered by `components/blog/` and exposed through the MDX runtime. Skills MUST only use components that the runtime actually accepts — invented components silently fail to render.

## `<CtaCard>` — call-to-action card

Existing pattern (verified across 87 production posts).

**Props:**
- `title` — short headline
- `description` — 1-sentence supporting copy
- `primaryButtonText` — button label
- `primaryButtonUrl` — button destination (internal route)
- `pattern` — visual pattern, one of: `circles`, `dots`, `grid`
- `align` — `center` or `left`

**Usage rules per post type:**

| Post type | Number of CtaCards | Where |
|---|---|---|
| Cornerstone | 1 | mid-post (after first major H2) |
| Tutorial | 2 | mid-post AND near the end (before conclusion) |
| Cookbook | 0 | none — cookbook is utility content; CTAs disrupt the fix-it-and-go flow |

**Standard CTA targets:**

The existing pattern uses `/contacts` (consulting) and `/projects` (portfolio). For QVAC posts:

```jsx
<CtaCard
    title="Need help with AI integration?"
    description="Get in touch for a consultation on implementing local AI in your business."
    primaryButtonText="Contact me"
    primaryButtonUrl="/contacts"
    pattern="circles"
    align="center"
/>
```

For Italian:

```jsx
<CtaCard
    title="Hai bisogno di aiuto con l'integrazione AI?"
    description="Contattami per una consulenza sull'implementazione di AI locale nel tuo business."
    primaryButtonText="Contattami"
    primaryButtonUrl="/contacts"
    pattern="circles"
    align="center"
/>
```

End-of-tutorial CTA can vary the `pattern` for visual interest:

```jsx
<CtaCard
    title="Discover my projects"
    description="Take a look at the projects I'm working on and the technologies I use."
    primaryButtonText="See projects"
    primaryButtonUrl="/projects"
    pattern="dots"
    align="center"
/>
```

## Code blocks

Use plain Markdown fenced code blocks. Shiki highlights them automatically (already configured in `lib/mdx/plugins`). Always specify the language tag.

```ts
import { qvac } from '@qvac/sdk'
```

Do not invent a `<CodeBlock>` component — none exists.

## Images

Plain Markdown:

```markdown
![Alt text including the keyword on the first image](/images/blog/<slug>/01-something.png)
```

The blog already has image-zoom + lazy-loading via repo-wide MDX plugins. No special component needed.

## Tables

Use GitHub-flavored Markdown tables. They render natively. Don't invent a `<Table>` component.

## What NOT to use

- `<CodeBlock>`, `<Code>`, `<Snippet>` — don't exist
- `<Callout>`, `<Warning>`, `<Note>` — don't exist (use blockquotes instead)
- `<Image>` — use Markdown `![]()` syntax; the rehype plugins handle the rest
- `<Video>` — blog doesn't currently embed video

## What to use for emphasis / asides

Plain Markdown blockquotes:

```markdown
> **Note:** QVAC requires Node ≥22.17. If you're on an older Node, the install will succeed but `loadModel()` will throw at runtime.
```
```

- [ ] **Step 2: No commit (gitignored)**

---

### Task 7: Create `qvac-shared/seo-checklist.md`

**Files:**
- Create: `.claude/skills/qvac-shared/seo-checklist.md`

- [ ] **Step 1: Write `seo-checklist.md`**

```markdown
# SEO checklist — followed by both QVAC writer skills in the VALIDATE phase

After drafting EN and IT MDX, the skill self-checks against this list. If any check fails, fix the post BEFORE opening the PR.

## Title

- [ ] 50–60 characters (Google truncates around 60)
- [ ] Includes the post's `primary_keyword` verbatim or in clear keyword variant
- [ ] No clickbait punctuation (no "!!!", no all-caps words)
- [ ] For comparisons / listicles, include the year (e.g. "2026") — this signals freshness

## Summary / meta description (frontmatter `summary` field)

- [ ] 130–160 characters
- [ ] Includes the primary keyword
- [ ] Action-oriented — tells the reader what they'll get
- [ ] Reads as a complete sentence (Google sometimes uses it verbatim as the SERP snippet)

## Heading hierarchy

- [ ] H1 = title (Contentlayer auto-generates this from frontmatter; do NOT also write a `# Title` line in the body)
- [ ] First H2 appears within the first ~250 words
- [ ] At least 50% of H2s contain a keyword variant (primary or secondary keywords from queue.yaml)
- [ ] No H4+ headings (cap at H3) — keeps the TOC scannable

## First paragraph (above the fold)

- [ ] Primary keyword appears in the first 100 words
- [ ] Hooks the reader with the problem, not the brand
- [ ] Promises what the post delivers

## Internal linking

- [ ] At least 3 internal links to other QVAC posts (use `[anchor text](/blog/<slug>)`)
  - For posts shipping early in the queue, fewer QVAC posts exist — in that case, link to the closest available QVAC post (the most recently shipped) and to one non-QVAC post on a related topic
- [ ] At least 1 link to a non-QVAC blog post (cross-pollinates SEO authority)

## Outbound linking

- [ ] At least 2 authoritative outbound links:
  - Always include `https://docs.qvac.tether.io/` (the canonical QVAC docs)
  - For tutorials, also link to the GitHub source (`https://github.com/tetherto/qvac`)
  - For comparisons, link to the competitor's official source
- [ ] Outbound links open in a new tab is HANDLED BY the rehype plugin — no `target="_blank"` markup needed in MDX

## Images

- [ ] Every image has descriptive alt text (no "image of …", no "screenshot of …")
- [ ] First image alt text includes a keyword variant
- [ ] At least 1 OG cover image at `/images/blog/<slug>.png` (1200×630)
- [ ] Tutorials: at least 3 supporting screenshots in `/images/blog/<slug>/`

## Code

- [ ] Every code block has a language tag for Shiki (`ts`, `js`, `bash`, `json`, `yaml`, `tsx`, etc.)
- [ ] Code blocks copy from the run sandbox, never invented or "illustrative"
- [ ] CLI commands are runnable as-is (no `<placeholder>` strings without an explanation)

## Length

| Type | Target word count |
|---|---|
| Cornerstone | 1500–2500 words |
| Tutorial | 1800–3000 words |
| Cookbook | 800–1500 words |

## Tags (frontmatter)

- [ ] Include `'qvac'`, `'ai'` always
- [ ] Add 2–4 task-specific tags
- [ ] Tags are lowercase strings, hyphenated if multi-word
- [ ] Same tags on EN and IT (do not translate tag values)

## Translation pair check

- [ ] EN file's `translationSlug` points to IT slug
- [ ] IT file's `translationSlug` points to EN slug
- [ ] `image` field is identical in both files
- [ ] `createdAt` and `modifiedAt` match
- [ ] `tags` are identical
- [ ] Both files exist in `contents/blog/`

## CtaCard count (per `mdx-components.md`)

- [ ] Cornerstone: exactly 1 CtaCard
- [ ] Tutorial: exactly 2 CtaCards
- [ ] Cookbook: exactly 0 CtaCards

## Build sanity

- [ ] `pnpm build` succeeds (Contentlayer + Next.js)
- [ ] No console warnings about missing images during build
```

- [ ] **Step 2: No commit (gitignored)**

---

### Task 8: Create `qvac-shared/translation-rules.md`

**Files:**
- Create: `.claude/skills/qvac-shared/translation-rules.md`

- [ ] **Step 1: Write `translation-rules.md`**

```markdown
# EN→IT translation rules for QVAC posts

Both QVAC writer skills produce a paired Italian version of every post. Translation is a separate phase — the English version is finalized first, then translated.

## Tone

- **Informal "tu"** (matches existing 87 posts on the blog — never `Lei`).
- **Direct, no marketing fluff.** Match the existing OpenClaw post style: confident, opinionated, technical.
- **First person singular** when sharing experience ("Ho usato…", "Nel mio test…"). Don't pretend the post is from "us" or a team.

## Stays English (do NOT translate)

- Brand and product names: **QVAC**, **QVAC SDK**, **Ollama**, **llama.cpp**, **Hyperswarm**, **Hypercore**, **Bare**, **Holepunch**, **Whisper**, **Bergamot**, **MLX**, **Continue.dev**, **LangChain**, **Open Interpreter**, **Tether**, **iOS**, **Android**, **Expo**, **Electron**, **VSCode**, **Vulkan**, **Metal**, **GitHub**.
- Technical terms commonly used in English in the Italian dev community: **fine-tuning**, **embedding**, **embeddings**, **RAG**, **inference**, **deploy**, **endpoint**, **build**, **release**, **plugin**, **bundle**, **runtime**, **token**, **prompt**, **commit**, **branch**, **pull request**, **stream**, **streaming**, **serverless**, **edge**, **on-device**, **gateway**, **node**.
- Code, CLI commands, file paths, environment variable names, error messages, package names (`@qvac/sdk`, `@qvac/cli`), configuration keys (`qvac.config.ts`).
- Acronyms: LLM, ASR, TTS, OCR, SDK, API, GGUF, LoRA, SFT, NMT, P2P, NAT, GPU, CPU, IP, HTTP, HTTPS.
- Code identifiers: function names, type names, constants — always English (`loadModel`, `LLAMA_3_2_1B_INST_Q4_0`).

## Translates to Italian

- All prose, commentary, explanations
- Frontmatter: `title`, `summary`
- Image alt text
- CtaCard copy (`title`, `description`, `primaryButtonText`)
- Headings (H2, H3) — but technical terms inside the heading still stay English

## Examples

| English | Italian |
|---|---|
| "Let's get started" | "Iniziamo" |
| "Open your terminal and run" | "Apri il terminale ed esegui" |
| "you'll need Node 22 or newer" | "ti servirà Node 22 o superiore" |
| "QVAC's OpenAI-compatible server runs on port 11434" | "Il server OpenAI-compatibile di QVAC gira sulla porta 11434" |
| "fine-tune the model" | "fai fine-tuning del modello" (NOT "metti a punto il modello") |
| "drop-in replacement" | "sostituto drop-in" or "sostituto diretto" (drop-in stays) |
| "Build your first app" | "Costruisci la tua prima app" |

## Italian-specific patterns

- "il modello" not "lo modello"
- "lo SDK" / "l'SDK" depending on phonetics: "lo SDK di Tether" but "Per usare l'SDK"
- Plural anglicisms stay invariant: "i token" (NOT "i tokens"), "gli embedding" (NOT "gli embeddings")
- "P2P" stays as is. Read aloud as "pi-tu-pi".
- Numbers: use commas for decimals (Italian convention) — "2,5 GB" not "2.5 GB" — but ONLY in prose; code/tables keep English convention.

## Frontmatter translation

- `title` → translated. Stay 50–60 chars (Italian is often longer; trim if needed).
- `summary` → translated. Stay 130–160 chars.
- `image` → SAME path (don't translate filenames).
- `tags` → SAME English values (shared SEO).
- `authorId` → SAME (`matteo`).
- `createdAt` / `modifiedAt` → SAME values.
- `locale` → `'it'`.
- `translationSlug` → English slug (the OTHER language).

## Image alt text

Translate the descriptive part; keep technical terms in English.

EN: `Token-streaming response in the Expo iPhone app`
IT: `Risposta in streaming dei token nell'app iPhone di Expo`

## Conclusion / outro

Match the EN structure but feel free to localize idioms. Don't literally translate "Happy hacking" — use "Buon lavoro" or skip.
```

- [ ] **Step 2: No commit (gitignored)**

---

### Task 9: Create `qvac-shared/image-conventions.md`

**Files:**
- Create: `.claude/skills/qvac-shared/image-conventions.md`

- [ ] **Step 1: Write `image-conventions.md`**

```markdown
# Image conventions — file paths, sizing, alt text

Both QVAC writer skills produce images during the CAPTURE phase (or skip image generation for cookbook posts). This file is the contract.

## File locations

```
public/images/blog/
├── <slug>.png                 # OG cover, 1200×630 PNG, REQUIRED for every post
└── <slug>/                    # supporting images, REQUIRED for tutorials only
    ├── 01-<short-name>.png    # numbered to control order in posts
    ├── 02-<short-name>.png
    └── ...
```

The `<slug>/` subfolder is a **new convention** for QVAC posts. Existing flat posts (`/images/blog/foo.png`) are unchanged.

## OG cover image (`<slug>.png`)

- **Size:** 1200×630 (Open Graph spec)
- **Format:** PNG
- **Compression:** lossless OK; under ~300 KB preferred
- **Default style** (until a Figma template is provided):
  - Dark gradient background (e.g. `#0b0b0f → #1a1a2e`)
  - Brand-thin sans-serif title in white
  - QVAC wordmark or "QVAC SDK" badge in upper-left
  - No screenshots — keep it iconic and SERP-friendly
- **Generation method (default):**
  - Skill writes a small SVG with the title text, exports to PNG via `sharp` (already in repo's MDX pipeline) or via a one-shot Node script
  - Alternative: skill uses headless browser + a static HTML template at `dev/qvac/og-template.html` (not yet built — flag this if more than 3 covers need bespoke styling)

## Supporting screenshots (`<slug>/NN-thing.png`)

- **Size:** 1600×~1000 (4:3 or 16:10), trim to content
- **Format:** PNG (JPEG OK for photos like real-device shots; never WebP — your existing pipeline doesn't process it)
- **Compression:** target under 500 KB per image; run `npx @squoosh/cli --oxipng auto -d output input.png` if oversized
- **Naming:** `NN-short-kebab-case.png` where NN is a 2-digit zero-padded ordinal matching the order in which the screenshot appears in the post (e.g. `01-vscode-config.png`, `02-terminal-install.png`, `03-app-running.png`)
- **Capture sources:**
  - macOS terminal/finder: `screencapture -x -R 0,0,1600,1000 path.png` (no shutter sound, region)
  - Browser/Electron app: a Playwright/browser MCP automation, or `screencapture -W path.png` with manual window pick
  - iOS Simulator: `xcrun simctl io booted screenshot path.png`
  - Physical iPhone/Android: skill cannot capture autonomously — flag this in `dev/qvac/runs/<slug>/error.md` and pause for user help; do NOT ship a fabricated screenshot

## Alt text rules

- Descriptive, factual, complete sentence not required
- No "image of …", no "screenshot showing …", no "picture of …" prefixes
- Include a keyword variant on the FIRST image of the post
- Match language: EN alt for EN post, IT alt for IT post (frontmatter `image` is shared, but inline `![alt](path)` text is per-language)

Examples:
- ✅ `![QVAC SDK running Llama 3.2 in an Expo app on iPhone](/images/blog/qvac-iphone-expo-local-llm/03-app-streaming.png)`
- ❌ `![image](/images/blog/qvac-iphone-expo-local-llm/03-app-streaming.png)`
- ❌ `![screenshot of the iPhone app](/images/blog/...)`

## Diagrams (when no real screenshot exists)

- Tool: hand-write SVG for simple architecture diagrams; export to PNG at the same dimensions as a screenshot (1600×1000)
- Color palette: match repo's existing dark-mode palette — derive colors from `tailwind.config.ts` if needed
- For complex flowcharts, use Mermaid in a fenced ```mermaid``` block — repo's MDX pipeline does NOT currently render Mermaid client-side, so render to SVG/PNG before embedding
- Naming: still follow the `NN-short-name.png` pattern in `<slug>/`

## Fallback when CAPTURE fails

If a real screenshot cannot be obtained (e.g. physical-device shot needed but user is unavailable, or rendering fails), DO NOT ship a fabricated image. Instead:
1. Embed a Mermaid/SVG diagram or a plain text-on-gradient placeholder
2. Add a `<!-- TODO: real screenshot of <description> -->` comment in the MDX
3. Flag in the PR description: "Screenshot N replaced with placeholder — needs human capture before merge"
```

- [ ] **Step 2: No commit (gitignored)**

---

## Phase C — The two skills

Both skills are self-contained markdown files. They reference (read) the shared files but don't import them in any compiled sense — Claude reads the SKILL.md, then reads referenced shared files when needed.

### Task 10: Create `write-qvac-explainer/SKILL.md`

**Files:**
- Create: `.claude/skills/write-qvac-explainer/SKILL.md`

- [ ] **Step 1: Create the directory**

Run: `mkdir -p .claude/skills/write-qvac-explainer`

- [ ] **Step 2: Write `SKILL.md`**

```markdown
---
name: write-qvac-explainer
description: Use when the user runs `/write-qvac-explainer` (with or without an explicit slug arg) to produce a synthesis-mode QVAC SDK blog post (cornerstone or cookbook). The skill reads dev/qvac/queue.yaml, claims the next pending synthesis-mode entry, fetches fresh QVAC docs, drafts EN + IT MDX, validates with pnpm build, and opens a PR. Triggers ONLY for QVAC SDK content production on this repo.
metadata:
  author: Matteo Giardino
  version: 1.0.0
---

# write-qvac-explainer — produce a QVAC SDK explainer or cookbook post

You are about to ship a QVAC SDK blog post in **synthesis mode**: research-driven, no QVAC install needed (with one exception below). The output is a paired EN + IT MDX in `contents/blog/`, supporting images in `public/images/blog/<slug>/`, and a GitHub PR.

## Required reading (in order, before doing anything else)

1. `.claude/skills/qvac-shared/qvac-facts.md` — pinned facts; this is your ground truth
2. `.claude/skills/qvac-shared/frontmatter.md` — exact frontmatter contract
3. `.claude/skills/qvac-shared/mdx-components.md` — what `<CtaCard>` etc. look like
4. `.claude/skills/qvac-shared/seo-checklist.md` — your VALIDATE phase checklist
5. `.claude/skills/qvac-shared/translation-rules.md` — EN→IT rules
6. `.claude/skills/qvac-shared/image-conventions.md` — image paths and sizing

If any of these files are missing, STOP and report a setup error — do not proceed.

## Phase 1 — PICK

1. Parse `dev/qvac/queue.yaml`.
2. If the user passed an explicit slug arg, find that entry. Otherwise, pick the FIRST entry where `status: pending` AND `mode: synthesis`.
3. If no candidate exists, output: "No pending synthesis-mode posts in queue. Use /write-qvac-tutorial for deep-mode posts." and STOP.
4. Flip the entry's status to `in_progress` and write the queue back. Use a YAML library (the project has `js-yaml` available transitively) to preserve formatting.
5. Create the run directory: `mkdir -p dev/qvac/runs/<slug>`.

## Phase 2 — RESEARCH

1. WebFetch (or curl + cache) these URLs in order:
   - `https://docs.qvac.tether.io/llms-full.txt` (THE source of truth)
   - `https://qvac.tether.io/blog/` (latest posts; ignore older than 90 days)
   - `https://github.com/tetherto/qvac/releases` (most recent release notes)
2. Write `dev/qvac/runs/<slug>/research.md` with the synthesized facts. Include:
   - All quotes/excerpts that will inform code blocks, feature claims, or comparisons
   - Source URLs next to each fact for citation
   - A version pin (`@qvac/sdk@<version>` from latest npm or release notes)
3. Cross-check against `qvac-shared/qvac-facts.md`. If you find a NEW fact that contradicts (or fills a gap in) the pinned reference:
   - Update `qvac-shared/qvac-facts.md` (append a row to the "Update log" table at the bottom with today's date and what changed)
   - Note the diff in the PR description later
4. **SPECIAL CASE — slug `qvac-vs-ollama-2026`:** This explainer needs light verification. Do this lightweight install in the run sandbox (`dev/qvac/runs/qvac-vs-ollama-2026/sandbox/`):
   - `npm init -y && npm install @qvac/sdk @qvac/cli`
   - Install Ollama via `brew install ollama` (or check if already installed; do not install if Brew unavailable — fall back to documenting Ollama's installer URL)
   - Run an identical prompt against both via `curl http://localhost:11434/v1/chat/completions` (one server at a time — both default to 11434)
   - Capture the JSON output of each into `research.md`
   - Take ONE screencap of each terminal session via `screencapture` and save to `public/images/blog/qvac-vs-ollama-2026/01-qvac-response.png` and `02-ollama-response.png`

## Phase 3 — WRITE EN

1. Draft `contents/blog/<slug>.mdx`. Use the frontmatter contract from `frontmatter.md` exactly. `createdAt: '<today>T00:00:00Z'` (today, not the queue creation date).
2. Body structure for cornerstones:
   - 1-paragraph hook (problem framing, not brand-pitching)
   - Section 1: What it is / context (H2)
   - Section 2: Core capabilities or comparison matrix (H2 + tables/sub-H3s)
   - Mid-post `<CtaCard>` (per `mdx-components.md` rules)
   - Section 3: When to use / how to choose / decision criteria (H2)
   - Conclusion: 2-paragraph wrap, link to docs, optional next-post teaser
3. Body structure for cookbooks:
   - 1-paragraph hook (the symptom or task)
   - Solution(s) as numbered steps with code blocks
   - Edge cases / gotchas (H3 under a "Common pitfalls" H2)
   - One-paragraph close (no CtaCard for cookbook)
4. Code blocks: use the canonical examples from `qvac-facts.md`. NEVER invent function names or APIs.
5. Run the SEO checklist (`seo-checklist.md`) on this draft. Fix any issue inline before moving on.

## Phase 4 — WRITE IT

1. Translate to `contents/blog/<it-slug>.mdx` per `translation-rules.md`.
2. Frontmatter: same `image`, `tags`, `createdAt`, `modifiedAt`; `locale: 'it'`; `translationSlug: <EN slug>`.
3. Update the EN file's `translationSlug` to point to the IT slug. Both files must round-trip.
4. Re-run the SEO checklist on the IT file.

## Phase 5 — VALIDATE

1. `pnpm build` from repo root. Expected: Contentlayer builds, Next.js builds, no errors.
2. If build fails:
   - Read the error
   - Fix the frontmatter or content
   - Re-run build
   - If 3 attempts fail, write `dev/qvac/runs/<slug>/error.md` with the error and full context, flip queue status back to `pending`, and STOP.
3. Programmatically check the SEO checklist items that are mechanical:
   - Title length (50–60 chars)
   - Summary length (130–160 chars)
   - First-100-words contains primary_keyword
   - Each MDX has its `translationSlug` pointing to the correct counterpart
4. Manually review (you, the LLM) the editorial items: hook quality, code-block correctness, CTA placement.

## Phase 6 — SHIP

1. `git checkout -b qvac/<slug>` from `main`.
2. Stage these files (and ONLY these — no scratch from `dev/qvac/runs/`, which is gitignored anyway):
   - `contents/blog/<slug>.mdx`
   - `contents/blog/<it-slug>.mdx`
   - `public/images/blog/<slug>.png`
   - `public/images/blog/<slug>/` (if exists)
   - `.claude/skills/qvac-shared/qvac-facts.md` (if updated in Phase 2)
   - `dev/qvac/queue.yaml` (the status flip)
3. Commit with message:
   ```
   feat(blog): add <slug> (EN + IT)

   QVAC SDK <type> on <primary_keyword>. Synthesized from official docs
   on <today>. Italian counterpart at contents/blog/<it-slug>.mdx.
   ```
4. `gh pr create --base main --head qvac/<slug>` with a body that includes:
   - Summary of both posts (1 sentence each)
   - List of any `qvac-facts.md` changes ("Updated: ...")
   - Any flagged issues from CAPTURE/VALIDATE phases
   - "## Test plan" checklist: verify build, verify hreflang pair, eyeball the prose
5. Capture the PR URL from `gh pr create` output.
6. Flip the queue entry's `status` to `drafted` and set `pr_url` to the captured URL. Write the queue back.
7. Output a final report:
   ```
   ✓ Drafted: <slug> + <it-slug>
   ✓ PR: <pr_url>
   Next pending synthesis post: <next slug or "none">
   ```

## Failure handling (any phase)

| Phase | Failure | Recovery |
|---|---|---|
| RESEARCH | WebFetch returns 4xx/5xx | retry with exponential backoff up to 3x; on persistent failure, fall back to `qvac-facts.md` only and note "fresh fetch failed" in PR |
| RESEARCH | docs.qvac.tether.io schema changed in a way that breaks parsing | write `error.md`, flip status back to `pending`, STOP |
| WRITE | LLM produces hallucinated API name (cross-check fails against qvac-facts.md) | re-write that section; if it keeps drifting, STOP and ask user |
| VALIDATE | `pnpm build` fails persistently | per Phase 5 step 2 |
| SHIP | `gh pr create` fails (auth, rate limit, etc.) | leave branch local, log explicit `git push` + `gh pr create` instructions in run dir |
| Anywhere | unexpected state | write `dev/qvac/runs/<slug>/error.md` with full context, flip queue status back to `pending`, STOP |

## Hard rules

- Never invent QVAC API names or function signatures. If you don't see it in `qvac-facts.md` or `research.md`, you don't write it.
- Never fabricate screenshots. Use real captures or labeled placeholders per `image-conventions.md`.
- Never modify existing (non-QVAC) blog posts.
- Never use `git push --force` or `git reset --hard`.
- Never skip the VALIDATE phase, even if "it looks fine".
- Never ship a post whose Italian counterpart is missing.
```

- [ ] **Step 3: Verify the skill file**

Run:
```bash
test -f .claude/skills/write-qvac-explainer/SKILL.md && \
  head -10 .claude/skills/write-qvac-explainer/SKILL.md
```

Expected: prints the YAML frontmatter starting with `---` and `name: write-qvac-explainer`.

- [ ] **Step 4: No commit (gitignored)**

---

### Task 11: Create `write-qvac-tutorial/SKILL.md`

**Files:**
- Create: `.claude/skills/write-qvac-tutorial/SKILL.md`

- [ ] **Step 1: Create the directory**

Run: `mkdir -p .claude/skills/write-qvac-tutorial`

- [ ] **Step 2: Write `SKILL.md`**

```markdown
---
name: write-qvac-tutorial
description: Use when the user runs `/write-qvac-tutorial` (with or without an explicit slug arg) to produce a deep-mode QVAC SDK tutorial post. The skill reads dev/qvac/queue.yaml, claims the next pending tutorial-mode entry, installs @qvac/sdk in a sandbox, runs example code, captures real screenshots, drafts EN + IT MDX with real artifacts, validates via pnpm build, and opens a PR. Triggers ONLY for QVAC SDK tutorial production on this repo.
metadata:
  author: Matteo Giardino
  version: 1.0.0
---

# write-qvac-tutorial — produce a QVAC SDK hands-on tutorial

You are about to ship a QVAC SDK tutorial in **deep mode**: install the SDK, write code, run it, capture real screenshots, document what actually happened. The output is a paired EN + IT MDX in `contents/blog/`, real screenshots in `public/images/blog/<slug>/`, and a GitHub PR.

## Required reading (in order, before doing anything else)

1. `.claude/skills/qvac-shared/qvac-facts.md` — pinned facts; this is your ground truth
2. `.claude/skills/qvac-shared/frontmatter.md` — exact frontmatter contract
3. `.claude/skills/qvac-shared/mdx-components.md` — what `<CtaCard>` etc. look like
4. `.claude/skills/qvac-shared/seo-checklist.md` — your VALIDATE phase checklist
5. `.claude/skills/qvac-shared/translation-rules.md` — EN→IT rules
6. `.claude/skills/qvac-shared/image-conventions.md` — screenshot paths and sizing

If any of these files are missing, STOP and report a setup error — do not proceed.

## Phase 1 — PICK

1. Parse `dev/qvac/queue.yaml`.
2. If the user passed an explicit slug arg, find that entry. Otherwise, pick the FIRST entry where `status: pending` AND `mode: deep`.
3. If no candidate exists, output: "No pending deep-mode tutorials in queue. Use /write-qvac-explainer for synthesis-mode posts." and STOP.
4. Flip the entry's status to `in_progress` and write the queue back.
5. Create the run directory: `mkdir -p dev/qvac/runs/<slug>/{sandbox,logs}`.

## Phase 2 — PLAN

1. Read `qvac-facts.md` — identify which plugin(s) and APIs the tutorial will use.
2. Draft `dev/qvac/runs/<slug>/plan.md` with:
   - One-paragraph framing of what the reader will build
   - Outline of H2 sections (typically: Prerequisites, Setup, Step 1…N, Running it, Where to go next)
   - List of code blocks: file path, language, what it does
   - List of required screenshots with descriptions and capture method
2. STOP if the plan reveals the tutorial requires a physical iOS/Android device that you cannot access — write `error.md`, flip status to `pending`, ask user.

## Phase 3 — SETUP

1. `cd dev/qvac/runs/<slug>/sandbox`
2. `npm init -y` (silently)
3. Read `qvac-facts.md` for the current `@qvac/sdk` version. Install:
   ```bash
   npm install @qvac/sdk
   ```
   Plus any plugin packages the post needs (most are sub-paths of `@qvac/sdk` so no extra installs; check the plan).
4. For tutorials that need Expo / Electron / a specific framework, follow the official QVAC tutorial steps cited in `qvac-facts.md` (e.g. `npx create-expo-app@latest --template blank-typescript@sdk-54`).
5. Capture install output to `dev/qvac/runs/<slug>/logs/install.log`.
6. **Failure handling:**
   - If `npm install` fails with a peer-dep / native-build error: retry once with `--force`. If still fails, append the error to `error.md` and STOP.
   - If a required model is too large to download in a reasonable time (>2 GB or >10 min on this machine): use the smallest model in the model registry that demonstrates the same point (e.g. `LLAMA_3_2_1B_INST_Q4_0` instead of a 7B model) and note the substitution in the post.

## Phase 4 — RUN

1. Write the example code per the plan into `dev/qvac/runs/<slug>/sandbox/`. Filenames matter — the post will reference them.
2. Execute, capturing all output:
   ```bash
   node sandbox/<entrypoint>.mjs 2>&1 | tee dev/qvac/runs/<slug>/logs/run.log
   ```
3. **Failure handling:**
   - On crash: read the error, fix the code (your sandbox is editable), re-run. Max 3 attempts.
   - On 3 failures: write `error.md` with the full log, flip status to `pending`, STOP and surface the issue to the user.
   - On garbage / wrong output (e.g. model returns gibberish): do NOT push through. STOP and ask the user — this is a content quality call.

## Phase 5 — CAPTURE

1. Take screenshots per the plan. Save to `public/images/blog/<slug>/` with names `01-thing.png`, `02-thing.png`, … per `image-conventions.md`.
2. **Sources by tutorial type:**
   - Terminal-only tutorials: `screencapture -x -R 0,0,1600,1000 public/images/blog/<slug>/NN-thing.png` after framing the relevant terminal window. Or use `script` to record a session and convert to PNG.
   - Electron/web app tutorials: launch the app via the official tutorial command (`electron-vite dev -- --no-sandbox` for the Electron one, etc.). Use a browser MCP, Playwright, or `screencapture -W` with manual window focus to capture.
   - iOS/Android tutorials with simulator: `xcrun simctl io booted screenshot public/images/blog/<slug>/NN-thing.png`.
   - iOS/Android tutorials with physical device: you cannot autonomously capture. Fall back per `image-conventions.md` (placeholder + flag in PR).
3. Generate the OG cover at `public/images/blog/<slug>.png` (1200×630). Default style is text-on-gradient — write SVG and rasterize with `sharp` (already in `node_modules` via repo) or any working method. Do NOT skip the OG cover.
4. Verify each image opens and is non-zero-bytes.

## Phase 6 — WRITE EN

1. Draft `contents/blog/<slug>.mdx` per the plan. Use the frontmatter contract from `frontmatter.md`. `createdAt: '<today>T00:00:00Z'`.
2. Body structure for tutorials:
   - 1-paragraph hook (what you'll build, what it costs, what's hard about it without QVAC)
   - "Prerequisites" H2 (Node version, OS, hardware, accounts)
   - "Setup" H2 (install commands as runnable bash blocks)
   - Steps 1…N as H2 sections, each with:
     - Short framing
     - Code block(s) — copy from `dev/qvac/runs/<slug>/sandbox/` files VERBATIM, never invent
     - Screenshot embedded after the code block where helpful
   - Mid-post `<CtaCard>` (per `mdx-components.md`)
   - "Running it" H2 — show the actual output (paste from `logs/run.log`)
   - "Where to go next" H2 — link to related QVAC posts and to docs
   - End-of-post `<CtaCard>` (per `mdx-components.md`)
3. Code blocks: every snippet MUST appear in your run sandbox. If you wrote prose claiming a function exists, grep the sandbox to verify before commit.
4. Run the SEO checklist (`seo-checklist.md`). Fix issues inline.

## Phase 7 — WRITE IT

1. Translate to `contents/blog/<it-slug>.mdx` per `translation-rules.md`.
2. Same `image`, `tags`, `createdAt`, `modifiedAt`. `locale: 'it'`. `translationSlug: <EN slug>`.
3. Update the EN file's `translationSlug` to point to the IT slug.
4. The IT post embeds the SAME image paths — do not duplicate images.
5. Re-run the SEO checklist on the IT file.

## Phase 8 — VALIDATE

1. `pnpm build` from repo root. Expected: Contentlayer + Next.js build cleanly.
2. If build fails: read error, fix frontmatter or MDX, retry. Max 3 attempts. On persistent failure, write `error.md`, flip status to `pending`, STOP.
3. Programmatic SEO checks:
   - Title length, summary length, primary keyword in first 100 words
   - Both files exist; `translationSlug` round-trips
   - Every referenced image file exists on disk
   - Every code block has a language tag
4. Manual review (you, LLM): hook strength, code accuracy vs sandbox, screenshot fit.

## Phase 9 — SHIP

1. `git checkout -b qvac/<slug>` from `main`.
2. Stage:
   - `contents/blog/<slug>.mdx`
   - `contents/blog/<it-slug>.mdx`
   - `public/images/blog/<slug>.png`
   - `public/images/blog/<slug>/` (entire directory)
   - `dev/qvac/queue.yaml` (status flip)
   - `.claude/skills/qvac-shared/qvac-facts.md` (only if updated)
3. Commit:
   ```
   feat(blog): add <slug> tutorial (EN + IT)

   Hands-on QVAC SDK tutorial on <primary_keyword>. Code, output, and
   screenshots produced from a real install on <today>. Italian counterpart
   at contents/blog/<it-slug>.mdx.
   ```
4. `gh pr create --base main --head qvac/<slug>` with a body that includes:
   - One-line summary of what the tutorial builds
   - List of capabilities/plugins exercised
   - Any placeholder screenshots that need human capture
   - "## Test plan": pull, install, follow the tutorial start-to-finish to verify code is runnable
5. Capture the PR URL.
6. Flip queue entry to `status: drafted` and set `pr_url`.
7. Output:
   ```
   ✓ Drafted: <slug> + <it-slug> (tutorial)
   ✓ PR: <pr_url>
   ✓ Sandbox: dev/qvac/runs/<slug>/sandbox (kept for reference; gitignored)
   Next pending tutorial: <next slug or "none">
   ```

## Failure handling

Same as `write-qvac-explainer`, plus:

| Phase | Failure | Recovery |
|---|---|---|
| SETUP | npm install fails | retry once with `--force`, then write error.md, flip to pending, STOP |
| RUN | code crashes 3x | write error.md with full log, flip to pending, STOP |
| RUN | output is wrong (model garbage) | STOP and ask the user — content quality call |
| CAPTURE | screenshot blank/missing/cannot-capture | use placeholder per image-conventions.md, flag in PR |
| Anywhere | unexpected state | write error.md, flip to pending, STOP |

## Hard rules

- Code blocks are real — they exist in `dev/qvac/runs/<slug>/sandbox/`. If a section claims `qvac.do_thing()`, the sandbox proves `qvac.do_thing()` exists and runs. No invented APIs.
- Screenshots are real (or labeled placeholders). Never fabricated.
- Never modify existing (non-QVAC) blog posts.
- Never `git push --force` or `git reset --hard`.
- Never skip VALIDATE.
- Never ship without the IT counterpart.
- The sandbox stays after shipping (gitignored, but on disk) — useful for reproducing or extending the tutorial later.
```

- [ ] **Step 3: Verify the skill file**

Run:
```bash
test -f .claude/skills/write-qvac-tutorial/SKILL.md && \
  head -10 .claude/skills/write-qvac-tutorial/SKILL.md
```

Expected: prints YAML frontmatter starting with `---` and `name: write-qvac-tutorial`.

- [ ] **Step 4: No commit (gitignored)**

---

## Phase D — Validation

### Task 12: End-to-end smoke test

**Files:**
- (no new files)

- [ ] **Step 1: Verify all expected files exist**

Run this single bash check:
```bash
for f in \
  dev/qvac/queue.yaml \
  dev/qvac/README.md \
  .claude/skills/qvac-shared/qvac-facts.md \
  .claude/skills/qvac-shared/frontmatter.md \
  .claude/skills/qvac-shared/mdx-components.md \
  .claude/skills/qvac-shared/seo-checklist.md \
  .claude/skills/qvac-shared/translation-rules.md \
  .claude/skills/qvac-shared/image-conventions.md \
  .claude/skills/write-qvac-explainer/SKILL.md \
  .claude/skills/write-qvac-tutorial/SKILL.md; do
  test -f "$f" || echo "MISSING: $f"
done
echo "done"
```

Expected: only the line `done`. Any `MISSING:` line means a previous task wasn't completed.

- [ ] **Step 2: Verify SKILL.md frontmatter parses**

Run:
```bash
node --input-type=module -e "
const fs = await import('node:fs/promises');
const yaml = (await import('js-yaml')).default;
for (const path of ['.claude/skills/write-qvac-explainer/SKILL.md', '.claude/skills/write-qvac-tutorial/SKILL.md']) {
  const text = await fs.readFile(path, 'utf8');
  const m = text.match(/^---\n([\s\S]*?)\n---\n/);
  if (!m) { console.error('NO FRONTMATTER:', path); process.exit(1); }
  const fm = yaml.load(m[1]);
  if (!fm.name || !fm.description) { console.error('MISSING name/description:', path); process.exit(1); }
  console.log('OK:', path, '(' + fm.name + ')');
}
"
```

Expected:
```
OK: .claude/skills/write-qvac-explainer/SKILL.md (write-qvac-explainer)
OK: .claude/skills/write-qvac-tutorial/SKILL.md (write-qvac-tutorial)
```

- [ ] **Step 3: Verify nothing leaked into git tracking**

Run:
```bash
git ls-files dev/qvac/ .claude/skills/
```

Expected output: empty (these paths are gitignored by design). If anything appears, it means a file was force-added — investigate before continuing.

- [ ] **Step 4: Verify the existing build still passes**

Run: `pnpm build`

Expected: existing build succeeds (no QVAC posts yet, so we're just confirming we didn't accidentally break Contentlayer or Next.js).

If build fails, the error is unrelated to our changes (we only touched markdown/yaml/gitignore). Report and STOP.

- [ ] **Step 5: Verify Claude Code can see the skills**

This is a manual check — restart Claude Code in this repo and confirm both skills appear in the available-skills list with names `write-qvac-explainer` and `write-qvac-tutorial`. (Skills load on session start; a running session will not pick them up automatically.)

- [ ] **Step 6: Done**

Nothing to commit (everything is gitignored). System is ready — Matteo can now run `/write-qvac-explainer` or `/write-qvac-tutorial` to ship the first post.

---

## Self-review checklist (engineer reads before claiming done)

- [ ] All 13 queue entries have all 8 required fields
- [ ] Nothing under `.claude/` or `dev/qvac/` is tracked by git (`git ls-files` returns empty for those paths)
- [ ] Both SKILL.md files have valid YAML frontmatter with `name` and `description`
- [ ] Both SKILL.md files reference all six shared files by exact path
- [ ] All six shared files exist on disk
- [ ] `pnpm build` passes (no regression)
- [ ] No `.env*` files were accidentally staged

---

## Out of scope for this plan

Per the spec, the following are deliberately NOT in this plan:

- Writing any of the 13 actual blog posts (that's done by running the skills, not by building them)
- Building a `validate-only` SEO checker mode
- Building a separate translation-only skill
- Sub-agent dispatch within a single post
- WDK / Bitcoin payment content
- Python QVAC content
- Browser/WASM QVAC content

These appear in the spec's "Out of scope" section and remain there.
