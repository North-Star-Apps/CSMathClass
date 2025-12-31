/**
 * Lightweight Proctoring "Honesty Enforcer"
 * 
 * Features:
 * 1. Tracks tab switching (Visibility API)
 * 2. Enforces fullscreen mode (Fullscreen API)
 * 3. Logs violations to local storage
 */

const Proctor = {
    config: {
        strict: false,       // If true, alerts heavily
        logKey: 'exam_integrity_log'
    },

    stats: {
        switchCount: 0,
        fullscreenExitCount: 0,
        startTime: null
    },

    init(options = {}) {
        this.config = { ...this.config, ...options };
        this.stats.startTime = new Date().toISOString();

        // Listeners
        document.addEventListener("visibilitychange", () => this.handleVisibilityChange());
        document.addEventListener("fullscreenchange", () => this.handleFullscreenChange());

        // Anti-copy/paste (optional)
        if (this.config.noCopy) {
            document.addEventListener('copy', e => e.preventDefault());
            document.addEventListener('paste', e => e.preventDefault());
            document.addEventListener('contextmenu', e => e.preventDefault());
        }

        console.log("Proctoring initialized.");
    },

    startExam() {
        this.stats = { switchCount: 0, fullscreenExitCount: 0, startTime: new Date().toISOString() };
        this.requestFullscreen();
    },

    handleVisibilityChange() {
        if (document.hidden) {
            this.stats.switchCount++;
            this.logViolation("tab_switch", "User left the exam tab");
            if (this.config.strict) {
                alert("WARNING: Tab switching is monitored. Please stay on this page.");
            }
        }
    },

    handleFullscreenChange() {
        if (!document.fullscreenElement) {
            this.stats.fullscreenExitCount++;
            this.logViolation("fullscreen_exit", "User exited fullscreen");
            // Optionally force back
        }
    },

    requestFullscreen() {
        const elem = document.documentElement;
        if (elem.requestFullscreen) {
            elem.requestFullscreen().catch(err => {
                console.log("Fullscreen request denied: ", err);
            });
        }
    },

    logViolation(type, msg) {
        const violation = {
            type,
            msg,
            time: new Date().toISOString(),
            day: window.location.pathname
        };

        // Save to LS
        const logs = JSON.parse(localStorage.getItem(this.config.logKey) || '[]');
        logs.push(violation);
        localStorage.setItem(this.config.logKey, JSON.stringify(logs));
        console.warn(`[PROCTOR] ${type}: ${msg}`);
    },

    getReport() {
        return {
            ...this.stats,
            logs: JSON.parse(localStorage.getItem(this.config.logKey) || '[]')
        };
    }
};

// Expose globally
window.Proctor = Proctor;
