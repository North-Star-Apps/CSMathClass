
// Logic for Review, Tests, and Exams

// Mapping of Days to Sections (Simplified for now - will be updated by script)
const SECTION_MAP = {
    "01-mathematical-maturity": [
        "day1",
        "day2",
        "day3",
        "day4",
        "day5",
        "day6"
    ],
    "01-operating-system": [
        "day1",
        "day2",
        "day3",
        "day4",
        "day5",
        "day6"
    ],
    "02-calculus": [
        "day7",
        "day8",
        "day9",
        "day10",
        "day11",
        "day12",
        "day13",
        "day14",
        "day15",
        "day16",
        "day17",
        "day17",
        "day19",
        "day20"
    ],
    "02-precalculus": [
        "day9",
        "day10",
        "day11",
        "day12",
        "day13"
    ],
    "03-calculus": [
        "day12",
        "day13",
        "day14",
        "day15",
        "day17",
        "day18",
        "day18"
    ],
    "04-linear-algebra": [
        "day19",
        "day20",
        "day21",
        "day22",
        "day23"
    ],
    "05-discrete-math": [
        "day25",
        "day26",
        "day27",
        "day28",
        "day28",
        "day29",
        "day30",
        "day36"
    ],
    "06-algorithms": [
        "day32",
        "day33",
        "day34",
        "day35",
        "day36",
        "day37",
        "day38"
    ],
    "07-probability-stats": [
        "day39",
        "day40",
        "day41",
        "day42",
        "day43"
    ],
    "08-analysis": [
        "day44",
        "day45",
        "day46",
        "day47",
        "day48",
        "day49",
        "day50"
    ],
    "09-abstract-algebra": [
        "day52",
        "day53",
        "day54"
    ],
    "09-numerical": [
        "day51",
        "day65",
        "day66",
        "day67"
    ],
    "10-topology-measure": [
        "day55",
        "day56",
        "day57",
        "day58",
        "day59",
        "day60",
        "day61"
    ],
    "11-functional-pde": [
        "day62",
        "day63",
        "day65",
        "day66",
        "day67",
        "day68",
        "day80"
    ],
    "12-theoretical-cs": [
        "day69",
        "day70",
        "day71",
        "day72",
        "day73",
        "day74",
        "day75",
        "day76",
        "day77",
        "day78",
        "day79",
        "day80"
    ],
    "13-optimization": [
        "day81",
        "day82",
        "day83",
        "day84",
        "day85"
    ],
    "14-specialize": [
        "day86",
        "day87",
        "day88",
        "day89",
        "day90",
        "day91"
    ],
    "15-discipline": [
        "day92",
        "day93",
        "day94",
        "day95",
        "day96",
        "day97"
    ],
    "16-lightning-round": [
        "day100"
    ],
    "98-review": [
        "day98"
    ]
};

function getAllQuestions() {
    if (!window.QUESTIONS_DATA) return [];
    let all = [];
    Object.values(window.QUESTIONS_DATA).forEach(qs => all = all.concat(qs));
    return all;
}

function getSectionQuestions(sectionId) {
    if (!window.QUESTIONS_DATA) return [];
    const days = SECTION_MAP[sectionId] || [];
    let all = [];
    days.forEach(d => {
        if (window.QUESTIONS_DATA[d]) {
            all = all.concat(window.QUESTIONS_DATA[d]);
        }
    });
    return all;
}

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

window.EXAM_LOGIC = {
    // day98
    getFlashcards: (sectionId) => {
        const pool = getSectionQuestions(sectionId);
        const count = Math.max(1, Math.floor(pool.length * 0.1));
        return shuffle([...pool]).slice(0, count);
    },

    // day99
    getTest: () => {
        const pool = getAllQuestions();
        const count = Math.max(1, Math.floor(pool.length * 0.3));
        return shuffle([...pool]).slice(0, count);
    },

    // day100
    getExam: () => {
        const pool = getAllQuestions();
        const count = Math.max(1, Math.floor(pool.length * 0.5));
        return shuffle([...pool]).slice(0, count);
    }
};
