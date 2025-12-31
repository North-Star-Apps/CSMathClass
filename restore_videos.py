import json
import os

mapping_file = r'c:\Users\avery\Desktop\Free CS Math\CSMathClass\master_video_mapping.json'
lessons_root = r'c:\Users\avery\Desktop\Free CS Math\CSMathClass\lessons'

with open(mapping_file, 'r', encoding='utf-8') as f:
    mapping = json.load(f)

def restore_videos(file_path, video_data):
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()

    new_video_groups = json.dumps([{"title": "Lesson Videos", "items": video_data}], indent=4)
    
    # Simple search and replace for the block
    start_marker = 'const VIDEO_GROUPS = ['
    end_marker = '];'
    
    start_idx = content.find(start_marker)
    if start_idx == -1:
        # Try variation
        start_marker = 'const VIDEO_GROUPS=['
        start_idx = content.find(start_marker)
        
    if start_idx != -1:
        end_idx = content.find(end_marker, start_idx)
        if end_idx != -1:
            new_block = f'const VIDEO_GROUPS = {new_video_groups};'
            new_content = content[:start_idx] + new_block + content[end_idx + len(end_marker):]
            
            with open(file_path, 'w', encoding='utf-8', newline='\n') as f:
                f.write(new_content)
            return True
    return False

updated_count = 0
for rel_path, video_data in mapping.items():
    sub_path = rel_path.replace('lessons/', '').replace('/', os.sep)
    abs_path = os.path.join(lessons_root, sub_path)
    
    if os.path.exists(abs_path):
        if restore_videos(abs_path, video_data):
            updated_count += 1
            print(f"Restored: {sub_path}")
    else:
        filename = os.path.basename(rel_path)
        found = False
        for root, dirs, files in os.walk(lessons_root):
            if filename in files:
                target = os.path.join(root, filename)
                if restore_videos(target, video_data):
                    updated_count += 1
                    print(f"Restored (Found via search): {os.path.relpath(target, lessons_root)}")
                    found = True
                    break
        if not found:
            print(f"File not found: {abs_path}")

print(f"Total files updated: {updated_count}")
