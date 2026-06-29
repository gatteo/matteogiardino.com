import fs from 'fs';
const path = '/Users/gatteomini/projects/matteogiardino.com/contents/blog/8-best-openclaw-plugins-2026.mdx';
let content = fs.readFileSync(path, 'utf8');

content = content.replace(
  "[openclaw mcp envoy egress proxy allowlist config](/en/blog/browser-control-openclaw-chrome-devtools-mcp)",
  "[OpenClaw MCP Envoy Egress Proxy Allowlist Config](/en/blog/openclaw-mcp-envoy-egress-proxy-allowlist-config)"
);

fs.writeFileSync(path, content);
