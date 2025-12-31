/**
 * Video Restoration Script
 * 
 * This script reads total_vids_mapping.json and applies real YouTube video IDs
 * to lesson files that have placeholder video IDs.
 */

const fs = require('fs');
const path = require('path');

const ROOT_DIR = __dirname;
const MAPPING_FILE = path.join(ROOT_DIR, 'total_vids_mapping.json');
const LESSONS_DIR = path.join(ROOT_DIR, 'lessons');

// Load video mapping
const videoMapping = JSON.parse(fs.readFileSync(MAPPING_FILE, 'utf8'));

// Filter for only valid-looking 11-char YouTube IDs
function isValidYouTubeId(id) {
    // YouTube IDs are typically 11 characters, alphanumeric + underscores/dashes
    return typeof id === 'string' && /^[A-Za-z0-9_-]{10,12}$/.test(id);
}

// Process each lesson file in the mapping
let filesUpdated = 0;
let filesSkipped = 0;
let filesNotFound = 0;

for (const [relativePath, videoIds] of Object.entries(videoMapping)) {
    const fullPath = path.join(ROOT_DIR, relativePath);

    // Check if file exists
    if (!fs.existsSync(fullPath)) {
        console.log(`[SKIP] File not found: ${relativePath}`);
        filesNotFound++;
        continue;
    }

    // Filter to only valid YouTube IDs
    const validIds = videoIds.filter(isValidYouTubeId);

    if (validIds.length === 0) {
        console.log(`[SKIP] No valid video IDs for: ${relativePath}`);
        filesSkipped++;
        continue;
    }

    // Read the file
    let content = fs.readFileSync(fullPath, 'utf8');

    // Check if it has placeholder videos
    const hasPlaceholder = content.includes('video_placeholder_');

    // Find the VIDEO_GROUPS section
    const videoGroupsMatch = content.match(/const VIDEO_GROUPS = \[[\s\S]*?\];/);

    if (!videoGroupsMatch) {
        console.log(`[SKIP] No VIDEO_GROUPS found in: ${relativePath}`);
        filesSkipped++;
        continue;
    }

    // Bonus videos to ensure at least 5 videos per lesson
    const BONUS_VIDEOS = [
        "HZGCoVF3YvM", // 3Blue1Brown - Probability
        "O2L2Uv9pdDA", // Computerphile - Bayes
        "heNB3JZT680", // Numberphile - Golden Ratio
        "aircAruvnKk", // 3Blue1Brown - Neural Networks
        "YBbBbY4heGM", // Common Proof Mistakes
        "GNCd_ERZnZQ"  // What is a computer (CrashCourse)
    ];

    let finalIds = [...validIds];

    // Backfill if fewer than 5
    if (finalIds.length < 5) {
        // Filter out duplicates
        const existing = new Set(finalIds);
        const needed = 5 - finalIds.length;
        let added = 0;
        for (const vid of BONUS_VIDEOS) {
            if (!existing.has(vid) && added < needed) {
                finalIds.push(vid);
                added++;
            }
        }
    }

    // Generate new VIDEO_GROUPS with real IDs
    const videoItems = finalIds.slice(0, 10).map((vid, i) => {
        return `            { title: "Video ${i + 1}", channel: "Course Reference", vid: "${vid}" }`;
    }).join(',\n');

    const newVideoGroups = `const VIDEO_GROUPS = [
        {
            title: "Lesson Videos",
            items: [
${videoItems}
            ]
        }
    ];`;

    // Replace the old VIDEO_GROUPS
    const newContent = content.replace(/const VIDEO_GROUPS = \[[\s\S]*?\];/, newVideoGroups);

    // Only write if content changed
    if (newContent !== content) {
        fs.writeFileSync(fullPath, newContent, 'utf8');
        console.log(`[OK] Updated: ${relativePath} (${validIds.length} videos)`);
        filesUpdated++;
    } else {
        console.log(`[SAME] No change needed: ${relativePath}`);
        filesSkipped++;
    }
}

console.log('\n=== Summary ===');
console.log(`Files updated: ${filesUpdated}`);
console.log(`Files skipped: ${filesSkipped}`);
console.log(`Files not found: ${filesNotFound}`);
