import os
import re

# We want to replace specific resource links with "../../lessons/..."
# Targets: shared-styles.css, shared-scripts.js, questions-data.js
# We also want to fix the "Back to Curriculum" link to "../../index.html"

# Regex patterns
# 1. CSS
p_css = re.compile(r'<link\s+rel="stylesheet"\s+href=".*?shared-styles\.css">')
r_css = '<link rel="stylesheet" href="../../lessons/shared-styles.css">'

# 2. Scripts
p_js_shared = re.compile(r'<script\s+src=".*?shared-scripts\.js"></script>')
r_js_shared = '<script src="../../lessons/shared-scripts.js"></script>'

p_js_quest = re.compile(r'<script\s+src=".*?questions-data\.js"></script>')
r_js_quest = '<script src="../../lessons/questions-data.js"></script>'

# 3. Back Link
# Matches <a href="..." class="nav-back">
p_back = re.compile(r'<a\s+href=".*?"\s+class="nav-back">')
r_back = '<a href="../../index.html" class="nav-back">'

count = 0

for root, dirs, files in os.walk("lessons"):
    for file in files:
        if file.endswith(".html") and "Day" in file:
            path = os.path.join(root, file)
            with open(path, 'r', encoding='utf-8') as f:
                content = f.read()
            
            original_len = len(content)
            
            # Apply subs
            new_content = p_css.sub(r_css, content)
            new_content = p_js_shared.sub(r_js_shared, new_content)
            new_content = p_js_quest.sub(r_js_quest, new_content)
            new_content = p_back.sub(r_back, new_content)
            
            if len(new_content) != original_len or new_content != content:
                print(f"Standardizing paths in {file}...")
                with open(path, 'w', encoding='utf-8') as f:
                    f.write(new_content)
                    count += 1

print(f"Fixed paths in {count} files.")
