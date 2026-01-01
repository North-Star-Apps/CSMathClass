// Shared JavaScript for CSMathClass Lessons - DayOne Standard

// ==================== IMMEDIATE THEME INITIALIZATION ====================
// This runs BEFORE the page renders to prevent flash of wrong theme
(function initThemeImmediate() {
    const saved = localStorage.getItem('math_cs_theme') || 'dark';
    document.documentElement.setAttribute('data-theme', saved);
})();

// ==================== THEME TOGGLE ====================
const sunIcon = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>`;
const moonIcon = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>`;

function initThemeToggle() {
    const themeToggle = document.getElementById('themeToggle');
    if (!themeToggle) return;

    function updateThemeIcon() {
        const theme = document.documentElement.getAttribute('data-theme') || 'dark';
        themeToggle.innerHTML = theme === 'light' ? moonIcon : sunIcon;
    }

    themeToggle.addEventListener('click', () => {
        const current = document.documentElement.getAttribute('data-theme') || 'dark';
        const next = current === 'dark' ? 'light' : 'dark';
        document.documentElement.setAttribute('data-theme', next);
        localStorage.setItem('math_cs_theme', next);
        updateThemeIcon();
    });

    updateThemeIcon();
}

// ==================== TOC HIGHLIGHTING ====================
function initTocHighlight() {
    const tocLinks = document.querySelectorAll(".toc-link");
    const sections = document.querySelectorAll(".section");

    function updateTocHighlight() {
        let current = "";
        sections.forEach(section => {
            const top = section.getBoundingClientRect().top;
            if (top < 150) current = section.id;
        });
        tocLinks.forEach(link => {
            link.classList.toggle("active", link.getAttribute("href") === `#${current}`);
        });
    }

    window.addEventListener("scroll", updateTocHighlight);
    updateTocHighlight();
}

// ==================== VIDEO PLAYER ====================
function initVideoPlayer(videoGroups) {
    let container = document.getElementById("videoList");
    if (!container) container = document.querySelector(".video-list");
    if (!container || !videoGroups) return;

    container.innerHTML = "";
    let idx = 0;

    videoGroups.forEach(group => {
        const titleDiv = document.createElement("div");
        titleDiv.className = "video-group-title";
        titleDiv.textContent = group.title;
        container.appendChild(titleDiv);

        group.items.forEach(item => {
            idx++;
            const btn = document.createElement("button");
            btn.className = "video-item";
            btn.dataset.vid = item.vid;
            btn.innerHTML = `
        <div class="video-thumbnail-wrapper">
          <img class="video-thumbnail" src="https://img.youtube.com/vi/${item.vid}/mqdefault.jpg" alt="${item.title}">
          <span class="video-num">${idx}</span>
        </div>
        <div class="video-item-info">
          <div class="video-item-title">${item.title}</div>
          <div class="video-item-desc">${item.channel || "YouTube Lesson"}</div>
        </div>
      `;
            btn.addEventListener("click", () => setVideo(item, btn));
            container.appendChild(btn);
        });
    });

    // Load first video
    if (videoGroups.length > 0 && videoGroups[0].items.length > 0) {
        const first = videoGroups[0].items[0];
        const firstBtn = container.querySelector(".video-item");
        setVideo(first, firstBtn);
    }
}

function setVideo(item, btn) {
    document.querySelectorAll(".video-item").forEach(b => b.classList.remove("active"));
    if (btn) btn.classList.add("active");

    let player = document.getElementById("ytPlayer");
    if (!player) player = document.querySelector(".video-player iframe");

    if (player) player.src = `https://www.youtube.com/embed/${item.vid}?rel=0`;

    let title = document.getElementById("videoTitle");
    if (!title) title = document.querySelector(".video-title");
    if (title) title.textContent = item.title;

    let meta = document.getElementById("videoMeta");
    if (!meta) meta = document.querySelector(".video-meta");
    if (meta) meta.textContent = item.channel || "YouTube Lesson";
}

// ==================== QUIZ SYSTEM ====================
let quizStats = { attempted: 0, correct: 0, sessionCorrect: 0 };

function normalizeAnswer(s) {
    if (!s) return "";
    return s.trim().toLowerCase().replace(/\s+/g, "").replace(/\u2212/g, "-");
}

function initQuiz(questions, storageKey) {
    const container = document.getElementById("quizContainer");
    if (!container) return;

    // Load stats
    try {
        const raw = localStorage.getItem(storageKey);
        if (raw) {
            const saved = JSON.parse(raw);
            quizStats.attempted = saved.attempted || 0;
            quizStats.correct = saved.correct || 0;
        }
    } catch (e) { }

    container.innerHTML = "";

    questions.forEach((q, i) => {
        // Store original data if not already stored
        if (!q._original) q._original = { prompt: q.prompt, answer: q.answer, display: q.display };

        const div = document.createElement("div");
        div.className = "question";
        div.dataset.index = i;
        renderQuestionContent(div, q, i);
        container.appendChild(div);
    });

    function renderQuestionContent(div, q, i) {
        div.innerHTML = `
      <div class="question-header">
        <div class="question-header-left">
          <span class="question-num">Q${i + 1}</span>
          <span class="question-topic">${q.topic || ''}</span>
        </div>
        ${q.generate ? `
          <button class="btn-icon btn-refresh" title="Generate new variation" aria-label="Refresh question">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M23 4v6h-6M1 20v-6h6M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15" />
            </svg>
          </button>
        ` : ''}
      </div>
      <div class="question-prompt">${q.prompt}</div>
      <div class="question-input-row">
        <input type="text" class="question-input" placeholder="Your answer..." />
        <button class="btn btn-primary btn-check">Check</button>
        <button class="btn btn-show">Show</button>
      </div>
      <div class="question-result"></div>
    `;

        const input = div.querySelector(".question-input");
        const result = div.querySelector(".question-result");
        const btnCheck = div.querySelector(".btn-check");
        const btnShow = div.querySelector(".btn-show");
        const btnRefresh = div.querySelector(".btn-refresh");

        btnCheck.addEventListener("click", () => {
            const userAnswer = normalizeAnswer(input.value);
            // Handle multiple possible answers
            const correctAnswers = Array.isArray(q.answer) ? q.answer : [q.answer];
            const normalizedCorrect = correctAnswers.map(normalizeAnswer);
            const altAnswers = (q.altAnswers || []).map(normalizeAnswer);

            quizStats.attempted++;

            if (normalizedCorrect.includes(userAnswer) || altAnswers.includes(userAnswer)) {
                quizStats.correct++;
                quizStats.sessionCorrect++;
                input.classList.remove("incorrect");
                input.classList.add("correct");
                result.innerHTML = `<span class="success">✓ Correct</span>`;
            } else {
                input.classList.remove("correct");
                input.classList.add("incorrect");
                result.innerHTML = `<span class="error">✗ Not quite</span>`;
            }

            localStorage.setItem(storageKey, JSON.stringify({ attempted: quizStats.attempted, correct: quizStats.correct }));
            updateQuizUI(questions.length);
        });

        input.addEventListener("keydown", e => {
            if (e.key === "Enter") btnCheck.click();
        });

        btnShow.addEventListener("click", () => {
            const displayAns = q.display || (Array.isArray(q.answer) ? q.answer[0] : q.answer);
            result.innerHTML = `<div class="question-answer">Answer: ${displayAns}</div>`;
        });

        if (btnRefresh) {
            btnRefresh.addEventListener("click", () => {
                const newData = q.generate();
                // Update local question object but preserve the generate function
                q.prompt = newData.prompt;
                q.answer = newData.answer;
                q.display = newData.display || (Array.isArray(newData.answer) ? newData.answer[0] : newData.answer);
                q.altAnswers = newData.altAnswers || [];

                // Re-render this specific question's content
                renderQuestionContent(div, q, i);

                // Re-render math if any
                if (window.renderMathInElement) {
                    window.renderMathInElement(div, {
                        delimiters: [
                            { left: "$$", right: "$$", display: true },
                            { left: "$", right: "$", display: false },
                            { left: "\\(", right: "\\)", display: false },
                            { left: "\\[", right: "\\]", display: true }
                        ],
                        throwOnError: false
                    });
                }
            });
        }
    }

    // Setup controls
    document.getElementById("btnCheckAll")?.addEventListener("click", () => {
        document.querySelectorAll(".btn-check").forEach(b => b.click());
    });

    document.getElementById("btnRevealAll")?.addEventListener("click", () => {
        document.querySelectorAll(".btn-show").forEach(b => b.click());
    });

    document.getElementById("btnClear")?.addEventListener("click", () => {
        document.querySelectorAll(".question").forEach(div => {
            const input = div.querySelector(".question-input");
            input.value = "";
            input.classList.remove("correct", "incorrect");
            div.querySelector(".question-result").innerHTML = "";
        });
        quizStats.sessionCorrect = 0;
        updateQuizUI(questions.length);
    });

    document.getElementById("btnReset")?.addEventListener("click", () => {
        if (!confirm("Reset all saved stats?")) return;
        quizStats = { attempted: 0, correct: 0, sessionCorrect: 0 };
        localStorage.removeItem(storageKey);
        updateQuizUI(questions.length);
    });

    updateQuizUI(questions.length);
}

function updateQuizUI(totalQuestions) {
    const statAttempted = document.getElementById("statAttempted");
    const statCorrect = document.getElementById("statCorrect");
    const statAccuracy = document.getElementById("statAccuracy");
    const progressText = document.getElementById("progressText");
    const progressFill = document.getElementById("progressFill");

    if (statAttempted) statAttempted.textContent = quizStats.attempted;
    if (statCorrect) statCorrect.textContent = quizStats.correct;
    if (statAccuracy) {
        statAccuracy.textContent = quizStats.attempted > 0
            ? `${Math.round((quizStats.correct / quizStats.attempted) * 100)}%`
            : "—";
    }

    const pct = totalQuestions > 0 ? Math.round((quizStats.sessionCorrect / totalQuestions) * 100) : 0;
    if (progressText) progressText.textContent = `${quizStats.sessionCorrect} / ${totalQuestions} complete`;
    if (progressFill) progressFill.style.width = `${pct}%`;
}


// ==================== PROCTORING ====================
function initProctor(config) {
    if (typeof Proctor !== 'undefined') {
        Proctor.init(config);

        // Add a "Start Exam" button if specifically requested
        const startBtn = document.getElementById('btnStartExam');
        if (startBtn) {
            startBtn.addEventListener('click', () => {
                Proctor.startExam();
                startBtn.style.display = 'none';
                // Show exam content
                const content = document.getElementById('examContent');
                if (content) content.style.display = 'block';
            });
        }
    }
}

// ==================== MATH RENDERING ====================
function initMath() {
    if (typeof renderMathInElement === 'undefined') return;

    const options = {
        delimiters: [
            { left: "$$", right: "$$", display: true },
            { left: "$", right: "$", display: false },
            { left: "\\(", right: "\\)", display: false },
            { left: "\\[", right: "\\]", display: true }
        ],
        throwOnError: false,
        ignoredClasses: ["code-content"] // Don't render inside code blocks
    };

    renderMathInElement(document.body, options);
}

// ==================== INIT ====================
function initLesson(config) {
    initThemeToggle();
    initTocHighlight();
    initMath();
    if (config.videos) initVideoPlayer(config.videos);
    if (config.questions) initQuiz(config.questions, config.storageKey || 'lesson_quiz');
    if (config.proctor) initProctor(config.proctor);
}
