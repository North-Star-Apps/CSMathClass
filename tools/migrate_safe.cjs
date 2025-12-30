const fs = require('fs');
const path = require('path');

const ROOT_DIR = "c:\\Users\\avery\\Desktop\\Free CS Math\\CSMathClass";
const LESSONS_DIR = path.join(ROOT_DIR, 'lessons');
const OUTPUT_QUESTIONS_FILE = path.join(LESSONS_DIR, 'questions-dump-safe.js');

console.log("Safe Migration Scanning:", LESSONS_DIR);

function getHtmlFiles(dir, fileList = []) {
    const files = fs.readdirSync(dir);
    files.forEach(file => {
        const filePath = path.join(dir, file);
        const stat = fs.statSync(filePath);
        if (stat.isDirectory()) {
            getHtmlFiles(filePath, fileList);
        } else if (file.endsWith('.html') && file.startsWith('Day')) {
            fileList.push(filePath);
        }
    });
    return fileList;
}

const files = getHtmlFiles(LESSONS_DIR);
let allQuestions = {};

files.forEach(filePath => {
    const fileName = path.basename(filePath);
    let content = fs.readFileSync(filePath, 'utf8');

    // Skip standardized files (check for shared-styles link)
    if (content.includes('shared-styles.css')) {
        console.log(`Skipping (already migrated/standard): ${fileName}`);
        return;
    }

    console.log(`Migrating: ${fileName}`);

    // 1. Extract Metadata
    const titleMatch = content.match(/<title>(.*?)<\/title>/);
    const title = titleMatch ? titleMatch[1] : "Lesson";
    const dayMatch = title.match(/Day (\d+)/);
    const dayNum = dayMatch ? dayMatch[1] : "0";
    const dayKey = `day${dayNum}`;

    // 2. Extract Questions
    const qMatch = content.match(/const QUESTIONS\s*=\s*(\[[\s\S]*?\])\s*;/);
    if (qMatch) {
        try {
            const q = new Function(`return ${qMatch[1]}`)();
            allQuestions[dayKey] = q;
        } catch (e) {
            console.error(`  [ERROR] Parsing questions for ${dayKey}: ${e.message}`);
        }
    }

    // 3. Extract Videos
    let videoData = "[]";
    const vGroupMatch = content.match(/const VIDEO_GROUPS\s*=\s*(\[[\s\S]*?\])\s*;/);
    if (vGroupMatch) {
        videoData = vGroupMatch[1];
    } else {
        const vMatch = content.match(/const VIDEOS\s*=\s*(\[[\s\S]*?\])\s*;/);
        if (vMatch) {
            videoData = `[{ title: "Lesson Videos", items: ${vMatch[1]} }]`;
        }
    }

    // 4. Extract Content (The hard part)
    // Legacy Content is typically between <body> and the first <script> (or last </body> if no script?)
    // But it also contains <nav>, <h1>.
    // We want the text content.

    // Find body content
    let bodyContent = "";
    const bodyMatch = content.match(/<body[^>]*>([\s\S]*?)<\/body>/i);
    if (bodyMatch) {
        let rawBody = bodyMatch[1];

        // Remove <script> blocks
        rawBody = rawBody.replace(/<script[\s\S]*?<\/script>/gis, "");

        // Remove <style> blocks (if any strictly in body)
        rawBody = rawBody.replace(/<style[\s\S]*?<\/style>/gis, "");

        // Remove Legacy Nav (if simple text link or <nav>)
        // Common pattern: <a href="../../index.html">Back</a> or similar
        rawBody = rawBody.replace(/<a href="[^"]*index\.html"[^>]*>.*?<\/a>/i, "");

        // Remove Input/Button for Quiz (Legacy hardcoded quiz UI)
        // Usually <div id="quiz">...</div>
        rawBody = rawBody.replace(/<div id="quiz"[\s\S]*?<\/div>/i, "");

        // Remove Video Containers (Legacy)
        // <div class="video-container">...</div>
        rawBody = rawBody.replace(/<div class="video-container"[\s\S]*?<\/div>/i, "");

        // Remove <h1> (We will reconstruct Hero)
        rawBody = rawBody.replace(/<h1[^>]*>.*?<\/h1>/i, "");

        bodyContent = rawBody.trim();
    }

    // 5. Construct New File
    const depth = fileName.includes('Ninety') ? 2 : 2; // Assuming mostly nested 2 levels? (lessons/cat/Day.html).
    // Actually calculate relative path to root?
    // lessons/cat/Day.html -> ../../lessons/
    // We'll use ../../lessons/ for now as standard.

    const newContent = `<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>${title}</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600;700&family=Source+Serif+4:opsz,wght@8..60,400;8..60,600;8..60,700&family=DM+Sans:wght@400;500;600;700&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.css">
  <script defer src="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.js"></script>
  <script defer src="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/contrib/auto-render.min.js" onload="renderMathInElement(document.body);"></script>
  <link rel="stylesheet" href="../../lessons/shared-styles.css">
  <script src="../../lessons/questions-data.js"></script>
  <script src="../../lessons/shared-scripts.js"></script>
</head>

<body>
  <nav class="nav">
    <div class="nav-inner">
      <a href="../../index.html" class="nav-back">
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M10 12L6 8L10 4" />
        </svg>
        Back to Curriculum
      </a>
      <div class="nav-progress">
        <span id="progressText">Day ${dayNum}</span>
        <div class="progress-bar">
          <div class="progress-fill" id="progressFill"></div>
        </div>
      </div>
      <button class="theme-toggle" id="themeToggle" aria-label="Toggle theme">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
        </svg>
      </button>
    </div>
  </nav>

  <header class="hero">
    <div class="hero-label">Day ${dayNum}</div>
    <h1>${title.replace(/Day \d+:\s*/, '')}</h1>
  </header>

  <div class="main-layout">
    <aside class="sidebar">
      <nav class="toc">
        <div class="toc-title">On this page</div>
        <ul class="toc-list">
          <!-- TODO: Auto-generate items? For now we leave empty or simple link -->
          <li><a href="#content" class="toc-link active">Lesson Content</a></li>
          <li><a href="#videos" class="toc-link">Video Lessons</a></li>
          <li><a href="#practice" class="toc-link">Practice Problems</a></li>
        </ul>
      </nav>
      <div class="stats-card">
        <div class="toc-title">Your Progress</div>
        <div class="stats-row"><span class="stats-label">Attempted</span><span class="stats-value" id="statAttempted">0</span></div>
        <div class="stats-row"><span class="stats-label">Correct</span><span class="stats-value" id="statCorrect">0</span></div>
        <div class="stats-row"><span class="stats-label">Accuracy</span><span class="stats-value" id="statAccuracy">—</span></div>
      </div>
    </aside>

    <main class="content" id="content">
      <!-- MIGRATED CONTENT START -->
      ${bodyContent}
      <!-- MIGRATED CONTENT END -->

      <section class="section" id="videos">
        <div class="section-header">
          <div class="section-number">Videos</div>
          <h2 class="section-title">Video Lessons</h2>
        </div>
        <div class="section-body">
          <div class="video-container">
            <div class="video-player">
              <iframe id="ytPlayer" src="" allowfullscreen></iframe>
              <div class="video-info">
                <div class="video-title" id="videoTitle">Select a video</div>
                <div class="video-meta" id="videoMeta"></div>
              </div>
            </div>
            <div class="video-list" id="videoList"></div>
          </div>
        </div>
      </section>

      <section class="section" id="practice">
        <div class="section-header">
           <div class="section-number">Practice</div>
           <h2 class="section-title">Practice Problems</h2>
        </div>
        <div class="section-body">
           <div class="quiz-controls">
             <button class="btn btn-primary" id="btnCheckAll">Check All</button>
             <button class="btn" id="btnRevealAll">Reveal All</button>
             <button class="btn" id="btnClear">Clear</button>
             <button class="btn btn-danger" id="btnReset">Reset Stats</button>
           </div>
           <div id="quizContainer"></div>
        </div>
      </section>
    </main>
  </div>

  <script>
    initLesson({
      questions: window.QUESTIONS_DATA ? window.QUESTIONS_DATA['${dayKey}'] : [],
      videos: ${videoData},
      storageKey: '${dayKey}_stats'
    });
  </script>
</body>
</html>`;

    // Only write if we have content and data
    if (bodyContent.length > 0) {
        fs.writeFileSync(filePath, newContent);
        console.log(`  Updated ${fileName}`);
    } else {
        console.warn(`  [WARN] Extracted body content was empty for ${fileName}. Skipping.`);
    }
});

// Write safe dump
const dumpContent = `const QUESTIONS_DATA_DUMP = ${JSON.stringify(allQuestions, null, 2)};`;
fs.writeFileSync(OUTPUT_QUESTIONS_FILE, dumpContent);
console.log(`Saved extracted questions to ${OUTPUT_QUESTIONS_FILE}`);
