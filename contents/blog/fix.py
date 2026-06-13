import re
import os

for f in ['qwopus-glm-18b-mutant-ai-model.mdx', 'qwopus-glm-18b-modello-ai-mutante.mdx']:
    with open(f, 'r') as file:
        content = file.read()
    
    content = content.replace('createdAt: 2026-06-13', 'createdAt: "2026-06-13T00:00:00Z"\nmodifiedAt: "2026-06-13T00:00:00Z"')
    slug = f.replace('.mdx', '')
    content = content.replace('image: "/images/blog/qwopus-glm-18b-featured.png"', f'image: "/images/blog/{slug}.png"')
    
    with open(f, 'w') as file:
        file.write(content)
