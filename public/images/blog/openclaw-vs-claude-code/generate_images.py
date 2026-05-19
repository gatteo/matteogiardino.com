from PIL import Image, ImageDraw, ImageFont
import os

def create_image(filename, text, subtext):
    img = Image.new('RGB', (1200, 630), color = (18, 18, 18))
    d = ImageDraw.Draw(img)
    # Just using default font, but making it somewhat presentable by drawing multiple times or just centering
    d.text((100, 250), text, fill=(255, 255, 255))
    d.text((100, 300), subtext, fill=(180, 180, 180))
    
    # Draw a mock terminal window border
    d.rectangle([50, 50, 1150, 580], outline=(60, 60, 60), width=2)
    d.ellipse([70, 70, 85, 85], fill=(255, 95, 86))
    d.ellipse([95, 70, 110, 85], fill=(255, 189, 46))
    d.ellipse([120, 70, 135, 85], fill=(39, 201, 63))
    
    img.save(filename)

create_image('architecture-comparison.png', 'Architecture Comparison', 'OpenClaw vs Claude Code')
create_image('claude-terminal.png', 'Claude Code', '$ claude --workspace .')
create_image('openclaw-setup.png', 'OpenClaw Setup', 'Initializing Ollama & Local Agents...')
create_image('mcp-integration.png', 'Model Context Protocol', 'Integration Architecture')
