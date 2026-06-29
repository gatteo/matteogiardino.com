import fs from 'fs';
const path = '/Users/gatteomini/agents/mg-blog-agent/resources/tasks.md';
let content = fs.readFileSync(path, 'utf8');

content = content.replace(
  "- [ ] optimize-existing-post to fix cannibalization for openclaw mcp envoy egress proxy allowlist config",
  "- [x] optimize-existing-post to fix cannibalization for openclaw mcp envoy egress proxy allowlist config (Fixed wrong internal link pointing to wrong URL, sha: 709231b)"
);

fs.writeFileSync(path, content);
