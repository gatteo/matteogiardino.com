// Query-string key used by /blog to filter by a canonical tag (shared between
// the server-rendered post header and the client-side filter chips).
export const TAG_QUERY_PARAM = 'tag'

// Canonicalizes raw tags from blog frontmatter / substack into a smaller set of
// display buckets. Any tag not listed here is shown as-is (lowercased).
export const tagAliases: Record<string, string> = {
    // ai agents — specific frameworks and variants roll up here
    'ai-agents': 'ai agents',
    'multi-agent': 'ai agents',
    'multi-agente': 'ai agents',
    'agenti ai': 'ai agents',
    'agenti-ai': 'ai agents',
    crewai: 'ai agents',
    autogpt: 'ai agents',
    langchain: 'ai agents',

    // llm — providers, runtimes and local variants
    'local-llm': 'llm',
    'local llm': 'llm',
    'local ai': 'llm',
    ollama: 'llm',
    openrouter: 'llm',
    gemini: 'llm',
    qwen: 'llm',
    'free models': 'llm',
    'modelli gratuiti': 'llm',
    free: 'llm',
    gratis: 'llm',
    rag: 'llm',
    multilingual: 'llm',
    'vector database': 'llm',

    // machine learning
    'reinforcement learning': 'machine learning',

    // automation — workflow and browser automation live here
    workflow: 'automation',
    'browser automation': 'automation',
    'browser-automation': 'automation',
    'web scraping': 'automation',

    // business — anyone reading this wants "is this relevant for my company?"
    enterprise: 'business',
    sme: 'business',
    roi: 'business',
    'cost optimization': 'business',
    'ottimizzazione costi': 'business',
    cto: 'business',
    'fractional cto': 'business',
    'customer service': 'business',
    'assistenza clienti': 'business',
    startup: 'business',
    imprenditoria: 'business',
    impresa: 'business',
    exit: 'business',
    produttività: 'business',

    // email
    himalaya: 'email',

    // developer tools — terminals, mcp, docker, debugging, code intelligence
    cli: 'developer tools',
    tui: 'developer tools',
    terminal: 'developer tools',
    termux: 'developer tools',
    mcp: 'developer tools',
    docker: 'developer tools',
    python: 'developer tools',
    debugging: 'developer tools',
    troubleshooting: 'developer tools',
    'code-maintenance': 'developer tools',
    'repository-intelligence': 'developer tools',
    comparison: 'developer tools',
    benchmark: 'developer tools',
    test: 'developer tools',

    // web & frontend development
    development: 'web development',
    sviluppo: 'web development',
    'sviluppo web': 'web development',
    frontend: 'web development',
    'frontend development': 'web development',
    'next.js': 'web development',
    react: 'web development',
    angular: 'web development',
    tailwindcss: 'web development',
    framework: 'web development',

    // cloud & hosting
    aws: 'cloud',
    vps: 'cloud',
    hostinger: 'cloud',

    // hardware
    esp32: 'hardware',
    embedded: 'hardware',
    nvidia: 'hardware',

    // platforms (OS)
    linux: 'platforms',
    macos: 'platforms',
    android: 'platforms',
    chrome: 'platforms',

    // security
    privacy: 'security',

    // voice
    'text-to-speech': 'voice',
    'voice cloning': 'voice',

    // openclaw ecosystem
    metaclaw: 'openclaw',

    // ai tools — aggregate under the broader ai bucket
    'ai tools': 'ai',

    // it/en aliases
    tecnologia: 'technology',
    tech: 'technology',
    automazione: 'automation',

    // noise
    example: '',
}

export function canonicalizeTag(rawTag: string): string {
    const normalized = rawTag.trim().toLowerCase()
    return tagAliases[normalized] ?? normalized
}
