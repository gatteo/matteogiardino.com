import fs from 'fs';
const path = '/Users/gatteomini/agents/mg-blog-agent/resources/tasks.md';
let content = fs.readFileSync(path, 'utf8');

content = content.replace(
  "- [ ] optimize-existing-post on openclaw-ollama to fix dropping traffic trend",
  "- [x] optimize-existing-post on openclaw-ollama to fix dropping traffic trend (Autonomously optimized, score 83, sha: 05ee1e7)"
);

if (!content.includes("[+14d] Re-run post-mortem on configurare-openclaw-ollama-agenti-ai-locali")) {
    content = content.replace(
      "## Queued\n",
      "## Queued\n- [ ] [+14d] Re-run post-mortem on configurare-openclaw-ollama-agenti-ai-locali to verify lift\n"
    );
}

fs.writeFileSync(path, content);
