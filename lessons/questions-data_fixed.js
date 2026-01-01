// Central Store for Curriculum Questions
// Used for individual lessons and the global review/exam systems.

window.QUESTIONS_DATA = {
  "day1": [
    {
      "id": 1,
      "topic": "Fractions",
      "prompt": "2/3 + 1/6 = ? (simplify)",
      "answer": ["5/6"],
      "display": "5/6",
      "generate": function () {
        const d1 = GenUtils.pick([3, 4, 5, 8]);
        const d2 = GenUtils.pick([6, 9, 12, 16]);
        const n1 = GenUtils.randomInt(1, d1 - 1);
        const n2 = GenUtils.randomInt(1, d2 - 1);
        const common = GenUtils.lcm(d1, d2);
        const finalNum = (n1 * (common / d1)) + (n2 * (common / d2));
        const [sn, sd] = GenUtils.simplify(finalNum, common);
        return {
          prompt: `${n1}/${d1} + ${n2}/${d2} = ? (simplify)`,
          answer: [`${sn}/${sd}`],
          display: `${sn}/${sd}`
        };
      }
    },
    {
      "id": 2,
      "topic": "Fractions",
      "prompt": "3/4 × 2/5 = ?",
      "answer": ["3/10", "6/20"],
      "display": "3/10",
      "generate": function () {
        const d1 = GenUtils.randomInt(2, 9);
        const d2 = GenUtils.randomInt(2, 9);
        const n1 = GenUtils.randomInt(1, 9);
        const n2 = GenUtils.randomInt(1, 9);
        const [sn, sd] = GenUtils.simplify(n1 * n2, d1 * d2);
        return {
          prompt: `${n1}/${d1} × ${n2}/${d2} = ?`,
          answer: [`${sn}/${sd}`, `${n1 * n2}/${d1 * d2}`],
          display: `${sn}/${sd}`
        };
      }
    },
    {
      "id": 3,
      "topic": "Fractions",
      "prompt": "7/8 ÷ 1/4 = ?",
      "answer": ["7/2", "3.5", "3 1/2"],
      "display": "7/2",
      "generate": function () {
        const d1 = GenUtils.randomInt(2, 9);
        const d2 = GenUtils.randomInt(2, 9);
        const n1 = GenUtils.randomInt(1, 9);
        const n2 = GenUtils.randomInt(1, 9);
        const [sn, sd] = GenUtils.simplify(n1 * d2, d1 * n2);
        return {
          prompt: `${n1}/${d1} ÷ ${n2}/${d2} = ?`,
          answer: [`${sn}/${sd}`, (n1 * d2 / (d1 * n2)).toString()],
          display: `${sn}/${sd}`
        };
      }
    },
    {
      "id": 4,
      "topic": "Fractions",
      "prompt": "Simplify 24/36",
      "answer": ["2/3"],
      "display": "2/3",
      "generate": function () {
        const common = GenUtils.randomInt(2, 12);
        const n = GenUtils.randomInt(1, 10);
        const d = GenUtils.randomInt(n + 1, 12);
        const [sn, sd] = GenUtils.simplify(n * common, d * common);
        return {
          prompt: `Simplify ${n * common}/${d * common}`,
          answer: [`${sn}/${sd}`],
          display: `${sn}/${sd}`
        };
      }
    },
    {
      "id": 5,
      "topic": "Negatives",
      "prompt": "(-7) + (-5) = ?",
      "answer": ["-12"],
      "display": "-12",
      "generate": function () {
        const a = GenUtils.randomInt(2, 20);
        const b = GenUtils.randomInt(2, 20);
        return {
          prompt: `(-${a}) + (-${b}) = ?`,
          answer: [`-${a + b}`],
          display: `-${a + b}`
        };
      }
    },
    {
      "id": 6,
      "topic": "Negatives",
      "prompt": "5 - (-3) = ?",
      "answer": ["8"],
      "display": "8",
      "generate": function () {
        const a = GenUtils.randomInt(1, 20);
        const b = GenUtils.randomInt(1, 20);
        return {
          prompt: `${a} - (-${b}) = ?`,
          answer: [`${a + b}`],
          display: `${a + b}`
        };
      }
    },
    {
      "id": 7,
      "topic": "Negatives",
      "prompt": "(-4) × (-6) = ?",
      "answer": ["24"],
      "display": "24",
      "generate": function () {
        const a = GenUtils.randomInt(2, 12);
        const b = GenUtils.randomInt(2, 12);
        return {
          prompt: `(-${a}) × (-${b}) = ?`,
          answer: [`${a * b}`],
          display: `${a * b}`
        };
      }
    },
    {
      "id": 8,
      "topic": "Negatives",
      "prompt": "-3² = ? (note: no parentheses)",
      "answer": ["-9"],
      "display": "-9",
      "generate": function () {
        const a = GenUtils.randomInt(2, 9);
        return {
          prompt: `-${a}² = ? (note: no parentheses)`,
          answer: [`-${a * a}`],
          display: `-${a * a}`
        };
      }
    },
    {
      "id": 9,
      "topic": "Negatives",
      "prompt": "(-3)² = ?",
      "answer": ["9"],
      "display": "9",
      "generate": function () {
        const a = GenUtils.randomInt(2, 12);
        return {
          prompt: `(-${a})² = ?`,
          answer: [`${a * a}`],
          display: `${a * a}`
        };
      }
    },
    {
      "id": 10,
      "topic": "Exponents",
      "prompt": "2⁴ × 2³ = 2^?",
      "answer": ["7", "2^7"],
      "display": "2⁷",
      "generate": function () {
        const b = GenUtils.pick([2, 3, 5, 10]);
        const e1 = GenUtils.randomInt(2, 6);
        const e2 = GenUtils.randomInt(2, 6);
        return {
          prompt: `${b}^${e1} × ${b}^${e2} = ${b}^?`,
          answer: [`${e1 + e2}`, `${b}^${e1 + e2}`],
          display: `${b}^${e1 + e2}`
        };
      }
    },
    {
      "id": 11,
      "topic": "Exponents",
      "prompt": "5⁶ ÷ 5² = 5^?",
      "answer": ["4", "5^4"],
      "display": "5⁴",
      "generate": function () {
        const b = GenUtils.pick([2, 3, 5, 10]);
        const e1 = GenUtils.randomInt(5, 9);
        const e2 = GenUtils.randomInt(2, 4);
        return {
          prompt: `${b}^${e1} ÷ ${b}^${e2} = ${b}^?`,
          answer: [`${e1 - e2}`, `${b}^${e1 - e2}`],
          display: `${b}^${e1 - e2}`
        };
      }
    },
    {
      "id": 12,
      "topic": "Exponents",
      "prompt": "(3²)³ = 3^?",
      "answer": ["6", "3^6"],
      "display": "3⁶",
      "generate": function () {
        const b = GenUtils.pick([2, 3, 5, 10]);
        const e1 = GenUtils.randomInt(2, 4);
        const e2 = GenUtils.randomInt(2, 4);
        return {
          prompt: `(${b}^${e1})^${e2} = ${b}^?`,
          answer: [`${e1 * e2}`, `${b}^${e1 * e2}`],
          display: `${b}^${e1 * e2}`
        };
      }
    },
    {
      "id": 13,
      "topic": "Exponents",
      "prompt": "Any number to the 0 power equals ___",
      "answer": ["1"],
      "display": "1",
      "generate": function () {
        const val = GenUtils.randomInt(2, 1000);
        return {
          prompt: `${val}^0 = ?`,
          answer: ["1"],
          display: "1"
        };
      }
    },
    {
      "id": 14,
      "topic": "Exponents",
      "prompt": "2⁻³ = ?",
      "answer": ["1/8", "0.125"],
      "display": "1/8",
      "generate": function () {
        const b = GenUtils.pick([2, 3, 4, 5]);
        const e = GenUtils.randomInt(2, 4);
        const ansNum = Math.pow(b, e);
        return {
          prompt: `${b}⁻${e} = ?`,
          answer: [`1/${ansNum}`, (1 / ansNum).toString()],
          display: `1/${ansNum}`
        };
      }
    },
    {
      "id": 15,
      "topic": "Roots",
      "prompt": "16^(1/2) = ?",
      "answer": ["4"],
      "display": "4",
      "generate": function () {
        const val = GenUtils.randomInt(2, 15);
        return {
          prompt: `${val * val}^(1/2) = ?`,
          answer: [`${val}`],
          display: `${val}`
        };
      }
    },
    {
      "id": 16,
      "topic": "Roots",
      "prompt": "27^(1/3) = ?",
      "answer": ["3"],
      "display": "3",
      "generate": function () {
        const val = GenUtils.randomInt(2, 6);
        return {
          prompt: `${Math.pow(val, 3)}^(1/3) = ?`,
          answer: [`${val}`],
          display: `${val}`
        };
      }
    },
    {
      "id": 17,
      "topic": "Scientific",
      "prompt": "3.2 × 10⁴ in standard form = ?",
      "answer": ["32000"],
      "display": "32,000",
      "generate": function () {
        const a = (GenUtils.randomInt(10, 99) / 10);
        const e = GenUtils.randomInt(3, 6);
        return {
          prompt: `${a} × 10^${e} in standard form = ?`,
          answer: [(a * Math.pow(10, e)).toString()],
          display: (a * Math.pow(10, e)).toLocaleString()
        };
      }
    },
    {
      "id": 18,
      "topic": "Scientific",
      "prompt": "0.0056 in scientific notation = ?",
      "answer": ["5.6e-3", "5.6 x 10^-3", "5.6×10⁻³"],
      "display": "5.6 × 10⁻³",
      "generate": function () {
        const a = (GenUtils.randomInt(10, 99) / 10);
        const e = GenUtils.randomInt(2, 5);
        const val = a / Math.pow(10, e);
        return {
          prompt: `${val.toFixed(e + 1)} in scientific notation = ?`,
          answer: [`${a}e-${e}`, `${a} x 10^-${e}`, `${a}×10⁻${e}`],
          display: `${a} × 10⁻${e}`
        };
      }
    },
    {
      "id": 19,
      "topic": "Ratios",
      "prompt": "Simplify ratio 12:18",
      "answer": ["2:3", "2 to 3"],
      "display": "2:3",
      "generate": function () {
        const sn = GenUtils.randomInt(1, 5);
        const sd = GenUtils.randomInt(sn + 1, 10);
        const common = GenUtils.randomInt(2, 10);
        return {
          prompt: `Simplify ratio ${sn * common}:${sd * common}`,
          answer: [`${sn}:${sd}`, `${sn} to ${sd}`],
          display: `${sn}:${sd}`
        };
      }
    },
    {
      "id": 20,
      "topic": "Ratios",
      "prompt": "Aspect ratio of 1920×1080?",
      "answer": ["16:9"],
      "display": "16:9",
      "generate": function () {
        const w = GenUtils.pick([800, 1024, 1280, 1920, 2560]);
        const h = GenUtils.pick([600, 768, 720, 1080, 1440]);
        const g = GenUtils.gcd(w, h);
        return {
          prompt: `Aspect ratio of ${w}×${h}?`,
          answer: [`${w / g}:${h / g}`],
          display: `${w / g}:${h / g}`
        };
      }
    },
    {
      "id": 21,
      "topic": "Rates",
      "prompt": "100 Mbps = ? MB/s (remember: 8 bits = 1 byte)",
      "answer": ["12.5"],
      "display": "12.5 MB/s",
      "generate": function () {
        const speeds = [10, 20, 50, 100, 200, 400, 1000];
        const val = GenUtils.pick(speeds);
        return {
          prompt: `${val} Mbps = ? MB/s`,
          answer: [(val / 8).toString()],
          display: `${val / 8} MB/s`
        };
      }
    },
    {
      "id": 22,
      "topic": "Percentages",
      "prompt": "What is 20% of 150?",
      "answer": ["30"],
      "display": "30",
      "generate": function () {
        const p = GenUtils.pick([10, 15, 20, 25, 50, 75]);
        const w = GenUtils.randomInt(1, 10) * 50;
        return {
          prompt: `What is ${p}% of ${w}?`,
          answer: [(p * w / 100).toString()],
          display: (p * w / 100).toString()
        };
      }
    },
    {
      "id": 23,
      "topic": "Percentages",
      "prompt": "30 is what % of 120?",
      "answer": ["25", "25%"],
      "display": "25%",
      "generate": function () {
        const p = GenUtils.pick([10, 20, 25, 40, 50]);
        const w = GenUtils.randomInt(1, 10) * 20;
        const part = p * w / 100;
        return {
          prompt: `${part.toFixed(1).replace(".0", "")} is what % of ${w}?`,
          answer: [p.toString(), `${p}%`],
          display: `${p}%`
        };
      }
    },
    {
      "id": 24,
      "topic": "Conversions",
      "prompt": "1 GB = ? MB",
      "answer": ["1024", "1000"],
      "display": "1024 (or 1000)",
      "generate": function () {
        const units = ["MB", "KB", "GB", "TB"];
        const unitsNum = [1024, 1024, 1024, 1024];
        const fromIdx = GenUtils.randomInt(1, 3);
        const num = GenUtils.randomInt(1, 10);
        return {
          prompt: `${num} ${units[fromIdx]} = ? ${units[fromIdx - 1]}`,
          answer: [(num * 1024).toString(), (num * 1000).toString()],
          display: `${num * 1024} (or ${num * 1000})`
        };
      }
    },
    {
      "id": 25,
      "topic": "Fractions",
      "prompt": "Convert 2 3/5 to improper fraction",
      "answer": ["13/5"],
      "display": "13/5",
      "generate": function () {
        const m = GenUtils.randomInt(1, 5);
        const d = GenUtils.randomInt(2, 9);
        const n = GenUtils.randomInt(1, d - 1);
        return {
          prompt: `Convert ${m} ${n}/${d} to improper fraction`,
          answer: [`${m * d + n}/${d}`],
          display: `${m * d + n}/${d}`
        };
      }
    },
    {
      "id": 26,
      "topic": "Exponents",
      "prompt": "16^(3/4) = ?",
      "answer": ["8"],
      "display": "8",
      "generate": function () {
        const bases = [2, 3, 4, 5];
        const b = GenUtils.pick(bases);
        const den = b === 2 ? 4 : (b === 3 ? 3 : 2); // To keep numbers reasonable
        const num = GenUtils.randomInt(2, 3);
        const val = Math.pow(b, den);
        const ans = Math.pow(b, num);
        return {
          prompt: `${val}^(${num}/${den}) = ?`,
          answer: [ans.toString()],
          display: ans.toString()
        };
      }
    },
    {
      "id": 27,
      "topic": "Scientific",
      "prompt": "(2×10³) × (3×10⁴) = ?",
      "answer": ["6e7", "6×10⁷", "6 x 10^7"],
      "display": "6 × 10⁷",
      "generate": function () {
        const a1 = GenUtils.randomInt(1, 4);
        const a2 = GenUtils.randomInt(1, 4);
        const e1 = GenUtils.randomInt(2, 5);
        const e2 = GenUtils.randomInt(2, 5);
        const fa = a1 * a2;
        const fe = e1 + e2;
        return {
          prompt: `(${a1}×10^${e1}) × (${a2}×10^${e2}) = ?`,
          answer: [`${fa}e${fe}`, `${fa}×10^${fe}`, `${fa} x 10^${fe}`],
          display: `${fa} × 10^${fe}`
        };
      }
    },
    {
      "id": 28,
      "topic": "Percentages",
      "prompt": "Price increases from $80 to $100. What is the % increase?",
      "answer": ["25", "25%"],
      "display": "25%",
      "generate": function () {
        const old = GenUtils.pick([40, 50, 80, 100, 200]);
        const p = GenUtils.pick([10, 20, 25, 50, 100]);
        const inc = old * p / 100;
        const newVal = old + inc;
        return {
          prompt: `Price increases from $${old} to $${newVal}. What is the % increase?`,
          answer: [p.toString(), `${p}%`],
          display: `${p}%`
        };
      }
    },
    {
      "id": 29,
      "topic": "Rates",
      "prompt": "3 workers finish 15 tasks/hour. How many tasks/hour with 5 workers?",
      "answer": ["25"],
      "display": "25 tasks/hour",
      "generate": function () {
        const w1 = GenUtils.randomInt(2, 4);
        const r = GenUtils.randomInt(3, 10);
        const t1 = w1 * r;
        const w2 = GenUtils.randomInt(5, 10);
        const t2 = w2 * r;
        return {
          prompt: `${w1} workers finish ${t1} tasks/hour. How many tasks/hour with ${w2} workers?`,
          answer: [t2.toString()],
          display: `${t2} tasks/hour`
        };
      }
    },
    {
      "id": 30,
      "topic": "Fractions",
      "prompt": "5/6 - 1/4 = ? (simplify)",
      "answer": ["7/12"],
      "display": "7/12",
      "generate": function () {
        const d1 = GenUtils.pick([4, 6, 8, 10]);
        const d2 = GenUtils.pick([3, 5, 9]);
        const n1 = GenUtils.randomInt(d1 / 2, d1 - 1);
        const n2 = GenUtils.randomInt(1, d2 / 2); // ensure positive result
        const common = GenUtils.lcm(d1, d2);
        const finalNum = (n1 * (common / d1)) - (n2 * (common / d2));
        const [sn, sd] = GenUtils.simplify(finalNum, common);
        return {
          prompt: `${n1}/${d1} - ${n2}/${d2} = ? (simplify)`,
          answer: [`${sn}/${sd}`],
          display: `${sn}/${sd}`
        };
      }
    }
  ],
  "day2": [
    {
      "id": 1,
      "topic": "Linear",
      "prompt": "Solve: 3x + 7 = 22",
      "answer": ["5", "x=5"],
      "display": "x = 5",
      "generate": function () {
        const a = GenUtils.randomInt(2, 9);
        const x = GenUtils.randomInt(2, 12);
        const b = GenUtils.randomInt(1, 20);
        const c = a * x + b;
        return {
          prompt: `Solve: ${a}x + ${b} = ${c}`,
          answer: [x.toString(), `x=${x}`],
          display: `x = ${x}`
        };
      }
    },
    {
      "id": 2,
      "topic": "Linear",
      "prompt": "Solve: 5x - 3 = 2x + 9",
      "answer": ["4", "x=4"],
      "display": "x = 4",
      "generate": function () {
        const x = GenUtils.randomInt(2, 10);
        const a = GenUtils.randomInt(4, 8);
        const b = GenUtils.randomInt(1, 3); // b < a
        const c = GenUtils.randomInt(1, 10);
        const d = (a - b) * x - c;
        return {
          prompt: `Solve: ${a}x - ${c} = ${b}x + ${d}`,
          answer: [x.toString(), `x=${x}`],
          display: `x = ${x}`
        };
      }
    },
    {
      "id": 3,
      "topic": "Systems",
      "prompt": "System: x + y = 5, x - y = 1. What is x?",
      "answer": ["3"],
      "display": "x = 3",
      "generate": function () {
        const x = GenUtils.randomInt(2, 10);
        const y = GenUtils.randomInt(1, x - 1);
        return {
          prompt: `System: x + y = ${x + y}, x - y = ${x - y}. What is x?`,
          answer: [x.toString()],
          display: `x = ${x}`
        };
      }
    },
    {
      "id": 4,
      "topic": "Systems",
      "prompt": "System: x + y = 5, x - y = 1. What is y?",
      "answer": ["2"],
      "display": "y = 2",
      "generate": function () {
        const x = GenUtils.randomInt(2, 10);
        const y = GenUtils.randomInt(1, x - 1);
        return {
          prompt: `System: x + y = ${x + y}, x - y = ${x - y}. What is y?`,
          answer: [y.toString()],
          display: `y = ${y}`
        };
      }
    },
    {
      "id": 5,
      "topic": "Systems",
      "prompt": "Two parallel lines have ___ solutions (one/none/infinite)",
      "answer": ["none", "0", "no"],
      "display": "None",
      "generate": function () {
        const m = GenUtils.randomInt(2, 5);
        const b1 = GenUtils.randomInt(1, 10);
        const b2 = GenUtils.randomNonZero(-10, 10) + b1;
        return {
          prompt: `How many solutions for y = ${m}x + ${b1} and y = ${m}x + ${b2}?`,
          answer: ["none", "0", "no"],
          display: "None (parallel)"
        };
      }
    },
    {
      "id": 6,
      "topic": "Quadratic",
      "prompt": "Solve x² - 9 = 0 (both solutions)",
      "answer": ["3, -3", "±3", "-3, 3"],
      "display": "x = ±3",
      "generate": function () {
        const a = GenUtils.pick([2, 3, 4, 5, 6, 7, 8, 9, 10, 12]);
        return {
          prompt: `Solve x² - ${a * a} = 0 (both solutions)`,
          answer: [`${a}, -${a}`, `±${a}`, `-${a}, ${a}`],
          display: `x = ±${a}`
        };
      }
    },
    {
      "id": 7,
      "topic": "Quadratic",
      "prompt": "Factor: x² + 5x + 6",
      "answer": ["(x+2)(x+3)", "(x+3)(x+2)"],
      "display": "(x+2)(x+3)",
      "generate": function () {
        const r1 = GenUtils.randomInt(1, 6);
        const r2 = GenUtils.randomInt(1, 6);
        const b = r1 + r2;
        const c = r1 * r2;
        return {
          prompt: `Factor: x² + ${b}x + ${c}`,
          answer: [`(x+${r1})(x+${r2})`, `(x+${r2})(x+${r1})`],
          display: `(x+${r1})(x+${r2})`
        };
      }
    },
    {
      "id": 8,
      "topic": "Quadratic",
      "prompt": "The discriminant b² - 4ac tells us the number of ___",
      "answer": ["solutions", "roots", "real roots"],
      "display": "Solutions/Roots",
      "generate": function () {
        return {
          prompt: "In ax² + bx + c = 0, what is the formula for the discriminant?",
          answer: ["b^2-4ac", "b^2 - 4ac", "b²-4ac"],
          display: "b² - 4ac"
        };
      }
    },
    {
      "id": 9,
      "topic": "Quadratic",
      "prompt": "If discriminant = 0, how many real solutions?",
      "answer": ["1", "one"],
      "display": "1",
      "generate": function () {
        return {
          prompt: "If b² - 4ac = 0, the parabola ___ the x-axis (intersects twice / touches once / never touches)",
          answer: ["touches once", "touches", "once"],
          display: "Touches once"
        };
      }
    },
    {
      "id": 10,
      "topic": "Quadratic",
      "prompt": "If discriminant < 0, how many real solutions?",
      "answer": ["0", "none", "zero"],
      "display": "0 (complex)",
      "generate": function () {
        const a = 1;
        const b = 2;
        const c = 5;
        return {
          prompt: `How many REAL solutions for x² + ${b}x + ${c} = 0?`,
          answer: ["0", "none", "zero"],
          display: "0 (Discriminant < 0)"
        };
      }
    },
    {
      "id": 11,
      "topic": "Expanding",
      "prompt": "(x + 2)(x + 3) = x² + ?x + 6",
      "answer": ["5"],
      "display": "5",
      "generate": function () {
        const a = GenUtils.randomInt(1, 9);
        const b = GenUtils.randomInt(1, 9);
        return {
          prompt: `(x + ${a})(x + ${b}) = x² + ?x + ${a * b}`,
          answer: [(a + b).toString()],
          display: (a + b).toString()
        };
      }
    },
    {
      "id": 12,
      "topic": "Expanding",
      "prompt": "FOIL stands for First, Outer, ___, Last",
      "answer": ["inner"],
      "display": "Inner",
      "generate": function () {
        return {
          prompt: "What does the 'O' in FOIL stand for?",
          answer: ["outer"],
          display: "Outer"
        };
      }
    },
    {
      "id": 13,
      "topic": "Factoring",
      "prompt": "Factor: 6x² + 9x (GCF)",
      "answer": ["3x(2x+3)"],
      "display": "3x(2x + 3)",
      "generate": function () {
        const common = GenUtils.randomInt(2, 5);
        const a = GenUtils.randomInt(2, 4);
        const b = GenUtils.randomInt(2, 5);
        return {
          prompt: `Factor GCF: ${common * a}x² + ${common * b}x`,
          answer: [`${common}x(${a}x+${b})`, `${common}x(${a}x + ${b})`],
          display: `${common}x(${a}x + ${b})`
        };
      }
    },
    {
      "id": 14,
      "topic": "Factoring",
      "prompt": "Factor: x² - 16 (difference of squares)",
      "answer": ["(x+4)(x-4)", "(x-4)(x+4)"],
      "display": "(x+4)(x-4)",
      "generate": function () {
        const a = GenUtils.randomInt(2, 12);
        return {
          prompt: `Factor: x² - ${a * a} (difference of squares)`,
          answer: [`(x+${a})(x-${a})`, `(x-${a})(x+${a})`],
          display: `(x+${a})(x-${a})`
        };
      }
    },
    {
      "id": 15,
      "topic": "Simplify",
      "prompt": "Simplify: (x² - 4)/(x + 2)",
      "answer": ["x-2", "x - 2"],
      "display": "x - 2",
      "generate": function () {
        const a = GenUtils.randomInt(2, 9);
        return {
          prompt: `Simplify: (x² - ${a * a}) / (x - ${a})`,
          answer: [`x+${a}`, `x + ${a}`],
          display: `x + ${a}`
        };
      }
    },
    {
      "id": 16,
      "topic": "Systems",
      "prompt": "To solve Ax = b in matrix form, x = ?",
      "answer": ["a^-1 b", "A⁻¹b", "inv(a)*b"],
      "display": "A⁻¹b",
      "generate": function () {
        return {
          prompt: "If Ax = b, and A is invertible, what is the expression for x?",
          answer: ["A^-1b", "A^-1*b", "inv(A)b", "A⁻¹b"],
          display: "A⁻¹b"
        };
      }
    },
    {
      "id": 17,
      "topic": "Systems",
      "prompt": "If det(A) = 0, the system has ___ unique solution(s)",
      "answer": ["no", "0", "none", "zero"],
      "display": "No unique solution",
      "generate": function () {
        return {
          prompt: "A matrix with det(A) = 0 is called a ___ matrix.",
          answer: ["singular"],
          display: "Singular"
        };
      }
    },
    {
      "id": 18,
      "topic": "Special",
      "prompt": "(a + b)² = a² + ___ + b²",
      "answer": ["2ab"],
      "display": "2ab",
      "generate": function () {
        const n = GenUtils.randomInt(2, 10);
        return {
          prompt: `Expand (x + ${n})² = x² + ?x + ${n * n}`,
          answer: [(2 * n).toString()],
          display: (2 * n).toString()
        };
      }
    },
    {
      "id": 19,
      "topic": "Special",
      "prompt": "(a - b)² = a² - ___ + b²",
      "answer": ["2ab"],
      "display": "2ab",
      "generate": function () {
        const n = GenUtils.randomInt(2, 10);
        return {
          prompt: `Expand (x - ${n})² = x² - ?x + ${n * n}`,
          answer: [(2 * n).toString()],
          display: (2 * n).toString()
        };
      }
    },
    {
      "id": 20,
      "topic": "Special",
      "prompt": "a² - b² = (a + b)(___)",
      "answer": ["a-b", "a - b"],
      "display": "(a - b)",
      "generate": function () {
        return {
          prompt: "True or False: a² + b² can be factored into real linear terms like (a+b)(a+b).",
          answer: ["false", "f"],
          display: "False (only difference of squares factors)"
        };
      }
    }
  ],
  "day3": [
    {
      "id": 1,
      "topic": "Basics",
      "prompt": "A function maps each ___ to exactly one output",
      "answer": ["input"],
      "display": "Input",
      "generate": function () {
        return {
          prompt: "In the mapping f: A → B, the set A is called the ___.",
          answer: ["domain"],
          display: "Domain"
        };
      }
    },
    {
      "id": 2,
      "topic": "Basics",
      "prompt": "If f(x) = 2x + 3, what is f(5)?",
      "answer": ["13"],
      "display": "13",
      "generate": function () {
        const a = GenUtils.randomInt(2, 6);
        const b = GenUtils.randomInt(1, 10);
        const x = GenUtils.randomInt(1, 10);
        return {
          prompt: `If f(x) = ${a}x + ${b}, what is f(${x})?`,
          answer: [(a * x + b).toString()],
          display: (a * x + b).toString()
        };
      }
    },
    {
      "id": 3,
      "topic": "Domain",
      "prompt": "The set of all valid inputs is called the ___",
      "answer": ["domain"],
      "display": "Domain",
      "generate": function () {
        return {
          prompt: "The set of ALL possible inputs for which a function is defined is the ___.",
          answer: ["domain"],
          display: "Domain"
        };
      }
    },
    {
      "id": 4,
      "topic": "Range",
      "prompt": "The set of all possible outputs is called the ___",
      "answer": ["range"],
      "display": "Range",
      "generate": function () {
        return {
          prompt: "The set of all ACTUAL values produced by a function is the ___.",
          answer: ["range"],
          display: "Range"
        };
      }
    },
    {
      "id": 5,
      "topic": "Domain",
      "prompt": "For f(x) = 1/(x-3), what value must x NOT equal?",
      "answer": ["3"],
      "display": "x ≠ 3",
      "generate": function () {
        const a = GenUtils.randomInt(1, 15);
        return {
          prompt: `For f(x) = 1 / (x - ${a}), what value must x NOT equal?`,
          answer: [a.toString()],
          display: `x ≠ ${a}`
        };
      }
    },
    {
      "id": 6,
      "topic": "Domain",
      "prompt": "For f(x) = √(x-2), x must be ≥ ?",
      "answer": ["2"],
      "display": "x ≥ 2",
      "generate": function () {
        const a = GenUtils.randomInt(1, 20);
        return {
          prompt: `For f(x) = √(x - ${a}), x must be ≥ ?`,
          answer: [a.toString()],
          display: `x ≥ ${a}`
        };
      }
    },
    {
      "id": 7,
      "topic": "Inverse",
      "prompt": "If f(x) = 2x + 3, then f⁻¹(x) = ?",
      "answer": ["(x-3)/2", "(x - 3) / 2"],
      "display": "(x - 3)/2",
      "generate": function () {
        const a = GenUtils.randomInt(2, 5);
        const b = GenUtils.randomInt(1, 10);
        return {
          prompt: `If f(x) = ${a}x + ${b}, find f⁻¹(x).`,
          answer: [`(x-${b})/${a}`, `(x - ${b}) / ${a}`],
          display: `(x - ${b}) / ${a}`
        };
      }
    },
    {
      "id": 8,
      "topic": "Inverse",
      "prompt": "f⁻¹(f(x)) = ?",
      "answer": ["x"],
      "display": "x",
      "generate": function () {
        return {
          prompt: "The composition of a function and its inverse, f(f⁻¹(x)), always equals ___.",
          answer: ["x"],
          display: "x"
        };
      }
    },
    {
      "id": 9,
      "topic": "Inverse",
      "prompt": "True or False: f⁻¹(x) means 1/f(x)",
      "answer": ["false", "f"],
      "display": "False",
      "generate": function () {
        return {
          prompt: "Does the notation f⁻¹(x) represent the reciprocal 1/f(x)? (Yes/No)",
          answer: ["no", "n"],
          display: "No (It represents the inverse function)"
        };
      }
    },
    {
      "id": 10,
      "topic": "Inverse",
      "prompt": "A function must be ___ to have an inverse",
      "answer": ["one-to-one", "1-1", "injective"],
      "display": "One-to-one",
      "generate": function () {
        return {
          prompt: "A function must be ___ (meaning it passes the Horizontal Line Test) to have an inverse function.",
          answer: ["one-to-one", "1-1", "injective"],
          display: "One-to-one / Injective"
        };
      }
    },
    {
      "id": 11,
      "topic": "Composition",
      "prompt": "(f ∘ g)(x) means f(___)",
      "answer": ["g(x)"],
      "display": "g(x)",
      "generate": function () {
        return {
          prompt: "In the composition (g ∘ f)(x), which function is evaluated first?",
          answer: ["f", "f(x)"],
          display: "f(x)"
        };
      }
    },
    {
      "id": 12,
      "topic": "Composition",
      "prompt": "If f(x)=x² and g(x)=x+1, what is (f∘g)(3)?",
      "answer": ["16"],
      "display": "16",
      "generate": function () {
        const a = GenUtils.randomInt(1, 5);
        const b = GenUtils.randomInt(1, 5);
        const x = GenUtils.randomInt(1, 4);
        // f(x)=x^2, g(x)=ax+b. (f og)(x) = (ax+b)^2
        const inner = a * x + b;
        const result = inner * inner;
        return {
          prompt: `If f(x) = x² and g(x) = ${a}x + ${b}, what is (f ∘ g)(${x})?`,
          answer: [result.toString()],
          display: result.toString()
        };
      }
    },
    {
      "id": 13,
      "topic": "Composition",
      "prompt": "True or False: f ∘ g = g ∘ f for all functions",
      "answer": ["false", "f"],
      "display": "False",
      "generate": function () {
        return {
          prompt: "Does the order of composition matter? Is f(g(x)) generally equal to g(f(x))? (Yes/No)",
          answer: ["no", "n"],
          display: "No (Composition is not commutative)"
        };
      }
    },
    {
      "id": 14,
      "topic": "Tests",
      "prompt": "The ___ line test determines if a graph is a function",
      "answer": ["vertical"],
      "display": "Vertical",
      "generate": function () {
        return {
          prompt: "If a line x = k intersects a graph at more than one point, the graph fails the ___ Line Test.",
          answer: ["vertical"],
          display: "Vertical"
        };
      }
    },
    {
      "id": 15,
      "topic": "Tests",
      "prompt": "The ___ line test determines if a function has an inverse",
      "answer": ["horizontal"],
      "display": "Horizontal",
      "generate": function () {
        return {
          prompt: "To be injective (and thus have an inverse), a function must pass the ___ Line Test.",
          answer: ["horizontal"],
          display: "Horizontal"
        };
      }
    },
    {
      "id": 16,
      "topic": "Inverse",
      "prompt": "The domain of f⁻¹ equals the ___ of f",
      "answer": ["range"],
      "display": "Range",
      "generate": function () {
        return {
          prompt: "The range of f⁻¹ is equal to the ___ of f.",
          answer: ["domain"],
          display: "Domain"
        };
      }
    },
    {
      "id": 17,
      "topic": "Composition",
      "prompt": "If f(x)=2x and g(x)=x-3, find (f∘g)(x)",
      "answer": ["2x-6", "2(x-3)", "2x - 6"],
      "display": "2x - 6",
      "generate": function () {
        const a = GenUtils.randomInt(2, 5);
        const b = GenUtils.randomInt(1, 10);
        return {
          prompt: `If f(x) = ${a}x and g(x) = x + ${b}, find (f ∘ g)(x).`,
          answer: [`${a}x+${a * b}`, `${a}(x+${b})`, `${a}x + ${a * b}`],
          display: `${a}x + ${a * b}`
        };
      }
    },
    {
      "id": 18,
      "topic": "Inverse",
      "prompt": "x² has no inverse over all reals because it's not ___",
      "answer": ["one-to-one", "1-1", "injective"],
      "display": "One-to-one",
      "generate": function () {
        return {
          prompt: "Why does f(x) = |x| not have a unique inverse over all real numbers?",
          answer: ["not one-to-one", "not injective", "fails horizontal line test"],
          display: "Not one-to-one (Injective)"
        };
      }
    },
    {
      "id": 19,
      "topic": "Examples",
      "prompt": "Encrypt and decrypt are ___ functions of each other",
      "answer": ["inverse"],
      "display": "Inverse",
      "generate": function () {
        return {
          prompt: "In a zip file, 'Compression' and 'Decompression' are examples of ___ operations.",
          answer: ["inverse"],
          display: "Inverse"
        };
      }
    },
    {
      "id": 20,
      "topic": "Basics",
      "prompt": "Type hints like (x: int) -> str are kinda like declaring ___ → range",
      "answer": ["domain"],
      "display": "Domain",
      "generate": function () {
        return {
          prompt: "In a function signature `double(x: number): number`, the first `number` describes the ___.",
          answer: ["domain"],
          display: "Domain"
        };
      }
    },
    {
      "id": 21,
      "topic": "FP",
      "prompt": "A function with no side effects is called a ___ function.",
      "answer": ["pure"],
      "display": "Pure",
      "generate": function () {
        return {
          prompt: "A function that always returns the same output for the same input and has NO side effects is called ___.",
          answer: ["pure"],
          display: "Pure"
        };
      }
    },
    {
      "id": 22,
      "topic": "Composition",
      "prompt": "Result of (f∘g)(x) if f(x)=x+1, g(x)=x*2, x=5?",
      "answer": ["11"],
      "display": "11",
      "generate": function () {
        const x = GenUtils.randomInt(2, 10);
        const a = GenUtils.randomInt(2, 5);
        const b = GenUtils.randomInt(1, 5);
        // f(x)=x+b, g(x)=x*a. f(g(x)) = (xa)+b
        const result = x * a + b;
        return {
          prompt: `Result of f(g(x)) if f(x) = x + ${b}, g(x) = x * ${a}, and x = ${x}?`,
          answer: [result.toString()],
          display: result.toString()
        };
      }
    },
    {
      "id": 23,
      "topic": "Currying",
      "prompt": "Transforming f(a,b) to f(a)(b) is called ___.",
      "answer": ["currying"],
      "display": "Currying",
      "generate": function () {
        return {
          prompt: "What is the name of the technique that translates a function with multiple arguments into a sequence of functions?",
          answer: ["currying"],
          display: "Currying"
        };
      }
    },
    {
      "id": 24,
      "topic": "Inverse",
      "prompt": "Find f⁻¹(x) for f(x) = 3x - 6",
      "answer": ["(x+6)/3", "x/3 + 2"],
      "display": "(x+6)/3",
      "generate": function () {
        const a = GenUtils.randomInt(2, 6);
        const b = a * GenUtils.randomInt(1, 5); // ensures integer simplification if wanted
        return {
          prompt: `Find f⁻¹(x) for f(x) = ${a}x - ${b}`,
          answer: [`(x+${b})/${a}`, `x/${a}+${b / a}`, `(x + ${b}) / ${a}`],
          display: `(x + ${b}) / ${a}`
        };
      }
    },
    {
      "id": 25,
      "topic": "Total/Partial",
      "prompt": "A function that might return null for some domain inputs is a ___ function.",
      "answer": ["partial"],
      "display": "Partial",
      "generate": function () {
        return {
          prompt: "A function defined for only SOME values in its apparent domain is called a ___ function.",
          answer: ["partial"],
          display: "Partial"
        };
      }
    },
    {
      "id": 26,
      "topic": "Composition",
      "prompt": "True or False: Shell piping (|) is a form of function composition.",
      "answer": ["true", "t"],
      "display": "True",
      "generate": function () {
        return {
          prompt: "In Unix, `cat file | grep 'x' | wc` represents multiple applications of ___. ",
          answer: ["composition", "function composition"],
          display: "Composition"
        };
      }
    },
    {
      "id": 27,
      "topic": "Tests",
      "prompt": "If a function fails the Horizontal Line Test, it does not have a ___.",
      "answer": ["inverse", "unique inverse"],
      "display": "Inverse",
      "generate": function () {
        return {
          prompt: "To have an inverse, a function must be bijective. If it is only surjective but fails the Horizontal Line Test, it is not ___.",
          answer: ["injective", "one-to-one"],
          display: "Injective"
        };
      }
    },
    {
      "id": 28,
      "topic": "Basics",
      "prompt": "A Hash Map key maps to exactly one value, making it a $(\text{function/relation})$.",
      "answer": ["function"],
      "display": "Function",
      "generate": function () {
        return {
          prompt: "If a database query for a Primary Key returns exactly one record, that mapping is a ___.",
          answer: ["function"],
          display: "Function"
        };
      }
    },
    {
      "id": 29,
      "topic": "Range",
      "prompt": "The actual set of values produced by a function is the ___.",
      "answer": ["range"],
      "display": "Range",
      "generate": function () {
        return {
          prompt: "If f: A → B, the set B is the Codomain, but the set of values actually HIT is the ___.",
          answer: ["range"],
          display: "Range"
        };
      }
    },
    {
      "id": 30,
      "topic": "Domain",
      "prompt": "Domain of f(x) = 1/x is all reals except ___.",
      "answer": ["0", "zero"],
      "display": "0",
      "generate": function () {
        const a = GenUtils.randomInt(-10, 10);
        return {
          prompt: `Domain of f(x) = 1 / (x + ${a}) is all reals except x = ___?`,
          answer: [(-a).toString()],
          display: (-a).toString()
        };
      }
    },
    {
      "id": 31,
      "topic": "FP",
      "prompt": "Using 'reduce' to sum a list is part of the $(\text{procedural/functional})$ paradigm.",
      "answer": ["functional"],
      "display": "Functional",
      "generate": function () {
        return {
          prompt: "Map, Filter, and Reduce are core tools of the ___ programming paradigm.",
          answer: ["functional"],
          display: "Functional"
        };
      }
    },
    {
      "id": 32,
      "topic": "Compose",
      "prompt": "Function composition f(g(x)) is often read as 'f $(\text{before/after})$ g'.",
      "answer": ["after"],
      "display": "after",
      "generate": function () {
        return {
          prompt: "In (f ∘ g)(x), the output of g becomes the ___ of f.",
          answer: ["input", "domain"],
          display: "Input"
        };
      }
    },
    {
      "id": 33,
      "topic": "Inverse",
      "prompt": "Reflection of f(x) across y=x gives the graph of ___.",
      "answer": ["f⁻¹(x)", "inverse", "f-1(x)"],
      "display": "f⁻¹(x)",
      "generate": function () {
        return {
          prompt: "If the point (2, 5) is on the graph of f, what point must be on the graph of f⁻¹?",
          answer: ["(5, 2)", "5, 2", "5,2"],
          display: "(5, 2)"
        };
      }
    },
    {
      "id": 34,
      "topic": "Currying",
      "prompt": "Partial application is a benefit of $(\text{recursion/currying})$.",
      "answer": ["currying"],
      "display": "Currying",
      "generate": function () {
        return {
          prompt: "Pre-filling some arguments of a function to create a more specific version is called ___ Application.",
          answer: ["partial"],
          display: "Partial"
        };
      }
    },
    {
      "id": 35,
      "topic": "Determinism",
      "prompt": "If pressing 'A1' on a vending machine gives both chips and cookies, it is NOT a ___.",
      "answer": ["function"],
      "display": "Function",
      "generate": function () {
        return {
          prompt: "In mathematics, if an input maps to TWO different outputs, the relation is NOT a ___.",
          answer: ["function"],
          display: "Function"
        };
      }
    }
  ],
  "day4": [
    {
      "id": 1,
      "topic": "Definitions",
      "prompt": "A proof that proceeds directly from assumptions to conclusion is a ___ proof.",
      "answer": ["direct"],
      "display": "Direct",
      "generate": function () {
        return {
          prompt: "A proof that starts with axioms and uses logical steps to reach the target is a ___ proof.",
          answer: ["direct"],
          display: "Direct"
        };
      }
    },
    {
      "id": 2,
      "topic": "Logic",
      "prompt": "The contrapositive of 'If P, then Q' is 'If not Q, then ___'.",
      "answer": ["not p", "!p", "notp"],
      "display": "Not P",
      "generate": function () {
        return {
          prompt: "The contrapositive of 'A → B' is '¬B → ___'.",
          answer: ["not a", "!a", "¬a"],
          display: "¬A"
        };
      }
    },
    {
      "id": 3,
      "topic": "Logic",
      "prompt": "True or False: A statement and its contrapositive are logically equivalent.",
      "answer": ["true", "t"],
      "display": "True",
      "generate": function () {
        return {
          prompt: "If P → Q is true, is ¬Q → ¬P also guaranteed to be true? (Yes/No)",
          answer: ["yes", "y", "true", "t"],
          display: "Yes (Logically Equivalent)"
        };
      }
    },
    {
      "id": 4,
      "topic": "Contradiction",
      "prompt": "To prove P by contradiction, you assume ___ and derive a contradiction.",
      "answer": ["not p", "!p", "negation of p"],
      "display": "Not P (Negation)",
      "generate": function () {
        return {
          prompt: "In a Reductio ad Absurdum proof, you assume the ___ is true, then find a flaw.",
          answer: ["negation", "opposite", "not p"],
          display: "Negation"
        };
      }
    },
    {
      "id": 5,
      "topic": "Induction",
      "prompt": "The first step of mathematical induction is the ___ case.",
      "answer": ["base"],
      "display": "Base",
      "generate": function () {
        return {
          prompt: "Showing that P(1) (or P(start)) is true is the ___ case of induction.",
          answer: ["base"],
          display: "Base"
        };
      }
    },
    {
      "id": 6,
      "topic": "Induction",
      "prompt": "In the inductive step, you assume P(k) is true. This assumption is called the Inductive ___.",
      "answer": ["hypothesis"],
      "display": "Hypothesis",
      "generate": function () {
        return {
          prompt: "The 'IH' in IH → step stands for Inductive ___.",
          answer: ["hypothesis"],
          display: "Hypothesis"
        };
      }
    },
    {
      "id": 7,
      "topic": "Invariants",
      "prompt": "A condition that remains true before and after each loop iteration is a loop ___.",
      "answer": ["invariant"],
      "display": "Invariant",
      "generate": function () {
        return {
          prompt: "To prove a loop works, you find a property called a Loop ___.",
          answer: ["invariant"],
          display: "Invariant"
        };
      }
    },
    {
      "id": 8,
      "topic": "Definitions",
      "prompt": "An integer n is even if n = ___ for some integer k.",
      "answer": ["2k"],
      "display": "2k",
      "generate": function () {
        return {
          prompt: "A number is even if it can be written as 2*k. A number is odd if it can be written as ___.",
          answer: ["2k+1", "2k + 1"],
          display: "2k + 1"
        };
      }
    },
    {
      "id": 9,
      "topic": "Definitions",
      "prompt": "An integer n is odd if n = ___ for some integer k.",
      "answer": ["2k+1", "2k + 1"],
      "display": "2k + 1",
      "generate": function () {
        return {
          prompt: "If n = 2k + 1, then n is $(\text{even/odd})$.",
          answer: ["odd"],
          display: "Odd"
        };
      }
    },
    {
      "id": 10,
      "topic": "Latin",
      "prompt": "Q.E.D. stands for 'quod erat ___'.",
      "answer": ["demonstrandum"],
      "display": "Demonstrandum",
      "generate": function () {
        return {
          prompt: "The Latin phrase meaning 'which was to be shown' is ___.",
          answer: ["quod erat demonstrandum", "qed"],
          display: "Quod Erat Demonstrandum"
        };
      }
    },
    {
      "id": 11,
      "topic": "Acronyms",
      "prompt": "WLOG stands for 'Without Loss of ___'.",
      "answer": ["generality"],
      "display": "Generality",
      "generate": function () {
        return {
          prompt: "Math writers use 'Without Loss of Generality' to simplify cases. The acronym is ___.",
          answer: ["wlog"],
          display: "WLOG"
        };
      }
    },
    {
      "id": 12,
      "topic": "Logic",
      "prompt": "To disprove 'For all x, P(x)', you only need one ___.",
      "answer": ["counterexample", "counter-example"],
      "display": "Counterexample",
      "generate": function () {
        return {
          prompt: "Universal claims are brittle; they can be broken by finding a single ___.",
          answer: ["counterexample", "counter-example"],
          display: "Counterexample"
        };
      }
    },
    {
      "id": 13,
      "topic": "Examples",
      "prompt": "True or False: The sum of two odd numbers is always odd.",
      "answer": ["false", "f"],
      "display": "False (It's even!)",
      "generate": function () {
        return {
          prompt: "Is the product of two odd numbers always odd? (True/False)",
          answer: ["true", "t"],
          display: "True ( (2k+1)(2m+1) = 2(2km+k+m)+1 )"
        };
      }
    },
    {
      "id": 14,
      "topic": "Formulas",
      "prompt": "Sum of 1 + 2 + ... + n = ?",
      "answer": ["n(n+1)/2", "n^2/2 + n/2"],
      "display": "n(n+1)/2",
      "generate": function () {
        const n = GenUtils.randomInt(5, 20);
        const result = (n * (n + 1)) / 2;
        return {
          prompt: `Using the formula n(n+1)/2, find the sum of 1 + 2 + ... + ${n}.`,
          answer: [result.toString()],
          display: result.toString()
        };
      }
    },
    {
      "id": 15,
      "topic": "Invariants",
      "prompt": "For binary search, the invariant is that the target must be in the window [lo, ___].",
      "answer": ["hi", "high"],
      "display": "hi",
      "generate": function () {
        return {
          prompt: "Binary search works because it maintains the invariant that the search space $(\text{increases/decreases})$ while keeping the target inside.",
          answer: ["decreases"],
          display: "Decreases"
        };
      }
    },
    {
      "id": 16,
      "topic": "Strong Induction",
      "prompt": "In $(\text{Standard/Strong})$ Induction, you assume the property holds for ALL previous values, not just n.",
      "answer": ["strong"],
      "display": "Strong",
      "generate": function () {
        return {
          prompt: "Assures P(1), P(2) ... P(k) are all true to prove P(k+1) is called ___ induction.",
          answer: ["strong"],
          display: "Strong"
        };
      }
    },
    {
      "id": 17,
      "topic": "Turing",
      "prompt": "The logical contradiction involving a program that does the opposite of its own prediction is the basis for the ___ Problem.",
      "answer": ["halting"],
      "display": "Halting",
      "generate": function () {
        return {
          prompt: "Who proved the Halting Problem is undecidable using a proof by contradiction?",
          answer: ["turing", "alan turing"],
          display: "Alan Turing"
        };
      }
    },
    {
      "id": 18,
      "topic": "Definitions",
      "prompt": "A number that cannot be written as a fraction a/b is $(\text{rational/irrational})$.",
      "answer": ["irrational"],
      "display": "Irrational",
      "generate": function () {
        return {
          prompt: "The classic proof that $\\sqrt{2}$ is irrational uses what technique?",
          answer: ["contradiction", "proof by contradiction"],
          display: "Contradiction"
        };
      }
    },
    {
      "id": 19,
      "topic": "Structural Induction",
      "prompt": "Induction on data structures like trees is called ___ induction.",
      "answer": ["structural"],
      "display": "Structural",
      "generate": function () {
        return {
          prompt: "Recursive data types like Linked Lists are often proven correct using ___ induction.",
          answer: ["structural"],
          display: "Structural"
        };
      }
    },
    {
      "id": 20,
      "topic": "Invariants",
      "prompt": "Loop Invariants are checked at three stages: Initialization, Maintenance, and ___.",
      "answer": ["termination"],
      "display": "Termination",
      "generate": function () {
        return {
          prompt: "Ensuring a loop eventually stops is the ___ property of the invariant proof.",
          answer: ["termination"],
          display: "Termination"
        };
      }
    },
    {
      "id": 21,
      "topic": "Logic",
      "prompt": "P → Q is false ONLY when P is True and Q is ___.",
      "answer": ["false", "f"],
      "display": "False",
      "generate": function () {
        return {
          prompt: "If the 'Clean Room' promise is False, it means you cleaned the room but I $(\text{did/didn't})$ pay.",
          answer: ["didn't", "did not"],
          display: "Didn't"
        };
      }
    },
    {
      "id": 22,
      "topic": "De Morgan",
      "prompt": "¬(A ∧ B) is equivalent to (¬A ___ ¬B).",
      "answer": ["or", "v", "∨"],
      "display": "OR (∨)",
      "generate": function () {
        return {
          prompt: "¬(A ∨ B) is equivalent to (¬A ___ ¬B).",
          answer: ["and", "^", "∧"],
          display: "AND (∧)"
        };
      }
    },
    {
      "id": 23,
      "topic": "Hoare Logic",
      "prompt": "{P} C {Q} is called a ___ Triple.",
      "answer": ["hoare"],
      "display": "Hoare",
      "generate": function () {
        return {
          prompt: "In {P} C {Q}, P is the Precondition and Q is the ___.",
          answer: ["postcondition", "post-condition"],
          display: "Postcondition"
        };
      }
    },
    {
      "id": 24,
      "topic": "SAT",
      "prompt": "A program that finds values for variables to make an expression True is a ___ Solver.",
      "answer": ["sat", "smt"],
      "display": "SAT / SMT",
      "generate": function () {
        return {
          prompt: "Z3 is a famous examples of an ___ solver from Microsoft Research.",
          answer: ["smt", "sat"],
          display: "SMT"
        };
      }
    },
    {
      "id": 25,
      "topic": "Fallacies",
      "prompt": "Assuming what you want to prove in a proof step is called ___ reasoning.",
      "answer": ["circular"],
      "display": "Circular",
      "generate": function () {
        return {
          prompt: "Begging the Question is another name for ___ reasoning.",
          answer: ["circular"],
          display: "Circular"
        };
      }
    },
    {
      "id": 26,
      "topic": "Termination",
      "prompt": "A loop that never stops is called an ___ loop.",
      "answer": ["infinite"],
      "display": "Infinite",
      "generate": function () {
        return {
          prompt: "Proving a recursive function will terminate requires finding a ___ function (which strictly decreases).",
          answer: ["variant", "measure", "ranking"],
          display: "Variant / Measure"
        };
      }
    },
    {
      "id": 27,
      "topic": "Direct Proof",
      "prompt": "If n is even, then n^2 is $(\text{even/odd})$.",
      "answer": ["even"],
      "display": "Even",
      "generate": function () {
        return {
          prompt: "If n is odd, then n^2 is $(\text{even/odd})$.",
          answer: ["odd"],
          display: "Odd"
        };
      }
    },
    {
      "id": 28,
      "topic": "Logic",
      "prompt": "The symbol ¬ represents $(\text{AND/OR/NOT})$.",
      "answer": ["not"],
      "display": "NOT",
      "generate": function () {
        return {
          prompt: "The symbol ∧ represents $(\text{AND/OR/NOT})$.",
          answer: ["and"],
          display: "AND"
        };
      }
    },
    {
      "id": 29,
      "topic": "Verification",
      "prompt": "Developing software where the compiler checks your proof is called Formal ___.",
      "answer": ["verification"],
      "display": "Verification",
      "generate": function () {
        return {
          prompt: "Amazon and NASA use formal ___ to catch bugs that testing cannot find.",
          answer: ["verification"],
          display: "Verification"
        };
      }
    },
    {
      "id": 30,
      "topic": "Russell",
      "prompt": "Russell's Paradox involving 'The set of all sets...' led to the creation of ___ Theory.",
      "answer": ["type"],
      "display": "Type",
      "generate": function () {
        return {
          prompt: "TypeScript and Rust use concepts from ___ Theory to ensure memory safety.",
          answer: ["type"],
          display: "Type"
        };
      }
    },
    {
      "id": 31,
      "topic": "Assert",
      "prompt": "In Python/JS, the command `assert(P)` is a way to bake ___ into your code.",
      "answer": ["invariants", "logic", "proofs"],
      "display": "Invariants / Proofs",
      "generate": function () {
        return {
          prompt: "If an `assert` fails, it means your implicit ___ was wrong.",
          answer: ["proof", "logic", "assumption"],
          display: "Proof / Logic"
        };
      }
    },
    {
      "id": 32,
      "topic": "Logic",
      "prompt": "P ↔ Q is True ONLY when P and Q have the $(\text{same/different})$ truth value.",
      "answer": ["same"],
      "display": "Same",
      "generate": function () {
        return {
          prompt: "A Bi-conditional statement P if and only if Q is written as P ___ Q.",
          answer: ["↔", "<->", "iff"],
          display: "↔"
        };
      }
    },
    {
      "id": 33,
      "topic": "History",
      "prompt": "The 'Elements'—the first axiomatic proof system—was written by ___.",
      "answer": ["euclid"],
      "display": "Euclid",
      "generate": function () {
        return {
          prompt: "Euclid's 5 Assumptions are called ___.",
          answer: ["axioms", "postulates"],
          display: "Axioms"
        };
      }
    },
    {
      "id": 34,
      "topic": "Fallacies",
      "prompt": "Assuming that P → Q implies Q → P is the fallacy of Affirming the ___.",
      "answer": ["consequent"],
      "display": "Consequent",
      "generate": function () {
        return {
          prompt: "Assuming that P → Q implies ¬P → ¬Q is the fallacy of Denying the ___.",
          answer: ["antecedent"],
          display: "Antecedent"
        };
      }
    },
    {
      "id": 35,
      "topic": "Proof Assistants",
      "prompt": "Lean 4 and Coq are examples of Proof ___.",
      "answer": ["assistants"],
      "display": "Assistants",
      "generate": function () {
        return {
          prompt: "In a Proof Assistant, a small script that generates part of a proof is called a ___.",
          answer: ["tactic"],
          display: "Tactic"
        };
      }
    }
  ],
  "day5": [
    {
      "id": 1,
      "topic": "Structure",
      "prompt": "The four parts of a proof are: Definitions, Claim, Proof, and ___",
      "answer": ["qed", "∎"],
      "display": "QED (or ∎)",
      "generate": function () {
        return {
          prompt: "The acronym Q.E.D. marks the end of a proof. Another common symbol for this is the ___ (or 'tombstone').",
          answer: ["blacksquare", "∎", "tombstone"],
          display: "∎ (Blacksquare)"
        };
      }
    },
    {
      "id": 2,
      "topic": "Structure",
      "prompt": "A helper result used to prove a theorem is called a ___",
      "answer": ["lemma"],
      "display": "Lemma",
      "generate": function () {
        return {
          prompt: "Small mathematical 'utility functions' used to support a main result are called ___.",
          answer: ["lemmas", "lemma"],
          display: "Lemmas"
        };
      }
    },
    {
      "id": 3,
      "topic": "Structure",
      "prompt": "An easy consequence of a theorem is called a ___",
      "answer": ["corollary"],
      "display": "Corollary",
      "generate": function () {
        return {
          prompt: "If Theorem B follows immediately from Theorem A, B is called a ___.",
          answer: ["corollary"],
          display: "Corollary"
        };
      }
    },
    {
      "id": 4,
      "topic": "Definitions",
      "prompt": "n is even means n = ___ for some integer k",
      "answer": ["2k"],
      "display": "2k",
      "generate": function () {
        const k = GenUtils.randomInt(5, 50);
        const n = 2 * k;
        return {
          prompt: `To prove ${n} is even, we find an integer k such that ${n} = 2k. Here, k = ___?`,
          answer: [k.toString()],
          display: k.toString()
        };
      }
    },
    {
      "id": 5,
      "topic": "Definitions",
      "prompt": "n is odd means n = ___ for some integer k",
      "answer": ["2k+1", "2k + 1"],
      "display": "2k + 1",
      "generate": function () {
        const k = GenUtils.randomInt(5, 50);
        const n = 2 * k + 1;
        return {
          prompt: `To prove ${n} is odd, we find an integer k such that ${n} = 2k + 1. Here, k = ___?`,
          answer: [k.toString()],
          display: k.toString()
        };
      }
    },
    {
      "id": 6,
      "topic": "Claims",
      "prompt": "Complete: 'For all x, if P(x) then ___'",
      "answer": ["q(x)"],
      "display": "Q(x)",
      "generate": function () {
        return {
          prompt: "In the claim '∀x, P(x) → Q(x)', we call P(x) the hypothesis and Q(x) the ___.",
          answer: ["conclusion"],
          display: "Conclusion"
        };
      }
    },
    {
      "id": 7,
      "topic": "Claims",
      "prompt": "The symbol ∀ means ___",
      "answer": ["for all", "for every"],
      "display": "for all",
      "generate": function () {
        return {
          prompt: "The UPSIDE-DOWN 'A' symbol (∀) represents which quantifier?",
          answer: ["universal", "for all", "every"],
          display: "Universal (For All)"
        };
      }
    },
    {
      "id": 8,
      "topic": "Claims",
      "prompt": "The symbol ∃ means ___",
      "answer": ["there exists", "exists"],
      "display": "there exists",
      "generate": function () {
        return {
          prompt: "The BACKWARDS 'E' symbol (∃) represents which quantifier?",
          answer: ["existential", "exists"],
          display: "Existential (Exists)"
        };
      }
    },
    {
      "id": 9,
      "topic": "Claims",
      "prompt": "'P if and only if Q' can be written with symbol ___",
      "answer": ["⟺", "↔", "iff"],
      "display": "⟺ or ↔",
      "generate": function () {
        return {
          prompt: "A bi-conditional statement where P implies Q AND Q implies P is called 'P ___ Q'.",
          answer: ["iff", "if and only if", "↔"],
          display: "Iff (if and only if)"
        };
      }
    },
    {
      "id": 10,
      "topic": "Style",
      "prompt": "Before using variable ε, you should first ___ it",
      "answer": ["define", "introduce", "declare"],
      "display": "define/introduce",
      "generate": function () {
        return {
          prompt: "In math, just like in code, you should never use a variable (like $x$ or $\\epsilon$) before it is ___.",
          answer: ["defined", "declared", "introduced", "bound"],
          display: "Defined / Declared"
        };
      }
    },
    {
      "id": 11,
      "topic": "Error",
      "prompt": "Proving P(5) is true shows 'for all n, P(n)' — True or False?",
      "answer": ["false", "f", "no"],
      "display": "False",
      "generate": function () {
        return {
          prompt: "If you prove a theorem works for the case n=10, have you proven it for ALL n? (Yes/No)",
          answer: ["no", "n", "false", "f"],
          display: "No (One example is not a proof)"
        };
      }
    },
    {
      "id": 12,
      "topic": "Style",
      "prompt": "Using what you're trying to prove as a step is called ___ reasoning",
      "answer": ["circular"],
      "display": "Circular",
      "generate": function () {
        return {
          prompt: "Assuming the conclusion to prove the conclusion is the logical fallacy of ___ Reasoning.",
          answer: ["circular"],
          display: "Circular"
        };
      }
    },
    {
      "id": 13,
      "topic": "Structure",
      "prompt": "A mathematical statement that is believed to be true but not yet proven is a ___.",
      "answer": ["conjecture"],
      "display": "Conjecture",
      "generate": function () {
        return {
          prompt: "Goldbach's ___ is a famous example of something believed to be true but unproven for centuries.",
          answer: ["conjecture"],
          display: "Conjecture"
        };
      }
    },
    {
      "id": 14,
      "topic": "Claims",
      "prompt": "What is the negation of 'For all x, P(x)'? (use symbols)",
      "answer": ["exists x, not p(x)", "∃x, ¬P(x)"],
      "display": "∃x, ¬P(x)",
      "generate": function () {
        return {
          prompt: "Negating a Universal claim (∀) results in an ___ claim (∃).",
          answer: ["existential"],
          display: "Existential"
        };
      }
    },
    {
      "id": 15,
      "topic": "Style",
      "prompt": "True or False: In a high-quality proof, you should explain your reasoning in sentences, not just symbols.",
      "answer": ["true", "t"],
      "display": "True",
      "generate": function () {
        return {
          prompt: "Is it better to write a proof as a wall of symbols or as clear prose? (Symbols/Prose)",
          answer: ["prose", "text", "sentences"],
          display: "Prose (Clear sentences are easier to follow)"
        };
      }
    },
    {
      "id": 16,
      "topic": "Definitions",
      "prompt": "A prime number is an integer > 1 whose only divisors are 1 and ___.",
      "answer": ["itself", "n"],
      "display": "itself",
      "generate": function () {
        const p = 17; // or any prime
        return {
          prompt: `A number $n$ is prime if it has exactly two divisors: 1 and ___.`,
          answer: ["n", "itself"],
          display: "n (or itself)"
        };
      }
    },
    {
      "id": 17,
      "topic": "Structure",
      "prompt": "Which is usually a smaller, helper result: a Lemma or a Theorem?",
      "answer": ["lemma"],
      "display": "Lemma",
      "generate": function () {
        return {
          prompt: "In a professional paper, a '___' is often just a stepping stone to a 'Theorem'.",
          answer: ["lemma"],
          display: "Lemma"
        };
      }
    },
    {
      "id": 18,
      "topic": "Error",
      "prompt": "Skipping a step because it 'seems obvious' is a common source of logical ___.",
      "answer": ["errors", "bugs", "flaws"],
      "display": "Errors/Flaws",
      "generate": function () {
        return {
          prompt: "Informal 'Hand-waving' in a proof is the equivalent of leaving a recursive function without a ___ case.",
          answer: ["base"],
          display: "Base"
        };
      }
    },
    {
      "id": 19,
      "topic": "Style",
      "prompt": "What does 'WLOG' stand for in math writing?",
      "answer": ["without loss of generality"],
      "display": "Without Loss of Generality",
      "generate": function () {
        return {
          prompt: "Writing '___' allows a mathematician to assume a symmetry (like x ≤ y) to simplify a proof.",
          answer: ["wlog", "without loss of generality"],
          display: "WLOG"
        };
      }
    },
    {
      "id": 20,
      "topic": "Claims",
      "prompt": "A statement like 'If P then Q' is called a ___ statement.",
      "answer": ["conditional", "implication"],
      "display": "Conditional / Implication",
      "generate": function () {
        return {
          prompt: "The logical structure 'Hypothesis → Conclusion' is an ___.",
          answer: ["implication", "conditional"],
          display: "Implication"
        };
      }
    },
    {
      "id": 21,
      "topic": "CS Mastery",
      "prompt": "The idea that 'A Proof is a Program' is known as the Curry-___ Correspondence.",
      "answer": ["howard"],
      "display": "Howard",
      "generate": function () {
        return {
          prompt: "The Deep Link between Logic and Computation is the ___-Howard isomorphism.",
          answer: ["curry"],
          display: "Curry"
        };
      }
    },
    {
      "id": 22,
      "topic": "Verification",
      "prompt": "$\{P\} C \{Q\}$ is called a ___ Triple (used to prove program correctness).",
      "answer": ["hoare"],
      "display": "Hoare",
      "generate": function () {
        return {
          prompt: "To prove a block of code <code>x = x + 1</code> is correct, we use a ___ Triple.",
          answer: ["hoare"],
          display: "Hoare"
        };
      }
    },
    {
      "id": 23,
      "topic": "Verification",
      "prompt": "The world's first verified OS microkernel is called ___.",
      "answer": ["sel4"],
      "display": "seL4",
      "generate": function () {
        return {
          prompt: "Mathematical verification of an OS kernel ensures it never crashes. The most famous example is ___.",
          answer: ["sel4"],
          display: "seL4"
        };
      }
    },
    {
      "id": 24,
      "topic": "Constructive",
      "prompt": "A proof that provides an algorithm to build the solution is a ___ proof.",
      "answer": ["constructive"],
      "display": "Constructive",
      "generate": function () {
        return {
          prompt: "In CS, we prefer '___' proofs because they yield working code, not just existence claims.",
          answer: ["constructive"],
          display: "Constructive"
        };
      }
    },
    {
      "id": 25,
      "topic": "LaTeX",
      "prompt": "What package is typically used in LaTeX to write pseudocode algorithms?",
      "answer": ["algorithm", "algorithm2e", "algorithmic"],
      "display": "algorithm2e / algorithmic",
      "generate": function () {
        return {
          prompt: "To write beautiful loops and if-statements in a math paper, you use the ___ package in LaTeX.",
          answer: ["algorithm2e", "algorithmic", "algorithm"],
          display: "algorithm2e"
        };
      }
    },
    {
      "id": 26,
      "topic": "Testing",
      "prompt": "Checking a property for thousands of random inputs is called ___-based testing.",
      "answer": ["property"],
      "display": "Property",
      "generate": function () {
        return {
          prompt: "The 'Hypothesis' library in Python automate '___-Based Testing'.",
          answer: ["property"],
          display: "Property"
        };
      }
    },
    {
      "id": 27,
      "topic": "Solvers",
      "prompt": "Microsoft's famous SMT solver used for automated proofs is called ___.",
      "answer": ["z3"],
      "display": "Z3",
      "generate": function () {
        return {
          prompt: "The ___ SMT solver is the engine behind many modern verification tools.",
          answer: ["z3"],
          display: "Z3"
        };
      }
    },
    {
      "id": 28,
      "topic": "Psychology",
      "prompt": "A proof is essentially a social contract meant to convince a ___ reader.",
      "answer": ["skeptical", "human"],
      "display": "Skeptical",
      "generate": function () {
        return {
          prompt: "You should write a proof for a '___ reader' who expects you to be wrong at every step.",
          answer: ["skeptical", "unconvinced"],
          display: "Skeptical"
        };
      }
    },
    {
      "id": 29,
      "topic": "LaTeX",
      "prompt": "The tombstone symbol (∎) at the end of a proof is written in LaTeX as \___.",
      "answer": ["blacksquare"],
      "display": "\\blacksquare",
      "generate": function () {
        return {
          prompt: "In LaTeX, the command <code>\\qed</code> or <code>\\___</code> prints the final proof box.",
          answer: ["blacksquare"],
          display: "blacksquare"
        };
      }
    },
    {
      "id": 30,
      "topic": "Logic",
      "prompt": "To prove P is true, showing that Not(P) is unsatisfiable is the core of an ___ solver.",
      "answer": ["smt", "sat"],
      "display": "SMT / SAT",
      "generate": function () {
        return {
          prompt: "Finding a variable assignment that makes a formula true is the '___ Problem'.",
          answer: ["sat", "satisfiability"],
          display: "SAT / Satisfiability"
        };
      }
    },
    {
      "id": 31,
      "topic": "Verification",
      "prompt": "Testing shows the presence of bugs; Proof shows the ___ of bugs.",
      "answer": ["absence"],
      "display": "Absence",
      "generate": function () {
        return {
          prompt: "Edsger Dijkstra said: 'Testing can only prove the presence of bugs, never their ___.'",
          answer: ["absence"],
          display: "Absence"
        };
      }
    },
    {
      "id": 32,
      "topic": "LaTeX",
      "prompt": "LaTeX was created by the legendary computer scientist Donald ___.",
      "answer": ["knuth"],
      "display": "Knuth",
      "generate": function () {
        return {
          prompt: "The author of 'The Art of Computer Programming' who also created TeX is Donald ___.",
          answer: ["knuth"],
          display: "Knuth"
        };
      }
    },
    {
      "id": 33,
      "topic": "Logic",
      "prompt": "'Suppose for sake of contradiction...' starts what type of proof?",
      "answer": ["contradiction"],
      "display": "Contradiction",
      "generate": function () {
        return {
          prompt: "A proof by ___ starts by assuming the negation of what you want to prove.",
          answer: ["contradiction"],
          display: "Contradiction"
        };
      }
    },
    {
      "id": 34,
      "topic": "Style",
      "prompt": "Transitioning from one step to another using 'It follows that' is part of proof ___.",
      "answer": ["writing", "style"],
      "display": "Writing / Style",
      "generate": function () {
        return {
          prompt: "Good Proof ___ includes using transition words like 'Therefore' and 'Hence'.",
          answer: ["writing", "style", "prose"],
          display: "Writing / Style"
        };
      }
    },
    {
      "id": 35,
      "topic": "Verification",
      "prompt": "A condition that must be true AFTER a command executes in Hoare logic is the ___.",
      "answer": ["postcondition", "post-condition"],
      "display": "Post-condition",
      "generate": function () {
        return {
          prompt: "In {Pre} Code {Post}, the 'Post' stands for ___.",
          answer: ["postcondition", "post-condition"],
          display: "Postcondition"
        };
      }
    }
  ],
  "day6": [
    {
      "id": 1,
      "topic": "Justification",
      "prompt": "What is the justification for 'a + b = 2m + 2n' when you know a=2m and b=2n?",
      "answer": ["substitution"],
      "display": "Substitution",
      "generate": function () {
        return {
          prompt: "If you replace a variable $x$ with a value $5$ in an equation, we call this the property of ___.",
          answer: ["substitution"],
          display: "Substitution"
        };
      }
    },
    {
      "id": 2,
      "topic": "Strategy",
      "prompt": "To prove P→Q, you prove ¬Q→¬P. This is proof by ___.",
      "answer": ["contrapositive"],
      "display": "Contrapositive",
      "generate": function () {
        return {
          prompt: "Instead of proving $A \\to B$ directly, you prove $\\neg B \\to \\neg A$. This is the ___ method.",
          answer: ["contrapositive"],
          display: "Contrapositive"
        };
      }
    },
    {
      "id": 3,
      "topic": "Closure",
      "prompt": "If adding two integers always results in an integer, the set of integers is ___ under addition.",
      "answer": ["closed"],
      "display": "Closed",
      "generate": function () {
        return {
          prompt: "The set of Odd numbers is NOT ___ under addition (because 1+1=2, which is even).",
          answer: ["closed"],
          display: "Closed"
        };
      }
    },
    {
      "id": 4,
      "topic": "Induction",
      "prompt": "In induction, the assumption that P(k) is true is the Inductive ___.",
      "answer": ["hypothesis"],
      "display": "Hypothesis",
      "generate": function () {
        return {
          prompt: "The 'Step' in induction relies on assuming the truth of the previous step. This assumption is the ___.",
          answer: ["hypothesis", "inductive hypothesis"],
          display: "Hypothesis"
        };
      }
    },
    {
      "id": 5,
      "topic": "Structure",
      "prompt": "A small helper theorem used to prove a larger theorem is called a ___.",
      "answer": ["lemma"],
      "display": "Lemma",
      "generate": function () {
        return {
          prompt: "Think of a 'Theorem' as the main app and a '___' as a helper utility function.",
          answer: ["lemma"],
          display: "Lemma"
        };
      }
    },
    {
      "id": 6,
      "topic": "Terminology",
      "prompt": "What does Q.E.D. stand for? (Latin)",
      "answer": ["quod erat demonstrandum"],
      "display": "Quod Erat Demonstrandum",
      "generate": function () {
        return {
          prompt: "QED stands for: Quod Erat ___.",
          answer: ["demonstrandum"],
          display: "Demonstrandum"
        };
      }
    },
    {
      "id": 7,
      "topic": "Algebra",
      "prompt": "Simplify: $2(x+3) + 4x$",
      "answer": ["6x+6", "6x + 6"],
      "display": "$6x+6$",
      "generate": function () {
        const a = GenUtils.randomInt(2, 5);
        const b = GenUtils.randomInt(2, 5);
        const c = GenUtils.randomInt(2, 5);
        const result_m = a + c;
        const result_b = a * b;
        return {
          prompt: `Simplify: $${a}(x+${b}) + ${c}x$`,
          answer: [`${result_m}x+${result_b}`, `${result_m}x + ${result_b}`],
          display: `$${result_m}x+${result_b}$`
        };
      }
    },
    {
      "id": 8,
      "topic": "Logic",
      "prompt": "The logical equivalent of $\neg(P \land Q)$ is $\neg P \lor \neg Q$. This is ___ law.",
      "answer": ["de morgan", "de morgans"],
      "display": "De Morgan's",
      "generate": function () {
        return {
          prompt: "Distributing a NOT over an AND flips the operator to an OR. This is ___'s Law.",
          answer: ["de morgan", "de morgans"],
          display: "De Morgan's"
        };
      }
    },
    {
      "id": 9,
      "topic": "Functions",
      "prompt": "A function where every output has at most one input is called ___.",
      "answer": ["injective", "one-to-one"],
      "display": "Injective",
      "generate": function () {
        return {
          prompt: "If $f(a) = f(b)$ implies $a = b$, the function is ___.",
          answer: ["injective", "one-to-one"],
          display: "Injective"
        };
      }
    },
    {
      "id": 10,
      "topic": "Proofs",
      "prompt": "In induction, the step where you prove $P(0)$ is the ___ case.",
      "answer": ["base"],
      "display": "Base",
      "generate": function () {
        return {
          prompt: "To prove $P(n)$ by induction, you must first prove the ___ case $P(1)$ (or $P(0)$).",
          answer: ["base"],
          display: "Base"
        };
      }
    },
    {
      "id": 11,
      "topic": "CS History",
      "prompt": "Who proved that some true mathematical statements are unprovable?",
      "answer": ["godel", "kurt godel"],
      "display": "Kurt Gödel",
      "generate": function () {
        return {
          prompt: "The Incompleteness Theorems were published by Kurt ___ in 1931.",
          answer: ["godel"],
          display: "Gödel"
        };
      }
    },
    {
      "id": 12,
      "topic": "CS Foundations",
      "prompt": "The mathematical model of computation using pure functions is ___ Calculus.",
      "answer": ["lambda"],
      "display": "Lambda",
      "generate": function () {
        return {
          prompt: "Alonzo Church's model of computation is named ___ Calculus.",
          answer: ["lambda"],
          display: "Lambda"
        };
      }
    },
    {
      "id": 13,
      "topic": "Algebra",
      "prompt": "If $\log_2(n) = 10$, then $n = ___$.",
      "answer": ["1024"],
      "display": "1024",
      "generate": function () {
        const p = GenUtils.randomInt(5, 12);
        const n = Math.pow(2, p);
        return {
          prompt: `If $\\log_2(n) = ${p}$, then $n = ___$.`,
          answer: [n.toString()],
          display: n.toString()
        };
      }
    },
    {
      "id": 14,
      "topic": "Logic",
      "prompt": "A truth table for $P \text{ XOR } Q$ is true ONLY when P and Q have $(\text{same/different})$ values.",
      "answer": ["different"],
      "display": "Different",
      "generate": function () {
        return {
          prompt: "Exclusive-OR (XOR) is true if exactly ONE input is true, meaning the inputs are ___.",
          answer: ["different"],
          display: "Different"
        };
      }
    },
    {
      "id": 15,
      "topic": "Functions",
      "prompt": "The set of all possible inputs to a function is its ___.",
      "answer": ["domain"],
      "display": "Domain",
      "generate": function () {
        return {
          prompt: "If a function is an API, the types of the 'Arguments' form the ___ of the function.",
          answer: ["domain"],
          display: "Domain"
        };
      }
    },
    {
      "id": 16,
      "topic": "Logic",
      "prompt": "True or False: $P \to Q$ is logically equivalent to $\neg P \lor Q$.",
      "answer": ["true", "t"],
      "display": "True",
      "generate": function () {
        return {
          prompt: "Is the claim 'If P, then Q' equivalent to 'Either Not P, or Q'? (True/False)",
          answer: ["true", "t"],
          display: "True"
        };
      }
    },
    {
      "id": 17,
      "topic": "Proofs",
      "prompt": "'Assume P is false, then show an impossible result' is proof by ___.",
      "answer": ["contradiction"],
      "display": "Contradiction",
      "generate": function () {
        return {
          prompt: "Reductio ad Absurdum is the more formal name for Proof by ___.",
          answer: ["contradiction"],
          display: "Contradiction"
        };
      }
    },
    {
      "id": 18,
      "topic": "Algebra",
      "prompt": "What is $(x^a)^b$ simplified?",
      "answer": ["x^{ab}", "x^ab"],
      "display": "$x^{ab}$",
      "generate": function () {
        return {
          prompt: "When you raise a power to another power, you ___ the exponents.",
          answer: ["multiply"],
          display: "Multiply"
        };
      }
    },
    {
      "id": 19,
      "topic": "Functions",
      "prompt": "Function composition $f(g(x))$ is represented in Unix by the ___ operator.",
      "answer": ["pipe", "|"],
      "display": "Pipe (|)",
      "generate": function () {
        return {
          prompt: "The output of one command becoming the input of another is the '___' philosophy.",
          answer: ["pipe"],
          display: "Pipe"
        };
      }
    },
    {
      "id": 20,
      "topic": "CS Foundations",
      "prompt": "The 'Universal Law of Computation' is the Church-___ Thesis.",
      "answer": ["turing"],
      "display": "Turing",
      "generate": function () {
        return {
          prompt: "The equivalence of Lambda Calculus and Turing Machines is the Church-___ Thesis.",
          answer: ["turing"],
          display: "Turing"
        };
      }
    },
    {
      "id": 21,
      "topic": "Complexity",
      "prompt": "A staff engineer at big tech spends a lot of time calculating Big ___ complexity.",
      "answer": ["o"],
      "display": "O",
      "generate": function () {
        return {
          prompt: "The upper bound of algorithmic growth is $O(n)$, pronounced 'Big ___ of n'.",
          answer: ["o"],
          display: "O"
        };
      }
    },
    {
      "id": 22,
      "topic": "Security",
      "prompt": "A function that is easy to compute but hard to invert is a '___ Function'.",
      "answer": ["one-way"],
      "display": "One-way",
      "generate": function () {
        return {
          prompt: "Hashing passwords works because cryptographic hash functions are ___.",
          answer: ["one-way"],
          display: "One-Way"
        };
      }
    },
    {
      "id": 23,
      "topic": "LaTeX",
      "prompt": "The standard tool for writing mathematical papers and CVs is ___.",
      "answer": ["latex", "tex"],
      "display": "LaTeX",
      "generate": function () {
        return {
          prompt: "You write math in code using a system called ___.",
          answer: ["latex", "tex"],
          display: "LaTeX"
        };
      }
    },
    {
      "id": 24,
      "topic": "Proofs",
      "prompt": "A condition that remains true throughout a series of transformations is an ___.",
      "answer": ["invariant"],
      "display": "Invariant",
      "generate": function () {
        return {
          prompt: "To prove a loop is correct, you find a 'Loop ___'.",
          answer: ["invariant"],
          display: "Invariant"
        };
      }
    },
    {
      "id": 25,
      "topic": "Foundations",
      "prompt": "In 1900, David Hilbert proposed 23 ___ to be solved in the 20th century.",
      "answer": ["problems"],
      "display": "Problems",
      "generate": function () {
        return {
          prompt: "Hilbert's list contained 23 famous 'Mathematical ___'.",
          answer: ["problems"],
          display: "Problems"
        };
      }
    },
    {
      "id": 26,
      "topic": "Logic",
      "prompt": "Is $P \to Q$ True or False if P is False and Q is True?",
      "answer": ["true", "t"],
      "display": "True (Vacuously)",
      "generate": function () {
        return {
          prompt: "If you break a promise that had a false premise (e.g., 'If it's Tuesday (it's not), I'll pay you'), is the logic False? (Yes/No)",
          answer: ["no", "n"],
          display: "No (Vacuously True)"
        };
      }
    },
    {
      "id": 27,
      "topic": "Algebra",
      "prompt": "Solve for $n$: $2^{n-1} = 16$.",
      "answer": ["5"],
      "display": "5",
      "generate": function () {
        const exponents = [3, 4, 5, 6, 7];
        const p = GenUtils.randomSelection(exponents);
        const n = Math.pow(2, p);
        return {
          prompt: `Solve for $x$: $2^{x-1} = ${n}$.`,
          answer: [(p + 1).toString()],
          display: (p + 1).toString()
        };
      }
    },
    {
      "id": 28,
      "topic": "Functions",
      "prompt": "What is the inverse of $f(x) = x + 10$?",
      "answer": ["x-10", "x - 10"],
      "display": "$x-10$",
      "generate": function () {
        const a = GenUtils.randomInt(5, 50);
        return {
          prompt: `What is the inverse of $f(x) = x + ${a}$?`,
          answer: [`x-${a}`, `x - ${a}`],
          display: `$x-${a}$`
        };
      }
    },
    {
      "id": 29,
      "topic": "Proofs",
      "prompt": "To disprove '∀x, P(x)', you only need a single ___.",
      "answer": ["counterexample"],
      "display": "Counterexample",
      "generate": function () {
        return {
          prompt: "Universal claims are brittle. They fall to a single ___.",
          answer: ["counterexample"],
          display: "Counterexample"
        };
      }
    },
    {
      "id": 30,
      "topic": "CS Mastery",
      "prompt": "A program that takes code as input and transforms it is a ___.",
      "answer": ["compiler", "transpiler"],
      "display": "Compiler",
      "generate": function () {
        return {
          prompt: "SymPy's <code>simplify()</code> function is like the optimization stage of a ___.",
          answer: ["compiler"],
          display: "Compiler"
        };
      }
    },
    {
      "id": 31,
      "topic": "Logic",
      "prompt": "Which gate is called the 'Parity' gate?",
      "answer": ["xor", "exclusive or"],
      "display": "XOR",
      "generate": function () {
        return {
          prompt: "The gate that outputs True ONLY when inputs are different is the ___ gate.",
          answer: ["xor"],
          display: "XOR"
        };
      }
    },
    {
      "id": 32,
      "topic": "Algebra",
      "prompt": "What is $\log_{10}(1000)$?",
      "answer": ["3"],
      "display": "3",
      "generate": function () {
        const powers = [2, 3, 4, 5];
        const p = GenUtils.randomSelection(powers);
        const v = Math.pow(10, p);
        return {
          prompt: `What is $\\log_{10}(${v})$?`,
          answer: [p.toString()],
          display: p.toString()
        };
      }
    },
    {
      "id": 33,
      "topic": "Terminology",
      "prompt": "A statement that seems true but has no proof yet is a ___.",
      "answer": ["conjecture"],
      "display": "Conjecture",
      "generate": function () {
        return {
          prompt: "Goldbach's ___: 'Every even integer > 2 is the sum of two primes.'",
          answer: ["conjecture"],
          display: "Conjecture"
        };
      }
    },
    {
      "id": 34,
      "topic": "Foundations",
      "prompt": "Alan Turing's most famous proof is the ___ Problem.",
      "answer": ["halting"],
      "display": "Halting",
      "generate": function () {
        return {
          prompt: "The undecidability of program termination is the ___ Problem.",
          answer: ["halting"],
          display: "Halting"
        };
      }
    },
    {
      "id": 35,
      "topic": "Style",
      "prompt": "In math, 'WLOG' helps simplify proofs by assuming ___.",
      "answer": ["generality"],
      "display": "Generality (Without Loss of...)",
      "generate": function () {
        return {
          prompt: "WLOG stands for Without Loss of ___.",
          answer: ["generality"],
    { "id": 5, "topic": "Coordinates", "prompt": "On the Unit Circle, the y-coordinate corresponds to ___ (sin/cos)", "answer": ["sin", "sine"], "display": "sin" },
    { "id": 6, "topic": "Values", "prompt": "What is sin(0)?", "answer": ["0"], "display": "0" },
    { "id": 7, "topic": "Values", "prompt": "What is cos(0)?", "answer": ["1"], "display": "1" },
    { "id": 8, "topic": "Values", "prompt": "What is sin(pi/2)?", "answer": ["1"], "display": "1" },
    { "id": 9, "topic": "Values", "prompt": "What is cos(pi/2)?", "answer": ["0"], "display": "0" },
    { "id": 10, "topic": "Identities", "prompt": "sin^2(x) + cos^2(x) = ___", "answer": ["1"], "display": "1" },
    { "id": 11, "topic": "Definitions", "prompt": "Tangent (tan) is defined as sin / ___", "answer": ["cos", "cosine"], "display": "cos" },
    { "id": 12, "topic": "Definitions", "prompt": "SOH CAH TOA: Sin is Opposite over ___", "answer": ["hypotenuse"], "display": "Hypotenuse" },
    { "id": 13, "topic": "Conversion", "prompt": "To convert degrees to radians, multiply by pi / ___", "answer": ["180"], "display": "180" },
    { "id": 14, "topic": "Game Dev", "prompt": "To get the angle between two points robustly, use the function ___", "answer": ["atan2", "arctan2"], "display": "atan2" },
    { "id": 15, "topic": "DSP", "prompt": "The ___ Transform breaks a signal into sine waves.", "answer": ["Fourier"], "display": "Fourier" },
    { "id": 16, "topic": "DSP", "prompt": "JPEG compression uses the Discrete ___ Transform (DCT).", "answer": ["Cosine"], "display": "Cosine" },
    { "id": 17, "topic": "Polar", "prompt": "In polar coordinates, the distance from the origin is denoted by ___.", "answer": ["r", "radius"], "display": "r" },
    { "id": 18, "topic": "Polar", "prompt": "To convert polar (r, theta) to Cartesian x: x = r * ___.", "answer": ["cos(theta)", "cos"], "display": "cos(θ)" },
    { "id": 19, "topic": "Vectors", "prompt": "The ___ product measures how much two vectors align.", "answer": ["dot", "scalar"], "display": "Dot" },
    { "id": 20, "topic": "Similarity", "prompt": "Cosine ___ is the dot product divided by the product of magnitudes.", "answer": ["similarity"], "display": "Similarity" },
    { "id": 21, "topic": "Performance", "prompt": "A Trig ___ Table (LUT) pre-calculates values to save CPU cycles.", "answer": ["Lookup"], "display": "Lookup" },
    { "id": 22, "topic": "Math", "prompt": "The ___ Series can approximate sin(x) as a polynomial.", "answer": ["Taylor"], "display": "Taylor" },
    { "id": 23, "topic": "Waves", "prompt": "In y = A sin(Bx + C), C represents the ___ shift.", "answer": ["phase"], "display": "Phase" },
    { "id": 24, "topic": "Audio", "prompt": "A pure ___ wave is the fundamental building block of sound.", "answer": ["sine"], "display": "Sine" },
    { "id": 25, "topic": "Period", "prompt": "The period of tan(x) is ___ radians.", "answer": ["pi"], "display": "π" },
    { "id": 26, "topic": "Unit Circle", "prompt": "At pi radians, the coordinates (x, y) are (___, 0).", "answer": ["-1"], "display": "-1" },
    { "id": 27, "topic": "Unit Circle", "prompt": "At 270 degrees, sin(theta) is ___.", "answer": ["-1"], "display": "-1" },
    { "id": 28, "topic": "Identities", "prompt": "1 + tan^2(x) = ___", "answer": ["sec^2(x)", "sec²(x)"], "display": "sec²(x)" },
    { "id": 29, "topic": "Reciprocal", "prompt": "1 / sin(x) is also known as ___ (abbreviated).", "answer": ["csc", "cosecant"], "display": "csc" },
    { "id": 30, "topic": "Reciprocal", "prompt": "1 / cos(x) is also known as ___ (abbreviated).", "answer": ["sec", "secant"], "display": "sec" },
    { "id": 31, "topic": "Range", "prompt": "The range of the cosine function is [___, 1].", "answer": ["-1"], "display": "-1" },
    { "id": 32, "topic": "Cycles", "prompt": "Frequency is the reciprocal of the ___.", "answer": ["period"], "display": "Period" },
    { "id": 33, "topic": "Graphics", "prompt": "A ___ matrix uses trig functions to reorient a sprite.", "answer": ["rotation"], "display": "Rotation" },
    { "id": 34, "topic": "Signal", "prompt": "A square wave can be synthesized by adding odd ___ of sine waves.", "answer": ["harmonics"], "display": "Harmonics" },
    { "id": 35, "topic": "Game Dev", "prompt": "atan2(y, x) returns an angle in the range (-pi, ___].", "answer": ["pi"], "display": "π" },
    { "id": 36, "topic": "Geometry", "prompt": "The Law of ___ generalizes the Pythagorean theorem for all triangles.", "answer": ["Cosines"], "display": "Cosines" },
    { "id": 37, "topic": "Identity", "prompt": "sin(2x) = 2 sin(x) ___", "answer": ["cos(x)", "cosx"], "display": "cos(x)" },
    { "id": 38, "topic": "Values", "prompt": "What is tan(pi/4)?", "answer": ["1"], "display": "1" },
    { "id": 39, "topic": "Unit Circle", "prompt": "The hypotenuse for any point on the Unit Circle is always ___.", "answer": ["1"], "display": "1" },
    { "id": 40, "topic": "Summary", "prompt": "Trigonometry connects the geometry of ___ with the algebra of periodicity.", "answer": ["triangles"], "display": "Triangles" }
  ],
  "day7": [
    {
      "id": 1,
      "topic": "Limits",
      "prompt": "Compute limit as x -> 2 of (x^2 - 4)/(x - 2).",
      "answer": "4",
      "display": "4"
    },
    {
      "id": 2,
      "topic": "Limits",
      "prompt": "Compute limit as x -> 0 of sin(x)/x.",
      "answer": "1",
      "display": "1"
    },
    {
      "id": 3,
      "topic": "Continuity",
      "prompt": "At what x value is f(x) = 1/x discontinuous?",
      "answer": "0",
      "display": "0"
    },
    {
      "id": 4,
      "topic": "Epsilon-Delta",
      "prompt": "In the definition, which Greek letter represents the 'tolerance' for the output error?",
      "answer": "epsilon",
      "display": "Epsilon (ε)"
    },
    {
      "id": 5,
      "topic": "Limit Laws",
      "prompt": "If limit f(x) = 5 and limit g(x) = 3, what is limit (f(x) - g(x))?",
      "answer": "2",
      "display": "2"
    },
    {
      "id": 6,
      "topic": "IVT",
      "prompt": "If f(-1)=-2 and f(1)=3 and f is continuous, does f(x)=0 have a solution in (-1, 1)? (yes/no)",
      "answer": "yes",
      "display": "Yes"
    }
  ],
  "day8": [
    {
      "id": 1,
      "topic": "Slope",
      "prompt": "What represents the slope of the secant line as h approaches 0? (one word)",
      "answer": "derivative",
      "display": "Derivative"
    },
    {
      "id": 2,
      "topic": "Computation",
      "prompt": "If f(x) = 3x^2, what is f'(x) using the power rule logic?",
      "answer": "6x",
      "display": "6x"
    },
    {
      "id": 3,
      "topic": "Computation",
      "prompt": "If f(x) = 5, what is f'(x)?",
      "answer": "0",
      "display": "0"
    },
    {
      "id": 4,
      "topic": "Differentiability",
      "prompt": "Is f(x) = |x| differentiable at x=0? (yes/no)",
      "answer": "no",
      "display": "No"
    },
    {
      "id": 5,
      "topic": "Differentiability",
      "prompt": "If a function is differentiable at a point, must it be continuous there? (yes/no)",
      "answer": "yes",
      "display": "Yes"
    },
    {
      "id": 6,
      "topic": "Notation",
      "prompt": "What is the Leibniz notation for the derivative of y with respect to x?",
      "answer": "dy/dx",
      "display": "dy/dx"
    }
  ],
  "day9": [
    { "id": 1, "topic": "Imaginary", "prompt": "i² is equal to ___", "answer": ["-1"], "display": "-1" },
    { "id": 2, "topic": "Imaginary", "prompt": "What is i³?", "answer": ["-i"], "display": "-i" },
    { "id": 3, "topic": "Imaginary", "prompt": "What is i⁴?", "answer": ["1"], "display": "1" },
    { "id": 4, "topic": "Euler", "prompt": "e^(i*π) + 1 = ___", "answer": ["0"], "display": "0" },
    { "id": 5, "topic": "Euler", "prompt": "e^(i*θ) = cos(θ) + i*___", "answer": ["sin(θ)", "sintheta", "sin"], "display": "sin(θ)" },
    { "id": 6, "topic": "Form", "prompt": "a + bi is the standard form of a ___ number.", "answer": ["complex"], "display": "Complex" },
    { "id": 7, "topic": "Modulus", "prompt": "The magnitude of 3 + 4i is ___", "answer": ["5"], "display": "5" },
    { "id": 8, "topic": "Modulus", "prompt": "The magnitude |z| is computed using √(a² + ___).", "answer": ["b²", "b^2"], "display": "b²" },
    { "id": 9, "topic": "Plane", "prompt": "Complex numbers are graphed on the ___ plane.", "answer": ["complex", "argand"], "display": "Argand/Complex" },
    { "id": 10, "topic": "Plane", "prompt": "The x-axis of the complex plane represents ___ numbers.", "answer": ["real"], "display": "Real" },
    { "id": 11, "topic": "Arithmetic", "prompt": "(2+3i) + (1-i) = ___", "answer": ["3+2i"], "display": "3 + 2i" },
    { "id": 12, "topic": "Arithmetic", "prompt": "(2+i)*(3-i) = ___", "answer": ["7+i"], "display": "7 + i" },
    { "id": 13, "topic": "Rotation", "prompt": "Multiplying by i rotates a number ___ degrees counter-clockwise.", "answer": ["90"], "display": "90°" },
    { "id": 14, "topic": "Conjugate", "prompt": "The conjugate of a + bi is a ___ bi.", "answer": ["-"], "display": "- (minus)" },
    { "id": 15, "topic": "Conjugate", "prompt": "z * z̄ (z times its conjugate) always yields a ___ number.", "answer": ["real"], "display": "Real" },
    { "id": 16, "topic": "De Moivre", "prompt": "De Moivre's Theorem says (cos θ + i sin θ)^n = cos(nθ) + i sin(___)", "answer": ["nθ", "n theta"], "display": "nθ" },
    { "id": 17, "topic": "De Moivre", "prompt": "De Moivre's Theorem is useful for computing ___ of complex numbers.", "answer": ["powers", "roots"], "display": "Powers/Roots" },
    { "id": 18, "topic": "Roots of Unity", "prompt": "The equation z^4 = 1 has ___ solutions in the complex plane.", "answer": ["4", "four"], "display": "4" },
    { "id": 19, "topic": "Roots of Unity", "prompt": "The roots of z^n = 1 form the vertices of a regular ___.", "answer": ["polygon", "n-gon"], "display": "Polygon" },
    { "id": 20, "topic": "FFT", "prompt": "Roots of unity enable the ___ Fourier Transform (FFT).", "answer": ["fast"], "display": "Fast" },
    { "id": 21, "topic": "Quaternions", "prompt": "___ are used for 3D rotations without gimbal lock.", "answer": ["quaternions"], "display": "Quaternions" },
    { "id": 22, "topic": "Quaternions", "prompt": "A quaternion has ___ components (w, x, y, z).", "answer": ["4", "four"], "display": "4" },
    { "id": 23, "topic": "Quaternions", "prompt": "i² = j² = k² = ijk = ___", "answer": ["-1"], "display": "-1" },
    { "id": 24, "topic": "SLERP", "prompt": "SLERP stands for ___ Linear Interpolation.", "answer": ["spherical"], "display": "Spherical" },
    { "id": 25, "topic": "Quantum", "prompt": "A qubit state is |ψ⟩ = α|0⟩ + β|1⟩. α and β are ___ amplitudes.", "answer": ["complex"], "display": "Complex" },
    { "id": 26, "topic": "Quantum", "prompt": "The probability of measuring |0⟩ is |α|². Hence probabilities sum to ___.", "answer": ["1", "one"], "display": "1" },
    { "id": 27, "topic": "Quantum", "prompt": "The ___ Sphere is a 3D visualization of a qubit state.", "answer": ["bloch"], "display": "Bloch" },
    { "id": 28, "topic": "Quantum", "prompt": "Quantum interference arises because amplitudes have a ___.", "answer": ["phase"], "display": "Phase" },
    { "id": 29, "topic": "Fractals", "prompt": "The Mandelbrot set is defined by z_{n+1} = z_n² + ___.", "answer": ["c"], "display": "c" },
    { "id": 30, "topic": "Fractals", "prompt": "If |z| exceeds 2 during iteration, the point ___ to infinity.", "answer": ["escapes", "diverges"], "display": "Escapes" },
    { "id": 31, "topic": "Fractals", "prompt": "Julia sets are created by varying the starting ___ instead of c.", "answer": ["z", "z0", "z_0"], "display": "z₀" },
    { "id": 32, "topic": "Signals", "prompt": "np.fft.fft() returns an array of ___ numbers.", "answer": ["complex"], "display": "Complex" },
    { "id": 33, "topic": "Signals", "prompt": "The magnitude of an FFT bin represents the ___ of that frequency.", "answer": ["amplitude", "volume", "strength"], "display": "Amplitude" },
    { "id": 34, "topic": "Signals", "prompt": "The phase of an FFT bin represents the ___ of that frequency.", "answer": ["timing", "offset", "shift"], "display": "Timing/Offset" },
    { "id": 35, "topic": "Python", "prompt": "In Python, the imaginary unit is written as ___j.", "answer": ["1", "1j"], "display": "1j" },
    { "id": 36, "topic": "Python", "prompt": "cmath.phase(z) returns the ___ of the complex number z.", "answer": ["angle", "argument", "phase"], "display": "Angle/Phase" },
    { "id": 37, "topic": "Gotcha", "prompt": "Engineering uses 'j' instead of 'i' because 'i' represents ___.", "answer": ["current"], "display": "Current" },
    { "id": 38, "topic": "Gotcha", "prompt": "Using Euler angles instead of Quaternions can cause ___ Lock.", "answer": ["gimbal"], "display": "Gimbal" },
    { "id": 39, "topic": "Summary", "prompt": "Multiplying by i is equivalent to a ___ rotation.", "answer": ["90 degree", "90°", "90"], "display": "90° Rotation" },
    { "id": 40, "topic": "Summary", "prompt": "Euler's formula bridges exponentials with ___ functions.", "answer": ["trigonometric", "trig", "sinusoidal"], "display": "Trigonometric" }
  ],
  "day10": [
    { "id": 1, "topic": "Definitions", "prompt": "In T(n) = aT(n/b) + f(n), what does 'a' represent?", "answer": ["number of subproblems", "subproblems", "branches"], "display": "Number of subproblems" },
    { "id": 2, "topic": "Definitions", "prompt": "In T(n) = aT(n/b) + f(n), what does 'f(n)' represent?", "answer": ["combine", "merge", "non-recursive"], "display": "Non-recursive work" },
    { "id": 3, "topic": "Unrolling", "prompt": "The base case usually occurs when n = ___", "answer": ["1", "one"], "display": "1" },
    { "id": 4, "topic": "Master Theorem", "prompt": "Case 1: If n^(log_b a) > f(n), complexity is O(___)", "answer": ["n^(log_b a)", "recursion", "recursive"], "display": "n^(log_b a)" },
    { "id": 5, "topic": "Master Theorem", "prompt": "Case 2: If n^(log_b a) = f(n), complexity is O(___ * log n)", "answer": ["n^(log_b a)", "f(n)"], "display": "n^(log_b a) * log n" },
    { "id": 6, "topic": "Master Theorem", "prompt": "Case 3: If f(n) dominates, complexity is O(___)", "answer": ["f(n)"], "display": "f(n)" },
    { "id": 7, "topic": "Analysis", "prompt": "For Binary Search T(n) = T(n/2) + 1, what is 'a'?", "answer": ["1"], "display": "1" },
    { "id": 8, "topic": "Analysis", "prompt": "For Binary Search T(n) = T(n/2) + 1, what is 'b'?", "answer": ["2"], "display": "2" },
    { "id": 9, "topic": "Analysis", "prompt": "For Merge Sort T(n) = 2T(n/2) + n, what is 'a'?", "answer": ["2"], "display": "2" },
    { "id": 10, "topic": "Complexity", "prompt": "Complexity of Merge Sort is O(___)", "answer": ["n log n", "nlogn"], "display": "n log n" },
    { "id": 11, "topic": "Complexity", "prompt": "Complexity of Binary Search is O(___)", "answer": ["log n", "logn"], "display": "log n" },
    { "id": 12, "topic": "Complexity", "prompt": "T(n) = 4T(n/2) + n. Is this Case 1, 2, or 3?", "answer": ["1", "case 1"], "display": "Case 1" },
    { "id": 13, "topic": "Complexity", "prompt": "T(n) = 2T(n/2) + n^2. Is this Case 1, 2, or 3?", "answer": ["3", "case 3"], "display": "Case 3" },
    { "id": 14, "topic": "Complexity", "prompt": "T(n) = 2T(n/2) + n. Is this Case 1, 2, or 3?", "answer": ["2", "case 2"], "display": "Case 2" },
    { "id": 15, "topic": "Complexity", "prompt": "What is log_2(8)?", "answer": ["3"], "display": "3" },
    { "id": 16, "topic": "Complexity", "prompt": "What is log_2(1)?", "answer": ["0"], "display": "0" },
    { "id": 17, "topic": "Complexity", "prompt": "In Master Theorem, we compare f(n) with n to the power of ___", "answer": ["log_b a", "log_b(a)"], "display": "log_b a" },
    { "id": 18, "topic": "Recursion", "prompt": "The depth of the recursion tree for T(n)=2T(n/2)+n is log ___", "answer": ["n"], "display": "n" },
    { "id": 19, "topic": "Recursion", "prompt": "Does Merge Sort use divide and conquer?", "answer": ["yes"], "display": "Yes" },
    { "id": 20, "topic": "Recursion", "prompt": "Does Bubble Sort use recurrence relations typically?", "answer": ["no"], "display": "No" },
    { "id": 21, "topic": "Master Theorem", "prompt": "For T(n) = 3T(n/3) + n, complexity is O(n log n) because it's Case ___", "answer": ["2"], "display": "Case 2" },
    { "id": 22, "topic": "Analysis", "prompt": "T(n) = T(n-1) + n is not solved by the Master Theorem because it's not ___.", "answer": ["divide and conquer", "dividing"], "display": "Divide and Conquer" },
    { "id": 23, "topic": "Unrolling", "prompt": "For T(n) = T(n-1) + 1, solving by unrolling gives O(___)", "answer": ["n"], "display": "n" },
    { "id": 24, "topic": "Complexity", "prompt": "T(n) = T(n/2) + n has complexity O(___)", "answer": ["n"], "display": "n" },
    { "id": 25, "topic": "Recursion", "prompt": "Quick Sort's worst case is O(n²) because it has ___ subproblems of size n-1.", "answer": ["1", "one"], "display": "1" }
  ],
  "day11": [
    { "id": 1, "topic": "Sigma", "prompt": "What does the symbol Σ represent?", "answer": ["sum", "summation", "total"], "display": "Summation" },
    { "id": 2, "topic": "Sigma", "prompt": "In Σ (from i=1 to n), what is 'i' called?", "answer": ["index", "index of summation"], "display": "Index" },
    { "id": 3, "topic": "Arithmetic", "prompt": "What is the sum of 1+2+...+n?", "answer": ["n(n+1)/2", "n^2/2"], "display": "n(n+1)/2" },
    { "id": 4, "topic": "Arithmetic", "prompt": "Is the sum of 1+2+...+n an arithmetic or geometric series?", "answer": ["arithmetic"], "display": "Arithmetic" },
    { "id": 5, "topic": "Arithmetic", "prompt": "If a=3 and d=2, what is the 3rd term?", "answer": ["7"], "display": "7" },
    { "id": 6, "topic": "Geometric", "prompt": "Sum of r^0 + r^1 + ... + r^n is (r^(n+1) - 1) / (___)", "answer": ["r-1", "r - 1"], "display": "r-1" },
    { "id": 7, "topic": "Powers of 2", "prompt": "1 + 2 + 4 + ... + 2^n = 2^(n+1) - ___", "answer": ["1"], "display": "1" },
    { "id": 8, "topic": "Powers of 2", "prompt": "What is 1 + 2 + 4 + 8?", "answer": ["15"], "display": "15" },
    { "id": 9, "topic": "Geometric", "prompt": "For infinite geometric series to converge, |r| must be less than ___", "answer": ["1"], "display": "1" },
    { "id": 10, "topic": "Geometric", "prompt": "Sum of infinite series 1 + 1/2 + 1/4 + ...", "answer": ["2"], "display": "2" },
    { "id": 11, "topic": "Telescoping", "prompt": "In a telescoping sum, most terms ___", "answer": ["cancel", "cancel out", "disappear"], "display": "Cancel out" },
    { "id": 12, "topic": "Telescoping", "prompt": "Sum(1/i - 1/(i+1)) from 1 to n equals 1 - ___", "answer": ["1/(n+1)", "1 / (n+1)"], "display": "1/(n+1)" },
    { "id": 13, "topic": "Loops", "prompt": "A nested loop (i: 1 to n, j: 1 to n) performs how much work?", "answer": ["n^2", "n squared"], "display": "n²" },
    { "id": 14, "topic": "Loops", "prompt": "A triangular loop (i: 1 to n, j: 1 to i) performs how much work?", "answer": ["n^2/2", "n(n+1)/2", "o(n^2)"], "display": "O(n²)" },
    { "id": 15, "topic": "Properties", "prompt": "Can you factor a constant out of a summation? (Yes/No)", "answer": ["yes"], "display": "Yes" },
    { "id": 16, "topic": "Properties", "prompt": "Sum(5) from i=1 to n equals ___", "answer": ["5n", "5*n"], "display": "5n" },
    { "id": 17, "topic": "Geometric", "prompt": "What is the common ratio of 3, 6, 12, 24?", "answer": ["2"], "display": "2" },
    { "id": 18, "topic": "Arithmetic", "prompt": "What is the common difference of 5, 8, 11, 14?", "answer": ["3"], "display": "3" },
    { "id": 19, "topic": "Application", "prompt": "Does resizing a dynamic array involve a geometric series?", "answer": ["yes"], "display": "Yes" },
    { "id": 20, "topic": "Application", "prompt": "Is calculating Fibonacci numbers iteratively a summation?", "answer": ["yes", "no", "depends"], "display": "Yes (adding terms)" },
    { "id": 21, "topic": "Arithmetic", "prompt": "Sum of first n odd numbers (1+3+5+...) equals ___", "answer": ["n^2", "n squared"], "display": "n²" },
    { "id": 22, "topic": "Geometric", "prompt": "The sum S = a/(1-r) represents the sum of an infinite geometric series when ___", "answer": ["|r| < 1", "r < 1"], "display": "|r| < 1" },
    { "id": 23, "topic": "Properties", "prompt": "Sum from i=1 to n of (a_i + b_i) = Sum(a_i) + Sum(___)", "answer": ["b_i"], "display": "b_i" },
    { "id": 24, "topic": "Telescoping", "prompt": "A partial fraction decomposition helps set up ___ sums.", "answer": ["telescoping"], "display": "Telescoping" },
    { "id": 25, "topic": "Powers of 2", "prompt": "2^0 + 2^1 + ... + 2^(n-1) = 2^n - ___", "answer": ["1"], "display": "1" }
  ],
  "day12": [
    { "id": 1, "topic": "Intuition", "prompt": "Does limit as x->c require f(c) to be defined?", "answer": ["no"], "display": "No" },
    { "id": 2, "topic": "Intuition", "prompt": "If Limit from left != Limit from right, does the limit exist?", "answer": ["no"], "display": "No" },
    { "id": 3, "topic": "Calculation", "prompt": "Lim(x->2) of 3x+1 is?", "answer": ["7"], "display": "7" },
    { "id": 4, "topic": "Calculation", "prompt": "Lim(x->3) of (x^2-9)/(x-3). Factor and solve.", "answer": ["6"], "display": "6" },
    { "id": 5, "topic": "Infinity", "prompt": "Lim(x->inf) of 1/x is?", "answer": ["0"], "display": "0" },
    { "id": 6, "topic": "Infinity", "prompt": "Lim(x->inf) of (2x^2+1)/(x^2-1) is?", "answer": ["2"], "display": "2" },
    { "id": 7, "topic": "Definition", "prompt": "In Epsilon-Delta, Epsilon corresponds to the error in ___ (x or y)?", "answer": ["y", "f(x)", "output"], "display": "y (output)" },
    { "id": 8, "topic": "Definition", "prompt": "In Epsilon-Delta, Delta corresponds to the range in ___ (x or y)?", "answer": ["x", "input"], "display": "x (input)" },
    { "id": 9, "topic": "Continuity", "prompt": "A function is continuous if Lim(x->c) f(x) equals ___", "answer": ["f(c)"], "display": "f(c)" },
    { "id": 10, "topic": "Continuity", "prompt": "Is f(x) = 1/x continuous at x=0?", "answer": ["no"], "display": "No" },
    { "id": 11, "topic": "IVT", "prompt": "If f is continuous and f(a)<0, f(b)>0, is there a root between a and b?", "answer": ["yes"], "display": "Yes" },
    { "id": 12, "topic": "IVT", "prompt": "Does IVT apply to discontinuous functions?", "answer": ["no"], "display": "No" },
    { "id": 13, "topic": "Squeeze", "prompt": "If g(x) <= f(x) <= h(x) and Lim g = Lim h = L, what is Lim f?", "answer": ["l"], "display": "L" },
    { "id": 14, "topic": "Trig", "prompt": "Lim(x->0) of sin(x)/x is?", "answer": ["1"], "display": "1" },
    { "id": 15, "topic": "Trig", "prompt": "Lim(x->0) of (1-cos x)/x is?", "answer": ["0"], "display": "0" },
    { "id": 16, "topic": "L'Hopital", "prompt": "If limit is 0/0, can you take derivatives of top and bottom?", "answer": ["yes"], "display": "Yes (L'Hopital)" },
    { "id": 17, "topic": "Applications", "prompt": "Does the derivative definition rely on limits?", "answer": ["yes"], "display": "Yes" },
    { "id": 18, "topic": "Applications", "prompt": "Is 'lim x->0' essential for instant velocity?", "answer": ["yes"], "display": "Yes" },
    { "id": 19, "topic": "General", "prompt": "Is infinity a number?", "answer": ["no", "concept"], "display": "No" },
    { "id": 20, "topic": "General", "prompt": "Can a function have a limit where it has a hole?", "answer": ["yes"], "display": "Yes" },
    { "id": 21, "topic": "Calculation", "prompt": "Lim(x->0) of x/|x| from the right is?", "answer": ["1"], "display": "1" },
    { "id": 22, "topic": "Calculation", "prompt": "Lim(x->0) of x/|x| from the left is?", "answer": ["-1"], "display": "-1" },
    { "id": 23, "topic": "L'Hopital", "prompt": "L'Hopital's rule can be applied when the limit is of form ___ or infinity/infinity.", "answer": ["0/0"], "display": "0/0" },
    { "id": 24, "topic": "Continuity", "prompt": "A polynomial function is continuous ___ (everywhere/nowhere).", "answer": ["everywhere"], "display": "Everywhere" },
    { "id": 25, "topic": "Definition", "prompt": "The rigorous definition of limit uses epsilon and ___.", "answer": ["delta"], "display": "Delta" }
  ],
  "day13": [
    {
      "id": "d13_q1",
      "topic": "Chain Rule",
      "text": "Identify the inner function $g(x)$ in $y = (3x + 2)^4$.",
      "options": ["$3x + 2$", "$x^4$", "$3x$", "$12x$"],
      "correct": 0,
      "explanation": "The inner function is what's being raised to the power."
    },
    {
      "id": "d13_q2",
      "topic": "Chain Rule",
      "text": "The derivative of $y = (x^2 + 1)^3$ is:",
      "options": ["$3(x^2+1)^2 \\cdot 2x$", "$3(x^2+1)^2$", "$6x^2$", "$x^6$"],
      "correct": 0,
      "explanation": "f'(g(x)) * g'(x) = 3(u)^2 * (2x)."
    },
    {
      "id": "d13_q3",
      "topic": "Leibniz Notation",
      "text": "In Leibniz notation, the chain rule is expressed as:",
      "options": ["$\\frac{dy}{dx} = \\frac{dy}{du} \\cdot \\frac{du}{dx}$", "$\\frac{dy}{dx} = \\frac{dy}{du} + \\frac{du}{dx}$", "$\\frac{dy}{dx} = \\frac{f(x)}{g(x)}$", "$\\frac{dy}{dx} = y' + u'$"],
      "correct": 0,
      "explanation": "The du terms symbolically cancel."
    },
    {
      "id": "d13_q4",
      "topic": "Trig Chain",
      "text": "The derivative of $\\sin(5x)$ is:",
      "options": ["$5\\cos(5x)$", "$\\cos(5x)$", "$-5\\cos(5x)$", "$5\\sin(5x)$"],
      "correct": 0,
      "explanation": "deriv(sin) = cos, times deriv(5x) = 5."
    },
    {
      "id": "d13_q5",
      "topic": "Exp Chain",
      "text": "The derivative of $e^{2x}$ is:",
      "options": ["$2e^{2x}$", "$e^{2x}$", "$\\frac{1}{2}e^{2x}$", "$2x e^{2x-1}$"],
      "correct": 0,
      "explanation": "deriv(e^u) = e^u * du/dx."
    },
    {
      "id": "d13_q6",
      "topic": "Gears Analogy",
      "text": "If Gear B turns 4x faster than A, and C turns 5x faster than B, how fast does C turn relative to A?",
      "options": ["20x", "9x", "1x", "4.5x"],
      "correct": 0,
      "explanation": "Rates multiply: $4 \\times 5 = 20$."
    },
    {
      "id": "d13_q7",
      "topic": "Log Chain",
      "text": "The derivative of $\\ln(x^2)$ is:",
      "options": ["$\\frac{2}{x}$", "$\\frac{1}{x^2}$", "$2x \\ln(x)$", "$\\frac{1}{2x}$"],
      "correct": 0,
      "explanation": "$\\frac{1}{x^2} \\cdot 2x = \\frac{2}{x}$."
    },
    {
      "id": "d13_q8",
      "topic": "Chain Rule",
      "text": "Calculate $\\frac{d}{dx} \\sqrt{x^2 + 1}$.",
      "options": ["$\\frac{x}{\\sqrt{x^2+1}}$", "$\\frac{1}{2\\sqrt{x^2+1}}$", "$2x\\sqrt{x^2+1}$", "$\\frac{2x}{\\sqrt{x^2+1}}$"],
      "correct": 0,
      "explanation": "$\\frac{1}{2}(x^2+1)^{-1/2} \\cdot 2x = \\frac{x}{\\sqrt{x^2+1}}$."
    },
    {
      "id": "d13_q9",
      "topic": "Backprop",
      "text": "Backpropagation is essentially which calculus rule applied to massive graphs?",
      "options": ["Chain Rule", "Product Rule", "Power Rule", "L'Hopital's Rule"],
      "correct": 0,
      "explanation": "It propagates gradients using function composition."
    },
    {
      "id": "d13_q10",
      "topic": "Computational Graphs",
      "text": "In a computational graph, an 'upstream gradient' is:",
      "options": ["The gradient flowing from the output toward the input", "The raw input value", "The learning rate", "The bias"],
      "correct": 0,
      "explanation": "It represents the sensitivity of the final loss to the current node's output."
    },
    {
      "id": "d13_q11",
      "topic": "Autodiff",
      "text": "Reverse-mode autodiff is most efficient when:",
      "options": ["Many inputs, one output (like Neural Nets)", "Few inputs, many outputs", "Inputs = Outputs", "No derivatives needed"],
      "correct": 0,
      "explanation": "It computes all input gradients in a single backward pass."
    },
    {
      "id": "d13_q12",
      "topic": "Activation",
      "text": "The derivative of the ReLU activation $y = \\max(0, x)$ at $x = 5$ is:",
      "options": ["1", "0", "5", "Undefined"],
      "correct": 0,
      "explanation": "For positive x, ReLU is a line with slope 1."
    },
    {
      "id": "d13_q13",
      "topic": "Activation",
      "text": "The derivative of ReLU at $x = -2$ is:",
      "options": ["0", "1", "-2", "Undefined"],
      "correct": 0,
      "explanation": "For negative x, ReLU is flat (0)."
    },
    {
      "id": "d13_q14",
      "topic": "Chain Rule",
      "text": "If $y = f(u)$ and $u = g(x)$, then $y'$ at $x_0$ is:",
      "options": ["$f'(g(x_0)) \\cdot g'(x_0)$", "$f'(x_0) \\cdot g'(x_0)$", "$f'(g'(x_0))$", "$f(g(x_0)) \\cdot g(x_0)$"],
      "correct": 0,
      "explanation": "Standard chain rule form."
    },
    {
      "id": "d13_q15",
      "topic": "Dual Numbers",
      "text": "In dual numbers $(a + b\\epsilon)$, what is $\\epsilon^2$ defined as?",
      "options": ["0", "1", "-1", "$\\infty$"],
      "correct": 0,
      "explanation": "This allows nilpotent behavior that isolates derivatives."
    },
    {
      "id": "d13_q16",
      "topic": "Composition",
      "text": "What is the outer function of $y = \\cos(e^x)$?",
      "options": ["$\\cos(u)$", "$e^x$", "$\\sin(u)$", "$\\ln(u)$"],
      "correct": 0,
      "explanation": "Cosine is the outermost operation."
    },
    {
      "id": "d13_q17",
      "topic": "Backprop",
      "text": "The 'local gradient' at a node in a graph is:",
      "options": ["The derivative of the node's output w.r.t its direct inputs", "The final loss value", "The learning rate", "The weights"],
      "correct": 0,
      "explanation": "It ignores the rest of the network."
    },
    {
      "id": "d13_q18",
      "topic": "Learning",
      "text": "Gradient Descent uses the negative gradient because:",
      "options": ["The gradient points 'uphill', so negative points 'downhill'", "Math says so", "Computers prefer negative numbers", "It speeds up the CPU"],
      "correct": 0,
      "explanation": "We want to minimize the loss."
    },
    {
      "id": "d13_q19",
      "topic": "Chain Rule",
      "text": "Calculate $\\frac{d}{dx} (2x+1)^{-1}$.",
      "options": ["$-2(2x+1)^{-2}$", "$-(2x+1)^{-2}$", "$2(2x+1)^{-2}$", "$-2(2x+1)^0$"],
      "correct": 0,
      "explanation": "$-1(u)^{-2} \\cdot 2$."
    },
    {
      "id": "d13_q20",
      "topic": "CS Mastery",
      "text": "Which library uses 'Tape-based' autodiff?",
      "options": ["PyTorch", "TensorFlow 1.x", "C", "SQL"],
      "correct": 0,
      "explanation": "PyTorch records operations on a 'tape' (dynamic graph)."
    },
    {
      "id": "d13_q21",
      "topic": "Vanishing Gradient",
      "text": "Multiplying many small derivatives in a deep network leads to:",
      "options": ["Vanishing Gradient Problem", "Exploding Gradient Problem", "Fast Convergence", "Overfitting"],
      "correct": 0,
      "explanation": "Gradients become near zero, stopping learning."
    },
    {
      "id": "d13_q22",
      "topic": "Exploding Gradient",
      "text": "Multiplying many large (>1) derivatives leads to:",
      "options": ["Exploding Gradient Problem", "Vanishing Gradient Problem", "Underfitting", "ReLU death"],
      "correct": 0,
      "explanation": "Gradients become excessively large, making training unstable."
    },
    {
      "id": "d13_q23",
      "topic": "Chain Rule",
      "text": "If $f(x) = x^2$ and $g(x) = 3x$, what is $(f \\circ g)'(x)$?",
      "options": ["$18x$", "$6x$", "$9x^2$", "$2x$"],
      "correct": 0,
      "explanation": "$(3x)^2 = 9x^2 \\rightarrow 18x$."
    },
    {
      "id": "d13_q24",
      "topic": "Product + Chain",
      "text": "Derivative of $x \\cdot e^{x^2}$ involves:",
      "options": ["Both Product and Chain Rule", "Only Chain Rule", "Only Product Rule", "Power Rule only"],
      "correct": 0,
      "explanation": "outer product $u \\cdot v$ and inner exp $e^{x^2}$."
    },
    {
      "id": "d13_q25",
      "topic": "Efficiency",
      "text": "Why is Backprop O(Cost of Forward Pass)?",
      "options": ["Because each local derivative is computed only once", "Simple luck", "GPU hardware magic", "Neural nets are linear"],
      "correct": 0,
      "explanation": "Dynamic programming/caching of intermediate gradients."
    },
    {
      "id": "d13_q26",
      "topic": "Sigmoid",
      "text": "The derivative of Sigmoid $\\sigma(x)$ is often written as:",
      "options": ["$\\sigma(x)(1 - \\sigma(x))$", "$\\sigma(x)^2$", "$1 - \\sigma(x)$", "$e^x$"],
      "correct": 0,
      "explanation": "This is a very efficient property for HW implementation."
    },
    {
      "id": "d13_q27",
      "topic": "Leibniz",
      "text": "If $z$ depends on $y$ and $y$ depends on $x$, then $\\frac{dz}{dx} = $:",
      "options": ["$\\frac{dz}{dy} \\frac{dy}{dx}$", "$\\frac{dz}{dx} + \\frac{dy}{dx}$", "$\\frac{dz}{dy} / \\frac{dy}{dx}$", "$z'(y')$"],
      "correct": 0,
      "explanation": "Leibniz chain rule."
    },
    {
      "id": "d13_q28",
      "topic": "Forward Mode",
      "text": "Forward-mode autodiff is best for:",
      "options": ["$f: \\mathbb{R} \\to \\mathbb{R}^n$ (One input, many outputs)", "$f: \\mathbb{R}^n \\to \\mathbb{R}$", "Neural nets", "Sorting arrays"],
      "correct": 0,
      "explanation": "It computes all output sensitivities per input perturbation."
    },
    {
      "id": "d13_q29",
      "topic": "Triple Chain",
      "text": "For $y=f(g(h(x)))$, how many terms are multiplied?",
      "options": ["3", "2", "4", "1"],
      "correct": 0,
      "explanation": "$f' \\cdot g' \\cdot h'$."
    },
    {
      "id": "d13_q30",
      "topic": "Chain Rule",
      "text": "Derivative of $\\cos^2(x)$ is:",
      "options": ["$-2\\cos(x)\\sin(x)$", "$2\\cos(x)$", "$-\\sin^2(x)$", "$2\\sin(x)\\cos(x)$"],
      "correct": 0,
      "explanation": "$2(\\cos x)^1 \\cdot (-\\sin x)$."
    },
    {
      "id": "d13_q31",
      "topic": "Computational Reality",
      "text": "Can gradients flow through a 'Sort' operation?",
      "options": ["No, it's non-differentiable", "Yes, always", "Only if it uses пузырек", "Only on GPUs"],
      "correct": 0,
      "explanation": "Sorting changes indices abruptly; it lacks a continuous gradient."
    },
    {
      "id": "d13_q32",
      "topic": "Chain Rule",
      "text": "Derivative of $10^{x}$ is:",
      "options": ["$10^x \\ln(10)$", "$x 10^{x-1}$", "$10^x$", "$10 \\ln(x)$"],
      "correct": 0,
      "explanation": "$a^x \\rightarrow a^x \\ln(a)$."
    },
    {
      "id": "d13_q33",
      "topic": "Gears",
      "text": "If you add a gear with ratio 1.0 to a chain, what happens to the total sensitivity?",
      "options": ["Remains the same", "Doubles", "Zeroes out", "Becomes 1.0"],
      "correct": 0,
      "explanation": "Multiplying by 1.0 is the Identity."
    },
    {
      "id": "d13_q34",
      "topic": "Scalar Autodiff",
      "text": "In the 'Value' class example, why do we use '+= out.grad' instead of '='?",
      "options": ["To handle fan-out (multivariate chain rule sum)", "It's faster", "PyTorch convention", "Python requirement"],
      "correct": 0,
      "explanation": "If a variable is used twice, its gradients from both paths must be summed."
    },
    {
      "id": "d13_q35",
      "topic": "Chain Rule",
      "text": "Derivative of $\\log_{10}(x)$ is:",
      "options": ["$\\frac{1}{x \\ln 10}$", "$\\frac{1}{x}$", "$\\frac{\\ln 10}{x}$", "$\\frac{1}{10x}$"],
      "correct": 0,
      "explanation": "Change of base formula."
    },
    {
      "id": "d13_q36",
      "topic": "Inverse Trig",
      "text": "Derivative of $\\arcsin(x)$ is:",
      "options": ["$\\frac{1}{\\sqrt{1-x^2}}$", "$\\frac{1}{1+x^2}$", "$\\cos^{-1}(x)$", "- $\\frac{1}{\\sqrt{1-x^2}}$"],
      "correct": 0,
      "explanation": "Standard result from implicit differentiation."
    },
    {
      "id": "d13_q37",
      "topic": "Chain Rule",
      "text": "The derivative of $\\sec(x)$ is:",
      "options": ["$\\sec(x)\\tan(x)$", "$\\sec^2(x)$", "$\\tan^2(x)$", "$\\csc(x)$"],
      "correct": 0,
      "explanation": "Basic trig derivative."
    },
    {
      "id": "d13_q38",
      "topic": "Sensitivity",
      "text": "If $\\frac{dy}{dx}$ is large, what can you say about $x$ and $y$?",
      "options": ["A small change in $x$ causes a large change in $y$", "$x$ and $y$ are unrelated", "$x$ is much bigger than $y$", "The function is flat"],
      "correct": 0,
      "explanation": "High derivative = high sensitivity."
    },
    {
      "id": "d13_q39",
      "topic": "Chain Rule",
      "text": "$\\frac{d}{dx} \\sin(\\cos(x)) = $:",
      "options": ["$-\\cos(\\cos(x)) \\cdot \\sin(x)$", "$\\cos(\\sin(x))$", "$\\sin(\\cos(x))$", "$\\cos(\\cos(x))$"],
      "correct": 0,
      "explanation": "deriv(sin(u)) = cos(u) * du/dx."
    },
    {
      "id": "d13_q40",
      "topic": "Chain Rule",
      "text": "Derivative of $x^x$ is usually found via:",
      "options": ["Logarithmic Differentiation (Exp/Log Chain)", "Power Rule", "Exponential Rule", "It is zero"],
      "correct": 0,
      "explanation": "$x^x = e^{x \\ln x} \\rightarrow$ Chain Rule on product."
    },
    {
      "id": "d13_q41",
      "topic": "Dual Numbers",
      "text": "Calculating $x^2$ with $(3 + \\epsilon)$ gives:",
      "options": ["$9 + 6\\epsilon$", "$9 + \\epsilon$", "$6 + 3\\epsilon$", "9"],
      "correct": 0,
      "explanation": "$(3+\\epsilon)^2 = 9 + 6\\epsilon + \\epsilon^2 = 9 + 6\\epsilon$. Value=9, Deriv=6."
    },
    {
      "id": "d13_q42",
      "topic": "Optimization",
      "text": "In ML, the Chain Rule 'upstream' value for the very last node (Loss) is usually set to:",
      "options": ["1.0", "0.0", "The Learning Rate", "The Batch Size"],
      "correct": 0,
      "explanation": "dL/dL = 1. Base case for the recursion."
    },
    {
      "id": "d13_q43",
      "topic": "Chain Rule",
      "text": "Calculate $\\frac{d}{dx} \\tan(x^2)$.",
      "options": ["$2x \\sec^2(x^2)$", "$\\sec^2(2x)$", "$2x \\tan(x^2)$", "$\\sec^2(x^2)$"],
      "correct": 0,
      "explanation": "deriv(tan(u)) = sec^2(u) * du/dx."
    },
    {
      "id": "d13_q44",
      "topic": "Philosophy",
      "text": "Why do we call it the 'Chain' rule?",
      "options": ["Because functions are linked in a chain of logic", "After its inventor, Thomas Chain", "Because it uses chains of integers", "It was invented to study chains"],
      "correct": 0,
      "explanation": "Composition $f(g(x))$ forms a chain where the output of one is the input of next."
    },
    {
      "id": "d13_q45",
      "topic": "Backprop",
      "text": "What happens if you multiply by a 0 gradient mid-chain?",
      "options": ["Gradient for all preceding nodes becomes 0", "Nothing", "It defaults to 1", "It raises an error"],
      "correct": 0,
      "explanation": "Multiplication by zero stops the flow of information."
    }
  ],
  "day14": [
    {
      "id": "d14_q1",
      "topic": "Critical Points",
      "text": "What condition identifies a critical point of $f(x)$?",
      "options": ["$f'(x) = 0$ or $f'(x)$ is undefined", "$f(x) = 0$", "$f''(x) = 0$", "$x = 0$"],
      "correct": 0,
      "explanation": "Critical points are where the slope is zero or the function is not differentiable."
    },
    {
      "id": "d14_q2",
      "topic": "Second Derivative Test",
      "text": "If $f'(x) = 0$ and $f''(x) > 0$, the point is a:",
      "options": ["Local Minimum", "Local Maximum", "Saddle Point", "Inflexion Point"],
      "correct": 0,
      "explanation": "Positive second derivative means the curve is 'concave up' (smile), creating a bowl/minimum."
    },
    {
      "id": "d14_q3",
      "topic": "Second Derivative Test",
      "text": "If $f'(x) = 0$ and $f''(x) < 0$, the point is a:",
      "options": ["Local Maximum", "Local Minimum", "Saddle Point", "Root"],
      "correct": 0,
      "explanation": "Negative second derivative means 'concave down' (frown), creating a hill/maximum."
    },
    {
      "id": "d14_q4",
      "topic": "Gradient Descent",
      "text": "The gradient descent update rule is $x_{new} = x_{old} - \\alpha \\cdot \\nabla f(x)$. What does $\\alpha$ represent?",
      "options": ["Learning Rate", "Momentum", "Friction", "Loss"],
      "correct": 0,
      "explanation": "Alpha is the step size or learning rate."
    },
    {
      "id": "d14_q5",
      "topic": "Gradient Descent",
      "text": "Why do we subtract the gradient in the update rule?",
      "options": ["Because the gradient points uphill, and we want to go downhill", "To make the numbers smaller", "It's a convention in Python", "To increase the error"],
      "correct": 0,
      "explanation": "The gradient points in the direction of steepest increase; the negative gradient points toward the minimum."
    },
    {
      "id": "d14_q6",
      "topic": "Learning Rate",
      "text": "What happens if the learning rate is too large?",
      "options": ["The algorithm may overshoot the minimum and diverge", "Training takes too long", "The weights become zero", "The loss stays constant"],
      "correct": 0,
      "explanation": "Large steps cause oscillation or 'jumping' over the valley into the opposite side's high ground."
    },
    {
      "id": "d14_q7",
      "topic": "Learning Rate",
      "text": "What happens if the learning rate is too small?",
      "options": ["Convergence is very slow", "The model overfits instantly", "The loss explodes", "The computer crashes"],
      "correct": 0,
      "explanation": "Tiny steps mean it takes thousands of iterations to move a meaningful distance."
    },
    {
      "id": "d14_q8",
      "topic": "SGD",
      "text": "What does 'Stochastic' mean in Stochastic Gradient Descent (SGD)?",
      "options": ["Random (using one sample at a time)", "Fast", "Parallel", "Approximate"],
      "correct": 0,
      "explanation": "SGD uses a single random training sample (or mini-batch) to estimate the gradient."
    },
    {
      "id": "d14_q9",
      "topic": "Momentum",
      "text": "How does Momentum help optimization?",
      "options": ["It smooths oscillations and helps escape shallow local minima", "It makes the learning rate zero", "It increases training error", "It deletes bad weights"],
      "correct": 0,
      "explanation": "Like a ball rolling with inertia, it gains speed in consistent directions and rolls over small bumps."
    },
    {
      "id": "d14_q10",
      "topic": "Adam",
      "text": "Adam optimizer is essentially a combination of which two techniques?",
      "options": ["Momentum and RMSProp", "SGD and Batch Descent", "Binary Search and Newton's Method", "ReLU and Dropout"],
      "correct": 0,
      "explanation": "Adam keeps track of both the average gradient (momentum) and the square of the gradient (scaling)."
    },
    {
      "id": "d14_q11",
      "topic": "Global Minima",
      "text": "A 'Global Minimum' is:",
      "options": ["The single lowest point of the entire function", "A point where slope is zero", "The bottom of any valley", "A local maximum"],
      "correct": 0,
      "explanation": "It is the true optimal solution for the whole domain."
    },
    {
      "id": "d14_q12",
      "topic": "Saddle Point",
      "text": "A saddle point is a critical point that is:",
      "options": ["Neither a minimum nor a maximum", "Both a minimum and a maximum", "The highest point on a graph", "A point of discontinuity"],
      "correct": 0,
      "explanation": "In 3D, it looks like a horse saddle: downhill in one axis, uphill in another."
    },
    {
      "id": "d14_q13",
      "topic": "Convexity",
      "text": "A convex function (like a bowl) has how many local minima?",
      "options": ["One (it's the global one)", "Zero", "Infinite", "Exactly two"],
      "correct": 0,
      "explanation": "Convex functions are 'well-behaved' and have a single optimal point."
    },
    {
      "id": "d14_q14",
      "topic": "Optimization",
      "text": "Which ML algorithm usually HAS a convex loss landscape?",
      "options": ["Linear Regression", "Deep Neural Networks", "Large Language Models", "Generative Adversarial Networks"],
      "correct": 0,
      "explanation": "Simple linear models have parabolic loss landscapes that are convex."
    },
    {
      "id": "d14_q15",
      "topic": "Hessian",
      "text": "The Hessian matrix contains information about:",
      "options": ["Second derivatives (curvature)", "First derivatives (slope)", "The model's inputs", "The learning rate"],
      "correct": 0,
      "explanation": "It tells us how the gradient changes, which represents curvature."
    },
    {
      "id": "d14_q16",
      "topic": "Batch Norm",
      "text": "Batch Normalization helps optimization primarily by:",
      "options": ["Re-centering activations to prevent gradients from exploding/vanishing", "Increasing the number of parameters", "Adding noise to the labels", "Stopping training early"],
      "correct": 0,
      "explanation": "It keeps layer outputs in a stable range, making the landscape easier to traverse."
    },
    {
      "id": "d14_q17",
      "topic": "Convergence",
      "text": "If the loss oscillates wildly without decreasing, you should:",
      "options": ["Decrease the learning rate", "Increase the learning rate", "Change the activation function", "Add more data"],
      "correct": 0,
      "explanation": "Oscillation usually indicates overshooting due to a high learning rate."
    },
    {
      "id": "d14_q18",
      "topic": "Local Minima",
      "text": "In high-dimensional AI model landscapes, what is more common than local minima?",
      "options": ["Saddle points", "Global minima", "Flat planes", "Discontinuities"],
      "correct": 0,
      "explanation": "With millions of parameters, it's very rare for all directions to be 'uphill' simultaneously."
    },
    {
      "id": "d14_q19",
      "topic": "Taylor Expansion",
      "text": "Approximating a function locally with a line is a 1st order Taylor expansion.",
      "options": ["1st", "0th", "2nd", "Infinite"],
      "correct": 0,
      "explanation": "1st order uses the function value and the first derivative (slope)."
    },
    {
      "id": "d14_q20",
      "topic": "Taylor Expansion",
      "text": "Approximating a function locally with a parabola is a 2nd order Taylor expansion.",
      "options": ["2nd", "1st", "3rd", "Linear"],
      "correct": 0,
      "explanation": "2nd order includes the second derivative (curvature)."
    },
    {
      "id": "d14_q21",
      "topic": "Optimizers",
      "text": "RMSProp divides the learning rate by the square root of $(\\dots)$.",
      "options": ["The mean square of previous gradients", "The current weight value", "The batch size", "The iteration number"],
      "correct": 0,
      "explanation": "This scales down steps for parameters with frequently large gradients."
    },
    {
      "id": "d14_q22",
      "topic": "Vanishing Gradient",
      "text": "What happens if gradients become near zero in early layers?",
      "options": ["The weights stop updating (Vanishing Gradient)", "The model trains faster", "The loss explodes", "Accuracy reaches 100%"],
      "correct": 0,
      "explanation": "Updates are proportional to the gradient; 0 gradient = 0 learning."
    },
    {
      "id": "d14_q23",
      "topic": "Learning Rate",
      "text": "A 'Learning Rate Scheduler' $(\\dots)$.",
      "options": ["Changes the learning rate over time (e.g., decays it)", "Stops the training manually", "Is only used in JAX", "Automatically calculates the gradient"],
      "correct": 0,
      "explanation": "Typically, you want large steps early on and smaller steps as you approach the minimum."
    },
    {
      "id": "d14_q24",
      "topic": "Optimization",
      "text": "The phrase 'Training loss is 0 but validation loss is high' indicates:",
      "options": ["Overfitting", "Underfitting", "Perfect convergence", "Bad programming"],
      "correct": 0,
      "explanation": "The model has optimized for the specific training examples but hasn't generalized."
    },
    {
      "id": "d14_q25",
      "topic": "Weight Decay",
      "text": "Weight decay (L2 Regularization) $(\\dots)$.",
      "options": ["Keeps weights small to prevent overfitting", "Multiplies weights by 10", "Deletes redundant neurons", "Increases the learning rate"],
      "correct": 0,
      "explanation": "It adds a penalty to the loss function proportional to the square of the weights."
    },
    {
      "id": "d14_q26",
      "topic": "Gradient",
      "text": "In 3D, the gradient vector points:",
      "options": ["Deeper into the screen", "Perpendicular to the level curves in the direction of steepest ascent", "Along the x-axis only", "At the origin"],
      "correct": 1,
      "explanation": "Standard property of the gradient in multivariable calculus."
    },
    {
      "id": "d14_q27",
      "topic": "Philosophy",
      "text": "Modern Deep Learning training is mostly $(\\dots)$ optimization.",
      "options": ["Non-convex", "Convex", "Linear", "Discrete"],
      "correct": 0,
      "explanation": "Neural networks have extremely complex, bumpy error landscapes."
    },
    {
      "id": "d14_q28",
      "topic": "Global Minimum",
      "text": "Do we absolutely NEED to find the global minimum to have a useful AI?",
      "options": ["No, a 'good enough' local minimum is often sufficient", "Yes, otherwise the model is invalid", "Only if using GPUs", "Only for linear regression"],
      "correct": 0,
      "explanation": "We just need a low enough error for the task."
    },
    {
      "id": "d14_q29",
      "topic": "Critical Points",
      "text": "Find critical points of $f(x) = x^2 - 4x$.",
      "options": ["x = 2", "x = 4", "x = 0", "x = -2"],
      "correct": 0,
      "explanation": "$f'(x) = 2x - 4 \\rightarrow 2x - 4 = 0 \\rightarrow x = 2$."
    },
    {
      "id": "d14_q30",
      "topic": "Calculus",
      "text": "If $f'(x) = 3$ for all $x$, the function has $(\\dots)$.",
      "options": ["No critical points", "One maximum", "One minimum", "Inflections"],
      "correct": 0,
      "explanation": "$3=0$ is never true; a line has no peaks or valleys."
    },
    {
      "id": "d14_q31",
      "topic": "Momentum",
      "text": "If $\\beta=0$ in the momentum update, what happens?",
      "options": ["It becomes standard Gradient Descent", "The weights don't update", "The model diverges instantly", "The computer crashes"],
      "correct": 0,
      "explanation": "Beta is the 'friction' or 'retention' of previous velocity."
    },
    {
      "id": "d14_q32",
      "topic": "Batch Size",
      "text": "Small batch sizes $(\\dots)$.",
      "options": ["Add noise to the gradient, which can help escape local minima", "Are always better", "Slow down the GPU to zero", "Make the loss always 0"],
      "correct": 0,
      "explanation": "Noisy gradients prevent getting stuck as easily as 'perfect' ones."
    },
    {
      "id": "d14_q33",
      "topic": "Hardware",
      "text": "Why are GPUs good for SGD?",
      "options": ["They can handle the massive matrix additions in parallel", "They have better floating point accuracy", "They are cheaper", "Gradients only work on hardware"],
      "correct": 0,
      "explanation": "Optimization updates are millions of small, similar math ops."
    },
    {
      "id": "d14_q34",
      "topic": "Adam",
      "text": "What is 'eps' ($10^{-8}$) in the Adam code for?",
      "options": ["Preventing division by zero", "Setting the learning rate", "A math constant like Pi", "Timing the training"],
      "correct": 0,
      "explanation": "Standard numerical stability trick."
    },
    {
      "id": "d14_q35",
      "topic": "Taylor",
      "text": "Newton's method uses $(\\dots)$ to find the bottom of a function.",
      "options": ["The 2nd derivative (Hessian)", "Random numbers", "Only the 1st derivative", "A coin flip"],
      "correct": 0,
      "explanation": "It models the function as a quadratic (parabola) and jumps to its vertex."
    },
    {
      "id": "d14_q36",
      "topic": "Learning Rate",
      "text": "Warmup refers to:",
      "options": ["Starting with a very small LR and increasing it for a few steps", "Letting the GPU heat up", "Running the unit tests", "Calculating the dataset mean"],
      "correct": 0,
      "explanation": "Prevents large initial gradients from wrecking the weight initialization."
    },
    {
      "id": "d14_q37",
      "topic": "Optimization",
      "text": "Early Stopping $(\\dots)$.",
      "options": ["Stops training when validation loss starts increasing", "Is a bug in PyTorch", "Deletes the model", "Is used only for linear regression"],
      "correct": 0,
      "explanation": "Prevents the model from 'memorizing' training data."
    },
    {
      "id": "d14_q38",
      "topic": "Gradient",
      "text": "If $\\nabla f = [0, 0, 0, 0]$, we are at a $(\\dots)$.",
      "options": ["Critical point", "Origin", "Maximum only", "Zero weight state"],
      "correct": 0,
      "explanation": "Multivariate slop is zero."
    },
    {
      "id": "d14_q39",
      "topic": "Critical Points",
      "text": "Function $f(x) = x^3$ at $x=0$ is a $(\\dots)$.",
      "options": ["Saddle count equivalent (inflection point)", "Maximum", "Minimum", "Discontinuity"],
      "correct": 0,
      "explanation": "Slope is 0, but it goes from up to up. Not a peak or valley."
    },
    {
      "id": "d14_q40",
      "topic": "Optimization",
      "text": "Training a GPT-4 level model is essentially $(\\dots)$.",
      "options": ["Optimization on a trillion-dimensional landscape", "Just copying text", "Sorted list search", "A simple linear fit"],
      "correct": 0,
      "explanation": "Scale doesn't change the underlying calculus! Just the complexity."
    },
    {
      "id": "d14_q41",
      "topic": "Batch Norm",
      "text": "BatchNorm adds $(\\dots)$ learnable parameters per layer.",
      "options": ["2 (Gamma and Beta)", "0", "1 million", "1"],
      "correct": 0,
      "explanation": "It learns how to scale and shift the normalized values."
    },
    {
      "id": "d14_q42",
      "topic": "Hessian",
      "text": "Calculating the full Hessian for a model with 1B parameters is $(\\dots)$.",
      "options": ["Computationally impossible (memory limit)", "Very easy", "Required for Adam", "Faster than GD"],
      "correct": 0,
      "explanation": "Needs $N^2$ space. 1B squared is way too big."
    },
    {
      "id": "d14_q43",
      "topic": "Initialization",
      "text": "Why not initialize all weights to Zero?",
      "options": ["Symmetry prevents different neurons from learning different things", "0 is a bad number", "Gradients become infinite", "Loss becomes negative"],
      "correct": 0,
      "explanation": "All gradients would be identical, making multiple neurons redundant."
    },
    {
      "id": "d14_q44",
      "topic": "Convexity",
      "text": "A line segment between any two points on a $(\\dots)$ function graph lies ABOVE the graph.",
      "options": ["Convex", "Concave", "Linear", "Periodic"],
      "correct": 0,
      "explanation": "Definition of a convex set/function."
    },
    {
      "id": "d14_q45",
      "topic": "Convergence",
      "text": "Optimization is 'Converged' when:",
      "options": ["The loss stops decreasing significantly", "Accuracy is 100%", "The CPU stops", "The weights are all positive"],
      "correct": 0,
      "explanation": "We reached a stable point (minimum)."
    }
  ],
  "day15": [
    {
      "id": "d15_q1",
      "topic": "Riemann Sums",
      "text": "What does a Riemann Sum approximate?",
      "options": ["The area under a curve (the integral)", "The slope of a curve", "The root of a function", "The second derivative"],
      "correct": 0,
      "explanation": "Riemann sums use rectangles to approximate the total area."
    },
    {
      "id": "d15_q2",
      "topic": "Riemann Sums",
      "text": "For an increasing function, a Left Riemann Sum will:",
      "options": ["Underestimate the area", "Overestimate the area", "Be exactly correct", "Give a negative result"],
      "correct": 0,
      "explanation": "Because the function is rising, the left-side heights are always lower than the rest of the interval."
    },
    {
      "id": "d15_q3",
      "topic": "FTC",
      "text": "The Fundamental Theorem of Calculus Part 2 states that $\\int_a^b f(x)dx = $ $(\\dots)$.",
      "options": ["$F(b) - F(a)$", "$f'(b) - f'(a)$", "$F(a) - F(b)$", "$f(b) \\cdot f(a)$"],
      "correct": 0,
      "explanation": "Evaluation of a definite integral uses the antiderivative at the endpoints."
    },
    {
      "id": "d15_q4",
      "topic": "Antiderivatives",
      "text": "What is $\\int x^n dx$ for $n \\neq -1$?",
      "options": ["$\\frac{x^{n+1}}{n+1} + C$", "$n x^{n-1}$", "$x^{n+1} + C$", "$\\ln|x|$"],
      "correct": 0,
      "explanation": "The power rule for integration is the reverse of the derivative power rule."
    },
    {
      "id": "d15_q5",
      "topic": "Antiderivatives",
      "text": "What is $\\int \\frac{1}{x} dx$?",
      "options": ["$\\ln|x| + C$", "$x^0$", "$-1/x^2$", "$e^x$"],
      "correct": 0,
      "explanation": "The derivative of natural log is 1/x."
    },
    {
      "id": "d15_q6",
      "topic": "Antiderivatives",
      "text": "What is $\\int e^x dx$?",
      "options": ["$e^x + C$", "$x e^{x-1}$", "$\\ln(x)$", "$1/e^x$"],
      "correct": 0,
      "explanation": "e^x is its own derivative and integral."
    },
    {
      "id": "d15_q7",
      "topic": "Integration Rules",
      "text": "Calculate $\\int_0^3 x^2 dx$.",
      "options": ["9", "3", "27", "6"],
      "correct": 0,
      "explanation": "$[x^3/3]_0^3 = 27/3 - 0 = 9$."
    },
    {
      "id": "d15_q8",
      "topic": "Integration Rules",
      "text": "Calculate $\\int \\sin(x) dx$.",
      "options": ["$-\\cos(x) + C$", "$\\cos(x) + C$", "$\\sec(x)$", "$\\tan(x)$"],
      "correct": 0,
      "explanation": "Derivative of cos is -sin, so integral of sin is -cos."
    },
    {
      "id": "d15_q9",
      "topic": "U-Substitution",
      "text": "U-Substitution is most similar to which differentiation rule?",
      "options": ["Chain Rule", "Product Rule", "Quotient Rule", "Power Rule"],
      "correct": 0,
      "explanation": "It handles composite functions by changing variables."
    },
    {
      "id": "d15_q10",
      "topic": "Integration by Parts",
      "text": "Integration by Parts is the reverse of which differentiation rule?",
      "options": ["Product Rule", "Chain Rule", "Quotient Rule", "Sum Rule"],
      "correct": 0,
      "explanation": "It comes from the formula $(uv)' = u'v + uv'$."
    },
    {
      "id": "d15_q11",
      "topic": "Trapezoid Rule",
      "text": "The Trapezoid Rule approximates area using $(\\dots)$.",
      "options": ["Slanted lines (trapezoids)", "Vertical rectangles", "Horizontal lines", "Parabolas"],
      "correct": 0,
      "explanation": "Connecting $(x_i, f(x_i))$ and $(x_{i+1}, f(x_{i+1}))$ with a line makes a trapezoid."
    },
    {
      "id": "d15_q12",
      "topic": "Simpson's Rule",
      "text": "Simpson's Rule approximates area using $(\\dots)$.",
      "options": ["Parabolas", "Triangles", "Circles", "Step functions"],
      "correct": 0,
      "explanation": "It fits a 2nd-degree polynomial to groups of three points."
    },
    {
      "id": "d15_q13",
      "topic": "Numerical Error",
      "text": "Which method is generally MORE accurate for a fixed number of segments?",
      "options": ["Simpson's Rule", "Trapezoid Rule", "Left Riemann Sum", "Right Riemann Sum"],
      "correct": 0,
      "explanation": "Simpson's is O(dx^4), Trapezoid is O(dx^2)."
    },
    {
      "id": "d15_q14",
      "topic": "Monte Carlo",
      "text": "Monte Carlo integration relies on $(\\dots)$.",
      "options": ["Random sampling", "Symmetric grids", "Derivative estimation", "Linear interpolation"],
      "correct": 0,
      "explanation": "It uses random 'darts' to estimate the fraction of area."
    },
    {
      "id": "d15_q15",
      "topic": "Monte Carlo",
      "text": "Why use Monte Carlo instead of Simpson's rule?",
      "options": ["For high-dimensional integrals (many variables)", "It is always faster for 1D", "It is exactly accurate", "It doesn't require a computer"],
      "correct": 0,
      "explanation": "The 'Curse of Dimensionality' makes grid-based methods explode in complexity."
    },
    {
      "id": "d15_q16",
      "topic": "Improper Integrals",
      "text": "An improper integral is one where $(\\dots)$.",
      "options": ["The interval is infinite or the integrand is discontinuous", "The result is negative", "The function is linear", "The area is a square"],
      "correct": 0,
      "explanation": "Usually involves limits like $\\infty$."
    },
    {
      "id": "d15_q17",
      "topic": "Improper Integrals",
      "text": "Does $\\int_1^\\infty \\frac{1}{x} dx$ converge?",
      "options": ["No, it diverges to infinity", "Yes, it equals 1", "Yes, it equals $\\pi$", "Only if x is negative"],
      "correct": 0,
      "explanation": "Integral of 1/x is ln(x). ln(inf) is infinite."
    },
    {
      "id": "d15_q18",
      "topic": "Improper Integrals",
      "text": "Does $\\int_1^\\infty \\frac{1}{x^2} dx$ converge?",
      "options": ["Yes, to 1", "No, it diverges", "Yes, to 0", "Yes, to infinity"],
      "correct": 0,
      "explanation": "$[-1/x]_1^\\infty = 0 - (-1) = 1$."
    },
    {
      "id": "d15_q19",
      "topic": "Mean Value Theorem",
      "text": "The Mean Value Theorem for Integrals helps find $(\\dots)$.",
      "options": ["The average value of a function", "The maximum of a function", "The root of a function", "The tangent line"],
      "correct": 0,
      "explanation": "Average height = (Total Area) / (Width)."
    },
    {
      "id": "d15_q20",
      "topic": "Average Value",
      "text": "What is the average value of $f(x)=10$ on $[0, 5]$?",
      "options": ["10", "50", "5", "2"],
      "correct": 0,
      "explanation": "Integral is $10x|_0^5 = 50$. Width is 5. $50/5 = 10$."
    },
    {
      "id": "d15_q21",
      "topic": "Accumulation",
      "text": "If $v(t)$ is velocity, what does $\\int v(t)dt$ represent?",
      "options": ["Displacement (Position change)", "Acceleration", "Jerk", "Force"],
      "correct": 0,
      "explanation": "Integrating velocity gives the total distance moved."
    },
    {
      "id": "d15_q22",
      "topic": "Accumulation",
      "text": "If $P(t)$ is power (Watts), what does $\\int P(t)dt$ represent?",
      "options": ["Energy (Joules)", "Voltage", "Current", "Resistance"],
      "correct": 0,
      "explanation": "Power is the rate of energy use. Integral is total energy."
    },
    {
      "id": "d15_q23",
      "topic": "Integration",
      "text": "In the symbol $\\int f(x)dx$, what does '$dx$' represent conceptually?",
      "options": ["An infinitely small width", "Drive 'x'", "A constant of 1", "The derivative of x"],
      "correct": 0,
      "explanation": "It reminds us we are summing up strips of width dx."
    },
    {
      "id": "d15_q24",
      "topic": "Gabriel's Horn",
      "text": "Gabriel's Horn is famous because it has $(\\dots)$.",
      "options": ["Finite volume but infinite surface area", "Infinite volume but finite surface area", "Zero volume", "Negative area"],
      "correct": 0,
      "explanation": "A classic paradox of improper integration."
    },
    {
      "id": "d15_q25",
      "topic": "Line Integrals",
      "text": "A line integral integrates a function along a $(\\dots)$.",
      "options": ["Path or Curve", "Straight x-axis only", "Vertical line only", "Square"],
      "correct": 0,
      "explanation": "It generalizes integration to arbitrary shapes in space."
    },
    {
      "id": "d15_q26",
      "topic": "Python",
      "text": "Which SciPy function is standard for general-purpose integration?",
      "options": ["scipy.integrate.quad", "scipy.sum", "scipy.diff", "scipy.area"],
      "correct": 0,
      "explanation": "'quad' uses Clenshaw-Curtis or Gaussian quadrature."
    },
    {
      "id": "d15_q27",
      "topic": "Python",
      "text": "What does 'quad' return besides the result?",
      "options": ["Estimate of the absolute error", "The execution time", "A plot", "The derivative"],
      "correct": 0,
      "explanation": "Numerical solvers always provide an error bound/uncertainty."
    },
    {
      "id": "d15_q28",
      "topic": "Autodiff",
      "text": "Is there a 'perfect' integration equivalent to Autodiff that handles all code?",
      "options": ["No, integration is inherently harder and often numerical", "Yes, it's called AutoIntegrate", "Yes, but only in C++", "Only for linear functions"],
      "correct": 0,
      "explanation": "Unlike derivatives, many integrals cannot be computed exactly in closed form."
    },
    {
      "id": "d15_q29",
      "topic": "Calculus",
      "text": "$\\int_a^a f(x)dx = $",
      "options": ["0", "f(a)", "1", "Infinity"],
      "correct": 0,
      "explanation": "Area of a rectangle with width 0 is 0."
    },
    {
      "id": "d15_q30",
      "topic": "Calculus",
      "text": "$\\int_a^b f(x)dx + \\int_b^c f(x)dx = $",
      "options": ["$\\int_a^c f(x)dx$", "$\\int_a^b+c f(x)dx$", "0", "$\\int_a^c f(x)^2dx$"],
      "correct": 0,
      "explanation": "Integrals are additive over adjacent intervals."
    },
    {
      "id": "d15_q31",
      "topic": "GPS",
      "text": "In navigation, 'Dead Reckoning' uses integration to estimate $(\\dots)$.",
      "options": ["Position from acceleration/velocity", "Battery life", "Signal strength", "Satellite altitude"],
      "correct": 0,
      "explanation": "By summing up movements, you keep track of where you are."
    },
    {
      "id": "d15_q32",
      "topic": "GPS",
      "text": "Why do integrated errors 'drift' over time?",
      "options": ["Because small errors in acceleration add up and grow", "Because the Earth rotates", "Because of battery drainage", "Because integers are used"],
      "correct": 0,
      "explanation": "Integrating noise creates a random walk that moves away from truth."
    },
    {
      "id": "d15_q33",
      "topic": "Physics",
      "text": "Work is the integral of $(\\dots)$ over distance.",
      "options": ["Force", "Power", "Mass", "Time"],
      "correct": 0,
      "explanation": "$W = \\int F ds$."
    },
    {
      "id": "d15_q34",
      "topic": "Probability",
      "text": "The total integral of a Probability Density Function must be:",
      "options": ["1", "0", "0.5", "Infinity"],
      "correct": 0,
      "explanation": "The sum of all possible outcomes is 100% (1)."
    },
    {
      "id": "d15_q35",
      "topic": "Computer Science",
      "text": "The 'prefix sum' of an array is a discrete version of:",
      "options": ["An integral", "A derivative", "A limit", "A tangent"],
      "correct": 0,
      "explanation": "Cumulative sum = Integral."
    },
    {
      "id": "d15_q36",
      "topic": "Antiderivatives",
      "text": "If $F(x)$ is an antiderivative, what is $\\frac{d}{dx} [\\int_a^x f(t)dt]$?",
      "options": ["$f(x)$", "$F(x)$", "$0$", "$x$"],
      "correct": 0,
      "explanation": "Part 1 of the Fundamental Theorem."
    },
    {
      "id": "d15_q37",
      "topic": "Numerical",
      "text": "To increase accuracy in a Riemann sum, you should $(\\dots)$.",
      "options": ["Increase the number of rectangles (N)", "Decrease N", "Make the rectangles wider", "Add a constant"],
      "correct": 0,
      "explanation": "Smaller dx leads to a better approximation of the curve."
    },
    {
      "id": "d15_q38",
      "topic": "Terminology",
      "text": "An 'Indefinite Integral' is also known as a(n) $(\\dots)$.",
      "options": ["Antiderivative", "Definite integral", "Limit", "Derivative"],
      "correct": 0,
      "explanation": "They both represent finding a function whose derivative is the given function."
    },
    {
      "id": "d15_q39",
      "topic": "History",
      "text": "Leibniz used the symbol 'S' (for summa) as a precursor to the integral sign.",
      "options": ["True", "False"],
      "correct": 0,
      "explanation": "The integral sign $\\int$ is an elongated 'S'."
    },
    {
      "id": "d15_q40",
      "topic": "Terminology",
      "text": "The function being integrated is called the $(\\dots)$.",
      "options": ["Integrand", "Derivand", "Factor", "Base"],
      "correct": 0,
      "explanation": "The stuff inside the integral."
    },
    {
      "id": "d15_q41",
      "topic": "Convergence",
      "text": "If the integral from 1 to infinity is finite, we say it:",
      "options": ["Converges", "Diverges", "Stabilizes", "Vanishes"],
      "correct": 0,
      "explanation": "Standard calculus terminology."
    },
    {
      "id": "d15_q42",
      "topic": "Monte Carlo",
      "text": "If you throw 100 darts and 78 land inside a circle inside a 1x1 square, estimate the area.",
      "options": ["0.78", "78", "1.00", "0.22"],
      "correct": 0,
      "explanation": "78/100 * 1*1 = 0.78."
    },
    {
      "id": "d15_q43",
      "topic": "Calculus",
      "text": "$\\int e^{-x} dx = $",
      "options": ["$-e^{-x} + C$", "$e^{-x} + C$", "$\\ln|-e^{-x}|$", "$-x e^{-x}$"],
      "correct": 0,
      "explanation": "Simple chain rule reversal."
    },
    {
      "id": "d15_q44",
      "topic": "General",
      "text": "Integration is often used to calculate the $(\\dots)$ of irregular solids.",
      "options": ["Volume", "Weight", "Speed", "Frequency"],
      "correct": 0,
      "explanation": "Volume = integral of area."
    },
    {
      "id": "d15_q45",
      "topic": "Philosophy",
      "text": "Is integration 'Harder' than differentiation for humans?",
      "options": ["Generally yes, because it requires matching patterns and clever substitutions", "No, it's easier", "They are exactly the same difficulty", "Calculus doesn't exist"],
      "correct": 0,
      "explanation": "Differentiation is algorithmic; integration is an art of pattern matching."
    }
  ],
  "day16": [
    {
      "id": 1,
      "topic": "Maclaurin",
      "prompt": "First three terms of e^x Maclaurin: 1 + x + ___",
      "answer": "x^2/2,x²/2,x2/2",
      "display": "x²/2! = x²/2"
    },
    {
      "id": 2,
      "topic": "Maclaurin",
      "prompt": "sin(x) starts with: x - x³/___ + ...",
      "answer": "6,3!",
      "display": "6 (which is 3!)"
    },
    {
      "id": 3,
      "topic": "Maclaurin",
      "prompt": "cos(0) using Maclaurin = ?",
      "answer": "1",
      "display": "1"
    },
    {
      "id": 4,
      "topic": "Taylor",
      "prompt": "Taylor series are centered at point ___",
      "answer": "a",
      "display": "a (the expansion point)"
    },
    {
      "id": 5,
      "topic": "Error",
      "prompt": "The error bound formula uses (n+1)!/M or M/(n+1)!?",
      "answer": "m/(n+1)!,m/(n+1)",
      "display": "M/(n+1)!"
    },
    {
      "id": 6,
      "topic": "CS Connection",
      "prompt": "Why do calculators use Taylor series? For ___ and speed.",
      "answer": "accuracy,precision",
      "display": "accuracy/precision"
    },
    { "id": 7, "topic": "Maclaurin", "prompt": "Maclaurin series is a Taylor series centered at a = ___", "answer": ["0"], "display": "0" },
    { "id": 8, "topic": "Taylor", "prompt": "The general term of a Taylor series is f^(n)(a) / ___ * (x-a)^n", "answer": ["n!", "n factorial"], "display": "n!" },
    { "id": 9, "topic": "Maclaurin", "prompt": "cos(x) Maclaurin starts: 1 - x²/2! + ___", "answer": ["x^4/4!", "x⁴/24"], "display": "x⁴/4!" },
    { "id": 10, "topic": "Convergence", "prompt": "The radius of convergence for e^x is ___", "answer": ["infinity", "∞"], "display": "∞" },
    { "id": 11, "topic": "Convergence", "prompt": "The ratio test is used to find the ___ of convergence", "answer": ["radius"], "display": "Radius" },
    { "id": 12, "topic": "Maclaurin", "prompt": "1/(1-x) = 1 + x + x² + x³ + ... for |x| < ___", "answer": ["1"], "display": "1" },
    { "id": 13, "topic": "Taylor", "prompt": "To approximate f(x) near x=2, expand Taylor around a = ___", "answer": ["2"], "display": "2" },
    { "id": 14, "topic": "Error", "prompt": "Using more terms in a Taylor series generally ___ the error.", "answer": ["reduces", "decreases"], "display": "Reduces" },
    { "id": 15, "topic": "Maclaurin", "prompt": "ln(1+x) = x - x²/2 + x³/3 - ... for |x| < ___", "answer": ["1"], "display": "1" },
    { "id": 16, "topic": "Application", "prompt": "Euler's formula e^(ix) = cos(x) + i*sin(x) uses ___ series.", "answer": ["taylor", "maclaurin"], "display": "Taylor/Maclaurin" },
    { "id": 17, "topic": "Computation", "prompt": "To compute sin(0.1), a computer uses the first few terms of its ___ series.", "answer": ["taylor", "maclaurin"], "display": "Taylor" },
    { "id": 18, "topic": "Convergence", "prompt": "A series that converges only at its center has radius ___ = 0.", "answer": ["r", "r=0"], "display": "R = 0" },
    { "id": 19, "topic": "Error", "prompt": "The Lagrange error bound helps estimate the ___ error.", "answer": ["truncation"], "display": "Truncation" },
    { "id": 20, "topic": "Maclaurin", "prompt": "The derivative of the Taylor expansion equals the ___ of the derivative.", "answer": ["taylor expansion", "expansion"], "display": "Taylor expansion of derivative" },
    { "id": 21, "topic": "Computation", "prompt": "Approximating pi often uses Taylor series of ___.", "answer": ["arctan", "atan", "arctangent"], "display": "arctan" },
    { "id": 22, "topic": "Convergence", "prompt": "At the endpoints of the interval of convergence, the series may ___ or diverge.", "answer": ["converge"], "display": "Converge" },
    { "id": 23, "topic": "Taylor", "prompt": "The first-order Taylor approximation is called the ___ approximation.", "answer": ["linear"], "display": "Linear" },
    { "id": 24, "topic": "Taylor", "prompt": "The second-order Taylor approximation is called the ___ approximation.", "answer": ["quadratic"], "display": "Quadratic" },
    { "id": 25, "topic": "Application", "prompt": "In physics, small angle approximation sin(θ) ≈ θ uses the first term of the ___ series.", "answer": ["taylor", "maclaurin"], "display": "Taylor" }
  ],
  "day17": [
    {
      "id": 1,
      "topic": "Basics",
      "prompt": "dy/dx = 2y. General solution: y = Ce^(?x)",
      "answer": [
        "2",
        "2x"
      ],
  "day18": [
    {
      "id": 1,
      "topic": "Double",
      "prompt": "∫₀¹ ∫₀¹ 1 dxdy = ?",
      "answer": [
        "1"
      ],
  "day19": [
    {
      "id": 1,
      "topic": "Multiply",
      "prompt": "(2×3) × (3×4) matrix product has shape ___×___",
      "answer": "2x4,2×4",
      "display": "2×4"
    },
    {
      "id": 2,
      "topic": "Multiply",
      "prompt": "Is matrix multiplication commutative? (yes/no)",
      "answer": "no",
      "display": "No"
    },
    {
      "id": 3,
      "topic": "Systems",
      "prompt": "Ax = b has a unique solution when A is ___",
      "answer": "invertible,nonsingular",
      "display": "invertible"
    },
    {
      "id": 4,
      "topic": "Gauss",
      "prompt": "Gaussian elimination produces ___ triangular form",
      "answer": "upper",
      "display": "upper"
    },
    {
      "id": 5,
      "topic": "NumPy",
      "prompt": "np.linalg._____(A, b) solves Ax = b",
      "answer": "solve",
      "display": "solve"
    },
    {
      "id": 6,
      "topic": "Identity",
      "prompt": "AI = A. I is the ___ matrix",
      "answer": "identity",
      "display": "identity"
    },
    {
      "id": 7,
      "topic": "2×2 det",
      "prompt": "det([[2,3],[1,4]]) = ?",
      "answer": "5",
      "display": "5 (2×4 - 3×1)"
    },
    {
      "id": 8,
      "topic": "Invertibility",
      "prompt": "A is invertible iff det(A) ___ 0",
      "answer": "≠,!=,notequal",
      "display": "≠ (not equal to 0)"
    },
    {
      "id": 9,
      "topic": "Properties",
      "prompt": "det(AB) = det(A) × det(___)",
      "answer": "b",
      "display": "B"
    },
    {
      "id": 10,
      "topic": "Identity",
      "prompt": "det(I) = ?",
      "answer": "1",
      "display": "1"
    },
    {
      "id": 11,
      "topic": "Inverse",
      "prompt": "A⁻¹ × A = ?",
      "answer": "i,identity",
      "display": "I (identity)"
    },
    {
      "id": 12,
      "topic": "NumPy",
      "prompt": "np.linalg._____(A) computes determinant",
      "answer": "det",
      "display": "det"
    },
    {
      "id": 13,
      "topic": "Transpose",
      "prompt": "(AB)^T = B^T × ___",
      "answer": "a^t,at,a transpose",
      "display": "A^T"
    },
    {
      "id": 14,
      "topic": "Scalar",
      "prompt": "det(cA) for n×n matrix = c^___ × det(A)",
      "answer": "n",
      "display": "n (dimension)"
    },
    {
      "id": 15,
      "topic": "Properties",
      "prompt": "det(A^T) = det(___)",
      "answer": "a",
      "display": "A"
    },
    {
      "id": 16,
      "topic": "Geometric",
      "prompt": "|det(A)| represents the ___ of the parallelogram formed by columns",
      "answer": "area",
      "display": "Area"
    },
    {
      "id": 17,
      "topic": "Application",
      "prompt": "In 3D graphics, matrices are used for ___, rotation, and scaling",
      "answer": "translation,transform",
      "display": "Translation"
    },
    {
      "id": 18,
      "topic": "NumPy",
      "prompt": "np.linalg._____(A) computes the inverse",
      "answer": "inv",
      "display": "inv"
    },
    {
      "id": 19,
      "topic": "Singular",
      "prompt": "A matrix with det = 0 is called ___",
      "answer": "singular,noninvertible",
      "display": "Singular"
    },
    {
      "id": 20,
      "topic": "Inverse",
      "prompt": "det(A⁻¹) = 1 / det(___)",
      "answer": "a",
      "display": "A"
    }
  ],
  "day20": [
    { "id": 1, "topic": "Dimensions", "prompt": "Dimensions of a Matrix are given as ___ x ___.", "answer": ["rows columns", "rxc"], "display": "Rows x Columns" },
    { "id": 2, "topic": "Dimensions", "prompt": "A matrix with 3 rows and 2 columns is size ___.", "answer": ["3x2", "3 by 2"], "display": "3x2" },
    { "id": 3, "topic": "Elements", "prompt": "The element in the 2nd row, 1st column is denoted as A[_,_].", "answer": ["2,1", "2, 1"], "display": "2,1" },
    { "id": 4, "topic": "Identity", "prompt": "The Identity Matrix (I) has ___ on the data, 0 elsewhere.", "answer": ["1", "ones"], "display": "1s" },
    { "id": 5, "topic": "Identity", "prompt": "A * I = ___.", "answer": ["a"], "display": "A" },
    { "id": 6, "topic": "Diagonal", "prompt": "A diagonal matrix has zeros everywhere except the ___.", "answer": ["diagonal", "main diagonal"], "display": "Main Diagonal" },
    { "id": 7, "topic": "Transpose", "prompt": "The Transpose (A^T) swaps ___ and columns.", "answer": ["rows"], "display": "Rows" },
    { "id": 8, "topic": "Transpose", "prompt": "If A is 3x2, A^T is ___.", "answer": ["2x3", "2 by 3"], "display": "2x3" },
    { "id": 9, "topic": "Symmetric", "prompt": "A symmetric matrix equals its ___.", "answer": ["transpose"], "display": "Transpose" },
    { "id": 10, "topic": "Addition", "prompt": "Matrix addition is done element-___.", "answer": ["wise"], "display": "Element-wise" },
    { "id": 11, "topic": "Addition", "prompt": "You can only add matrices of the same ___.", "answer": ["size", "dimensions", "shape"], "display": "Size/Shape" },
    { "id": 12, "topic": "Multiplication", "prompt": "To multiply A (MxN) and B (NxP), the inner dimension ___ must match.", "answer": ["n"], "display": "N" },
    { "id": 13, "topic": "Multiplication", "prompt": "The result of (MxN) * (NxP) is size ___.", "answer": ["mxp", "m x p"], "display": "MxP" },
    { "id": 14, "topic": "Multiplication", "prompt": "Matrix multiplication is NOT ___ (Order matters!).", "answer": ["commutative"], "display": "Commutative" },
    { "id": 15, "topic": "Multiplication", "prompt": "Ideally, matrix multiplication represents ___ of functions.", "answer": ["composition"], "display": "Composition" },
    { "id": 16, "topic": "Operation", "prompt": "The 'Dot Product Rule' for mult: Row of A dot ___ of B.", "answer": ["column", "col"], "display": "Column" },
    { "id": 17, "topic": "Transformation", "prompt": "A 2x2 matrix can ___ 2D space (stretch/squish).", "answer": ["transform", "warp", "map"], "display": "Transform" },
    { "id": 18, "topic": "Transformation", "prompt": "The matrix [[2,0],[0,2]] scales everything by ___.", "answer": ["2", "two"], "display": "2" },
    { "id": 19, "topic": "Transformation", "prompt": "The matrix [[1,0],[0,-1]] reflects over the ___ axis.", "answer": ["x", "x-axis"], "display": "X-axis" },
    { "id": 20, "topic": "Homogeneous", "prompt": "To handle Translations (Movement) linearly, we use ___ Coordinates (4D for 3D).", "answer": ["homogeneous"], "display": "Homogeneous" },
    { "id": 21, "topic": "Graphics", "prompt": "The Model Matrix moves an object from Local space to ___ space.", "answer": ["world"], "display": "World" },
    { "id": 22, "topic": "Graphics", "prompt": "The View Matrix moves the World to the ___'s perspective.", "answer": ["camera", "eye"], "display": "Camera" },
    { "id": 23, "topic": "Graphics", "prompt": "The Projection Matrix turns 3D coordinates into ___ coordinates.", "answer": ["2d", "screen", "clip"], "display": "2D/Screen" },
    { "id": 24, "topic": "Pipeline", "prompt": "MVP Matrix stands for Model, View, ___.", "answer": ["projection"], "display": "Projection" },
    { "id": 25, "topic": "Complexity", "prompt": "Naive Matrix Multiplication of NxN matrices is O(N to the power of ___).", "answer": ["3", "three"], "display": "3" },
    { "id": 26, "topic": "Numpy", "prompt": "Numpy symbol for matrix multiplication is ___.", "answer": ["@", "matmul"], "display": "@" },
    { "id": 27, "topic": "Numpy", "prompt": "np.zeros((3,3)) creates a 3x3 matrix of ___.", "answer": ["zeros", "0"], "display": "Zeros" },
    { "id": 28, "topic": "Numpy", "prompt": "np.eye(3) creates a 3x3 ___ matrix.", "answer": ["identity"], "display": "Identity" },
    { "id": 29, "topic": "Numpy", "prompt": "Matrix shape is accessed via .___", "answer": ["shape"], "display": ".shape" },
    { "id": 30, "topic": "Sparse", "prompt": "A matrix with mostly zeros is called ___.", "answer": ["sparse"], "display": "Sparse" },
    { "id": 31, "topic": "Sparse", "prompt": "Sparse matrices save memory by only storing ___ values.", "answer": ["non-zero", "nonzero"], "display": "Non-zero" },
    { "id": 32, "topic": "Trace", "prompt": "The sum of diagonal elements is called the ___.", "answer": ["trace"], "display": "Trace" },
    { "id": 33, "topic": "Inverse", "prompt": "If A is invertible, A times A-inverse is ___.", "answer": ["i", "identity"], "display": "Identity" },
    { "id": 34, "topic": "Determinant", "prompt": "Transformation area scaling factor is given by the ___.", "answer": ["determinant"], "display": "Determinant" },
    { "id": 35, "topic": "Rotation", "prompt": "2D Rotation Matrix uses sin and ___.", "answer": ["cos", "cosine"], "display": "Cos" },
    { "id": 36, "topic": "Shear", "prompt": "A transformation that slants space is called a ___.", "answer": ["shear"], "display": "Shear" },
    { "id": 37, "topic": "Data", "prompt": "In ML, rows usually represent Samples, columns represent ___.", "answer": ["features"], "display": "Features" },
    { "id": 38, "topic": "NeuralNet", "prompt": "A Dense Layer in a Neural Net is basically a Matrix ___.", "answer": ["multiplication", "mul"], "display": "Multiplication" },
    { "id": 39, "topic": "GPU", "prompt": "GPUs are fast because they can do parallel ___ operations.", "answer": ["matrix", "vector"], "display": "Matrix" },
    { "id": 40, "topic": "Tensors", "prompt": "A 3D matrix (array of matrices) is often called a ___.", "answer": ["tensor"], "display": "Tensor" }
  ],
  "day21": [
    { "id": 1, "topic": "Determinant", "prompt": "The determinant measures how much a matrix scales ___.", "answer": ["area", "volume", "space"], "display": "Area/Volume" },
    { "id": 2, "topic": "Determinant", "prompt": "If det(A) = 2, the area of a unit square becomes ___.", "answer": ["2", "two"], "display": "2" },
    { "id": 3, "topic": "Determinant", "prompt": "If det(A) = 0, the matrix is ___ (non-invertible).", "answer": ["singular"], "display": "Singular" },
    { "id": 4, "topic": "Determinant", "prompt": "A negative determinant implies a change in ___ (like a mirror reflection).", "answer": ["orientation", "chirality"], "display": "Orientation" },
    { "id": 5, "topic": "Determinant", "prompt": "The determinant of the Identity matrix is ___.", "answer": ["1", "one"], "display": "1" },
    { "id": 6, "topic": "Determinant", "prompt": "det(A * B) = det(A) * det(___).", "answer": ["b"], "display": "B" },
    { "id": 7, "topic": "Determinant", "prompt": "det(Inverse of A) is 1 divided by ___.", "answer": ["det(a)", "determinant", "det a"], "display": "det(A)" },
    { "id": 8, "topic": "Singular", "prompt": "A singular matrix squishes space into a lower ___.", "answer": ["dimension"], "display": "Dimension" },
    { "id": 9, "topic": "Singular", "prompt": "If rows are linearly dependent, the determinant is ___.", "answer": ["0", "zero"], "display": "0" },
    { "id": 10, "topic": "Inverse", "prompt": "A * A_inv = ___.", "answer": ["i", "identity"], "display": "Identity" },
    { "id": 11, "topic": "Inverse", "prompt": "To invert a matrix, the determinant must be non-___.", "answer": ["zero", "0"], "display": "Zero" },
    { "id": 12, "topic": "Inverse", "prompt": "The inverse of a rotation is a rotation in the ___ direction.", "answer": ["opposite", "reverse"], "display": "Opposite" },
    { "id": 13, "topic": "Inverse", "prompt": "The inverse of scaling by 2 is scaling by ___.", "answer": ["0.5", "1/2", "half"], "display": "0.5" },
    { "id": 14, "topic": "Rank", "prompt": "Full rank means the determinant is NOT ___.", "answer": ["0", "zero"], "display": "0" },
    { "id": 15, "topic": "Rank", "prompt": "If a 3x3 matrix has rank 2, it squishes 3D space onto a ___.", "answer": ["plane", "2d"], "display": "Plane" },
    { "id": 16, "topic": "Computational", "prompt": "Formula used to solve systems using determinants is called ___ Rule.", "answer": ["cramer", "cramers"], "display": "Cramer's" },
    { "id": 17, "topic": "Computational", "prompt": "Cramer's Rule is computationally ___ for large matrices (O(N!)).", "answer": ["expensive", "slow", "bad"], "display": "Expensive" },
    { "id": 18, "topic": "Computational", "prompt": "Gaussian Elimination is ___ (faster/slower) than Cramer's Rule.", "answer": ["faster"], "display": "Faster" },
    { "id": 19, "topic": "2x2", "prompt": "det([[a,b],[c,d]]) = ad - ___.", "answer": ["bc"], "display": "bc" },
    { "id": 20, "topic": "Transpose", "prompt": "det(A_transpose) is equal to det(___).", "answer": ["a"], "display": "A" },
    { "id": 21, "topic": "Numpy", "prompt": "Function to compute determinant: np.linalg.___.", "answer": ["det"], "display": "det" },
    { "id": 22, "topic": "Numpy", "prompt": "Function to compute inverse: np.linalg.___.", "answer": ["inv"], "display": "inv" },
    { "id": 23, "topic": "Orthogonal", "prompt": "Determinant of an orthogonal matrix is always 1 or ___.", "answer": ["-1", "negative one"], "display": "-1" },
    { "id": 24, "topic": "Scaling", "prompt": "If you scale a 3x3 matrix by k, the determinant scales by k cubed (k^___).", "answer": ["3", "three"], "display": "3" },
    { "id": 25, "topic": "UpperTriangular", "prompt": "Det of a triangular matrix is the product of the ___ entries.", "answer": ["diagonal"], "display": "Diagonal" },
    { "id": 26, "topic": "Solution", "prompt": "Ax=b has a unique solution if det(A) is not ___.", "answer": ["0", "zero"], "display": "0" },
    { "id": 27, "topic": "Geometry", "prompt": "In 3D, determinant represents the volume of the ___ (skewed box).", "answer": ["parallelepiped"], "display": "Parallelepiped" },
    { "id": 28, "topic": "DataScience", "prompt": "A covariance matrix with near-zero determinant indicates ___ features.", "answer": ["redundant", "colinear", "correlated"], "display": "Redundant/Correlated" },
    { "id": 29, "topic": "Stability", "prompt": "A very small determinant might cause numerical ___ issues.", "answer": ["instability", "stability"], "display": "Instability" },
    { "id": 30, "topic": "InfoTheory", "prompt": "Invertible functions preserve ___.", "answer": ["information"], "display": "Information" },
    { "id": 31, "topic": "Cryptography", "prompt": "Encryption matrices must be ___ to allow decryption.", "answer": ["invertible"], "display": "Invertible" },
    { "id": 32, "topic": "Inverse", "prompt": "(AB)^(-1) = B^(-1) * ___.", "answer": ["a^(-1)", "inv(a)", "inverse a"], "display": "A^(-1)" },
    { "id": 33, "topic": "PseudoInverse", "prompt": "For non-square matrices, we use the ___ Inverse.", "answer": ["pseudo", "moore-penrose"], "display": "Pseudo" },
    { "id": 34, "topic": "Trace", "prompt": "Determinant is product of eigenvalues; Trace is ___ of eigenvalues.", "answer": ["sum"], "display": "Sum" },
    { "id": 35, "topic": "Eigenvalues", "prompt": "The Characteristic Equation is det(A - lambda*I) = ___.", "answer": ["0", "zero"], "display": "0" },
    { "id": 36, "topic": "Orientation", "prompt": "Reflection has determinant ___.", "answer": ["-1", "negative one"], "display": "-1" },
    { "id": 37, "topic": "Rotation", "prompt": "Pure Rotation has determinant ___.", "answer": ["1", "one"], "display": "1" },
    { "id": 38, "topic": "Shear", "prompt": "Shear transforms (slanting) preserve area, so det is ___.", "answer": ["1", "one"], "display": "1" },
    { "id": 39, "topic": "Complexity", "prompt": "Computing inverse is generally O(N^___).", "answer": ["3", "three"], "display": "3" },
    { "id": 40, "topic": "History", "prompt": "Determinants were invented ___ (before/after) matrices.", "answer": ["before"], "display": "Before" }
  ],
  "day22": [
    {
      "id": "d22_q1",
      "topic": "Gaussian Elimination",
      "text": "What is the primary goal of Gaussian Elimination?",
      "options": [
        "To transform a matrix into Row Echelon Form (REF)",
        "To find the determinant immediately",
        "To calculate the eigenvalues",
        "To invert the matrix"
      ],
  "day23": [
    { "id": 1, "topic": "Checkpoint", "prompt": "Matrix A represents linear map T. Columns are T applied to ___ vectors", "answer": ["basis", "standard basis"], "display": "basis" },
    { "id": 2, "topic": "Checkpoint", "prompt": "ker(A) = nullspace. im(A) = ___ space", "answer": ["column"], "display": "Column" },
    { "id": 3, "topic": "Checkpoint", "prompt": "rank(A) + nullity(A) = number of ___", "answer": ["columns"], "display": "Columns" },
    { "id": 4, "topic": "Checkpoint", "prompt": "Change of basis: [T]_B' = P⁻¹[T]_B___", "answer": ["p"], "display": "P" },
    { "id": 5, "topic": "Checkpoint", "prompt": "Diagonalizable iff n linearly independent ___", "answer": ["eigenvectors"], "display": "Eigenvectors" },
    { "id": 6, "topic": "Checkpoint", "prompt": "A² = A means A is ___ (projection-like)", "answer": ["idempotent"], "display": "Idempotent" },
    { "id": 7, "topic": "Checkpoint", "prompt": "Trace is sum of eigenvalues. T/F?", "answer": ["true", "t"], "display": "True" },
    { "id": 8, "topic": "Checkpoint", "prompt": "Determinant is product of eigenvalues. T/F?", "answer": ["true", "t"], "display": "True" },
    { "id": 9, "topic": "Checkpoint", "prompt": "Similar matrices (B = P⁻¹AP) have same ___", "answer": ["eigenvalues", "trace", "determinant"], "display": "eigenvalues" },
    { "id": 10, "topic": "Checkpoint", "prompt": "Orthogonal projection onto subspace U: P such that im(P) = ___ and ker(P) = U⊥", "answer": ["u"], "display": "U" },
    { "id": 11, "topic": "Checkpoint", "prompt": "QR: any matrix = orthogonal × upper ___", "answer": ["triangular"], "display": "Triangular" },
    { "id": 12, "topic": "Checkpoint", "prompt": "SVD works for ___ matrix (any shape)", "answer": ["any", "all", "every"], "display": "Any" },
    { "id": 13, "topic": "Checkpoint", "prompt": "Column rank = row rank. T/F?", "answer": ["true", "t"], "display": "True" },
    { "id": 14, "topic": "Checkpoint", "prompt": "Least squares minimizes sum of squared ___", "answer": ["residuals", "errors"], "display": "Residuals" },
    { "id": 15, "topic": "Checkpoint", "prompt": "Positive definite ⟺ all eigenvalues > ___", "answer": ["0", "zero"], "display": "0" },
    { "id": 16, "topic": "Checkpoint", "prompt": "Spectral theorem applies to ___ matrices", "answer": ["symmetric", "self-adjoint", "hermitian"], "display": "Symmetric/Hermitian" },
    { "id": 17, "topic": "Checkpoint", "prompt": "NumPy: eigenvalues via np.linalg.___", "answer": ["eig", "eigvals"], "display": "eig" },
    { "id": 18, "topic": "Checkpoint", "prompt": "NumPy: SVD via np.linalg.___", "answer": ["svd"], "display": "svd" },
    { "id": 19, "topic": "Checkpoint", "prompt": "Matrix exponential e^A is defined via ___ series", "answer": ["taylor", "power"], "display": "Taylor" },
    { "id": 20, "topic": "Checkpoint", "prompt": "If Av = λv, then e^A v = e^___ v", "answer": ["λ", "lambda"], "display": "e^λ" }
  ],
  "day24": [
    { "id": 1, "topic": "Logic", "prompt": "p ∧ q is true iff both p and ___ are true", "answer": ["q"], "display": "q" },
    { "id": 2, "topic": "Logic", "prompt": "p ∨ q is false iff both p and q are ___", "answer": ["false"], "display": "false" },
    { "id": 3, "topic": "Logic", "prompt": "¬(p ∧ q) = ¬p ___ ¬q (De Morgan)", "answer": ["∨", "or"], "display": "∨ (or)" },
    { "id": 4, "topic": "Logic", "prompt": "¬(p ∨ q) = ¬p ___ ¬q (De Morgan)", "answer": ["∧", "and"], "display": "∧ (and)" },
    { "id": 19, "topic": "Induction", "prompt": "If P(k) is true, then P(k+1) must be true. This is the ___ Step.", "answer": ["inductive", "inductive step"], "display": "Inductive Step" },
    { "id": 20, "topic": "Logic", "prompt": "P → Q is False only if P is True and Q is ___.", "answer": ["false"], "display": "False" },
    { "id": 21, "topic": "Contradiction", "prompt": "To prove √2 is irrational by contradiction, we first assume √2 is ___.", "answer": ["rational"], "display": "Rational" },
    { "id": 22, "topic": "Contrapositive", "prompt": "Contrapositive of 'If it rains, the ground is wet' is 'If the ground is ___, it did not rain.'", "answer": ["dry", "not wet"], "display": "Dry" },
    { "id": 23, "topic": "Induction", "prompt": "Induction with multiple base cases or relying on all previous values is $(\text{Weak/Strong})$ induction.", "answer": ["strong"], "display": "Strong" },
    { "id": 24, "topic": "Invariants", "prompt": "A loop invariant must hold $(\text{before/during/after})$ the loop execution.", "answer": ["all", "before, during, and after", "before, during and after"], "display": "All stages" },
    { "id": 25, "topic": "Logic", "prompt": "The logical operator ∧ represents ___.", "answer": ["and"], "display": "AND" },
    { "id": 26, "topic": "Logic", "prompt": "The logical operator ∨ represents ___.", "answer": ["or"], "display": "OR" },
    { "id": 27, "topic": "CS", "prompt": "A 'Guard Clause' like `if (!x) return;` is a code implementation of a ___.", "answer": ["contrapositive"], "display": "Contrapositive" },
    { "id": 28, "topic": "Complexity", "prompt": "The Halting Problem is proved to be undecidable using ___.", "answer": ["contradiction"], "display": "Contradiction" },
    { "id": 29, "topic": "Induction", "prompt": "Base Case for proving a property for all $n \geq 5$ would be $n=$ ___.", "answer": ["5"], "display": "5" },
    { "id": 30, "topic": "Logic", "prompt": "¬(P ∧ Q) is equivalent to (¬P ∨ ¬Q) by ___'s Law.", "answer": ["de morgan", "de morgan's", "demorgan"], "display": "De Morgan's" },
    { "id": 31, "topic": "Invariants", "prompt": "Binary Search range $[L, R]$ always contains the target. This is its $(\text{variable/invariant})$.", "answer": ["invariant"], "display": "Invariant" },
    { "id": 32, "topic": "Proof", "prompt": "Proving $x$ is even by showing $x = 2k$ is a ___ proof.", "answer": ["direct"], "display": "Direct" },
    { "id": 33, "topic": "Logic", "prompt": "A statement that is always true regardless of the variables' values is a ___.", "answer": ["tautology"], "display": "Tautology" },
    { "id": 34, "topic": "Recursion", "prompt": "A recursive call without a base case leads to a ___.", "answer": ["stack overflow", "infinite loop"], "display": "Stack Overflow" },
    { "id": 35, "topic": "CS", "prompt": "Formal verification of source code often uses ___ Logic.", "answer": ["hoare"], "display": "Hoare" },
    { "id": 7, "topic": "Logic", "prompt": "Contrapositive of p → q is ¬q → ___", "answer": ["¬p", "not p"], "display": "¬p" },
    { "id": 8, "topic": "Logic", "prompt": "p ↔ q means (p → q) ___ (q → p)", "answer": ["∧", "and"], "display": "∧" },
    { "id": 9, "topic": "Quantifiers", "prompt": "∀x P(x) means P(x) is true for ___ x", "answer": ["all", "every"], "display": "all" },
    { "id": 10, "topic": "Quantifiers", "prompt": "¬∀x P(x) = ∃x ___P(x)", "answer": ["¬", "not"], "display": "¬P(x)" },
    { "id": 11, "topic": "Quantifiers", "prompt": "¬∃x P(x) = ∀x ___P(x)", "answer": ["¬", "not"], "display": "¬P(x)" },
    { "id": 12, "topic": "Sets", "prompt": "A ∪ B contains elements in A ___ B (or both)", "answer": ["or"], "display": "or" },
    { "id": 13, "topic": "Sets", "prompt": "A ∩ B contains elements in ___ A and B", "answer": ["both"], "display": "both" },
    { "id": 14, "topic": "Sets", "prompt": "A \\ B (set difference) = A ∩ ___ᶜ", "answer": ["b"], "display": "Bᶜ" },
    { "id": 15, "topic": "Sets", "prompt": "Power set of S has ___ elements if |S| = n", "answer": ["2^n", "2ⁿ"], "display": "2ⁿ" },
    { "id": 16, "topic": "Sets", "prompt": "A ⊆ B means every element of A is in ___", "answer": ["b"], "display": "B" },
    { "id": 17, "topic": "Sets", "prompt": "|A × B| = |A| × |___|", "answer": ["b"], "display": "|B|" },
    { "id": 18, "topic": "Logic", "prompt": "A tautology is always ___, contradiction always false", "answer": ["true"], "display": "true" },
    { "id": 19, "topic": "Logic", "prompt": "Modus ponens: p, p→q, therefore ___", "answer": ["q"], "display": "q" },
    { "id": 20, "topic": "Logic", "prompt": "Modus tollens: ¬q, p→q, therefore ___", "answer": ["¬p", "not p"], "display": "¬p" }
  ],
  "day25": [
    { "id": 1, "topic": "Relation", "prompt": "R on A is reflexive if (a, ___) ∈ R for all a", "answer": ["a"], "display": "a" },
    { "id": 2, "topic": "Relation", "prompt": "R is symmetric if (a,b) ∈ R ⟹ (___, a) ∈ R", "answer": ["b"], "display": "b" },
    { "id": 3, "topic": "Relation", "prompt": "R is transitive if (a,b) ∈ R and (b,c) ∈ R ⟹ (a, ___) ∈ R", "answer": ["c"], "display": "c" },
    { "id": 4, "topic": "Equivalence", "prompt": "Equivalence relation requires reflexive, symmetric, and ___", "answer": ["transitive"], "display": "transitive" },
    { "id": 5, "topic": "Equivalence", "prompt": "Equivalence relation partitions set into equivalence ___", "answer": ["classes"], "display": "classes" },
    { "id": 6, "topic": "PartialOrder", "prompt": "Partial order is reflexive, antisymmetric, and ___", "answer": ["transitive"], "display": "transitive" },
    { "id": 7, "topic": "PartialOrder", "prompt": "a ≤ b and b ≤ a implies a = b. This is ___", "answer": ["antisymmetry", "antisymmetric"], "display": "antisymmetry" },
    { "id": 8, "topic": "TotalOrder", "prompt": "Total order: every pair is ___ (comparable)", "answer": ["comparable", "related"], "display": "comparable" },
    { "id": 9, "topic": "Hasse", "prompt": "Hasse diagram omits ___ (derivable) edges", "answer": ["transitive"], "display": "transitive" },
    { "id": 10, "topic": "Lattice", "prompt": "In a lattice, every pair has lub (join) and ___ (meet)", "answer": ["glb", "meet"], "display": "glb (meet)" },
    { "id": 11, "topic": "Function", "prompt": "f: A → B is injective (one-to-one) if f(a) = f(b) ⟹ a = ___", "answer": ["b"], "display": "b" },
    { "id": 12, "topic": "Function", "prompt": "f: A → B is surjective if range = ___", "answer": ["b"], "display": "B (codomain)" },
    { "id": 13, "topic": "Function", "prompt": "f is bijective if both injective and ___", "answer": ["surjective", "onto"], "display": "surjective" },
    { "id": 14, "topic": "Cardinality", "prompt": "|ℤ| = |ℕ|. These sets are ___ infinite", "answer": ["countably"], "display": "countably" },
    { "id": 15, "topic": "Cardinality", "prompt": "|ℝ| > |ℕ|. ℝ is ___ infinite", "answer": ["uncountably"], "display": "uncountably" },
    { "id": 16, "topic": "Equivalence", "prompt": "Integers mod n: a ≡ b (mod n) iff n | (a - ___)", "answer": ["b"], "display": "b" },
    { "id": 17, "topic": "Concept", "prompt": "Relations can be represented as directed ___", "answer": ["graphs", "graph"], "display": "graphs" },
    { "id": 18, "topic": "Concept", "prompt": "Closures: smallest relation containing R with property P is ___ closure", "answer": ["transitive", "reflexive", "symmetric"], "display": "[property] closure" },
    { "id": 19, "topic": "Function", "prompt": "Pigeonhole: n+1 pigeons in n holes ⟹ some hole has ≥ ___ pigeons", "answer": ["2"], "display": "2" },
    { "id": 20, "topic": "Concept", "prompt": "Empty relation is vacuously transitive. T/F?", "answer": ["true", "t"], "display": "True" }
  ],
  "day26": [
    { "id": 1, "topic": "Induction", "prompt": "Base case + inductive step proves ∀n ≥ ___ P(n)", "answer": ["0", "1", "k"], "display": "base value" },
    { "id": 2, "topic": "Induction", "prompt": "In induction, assume P(k) to prove P(k+___).", "answer": ["1"], "display": "1" },
    { "id": 3, "topic": "StrongInduction", "prompt": "Strong induction: assume P(1)...P(k) to prove P(k+___)", "answer": ["1"], "display": "1" },
    { "id": 4, "topic": "WellOrdering", "prompt": "Every non-empty set of positive integers has a ___ element", "answer": ["least", "minimum", "smallest"], "display": "least" },
    { "id": 5, "topic": "Pigeonhole", "prompt": "n items in k bins: some bin has ≥ ⌈n/___⌉ items", "answer": ["k"], "display": "k" },
    { "id": 6, "topic": "PIE", "prompt": "|A ∪ B| = |A| + |B| - |A ∩ ___", "answer": ["b"], "display": "|A ∩ B|" },
    { "id": 7, "topic": "PIE", "prompt": "Principle of Inclusion-___", "answer": ["exclusion"], "display": "Exclusion" },
    { "id": 8, "topic": "Counting", "prompt": "n! = n × (n-1) × ... × ___", "answer": ["1"], "display": "1" },
    { "id": 9, "topic": "Counting", "prompt": "Ordered arrangements of n items: ___", "answer": ["n!"], "display": "n!" },
    { "id": 10, "topic": "Counting", "prompt": "P(n,r) = n!/(n-___)!", "answer": ["r"], "display": "r" },
    { "id": 11, "topic": "Counting", "prompt": "C(n,r) = n! / (r! × (n-___)!)", "answer": ["r"], "display": "r" },
    { "id": 12, "topic": "Counting", "prompt": "C(n,r) = C(n, n-___)", "answer": ["r"], "display": "r (symmetry)" },
    { "id": 13, "topic": "Binomial", "prompt": "(x+y)ⁿ = Σ C(n,k) xᵏ y^(n-___)", "answer": ["k"], "display": "k" },
    { "id": 14, "topic": "Counting", "prompt": "Stars and bars: ways to put n identical items in k bins", "answer": ["c(n+k-1,k-1)", "c(n+k-1,n)"], "display": "C(n+k-1, k-1)" },
    { "id": 15, "topic": "Induction", "prompt": "To prove Σ i = n(n+1)/2 by induction, base case is n = ___", "answer": ["1", "0"], "display": "1 (or 0)" },
    { "id": 16, "topic": "Counting", "prompt": "Multiset coefficient: C(n+r-1, ___) for r items from n types with rep", "answer": ["r"], "display": "r" },
    { "id": 17, "topic": "PIE", "prompt": "Derangements: D(n) = n! × Σ (-1)^k / ___!", "answer": ["k"], "display": "k!" },
    { "id": 18, "topic": "Pigeonhole", "prompt": "5 points in unit square ⟹ some pair within distance ___/√2", "answer": ["1"], "display": "1/√2" },
    { "id": 19, "topic": "Induction", "prompt": "Structural induction is used for ___ structures (trees, etc.)", "answer": ["recursive", "inductive"], "display": "recursive" },
    { "id": 20, "topic": "Counting", "prompt": "0! = ___", "answer": ["1"], "display": "1" }
  ],
  "day27": [
    { "id": 1, "topic": "Binomial", "prompt": "C(5,2) = ?", "answer": ["10"], "display": "10" },
    { "id": 2, "topic": "Binomial", "prompt": "C(n,0) = ?", "answer": ["1"], "display": "1" },
    { "id": 3, "topic": "Binomial", "prompt": "C(n,n) = ?", "answer": ["1"], "display": "1" },
    { "id": 4, "topic": "Pascal", "prompt": "C(n,k) = C(n-1,k-1) + C(n-1,___)", "answer": ["k"], "display": "k (Pascal's)" },
    { "id": 5, "topic": "Binomial", "prompt": "Σ C(n,k) = ___", "answer": ["2^n", "2ⁿ"], "display": "2ⁿ" },
    { "id": 6, "topic": "Counting", "prompt": "4-letter passwords from 26 letters with repetition: ___", "answer": ["26^4"], "display": "26⁴" },
    { "id": 7, "topic": "Counting", "prompt": "Arrangements of MISSISSIPPI: 11!/(4!4!2!). Why divide?", "answer": ["repeated letters", "repetition"], "display": "repeated letters" },
    { "id": 8, "topic": "Counting", "prompt": "Distribute 5 identical balls into 3 distinct boxes: C(___,2)", "answer": ["7"], "display": "C(7,2) = 21" },
    { "id": 9, "topic": "Counting", "prompt": "Committee of 3 from 10: C(10,___)", "answer": ["3"], "display": "C(10,3) = 120" },
    { "id": 10, "topic": "Binomial", "prompt": "Coefficient of x³ in (1+x)¹⁰ is C(10,___)", "answer": ["3"], "display": "C(10,3)" },
    { "id": 11, "topic": "Counting", "prompt": "Lattice paths from (0,0) to (m,n): C(m+n, ___)", "answer": ["m", "n"], "display": "C(m+n, m)" },
    { "id": 12, "topic": "Catalan", "prompt": "Catalan numbers count balanced ___", "answer": ["parentheses", "trees", "paths"], "display": "parentheses/trees" },
    { "id": 13, "topic": "Catalan", "prompt": "Cₙ = C(2n,n) / (n+___)", "answer": ["1"], "display": "n+1" },
    { "id": 14, "topic": "Counting", "prompt": "ways to pick 3 from 5 AND 2 from 4: C(5,3) × C(4,___)", "answer": ["2"], "display": "C(4,2)" },
    { "id": 15, "topic": "Binomial", "prompt": "Vandermonde: C(m+n,r) = Σ C(m,k) × C(n, r-___)", "answer": ["k"], "display": "r-k" },
    { "id": 16, "topic": "Counting", "prompt": "Permutations with forbidden positions use ___-Exclusion", "answer": ["inclusion"], "display": "Inclusion" },
    { "id": 17, "topic": "Stirling", "prompt": "S(n,k) counts ways to partition n into k non-empty ___", "answer": ["subsets", "parts"], "display": "subsets" },
    { "id": 18, "topic": "Bell", "prompt": "Bell number Bₙ = Σ S(n,___)", "answer": ["k"], "display": "S(n,k)" },
    { "id": 19, "topic": "Counting", "prompt": "Double counting: count same thing two ___", "answer": ["ways"], "display": "ways" },
    { "id": 20, "topic": "Binomial", "prompt": "C(n,k) in Python: math.___", "answer": ["comb"], "display": "comb(n,k)" }
  ],
  "day28": [
    { "id": 1, "topic": "Fibonacci", "prompt": "F_n = F_{n-1} + ___.", "answer": "f_{n-2}", "altAnswers": ["f_n-2", "f(n-2)"] },
    { "id": 2, "topic": "Linear", "prompt": "To solve linear recurrences, we find roots of the ___ equation.", "answer": "characteristic" },
    { "id": 3, "topic": "Master", "prompt": "Master theorem applies to relations of the form T(n) = aT(n/b) + ___.", "answer": "f(n)", "altAnswers": ["f_n"] },
    { "id": 4, "topic": "Merge Sort", "prompt": "Merge sort recurrence is T(n) = 2T(n/2) + ___.", "answer": "n" },
    { "id": 5, "topic": "Complexity", "prompt": "Recursive Fibonacci is O(___).", "answer": "2^n" },
    { "id": 6, "topic": "Closed Form", "prompt": "A formula for a_n that does not use previous terms is called ___ form.", "answer": "closed" },
    { "id": 7, "topic": "Roots", "prompt": "Distinct roots r1, r2 -> a_n = c1*r1^n + c2*___.", "answer": "r2^n", "altAnswers": ["r2^n"] },
    { "id": 8, "topic": "Repeated Roots", "prompt": "Repeated root r -> a_n = c1*r^n + c2*___*r^n.", "answer": "n" },
    { "id": 9, "topic": "Master Case 1", "prompt": "If f(n) is polynomial small, T(n) = Theta(n^(log_b ___)).", "answer": "a" },
    { "id": 10, "topic": "Master Case 2", "prompt": "If f(n) matches n^(log_b a), multiply by ___.", "answer": "log n" },
    { "id": 11, "topic": "Master Case 3", "prompt": "If f(n) is polynomial larger, T(n) = Theta(___).", "answer": "f(n)" },
    { "id": 12, "topic": "Binary Search", "prompt": "Binary Search recurrence: T(n) = T(n/2) + ___.", "answer": "1" },
    { "id": 13, "topic": "Binary Search", "prompt": "Binary Search complexity: Theta(___).", "answer": "log n" },
    { "id": 14, "topic": "Strassen", "prompt": "Strassen's Matrix Mult recurrence: T(n) = ___T(n/2) + O(n^2).", "answer": "7" },
    { "id": 15, "topic": "Strassen", "prompt": "Strassen's complexity is approx n^___.", "answer": "2.81", "altAnswers": ["2.8"] },
    { "id": 16, "topic": "Karatsuba", "prompt": "Karatsuba Mult recurrence: T(n) = ___T(n/2) + O(n).", "answer": "3" },
    { "id": 17, "topic": "Tower of Hanoi", "prompt": "Hanoi recurrence: T(n) = 2T(n-1) + ___.", "answer": "1" },
    { "id": 18, "topic": "Tower of Hanoi", "prompt": "Hanoi complexity is O(___).", "answer": "2^n" },
    { "id": 19, "topic": "Catalan", "prompt": "Number of valid parenthesis expressions is given by ___ numbers.", "answer": "catalan" },
    { "id": 20, "topic": "Derangement", "prompt": "Permutations with no fixed points are called ___.", "answer": "derangements" },
    { "id": 21, "topic": "Recurrence", "prompt": "a_n = 2a_{n-1}, a_0=1 -> a_n = ___.", "answer": "2^n" },
    { "id": 22, "topic": "Recurrence", "prompt": "a_n = a_{n-1} + 2, a_0=0 -> a_n = ___.", "answer": "2n" },
    { "id": 23, "topic": "Def", "prompt": "A homogeneous recurrence has no extra ___ term f(n).", "answer": "constant", "altAnswers": ["f(n)", "non-homogeneous"] },
    { "id": 24, "topic": "Order", "prompt": "a_n = a_{n-1} + a_{n-3} is a recurrence of order ___.", "answer": "3" },
    { "id": 25, "topic": "Generating", "prompt": "Generating function for 1, 1, 1, ... is 1 / (1 - ___).", "answer": "x" }
  ],
  "day29": [
    { "id": 1, "topic": "Edges", "prompt": "A set of vertices V and edges E make a ___.", "answer": "graph" },
    { "id": 2, "topic": "Degree", "prompt": "Number of edges connected to a vertex is its ___.", "answer": "degree" },
    { "id": 3, "topic": "Handshake", "prompt": "Sum of degrees is ___ times the number of edges.", "answer": "2", "altAnswers": ["two"] },
    { "id": 4, "topic": "Complete", "prompt": "A graph where all nodes connect to all others is ___.", "answer": "complete" },
    { "id": 5, "topic": "Bipartite", "prompt": "Graph with 2 sets of nodes only connecting to each other is ___.", "answer": "bipartite" },
    { "id": 6, "topic": "Isomorphism", "prompt": "Isomorphism requires preserving ___.", "answer": "adjacency" },
    { "id": 7, "topic": "Digraph", "prompt": "In a directed graph, edges have ___.", "answer": "direction" },
    { "id": 8, "topic": "Loop", "prompt": "An edge from a vertex to itself is a ___.", "answer": "loop" },
    { "id": 9, "topic": "Walk", "prompt": "A sequence of edges allowing repitition is a ___.", "answer": "walk" },
    { "id": 10, "topic": "Path", "prompt": "A walk with no repeated vertices is a ___.", "answer": "path" },
    { "id": 11, "topic": "Cycle", "prompt": "A path that starts and ends at the same vertex is a ___.", "answer": "cycle" },
    { "id": 12, "topic": "Simple", "prompt": "A simple graph has no loops and no ___ edges.", "answer": "multiple", "altAnswers": ["parallel"] },
    { "id": 13, "topic": "Connected", "prompt": "A graph where a path exists between any two vertices is ___.", "answer": "connected" },
    { "id": 14, "topic": "Adjacency Matrix", "prompt": "Matrix A where A[i][j] = 1 if edge exists is ___ Matrix.", "answer": "adjacency" },
    { "id": 15, "topic": "Sparse", "prompt": "A graph with |E| much less than |V|^2 is ___.", "answer": "sparse" },
    { "id": 16, "topic": "Dense", "prompt": "A graph with |E| close to |V|^2 is ___.", "answer": "dense" },
    { "id": 17, "topic": "Subgraph", "prompt": "A graph formed by a subset of vertices and edges is a ___.", "answer": "subgraph" },
    { "id": 18, "topic": "Regular", "prompt": "If all vertices have degree k, the graph is k-___.", "answer": "regular" },
    { "id": 19, "topic": "Weighted", "prompt": "A graph where edges have a cost is ___.", "answer": "weighted" },
    { "id": 20, "topic": "Multigraph", "prompt": "A graph allowing multiple edges between same vertices is a ___.", "answer": "multigraph" },
    { "id": 21, "topic": "Wheel", "prompt": "A cycle graph plus a central hub connected to all is a ___ graph.", "answer": "wheel" },
    { "id": 22, "topic": "Star", "prompt": "One center node connected to k leaves is a ___ graph.", "answer": "star" },
    { "id": 23, "topic": "Complement", "prompt": "Graph with same V but edges present iff NOT in G is the ___.", "answer": "complement" },
    { "id": 24, "topic": "Self-Complementary", "prompt": "If G is isomorphic to its complement, it is ___.", "answer": "self-complementary" },
    { "id": 25, "topic": "Planar", "prompt": "K4 is planar? (Yes/No)", "answer": "yes" }
  ],
  "day30": [
    { "id": 1, "topic": "Cycle", "prompt": "A path starting and ending at the same vertex is a ___.", "answer": "cycle" },
    { "id": 2, "topic": "Tree", "prompt": "A tree with n vertices has ___ edges.", "answer": "n-1", "altAnswers": ["n - 1", "n 1"] },
    { "id": 3, "topic": "Euler", "prompt": "Euler path visits every ___ exactly once.", "answer": "edge" },
    { "id": 4, "topic": "Hamilton", "prompt": "Hamiltonian path visits every ___ exactly once.", "answer": "vertex", "altAnswers": ["node"] },
    { "id": 5, "topic": "Planar", "prompt": "Planar graphs can be drawn with no edge ___.", "answer": "crossings", "altAnswers": ["crossing"] },
    { "id": 6, "topic": "Formula", "prompt": "Euler's Formula: v - e + f = ___.", "answer": "2" },
    { "id": 7, "topic": "Color", "prompt": "Chromatic number of a triangle (K3) is ___.", "answer": "3" },
    { "id": 8, "topic": "Theorem", "prompt": "Every planar graph can be colored with ___ colors.", "answer": "4", "altAnswers": ["four"] },
    { "id": 9, "topic": "Root", "prompt": "Top node of a tree with no parent is the ___.", "answer": "root" },
    { "id": 10, "topic": "Leaf", "prompt": "A node with no children is a ___.", "answer": "leaf" },
    { "id": 11, "topic": "Depth", "prompt": "Length of path from root to node is its ___.", "answer": "depth" },
    { "id": 12, "topic": "Height", "prompt": "Length of longest path from node to leaf is its ___.", "answer": "height" },
    { "id": 13, "topic": "Binary", "prompt": "A tree where each node has at most 2 children is ___.", "answer": "binary" },
    { "id": 14, "topic": "Forest", "prompt": "A collection of disjoint trees is a ___.", "answer": "forest" },
    { "id": 15, "topic": "Spanning", "prompt": "A subgraph containing all vertices and is a tree is a ___ tree.", "answer": "spanning" },
    { "id": 16, "topic": "Kuratowski", "prompt": "Non-planar graphs contain K5 or K___ subdivision.", "answer": "3,3", "altAnswers": ["33"] },
    { "id": 17, "topic": "Internal", "prompt": "Node with at least one child is an ___ node.", "answer": "internal" },
    { "id": 18, "topic": "Ancestors", "prompt": "Nodes on path from root to x are x's ___.", "answer": "ancestors" },
    { "id": 19, "topic": "Descendants", "prompt": "Nodes in subtree rooted at x are x's ___.", "answer": "descendants" },
    { "id": 20, "topic": "Balanced", "prompt": "Tree where leaves are at similar depths is ___.", "answer": "balanced" },
    { "id": 21, "topic": "N-ary", "prompt": "Tree where nodes have at most N children is ___.", "answer": "n-ary" },
    { "id": 22, "topic": "Full", "prompt": "Binary tree where every node has 0 or 2 children is ___.", "answer": "full" },
    { "id": 23, "topic": "Isomorphic", "prompt": "Trees are isomorphic if their structure is ___.", "answer": "identical" },
    { "id": 24, "topic": "Edges", "prompt": "Adding 1 edge to a tree creates exactly one ___.", "answer": "cycle" },
    { "id": 25, "topic": "Vertices", "prompt": "Forest with k trees and n vertices has n - ___ edges.", "answer": "k" }
  ],
  "day31": [
    { "id": 1, "topic": "Divisibility", "prompt": "If a divides b, then b = a * ___.", "answer": "k", "altAnswers": ["integer", "c"] },
    { "id": 2, "topic": "Modulo", "prompt": "17 mod 5 = ___.", "answer": "2" },
    { "id": 3, "topic": "Modulo", "prompt": "If a and b have same remainder mod m, then a ___ b (mod m).", "answer": "equiv", "altAnswers": ["equivalent", "congruent"] },
    { "id": 4, "topic": "Prime", "prompt": "A prime number has exactly ___ factors.", "answer": "2" },
    { "id": 5, "topic": "Theorem", "prompt": "Fundamental Theorem of Arithmetic involves limits of ___ factorization.", "answer": "prime" },
    { "id": 6, "topic": "Algorithm", "prompt": "Division Algo: a = bq + ___.", "answer": "r", "altAnswers": ["remainder"] },
    { "id": 7, "topic": "GCD", "prompt": "Algorithm to find GCD efficiently is ___.", "answer": "euclidean" },
    { "id": 8, "topic": "Identity", "prompt": "ax + by = GCD(a,b) is ___ Identity.", "answer": "bezout", "altAnswers": ["bezout's"] },
    { "id": 9, "topic": "Inverse", "prompt": "Inverse of 'a' mod 'm' exists iff GCD(a, m) = ___.", "answer": "1" },
    { "id": 10, "topic": "RSA", "prompt": "In RSA, n is the product of two large ___.", "answer": "primes" },
    { "id": 11, "topic": "RSA", "prompt": "Public key is (e, n). Private key is (___, n).", "answer": "d" },
    { "id": 12, "topic": "Phi", "prompt": "Euler's totient function φ(p) for prime p is ___.", "answer": "p-1", "altAnswers": ["p - 1"] },
    { "id": 13, "topic": "LCM", "prompt": "LCM(a, b) * GCD(a, b) = |___|.", "answer": "ab", "altAnswers": ["a*b"] },
    { "id": 14, "topic": "Sieve", "prompt": "Algorithm to find all primes up to N: ___ of Eratosthenes.", "answer": "sieve" },
    { "id": 15, "topic": "Fermat", "prompt": "Fermat's Little Thm: a^(p-1) = ___ (mod p).", "answer": "1" },
    { "id": 16, "topic": "CRT", "prompt": "Chinese Remainder Theorem deals with systems of ___.", "answer": "congruences" },
    { "id": 17, "topic": "Coprime", "prompt": "Two numbers are coprime if their GCD is ___.", "answer": "1" },
    { "id": 18, "topic": "Linear", "prompt": "The equation ax = b (mod m) is a linear ___.", "answer": "congruence" },
    { "id": 19, "topic": "Diophantine", "prompt": "ax + by = c is a Linear ___ Equation.", "answer": "diophantine" },
    { "id": 20, "topic": "Wilson", "prompt": "Wilson's Theorem: (p-1)! = ___ (mod p).", "answer": "-1" },
    { "id": 21, "topic": "Composite", "prompt": "A number > 1 that is not prime is ___.", "answer": "composite" },
    { "id": 22, "topic": "Mersenne", "prompt": "Primes of the form 2^p - 1 are ___ primes.", "answer": "mersenne" },
    { "id": 23, "topic": "Twin", "prompt": "Pair of primes (p, p+2) are ___ primes.", "answer": "twin" },
    { "id": 24, "topic": "Discrete", "prompt": "Finding x in g^x = h (mod p) is ___ Logarithm.", "answer": "discrete" },
    { "id": 25, "topic": "Primitive", "prompt": "Root g such that powers generate all non-zero residues is ___ root.", "answer": "primitive" }
  ],
  "day32": [
    { "id": 1, "topic": "Arrays", "prompt": "Array access by index is O(___)", "answer": "1" },
    { "id": 2, "topic": "Arrays", "prompt": "Insert at front of dynamic array is O(___)", "answer": "n" },
    { "id": 3, "topic": "Stack", "prompt": "Stack follows ___ order (acronym)", "answer": "lifo", "altAnswers": ["last in first out"] },
    { "id": 4, "topic": "Queue", "prompt": "Queue follows ___ order (acronym)", "answer": "fifo", "altAnswers": ["first in first out"] },
    { "id": 5, "topic": "Hash", "prompt": "Hash table average lookup is O(___)", "answer": "1" },
    { "id": 6, "topic": "Hash", "prompt": "Hash table worst-case lookup is O(___)", "answer": "n" },
    { "id": 7, "topic": "Hash", "prompt": "Python dict is a ___ table", "answer": "hash" },
    { "id": 8, "topic": "Stack", "prompt": "Use stack for ___ function calls", "answer": "tracking", "altAnswers": ["managing", "handling"] },
    { "id": 9, "topic": "Queue", "prompt": "BFS uses a ___", "answer": "queue" },
    { "id": 10, "topic": "General", "prompt": "Set membership test is O(___) average", "answer": "1" },
    { "id": 11, "topic": "Singly", "prompt": "Access element by index is O(___)", "answer": "n" },
    { "id": 12, "topic": "Singly", "prompt": "Insert at head is O(___)", "answer": "1" },
    { "id": 13, "topic": "Doubly", "prompt": "Doubly linked has prev and ___ pointers", "answer": "next" },
    { "id": 14, "topic": "Operations", "prompt": "Delete with node reference in doubly is O(___)", "answer": "1" },
    { "id": 15, "topic": "Operations", "prompt": "Delete with node in singly is O(___)", "answer": "n" },
    { "id": 16, "topic": "Pattern", "prompt": "Fast/slow pointers can detect ___", "answer": "cycles", "altAnswers": ["cycle", "loop", "loops"] },
    { "id": 17, "topic": "Pattern", "prompt": "Fast pointer moves ___ steps per iteration", "answer": "2", "altAnswers": ["two"] },
    { "id": 18, "topic": "Pattern", "prompt": "___ head is a dummy node technique", "answer": "dummy", "altAnswers": ["sentinel"] },
    { "id": 19, "topic": "Space", "prompt": "Doubly linked uses more ___ than singly", "answer": "memory", "altAnswers": ["space"] },
    { "id": 20, "topic": "General", "prompt": "Last node points to ___", "answer": "null", "altAnswers": ["none", "nil"] },
    { "id": 21, "topic": "Resizing", "prompt": "Dynamic array resizing amortized cost is O(___)", "answer": "1" },
    { "id": 22, "topic": "Collision", "prompt": "Chaining uses ___ lists to handle collisions", "answer": "linked" },
    { "id": 23, "topic": "Collision", "prompt": "Open addressing uses ___ to find empty slot", "answer": "probing" },
    { "id": 24, "topic": "Load", "prompt": "Ratio of items to buckets is ___ factor", "answer": "load" },
    { "id": 25, "topic": "Buffer", "prompt": "Queue implemented with fixed array is ___ buffer", "answer": "circular" }
  ],
  "day33": [
    { "id": 1, "topic": "Basics", "prompt": "Tree with n nodes has ___-1 edges", "answer": "n" },
    { "id": 2, "topic": "BST", "prompt": "BST: left subtree values are ___ than parent", "answer": "less", "altAnswers": ["smaller", "lower"] },
    { "id": 3, "topic": "BST", "prompt": "Balanced BST search is O(log ___)", "answer": "n" },
    { "id": 4, "topic": "BST", "prompt": "Unbalanced BST degrades to O(___)", "answer": "n" },
    { "id": 5, "topic": "Heap", "prompt": "Min-heap root contains the ___", "answer": "minimum", "altAnswers": ["min", "smallest"] },
    { "id": 6, "topic": "Heap", "prompt": "Heap push is O(log ___)", "answer": "n" },
    { "id": 7, "topic": "Heap", "prompt": "Heap peek is O(___)", "answer": "1" },
    { "id": 8, "topic": "Trie", "prompt": "Trie is also called ___ tree", "answer": "prefix" },
    { "id": 9, "topic": "Trie", "prompt": "Trie search is O(___) where k = word length", "answer": "k" },
    { "id": 10, "topic": "Balance", "prompt": "AVL and Red-Black are ___-balancing trees", "answer": "self" },
    { "id": 11, "topic": "Basics", "prompt": "G = (V, ___)", "answer": "e", "altAnswers": ["edges"] },
    { "id": 12, "topic": "Space", "prompt": "Adjacency list space is O(V + ___)", "answer": "e", "altAnswers": ["edges"] },
    { "id": 13, "topic": "Space", "prompt": "Adjacency matrix space is O(V^___)", "answer": "2" },
    { "id": 14, "topic": "Operations", "prompt": "Check edge in matrix is O(___)", "answer": "1" },
    { "id": 15, "topic": "Operations", "prompt": "Get all neighbors in matrix is O(___)", "answer": "v", "altAnswers": ["n"] },
    { "id": 16, "topic": "Choice", "prompt": "Use adjacency list for ___ graphs", "answer": "sparse" },
    { "id": 17, "topic": "Choice", "prompt": "Use adjacency matrix for ___ graphs", "answer": "dense" },
    { "id": 18, "topic": "Types", "prompt": "DAG = Directed ___ Graph", "answer": "acyclic" },
    { "id": 19, "topic": "Traversal", "prompt": "Pre-order: Root, Left, ___", "answer": "right" },
    { "id": 20, "topic": "Traversal", "prompt": "In-order: Left, Root, ___", "answer": "right" },
    { "id": 21, "topic": "Traversal", "prompt": "Post-order: Left, Right, ___", "answer": "root" },
    { "id": 22, "topic": "Complete", "prompt": "Binary tree filled except possibly last level is ___", "answer": "complete" },
    { "id": 23, "topic": "Perfect", "prompt": "Binary tree with all leaves at same depth and all internal nodes degree 2 is ___", "answer": "perfect" },
    { "id": 24, "topic": "Heap", "prompt": "Binary Heap is usually implemented with an ___", "answer": "array" },
    { "id": 25, "topic": "Heap", "prompt": "Heap is implicitly a ___ binary tree", "answer": "complete" }
  ],
  "day34": [
    { "id": 1, "topic": "Sorting", "prompt": "Merge sort time complexity is O(n log ___)", "answer": "n" },
    { "id": 2, "topic": "Sorting", "prompt": "Quick sort worst case is O(n^___)", "answer": "2" },
    { "id": 3, "topic": "Sorting", "prompt": "___ sort is stable and O(n log n)", "answer": "merge" },
    { "id": 4, "topic": "Search", "prompt": "Binary search is O(log ___)", "answer": "n" },
    { "id": 5, "topic": "Search", "prompt": "Binary search requires ___ data", "answer": "sorted" },
    { "id": 6, "topic": "Greedy", "prompt": "Greedy makes ___ optimal choices", "answer": "locally", "altAnswers": ["local"] },
    { "id": 7, "topic": "Greedy", "prompt": "Dijkstra is a ___ algorithm", "answer": "greedy" },
    { "id": 8, "topic": "D&C", "prompt": "D&C = Divide and ___", "answer": "conquer" },
    { "id": 9, "topic": "Bounds", "prompt": "Comparison sort lower bound is Omega(n log ___)", "answer": "n" },
    { "id": 10, "topic": "D&C", "prompt": "Master ___ solves recurrences", "answer": "theorem" },
    { "id": 11, "topic": "Stable", "prompt": "Stable sort preserves order of ___ elements", "answer": "equal", "altAnswers": ["same", "duplicate"] },
    { "id": 12, "topic": "In-Place", "prompt": "In-place sort uses O(___) extra space", "answer": "1" },
    { "id": 13, "topic": "Selection", "prompt": "Selection sort is O(n^___)", "answer": "2" },
    { "id": 14, "topic": "Generic", "prompt": "Bubble sort is O(n^___)", "answer": "2" },
    { "id": 15, "topic": "Quick", "prompt": "Quick sort uses a ___ element to partition", "answer": "pivot" },
    { "id": 16, "topic": "Heap", "prompt": "Heapsort is O(n log n) and ___ space", "answer": "1" },
    { "id": 17, "topic": "Activity", "prompt": "Activity selection is a ___ problem", "answer": "greedy" },
    { "id": 18, "topic": "Huffman", "prompt": "Huffman coding builds a tree for ___ compression", "answer": "lossless", "altAnswers": ["data"] },
    { "id": 19, "topic": "Search", "prompt": "Ternary search cuts search space by ___ each step", "answer": "3", "altAnswers": ["three"] },
    { "id": 20, "topic": "Quick", "prompt": "Randomized Quick Sort expected time is O(___)", "answer": "n log n" },
    { "id": 21, "topic": "Partition", "prompt": "Lomuto partition scheme uses ___ pointers", "answer": "2" },
    { "id": 22, "topic": "Implementation", "prompt": "Binary search: mid = low + (high-low)/___", "answer": "2" },
    { "id": 23, "topic": "Greedy", "prompt": "Greedy works if problem has ___ substructure", "answer": "optimal" },
    { "id": 24, "topic": "Counting", "prompt": "Counting sort is linear time but requires ___ range", "answer": "small", "altAnswers": ["limited", "integer"] },
    { "id": 25, "topic": "Bucket", "prompt": "Bucket sort distributes elements into ___", "answer": "buckets" }
  ],
  "day35": [
    { "id": 1, "topic": "Core", "prompt": "DP needs optimal ___ and overlapping subproblems", "answer": "substructure" },
    { "id": 2, "topic": "Approaches", "prompt": "Recursive + cache = ___", "answer": "memoization" },
    { "id": 3, "topic": "Approaches", "prompt": "Iterative + table = ___", "answer": "tabulation" },
    { "id": 4, "topic": "Fib", "prompt": "fib(n) = fib(n-1) + fib(n-___)", "answer": "2" },
    { "id": 5, "topic": "Space", "prompt": "If only need dp[i-1], space reduces to O(___)", "answer": "1" },
    { "id": 6, "topic": "Problems", "prompt": "LCS = Longest Common ___", "answer": "subsequence" },
    { "id": 7, "topic": "Problems", "prompt": "LIS = Longest ___ Subsequence", "answer": "increasing" },
    { "id": 8, "topic": "Knapsack", "prompt": "0/1 Knapsack: take or ___", "answer": "skip", "altAnswers": ["leave", "don't take"] },
    { "id": 9, "topic": "Patterns", "prompt": "Grid DP uses dp[i][___]", "answer": "j" },
    { "id": 10, "topic": "Vs", "prompt": "DP explores ___ choices, greedy makes one", "answer": "all" },
    { "id": 11, "topic": "Rod Cutting", "prompt": "Rod cutting problem optimizes ___", "answer": "revenue", "altAnswers": ["profit", "value"] },
    { "id": 12, "topic": "Matrix Chain", "prompt": "Matrix Chain Mult optimizes number of scalar ___", "answer": "multiplications" },
    { "id": 13, "topic": "Edit Distance", "prompt": "Edit distance operations: insert, delete, ___", "answer": "replace", "altAnswers": ["substitute"] },
    { "id": 14, "topic": "Unbounded", "prompt": "Unbounded Knapsack allows ___ items", "answer": "duplicate", "altAnswers": ["infinite", "repeated"] },
    { "id": 15, "topic": "Complexity", "prompt": "DP time usually O(subproblems * cost per ___)", "answer": "subproblem" },
    { "id": 16, "topic": "Top-Down", "prompt": "Top-Down approach starts at ___ problem", "answer": "main", "altAnswers": ["large", "root"] },
    { "id": 17, "topic": "Bottom-Up", "prompt": "Bottom-Up approach starts at ___ cases", "answer": "base" },
    { "id": 18, "topic": "DAG", "prompt": "DP can be viewed as finding shortest path in a ___", "answer": "dag" },
    { "id": 19, "topic": "Space", "prompt": "Memoization uses ___ stack space", "answer": "recursion" },
    { "id": 20, "topic": "Subset Sum", "prompt": "Subset Sum problem checks if sum equals ___", "answer": "target", "altAnswers": ["k"] },
    { "id": 21, "topic": "Partition", "prompt": "Partition problem splits set into two equal ___ subsets", "answer": "sum" },
    { "id": 22, "topic": "Coin Change", "prompt": "Coin Change finds ___ number of coins", "answer": "minimum" },
    { "id": 23, "topic": "Palindromic", "prompt": "Longest Palindromic Subsequence checks match of first and ___ chars", "answer": "last" },
    { "id": 24, "topic": "State", "prompt": "DP state must qualify the ___ completely", "answer": "subproblem" },
    { "id": 25, "topic": "Optimization", "prompt": "Use modulo arithmetic if answer is too ___", "answer": "large", "altAnswers": ["big"] }
  ],
  "day36": [
    { "id": 1, "topic": "BFS", "prompt": "BFS uses a ___", "answer": "queue" },
    { "id": 2, "topic": "DFS", "prompt": "DFS uses a ___ or recursion", "answer": "stack" },
    { "id": 3, "topic": "Complexity", "prompt": "BFS/DFS time is O(V + ___)", "answer": "e", "altAnswers": ["edges"] },
    { "id": 4, "topic": "BFS", "prompt": "BFS finds ___ path in unweighted graphs", "answer": "shortest" },
    { "id": 5, "topic": "Dijkstra", "prompt": "Dijkstra fails with ___ weights", "answer": "negative" },
    { "id": 6, "topic": "Bellman", "prompt": "___-Ford handles negative weights", "answer": "bellman" },
    { "id": 7, "topic": "MST", "prompt": "MST = Minimum ___ Tree", "answer": "spanning" },
    { "id": 8, "topic": "MST", "prompt": "Kruskal uses ___-Find data structure", "answer": "union" },
    { "id": 9, "topic": "Floyd", "prompt": "Floyd-Warshall is O(V^___)", "answer": "3" },
    { "id": 10, "topic": "Greedy", "prompt": "Dijkstra, Prim, Kruskal are all ___ algorithms", "answer": "greedy" },
    { "id": 11, "topic": "Invariant", "prompt": "Loop ___ is a property true each iteration", "answer": "invariant" },
    { "id": 12, "topic": "Induction", "prompt": "Induction: base case + ___ step", "answer": "inductive" },
    { "id": 13, "topic": "Big-O", "prompt": "O(f) is an ___ bound", "answer": "upper" },
    { "id": 14, "topic": "Big-O", "prompt": "Ω(f) is a ___ bound", "answer": "lower" },
    { "id": 15, "topic": "Big-O", "prompt": "Θ(f) is a ___ bound", "answer": "tight" },
    { "id": 16, "topic": "Simplify", "prompt": "5n³ + 2n² + n = O(n^___)", "answer": "3" },
    { "id": 17, "topic": "Master", "prompt": "Master ___ solves T(n) = aT(n/b) + f(n)", "answer": "theorem" },
    { "id": 18, "topic": "Merge", "prompt": "Merge sort recurrence: T(n) = 2T(n/___) + n", "answer": "2" },
    { "id": 19, "topic": "Merge", "prompt": "Merge sort complexity is Θ(n log ___)", "answer": "n" },
    { "id": 20, "topic": "BinSearch", "prompt": "Binary search is Θ(log ___)", "answer": "n" },
    { "id": 21, "topic": "Topo Sort", "prompt": "Topological Sort requires a ___ graph", "answer": "dag", "altAnswers": ["directed acyclic"] },
    { "id": 22, "topic": "SCC", "prompt": "SCC = Strongly ___ Component", "answer": "connected" },
    { "id": 23, "topic": "Kosaraju", "prompt": "Kosaraju's algo uses ___ passes of DFS", "answer": "2", "altAnswers": ["two"] },
    { "id": 24, "topic": "Prim", "prompt": "Prim's algorithm grows a tree from a ___ vertex", "answer": "start", "altAnswers": ["source", "single"] },
    { "id": 25, "topic": "A*", "prompt": "A* search uses a ___ function h(n)", "answer": "heuristic" }
  ],
  "day37": [
    {
      "id": "d37_q1",
      "topic": "Sets",
      "text": "The set of all elements in either Set A or Set B is called the:",
      "options": ["Union", "Intersection", "Difference", "Complement"],
      "correct": 0,
      "explanation": "A U B includes all elements from both."
    },
    {
      "id": "d37_q2",
      "topic": "Sets",
      "text": "The number of elements in a set is its:",
      "options": ["Cardinality", "Magnitude", "Index", "Rank"],
      "correct": 0,
      "explanation": "Denoted as |S|."
    },
    {
      "id": "d37_q3",
      "topic": "Logic",
      "text": "A compound statement that is always True is a:",
      "options": ["Tautology", "Contradiction", "Predicate", "Premise"],
      "correct": 0,
      "explanation": "Regardless of the truth values of components."
    },
    {
      "id": "d37_q4",
      "topic": "Combinatorics",
      "text": "How many ways to arrange 4 distinct books on a shelf?",
      "options": ["24", "12", "16", "4"],
      "correct": 0,
      "explanation": "4! = 4 x 3 x 2 x 1 = 24."
    },
    {
      "id": "d37_q5",
      "topic": "Combinatorics",
      "text": "Choosing 2 toppings out of 5 for a pizza (order doesn't matter) is a:",
      "options": ["Combination", "Permutation", "Factorial", "Sum"],
      "correct": 0,
      "explanation": "Combination is for unordered selection."
    },
    {
      "id": "d37_q6",
      "topic": "Graphs",
      "text": "A graph with no cycles is a:",
      "options": ["Tree", "Clique", "Complete Graph", "Directed Graph"],
      "correct": 0,
      "explanation": "A forest is a set of trees."
    },
    {
      "id": "d37_q7",
      "topic": "Graphs",
      "text": "In a Tree with N nodes, the number of edges is always:",
      "options": ["N - 1", "N", "N + 1", "log N"],
      "correct": 0,
      "explanation": "Minimal connectivity."
    },
    {
      "id": "d37_q8",
      "topic": "Mod Arithmetic",
      "text": "The result of $25 \\pmod 7$ is:",
      "options": ["4", "3", "1", "0"],
      "correct": 0,
      "explanation": "25 = 3x7 + 4. Remainder is 4."
    },
    {
      "id": "d37_q9",
      "topic": "Primes",
      "text": "The only even prime number is:",
      "options": ["2", "4", "0", "None"],
      "correct": 0,
      "explanation": "Every other even number is divisible by 2."
    },
    {
      "id": "d37_q10",
      "topic": "RSA",
      "text": "RSA security is based on the difficulty of:",
      "options": ["Integer Factorization", "Addition", "Sorting", "Searching"],
      "correct": 0,
      "explanation": "Breaking N into p and q."
    },
    {
      "id": "d37_q11",
      "topic": "Boolean",
      "text": "NOT (P AND Q) is equivalent to (NOT P OR NOT Q). This is:",
      "options": ["De Morgan's Law", "Commutative Law", "Distributive Law", "Identity Law"],
      "correct": 0,
      "explanation": "Fundamental logic transformation."
    },
    {
      "id": "d37_q12",
      "topic": "FSM",
      "text": "An FSM with no memory except the current state is a:",
      "options": ["Finite Automaton", "Pushdown Automaton", "Turing Machine", "Neural Network"],
      "correct": 0,
      "explanation": "Deterministic Finite Automaton (DFA)."
    },
    {
      "id": "d37_q13",
      "topic": "Big O",
      "text": "Worst-case time complexity of DFS on a graph with V vertices and E edges:",
      "options": ["O(V + E)", "O(V*E)", "O(V^2)", "O(log V)"],
      "correct": 0,
      "explanation": "You visit every node and edge once."
    },
    {
      "id": "d37_q14",
      "topic": "Probability",
      "text": "Flipping two coins. Probability of getting two heads:",
      "options": ["1/4", "1/2", "3/4", "1/8"],
      "correct": 0,
      "explanation": "1/2 x 1/2 = 1/4."
    },
    {
      "id": "d37_q15",
      "topic": "Hashing",
      "text": "Modulo is used in Hash Tables to ensure the index is:",
      "options": ["Within the array bounds", "Prime", "Negative", "Odd"],
      "correct": 0,
      "explanation": "key % size maps to [0, size-1]."
    },
    {
      "id": "d37_q16",
      "topic": "Logic Gates",
      "text": "Which gate is True only if both inputs are True?",
      "options": ["AND", "OR", "XOR", "NAND"],
      "correct": 0,
      "explanation": "Conjunction."
    },
    {
      "id": "d37_q17",
      "topic": "Relations",
      "text": "A relation that is Reflexive, Symmetric, and Transitive is:",
      "options": ["Equivalence Relation", "Partial Order", "Function", "Bijection"],
      "correct": 0,
      "explanation": "Groups items into sets."
    },
    {
      "id": "d37_q18",
      "topic": "Induction",
      "text": "Mathematical Induction involves a Base Case and a:",
      "options": ["Inductive Step", "Logic Gate", "Modulo", "Random Variable"],
      "correct": 0,
      "explanation": "Proving P(k) implies P(k+1)."
    },
    {
      "id": "d37_q19",
      "topic": "Languages",
      "text": "A string like 'aabbaa' that reads the same forwards and backwards is a:",
      "options": ["Palindrome", "Anagram", "Isomorphism", "Homomorphism"],
      "correct": 0,
      "explanation": "Requires a stack for general recognition."
    },
    {
      "id": "d37_q20",
      "topic": "Binary",
      "text": "The decimal number 10 in binary is:",
      "options": ["1010", "1100", "1001", "1111"],
      "correct": 0,
      "explanation": "8 + 2."
    },
    {
      "id": "d37_q21",
      "topic": "Sets",
      "text": "The Power Set of {1, 2} is:",
      "options": ["{ {}, {1}, {2}, {1,2} }", "{ {1}, {2} }", "{1, 2}", "{2^1, 2^2}"],
      "correct": 0,
      "explanation": "All possible subsets."
    },
    {
      "id": "d37_q22",
      "topic": "Logic",
      "text": "P -> Q is False only when:",
      "options": ["P is True and Q is False", "P is False and Q is True", "Both are False", "Both are True"],
      "correct": 0,
      "explanation": "Implication truth table."
    },
    {
      "id": "d37_q23",
      "topic": "Graphs",
      "text": "A Graph where you can reach any node from any other node is:",
      "options": ["Connected", "Complete", "Dense", "Acyclic"],
      "correct": 0,
      "explanation": "Basic property for traversal."
    },
    {
      "id": "d37_q24",
      "topic": "Isomorphism",
      "text": "Two graphs that look different but have the same structure are:",
      "options": ["Isomorphic", "Identical", "Homologous", "Orthogonal"],
      "correct": 0,
      "explanation": "Mapping between vertex sets."
    },
    {
      "id": "d37_q25",
      "topic": "Counting",
      "text": "How many binary strings of length 8?",
      "options": ["256", "64", "512", "128"],
      "correct": 0,
      "explanation": "2^8 = 256."
    },
    {
      "id": "d37_q26",
      "topic": "Inclusion-Exclusion",
      "text": "|A U B| = |A| + |B| - ?:",
      "options": ["|A ∩ B|", "|A| * |B|", "0", "1"],
      "correct": 0,
      "explanation": "Avoid double counting the center."
    },
    {
      "id": "d37_q27",
      "topic": "Mod Inverse",
      "text": "In RSA, d is the modular multiplicative inverse of e mod:",
      "options": ["phi(n)", "n", "p", "q"],
      "correct": 0,
      "explanation": "Calculated using Extended Euclidean Algorithm."
    },
    {
      "id": "d37_q28",
      "topic": "Big O",
      "text": "Complexity of Binary Search:",
      "options": ["O(log N)", "O(N)", "O(1)", "O(N log N)"],
      "correct": 0,
      "explanation": "Divide and conquer."
    },
    {
      "id": "d37_q29",
      "topic": "Hashing",
      "text": "A perfect hash function has:",
      "options": ["Zero collisions", "Infinite buckets", "No speed", "Prime output"],
      "correct": 0,
      "explanation": "Maps every unique key to a unique bucket."
    },
    {
      "id": "d37_q30",
      "topic": "Logic",
      "text": "XOR is True if:",
      "options": ["Exactly one input is True", "Both inputs are True", "At least one is True", "Inputs are the same"],
      "correct": 0,
      "explanation": "Exclusive OR."
    },
    {
      "id": "d37_q31",
      "topic": "FSM",
      "text": "Which Automaton recognizes 'a^n b^n'?",
      "options": ["Pushdown Automaton (Stack)", "DFA", "NFA", "Mealy Machine"],
      "correct": 0,
      "explanation": "Requires memory to count 'a's to match 'b's."
    },
    {
      "id": "d37_q32",
      "topic": "Trees",
      "text": "In a Full Binary Tree, every node has:",
      "options": ["Either 0 or 2 children", "Exactly 2 children", "At least 1 child", "0 children"],
      "correct": 0,
      "explanation": "Strict structure definition."
    },
    {
      "id": "d37_q33",
      "topic": "Graphs",
      "text": "A path that visits every vertex exactly once is a:",
      "options": ["Hamiltonian Path", "Eulerian Path", "BFS Walk", "Shortest Path"],
      "correct": 0,
      "explanation": "Hard to find (NP-Complete)."
    },
    {
      "id": "d37_q34",
      "topic": "Graphs",
      "text": "A path that visits every edge exactly once is an:",
      "options": ["Eulerian Path", "Hamiltonian Path", "Loop", "Cycles"],
      "correct": 0,
      "explanation": "Easy to find (Check degrees)."
    },
    {
      "id": "d37_q35",
      "topic": "Combinatorics",
      "text": "Pigeonhole Principle: If 10 pigeons are in 9 holes, at least one hole has:",
      "options": ["2 or more pigeons", "0 pigeons", "1 pigeon", "9 pigeons"],
      "correct": 0,
      "explanation": "Guaranteed collision."
    },
    {
      "id": "d37_q36",
      "topic": "Probability",
      "text": "Sum of all probabilities in a sample space is:",
      "options": ["1", "0", "Infinity", "Depends on size"],
      "correct": 0,
      "explanation": "Law of total probability."
    },
    {
      "id": "d37_q37",
      "topic": "Relations",
      "text": "A function where every output is mapped to by exactly one input is:",
      "options": ["Bijective", "Surjective", "Injective", "Reflexive"],
      "correct": 0,
      "explanation": "One-to-one and onto."
    },
    {
      "id": "d37_q38",
      "topic": "Recursion",
      "text": "A recurrence relation like T(n) = T(n/2) + O(1) describes:",
      "options": ["Binary Search", "Merge Sort", "Linear Search", "Quick Sort"],
      "correct": 0,
      "explanation": "Master Theorem case."
    },
    {
      "id": "d37_q39",
      "topic": "Hexadecimal",
      "text": "Hex digit 'A' equals decimal:",
      "options": ["10", "11", "15", "9"],
      "correct": 0,
      "explanation": "Hex is Base 16."
    },
    {
      "id": "d37_q40",
      "topic": "SQL",
      "text": "Selecting distinct values from a column is analogous to:",
      "options": ["Converting a multi-set to a set", "Intersection", "Union", "Complement"],
      "correct": 0,
      "explanation": "Removing duplicates."
    },
    {
      "id": "d37_q41",
      "topic": "Dijkstra",
      "text": "Dijkstra's algorithm finds:",
      "options": ["Single-source shortest paths", "MST", "Cycles", "Connectivity"],
      "correct": 0,
      "explanation": "Greedy approach."
    },
    {
      "id": "d37_q42",
      "topic": "Kruskal",
      "text": "Kruskal's algorithm finds:",
      "options": ["Minimum Spanning Tree", "Shortest Path", "Max Flow", "Coloring"],
      "correct": 0,
      "explanation": "Edge-based greedy MST."
    },
    {
      "id": "d37_q43",
      "topic": "Graph Coloring",
      "text": "Minimum colors needed for any planar graph:",
      "options": ["4", "3", "5", "6"],
      "correct": 0,
      "explanation": "The Four Color Theorem."
    },
    {
      "id": "d37_q44",
      "topic": "Logic",
      "text": "Contrapositive of 'If P then Q' is:",
      "options": ["If not Q then not P", "If Q then P", "If not P then not Q", "P and not Q"],
      "correct": 0,
      "explanation": "Logically equivalent to the original."
    },
    {
      "id": "d37_q45",
      "topic": "GCD",
      "text": "GCD(12, 18) is:",
      "options": ["6", "3", "12", "2"],
      "correct": 0,
      "explanation": "Largest common factor."
    },
    {
      "id": "d37_q46",
      "topic": "Binary Tree",
      "text": "Max nodes at depth 'd' (root is d=0):",
      "options": ["2^d", "d^2", "2*d", "d"],
      "correct": 0,
      "explanation": "Expands by factor of 2 per level."
    },
    {
      "id": "d37_q47",
      "topic": "Sets",
      "text": "A set with no elements is the:",
      "options": ["Empty Set", "Null Pointer", "Zero Set", "Identity"],
      "correct": 0,
      "explanation": "Denoted by ∅."
    },
    {
      "id": "d37_q48",
      "topic": "Logic",
      "text": "The negation of 'For all x, P(x)' is:",
      "options": ["There exists x such that not P(x)", "For all x, not P(x)", "There exists x such that P(x)", "Not P(x)"],
      "correct": 0,
      "explanation": "Quantifier negation rule."
    },
    {
      "id": "d37_q49",
      "topic": "FSM",
      "text": "/[0-9]+/ matches:",
      "options": ["Wait, this is an infinite set of strings!", "Only one number", "Only digits 0-9", "No match"],
      "correct": 0,
      "explanation": "One or more digits."
    },
    {
      "id": "d37_q50",
      "topic": "Philosophy",
      "text": "Why study Discrete Math for CS?",
      "options": ["Computers are finite discrete systems", "It is fun", "To get a job", "No reason"],
      "correct": 0,
    }
  ],
  "day38": [
    { "id": 1, "topic": "Types", "prompt": "Las Vegas algorithms always return the ___ answer", "answer": "correct", "altAnswers": ["right"] },
    { "id": 2, "topic": "Types", "prompt": "Monte Carlo algorithms have a fixed running ___", "answer": "time" },
    { "id": 3, "topic": "Types", "prompt": "Las Vegas algorithms have a random running ___", "answer": "time" },
    { "id": 4, "topic": "Types", "prompt": "Monte Carlo algorithms might return an ___ answer", "answer": "incorrect", "altAnswers": ["wrong"] },
    { "id": 5, "topic": "Quicksort", "prompt": "Randomized Quicksort picks a random ___", "answer": "pivot" },
    { "id": 6, "topic": "Quicksort", "prompt": "Randomized Quicksort expected time is O(n log ___)", "answer": "n" },
    { "id": 7, "topic": "Quicksort", "prompt": "Worst case time for Randomized Quicksort is still O(n^___)", "answer": "2" },
    { "id": 8, "topic": "Min-Cut", "prompt": "Karger's algorithm finds the global ___ cut", "answer": "min", "altAnswers": ["minimum"] },
    { "id": 9, "topic": "Min-Cut", "prompt": "Karger's algorithm contracts random ___", "answer": "edges" },
    { "id": 10, "topic": "Primality", "prompt": "Miller-___ test checks for primality", "answer": "rabin" },
    { "id": 11, "topic": "Primality", "prompt": "Miller-Rabin is a ___ Carlo algorithm", "answer": "monte" },
    { "id": 12, "topic": "Hashing", "prompt": "___ Hashing chooses a hash function from a family", "answer": "universal" },
    { "id": 13, "topic": "Complexity", "prompt": "RP class allows one-sided error (false ___)", "answer": "positives", "altAnswers": ["positive"] },
    { "id": 14, "topic": "Complexity", "prompt": "ZPP class is zero ___ probability", "answer": "error" },
    { "id": 15, "topic": "Complexity", "prompt": "BPP allows error on ___ sides", "answer": "both" },
    { "id": 16, "topic": "Indicator", "prompt": "Indicator variable I_A is 1 if A occurs, ___ otherwise", "answer": "0" },
    { "id": 17, "topic": "Expectation", "prompt": "Linearity of Expectation: E[X+Y] = E[X] + E[___]", "answer": "y" },
    { "id": 18, "topic": "P vs NP", "prompt": "P is solvable in ___ time", "answer": "polynomial" },
    { "id": 19, "topic": "P vs NP", "prompt": "NP is ___ in polynomial time", "answer": "verifiable" },
    { "id": 20, "topic": "Reduction", "prompt": "If A ≤ p B, then A reduces to ___", "answer": "b" },
    { "id": 21, "topic": "NPC", "prompt": "NP-Complete problems are the ___ problems in NP", "answer": "hardest" },
    { "id": 22, "topic": "NPC", "prompt": "SAT was the ___ NP-Complete problem proved", "answer": "first" },
    { "id": 23, "topic": "Approximation", "prompt": "Max-Cut has a randomized approximation ratio of ___", "answer": "0.5", "altAnswers": ["1/2"] },
    { "id": 24, "topic": "Amplification", "prompt": "Running a Monte Carlo algo k times reduces error to epsilon^___", "answer": "k" },
    { "id": 25, "topic": "Structures", "prompt": "Skip Lists use ___ to create express lanes", "answer": "randomness", "altAnswers": ["coins", "random"] }
  ],
  "day39": [
    { "id": 1, "topic": "Sample Space", "prompt": "The set of all possible outcomes is the ___ Space", "answer": "sample" },
    { "id": 2, "topic": "Events", "prompt": "An event is a ___ of the sample space", "answer": "subset" },
    { "id": 3, "topic": "Probability", "prompt": "P(Ω) must equal ___", "answer": "1" },
    { "id": 4, "topic": "Complement", "prompt": "P(not A) = 1 - P(___)", "answer": "a" },
    { "id": 5, "topic": "Union", "prompt": "P(A ∪ B) = P(A) + P(B) - P(___)", "answer": "a ∩ b", "altAnswers": ["intersection", "a and b"] },
    { "id": 6, "topic": "Disjoint", "prompt": "If A, B disjoint, P(A ∩ B) = ___", "answer": "0" },
    { "id": 7, "topic": "Conditional", "prompt": "P(A|B) = P(A ∩ B) / P(___)", "answer": "b" },
    { "id": 8, "topic": "Product Rule", "prompt": "P(A ∩ B) = P(A|B) * P(___)", "answer": "b" },
    { "id": 9, "topic": "Independence", "prompt": "If indep, P(A|B) = P(___)", "answer": "a" },
    { "id": 10, "topic": "Independence", "prompt": "If indep, P(A ∩ B) = P(A) * P(___)", "answer": "b" },
    { "id": 11, "topic": "Bayes", "prompt": "P(A|B) = P(B|A)P(A) / P(___)", "answer": "b" },
    { "id": 12, "topic": "Bayes", "prompt": "P(A) is called the ___ probability", "answer": "prior" },
    { "id": 13, "topic": "Bayes", "prompt": "P(A|B) is called the ___ probability", "answer": "posterior" },
    { "id": 14, "topic": "Bayes", "prompt": "P(B|A) is called the ___", "answer": "likelihood" },
    { "id": 15, "topic": "Total Prob", "prompt": "Law of ___ Probability sums over partitions", "answer": "total" },
    { "id": 16, "topic": "Confusion", "prompt": "Sensitivity = True ___ Rate", "answer": "positive" },
    { "id": 17, "topic": "Confusion", "prompt": "Specificity = True ___ Rate", "answer": "negative" },
    { "id": 18, "topic": "Mutual", "prompt": "Disjoint sets are ___ exclusive", "answer": "mutually" },
    { "id": 19, "topic": "Permutations", "prompt": "Order matters in ___", "answer": "permutations" },
    { "id": 20, "topic": "Combinations", "prompt": "Order does not matter in ___", "answer": "combinations" },
    { "id": 21, "topic": "Combinatorics", "prompt": "nCk is also called the ___ coefficient", "answer": "binomial" },
    { "id": 22, "topic": "Monty Hall", "prompt": "In Monty Hall, you should always ___", "answer": "switch" },
    { "id": 23, "topic": "Paradox", "prompt": "Simpson's Paradox: trend reverses when groups are ___", "answer": "combined", "altAnswers": ["aggregated"] },
    { "id": 24, "topic": "Gambler", "prompt": "Gambler's Fallacy: past imposes no ___ on future (for indep)", "answer": "constraint", "altAnswers": ["effect", "influence"] },
    { "id": 25, "topic": "Chain Rule", "prompt": "P(A,B,C) = P(A)P(B|A)P(C|___)", "answer": "a,b", "altAnswers": ["a and b", "ab"] }
  ],
  "day40": [
    { "id": 1, "topic": "Definition", "prompt": "A Random Variable usually maps outcomes to ___ numbers", "answer": "real" },
    { "id": 2, "topic": "Discrete", "prompt": "Discrete RVs have a ___ (Probability Mass Function)", "answer": "pmf" },
    { "id": 3, "topic": "Continuous", "prompt": "Continuous RVs have a ___ (Probability Density Function)", "answer": "pdf" },
    { "id": 4, "topic": "CDF", "prompt": "CDF F(x) = P(X ___ x)", "answer": "<=", "altAnswers": ["≤", "less than or equal"] },
    { "id": 5, "topic": "CDF", "prompt": "For continuous X, P(X=c) is ___", "answer": "0" },
    { "id": 6, "topic": "Expectation", "prompt": "E[X] is the center of ___", "answer": "mass", "altAnswers": ["gravity"] },
    { "id": 7, "topic": "Linearity", "prompt": "E[aX + b] = aE[X] + ___", "answer": "b" },
    { "id": 8, "topic": "Variance", "prompt": "Var(X) = E[(X - μ)^___]", "answer": "2" },
    { "id": 9, "topic": "Variance", "prompt": "Standard Deviation is the ___ root of Variance", "answer": "square" },
    { "id": 10, "topic": "Variance", "prompt": "Var(cX) = c^___ Var(X)", "answer": "2" },
    { "id": 11, "topic": "Formula", "prompt": "Var(X) = E[X²] - (___)²", "answer": "e[x]", "altAnswers": ["mean", "mu"] },
    { "id": 12, "topic": "Bernoulli", "prompt": "Bernoulli(p) mean is ___", "answer": "p" },
    { "id": 13, "topic": "Indicator", "prompt": "E[Indicator] = P(___ happens)", "answer": "event" },
    { "id": 14, "topic": "Uniform", "prompt": "Discrete Uniform(1..n) mean is (n+___)/2", "answer": "1" },
    { "id": 15, "topic": "MGF", "prompt": "MGF M(t) = E[e^___]", "answer": "tx" },
    { "id": 16, "topic": "MGF", "prompt": "M'(0) gives the ___ moment (mean)", "answer": "first" },
    { "id": 17, "topic": "Skewness", "prompt": "3rd moment measures ___ (asymmetry)", "answer": "skewness" },
    { "id": 18, "topic": "Kurtosis", "prompt": "4th moment measures ___ (tailedness)", "answer": "kurtosis" },
    { "id": 19, "topic": "St. Petersburg", "prompt": "St. Petersburg paradox has ___ expected value", "answer": "infinite" },
    { "id": 20, "topic": "Independence", "prompt": "If X, Y indep, E[XY] = E[X]___", "answer": "e[y]", "altAnswers": ["* E[Y]"] },
    { "id": 21, "topic": "Variance", "prompt": "If X, Y indep, Var(X+Y) = Var(X) + ___", "answer": "var(y)" },
    { "id": 22, "topic": "Transformation", "prompt": "If Y = X + c, Var(Y) = ___", "answer": "var(x)" },
    { "id": 23, "topic": "Jensen", "prompt": "For convex f, E[f(X)] ___ f(E[X])", "answer": ">=", "altAnswers": ["ge", "≥", "greater than or equal"] },
    { "id": 24, "topic": "Entropy", "prompt": "Entropy H(X) measures ___", "answer": "uncertainty", "altAnswers": ["information", "randomness"] },
    { "id": 25, "topic": "Simulation", "prompt": "Monte Carlo estimates Expected Value using the sample ___", "answer": "mean", "altAnswers": ["average"] }
  ],
  "day41": [
    { "id": 1, "topic": "Binomial", "prompt": "Mean of Binomial(n,p) is ___", "answer": "np" },
    { "id": 2, "topic": "Binomial", "prompt": "Variance of Binomial(n,p) is np(1-___)", "answer": "p" },
    { "id": 3, "topic": "Poisson", "prompt": "For Poisson(λ), mean equals ___", "answer": "variance", "altAnswers": ["lambda", "var"] },
    { "id": 4, "topic": "Poisson", "prompt": "Poisson models ___ events", "answer": "rare" },
    { "id": 5, "topic": "Geometric", "prompt": "Geometric distribution models trials until first ___", "answer": "success" },
    { "id": 6, "topic": "Geometric", "prompt": "Geometric distribution is ___ (has no memory)", "answer": "memoryless" },
    { "id": 7, "topic": "Normal", "prompt": "Standard Normal has mean 0 and variance ___", "answer": "1" },
    { "id": 8, "topic": "Normal", "prompt": "Approx 68% of Normal is within ___ sigma", "answer": "1" },
    { "id": 9, "topic": "Normal", "prompt": "Approx 95% of Normal is within ___ sigma", "answer": "2", "altAnswers": ["1.96"] },
    { "id": 10, "topic": "Uniform", "prompt": "PDF of Uniform(a,b) is 1/(___)", "answer": "b-a" },
    { "id": 11, "topic": "Exponential", "prompt": "Exponential PDF is λe^(-___)", "answer": "λx", "altAnswers": ["lambda x", "lambdax", "lx"] },
    { "id": 12, "topic": "Exponential", "prompt": "Exponential mean is 1/___", "answer": "λ", "altAnswers": ["lambda"] },
    { "id": 13, "topic": "Exponential", "prompt": "Exponential is the continuous analog of ___", "answer": "geometric" },
    { "id": 14, "topic": "Beta", "prompt": "Beta distribution is defined on interval [___, 1]", "answer": "0" },
    { "id": 15, "topic": "Gamma", "prompt": "Gamma(n, λ) is sum of n ___ variables", "answer": "exponential" },
    { "id": 16, "topic": "CLT", "prompt": "CLT says sum of I.I.D. vars converges to ___", "answer": "normal", "altAnswers": ["gaussian"] },
    { "id": 17, "topic": "Hypergeometric", "prompt": "Hypergeometric is sampling ___ replacement", "answer": "without" },
    { "id": 18, "topic": "Bernoulli", "prompt": "Bernoulli is Binomial with n=___", "answer": "1" },
    { "id": 19, "topic": "Negative Binomial", "prompt": "NegBin models trials until ___ successes", "answer": "r", "altAnswers": ["k"] },
    { "id": 20, "topic": "Normal", "prompt": "Z-score = (X - μ) / ___", "answer": "σ", "altAnswers": ["sigma", "std dev"] },
    { "id": 21, "topic": "Poisson", "prompt": "Poisson is limit of Binomial as n -> ___", "answer": "infinity" },
    { "id": 22, "topic": "Uniform", "prompt": "Uniform variance is (b-a)² / ___", "answer": "12" },
    { "id": 23, "topic": "Beta", "prompt": "Beta is conjugate prior for ___", "answer": "binomial", "altAnswers": ["bernoulli"] },
    { "id": 24, "topic": "Chi-Squared", "prompt": "Sum of squared standard normals is ___ distribution", "answer": "chi-squared", "altAnswers": ["chi squared", "chi^2"] },
    { "id": 25, "topic": "Student-t", "prompt": "t-distribution has heavier ___ than Normal", "answer": "tails" }
  ],
  "day42": [
    { "id": 1, "topic": "Joint", "prompt": "Sum of joint PMF over all x,y must be ___", "answer": "1" },
    { "id": 2, "topic": "Marginal", "prompt": "To get marginal f(x), ___ out y from joint", "answer": "integrate", "altAnswers": ["sum"] },
    { "id": 3, "topic": "Independence", "prompt": "If indep, P(X,Y) = P(X) * P(___)", "answer": "y" },
    { "id": 4, "topic": "Covariance", "prompt": "Cov(X,Y) = E[XY] - E[X]E[___]", "answer": "y" },
    { "id": 5, "topic": "Covariance", "prompt": "If X, Y independent, Cov(X,Y) is ___", "answer": "0" },
    { "id": 6, "topic": "Correlation", "prompt": "Correlation is Cov scaled by product of ___", "answer": "sigmas", "altAnswers": ["std devs", "standard deviations"] },
    { "id": 7, "topic": "Uncorrelated", "prompt": "Zero correlation does NOT imply ___", "answer": "independence" },
    { "id": 8, "topic": "Variance", "prompt": "Var(X+Y) = Var(X) + Var(Y) + 2___(X,Y)", "answer": "cov", "altAnswers": ["covariance"] },
    { "id": 9, "topic": "Markov", "prompt": "Markov's inequality: P(X >= a) <= E[X]/___", "answer": "a" },
    { "id": 10, "topic": "Markov", "prompt": "Markov requires X to be non-___", "answer": "negative" },
    { "id": 11, "topic": "Chebyshev", "prompt": "Chebyshev: probability of k sigmas away is <= 1/___", "answer": "k^2", "altAnswers": ["k squared"] },
    { "id": 12, "topic": "Chernoff", "prompt": "Chernoff bounds give ___ decay of probability", "answer": "exponential" },
    { "id": 13, "topic": "Chernoff", "prompt": "Chernoff requires variables to be ___", "answer": "independent" },
    { "id": 14, "topic": "Hoeffding", "prompt": "Hoeffding is a form of ___ bound", "answer": "chernoff", "altAnswers": ["concentration"] },
    { "id": 15, "topic": "Multinomial", "prompt": "Multinomial generalizes Binomial to >___ outcomes", "answer": "2", "altAnswers": ["two"] },
    { "id": 16, "topic": "Correlation", "prompt": "Correlation is always between -1 and ___", "answer": "1" },
    { "id": 17, "topic": "Linear", "prompt": "Correlation measures ___ relationship", "answer": "linear" },
    { "id": 18, "topic": "Conditional", "prompt": "f(y|x) = f(x,y) / f(___)", "answer": "x" },
    { "id": 19, "topic": "Expectation", "prompt": "E[X] = E[E[X|Y]] is Law of Iterated ___", "answer": "expectations" },
    { "id": 20, "topic": "Vector", "prompt": "Covariance Matrix has ___ on diagonal", "answer": "variances" },
    { "id": 21, "topic": "Union Bound", "prompt": "P(A U B) <= P(A) + P(___)", "answer": "b" },
    { "id": 22, "topic": "Weak Law", "prompt": "Weak Law of Large Numbers: sample mean converges in ___", "answer": "probability" },
    { "id": 23, "topic": "Strong Law", "prompt": "Strong Law: sample mean converges almost ___", "answer": "surely" },
    { "id": 24, "topic": "Bound", "prompt": "Tail bounds quantify how likely X is far from ___", "answer": "mean", "altAnswers": ["expected value"] },
    { "id": 25, "topic": "Review", "prompt": "Does Cov=0 imply independence for Gaussian? (yes/no)", "answer": "yes" }
  ],
  "day43": [
    { "id": 1, "topic": "Estimator", "prompt": "An estimator is ___ if E[theta_hat] = theta", "answer": "unbiased" },
    { "id": 2, "topic": "Consistency", "prompt": "Estimator is consistent if it converges as n -> ___", "answer": "infinity" },
    { "id": 3, "topic": "MLE", "prompt": "MLE maximizes the ___ function", "answer": "likelihood" },
    { "id": 4, "topic": "MLE", "prompt": "Log-likelihood is used to turn products into ___", "answer": "sums" },
    { "id": 5, "topic": "MAP", "prompt": "MAP maximizes Isosterior = Likelihood * ___", "answer": "prior" },
    { "id": 6, "topic": "MSE", "prompt": "MSE = Bias^2 + ___", "answer": "variance" },
    { "id": 7, "topic": "Bias-Var", "prompt": "High bias means ___fitting", "answer": "under" },
    { "id": 8, "topic": "Bias-Var", "prompt": "High variance means ___fitting", "answer": "over" },
    { "id": 9, "topic": "Bernoulli", "prompt": "MLE for Bernoulli p is sample ___", "answer": "mean", "altAnswers": ["proportion", "average"] },
    { "id": 10, "topic": "Confidence", "prompt": "95% CI means interval covers param in 95% of ___", "answer": "experiments", "altAnswers": ["samples", "trials"] },
    { "id": 11, "topic": "Hypothesis", "prompt": "Null hypothesis usually assumes ___ effect", "answer": "no" },
    { "id": 12, "topic": "p-value", "prompt": "Reject H0 if p-value is ___ than alpha", "answer": "less", "altAnswers": ["lower", "<"] },
    { "id": 13, "topic": "Regression", "prompt": "Simple Linear Regression: y = β0 + β1x + ___", "answer": "epsilon", "altAnswers": ["error", "noise"] },
    { "id": 14, "topic": "Least Squares", "prompt": "Least Squares minimizes sum of squared ___", "answer": "residuals", "altAnswers": ["errors"] },
    { "id": 15, "topic": "Residual", "prompt": "Residual = Observed y - ___ y", "answer": "predicted", "altAnswers": ["fitted"] },
    { "id": 16, "topic": "R-Squared", "prompt": "R^2 = 1 means ___ fit", "answer": "perfect" },
    { "id": 17, "topic": "R-Squared", "prompt": "R^2 is proportion of ___ explained", "answer": "variance" },
    { "id": 18, "topic": "Multiple", "prompt": "In multiple regression X is a ___ matrix", "answer": "design" },
    { "id": 19, "topic": "Solution", "prompt": "Normal Signal: beta = (X^T X)^-1 X^T ___", "answer": "y" },
    { "id": 20, "topic": "P-Hacking", "prompt": "Testing many hypotheses to find significant one is p-___", "answer": "hacking" },
    { "id": 21, "topic": "Regularization", "prompt": "Lasso adds L___ penalty", "answer": "1" },
    { "id": 22, "topic": "Regularization", "prompt": "Ridge adds L___ penalty", "answer": "2" },
    { "id": 23, "topic": "Simpson", "prompt": "Simpson's paradox involves a lurking ___", "answer": "variable", "altAnswers": ["confounder"] },
    { "id": 24, "topic": "Type I", "prompt": "Type I error is False ___", "answer": "positive" },
    { "id": 25, "topic": "Type II", "prompt": "Type II error is False ___", "answer": "negative" }
  ],
  "day44": [
    { "id": 1, "topic": "Def", "prompt": "For every epsilon > 0 there exists a ___ > 0.", "answer": "delta" },
    { "id": 2, "topic": "Limit", "prompt": "Limit of sin(x)/x as x -> 0 is ___.", "answer": "1" },
    { "id": 3, "topic": "Squeeze", "prompt": "Theorem used to bound a function between two others is ___.", "answer": "squeeze", "altAnswers": ["sandwich"] },
    { "id": 4, "topic": "Infinity", "prompt": "Limit of 1/x as x -> infinity is ___.", "answer": "0" },
    { "id": 5, "topic": "Cont", "prompt": "A function is continuous if the limit equals the ___ value.", "answer": "function" },
    { "id": 6, "topic": "Topology", "prompt": "A set (0, 1) excluding endpoints is ___.", "answer": "open" },
    { "id": 7, "topic": "Topology", "prompt": "A set [0, 1] including endpoints is ___.", "answer": "closed" },
    { "id": 8, "topic": "IVT", "prompt": "IVT guarantees a value exists if the function is ___.", "answer": "continuous" },
    { "id": 9, "topic": "Logic", "prompt": "Limit definition is a ___ - delta statement", "answer": "epsilon" },
    { "id": 10, "topic": "Laws", "prompt": "Limit of a sum is sum of ___ (if they exist)", "answer": "limits" },
    { "id": 11, "topic": "Inverse", "prompt": "Inverse image of open set under continuous map is ___", "answer": "open" },
    { "id": 12, "topic": "Compact", "prompt": "Close and bounded interval in R is ___", "answer": "compact" },
    { "id": 13, "topic": "Weierstrass", "prompt": "Bolzano-___ theorem: bounded sequence has convergent subsequence", "answer": "weierstrass" },
    { "id": 14, "topic": "Jump", "prompt": "Discontinuity where limit exists but != f(c) is ___", "answer": "removable" },
    { "id": 15, "topic": "Jump", "prompt": "Discontinuity where left/right limits differ is ___", "answer": "jump" },
    { "id": 16, "topic": "Function", "prompt": "f(x) = |x| is continuous at 0 but not ___", "answer": "differentiable" },
    { "id": 17, "topic": "Limit", "prompt": "Limit of (1 + 1/n)^n is ___", "answer": "e" },
    { "id": 18, "topic": "Bound", "prompt": "If f continuous on closed interval, it achieves ___", "answer": "maximum", "altAnswers": ["minimum", "extremes"] },
    { "id": 19, "topic": "Composition", "prompt": "Composition of continuous functions is ___", "answer": "continuous" },
    { "id": 20, "topic": "Sequence", "prompt": "Sequence 1, -1, 1, -1 ___", "answer": "diverges" },
    { "id": 21, "topic": "One-Sided", "prompt": "For limit to exist, left and right limits must be ___", "answer": "equal" },
    { "id": 22, "topic": "Polynomials", "prompt": "Polynomials are continuous ___", "answer": "everywhere" },
    { "id": 23, "topic": "Rational", "prompt": "Rational functions continuous where denominator is not ___", "answer": "0", "altAnswers": ["zero"] },
    { "id": 24, "topic": "Root", "prompt": "Bisection method relies on ___ theorem", "answer": "ivt", "altAnswers": ["intermediate value"] },
    { "id": 25, "topic": "Uniqueness", "prompt": "Limits overlap implies limits are ___", "answer": "unique" }
  ],
  "day45": [
    { "id": 1, "topic": "Deriv", "prompt": "The derivative represents the ___ of the tangent line.", "answer": "slope", "altAnswers": ["gradient"] },
    { "id": 2, "topic": "MVT", "prompt": "MVT relates instantaneous rate to ___ rate.", "answer": "average" },
    { "id": 3, "topic": "Relation", "prompt": "If f is differentiable, it must be ___.", "answer": "continuous" },
    { "id": 4, "topic": "Corner", "prompt": "The function |x| is not differentiable at ___.", "answer": "0", "altAnswers": ["zero"] },
    { "id": 5, "topic": "Power", "prompt": "Derivative of x^n is ___", "answer": "nx^(n-1)", "altAnswers": ["nx^n-1"] },
    { "id": 6, "topic": "Product", "prompt": "(fg)' = f'g + ___", "answer": "fg'" },
    { "id": 7, "topic": "Chain", "prompt": "Derivative of f(g(x)) involves g'(___)", "answer": "x" },
    { "id": 8, "topic": "Extrema", "prompt": "Local extrema occur at ___ points", "answer": "critical" },
    { "id": 9, "topic": "Critical", "prompt": "Critical point is where f' is 0 or ___", "answer": "undefined" },
    { "id": 10, "topic": "Rolle", "prompt": "Rolle's Thm: f(a)=f(b) implies f'(c) = ___", "answer": "0" },
    { "id": 11, "topic": "Concave", "prompt": "f'' > 0 means concave ___", "answer": "up" },
    { "id": 12, "topic": "Inflection", "prompt": "Point where concavity changes is ___ point", "answer": "inflection" },
    { "id": 13, "topic": "LHopital", "prompt": "L'Hopital's rule solves ___ forms", "answer": "indeterminate", "altAnswers": ["0/0", "infinity/infinity"] },
    { "id": 14, "topic": "Linear", "prompt": "L(x) = f(a) + f'(a)(___)", "answer": "x-a" },
    { "id": 15, "topic": "Exp", "prompt": "Derivative of e^x is ___", "answer": "e^x" },
    { "id": 16, "topic": "Log", "prompt": "Derivative of ln(x) is ___", "answer": "1/x" },
    { "id": 17, "topic": "Sin", "prompt": "Derivative of sin(x) is ___", "answer": "cos(x)" },
    { "id": 18, "topic": "Cos", "prompt": "Derivative of cos(x) is ___", "answer": "-sin(x)" },
    { "id": 19, "topic": "Inverse", "prompt": "(f^-1)'(y) = 1 / f'(___)", "answer": "x", "altAnswers": ["f^-1(y)"] },
    { "id": 20, "topic": "Const", "prompt": "If f'(x) = 0 everywhere, f is ___", "answer": "constant" },
    { "id": 21, "topic": "Diff", "prompt": "Differentiability is stronger than ___", "answer": "continuity" },
    { "id": 22, "topic": "Order", "prompt": "f'' is the ___ derivative", "answer": "second" },
    { "id": 23, "topic": "Implicit", "prompt": "Differentiation used when y not isolated: ___", "answer": "implicit" },
    { "id": 24, "topic": "Taylor", "prompt": "1st degree Taylor poly is ___ approximation", "answer": "linear" },
    { "id": 25, "topic": "Definition", "prompt": "Derivative is limit of difference ___", "answer": "quotient" }
  ],
  "day46": [
    { "id": 1, "topic": "Area", "prompt": "The integral calculates the ___ under the curve.", "answer": "area" },
    { "id": 2, "topic": "FTC", "prompt": "Differentiation and Integration are ___ operations.", "answer": "inverse", "altAnswers": ["opposite"] },
    { "id": 3, "topic": "Sum", "prompt": "Riemann sums use ___ to approximate area.", "answer": "rectangles" },
    { "id": 4, "topic": "Condition", "prompt": "Continuous functions are always ___.", "answer": "integrable" },
    { "id": 5, "topic": "FTC1", "prompt": "Derivative of integral from a to x is ___", "answer": "f(x)" },
    { "id": 6, "topic": "FTC2", "prompt": "Integral from a to b is F(b) - ___", "answer": "f(a)", "altAnswers": ["F(a)"] },
    { "id": 7, "topic": "Bounds", "prompt": "Integral from a to a is ___", "answer": "0" },
    { "id": 8, "topic": "Reverse", "prompt": "Integral from b to a is ___ integral a to b", "answer": "negative", "altAnswers": ["minus", "-"] },
    { "id": 9, "topic": "Average", "prompt": "Mean Value Thm for Integrals: integral = f(c) * (___)", "answer": "b-a" },
    { "id": 10, "topic": "Sub", "prompt": "u-substitution is reverse ___ rule", "answer": "chain" },
    { "id": 11, "topic": "Parts", "prompt": "Int u dv = uv - Int ___", "answer": "v du" },
    { "id": 12, "topic": "Improper", "prompt": "Integral to infinity is ___ integral", "answer": "improper" },
    { "id": 13, "topic": "Dirichlet", "prompt": "Indicator of rationals is ___ integrable", "answer": "not" },
    { "id": 14, "topic": "Darboux", "prompt": "Upper and Lower sums must ___ for integrability", "answer": "converge", "altAnswers": ["agree", "equal"] },
    { "id": 15, "topic": "Linearity", "prompt": "Integral of sum is ___ of integrals", "answer": "sum" },
    { "id": 16, "topic": "Odd", "prompt": "Integral of odd function on [-a, a] is ___", "answer": "0" },
    { "id": 17, "topic": "Even", "prompt": "Integral of even function on [-a, a] is 2 times integral on [___, a]", "answer": "0" },
    { "id": 18, "topic": "Additivity", "prompt": "Int_a^c + Int_c^b = Int_a^___", "answer": "b" },
    { "id": 19, "topic": "Numerical", "prompt": "Trapezoidal rule uses ___ instead of rects", "answer": "trapezoids" },
    { "id": 20, "topic": "Approximation", "prompt": " Simpson's rule uses ___ arcs", "answer": "parabolic", "altAnswers": ["quadratic"] },
    { "id": 21, "topic": "Volume", "prompt": "Volume of revolution uses disk or ___ method", "answer": "washer" },
    { "id": 22, "topic": "Partition", "prompt": "Mesh size approaches ___ in limit", "answer": "0" },
    { "id": 23, "topic": "Refinement", "prompt": "Adding points to partition is a ___", "answer": "refinement" },
    { "id": 24, "topic": "Monotone", "prompt": "Monotonic functions are ___ integrable", "answer": "always" },
    { "id": 25, "topic": "Notation", "prompt": "In integral f(x)dx, f(x) is called the ___", "answer": "integrand" }
  ],
  "day47": [
    { "id": 1, "topic": "Derivative", "prompt": "f'(a) = lim (f(a+h) - f(a)) / ___", "answer": ["h"], "display": "h" },
    { "id": 2, "topic": "Differentiable", "prompt": "Differentiable ⟹ ___ (but not converse)", "answer": ["continuous"], "display": "continuous" },
    { "id": 3, "topic": "MVT", "prompt": "Mean Value Theorem: f'(c) = (f(b) - f(a)) / (b - ___)", "answer": ["a"], "display": "a" },
    { "id": 4, "topic": "Rolle", "prompt": "Rolle: if f(a) = f(b), then f'(c) = ___ for some c", "answer": ["0"], "display": "0" },
    { "id": 5, "topic": "LHopital", "prompt": "L'Hôpital: for 0/0 or ∞/∞, lim f/g = lim ___", "answer": ["f'/g'"], "display": "f'/g'" },
    { "id": 6, "topic": "Taylor", "prompt": "Taylor remainder: Rₙ involves (n+1)th ___", "answer": ["derivative"], "display": "derivative" },
    { "id": 7, "topic": "Riemann", "prompt": "Riemann integral: limit of ___ sums", "answer": ["riemann"], "display": "Riemann" },
    { "id": 8, "topic": "FTC", "prompt": "FTC: d/dx ∫ₐˣ f(t)dt = ___", "answer": ["f(x)"], "display": "f(x)" },
    { "id": 9, "topic": "FTC", "prompt": "∫ₐᵇ f'(x)dx = f(b) - f(___)", "answer": ["a"], "display": "f(a)" },
    { "id": 10, "topic": "Integrable", "prompt": "Continuous on [a,b] ⟹ Riemann ___", "answer": ["integrable"], "display": "integrable" },
    { "id": 11, "topic": "Integrable", "prompt": "f Riemann integrable iff ___ measure of discontinuities = 0", "answer": ["lebesgue"], "display": "Lebesgue" },
    { "id": 12, "topic": "Monotone", "prompt": "Monotone function has countably many ___", "answer": ["discontinuities"], "display": "discontinuities" },
    { "id": 13, "topic": "BV", "prompt": "Bounded variation: total variation is ___", "answer": ["finite"], "display": "finite" },
    { "id": 14, "topic": "BV", "prompt": "BV function = difference of two ___ functions", "answer": ["monotone"], "display": "monotone" },
    { "id": 15, "topic": "AbsCont", "prompt": "Absolutely continuous: ∫f' = f on [a,b]", "answer": ["true"], "display": "True" },
    { "id": 16, "topic": "Lebesgue", "prompt": "Lebesgue: monotone ⟹ differentiable almost ___", "answer": ["everywhere"], "display": "everywhere" },
    { "id": 17, "topic": "Inverse", "prompt": "Inverse function theorem: if f'(a) ≠ 0, f has local ___", "answer": ["inverse"], "display": "inverse" },
    { "id": 18, "topic": "Implicit", "prompt": "Implicit function theorem: when can y = f(x) be solved from F(x,y) = ___", "answer": ["0"], "display": "0" },
    { "id": 19, "topic": "Chain", "prompt": "(f∘g)'(x) = f'(g(x)) × g'(___)", "answer": ["x"], "display": "g'(x)" },
    { "id": 20, "topic": "Higher", "prompt": "Cⁿ: n times continuously ___", "answer": ["differentiable"], "display": "differentiable" }
  ],
  "day48": [
    { "id": 1, "topic": "Maclaurin", "prompt": "A Taylor series centered at 0 is valid a ___ series.", "answer": "maclaurin" },
    { "id": 2, "topic": "Sin", "prompt": "The Maclaurin series for sin(x) contains only ___ powers of x.", "answer": "odd" },
    { "id": 3, "topic": "Cos", "prompt": "The Maclaurin series for cos(x) contains only ___ powers of x.", "answer": "even" },
    { "id": 4, "topic": "Exp", "prompt": "Series for e^x is sum of x^n / ___.", "answer": "n!", "altAnswers": ["n factorial"] },
    { "id": 5, "topic": "Pointwise", "prompt": "Pointwise convergence depends on x and ___.", "answer": "n" },
    { "id": 6, "topic": "Uniform", "prompt": "Uniform convergence means N depends only on ___.", "answer": "epsilon" },
    { "id": 7, "topic": "Integral", "prompt": "Uniform convergence allows swapping limit and ___.", "answer": "integral" },
    { "id": 8, "topic": "Continuity", "prompt": "The limit of continuous functions is continuous if convergence is ___.", "answer": "uniform" },
    { "id": 9, "topic": "M-Test", "prompt": "Weierstrass M-Test proves ___ convergence", "answer": "uniform" },
    { "id": 10, "topic": "Radius", "prompt": "Taylor series converges within ___ of convergence", "answer": "radius" },
    { "id": 11, "topic": "Analytic", "prompt": "Function equal to its Taylor series is ___", "answer": "analytic" },
    { "id": 12, "topic": "Remainder", "prompt": "Taylor error is given by ___ term", "answer": "remainder", "altAnswers": ["Lagrange"] },
    { "id": 13, "topic": "Deriv", "prompt": "Uniform conv allows swapping limit and ___ (under conditions)", "answer": "derivative" },
    { "id": 14, "topic": "Diff", "prompt": "Power series can be differentiated term by ___", "answer": "term" },
    { "id": 15, "topic": "Geometric", "prompt": "1/(1-x) is sum of ___", "answer": "x^n" },
    { "id": 16, "topic": "Log", "prompt": "Integral of 1/(1-x) gives ___ series", "answer": "log", "altAnswers": ["ln"] },
    { "id": 17, "topic": "Arctan", "prompt": "Integral of 1/(1+x^2) gives ___ series", "answer": "arctan" },
    { "id": 18, "topic": "Sequence", "prompt": "fn(x) = x^n on [0,1] converges ___wise", "answer": "point" },
    { "id": 19, "topic": "Bump", "prompt": "Some smooth functions are not ___ (e.g. bump function)", "answer": "analytic" },
    { "id": 20, "topic": "Center", "prompt": "Taylor series approximates function near the ___", "answer": "center" },
    { "id": 21, "topic": "Order", "prompt": "O(x^3) represents terms of order ___ and higher", "answer": "3" },
    { "id": 22, "topic": "Factorial", "prompt": "Coefficient of x^n term is f^(n)(a) divided by ___", "answer": "n!" },
    { "id": 23, "topic": "Convergence", "prompt": "Taylor series might have radius equals ___ (finite)", "answer": "0" },
    { "id": 24, "topic": "Supnorm", "prompt": "Uniform conv is convergence in ___ norm", "answer": "sup", "altAnswers": ["infinity", "supremum"] },
    { "id": 25, "topic": "Polynomial", "prompt": "Stone-Weierstrass: Continuous function approx by ___ uniformally", "answer": "polynomials" }
  ],
  "day49": [
    { "id": 1, "topic": "Metric", "prompt": "A metric d(x,y) must be non-___.", "answer": "negative" },
    { "id": 2, "topic": "Identity", "prompt": "d(x,y) = 0 if and only if x = ___.", "answer": "y" },
    { "id": 3, "topic": "Symmetry", "prompt": "d(x,y) must equal ___.", "answer": "d(y,x)" },
    { "id": 4, "topic": "Triangle", "prompt": "d(x,z) <= d(x,y) + ___ describes the Triangle Inequality.", "answer": "d(y,z)" },
    { "id": 5, "topic": "Euclidean", "prompt": "Euclidean distance is the L-___ norm.", "answer": "2" },
    { "id": 6, "topic": "Manhattan", "prompt": "Manhattan distance is the L-___ norm.", "answer": "1" },
    { "id": 7, "topic": "Chebyshev", "prompt": "Chebyshev distance concerns the ___ difference in any coordinate.", "answer": "maximum" },
    { "id": 8, "topic": "Discrete", "prompt": "Discrete metric is 1 if x != y, else ___.", "answer": "0" },
    { "id": 9, "topic": "Ball", "prompt": "Open ball Br(x) is set of points distance < ___ from x.", "answer": "r" },
    { "id": 10, "topic": "Topology", "prompt": "A set is open if every point has an open ___ inside it.", "answer": "ball" },
    { "id": 11, "topic": "Cauchy", "prompt": "Seq is Cauchy if terms get arbitrarily ___.", "answer": "close" },
    { "id": 12, "topic": "Complete", "prompt": "Metric space is complete if every Cauchy seq ___.", "answer": "converges" },
    { "id": 13, "topic": "Rationals", "prompt": "The set of rational numbers Q is ___ complete.", "answer": "not" },
    { "id": 14, "topic": "Reals", "prompt": "The set of real numbers R ___ complete.", "answer": "is" },
    { "id": 15, "topic": "Contraction", "prompt": "Banach Fixed Point Theorem applies to ___ maps.", "answer": "contraction" },
    { "id": 16, "topic": "Fixed", "prompt": "Contraction mapping on complete space has ___ fixed point.", "answer": "unique" },
    { "id": 17, "topic": "Hamming", "prompt": "Hamming distance counts number of ___ characters/bits.", "answer": "different" },
    { "id": 18, "topic": "Norm", "prompt": "Every norm induces a ___.", "answer": "metric" },
    { "id": 19, "topic": "Induced", "prompt": "Not every metric comes from a ___.", "answer": "norm" },
    { "id": 20, "topic": "Sequence", "prompt": "In discrete metric, sequence converges iff it is eventualy ___.", "answer": "constant" },
    { "id": 21, "topic": "Boundary", "prompt": "Boundary points can be approached from both inside and ___ set.", "answer": "outside" },
    { "id": 22, "topic": "Closed", "prompt": "A set is closed if it contains all its ___ points.", "answer": "limit" },
    { "id": 23, "topic": "Compact", "prompt": "Heine-Borel: Compact in R^n iff closed and ___.", "answer": "bounded" },
    { "id": 24, "topic": "Triangle", "prompt": "d(x,y) >= |d(x,z) - d(z,y)| is ___ triangle inequality.", "answer": "reverse" },
    { "id": 25, "topic": "Ultrametric", "prompt": "Stronger triangle ineq: d(x,z) <= max(d(x,y), d(y,z)) is ___.", "answer": "ultrametric" }
  ],
  "day50": [
    { "id": 1, "topic": "Partial", "prompt": "∂f/∂x holds y ___", "answer": ["constant"], "display": "constant" },
    { "id": 2, "topic": "Gradient", "prompt": "∇f = (∂f/∂x, ∂f/∂y, ___)", "answer": ["∂f/∂z"], "display": "∂f/∂z" },
    { "id": 3, "topic": "Directional", "prompt": "D_u f = ∇f · ___ (unit vector)", "answer": ["u"], "display": "u" },
    { "id": 4, "topic": "Jacobian", "prompt": "Jacobian matrix: [∂fᵢ/∂xⱼ] is ___ × n", "answer": ["m"], "display": "m × n" },
    { "id": 5, "topic": "Chain", "prompt": "Multivariable chain: Df∘g = Df × ___", "answer": ["dg"], "display": "Dg" },
    { "id": 6, "topic": "Hessian", "prompt": "Hessian is matrix of ___ partial derivatives", "answer": ["second"], "display": "second" },
    { "id": 7, "topic": "Critical", "prompt": "Critical point: ∇f = ___", "answer": ["0"], "display": "0" },
    { "id": 8, "topic": "Second", "prompt": "Second derivative test uses ___ of Hessian", "answer": ["eigenvalues"], "display": "eigenvalues" },
    { "id": 9, "topic": "Implicit", "prompt": "Implicit: F(x,y) = 0 gives y as function of x if ∂F/∂y ≠ ___", "answer": ["0"], "display": "0" },
    { "id": 10, "topic": "Inverse", "prompt": "Inverse function: exists locally if det(Df) ≠ ___", "answer": ["0"], "display": "0" },
    { "id": 11, "topic": "Integration", "prompt": "∫∫_R f dA = ∫(∫f dx)dy = ∫(∫f dy)___", "answer": ["dx"], "display": "dx (Fubini)" },
    { "id": 12, "topic": "ChangeVar", "prompt": "Change of variables: multiply by |det ___| ", "answer": ["jacobian", "J"], "display": "|Jacobian|" },
    { "id": 13, "topic": "Polar", "prompt": "Polar: dA = r dr d___", "answer": ["θ", "theta"], "display": "dθ" },
    { "id": 14, "topic": "Spherical", "prompt": "Spherical: dV = ρ² sin(φ) dρ dθ d___", "answer": ["φ", "phi"], "display": "dφ" },
    { "id": 15, "topic": "Green", "prompt": "Green's: ∮ P dx + Q dy = ∫∫ (∂Q/∂x - ∂P/∂___)dA", "answer": ["y"], "display": "∂y" },
    { "id": 16, "topic": "Stokes", "prompt": "Stokes: ∮_C F·dr = ∫∫_S ___ F · dS", "answer": ["curl", "∇×"], "display": "curl" },
    { "id": 17, "topic": "Divergence", "prompt": "Divergence thm: ∫∫_S F·dS = ∫∫∫_V ___ F dV", "answer": ["div", "∇·"], "display": "div" },
    { "id": 18, "topic": "Conservative", "prompt": "F conservative iff curl F = ___", "answer": ["0"], "display": "0" },
    { "id": 19, "topic": "Potential", "prompt": "F = ∇φ means φ is ___ function", "answer": ["potential"], "display": "potential" },
    { "id": 20, "topic": "Manifold", "prompt": "n-manifold locally looks like ℝ___", "answer": ["n"], "display": "ℝⁿ" }
  ],
  "day51": [
    { "id": 1, "topic": "Float", "prompt": "Floating point: sign × mantissa × 2^___", "answer": ["exponent"], "display": "exponent" },
    { "id": 2, "topic": "Float", "prompt": "IEEE 754 double: 64 bits = 1 + 11 + ___", "answer": ["52"], "display": "52 mantissa" },
    { "id": 3, "topic": "MachineEps", "prompt": "Machine epsilon: smallest ε s.t. 1 + ε ≠ ___", "answer": ["1"], "display": "1" },
    { "id": 4, "topic": "Rounding", "prompt": "Rounding error: |fl(x) - x| / |x| ≤ ___", "answer": ["ε", "epsilon"], "display": "ε" },
    { "id": 5, "topic": "Catastrophic", "prompt": "Subtracting nearly equal numbers: ___ cancellation", "answer": ["catastrophic"], "display": "catastrophic" },
    { "id": 6, "topic": "Stability", "prompt": "Stable algorithm: small input error → small ___ error", "answer": ["output"], "display": "output" },
    { "id": 7, "topic": "Condition", "prompt": "Condition number measures sensitivity to ___ changes", "answer": ["input"], "display": "input" },
    { "id": 8, "topic": "Condition", "prompt": "κ(A) = ‖A‖ × ‖A⁻¹‖ is matrix condition ___", "answer": ["number"], "display": "number" },
    { "id": 9, "topic": "Condition", "prompt": "κ(A) large: A is ill-___", "answer": ["conditioned"], "display": "conditioned" },
    { "id": 10, "topic": "Backward", "prompt": "Backward stable: computes exact answer for slightly ___ input", "answer": ["perturbed"], "display": "perturbed" },
    { "id": 11, "topic": "Forward", "prompt": "Forward error = |computed - ___| ", "answer": ["true"], "display": "true" },
    { "id": 12, "topic": "Backward", "prompt": "Backward error = input perturbation to explain ___", "answer": ["output"], "display": "output" },
    { "id": 13, "topic": "LU", "prompt": "LU with pivoting is numerically ___", "answer": ["stable"], "display": "stable" },
    { "id": 14, "topic": "QR", "prompt": "QR via Householder is more ___ than Gram-Schmidt", "answer": ["stable"], "display": "stable" },
    { "id": 15, "topic": "Iterative", "prompt": "Iterative methods: Jacobi, Gauss-___, SOR", "answer": ["seidel"], "display": "Seidel" },
    { "id": 16, "topic": "Convergence", "prompt": "Iterative converges if spectral radius ρ < ___", "answer": ["1"], "display": "1" },
    { "id": 17, "topic": "Newton", "prompt": "Newton's method: xₙ₊₁ = xₙ - f(xₙ)/f'(___)", "answer": ["xₙ", "xn"], "display": "xₙ" },
    { "id": 18, "topic": "Newton", "prompt": "Newton converges ___ near simple root", "answer": ["quadratically"], "display": "quadratically" },
    { "id": 19, "topic": "Bisection", "prompt": "Bisection: halve interval, guaranteed for ___ functions", "answer": ["continuous"], "display": "continuous" },
    { "id": 20, "topic": "Float", "prompt": "NaN = Not a ___", "answer": ["number"], "display": "Number" }
  ],
  "day52": [
    { "id": 1, "topic": "Group", "prompt": "A group (G, *) must be closed under ___.", "answer": "operation", "altAnswers": ["multiplication", "addition", "*"] },
    { "id": 2, "topic": "Inverse", "prompt": "Every element in a group has a unique ___.", "answer": "inverse" },
    { "id": 3, "topic": "Identity", "prompt": "Identity element e satisfies a*e = e*a = ___.", "answer": "a" },
    { "id": 4, "topic": "Abelian", "prompt": "If a*b = b*a for all elements, the group is ___.", "answer": "abelian" },
    { "id": 5, "topic": "Ring", "prompt": "A ring has two operations: addition and ___.", "answer": "multiplication" },
    { "id": 6, "topic": "Distributive", "prompt": "In a ring, multiplication must be ___ over addition.", "answer": "distributive" },
    { "id": 7, "topic": "Integers", "prompt": "The set of Integers Z is a ___.", "answer": "ring" },
    { "id": 8, "topic": "Field", "prompt": "If division is possible (except by 0), the ring is a ___.", "answer": "field" },
    { "id": 9, "topic": "Subgroup", "prompt": "A subset H of G is a subgroup if it is a group under same ___.", "answer": "operation" },
    { "id": 10, "topic": "Normal", "prompt": "Subgroup N is normal if gNg^-1 = ___.", "answer": "N", "altAnswers": ["n"] },
    { "id": 11, "topic": "Coset", "prompt": "The set gH = {gh : h in H} is a left ___.", "answer": "coset" },
    { "id": 12, "topic": "Lagrange", "prompt": "Thm: Order of subgroup divides order of ___.", "answer": "group" },
    { "id": 13, "topic": "Order", "prompt": "Order of a group is the number of ___.", "answer": "elements" },
    { "id": 14, "topic": "Cyclic", "prompt": "Group generated by a single element is ___.", "answer": "cyclic" },
    { "id": 15, "topic": "Permutation", "prompt": "S_n is the group of all ___ of n items.", "answer": "permutations" },
    { "id": 16, "topic": "Even", "prompt": "A_n is the group of ___ permutations.", "answer": "even" },
    { "id": 17, "topic": "Ideal", "prompt": "Subring absorbing multiplication is an ___.", "answer": "ideal" },
    { "id": 18, "topic": "Quotient", "prompt": "Group G/N consists of the ___ of N.", "answer": "cosets" },
    { "id": 19, "topic": "Kernel", "prompt": "Kernel of homomorphism is elements mapping to ___.", "answer": "identity", "altAnswers": ["e", "0"] },
    { "id": 20, "topic": "Isomorphism", "prompt": "Bijective homomorphism is an ___.", "answer": "isomorphism" },
    { "id": 21, "topic": "Unity", "prompt": "A ring with multiplicative identity 1 has ___.", "answer": "unity" },
    { "id": 22, "topic": "Commutative", "prompt": "If xy=yx in Ring, it is ___.", "answer": "commutative" },
    { "id": 23, "topic": "Zero Divisor", "prompt": "If ab=0 but a,b!=0, they are ___ divisors.", "answer": "zero" },
    { "id": 24, "topic": "Domain", "prompt": "Commutative ring with no zero divisors is an Integral ___.", "answer": "domain" },
    { "id": 25, "topic": "Polynomial", "prompt": "R[x] is the ring of ___ over R.", "answer": "polynomials" }
  ],
  "day53": [
    { "id": 1, "topic": "Field", "prompt": "Field F: Ring with commutativity and ___.", "answer": ["division", "inverses"], "display": "mult. inverses" },
    { "id": 2, "topic": "Extension", "prompt": "Field Extension L/K means K is a ___ of L.", "answer": ["subfield"], "display": "subfield" },
    { "id": 3, "topic": "Algebraic", "prompt": "Element is algebraic if it is a root of a ___ over K.", "answer": ["polynomial"], "display": "polynomial" },
    { "id": 4, "topic": "Degree", "prompt": "Degree [L:K] is dimension of L as ___ space over K.", "answer": ["vector"], "display": "vector" },
    { "id": 5, "topic": "Splitting", "prompt": "Splitting Field: smallest field containing all ___ of p(x).", "answer": ["roots"], "display": "roots" },
    { "id": 6, "topic": "Galois Group", "prompt": "Gal(L/K): Automorphisms of L fixing ___.", "answer": ["k"], "display": "K" },
    { "id": 7, "topic": "Fixed Field", "prompt": "Fixed field of subgroup H is set of elements fixed by all ___ in H.", "answer": ["automorphisms", "permutations"], "display": "automorphisms" },
    { "id": 8, "topic": "FTGT", "prompt": "FTGT: Bijection between intermediate fields and ___ of Galois Group.", "answer": ["subgroups"], "display": "subgroups" },
    { "id": 9, "topic": "Normal", "prompt": "Normal extension: Irreducible poly with one root has ___ roots in L.", "answer": ["all"], "display": "all" },
    { "id": 10, "topic": "Separable", "prompt": "Separable polynomial has ___ roots.", "answer": ["distinct"], "display": "distinct" },
    { "id": 11, "topic": "Solvable", "prompt": "Polynomial solvable by radicals iff Galois Group is ___.", "answer": ["solvable"], "display": "solvable" },
    { "id": 12, "topic": "Quintic", "prompt": "General quintic is not solvable because ___ is not solvable.", "answer": ["s5", "symmetric group"], "display": "S5" },
    { "id": 13, "topic": "Abel", "prompt": "___-Ruffini Theorem: No general formula for degree >= 5.", "answer": ["abel"], "display": "Abel" },
    { "id": 14, "topic": "Finite Field", "prompt": "Order of finite field is always power of a ___.", "answer": ["prime"], "display": "prime" },
    { "id": 15, "topic": "Constructible", "prompt": "Constructible numbers form a field extension of degree ___.", "answer": ["power of 2", "2^n"], "display": "2^n" },
    { "id": 16, "topic": "Angle Trisection", "prompt": "Trisection impossible because x^3 - 3x - 1 is ___ over Q.", "answer": ["irreducible"], "display": "irreducible" },
    { "id": 17, "topic": "Doubling Cube", "prompt": "Doubling cube requires constructing cube root of ___.", "answer": ["2"], "display": "2" },
    { "id": 18, "topic": "Discriminant", "prompt": "Discriminant tells if roots are ___.", "answer": ["distinct"], "display": "distinct" },
    { "id": 19, "topic": "Cyclotomic", "prompt": "Cyclotomic field: extension by ___ roots of unity.", "answer": ["nth"], "display": "nth" },
    { "id": 20, "topic": "Fundamental", "prompt": "Fundamental Theorem: Inclusion of fields reverses inclusion of ___.", "answer": ["subgroups"], "display": "subgroups" }
  ],
  "day54": [
    { "id": 1, "topic": "Module", "prompt": "Vector space over a Ring is a ___.", "answer": "module" },
    { "id": 2, "topic": "Scalar", "prompt": "In a module, scalars come from a ___.", "answer": "ring" },
    { "id": 3, "topic": "Abelian", "prompt": "Underlying structure of module is ___ group.", "answer": "abelian" },
    { "id": 4, "topic": "Basis", "prompt": "Unlike vector spaces, modules may not have a ___.", "answer": "basis" },
    { "id": 5, "topic": "Free", "prompt": "Module with a basis is called ___.", "answer": "free" },
    { "id": 6, "topic": "Torsion", "prompt": "Element m with rm=0 for r!=0 is ___ element.", "answer": "torsion" },
    { "id": 7, "topic": "Annihilator", "prompt": "Set of scalars r s.t. rm=0 is the ___.", "answer": "annihilator" },
    { "id": 8, "topic": "Submodule", "prompt": "Subset closed under addition and scaler mult is ___.", "answer": "submodule" },
    { "id": 9, "topic": "Homomorphism", "prompt": "Linear map between modules is module ___.", "answer": "homomorphism" },
    { "id": 10, "topic": "Kernel", "prompt": "Kernel of module homomorphism is a ___.", "answer": "submodule" },
    { "id": 11, "topic": "PID", "prompt": "Structure Thm applies to modules over a ___.", "answer": "pid" },
    { "id": 12, "topic": "Z-module", "prompt": "Any Abelian group is a ___-module.", "answer": "z" },
    { "id": 13, "topic": "Vector", "prompt": "Module over a Field is a ___ Space.", "answer": "vector" },
    { "id": 14, "topic": "Cyclic", "prompt": "Module generated by one element is ___.", "answer": "cyclic" },
    { "id": 15, "topic": "Sum", "prompt": "Free module is direct ___ of R.", "answer": "sum" },
    { "id": 16, "topic": "Rank", "prompt": "Number of basis elements in free module is ___.", "answer": "rank" },
    { "id": 17, "topic": "Invariant", "prompt": "Invariant factors describe the ___ part.", "answer": "torsion" },
    { "id": 18, "topic": "Jordan", "prompt": "Jordan Normal Form comes from module over ___.", "answer": "polynomials", "altAnswers": ["f[x]", "polynomial ring"] },
    { "id": 19, "topic": "Rational", "prompt": "___ Canonical Form is another matrix application.", "answer": "rational" },
    { "id": 20, "topic": "Noetherian", "prompt": "Module with ACC on submodules is ___.", "answer": "noetherian" },
    { "id": 21, "topic": "Artinian", "prompt": "Module with DCC on submodules is ___.", "answer": "artinian" },
    { "id": 22, "topic": "Simple", "prompt": "Module with no proper submodules is ___.", "answer": "simple" },
    { "id": 23, "topic": "Semisimple", "prompt": "Direct sum of simple modules is ___.", "answer": "semisimple" },
    { "id": 24, "topic": "Projective", "prompt": "Module that is summand of free module is ___.", "answer": "projective" },
    { "id": 25, "topic": "Injective", "prompt": "Dual notion to projective is ___.", "answer": "injective" }
  ],
  "day55": [
    { "id": 1, "topic": "Topology", "prompt": "A topology is a collection of ___ sets.", "answer": "open" },
    { "id": 2, "topic": "Axioms", "prompt": "The union of ANY collection of open sets must be ___.", "answer": "open" },
    { "id": 3, "topic": "Axioms", "prompt": "The intersection of a ___ collection of open sets is open.", "answer": "finite" },
    { "id": 4, "topic": "Closed", "prompt": "A set is closed if its complement is ___.", "answer": "open" },
    { "id": 5, "topic": "Basis", "prompt": "Open sets are formed by unions of ___ elements.", "answer": "basis" },
    { "id": 6, "topic": "Continuity", "prompt": "f is continuous if preimage of open set is ___.", "answer": "open" },
    { "id": 7, "topic": "Metric", "prompt": "In metric spaces, open sets are unions of open ___.", "answer": "balls" },
    { "id": 8, "topic": "Compactness", "prompt": "Every open cover has a ___ subcover.", "answer": "finite" },
    { "id": 9, "topic": "Heine-Borel", "prompt": "In R^n, compact sets are closed and ___.", "answer": "bounded" },
    { "id": 10, "topic": "Connected", "prompt": "Space is disconnected if it has disjoint non-empty ___ sets covering it.", "answer": "open" },
    { "id": 11, "topic": "Hausdorff", "prompt": "Points can be separated by disjoint ___ sets.", "answer": "open" },
    { "id": 12, "topic": "Closure", "prompt": "Smallest closed set containing A is its ___.", "answer": "closure" },
    { "id": 13, "topic": "Interior", "prompt": "Largest open set contained in A is its ___.", "answer": "interior" },
    { "id": 14, "topic": "Limit Point", "prompt": "x is limit point if every neighborhood contains point of A other than ___.", "answer": "x" },
    { "id": 15, "topic": "Sequential", "prompt": "In general topology, sequences are not enough; we need u___.", "answer": "ultrafilters", "altAnswers": ["nets"] },
    { "id": 16, "topic": "Euclidean", "prompt": "Standard topology on R is generated by open ___.", "answer": "intervals" },
    { "id": 17, "topic": "Indiscrete", "prompt": "Topology with only empty set and X is ___.", "answer": "indiscrete", "altAnswers": ["trivial"] },
    { "id": 18, "topic": "Discrete", "prompt": "Topology where EVERY set is open is ___.", "answer": "discrete" },
    { "id": 19, "topic": "Homeomorphism", "prompt": "Continuous bijective map with continuous inverse is a ___.", "answer": "homeomorphism" },
    { "id": 20, "topic": "Property", "prompt": "Compactness is a ___ property (preserved by homeomorphism).", "answer": "topological" },
    { "id": 21, "topic": "T1", "prompt": "In T1 spaces, single points are ___ sets.", "answer": "closed" },
    { "id": 22, "topic": "Compact", "prompt": "Closed subset of compact set is ___.", "answer": "compact" },
    { "id": 23, "topic": "Compact", "prompt": "Compact subset of Hausdorff space is ___.", "answer": "closed" },
    { "id": 24, "topic": "Path", "prompt": "Path connectedness implies ___.", "answer": "connectedness" },
    { "id": 25, "topic": "Intermediate", "prompt": "IVT holds because [a,b] is ___.", "answer": "connected" }
  ],
  "day56": [
    { "id": 1, "topic": "Product", "prompt": "Cartesian product X x Y consists of ordered ___.", "answer": "pairs" },
    { "id": 2, "topic": "Topology", "prompt": "Product topology makes projection maps ___.", "answer": "continuous" },
    { "id": 3, "topic": "Basis", "prompt": "Basis for product topology is U x V where U, V are ___.", "answer": "open" },
    { "id": 4, "topic": "Infinite", "prompt": "In infinite product topology, only ___ many components differ from space.", "answer": "finitely" },
    { "id": 5, "topic": "Box", "prompt": "___ topology allows arbitrary open sets in all components.", "answer": "box" },
    { "id": 6, "topic": "Comparison", "prompt": "Box topology is ___ than Product topology.", "answer": "finer" },
    { "id": 7, "topic": "Convergence", "prompt": "Product topology corresponds to ___ convergence.", "answer": "pointwise" },
    { "id": 8, "topic": "Tychonoff", "prompt": "Product of compact spaces is ___.", "answer": "compact" },
    { "id": 9, "topic": "Axiom", "prompt": "Tychonoff theorem is equivalent to Axiom of ___.", "answer": "choice" },
    { "id": 10, "topic": "Projection", "prompt": "Map pi_x(x,y) = x is open but not always ___.", "answer": "closed" },
    { "id": 11, "topic": "Hausdorff", "prompt": "Product of Hausdorff spaces is ___.", "answer": "hausdorff" },
    { "id": 12, "topic": "Connected", "prompt": "Product of connected spaces is ___.", "answer": "connected" },
    { "id": 13, "topic": "Countable", "prompt": "Product of countable spaces is NOT always ___ (if infinite product).", "answer": "countable" },
    { "id": 14, "topic": "Cantor", "prompt": "Cantor set is homeomorphic to countable product of {0, 1} with ___ topology.", "answer": "discrete" },
    { "id": 15, "topic": "Cylinder", "prompt": "Basic open sets in infinite product are called ___ sets.", "answer": "cylinder" },
    { "id": 16, "topic": "Metric", "prompt": "Countable product of metric spaces is ___.", "answer": "metrizable" },
    { "id": 17, "topic": "Uniform", "prompt": "Box topology does NOT preserve sequences of ___ functions.", "answer": "convergent" },
    { "id": 18, "topic": "Compactness", "prompt": "Box topology product of compact spaces is generally ___ compact.", "answer": "not" },
    { "id": 19, "topic": "Sequence", "prompt": "x_n -> x in product iff pi_a(x_n) -> ___.", "answer": "pi_a(x)" },
    { "id": 20, "topic": "Space", "prompt": "R^omega usually refers to product topology on countable copies of ___.", "answer": "r" },
    { "id": 21, "topic": "Function", "prompt": "Space of functions R^R can be proven to be a ___ space.", "answer": "product" },
    { "id": 22, "topic": "Limit", "prompt": "Product topology has fewer open sets, so it is easier to ___.", "answer": "converge" },
    { "id": 23, "topic": "Coarsest", "prompt": "Product topology is the ___ topology making projections continuous.", "answer": "coarsest" },
    { "id": 24, "topic": "Finest", "prompt": "Box topology is the ___ topology generated by all box products.", "answer": "finest" },
    { "id": 25, "topic": "Diagonal", "prompt": "Diagonal map x -> (x,x) is continuous if space is ___.", "answer": "hausdorff" }
  ],
  "day57": [
    { "id": 1, "topic": "Length", "prompt": "Length of [a,b] is ___.", "answer": "b-a" },
    { "id": 2, "topic": "Additivity", "prompt": "Measure of union of disjoint sets is ___ of measures.", "answer": "sum" },
    { "id": 3, "topic": "Invariance", "prompt": "Lebesgue measure is invariant under ___.", "answer": "translation" },
    { "id": 4, "topic": "Vitali", "prompt": "Vitali set is an example of a ___ set.", "answer": "non-measurable", "altAnswers": ["non measurable"] },
    { "id": 5, "topic": "Sigma", "prompt": "Sigma algebra closed under ___ unions.", "answer": "countable" },
    { "id": 6, "topic": "Set", "prompt": "Empty set measure is ___.", "answer": "0" },
    { "id": 7, "topic": "Space", "prompt": "Pair (X, Sigma) is a ___ Space.", "answer": "measurable" },
    { "id": 8, "topic": "Measure", "prompt": "Triple (X, Sigma, mu) is a ___ Space.", "answer": "measure" },
    { "id": 9, "topic": "Monotonicity", "prompt": "If A subset B, then mu(A) ___ mu(B).", "answer": "<=", "altAnswers": ["less than or equal"] },
    { "id": 10, "topic": "Subadditivity", "prompt": "Measure of union is <= sum of measures is countable ___.", "answer": "subadditivity" },
    { "id": 11, "topic": "Null", "prompt": "Set with measure 0 is a ___ set.", "answer": "null" },
    { "id": 12, "topic": "Complete", "prompt": "If all subsets of null sets are measurable, measure is ___.", "answer": "complete" },
    { "id": 13, "topic": "Outer", "prompt": "Outer measure is defined for ___ subset of R.", "answer": "every", "altAnswers": ["any"] },
    { "id": 14, "topic": "Caratheodory", "prompt": "Measurable sets cut every set ___.", "answer": "additively" },
    { "id": 15, "topic": "Borel", "prompt": "Smallest sigma-algebra containing open sets is ___.", "answer": "borel" },
    { "id": 16, "topic": "Open", "prompt": "Every open set is Lebesgue ___.", "answer": "measurable" },
    { "id": 17, "topic": "Countable", "prompt": "Measure of any countable set (like Q) is ___.", "answer": "0" },
    { "id": 18, "topic": "Existence", "prompt": "Vitali set construction requires Axiom of ___.", "answer": "choice" },
    { "id": 19, "topic": "Cantor", "prompt": "Cantor set has measure ___.", "answer": "0" },
    { "id": 20, "topic": "Cardinality", "prompt": "Cantor set has same cardinality as ___.", "answer": "r", "altAnswers": ["reals"] },
    { "id": 21, "topic": "Fat", "prompt": "Fat Cantor set has ___ measure.", "answer": "positive" },
    { "id": 22, "topic": "Function", "prompt": "Measurable function preimages must be ___.", "answer": "measurable" },
    { "id": 23, "topic": "Lusin", "prompt": "Measurable functions are 'nearly' ___.", "answer": "continuous" },
    { "id": 24, "topic": "Egorov", "prompt": "Pointwise convergence is 'nearly' ___.", "answer": "uniform" },
    { "id": 25, "topic": "Probability", "prompt": "Probability requires mu(X) = ___.", "answer": "1" }
  ],
  "day58": [
    { "id": 1, "topic": "Definition", "prompt": "Lebesgue integral partitions the ___ instead of the domain.", "answer": "range" },
    { "id": 2, "topic": "Simple", "prompt": "Simple functions take only ___ many values.", "answer": "finitely" },
    { "id": 3, "topic": "Dirichlet", "prompt": "Lebesgue integral of Dirichlet function (1 on Q) is ___.", "answer": "0" },
    { "id": 4, "topic": "Supremum", "prompt": "Integral of f >= 0 is supremum of integrals of ___ functions <= f.", "answer": "simple" },
    { "id": 5, "topic": "Measurable", "prompt": "Function is measurable if preimage of open sets is ___.", "answer": "measurable" },
    { "id": 6, "topic": "Comparison", "prompt": "Riemann integrable implies ___ integrable.", "answer": "lebesgue" },
    { "id": 7, "topic": "AE", "prompt": "Functions equal almost everywhere have ___ integral.", "answer": "same" },
    { "id": 8, "topic": "L1", "prompt": "Space of integrable functions is denoted ___.", "answer": "l1" },
    { "id": 9, "topic": "Positive", "prompt": "Integral of f is int(f+) - int(___).", "answer": "f-" },
    { "id": 10, "topic": "Analogy", "prompt": "Riemann counts coins by order; Lebesgue counts by ___.", "answer": "value" },
    { "id": 11, "topic": "Example", "prompt": "Indicator function 1_A has integral equal to measure of ___.", "answer": "a" },
    { "id": 12, "topic": "Linearity", "prompt": "Lebesgue integral satisfies ___ (property).", "answer": "linearity" },
    { "id": 13, "topic": "Monotonicity", "prompt": "If f <= g, then int f ___ int g.", "answer": "<=" },
    { "id": 14, "topic": "Infinite", "prompt": "Lebesgue integral can be positive ___.", "answer": "infinity" },
    { "id": 15, "topic": "Approximation", "prompt": "Measurable functions can be approximated by ___ functions.", "answer": "simple" },
    { "id": 16, "topic": "Range", "prompt": "Splitting the range is the key idea of ___ integration.", "answer": "lebesgue" },
    { "id": 17, "topic": "Countable", "prompt": "Integral over a countable set is usually ___.", "answer": "0" },
    { "id": 18, "topic": "Notation", "prompt": "Common notation for Lebesgue integral: integral f d___.", "answer": "mu" },
    { "id": 19, "topic": "Complete", "prompt": "L1 space is ___ (unlike Riemann space).", "answer": "complete" },
    { "id": 20, "topic": "Banach", "prompt": "L1 is a ___ space.", "answer": "banach" },
    { "id": 21, "topic": "Kernel", "prompt": "Integral is a linear functional on the ___.", "answer": "space" },
    { "id": 22, "topic": "Sigma", "prompt": "Sigma-additivity applies to the ___.", "answer": "measure" },
    { "id": 23, "topic": "Step", "prompt": "Riemann uses step functions; Lebesgue uses ___ functions.", "answer": "simple" },
    { "id": 24, "topic": "Vertical", "prompt": "Riemann: Vertical slices. Lebesgue: ___ slices.", "answer": "horizontal" },
    { "id": 25, "topic": "Value", "prompt": "Lebesgue integral assigns weight to ___.", "answer": "values" }
  ],
  "day59": [
    { "id": 1, "topic": "MCT", "prompt": "MCT requires sequence to be non-negative and ___.", "answer": "increasing" },
    { "id": 2, "topic": "DCT", "prompt": "DCT requires a ___ function g.", "answer": "dominating" },
    { "id": 3, "topic": "Fatou", "prompt": "Fatou's Lemma gives an ___ (equality/inequality).", "answer": "inequality" },
    { "id": 4, "topic": "Limit", "prompt": "These theorems swap limit and ___.", "answer": "integral" },
    { "id": 5, "topic": "Bump", "prompt": "Traveling bump limit of integral is 1; integral of limit is ___.", "answer": "0" },
    { "id": 6, "topic": "MCT", "prompt": "Limit of int f_n = int ___ f_n.", "answer": "lim" },
    { "id": 7, "topic": "DCT", "prompt": "Dominating function must be ___.", "answer": "integrable" },
    { "id": 8, "topic": "Fatou", "prompt": "Int liminf f_n <= ___ int f_n.", "answer": "liminf" },
    { "id": 9, "topic": "Pointwise", "prompt": "Convergence usually assumed is ___.", "answer": "pointwise" },
    { "id": 10, "topic": "AE", "prompt": "Convergence only needs to hold ___ everywhere.", "answer": "almost" },
    { "id": 11, "topic": "Analogy", "prompt": "Dominating function is like a protective ___.", "answer": "umbrella" },
    { "id": 12, "topic": "Mnemonic", "prompt": "Integration makes things ___ (Fatou).", "answer": "bigger" },
    { "id": 13, "topic": "Series", "prompt": "MCT applies to ___ of non-negative functions.", "answer": "series" },
    { "id": 14, "topic": "Differentiation", "prompt": "Differentiation under integral sign uses ___.", "answer": "dct" },
    { "id": 15, "topic": "Bounded", "prompt": "Bounded Convergence Theorem is a special case of ___.", "answer": "dct" },
    { "id": 16, "topic": "Uniform", "prompt": "Uniform convergence implies convergence of integrals on ___ sets.", "answer": "finite" },
    { "id": 17, "topic": "L1", "prompt": "DCT proves convergence in ___ norm.", "answer": "l1" },
    { "id": 18, "topic": "Counter", "prompt": "Typewriter sequence fails ___.", "answer": "dct" },
    { "id": 19, "topic": "Expectation", "prompt": "In probability, integral is ___.", "answer": "expectation" },
    { "id": 20, "topic": "Success", "prompt": "Lebesgue handles limits ___ than Riemann.", "answer": "better" },
    { "id": 21, "topic": "Scheffe", "prompt": "Scheffe's Lemma relates pointwise and ___ convergence.", "answer": "l1" },
    { "id": 22, "topic": "Vitali", "prompt": "Vitali Convergence Theorem uses uniform ___.", "answer": "integrability" },
    { "id": 23, "topic": "Beppo", "prompt": "MCT is also called ___ Levy's Theorem.", "answer": "beppo" },
    { "id": 24, "topic": "Reverse", "prompt": "Check Reverse Fatou for ___ bounded functions.", "answer": "upper" },
    { "id": 25, "topic": "Strict", "prompt": "Fatou inequality can be ___.", "answer": "strict" }
  ],
  "day60": [
    { "id": 1, "topic": "Space", "prompt": "Probability Space is triple (Omega, F, ___).", "answer": "p" },
    { "id": 2, "topic": "Total", "prompt": "Total measure P(Omega) must be ___.", "answer": "1" },
    { "id": 3, "topic": "RV", "prompt": "Random Variable is a measurable ___.", "answer": "function" },
    { "id": 4, "topic": "Inverse", "prompt": "P(X in B) is P(X inverse of ___).", "answer": "b" },
    { "id": 5, "topic": "Distribution", "prompt": "Distribution is the ___ measure on R.", "answer": "pushforward" },
    { "id": 6, "topic": "Sigma", "prompt": "Sigma algebra F represents ___.", "answer": "information" },
    { "id": 7, "topic": "Independence", "prompt": "Independence is defined via ___ algebras.", "answer": "sigma" },
    { "id": 8, "topic": "Expectation", "prompt": "Expectation is the Lebesgue ___.", "answer": "integral" },
    { "id": 9, "topic": "LOTUS", "prompt": "E[g(X)] uses distribution of ___.", "answer": "x" },
    { "id": 10, "topic": "Conditional", "prompt": "E[X|Y] is a random ___.", "answer": "variable" },
    { "id": 11, "topic": "Measurable", "prompt": "E[X|Y] must be ___ with respect to Y.", "answer": "measurable" },
    { "id": 12, "topic": "Projection", "prompt": "E[X|Y] is orthogonal ___ onto sigma(Y).", "answer": "projection" },
    { "id": 13, "topic": "Analogy", "prompt": "RV maps world outcome to ___ reading.", "answer": "thermometer" },
    { "id": 14, "topic": "Discrete", "prompt": "For discrete, integral becomes ___.", "answer": "sum" },
    { "id": 15, "topic": "Continuous", "prompt": "For continuous, integral uses ___ f(x)dx.", "answer": "density" },
    { "id": 16, "topic": "CDF", "prompt": "F(x) = P(X ___ x).", "answer": "<=" },
    { "id": 17, "topic": "Events", "prompt": "Events are sets in ___.", "answer": "f" },
    { "id": 18, "topic": "Sample", "prompt": "Omega is the ___ space.", "answer": "sample" },
    { "id": 19, "topic": "Borel", "prompt": "Standard sigma algebra on R is ___.", "answer": "borel" },
    { "id": 20, "topic": "Outcomes", "prompt": "Little omega represents an ___.", "answer": "outcome" },
    { "id": 21, "topic": "Moment", "prompt": "E[X^n] is the n-th ___.", "answer": "moment" },
    { "id": 22, "topic": "Variance", "prompt": "E[(X-mu)^2] is ___.", "answer": "variance" },
    { "id": 23, "topic": "Tower", "prompt": "E[E[X|Y]] = ___.", "answer": "e[x]" },
    { "id": 24, "topic": "Information", "prompt": "Conditioning adds ___.", "answer": "information" },
    { "id": 25, "topic": "Almost", "prompt": "Events with P=1 happen ___ surely.", "answer": "almost" }
  ],
  "day61": [
    { "id": 1, "topic": "Probability", "prompt": "WLLN states convergence in ___.", "answer": "probability" },
    { "id": 2, "topic": "Almost Sure", "prompt": "SLLN states convergence ___ surely.", "answer": "almost" },
    { "id": 3, "topic": "Sample Mean", "prompt": "The Law of Large Numbers applies to the ___.", "answer": "sample mean" },
    { "id": 4, "topic": "Expectation", "prompt": "The sample mean converges to the ___.", "answer": "expectation" },
    { "id": 5, "topic": "Variance", "prompt": "WLLN proof typically uses ___ Inequality.", "answer": "chebyshev" },
    { "id": 6, "topic": "Distribution", "prompt": "CLT states convergence in ___.", "answer": "distribution" },
    { "id": 7, "topic": "Normal", "prompt": "The limiting distribution in CLT is ___.", "answer": "normal" },
    { "id": 8, "topic": "Scaling", "prompt": "Fluctuations in CLT scale as 1 over sqrt(___).", "answer": "n" },
    { "id": 9, "topic": "Characteristic", "prompt": "CLT proof uses ___ functions.", "answer": "characteristic" },
    { "id": 10, "topic": "Fourier", "prompt": "Characteristic function is the ___ transform of PDF.", "answer": "fourier" },
    { "id": 11, "topic": "Analogy", "prompt": "WLLN says the error bars ___.", "answer": "shrink" },
    { "id": 12, "topic": "Analogy", "prompt": "CLT describes the ___ of the error bars.", "answer": "shape" },
    { "id": 13, "topic": "IID", "prompt": "Standard LLN/CLT requires variables to be ___.", "answer": "iid" },
    { "id": 14, "topic": "Independence", "prompt": "IID stands for Independent and ___ Distributed.", "answer": "identically" },
    { "id": 15, "topic": "Levy", "prompt": "Levy's Continuity Theorem relates convergence of char functions to convergence in ___.", "answer": "distribution" },
    { "id": 16, "topic": "Moment", "prompt": "Characteristic function generates ___.", "answer": "moments" },
    { "id": 17, "topic": "Weak", "prompt": "Strong convergence implies ___ convergence.", "answer": "weak" },
    { "id": 18, "topic": "Probability", "prompt": "Almost sure convergence implies convergence in ___.", "answer": "probability" },
    { "id": 19, "topic": "Distribution", "prompt": "Convergence in probability implies convergence in ___.", "answer": "distribution" },
    { "id": 20, "topic": "CDF", "prompt": "Convergence in distribution is pointwise convergence of ___.", "answer": "cdf" },
    { "id": 21, "topic": "Standard", "prompt": "Standard Normal has mean 0 and variance ___.", "answer": "1" },
    { "id": 22, "topic": "Variance", "prompt": "Sum of variances equals variance of sum if variables are ___.", "answer": "uncorrelated" },
    { "id": 23, "topic": "Bernoulli", "prompt": "LLN explains why frequencies converge to ___.", "answer": "probabilities" },
    { "id": 24, "topic": "Histogram", "prompt": "The histogram of averages looks like a ___ curve.", "answer": "bell" },
    { "id": 25, "topic": "Speed", "prompt": "CLT gives the ___ of convergence.", "answer": "speed" }
  ],
  "day62": [
    { "id": 1, "topic": "Complete", "prompt": "Banach space is a ___ normed vector space.", "answer": "complete" },
    { "id": 2, "topic": "Inner Product", "prompt": "Hilbert space has a norm coming from an ___.", "answer": "inner product" },
    { "id": 3, "topic": "L2", "prompt": "The only Hilbert space among Lp spaces is ___.", "answer": "l2" },
    { "id": 4, "topic": "Cauchy", "prompt": "Complete means every ___ sequence converges.", "answer": "cauchy" },
    { "id": 5, "topic": "Angle", "prompt": "Inner products allow defining ___ and length.", "answer": "angle" },
    { "id": 6, "topic": "Orthogonal", "prompt": "Two vectors are orthogonal if their inner product is ___.", "answer": "0" },
    { "id": 7, "topic": "Norm", "prompt": "Norm of x is sqrt of <x, ___>.", "answer": "x" },
    { "id": 8, "topic": "Bounded", "prompt": "For linear operators, continuous is equivalent to ___.", "answer": "bounded" },
    { "id": 9, "topic": "Dual", "prompt": "Dual space consists of continuous linear ___.", "answer": "functionals" },
    { "id": 10, "topic": "Riesz", "prompt": "In Hilbert space, every functional acts like an ___ product.", "answer": "inner" },
    { "id": 11, "topic": "Analogy", "prompt": "Hilbert Space is like infinite dimensional ___ space.", "answer": "euclidean" },
    { "id": 12, "topic": "Basis", "prompt": "Schauder basis allows infinite linear ___.", "answer": "combinations" },
    { "id": 13, "topic": "Separable", "prompt": "Space is separable if it has a countable ___ subset.", "answer": "dense" },
    { "id": 14, "topic": "Lp", "prompt": "Dual of Lp is Lq where 1/p + 1/q = ___.", "answer": "1" },
    { "id": 15, "topic": "Reflexive", "prompt": "If dual of dual is X, the space is ___.", "answer": "reflexive" },
    { "id": 16, "topic": "Hahn-Banach", "prompt": "Hahn-Banach allows ___ of functionals.", "answer": "extension" },
    { "id": 17, "topic": "Operator", "prompt": "Operator norm is the max ___ on the unit sphere.", "answer": "stretch" },
    { "id": 18, "topic": "Kernel", "prompt": "Kernel of a continuous functional is ___.", "answer": "closed" },
    { "id": 19, "topic": "Projection", "prompt": "Hilbert projection theorem guarantees unique ___ point.", "answer": "closest" },
    { "id": 20, "topic": "Pythagoras", "prompt": "Pythagorean theorem holds in ___ spaces.", "answer": "hilbert" },
    { "id": 21, "topic": "Parallelogram", "prompt": "Norm comes from inner product iff it satisfies ___ law.", "answer": "parallelogram" },
    { "id": 22, "topic": "Sequence", "prompt": "Little l2 is the space of square summable ___.", "answer": "sequences" },
    { "id": 23, "topic": "Fourier", "prompt": "Fourier series is a representation in a ___ basis.", "answer": "hilbert" },
    { "id": 24, "topic": "Parseval", "prompt": "Parseval's identity relates norms of function and ___.", "answer": "coefficients" },
    { "id": 25, "topic": "Unit", "prompt": "The unit ball is compact iff dim is ___.", "answer": "finite" }
  ],
  "day63": [
    { "id": 1, "topic": "Weak", "prompt": "Weak convergence tests xn against every ___.", "answer": "functional" },
    { "id": 2, "topic": "Strong", "prompt": "Strong convergence is convergence in ___.", "answer": "norm" },
    { "id": 3, "topic": "Compact", "prompt": "Unit ball in infinite dim is NOT ___.", "answer": "compact" },
    { "id": 4, "topic": "Alaoglu", "prompt": "Banach-Alaoglu: Unit ball in dual is ___ compact.", "answer": "weak-*" },
    { "id": 5, "topic": "Oscillation", "prompt": "Sin(nx) converges weakly to ___.", "answer": "0" },
    { "id": 6, "topic": "Energy", "prompt": "Weak limit usually has ___ energy (norm) than the limit of norms.", "answer": "less" },
    { "id": 7, "topic": "Lower", "prompt": "Norm is weakly lower semi-___.", "answer": "continuous" },
    { "id": 8, "topic": "Reflexive", "prompt": "In reflexive space, bounded seq has ___ convergent subseq.", "answer": "weakly" },
    { "id": 9, "topic": "Analogy", "prompt": "Weak convergence is like looking at ___ image.", "answer": "pixelated" },
    { "id": 10, "topic": "Finite", "prompt": "In finite dimensions, weak and strong are ___.", "answer": "equivalent" },
    { "id": 11, "topic": "Average", "prompt": "Weak convergence sees ___ values, ignores fast oscillations.", "answer": "average" },
    { "id": 12, "topic": "Distribution", "prompt": "Distributional convergence is even ___ than weak.", "answer": "weaker" },
    { "id": 13, "topic": "PDE", "prompt": "Weak convergence is key for solving ___.", "answer": "pdes" },
    { "id": 14, "topic": "Dual", "prompt": "Weak-* convergence is defined on the ___ space.", "answer": "dual" },
    { "id": 15, "topic": "Borel", "prompt": "Heine-Borel fails in ___ dimensions.", "answer": "infinite" },
    { "id": 16, "topic": "Rellich", "prompt": "Rellich theorems state some embeddings are ___.", "answer": "compact" },
    { "id": 17, "topic": "Compact", "prompt": "Compact operator maps bounded sets to ___ sets.", "answer": "precompact" },
    { "id": 18, "topic": "Spectral", "prompt": "Spectral theorem applies to compact ___ operators.", "answer": "self-adjoint" },
    { "id": 19, "topic": "Fredholm", "prompt": "Fredholm alternative concerns finite dim ___.", "answer": "kernel" },
    { "id": 20, "topic": "Spectrum", "prompt": "Spectrum generalizes the concept of ___.", "answer": "eigenvalues" },
    { "id": 21, "topic": "Point", "prompt": "Point spectrum consists of ___.", "answer": "eigenvalues" },
    { "id": 22, "topic": "Resolvent", "prompt": "Resolvent set is complement of ___.", "answer": "spectrum" },
    { "id": 23, "topic": "Bounded", "prompt": "Bounded operator has ___ spectrum.", "answer": "compact" },
    { "id": 24, "topic": "Unitary", "prompt": "Unitary operators preserve ___.", "answer": "norm" },
    { "id": 25, "topic": "Adjoint", "prompt": "<Tx, y> = <x, T*___>.", "answer": "y" }
  ],
  "day64": [
    { "topic": "Holomorphy", "prompt": "A complex function differentiable at every point in a domain is called ___.", "answer": "holomorphic" },
    { "topic": "CR Equations", "prompt": "For f=u+iv to be holomorphic, partial u/partial x must equal ___.", "answer": "partial v/partial y" },
    { "topic": "CR Equations", "prompt": "For f=u+iv to be holomorphic, partial u/partial y must equal negative ___.", "answer": "partial v/partial x" },
    { "topic": "Analyticity", "prompt": "Does holomorphic imply analytic? (yes/no)", "answer": "yes" },
    { "topic": "Analyticity", "prompt": "Does differentiable once imply infinitely differentiable in complex analysis? (yes/no)", "answer": "yes" },
    { "topic": "Harmonic", "prompt": "The real and imaginary parts of a holomorphic function are ___ functions.", "answer": "harmonic" },
    { "topic": "Integration", "prompt": "The integral of a holomorphic function over a closed curve in a simply connected domain is ___.", "answer": "0" },
    { "topic": "CIF", "prompt": "Cauchy's Integral Formula expresses f(a) using values on the ___.", "answer": "boundary" },
    { "topic": "CIF", "prompt": "The denominator in Cauchy's Integral Formula is ___.", "answer": "z-a" },
    { "topic": "Liouville", "prompt": "A bounded entire function is ___.", "answer": "constant" },
    { "topic": "Preservation", "prompt": "Holomorphic maps preserve ___ (conformal).", "answer": "angles" },
    { "topic": "Path", "prompt": "Contour integration relies on the path being ___.", "answer": "closed" },
    { "topic": "Domain", "prompt": "A region with no holes is called ___ connected.", "answer": "simply" },
    { "topic": "Series", "prompt": "Holomorphic functions can be represented by a ___ series.", "answer": "power" },
    { "topic": "Series", "prompt": "The radius of convergence is the distance to the nearest ___.", "answer": "singularity" },
    { "topic": "Function", "prompt": "e^(z) is periodic with period ___.", "answer": "2pi i" },
    { "topic": "Function", "prompt": "log(z) requires a branch ___ to be single-valued.", "answer": "cut" },
    { "topic": "Integration", "prompt": "The fundamental theorem of calculus ___ to complex contour integrals.", "answer": "applies" },
    { "topic": "Differentiation", "prompt": "Complex differentiation is ___ restrictive than real differentiation.", "answer": "more" },
    { "topic": "Topology", "prompt": "The domain of a holomorphic function is an ___ subset of C.", "answer": "open" },
    { "topic": "Algebra", "prompt": "Complex numbers form a ___.", "answer": "field" },
    { "topic": "Conjugate", "prompt": "Is f(z) = z_bar holomorphic? (yes/no)", "answer": "no" },
    { "topic": "Polynomials", "prompt": "Are all polynomials holomorphic on C? (yes/no)", "answer": "yes" },
    { "topic": "Entire", "prompt": "A function holomorphic on the entire complex plane is called ___.", "answer": "entire" },
    { "topic": "Singularity", "prompt": "A point where f is not holomorphic is a ___.", "answer": "singularity" }
  ],
  "day65": [
    { "topic": "Series", "prompt": "A series representing a function near a singularity, using negative powers, is a ___ series.", "answer": "Laurent" },
    { "topic": "Residue", "prompt": "The coefficient c_-1 in a Laurent series is called the ___.", "answer": "residue" },
    { "topic": "Residue Thm", "prompt": "The integral over a closed loop is 2*pi*i times the sum of ___.", "answer": "residues" },
    { "topic": "Singularity", "prompt": "If limit (z-a)f(z) exists, it is a ___ pole.", "answer": "simple" },
    { "topic": "Singularity", "prompt": "A singularity that can be 'filled in' is called ___.", "answer": "removable" },
    { "topic": "Singularity", "prompt": "e^(1/z) has an ___ singularity at 0.", "answer": "essential" },
    { "topic": "Real Integrals", "prompt": "We can solve real integrals by closing the ___ in the complex plane.", "answer": "contour" },
    { "topic": "Mapping", "prompt": "A bijective holomorphic map is called ___.", "answer": "conformal" },
    { "topic": "Riemann", "prompt": "Any simply connected proper subdomain of C is conformally equivalent to the ___.", "answer": "unit disk" },
    { "topic": "Geometry", "prompt": "Conformal maps preserve ___.", "answer": "angles" },
    { "topic": "Applications", "prompt": "Conformal mapping is useful for solving ___ problems (like potential flow).", "answer": "boundary value" },
    { "topic": "Pole", "prompt": "A pole of order n has a term like 1/(z-a)^___.", "answer": "n" },
    { "topic": "Circle", "prompt": "A Mobius transformation maps circles to ___.", "answer": "circles" },
    { "topic": "Lines", "prompt": "In complex analysis, lines are considered circles of infinite ___.", "answer": "radius" },
    { "topic": "Joukowski", "prompt": "The Joukowski transform maps a circle to an ___.", "answer": "airfoil" },
    { "topic": "Counting", "prompt": "The Argument Principle counts zeros minus ___.", "answer": "poles" },
    { "topic": "Rouche", "prompt": "Rouche's Theorem compares roots of f and f+g if |g| < |f| on the ___.", "answer": "boundary" },
    { "topic": "Calculus", "prompt": "Residue calculus replaces integration with ___.", "answer": "algebra" },
    { "topic": "Expansion", "prompt": "A Laurent series has a principal part and an ___ part.", "answer": "analytic" },
    { "topic": "Residue", "prompt": "Res(f, a) is the coefficient of ___.", "answer": "1/(z-a)" },
    { "topic": "Pole", "prompt": "If f(z) -> infinity as z -> a, then it is a ___.", "answer": "pole" },
    { "topic": "Value", "prompt": "An essential singularity assumes every complex value (except possibly one) ___ often.", "answer": "infinitely" },
    { "topic": "Compact", "prompt": "The Riemann Sphere includes the point at ___.", "answer": "infinity" },
    { "topic": "Stereographic", "prompt": "Projection from the sphere to the plane is is called ___ projection.", "answer": "stereographic" },
    { "topic": "Automorphism", "prompt": "A conformal map from D to D is an ___.", "answer": "automorphism" }
  ],
  "day66": [
    { "topic": "Field", "prompt": "A commutative ring where every non-zero element has an inverse is a ___.", "answer": "field" },
    { "topic": "Order", "prompt": "The number of elements in a finite field is its ___.", "answer": "order" },
    { "topic": "Finite", "prompt": "The order of a finite field must be a power of a ___.", "answer": "prime" },
    { "topic": "Characteristic", "prompt": "The characteristic of GF(p^n) is ___.", "answer": "p" },
    { "topic": "Characteristic", "prompt": "In a field of characteristic 2, 1 + 1 = ___.", "answer": "0" },
    { "topic": "Extension", "prompt": "Field E containing F is called an ___.", "answer": "extension" },
    { "topic": "Degree", "prompt": "The degree [E:F] is the dimension of E as a ___ space over F.", "answer": "vector" },
    { "topic": "Algebraic", "prompt": "An element is algebraic if it is a root of a ___ with coefficients in the base field.", "answer": "polynomial" },
    { "topic": "Splitting", "prompt": "The smallest field containing all roots of a polynomial is the ___ field.", "answer": "splitting" },
    { "topic": "Galois Group", "prompt": "The group of automorphisms of E fixing F is the ___ group.", "answer": "Galois" },
    { "topic": "Solvable", "prompt": "Polynomials are solvable by radicals iff their Galois group is ___.", "answer": "solvable" },
    { "topic": "Quintic", "prompt": "There is no general formula for the roots of a degree ___ polynomial.", "answer": "5" },
    { "topic": "Construction", "prompt": "Doubling the cube is impossible because the cube root of 2 has degree ___.", "answer": "3" },
    { "topic": "Construction", "prompt": "Trisecting the angle is generally ___.", "answer": "impossible" },
    { "topic": "Finite Field", "prompt": "The multiplicative group of a finite field is ___.", "answer": "cyclic" },
    { "topic": "Primitive", "prompt": "A generator of the multiplicative group is called a ___ root.", "answer": "primitive" },
    { "topic": "AES", "prompt": "AES encryption uses arithmetic in GF(___).", "answer": "2^8" },
    { "topic": "Codes", "prompt": "Reed-Solomon codes interpret data as ___ over a finite field.", "answer": "polynomials" },
    { "topic": "Rational", "prompt": "Q is the field of ___ numbers.", "answer": "rational" },
    { "topic": "Real", "prompt": "R is the field of ___ numbers.", "answer": "real" },
    { "topic": "Complex", "prompt": "C is the algebraic closure of ___.", "answer": "R" },
    { "topic": "Algebraic Closure", "prompt": "A field where every polynomial splits is algebraically ___.", "answer": "closed" },
    { "topic": "Automorphism", "prompt": "An isomorphism from a field to itself is an ___.", "answer": "automorphism" },
    { "topic": "Fixed", "prompt": "The set of elements fixed by an automorphism group forms a ___ field.", "answer": "sub" },
    { "topic": "Fundamental Thm", "prompt": "Galois Theory establishes a bijection between subfields and ___.", "answer": "subgroups" }
  ],
  "day67": [
    { "topic": "Module", "prompt": "A module is like a vector space, but scalars come from a ___.", "answer": "ring" },
    { "topic": "Scalar", "prompt": "In a module, scalars do not necessarily have multiplicative ___.", "answer": "inverses" },
    { "topic": "Basis", "prompt": "Do all modules have a basis? (yes/no)", "answer": "no" },
    { "topic": "Free", "prompt": "A module with a basis is called ___.", "answer": "free" },
    { "topic": "Torsion", "prompt": "If r*m = 0 for non-zero r and m, m is a ___ element.", "answer": "torsion" },
    { "topic": "Abelian Group", "prompt": "Every Abelian group is a module over ___.", "answer": "Z" },
    { "topic": "Vector Space", "prompt": "A module over a field is a ___.", "answer": "vector space" },
    { "topic": "Submodule", "prompt": "A subset of a module closed under addition and scalar multiplication is a ___.", "answer": "submodule" },
    { "topic": "Ideal", "prompt": "An ideal in a ring R is an ___ -module.", "answer": "R" },
    { "topic": "Generator", "prompt": "A set that spans the module is a ___ set.", "answer": "generating" },
    { "topic": "Finitely Generated", "prompt": "If a finite set generates M, M is ___ generated.", "answer": "finitely" },
    { "topic": "Classification", "prompt": "Finitely generated modules over a PID are classified by free part and ___ part.", "answer": "torsion" },
    { "topic": "PID", "prompt": "The Fundamental Theorem of Finitely Generated Modules applies to modules over a ___.", "answer": "PID" },
    { "topic": "Z-module", "prompt": "A Z-module is the same as an ___ group.", "answer": "abelian" },
    { "topic": "Torsion-free", "prompt": "A module with no torsion elements is ___.", "answer": "torsion-free" },
    { "topic": "Rank", "prompt": "The size of a maximal linearly independent set is the ___.", "answer": "rank" },
    { "topic": "Linear Map", "prompt": "A homomorphism between modules is a ___ map.", "answer": "linear" },
    { "topic": "Kernel", "prompt": "The kernel of a module homomorphism is a ___.", "answer": "submodule" },
    { "topic": "Quotient", "prompt": "M/N is the ___ module.", "answer": "quotient" },
    { "topic": "Direct Sum", "prompt": "Modules can be combined using ___ sum.", "answer": "direct" },
    { "topic": "Homology", "prompt": "Homology groups in topology are typically ___.", "answer": "modules" },
    { "topic": "Space", "prompt": "Tangent spaces are vector spaces, but sections of the tangent bundle form a ___.", "answer": "module" },
    { "topic": "Ring", "prompt": "R itself is an R-module over ___.", "answer": "itself" },
    { "topic": "Simple", "prompt": "A module with no non-trivial submodules is ___.", "answer": "simple" },
    { "topic": "Semisimple", "prompt": "A module that is a direct sum of simple modules is ___.", "answer": "semisimple" }
  ],
  "day68": [
    { "topic": "Transport", "prompt": "The equation u_t + c u_x = 0 is called the ___ equation.", "answer": "transport" },
    { "topic": "Transport", "prompt": "The solution to the transport equation travels with speed ___.", "answer": "c" },
    { "topic": "Heat", "prompt": "The heat equation follows the form u_t = alpha * ___ u.", "answer": "Delta", "altAnswers": ["nabla^2"] },
    { "topic": "Heat", "prompt": "Rough initial data in the heat equation instantly becomes ___.", "answer": "smooth" },
    { "topic": "Heat", "prompt": "The heat equation implies ___ speed of propagation.", "answer": "infinite" },
    { "topic": "Heat", "prompt": "The Maximum Principle states that heat flows to the ___.", "answer": "boundary" },
    { "topic": "Heat", "prompt": "Is the heat equation time-reversible? (yes/no)", "answer": "no" },
    { "topic": "Wave", "prompt": "The wave equation follows the form u_tt = c^2 * ___ u.", "answer": "Delta" },
    { "topic": "Wave", "prompt": "The wave equation implies ___ speed of propagation.", "answer": "finite" },
    { "topic": "Wave", "prompt": "Does the wave equation smooth out singularities? (yes/no)", "answer": "no" },
    { "topic": "Wave", "prompt": "The wave equation conserves ___.", "answer": "energy" },
    { "topic": "Laplace", "prompt": "The equation Delta u = 0 is the ___ equation.", "answer": "Laplace" },
    { "topic": "Laplace", "prompt": "Solutions to the Laplace equation are called ___ functions.", "answer": "harmonic" },
    { "topic": "Laplace", "prompt": "The value at the center of a harmonic function is the ___ of its neighbors.", "answer": "average" },
    { "topic": "Green's Function", "prompt": "A Green's function is the ___ response of an operator.", "answer": "impulse" },
    { "topic": "Green's Function", "prompt": "L G(x, y) = ___ (symbol).", "answer": "delta" },
    { "topic": "Linear Algebra", "prompt": "In the analogy Lu=f, the Green's function is like the ___ matrix.", "answer": "inverse" },
    { "topic": "Poisson", "prompt": "Delta u = f is called the ___ equation.", "answer": "Poisson" },
    { "topic": "Fundamental", "prompt": "The fundamental solution of the Laplace equation in 3D scale as 1/__.", "answer": "r", "altAnswers": ["|x|"] },
    { "topic": "Images", "prompt": "To enforce boundary conditions, we add 'fake' sources in the Method of ___.", "answer": "Images" },
    { "topic": "Boundary", "prompt": "A ___ value problem (BVP) specifies conditions on the edge of the domain.", "answer": "boundary" },
    { "topic": "Dirichlet", "prompt": "Specifying the value u on the boundary is a ___ condition.", "answer": "Dirichlet" },
    { "topic": "Neumann", "prompt": "Specifying the derivative (flux) on the boundary is a ___ condition.", "answer": "Neumann" },
    { "topic": "Superposition", "prompt": "Linear PDEs allow summing solutions, known as ___.", "answer": "superposition" },
    { "topic": "Energy", "prompt": "For the wave equation, Kinetic + Potential = ___.", "answer": "constant" }
  ],
  "day69": [
    { "topic": "DFA", "prompt": "A DFA is defined by a ___-tuple.", "answer": "5" },
    { "topic": "DFA", "prompt": "In a DFA, the transition function maps Q x Sigma to ___.", "answer": "Q" },
    { "topic": "NFA", "prompt": "Can an NFA be in multiple states at once? (yes/no)", "answer": "yes" },
    { "topic": "Equivalence", "prompt": "Every NFA has an equivalent ___.", "answer": "DFA" },
    { "topic": "Regex", "prompt": "Kleene's Theorem states Regex = DFA = ___.", "answer": "NFA" },
    { "topic": "Kleene Star", "prompt": "The Kleene star operation represents zero or ___ repetitions.", "answer": "more" },
    { "topic": "Pumping Lemma", "prompt": "The Pumping Lemma is used to prove a language is ___ regular.", "answer": "not" },
    { "topic": "Pumping Lemma", "prompt": "For p long enough, w = xyz where |xy| <= p and |y| > ___.", "answer": "0" },
    { "topic": "Non-regular", "prompt": "Is {0^n 1^n} a regular language? (yes/no)", "answer": "no" },
    { "topic": "Closure", "prompt": "Regular languages are closed under intersection and ___ (flipping states).", "answer": "complementation", "altAnswers": ["complement"] },
    { "topic": "CFG", "prompt": "CFGs can describe languages with ___ structures (like (())).", "answer": "nested" },
    { "topic": "PDA", "prompt": "A Pushdown Automaton is an NFA plus a ___.", "answer": "stack" },
    { "topic": "PDA", "prompt": "Context-Free Languages are exactly those recognized by ___.", "answer": "PDAs" },
    { "topic": "Determinism", "prompt": "Are Deterministic PDAs as powerful as Non-deterministic PDAs? (yes/no)", "answer": "no" },
    { "topic": "Ambiguity", "prompt": "A grammar is ___ if a string has two or more parse trees.", "answer": "ambiguous" },
    { "topic": "CNF", "prompt": "In Chomsky Normal Form, rules are A -> BC or A -> ___.", "answer": "a" },
    { "topic": "CYK", "prompt": "The CYK algorithm for parsing CFGs has time complexity O(n^___).", "answer": "3" },
    { "topic": "Stack", "prompt": "A stack follows the ___ (acronym) principle.", "answer": "LIFO" },
    { "topic": "Regular", "prompt": "Is every regular language context-free? (yes/no)", "answer": "yes" },
    { "topic": "Parser", "prompt": "Recursive ___ is a common top-down parsing technique.", "answer": "descent" },
    { "topic": "Grammar", "prompt": "In CFG, S -> 0S1 | epsilon generates {0^n 1^___}.", "answer": "n" },
    { "topic": "PDA", "prompt": "A PDA accepts when it reaches an accept state or its ___ is empty.", "answer": "stack" },
    { "topic": "Alphabet", "prompt": "The finite set of symbols in a language is the ___.", "answer": "alphabet" },
    { "topic": "Empty", "prompt": "A language with no strings is the ___ language.", "answer": "empty" },
    { "topic": "Language", "prompt": "The set of all strings over Sigma is denoted Sigma ___.", "answer": "*" }
  ],
  "day70": [
    { "topic": "TM", "prompt": "A Turing Machine uses an infinite ___ for memory.", "answer": "tape" },
    { "topic": "TM", "prompt": "A TM can read, write, and move its ___ left or right.", "answer": "head" },
    { "topic": "Memory", "prompt": "Unlike a PDA, a TM can move ___ in its memory.", "answer": "backwards", "altAnswers": ["backward", "left"] },
    { "topic": "Acceptance", "prompt": "A TM accepts a string if it enters an ___ state.", "answer": "accept" },
    { "topic": "Loop", "prompt": "A TM that does not accept and does not reject is said to ___.", "answer": "loop" },
    { "topic": "Decidable", "prompt": "A language is decidable if a TM exists that ___ for all inputs.", "answer": "halts" },
    { "topic": "Recognizable", "prompt": "A language is recognizable if a TM accepts strings IN the language but may ___ for others.", "answer": "loop" },
    { "topic": "Halting Problem", "prompt": "The Halting Problem is ___ (decidable/undecidable).", "answer": "undecidability", "altAnswers": ["undecidable"] },
    { "topic": "Thesis", "prompt": "The ___-Turing Thesis states any 'effective computation' can be done by a TM.", "answer": "Church" },
    { "topic": "Universal TM", "prompt": "A TM that can simulate any other TM is called a ___ TM.", "answer": "Universal" },
    { "topic": "Diagonalization", "prompt": "Cantor's ___ method is used to prove the existence of uncountably many languages.", "answer": "diagonalization" },
    { "topic": "Enumerable", "prompt": "A language is recognizable iff an ___ can list its strings.", "answer": "enumerator" },
    { "topic": "Complement", "prompt": "If L and L_bar are recognizable, then L is ___.", "answer": "decidable" },
    { "topic": "Tape", "prompt": "A multi-tape TM can be simulated by a ___-tape TM.", "answer": "single" },
    { "topic": "Nondeterminism", "prompt": "Nondeterministic TMs have the ___ power as Deterministic TMs.", "answer": "same" },
    { "topic": "Configuration", "prompt": "A TM's state + tape content + head position is its ___.", "answer": "configuration" },
    { "topic": "Blank", "prompt": "The special symbol on a TM tape representing no data is the ___.", "answer": "blank" },
    { "topic": "Transducer", "prompt": "A TM that computes a function (gives output) is a ___.", "answer": "transducer" },
    { "topic": "Undecidable", "prompt": "A_tm = {<M, w> | M accepts w} is ___.", "answer": "undecidable" },
    { "topic": "Proof", "prompt": "Undecidability of HALT is usually proven by ___.", "answer": "contradiction" },
    { "topic": "Complexity", "prompt": "Turing Machines provide the foundation for measuring time and ___ complexity.", "answer": "space" },
    { "topic": "Input", "prompt": "Standard TMs start with the ___ followed by infinite blanks.", "answer": "input" },
    { "topic": "Move", "prompt": "Standard transitions look like (q, a) -> (p, b, ___).", "answer": "D", "altAnswers": ["L/R", "direction"] },
    { "topic": "Power", "prompt": "Turing complete systems have the same ___ as TMs.", "answer": "computational power" },
    { "topic": "CS", "prompt": "Modern CPUs are 'Turing machines with ___ memory'.", "answer": "finite" }
  ],
  "day71": [
    { "topic": "Reduction", "prompt": "If A reduces to B (A <= B) and B is decidable, then A is ___.", "answer": "decidable" },
    { "topic": "Reduction", "prompt": "If A reduces to B and A is undecidable, then B is ___.", "answer": "undecidable" },
    { "topic": "Rice's Thm", "prompt": "Rice's Theorem states that any non-trivial ___ of recognizable languages is undecidable.", "answer": "property" },
    { "topic": "Rice's Thm", "prompt": "Property P is non-trivial if some languages have it and some do ___.", "answer": "not" },
    { "topic": "Mapping", "prompt": "A function f from Sigma* to Sigma* such that w in A iff f(w) in B is a ___ reduction.", "answer": "mapping" },
    { "topic": "Reducibility", "prompt": "Reducing A to B means solving A by using a solution for ___.", "answer": "B" },
    { "topic": "PCP", "prompt": "The ___ Correspondence Problem involves matching tiles and is undecidable.", "answer": "Post" },
    { "topic": "All-TM", "prompt": "ALL_tm = {<M> | L(M) = Sigma*} is ___ (decidability).", "answer": "undecidable" },
    { "topic": "Eq-TM", "prompt": "EQ_tm = {<M1, M2> | L(M1) = L(M2)} is ___.", "answer": "undecidable" },
    { "topic": "LBA", "prompt": "A Linear ___ Automaton has tape proportional to input size.", "answer": "Bounded" },
    { "topic": "Decidability", "prompt": "Is the acceptance problem for LBAs (A_lba) decidable? (yes/no)", "answer": "yes" },
    { "topic": "Decidability", "prompt": "Is the emptiness problem for LBAs (E_lba) undecidable? (yes/no)", "answer": "yes" },
    { "topic": "History", "prompt": "Proving undecidability of LBA emptiness uses ___ histories.", "answer": "computation" },
    { "topic": "Reduction", "prompt": "Mapping reducibility is denoted A ___ B.", "answer": "<=m" },
    { "topic": "Rice's Thm", "prompt": "Does Rice's Theorem apply to decidable properties? (yes/no)", "answer": "no" },
    { "topic": "Recognizable", "prompt": "If A reduces to B and B is recognizable, then A is ___.", "answer": "recognizable" },
    { "topic": "Unrecognizable", "prompt": "The complement of the Halting problem is not ___.", "answer": "recognizable" },
    { "topic": "Property", "prompt": "A property of a TM is really a property of the ___ it accepts.", "answer": "language" },
    { "topic": "Empty", "prompt": "Testing if a TM's language is empty (E_tm) is ___.", "answer": "undecidable" },
    { "topic": "Finiteness", "prompt": "Testing if L(M) is finite is ___.", "answer": "undecidable" },
    { "topic": "Total", "prompt": "A TM that halts on all inputs is called ___.", "answer": "total" },
    { "topic": "Hierarchy", "prompt": "The Chomsky hierarchy places TMs (Type 0) at the ___.", "answer": "top" },
    { "topic": "Computability", "prompt": "Reducibility is the primary tool in ___ theory.", "answer": "computability" },
    { "topic": "Simulator", "prompt": "A reduction from A to B often builds a ___ for A using a decider for B.", "answer": "decider" },
    { "topic": "Rice", "prompt": "Is 'Recognizes any string' a non-trivial property? (yes/no)", "answer": "yes" }
  ],
  "day72": [
    { "topic": "P", "prompt": "P is the class of languages decidable in ___ time on a deterministic TM.", "answer": "polynomial" },
    { "topic": "NP", "prompt": "NP is the class of languages decidable in polynomial time on a ___ TM.", "answer": "nondeterministic" },
    { "topic": "Verifier", "prompt": "A language is in NP iff it has a polynomial-time ___.", "answer": "verifier" },
    { "topic": "Certificate", "prompt": "The string 'proof' provided to an NP verifier is called a ___.", "answer": "certificate", "altAnswers": ["witness"] },
    { "topic": "P vs NP", "prompt": "Is it currently proven that P = NP? (yes/no)", "answer": "no" },
    { "topic": "Inclusion", "prompt": "P is a ___ of NP.", "answer": "subset" },
    { "topic": "EXP", "prompt": "The class of languages requiring at most 2^(n^k) time is ___.", "answer": "EXP", "altAnswers": ["EXPTIME"] },
    { "topic": "Polynomial", "prompt": "Complexity theory considers ___ time to be efficient.", "answer": "polynomial" },
    { "topic": "NP", "prompt": "NP stands for ___ Polynomial time.", "answer": "Nondeterministic" },
    { "topic": "Decision", "prompt": "Is {Is this graph connected?} in P? (yes/no)", "answer": "yes" },
    { "topic": "Optimization", "prompt": "P and NP usually deal with ___ problems (Yes/No answer).", "answer": "decision" },
    { "topic": "Poly-Reduction", "prompt": "Polynomial time reducibility is denoted A ___ B.", "answer": "<=p" },
    { "topic": "SAT", "prompt": "The Boolean ___ Problem (SAT) asks if there exists an assignment that makes a formula TRUE.", "answer": "Satisfiability" },
    { "topic": "Hamiltonian", "prompt": "Finding a ___ Path (visits every node once) is in NP.", "answer": "Hamiltonian" },
    { "topic": "Clique", "prompt": "Finding a ___ of size k (fully connected subgraph) is in NP.", "answer": "clique" },
    { "topic": "Subset Sum", "prompt": "Does a subset of numbers sum to zero? This is the ___ problem.", "answer": "subset sum" },
    { "topic": "Checking", "prompt": "Is it true that problems in NP are easy to ___? (yes/no)", "answer": "yes" },
    { "topic": "Solving", "prompt": "The P vs NP question asks if everything easy to check is also easy to ___.", "answer": "solve" },
    { "topic": "co-NP", "prompt": "The class of languages whose complement is in NP is ___.", "answer": "co-NP" },
    { "topic": "Hierarchy", "prompt": "P is contained in NP, which is contained in ___.", "answer": "PSPACE" },
    { "topic": "Verification", "prompt": "In NP, if the answer is YES, there must be a way to ___ it quickly.", "answer": "verify" },
    { "topic": "Sorting", "prompt": "Is sorting n numbers in P? (yes/no)", "answer": "yes" },
    { "topic": "Big O", "prompt": "In P, time complexity is O(n^___).", "answer": "k" },
    { "topic": "Path", "prompt": "Testing if there's a path between nodes (PATH) is in ___.", "answer": "P" },
    { "topic": "Search", "prompt": "Brute-force ___ for NP problems typically takes exponential time.", "answer": "search" }
  ],
  "day73": [
    { "topic": "NP-Hard", "prompt": "A problem is NP-hard if every problem in NP ___ to it in polynomial time.", "answer": "reduces" },
    { "topic": "NP-Complete", "prompt": "A problem is NP-complete if it is in NP and it is ___.", "answer": "NP-hard" },
    { "topic": "Cook-Levin", "prompt": "The Cook-Levin Theorem states that ___ is NP-complete.", "answer": "SAT", "altAnswers": ["Satisfiability"] },
    { "topic": "3SAT", "prompt": "___ is a restricted version of SAT where each clause has exactly 3 literals.", "answer": "3SAT" },
    { "topic": "Reduction", "prompt": "To prove B is NP-complete, we show A <=p B for some and known NP-complete problem ___.", "answer": "A" },
    { "topic": "Clique", "prompt": "3SAT is typically reduced to ___ to show graph problems are hard.", "answer": "clique" },
    { "topic": "Independent Set", "prompt": "A set of nodes with no edges between them is an ___ set.", "answer": "independent" },
    { "topic": "Vertex Cover", "prompt": "A set of nodes that touches every edge is a ___.", "answer": "vertex cover" },
    { "topic": "NPC", "prompt": "If we solve any NP-complete problem in poly-time, then ___ (equation).", "answer": "P=NP" },
    { "topic": "Karp", "prompt": "Richard ___ proved 21 problems were NP-complete in 1972.", "answer": "Karp" },
    { "topic": "Literal", "prompt": "In SAT, a variable or its negation is a ___.", "answer": "literal" },
    { "topic": "Clause", "prompt": "An OR of literals is a ___.", "answer": "clause" },
    { "topic": "CNF", "prompt": "SAT usually assumes ___-Normal Form (AND of ORs).", "answer": "Conjunctive" },
    { "topic": "Subset Sum", "prompt": "Subset Sum is NP-complete. It involves finding a subset that ___ to k.", "answer": "sums" },
    { "topic": "Map", "prompt": "Reductions create a ___ from instances of A to instances of B.", "answer": "mapping" },
    { "topic": "Hardness", "prompt": "Is a problem that is NP-hard necessarily in NP? (yes/no)", "answer": "no" },
    { "topic": "Universal", "prompt": "NP-complete problems are the ___ problems in NP.", "answer": "hardest" },
    { "topic": "Sudoku", "prompt": "General n x n Sudoku is ___.", "answer": "NP-complete" },
    { "topic": "Minesweeper", "prompt": "Minesweeper is ___.", "answer": "NP-complete" },
    { "topic": "Decision", "prompt": "To use NP-completeness, we must phrase the problem as a ___ problem.", "answer": "decision" },
    { "topic": "Transformation", "prompt": "A reduction is a polynomial time ___.", "answer": "transformation" },
    { "topic": "Completeness", "prompt": "If P!=NP, then NP-complete problems require ___ time.", "answer": "exponential" },
    { "topic": "3SAT", "prompt": "Is 2SAT in P? (yes/no)", "answer": "yes" },
    { "topic": "Verifier", "prompt": "All NPC problems have a polynomial time ___.", "answer": "verifier" },
    { "topic": "Certificate", "prompt": "A satisfying assignment for SAT acts as a ___.", "answer": "certificate" }
  ],
  "day74": [
    { "topic": "PSPACE", "prompt": "PSPACE is the class of languages decidable in polynomial ___.", "answer": "space" },
    { "topic": "Savitch", "prompt": "Savitch's Theorem states that NPSPACE = ___.", "answer": "PSPACE" },
    { "topic": "Savitch", "prompt": "Savitch's Theorem shows that Nondeterminism is 'cheaper' for ___ than for Time.", "answer": "space" },
    { "topic": "TQBF", "prompt": "The ___ (acronym) problem is PSPACE-complete.", "answer": "TQBF", "altAnswers": ["True Quantified Boolean Formula"] },
    { "topic": "Quantifiers", "prompt": "TQBF involves universal (forall) and ___ (exists) quantifiers.", "answer": "existential" },
    { "topic": "Games", "prompt": "Finding a winning strategy for many board games is ___ -complete.", "answer": "PSPACE" },
    { "topic": "L", "prompt": "The class for Logarithmic space is denoted ___.", "answer": "L" },
    { "topic": "NL", "prompt": "Nondeterministic Logarithmic space is denoted ___.", "answer": "NL" },
    { "topic": "Inclusion", "prompt": "P is a subset of ___.", "answer": "PSPACE" },
    { "topic": "Inclusion", "prompt": "L is a subset of ___.", "answer": "P" },
    { "topic": "PATH", "prompt": "The PATH problem (reachability in a graph) is complete for ___.", "answer": "NL" },
    { "topic": "Immerman", "prompt": "The Immerman-Szelepcsényi Theorem states that NL = ___.", "answer": "co-NL" },
    { "topic": "Memory", "prompt": "Space complexity refers to the maximum number of ___ cells used.", "answer": "tape" },
    { "topic": "Reusable", "prompt": "Space is more powerful than time because memory can be ___.", "answer": "reused" },
    { "topic": "Time", "prompt": "Any problem in SPACE(f(n)) is in TIME(2^O(___)).", "answer": "f(n)" },
    { "topic": "Poly", "prompt": "PSPACE allows ___ many steps (Time).", "answer": "exponentially", "altAnswers": ["exponential"] },
    { "topic": "Configuration", "prompt": "Space complexity is bounded by the number of distinct ___.", "answer": "configurations" },
    { "topic": "Sublinear", "prompt": "Space L of log(n) is considered ___ space.", "answer": "sublinear" },
    { "topic": "L", "prompt": "Can we check if a string is a palindrome in L space? (yes/no)", "answer": "yes" },
    { "topic": "Log", "prompt": "A log-space TM has a read-only input tape and a ___ work tape.", "answer": "logarithmic" },
    { "topic": "Hierarchy", "prompt": "L <= NL <= P <= NP <= PSPACE <= ___.", "answer": "EXPTIME" },
    { "topic": "Formula", "prompt": "Quantified Boolean Formulas represent games between players 'exists' and ___.", "answer": "forall" },
    { "topic": "Savitch", "prompt": "Savitch's construction uses a divide-and-conquer approach on ___.", "answer": "reachability" },
    { "topic": "Completeness", "prompt": "PSPACE-hard problems are likely harder than ___ problems.", "answer": "NP" },
    { "topic": "CS", "prompt": "Many regex engines use space proportional to the ___ size.", "answer": "input" }
  ],
  "day75": [
    { "topic": "Propositional", "prompt": "___ logic deals with variables that are either TRUE or FALSE.", "answer": "Propositional" },
    { "topic": "FOL", "prompt": "___-Order logic adds quantifiers and predicates.", "answer": "First" },
    { "topic": "Connective", "prompt": "In logic, the symbol 'v' usually represents ___.", "answer": "OR", "altAnswers": ["disjunction"] },
    { "topic": "Connective", "prompt": "In logic, the symbol '^' usually represents ___.", "answer": "AND", "altAnswers": ["conjunction"] },
    { "topic": "Quantifier", "prompt": "The symbol 'forall' is the ___ quantifier.", "answer": "universal" },
    { "topic": "Quantifier", "prompt": "The symbol 'exists' is the ___ quantifier.", "answer": "existential" },
    { "topic": "Model", "prompt": "A mathematical structure that makes all formulas in a set true is a ___.", "answer": "model" },
    { "topic": "Validity", "prompt": "A formula true in ALL models is ___.", "answer": "valid", "altAnswers": ["a tautology"] },
    { "topic": "Gödel", "prompt": "Gödel's ___ Theorem says First-Order Logic is sound and complete.", "answer": "Completeness" },
    { "topic": "Incompleteness", "prompt": "Gödel's First ___ Theorem says any consistent system for arithmetic is incomplete.", "answer": "Incompleteness" },
    { "topic": "Compactness", "prompt": "The ___ Theorem states a set of formulas has a model if every finite subset does.", "answer": "Compactness" },
    { "topic": "Soundness", "prompt": "___ means if |- phi (provable), then |= phi (true in all models).", "answer": "Soundness" },
    { "topic": "Completeness", "prompt": "___ means if |= phi, then |- phi.", "answer": "Completeness" },
    { "topic": "Proof", "prompt": "A sequence of formulas following logical rules is a ___.", "answer": "proof" },
    { "topic": "Peano", "prompt": "___ Arithmetic (PA) provides axioms for natural numbers.", "answer": "Peano" },
    { "topic": "Syntax", "prompt": "The study of formal symbols and proof rules is ___.", "answer": "syntax" },
    { "topic": "Semantics", "prompt": "The study of meaning and truth in models is ___.", "answer": "semantics" },
    { "topic": "Consistent", "prompt": "A system is ___ if it cannot prove both P and not P.", "answer": "consistent" },
    { "topic": "Decidable", "prompt": "Is First-Order Logic decidable? (yes/no)", "answer": "no" },
    { "topic": "Monadic", "prompt": "Logics with only one-variable predicates are called ___.", "answer": "monadic" },
    { "topic": "Scope", "prompt": "The variables a quantifier affects are in its ___.", "answer": "scope" },
    { "topic": "Bound", "prompt": "A variable inside a quantifier's scope is ___.", "answer": "bound" },
    { "topic": "Free", "prompt": "A variable not controlled by a quantifier is ___.", "answer": "free" },
    { "topic": "Model", "prompt": "Model ___ is the study of mathematical structures using logic.", "answer": "theory" },
    { "topic": "CS", "prompt": "SQL queries can be seen as formulas in ___ logic.", "answer": "First-Order", "altAnswers": ["relational"] }
  ],
  "day76": [
    { "topic": "Lambda", "prompt": "Lambda Calculus was developed by Alzonzo ___.", "answer": "Church" },
    { "topic": "Abstraction", "prompt": "A function definition in lambda calculus is an ___.", "answer": "abstraction" },
    { "topic": "Application", "prompt": "Applying a function to an argument is an ___.", "answer": "application" },
    { "topic": "Beta-reduction", "prompt": "The process of 'computing' by substituted arguments into bodies is ___.", "answer": "beta-reduction" },
    { "topic": "Alpha-conversion", "prompt": "Renaming bound variables to avoid name clashes is ___.", "answer": "alpha-conversion" },
    { "topic": "Church Encodings", "prompt": "Representing data types like numbers or booleans using only functions is ___.", "answer": "Church encoding" },
    { "topic": "Zero", "prompt": "In Church numerals, Zero is represented as the function λf.λx.___.", "answer": "x" },
    { "topic": "Successor", "prompt": "The successor function adds ___ to a Church numeral.", "answer": "1" },
    { "topic": "Combinator", "prompt": "A lambda expression with no free variables is a ___.", "answer": "combinator" },
    { "topic": "Y Combinator", "prompt": "The Y combinator is used to implement ___ in lambda calculus.", "answer": "recursion" },
    { "topic": "Fixpoint", "prompt": "The Y combinator finds the ___ of a higher-order function.", "answer": "fixpoint" },
    { "topic": "Turing", "prompt": "Is untyped lambda calculus Turing complete? (yes/no)", "answer": "yes" },
    { "topic": "Church-Rosser", "prompt": "The ___-Rosser Theorem states that the order of reduction doesn't change the final result (confluence).", "answer": "Church" },
    { "topic": "Currying", "prompt": "The technique of representing multi-argument functions as a chain of single-argument functions is ___.", "answer": "currying" },
    { "topic": "Substitution", "prompt": "M[x := N] denotes the ___ of N for x in M.", "answer": "substitution" },
    { "topic": "Identity", "prompt": "The identity function is λx.___.", "answer": "x" },
    { "topic": "Boolean", "prompt": "Church TRUE is λx.λy.x and Church FALSE is λx.λy.___.", "answer": "y" },
    { "topic": "Normal Form", "prompt": "An expression that cannot be reduced further is in ___ form.", "answer": "normal" },
    { "topic": "Untyped", "prompt": "___ Lambda Calculus allows any function to be applied to any argument.", "answer": "Untyped" },
    { "topic": "Typed", "prompt": "___ Lambda Calculus (STLC) prevents self-application and infinite loops.", "answer": "Simply Typed" },
    { "topic": "Curry-Howard", "prompt": "The ___ Correspondence relates programs to proofs.", "answer": "Curry-Howard" },
    { "topic": "Lazy", "prompt": "Haskell uses ___ evaluation, which corresponds to normal order reduction.", "answer": "lazy" },
    { "topic": "Pure", "prompt": "Lambda calculus is a formal system for ___ functional programming.", "answer": "pure" },
    { "topic": "Omega", "prompt": "The term (λx.xx)(λx.xx) is called ___ and it loops forever.", "answer": "Omega" },
    { "topic": "Lambda", "prompt": "The greek letter used to denote abstraction is ___.", "answer": "lambda" }
  ],
  "day77": [
    { "topic": "Hoare Logic", "prompt": "A {P} C {Q} is called a ___ triple.", "answer": "Hoare" },
    { "topic": "Precondition", "prompt": "In {P} C {Q}, P is the ___.", "answer": "precondition" },
    { "topic": "Postcondition", "prompt": "In {P} C {Q}, Q is the ___.", "answer": "postcondition" },
    { "topic": "Invariant", "prompt": "A property that remains true throughout the execution of a loop is a loop ___.", "answer": "invariant" },
    { "topic": "Partial Correctness", "prompt": "___ correctness means if the program terminates, the postcondition holds.", "answer": "Partial" },
    { "topic": "Total Correctness", "prompt": "___ correctness requires both partial correctness and termination.", "answer": "Total" },
    { "topic": "Termination", "prompt": "Proving that a program eventually stops is proving ___.", "answer": "termination" },
    { "topic": "Weakest Precondition", "prompt": "The most general precondition required for a postcondition to hold is the ___ precondition.", "answer": "weakest" },
    { "topic": "SMT Solver", "prompt": "Tools like Z3 that check the satisfiability of logical formulas are ___ solvers.", "answer": "SMT" },
    { "topic": "Model Checking", "prompt": "The technique of exhaustively checking all states of a system is ___ checking.", "answer": "model" },
    { "topic": "Formal Methods", "prompt": "Mathematical techniques for the specification and verification of software are ___ methods.", "answer": "formal" },
    { "topic": "Liveness", "prompt": "A property that says 'something good will eventually happen' is a ___ property.", "answer": "liveness" },
    { "topic": "Safety", "prompt": "A property that says 'nothing bad will ever happen' is a ___ property.", "answer": "safety" },
    { "topic": "Deadlock", "prompt": "A state where two processes are waiting for each other and cannot proceed is ___.", "answer": "deadlock" },
    { "topic": "Race Condition", "prompt": "A bug where the output depends on the timing or sequence of events is a ___ condition.", "answer": "race" },
    { "topic": "Axiomatic", "prompt": "Hoare logic is a form of ___ semantics.", "answer": "axiomatic" },
    { "topic": "Symbolic Execution", "prompt": "Analyzing a program by tracking symbolic values instead of concrete data is ___ execution.", "answer": "symbolic" },
    { "topic": "Abstract Interpretation", "prompt": "Static analysis technique that approximates program semantics using lattices is ___ interpretation.", "answer": "abstract" },
    { "topic": "Separation Logic", "prompt": "An extension of Hoare logic for reasoning about pointers and memory is ___ logic.", "answer": "separation" },
    { "topic": "Linearizability", "prompt": "A correctness criterion for concurrent objects where operations appear instantaneous is ___.", "answer": "linearizability" },
    { "topic": "Assertions", "prompt": "Logical statements embedded in code to check properties at runtime are ___.", "answer": "assertions" },
    { "topic": "Verification", "prompt": "The process of proving that code meets its specification is formal ___.", "answer": "verification" },
    { "topic": "Proof", "prompt": "A sequence of logical steps showing a statement is true is a ___.", "answer": "proof" },
    { "topic": "Loop Guard", "prompt": "The boolean condition that controls the execution of a loop is the loop ___.", "answer": "guard" },
    { "topic": "Logic", "prompt": "Hoare logic uses first-order ___ to describe state properties.", "answer": "logic" }
  ],
  "day78": [
    { "topic": "Entropy", "prompt": "A measure of uncertainty or surprise in a random variable is ___.", "answer": "entropy" },
    { "topic": "Bit", "prompt": "The fundamental unit of information in a binary system is a ___.", "answer": "bit" },
    { "topic": "Channel Capacity", "prompt": "The maximum rate at which information can be transmitted over a noisy channel is ___.", "answer": "capacity" },
    { "topic": "Shannon", "prompt": "Claude ___ is considered the father of information theory.", "answer": "Shannon" },
    { "topic": "Mutual Information", "prompt": "The amount of information one random variable contains about another is ___ information.", "answer": "mutual" },
    { "topic": "KL Divergence", "prompt": "A measure of how one probability distribution differs from a second is ___ divergence.", "answer": "Kullback-Leibler" },
    { "topic": "Huffman Coding", "prompt": "An algorithm for lossless data compression using variable-length codes is ___ coding.", "answer": "Huffman" },
    { "topic": "Redundancy", "prompt": "Information that is duplicate or predictable is called ___.", "answer": "redundancy" },
    { "topic": "Noise", "prompt": "Unwanted interference that distorts a signal is ___.", "answer": "noise" },
    { "topic": "SNR", "prompt": "The ratio of signal power to noise power is ___.", "answer": "SNR" },
    { "topic": "Hamming Distance", "prompt": "The number of positions at which two strings of equal length differ is ___ distance.", "answer": "Hamming" },
    { "topic": "Error Correction", "prompt": "The ability to detect and fix errors in data transmission is error ___.", "answer": "correction" },
    { "topic": "Source Coding", "prompt": "Compressing data from an information source is ___ coding.", "answer": "source" },
    { "topic": "Arithmetic Coding", "prompt": "A compression technique that represents a message as a sub-interval of [0, 1] is ___ coding.", "answer": "arithmetic" },
    { "topic": "Lossless", "prompt": "Compression where the original data can be perfectly reconstructed is ___.", "answer": "lossless" },
    { "topic": "Lossy", "prompt": "Compression that discards some information to save space (e.g., JPEG) is ___.", "answer": "lossy" },
    { "topic": "Sampling", "prompt": "Converting a continuous signal into a discrete sequence is ___.", "answer": "sampling" },
    { "topic": "Nyquist", "prompt": "The minimum sampling rate required to avoid aliasing is the ___ rate.", "answer": "Nyquist" },
    { "topic": "Prefix Code", "prompt": "A code where no keyword is a prefix of another is a ___ code.", "answer": "prefix" },
    { "topic": "LZW", "prompt": "A popular dictionary-based compression algorithm used in GIF and ZIP is ___.", "answer": "LZW" },
    { "topic": "Reed-Solomon", "prompt": "A type of error-correcting code used in CDs, DVDs, and QR codes is ___.", "answer": "Reed-Solomon" },
    { "topic": "Joint Entropy", "prompt": "The entropy of a pair of random variables (X, Y) is ___ entropy.", "answer": "joint" },
    { "topic": "Conditional Entropy", "prompt": "The uncertainty of X given the value of Y is ___ entropy.", "answer": "conditional" },
    { "topic": "BSC", "prompt": "A channel model where each bit is flipped with probability p is the Binary ___ Channel.", "answer": "Symmetric" },
    { "topic": "Kolmogorov", "prompt": "The length of the shortest program that produces a string is its ___ complexity.", "answer": "Kolmogorov" }
  ],
  "day79": [
    { "topic": "Symmetric", "prompt": "Encryption where the same key is used for both encryption and decryption is ___.", "answer": "symmetric" },
    { "topic": "Asymmetric", "prompt": "Encryption using a public key and a private key is ___.", "answer": "asymmetric" },
    { "topic": "RSA", "prompt": "A famous public-key algorithm based on the difficulty of prime factorization is ___.", "answer": "RSA" },
    { "topic": "AES", "prompt": "The standard symmetric encryption algorithm used worldwide is ___.", "answer": "AES" },
    { "topic": "Hash Function", "prompt": "A function that maps data of arbitrary size to a fixed-size bit string is a ___ function.", "answer": "hash" },
    { "topic": "Diffie-Hellman", "prompt": "An algorithm used for secure key exchange over an insecure channel is ___.", "answer": "Diffie-Hellman" },
    { "topic": "Digital Signature", "prompt": "A mathematical scheme for verifying the authenticity of digital messages is a digital ___.", "answer": "signature" },
    { "topic": "SHA-256", "prompt": "A widely used cryptographic hash function that produces a 256-bit hash is ___.", "answer": "SHA-256" },
    { "topic": "Public Key", "prompt": "The key that is shared openly in asymmetric cryptography is the ___ key.", "answer": "public" },
    { "topic": "Private Key", "prompt": "The key that must be kept secret in asymmetric cryptography is the ___ key.", "answer": "private" },
    { "topic": "IV", "prompt": "A random value used with a secret key to ensure similar plaintexts result in different ciphertexts is an ___.", "answer": "IV" },
    { "topic": "Salt", "prompt": "Random data added to a password before hashing to prevent rainbow table attacks is a ___.", "answer": "salt" },
    { "topic": "Modulus", "prompt": "The remainder operation used heavily in cryptographic algorithms like RSA is ___ arithmetic.", "answer": "modulo" },
    { "topic": "Ciphertext", "prompt": "The encrypted form of a message is called ___.", "answer": "ciphertext" },
    { "topic": "Plaintext", "prompt": "The original, unencrypted message is called ___.", "answer": "plaintext" },
    { "topic": "Block Cipher", "prompt": "An encryption algorithm that processes data in fixed-size chunks is a ___ cipher.", "answer": "block" },
    { "topic": "Stream Cipher", "prompt": "An encryption algorithm that processes data bit-by-bit or byte-by-byte is a ___ cipher.", "answer": "stream" },
    { "topic": "ECC", "prompt": "Cryptography based on the algebraic structure of elliptic curves is ___.", "answer": "ECC" },
    { "topic": "Zero-Knowledge", "prompt": "A method where one party can prove to another that they know a secret without revealing it is a ___ proof.", "answer": "zero-knowledge" },
    { "topic": "Brute Force", "prompt": "An attack that tries every possible key until the correct one is found is a ___ attack.", "answer": "brute-force" },
    { "topic": "PKI", "prompt": "A framework for managing digital certificates and public-key encryption is ___.", "answer": "PKI" },
    { "topic": "TLS", "prompt": "The protocol used to secure communications over the internet (HTTPS) is ___.", "answer": "TLS" },
    { "topic": "HMAC", "prompt": "A specific type of message authentication code involving a cryptographic hash function and a secret key is ___.", "answer": "HMAC" },
    { "topic": "Quantum-Resistant", "prompt": "Algorithms designed to be secure against attacks by quantum computers are ___ cryptography.", "answer": "post-quantum" },
    { "topic": "Kerckhoffs", "prompt": "The principle that a system should be secure even if everything about it is known except the key is ___ Principle.", "answer": "Kerckhoffs" }
  ],
  "day80": [
    { "topic": "Qubit", "prompt": "The basic unit of quantum information is a ___.", "answer": "qubit" },
    { "topic": "Superposition", "prompt": "The ability of a quantum system to be in multiple states simultaneously is ___.", "answer": "superposition" },
    { "topic": "Entanglement", "prompt": "The phenomenon where quantum particles become inextricably linked regardless of distance is ___.", "answer": "entanglement" },
    { "topic": "Bloch Sphere", "prompt": "A geometric representation of the state of a single qubit is the ___ sphere.", "answer": "Bloch" },
    { "topic": "Hadamard", "prompt": "The quantum gate that creates superposition is the ___ gate.", "answer": "Hadamard" },
    { "topic": "CNOT", "prompt": "The essential two-qubit gate used for entanglement is the ___ gate.", "answer": "CNOT" },
    { "topic": "Shor's Algorithm", "prompt": "A quantum algorithm for integer factorization that could break RSA is ___.", "answer": "Shor's" },
    { "topic": "Grover's Algorithm", "prompt": "A quantum algorithm for searching an unsorted database with O(sqrt(N)) complexity is ___.", "answer": "Grover's" },
    { "topic": "Measurement", "prompt": "The process that collapses a quantum state into a classical one is ___.", "answer": "measurement" },
    { "topic": "Bra-Ket", "prompt": "The standard notation for quantum states (e.g., |ψ⟩) is ___ notation.", "answer": "bra-ket" },
    { "topic": "Amplitude", "prompt": "The complex numbers whose squares give the probability of measurement outcomes are probability ___.", "answer": "amplitudes" },
    { "topic": "Unitary", "prompt": "Quantum gates are represented by ___ matrices (U*U = I).", "answer": "unitary" },
    { "topic": "X Gate", "prompt": "The quantum equivalent of a NOT gate is the Pauli-___ gate.", "answer": "X" },
    { "topic": "Decoherence", "prompt": "The loss of quantum properties due to interaction with the environment is ___.", "answer": "decoherence" },
    { "topic": "Supremacy", "prompt": "The point where a quantum computer can perform a task impossible for a classical one is quantum ___.", "answer": "supremacy" },
    { "topic": "QFT", "prompt": "The quantum analogue of the Discrete Fourier Transform is the ___.", "answer": "QFT" },
    { "topic": "Teleportation", "prompt": "The process of transferring a quantum state from one location to another using entanglement is quantum ___.", "answer": "teleportation" },
    { "topic": "Bell State", "prompt": "A maximally entangled state of two qubits (like (|00⟩ + |11⟩)/√2) is a ___ state.", "answer": "Bell" },
    { "topic": "No-Cloning", "prompt": "The theorem stating that an arbitrary unknown quantum state cannot be copied is the ___ theorem.", "answer": "no-cloning" },
    { "topic": "Error Correction", "prompt": "Techniques used to protect quantum information from noise are quantum error ___.", "answer": "correction" },
    { "topic": "NISQ", "prompt": "The current era of 'Noisy Intermediate-Scale Quantum' computers is ___.", "answer": "NISQ" },
    { "topic": "QKD", "prompt": "Using quantum mechanics to secure communications (like BB84) is Quantum Key ___.", "answer": "Distribution" },
    { "topic": "Phase", "prompt": "The angle relative to the Z-axis on the Bloch sphere is the ___.", "answer": "phase" },
    { "topic": "Hamiltonian", "prompt": "The operator corresponding to the total energy of a quantum system is the ___.", "answer": "Hamiltonian" },
    { "topic": "Hilbert Space", "prompt": "The mathematical space where quantum states live is a ___ space.", "answer": "Hilbert" }
  ],
  "day81": [
    { "topic": "Convex Set", "prompt": "A set where any line segment between two points is entirely within the set is a ___ set.", "answer": "convex" },
    { "topic": "Convex Function", "prompt": "A function where the area above its graph is a convex set is a ___ function.", "answer": "convex" },
    { "topic": "Global Minimum", "prompt": "In convex programming, any local minimum is also a ___ minimum.", "answer": "global" },
    { "topic": "Lagrange", "prompt": "Methods for finding the local extrema of a function subject to equality constraints use ___ multipliers.", "answer": "Lagrange" },
    { "topic": "KKT", "prompt": "The necessary conditions for a solution to be optimal in nonlinear programming with inequalities are the ___ conditions.", "answer": "KKT" },
    { "topic": "Duality", "prompt": "The relationship between a 'Primal' problem and its corresponding 'Dual' problem is known as ___.", "answer": "duality" },
    { "topic": "Weak Duality", "prompt": "The principle that the dual optimal value is always less than or equal to the primal optimal value is ___ duality.", "answer": "weak" },
    { "topic": "Strong Duality", "prompt": "When the primal and dual optimal values are equal, we have ___ duality.", "answer": "strong" },
    { "topic": "Slater's Condition", "prompt": "A condition involving strictly feasible points that guarantees strong duality is ___ condition.", "answer": "Slater's" },
    { "topic": "Hessian", "prompt": "The matrix of second-order partial derivatives is the ___ matrix.", "answer": "Hessian" },
    { "topic": "PSD", "prompt": "A symmetric matrix whose eigenvalues are all non-negative is Positive ___.", "answer": "Semidefinite" },
    { "topic": "Linear Programming", "prompt": "Optimization where the objective and constraints are all linear is ___ programming.", "answer": "linear" },
    { "topic": "Feasible Region", "prompt": "The set of all points that satisfy all constraints is the ___ region.", "answer": "feasible" },
    { "topic": "Objective Function", "prompt": "The function that we are trying to maximize or minimize is the ___ function.", "answer": "objective" },
    { "topic": "Interior Point", "prompt": "Algorithms that reach the optimal solution by traversing the inside of the feasible region are ___ methods.", "answer": "interior-point" },
    { "topic": "Simplex", "prompt": "The classic algorithm for solving linear programs by moving between vertices of a polytope is the ___ method.", "answer": "simplex" },
    { "topic": "Jensen's Inequality", "prompt": "The theorem f(E[X]) ≤ E[f(X)] for convex f is ___ inequality.", "answer": "Jensen's" },
    { "topic": "Support Vector Machine", "prompt": "A prominent ML algorithm that uses Lagrange duality to find the optimal hyperplane is the ___.", "answer": "SVM" },
    { "topic": "Epigraph", "prompt": "The set of points lying on or above the graph of a function is its ___.", "answer": "epigraph" },
    { "topic": "Subgradient", "prompt": "A generalization of gradients for non-differentiable convex functions is the ___.", "answer": "subgradient" },
    { "topic": "Quadratic Programming", "prompt": "Optimization where the objective is quadratic and constraints are linear is ___ programming.", "answer": "quadratic" },
    { "topic": "Convex Hull", "prompt": "The smallest convex set containing a given set of points is the convex ___.", "answer": "hull" },
    { "topic": "Complementary Slackness", "prompt": "The KKT condition stating that the product of the multiplier and the constraint must be zero is ___.", "answer": "complementary slackness" },
    { "topic": "Optimal", "prompt": "The point(s) in the feasible region that minimize the objective function are the ___ points.", "answer": "optimal" },
    { "topic": "Regularization", "prompt": "Adding a penalty term (like L1 or L2) to an objective function to prevent overfitting is ___.", "answer": "regularization" }
  ],
  "day82": [
    { "topic": "Gradient Descent", "prompt": "A first-order iterative optimization algorithm for finding a local minimum is ___.", "answer": "gradient descent" },
    { "topic": "Learning Rate", "prompt": "The size of the steps taken towards the minimum in gradient descent is the ___.", "answer": "learning rate" },
    { "topic": "SGD", "prompt": "Gradient descent using only one random sample per step is ___ gradient descent.", "answer": "stochastic" },
    { "topic": "Momentum", "prompt": "A technique that accelerates gradient descent by adding a fraction of the previous update to the current one is ___.", "answer": "momentum" },
    { "topic": "ADAM", "prompt": "An optimization algorithm that computes adaptive learning rates for each parameter is ___.", "answer": "ADAM" },
    { "topic": "Convergence", "prompt": "The process of an algorithm approaching the optimal solution over time is ___.", "answer": "convergence" },
    { "topic": "Lipschitz", "prompt": "A function whose gradient changes at a bounded rate is ___ continuous.", "answer": "Lipschitz" },
    { "topic": "Backpropagation", "prompt": "The algorithm used to calculate gradients in neural networks via the chain rule is ___.", "answer": "backpropagation" },
    { "topic": "Saddle Point", "prompt": "A point where the gradient is zero but is not a local extremum is a ___ point.", "answer": "saddle" },
    { "topic": "Vanishing Gradient", "prompt": "A problem in deep networks where gradients become extremely small during backprop is ___ gradients.", "answer": "vanishing" },
    { "topic": "Dropout", "prompt": "A regularization technique where random neurons are disabled during training is ___.", "answer": "dropout" },
    { "topic": "L1 Regularization", "prompt": "Regularization that uses the sum of absolute values (Manhattan norm) and promotes sparsity is ___.", "answer": "L1" },
    { "topic": "L2 Regularization", "prompt": "Regularization that uses the sum of squares (Euclidean norm) is ___.", "answer": "L2" },
    { "topic": "Mini-batch", "prompt": "Training using a small subset of the total dataset at each step is ___ gradient descent.", "answer": "mini-batch" },
    { "topic": "Batch Normalization", "prompt": "A technique to stabilize training by normalizing the inputs to each layer is ___ normalization.", "answer": "batch" },
    { "topic": "Hyperparameter", "prompt": "Parameters set before training (like learning rate) rather than learned are ___.", "answer": "hyperparameters" },
    { "topic": "Proxy", "prompt": "A generalization of gradient descent for non-smooth functions (e.g., L1) is the ___ gradient method.", "answer": "proximal" },
    { "topic": "FISTA", "prompt": "A popular accelerated proximal gradient method is ___.", "answer": "FISTA" },
    { "topic": "Acceleration", "prompt": "Nesterov's ___ Gradient (NAG) is a theoretical improvement over standard momentum.", "answer": "Accelerated" },
    { "topic": "Loss Function", "prompt": "The function that measures the error of a model's prediction is the ___ function.", "answer": "loss" },
    { "topic": "RMSProp", "prompt": "An adaptive learning rate method developed by Geoff Hinton is ___.", "answer": "RMSProp" },
    { "topic": "Decay", "prompt": "Gradually reducing the learning rate over time is called learning rate ___.", "answer": "decay" },
    { "topic": "Feature Scaling", "prompt": "Normalizing the range of independent variables is ___ scaling.", "answer": "feature" },
    { "topic": "Overfitting", "prompt": "A model that learns the noise in training data instead of the underlying pattern is ___.", "answer": "overfitting" },
    { "topic": "Global", "prompt": "In non-convex optimization, we often reach a local minimum rather than the ___ minimum.", "answer": "global" }
  ],
  "day83": [
    { "topic": "Condition Number", "prompt": "The ratio of the largest to smallest singular value of a matrix is its ___ number.", "answer": "condition" },
    { "topic": "Well-conditioned", "prompt": "A problem where small changes in input lead to small changes in output is ___.", "answer": "well-conditioned" },
    { "topic": "Ill-conditioned", "prompt": "A problem where small changes in input lead to large changes in output is ___.", "answer": "ill-conditioned" },
    { "topic": "Machine Epsilon", "prompt": "The smallest positive number ε such that 1 + ε > 1 in floating point is machine ___.", "answer": "epsilon" },
    { "topic": "IEEE 754", "prompt": "The standard format for floating-point arithmetic is ___.", "answer": "IEEE 754" },
    { "topic": "Precision", "prompt": "Double ___ (float64) usually provides about 15-17 significant decimal digits.", "answer": "precision" },
    { "topic": "Machine precision", "prompt": "The relative error caused by rounding to the nearest representable number is ___.", "answer": "machine precision" },
    { "topic": "Relative Error", "prompt": "Error measured as |val - approx| / |val| is ___ error.", "answer": "relative" },
    { "topic": "Absolute Error", "prompt": "Error measured as |val - approx| is ___ error.", "answer": "absolute" },
    { "topic": "Floating Point", "prompt": "Numbers represented as significand * base^exponent are ___ point numbers.", "answer": "floating" },
    { "topic": "Overflow", "prompt": "An error that occurs when a number is too large to be represented is ___.", "answer": "overflow" },
    { "topic": "Underflow", "prompt": "An error that occurs when a number is too small to be represented is ___.", "answer": "underflow" },
    { "topic": "Cancellation", "prompt": "Subtracting two nearly equal large numbers leads to catastrophic ___.", "answer": "cancellation" },
    { "topic": "Pivoting", "prompt": "Swapping rows during Gaussian elimination to improve stability is called ___.", "answer": "pivoting" },
    { "topic": "Numerical Stability", "prompt": "An algorithm that does not amplify errors during execution is numerically ___.", "answer": "stable" },
    { "topic": "Rounding", "prompt": "Replacing a number with the nearest representable value is ___.", "answer": "rounding" },
    { "topic": "Truncation", "prompt": "Error caused by approximating a continuous mathematical process with a finite one is ___ error.", "answer": "truncation" },
    { "topic": "QR Decomposition", "prompt": "Decomposing a matrix into an orthogonal matrix Q and upper triangular matrix R is ___.", "answer": "QR" },
    { "topic": "SVD", "prompt": "The most robust decomposition for analyzing ill-conditioned matrices is ___.", "answer": "SVD" },
    { "topic": "Householder", "prompt": "A linear transformation that reflects a vector about a plane is a ___ reflection.", "answer": "Householder" },
    { "topic": "Givens", "prompt": "A linear transformation that performs a rotation in a 2D plane is a ___ rotation.", "answer": "Givens" },
    { "topic": "Forward Error", "prompt": "The difference between the computed answer and the true answer is ___ error.", "answer": "forward" },
    { "topic": "Backward Error", "prompt": "The smallest change to input that would make the computed result exactly correct is ___ error.", "answer": "backward" },
    { "topic": "Singular", "prompt": "A matrix with a condition number of infinity is ___.", "answer": "singular" },
    { "topic": "Matrix Norm", "prompt": "A measure of the 'size' or 'length' of a matrix is a matrix ___.", "answer": "norm" }
  ],
  "day84": [
    { "topic": "Iterative", "prompt": "Methods that generate a sequence of approximations to reach a solution are ___ methods.", "answer": "iterative" },
    { "topic": "Direct", "prompt": "Methods like Gaussian elimination that reach the exact solution in a finite steps are ___ methods.", "answer": "direct" },
    { "topic": "Residual", "prompt": "The vector r = b - Ax is the ___ vector.", "answer": "residual" },
    { "topic": "Conjugate Gradient", "prompt": "An iterative algorithm for solving large, symmetric, positive-definite linear systems is ___.", "answer": "CG" },
    { "topic": "Jacobi", "prompt": "A linear iterative method where each component is updated using the values from the previous iteration is ___.", "answer": "Jacobi" },
    { "topic": "Gauss-Seidel", "prompt": "A linear iterative method where updates are used as soon as they are available is ___.", "answer": "Gauss-Seidel" },
    { "topic": "Krylov Subspace", "prompt": "The space spanned by {r, Ar, A^2r, ...} is the ___ subspace.", "answer": "Krylov" },
    { "topic": "GMRES", "prompt": "A Krylov subspace method for solving non-symmetric linear systems is ___.", "answer": "GMRES" },
    { "topic": "Preconditioning", "prompt": "Transforming a system into one with a better condition number (M⁻¹Ax = M⁻¹b) is ___.", "answer": "preconditioning" },
    { "topic": "Lanczos", "prompt": "An algorithm for finding the eigenvalues of a symmetric matrix using Krylov subspaces is ___.", "answer": "Lanczos" },
    { "topic": "Arnoldi", "prompt": "An algorithm used in GMRES for constructing an orthogonal basis of a Krylov subspace is ___.", "answer": "Arnoldi" },
    { "topic": "Convergence Rate", "prompt": "The speed at which an iterative method approaches the true solution is the ___.", "answer": "convergence rate" },
    { "topic": "Spectral Radius", "prompt": "The largest absolute value of the eigenvalues of a matrix is the ___.", "answer": "spectral radius" },
    { "topic": "SOR", "prompt": "An improvement on Gauss-Seidel using a relaxation factor ω is ___.", "answer": "SOR" },
    { "topic": "Multigrid", "prompt": "Algorithms that use a hierarchy of grids of different resolutions to solve PDE systems are ___.", "answer": "multigrid" },
    { "topic": "Power Iteration", "prompt": "The simplest algorithm for finding the dominant eigenvalue of a matrix is ___.", "answer": "power iteration" },
    { "topic": "Rayleigh Quotient", "prompt": "A formula used to estimate an eigenvalue given an approximate eigenvector is the ___.", "answer": "Rayleigh quotient" },
    { "topic": "BiCGSTAB", "prompt": "A stabilized version of the Biconjugate Gradient method for non-symmetric systems is ___.", "answer": "BiCGSTAB" },
    { "topic": "QR Algorithm", "prompt": "The standard iterative method for finding all eigenvalues of a dense matrix is the ___.", "answer": "QR algorithm" },
    { "topic": "Fixed Point", "prompt": "An iteration of the form x_{n+1} = g(x_n) is a ___ iteration.", "answer": "fixed point" },
    { "topic": "Sparse", "prompt": "Linear systems where A contains mostly zeros are ___.", "answer": "sparse" },
    { "topic": "Dense", "prompt": "Linear systems where A contains mostly non-zero elements are ___.", "answer": "dense" },
    { "topic": "Stopping Criterion", "prompt": "The condition used to decide when to terminate an iterative method is the ___.", "answer": "stopping criterion" },
    { "topic": "ILU", "prompt": "A common preconditioner based on a simplified LU factorization is Incomplete ___.", "answer": "LU" },
    { "topic": "Tolerance", "prompt": "The maximum allowed error in an iterative solution is the ___.", "answer": "tolerance" }
  ],
  "day85": [
    { "topic": "DFT", "prompt": "Converting a discrete signal from the time domain to the frequency domain is the ___.", "answer": "DFT" },
    { "topic": "FFT", "prompt": "A highly efficient algorithm for computing the DFT in O(n log n) time is the ___.", "answer": "FFT" },
    { "topic": "Complexity", "prompt": "A naive DFT takes O(n^2), but FFT takes O(___).", "answer": "n log n" },
    { "topic": "Cooley-Tukey", "prompt": "The most common algorithm for computing the FFT is the ___ algorithm.", "answer": "Cooley-Tukey" },
    { "topic": "Roots of Unity", "prompt": "Numbers like e^(-i*2π/N) used in the DFT are ___ of unity.", "answer": "roots" },
    { "topic": "Butterfly", "prompt": "The basic computational unit of the FFT is the ___ diagram.", "answer": "butterfly" },
    { "topic": "Bit-reversal", "prompt": "The permutation of indices often required for in-place FFT is ___.", "answer": "bit-reversal" },
    { "topic": "Convolution", "prompt": "The ___ Theorem states that convolution in time is equivalent to multiplication in frequency.", "answer": "Convolution" },
    { "topic": "Inverse FFT", "prompt": "Converting a signal from the frequency domain back to the time domain is the ___.", "answer": "IFFT" },
    { "topic": "Sampling", "prompt": "Recording values of a continuous signal at regular intervals is ___.", "answer": "sampling" },
    { "topic": "Aliasing", "prompt": "An effect where high-frequency signals become indistinguishable from lower-frequency ones due to low sampling is ___.", "answer": "aliasing" },
    { "topic": "Nyquist", "prompt": "The maximum frequency that can be accurately represented at a sampling rate f_s is the ___ frequency (f_s/2).", "answer": "Nyquist" },
    { "topic": "DCT", "prompt": "A transform related to the DFT but using only real numbers (common in JPEG) is the ___.", "answer": "DCT" },
    { "topic": "Wavelet", "prompt": "A transform that provides both time and frequency localization is the ___ transform.", "answer": "wavelet" },
    { "topic": "Haar", "prompt": "The simplest example of a wavelet is the ___ wavelet.", "answer": "Haar" },
    { "topic": "Multiresolution", "prompt": "Wavelet analysis allows for ___ analysis, viewing data at different scales.", "answer": "multiresolution" },
    { "topic": "Spectrogram", "prompt": "A visual representation of the spectrum of frequencies of a signal as it varies with time is a ___.", "answer": "spectrogram" },
    { "topic": "Pure Tone", "prompt": "A single sine wave in the time domain corresponds to a single spike in the ___ domain.", "answer": "frequency" },
    { "topic": "Resolution", "prompt": "The ability to distinguish two close frequencies is the frequency ___.", "answer": "resolution" },
    { "topic": "Zero Padding", "prompt": "Adding zeros to the end of a signal to increase DFT size is ___.", "answer": "zero padding" },
    { "topic": "Circular", "prompt": "The DFT corresponds to ___ convolution rather than linear convolution.", "answer": "circular" },
    { "topic": "Number Theoretic", "prompt": "A transform similar to the FFT but performed in finite fields is the ___ Transform.", "answer": "NTT" },
    { "topic": "Filter", "prompt": "Removing unwanted frequencies from a signal is ___.", "answer": "filtering" },
    { "topic": "Low-pass", "prompt": "A filter that allows low frequencies to pass but blocks high frequencies is a ___ filter.", "answer": "low-pass" },
    { "topic": "Compression", "prompt": "Transforms like DCT and Wavelets are fundamental to data ___.", "answer": "compression" }
  ],
  "day86": [
    { "topic": "Sumset", "prompt": "The sumset A+A is the set of all sums x + y where x, y are in ___.", "answer": "A" },
    { "topic": "Difference Set", "prompt": "A - A = {a - a' | a, a' in A} is known as the ___ set.", "answer": "difference" },
    { "topic": "Doubling", "prompt": "If |A+A| is small relative to |A|, the set A is said to have small ___.", "answer": "doubling" },
    { "topic": "Arithmetic Progression", "prompt": "A set with very small doubling structurally resembles an ___ progression.", "answer": "arithmetic" },
    { "topic": "Randomness", "prompt": "A random set of size N typically has a sumset of size O(___).", "answer": "N^2" },
    { "topic": "Iterated Sumsets", "prompt": "The Plünnecke-Ruzsa inequality provides bounds for ___ sumsets (like 3A, 4A).", "answer": "iterated" },
    { "topic": "Plünnecke-Ruzsa", "prompt": "The inequality |nA - mA| <= (|A+A|/|A|)^(n+m) * |A| is named after Plünnecke and ___.", "answer": "Ruzsa" },
    { "topic": "Freiman's Theorem", "prompt": "Freiman's theorem states that sets with small doubling are subsets of ___ Arithmetic Progressions.", "answer": "Generalized" },
    { "topic": "GAP", "prompt": "GAP is an abbreviation for ___ Arithmetic Progression.", "answer": "Generalized" },
    { "topic": "Roth's Theorem", "prompt": "Roth's theorem guarantees the existence of a 3-term AP in any set with positive ___.", "answer": "density" },
    { "topic": "Density", "prompt": "In Roth's theorem, positive density means the size of A grows ___ with N.", "answer": "linearly" },
    { "topic": "Structure vs Randomness", "prompt": "A major theme in additive combinatorics is the decomposition of objects into a structured part and a ___ part.", "answer": "random" },
    { "topic": "PNT", "prompt": "The Prime Number Theorem states that pi(x) is asymptotically equivalent to x / ___.", "answer": "ln x" },
    { "topic": "Logarithmic Integral", "prompt": "A more accurate approximation for pi(x) than x/ln x is the ___ integral Li(x).", "answer": "logarithmic" },
    { "topic": "Riemann Zeta", "prompt": "The Riemann Zeta function zeta(s) is defined as the sum of n to the power of ___.", "answer": "-s" },
    { "topic": "Analytic Continuation", "prompt": "Extending the domain of zeta(s) beyond Re(s) > 1 is called ___ continuation.", "answer": "analytic" },
    { "topic": "Euler Product", "prompt": "The ___ product formula connects the sum over all integers to a product over all primes.", "answer": "Euler" },
    { "topic": "Factorization", "prompt": "The Euler product is an analytical statement of the Unique ___ Theorem.", "answer": "Factorization" },
    { "topic": "Non-trivial Zeros", "prompt": "The Riemann Hypothesis concerns the location of the ___ zeros of the zeta function.", "answer": "non-trivial" },
    { "topic": "Critical Line", "prompt": "RH states that all non-trivial zeros lie on the line where Re(s) = ___.", "answer": "1/2" },
    { "topic": "Error Term", "prompt": "The location of zeta zeros determines the ___ term in the Prime Number Theorem.", "answer": "error" },
    { "topic": "Pole", "prompt": "The Riemann Zeta function has a simple ___ at s = 1.", "answer": "pole" },
    { "topic": "Dirichlet Series", "prompt": "Series of the form sum a_n / n^s are called ___ series.", "answer": "Dirichlet" },
    { "topic": "L-functions", "prompt": "Generalizations of the zeta function used in number theory are called Dirichlet ___.", "answer": "L-functions" },
    { "topic": "Pseudorandomness", "prompt": "In CS, the 'random' part of a set can often be utilized in the theory of ___.", "answer": "pseudorandomness" }
  ],
  "day87": [
    { "topic": "Harmonic Analysis", "prompt": "The study of decomposing functions into fundamental frequencies is ___ Analysis.", "answer": "Harmonic" },
    { "topic": "Fourier Series", "prompt": "Fourier Series are used for functions defined on the ___ (periodic domain).", "answer": "Circle", "altAnswers": ["T", "torus"] },
    { "topic": "Characters", "prompt": "Continuous homomorphisms from a group G to the Circle are called ___.", "answer": "characters" },
    { "topic": "Pontryagin Duality", "prompt": "The dual group of the integers Z is the ___ T.", "answer": "Circle" },
    { "topic": "LCA Groups", "prompt": "Pontryagin duality applies to Locally Compact ___ Groups.", "answer": "Abelian" },
    { "topic": "Uncertainty Principle", "prompt": "The Uncertainty Principle states a trade-off between localization in time and ___.", "answer": "frequency" },
    { "topic": "Gaussian", "prompt": "Functions that achieve the theoretical minimum uncertainty are ___ functions.", "answer": "Gaussian" },
    { "topic": "Wavelets", "prompt": "Unlike Fourier waves, wavelets are localized in both ___ and frequency.", "answer": "time" },
    { "topic": "Compression", "prompt": "Modern image compression (JPEG 2000) often utilizes the ___ transform.", "answer": "wavelet" },
    { "topic": "Heat Equation", "prompt": "The partial differential equation u_t = Delta u is the ___ equation.", "answer": "heat" },
    { "topic": "Parabolic", "prompt": "The Heat Equation is the prototype for ___ PDEs.", "answer": "parabolic" },
    { "topic": "Smoothing", "prompt": "The property that rough initial data becomes instantly smooth in heat flow is ___.", "answer": "smoothing" },
    { "topic": "Laplacian", "prompt": "The operator Delta (sum of second derivatives) is the ___.", "answer": "Laplacian" },
    { "topic": "Ricci Flow", "prompt": "The 'heat equation' for the metric tensor of a manifold is called ___ flow.", "answer": "Ricci" },
    { "topic": "Poincaré Conjecture", "prompt": "Ricci flow was the central tool in proving the ___ Conjecture.", "answer": "Poincaré" },
    { "topic": "Sphere", "prompt": "Every simply connected, closed 3-manifold is homeomorphic to the 3-___.", "answer": "sphere" },
    { "topic": "Perelman", "prompt": "The mathematician who solved the Poincaré Conjecture is Grigori ___.", "answer": "Perelman" },
    { "topic": "Singularities", "prompt": "In Ricci Flow, regions that pinch or become infinite are called ___.", "answer": "singularities" },
    { "topic": "Surgery", "prompt": "The process of removing singularities to continue the flow is manifold ___.", "answer": "surgery" },
    { "topic": "Laplace-Beltrami", "prompt": "On a curved manifold, the Laplacian is generalized as the Laplace-___ operator.", "answer": "Beltrami" },
    { "topic": "Spectra", "prompt": "'Can you hear the shape of a drum?' refers to the ___ of the Laplacian.", "answer": "spectrum", "altAnswers": ["spectra"] },
    { "topic": "STFT", "prompt": "STFT stands for ___-Time Fourier Transform.", "answer": "Short" },
    { "topic": "Spectrogram", "prompt": "A visual representation of how spectral density varies with time is a ___.", "answer": "spectrogram" },
    { "topic": "Diffusion", "prompt": "Heat flow is a mathematical model for the physical process of ___.", "answer": "diffusion" },
    { "topic": "Edge Detection", "prompt": "In CS/Vision, the Laplacian is frequently used for ___ detection.", "answer": "edge" }
  ],
  "day88": [
    { "topic": "Random Matrix Theory", "prompt": "The study of eigenvalues of matrices with random entries is ___ Matrix Theory.", "answer": "Random" },
    { "topic": "GOE", "prompt": "GOE stands for Gaussian ___ Ensemble.", "answer": "Orthogonal" },
    { "topic": "GUE", "prompt": "GUE stands for Gaussian ___ Ensemble.", "answer": "Unitary" },
    { "topic": "Symmetry", "prompt": "GOE matrices are real and ___.", "answer": "symmetric" },
    { "topic": "Hermitian", "prompt": "GUE matrices are complex and ___.", "answer": "Hermitian" },
    { "topic": "Invariance", "prompt": "GUE is invariant under transformations from the ___ group U(N).", "answer": "unitary" },
    { "topic": "Semicircle Law", "prompt": "For large N, the density of eigenvalues of a random symmetric matrix follows the ___ Semicircle Law.", "answer": "Wigner" },
    { "topic": "Interval", "prompt": "The Wigner Semicircle Law is supported on the interval [___, 2] (when variance is scaled).", "answer": "-2" },
    { "topic": "Repulsion", "prompt": "The phenomenon where eigenvalues avoid being close to each other is level ___.", "answer": "repulsion" },
    { "topic": "Dyson Repulsion", "prompt": "Dyson repulsion states that the probability of two eigenvalues being distance 's' apart goes to ___ as s -> 0.", "answer": "0" },
    { "topic": "Poisson", "prompt": "Unlike eigenvalues, random variables in a ___ process tend to cluster without repulsion.", "answer": "Poisson" },
    { "topic": "Spacing Law", "prompt": "The ___ Law suggests that zeros of the Riemann Zeta function have the same spacing as GUE eigenvalues.", "answer": "Montgomery-Odlyzko" },
    { "topic": "Universality", "prompt": "The fact that eigenvalue statistics are largely independent of the entry distribution is called ___.", "answer": "universality" },
    { "topic": "Physics", "prompt": "Wigner originally used RMT to model the energy levels of atomic ___.", "answer": "nuclei" },
    { "topic": "Scaling", "prompt": "To obtain the semicircle law, entries of the matrix are typically scaled by 1/sqrt(___).", "answer": "N" },
    { "topic": "Moments", "prompt": "The expected value of the trace of A^k yields the k-th ___ of the spectral distribution.", "answer": "moment" },
    { "topic": "Catalan Numbers", "prompt": "The moments of the Wigner semicircle distribution are given by the ___ numbers.", "answer": "Catalan" },
    { "topic": "Tracy-Widom", "prompt": "The distribution describing the fluctuations of the largest eigenvalue is the ___ distribution.", "answer": "Tracy-Widom" },
    { "topic": "Data Science", "prompt": "In CS, RMT is used to distinguish between real signals and random ___ in high-dimensional data.", "answer": "noise" },
    { "topic": "Marchenko-Pastur", "prompt": "The RMT equivalent of the Semicircle Law for rectangular matrices is the ___ distribution.", "answer": "Marchenko-Pastur" },
    { "topic": "Free Probability", "prompt": "The algebraic framework for studying large random matrices is ___ Probability.", "answer": "Free" },
    { "topic": "Moment Method", "prompt": "A standard tool for proving the Wigner law by examining Tr(A^k) is the Method of ___.", "answer": "Moments" },
    { "topic": "Eigenvalue Spacing", "prompt": "RMT predicts that eigenvalues are more ___ distributed than purely random points.", "answer": "uniformly" },
    { "topic": "Bulk", "prompt": "The Semicircle Law describes the ___ of the spectrum, while Tracy-Widom describes the edge.", "answer": "bulk" },
    { "topic": "PCA", "prompt": "RMT provides a null hypothesis for testing the significance of components in ___.", "answer": "PCA" }
  ],
  "day89": [
    { "topic": "Algebraic Geometry", "prompt": "The study of shapes defined by systems of polynomial equations is ___ Geometry.", "answer": "Algebraic" },
    { "topic": "Affine Variety", "prompt": "The set of common zeros of a system of polynomials is an affine ___.", "answer": "variety" },
    { "topic": "Ideal", "prompt": "The set of all polynomials that evaluate to zero on a variety V is the ___ I(V).", "answer": "ideal" },
    { "topic": "Closure", "prompt": "If f is in an ideal, then f times any polynomial g is also in the ___.", "answer": "ideal" },
    { "topic": "Hilbert", "prompt": "Hilbert's ___ establishes a link between geometry (varieties) and algebra (ideals).", "answer": "Nullstellensatz" },
    { "topic": "Zeros", "prompt": "Nullstellensatz is German for 'Theorem of ___'.", "answer": "Zeros" },
    { "topic": "Closed Field", "prompt": "Standard algebraic geometry results require an algebraically ___ field like C.", "answer": "closed" },
    { "topic": "Radical Ideal", "prompt": "The radical of an ideal J, denoted sqrt(J), contains elements where some ___ f^n is in J.", "answer": "power" },
    { "topic": "Groebner Basis", "prompt": "To solve systems of non-linear polynomial equations computationally, we compute a ___ Basis.", "answer": "Groebner" },
    { "topic": "Buchberger", "prompt": "The algorithm used to find a Groebner basis is ___'s Algorithm.", "answer": "Buchberger" },
    { "topic": "Elimination", "prompt": "Groebner bases are a generalization of Gaussian ___ to non-linear polynomials.", "answer": "elimination" },
    { "topic": "Irreducible", "prompt": "A variety that cannot be written as the union of two smaller varieties is ___.", "answer": "irreducible" },
    { "topic": "Coordinate Ring", "prompt": "The quotient ring k[x]/I(V) is the ___ ring of the variety.", "answer": "coordinate" },
    { "topic": "Elliptic Curve", "prompt": "y^2 = x^3 + ax + b defines an ___ curve.", "answer": "elliptic" },
    { "topic": "Zariski", "prompt": "The standard topology where varieties are the closed sets is the ___ topology.", "answer": "Zariski" },
    { "topic": "Scheme", "prompt": "The abstract generalization of varieties introduced by Grothendieck is a ___.", "answer": "scheme" },
    { "topic": "Bézout", "prompt": "___'s Theorem states two plane curves of degree m and n intersect in mn points.", "answer": "Bézout" },
    { "topic": "Spec", "prompt": "The spectrum Spec(R) is the set of all ___ ideals of the ring R.", "answer": "prime" },
    { "topic": "Nilpotent", "prompt": "Schemes allow for the existence of ___ elements (nonzero x where x^n = 0).", "answer": "nilpotent" },
    { "topic": "Kinematics", "prompt": "In robotics, ___ geometry is used to solve inverse kinematics using polynomial constraints.", "answer": "algebraic" },
    { "topic": "Dimension", "prompt": "The Krull dimension of the coordinate ring corresponds to the ___ of the variety.", "answer": "dimension" },
    { "topic": "Monomial Order", "prompt": "Computing a Groebner basis requires choosing a ___ order for terms.", "answer": "monomial" },
    { "topic": "Singular Points", "prompt": "Points on a variety where the Jacobian matrix does not have full rank are ___.", "answer": "singular" },
    { "topic": "Projection", "prompt": "Eliminating variables in a polynomial system represents a geometric ___.", "answer": "projection" },
    { "topic": "Motion Planning", "prompt": "Algebraic constraints are used to define valid configurations in robotic ___ planning.", "answer": "motion" }
  ],
  "day90": [
    { "topic": "PCP", "prompt": "PCP stands for Probabilistically ___ Proofs.", "answer": "Checkable" },
    { "topic": "PCP Theorem", "prompt": "The PCP Theorem states that NP = PCP(log n, ___).", "answer": "1" },
    { "topic": "Verifier", "prompt": "A PCP verifier reads only a ___ number of bits from the proof.", "answer": "constant" },
    { "topic": "Confidence", "prompt": "PCPs allow verification of correctness with high ___ by checking a few random spots.", "answer": "confidence", "altAnswers": ["probability"] },
    { "topic": "Approximation", "prompt": "The PCP theorem implies that many NP-Hard problems are hard to ___.", "answer": "approximate" },
    { "topic": "Optimization", "prompt": "PCP creates a ___ in the objective value between satisfiable and unsatisfiable instances.", "answer": "gap" },
    { "topic": "Interactive Proofs", "prompt": "The class of problems solvable via a multi-round protocol between Prover and Verifier is ___.", "answer": "IP" },
    { "topic": "Power", "prompt": "In the IP model, the Prover is typically assumed to be computationally ___.", "answer": "unbounded", "altAnswers": ["powerful"] },
    { "topic": "IP = PSPACE", "prompt": "The landmark theorem by Shamir states that IP = ___.", "answer": "PSPACE" },
    { "topic": "Zero Knowledge", "prompt": "A proof that reveals nothing but the validity of the theorem is a ___ Proof.", "answer": "Zero Knowledge" },
    { "topic": "Cryptography", "prompt": "Zero Knowledge Proofs are fundamental for privacy in modern ___.", "answer": "cryptography" },
    { "topic": "Ali Baba's Cave", "prompt": "A common analogy for Zero Knowledge is the story of ___ Cave.", "answer": "Ali Baba's" },
    { "topic": "Graph Non-Isomorphism", "prompt": "Proving two graphs are NOT isomorphic is a classic example of a problem in ___.", "answer": "IP" },
    { "topic": "Completeness", "prompt": "A proof system where true statements have valid proofs is said to have ___.", "answer": "completeness" },
    { "topic": "Soundness", "prompt": "A system where false statements are rejected with high probability has ___.", "answer": "soundness" },
    { "topic": "Gap Amplification", "prompt": "A technique used to turn small errors into large gaps in PCP proofs is gap ___.", "answer": "amplification" },
    { "topic": "Max-3SAT", "prompt": "PCP implies that Max-___ is NP-hard to approximate within a certain constant.", "answer": "3SAT" },
    { "topic": "Arthur-Merlin", "prompt": "Interactive proofs where the verifier's coins are public are ___ games.", "answer": "Arthur-Merlin", "altAnswers": ["AM"] },
    { "topic": "zk-SNARKs", "prompt": "In CS, PCPs/ZKP are used to build ___ for blockchain privacy.", "answer": "zk-SNARKs", "altAnswers": ["SNARKs"] },
    { "topic": "Randomness", "prompt": "A PCP verifier must use O(___) random bits to select locations.", "answer": "log n" },
    { "topic": "Interaction", "prompt": "Interactive proofs are more powerful than standard proofs because they allow both randomness and ___.", "answer": "interaction" },
    { "topic": "Public Coin", "prompt": "AM stands for Arthur-Merlin, which are ___ coin protocols.", "answer": "public" },
    { "topic": "Knowledge", "prompt": "The 'K' in zk-SNARK stands for ___.", "answer": "Knowledge" },
    { "topic": "Succinct", "prompt": "The 'S' in zk-SNARK stands for ___, meaning the proof is small.", "answer": "Succinct" },
    { "topic": "Verifier Work", "prompt": "In a good proof system, the work done by the verifier is much ___ than the prover's.", "answer": "less", "altAnswers": ["smaller"] }
  ],
  "day91": [
    { "topic": "T-Shaped", "prompt": "The model of a professional with broad knowledge and deep specialization is ___.", "answer": "T-shaped" },
    { "topic": "Horizontal", "prompt": "In the T-shaped model, the horizontal bar represents ___.", "answer": "breadth" },
    { "topic": "Vertical", "prompt": "In the T-shaped model, the vertical bar represents ___.", "answer": "depth", "altAnswers": ["mastery"] },
    { "topic": "Hamming", "prompt": "Richard Hamming's question: 'What are the most ___ problems in your field?'", "answer": "important" },
    { "topic": "Why Not?", "prompt": "Hamming's follow-up: 'If you aren't working on an important problem, ___?'", "answer": "why not" },
    { "topic": "Boundary", "prompt": "Depth is necessary to reach the ___ of human knowledge.", "answer": "boundary", "altAnswers": ["frontier"] },
    { "topic": "Play", "prompt": "The best research often feels like ___ to you, but looks like work to others.", "answer": "play" },
    { "topic": "Literature", "prompt": "Textbooks are for foundations; ___ are for the cutting edge.", "answer": "papers", "altAnswers": ["research papers"] },
    { "topic": "First Pass", "prompt": "The first pass of a paper focuses on the title, abstract, and ___.", "answer": "introduction", "altAnswers": ["intro"] },
    { "topic": "Second Pass", "prompt": "The second pass focuses on understanding the main results and the ___.", "answer": "figures", "altAnswers": ["diagrams"] },
    { "topic": "Third Pass", "prompt": "In the third pass, you should attempt to ___ the proofs or results yourself.", "answer": "re-derive", "altAnswers": ["recreate"] },
    { "topic": "Deep Work", "prompt": "Cal Newport's term for focus without distraction is ___ Work.", "answer": "Deep" },
    { "topic": "Attention Residue", "prompt": "Switching tasks causes attention ___, which reduces cognitive performance.", "answer": "residue" },
    { "topic": "Feynman Technique", "prompt": "Explaining a concept in simple terms to find understanding gaps is the ___ Technique.", "answer": "Feynman" },
    { "topic": "Research Notebook", "prompt": "Keeping a research ___ helps track evolving ideas and questions.", "answer": "notebook", "altAnswers": ["journal"] },
    { "topic": "Social Activity", "answer": "social", "prompt": "Science is not solitary; it is inherently a ___ activity." },
    { "topic": "Invisible College", "prompt": "The informal network of scholars sharing knowledge is the '___ College'.", "answer": "Invisible" },
    { "topic": "Seminars", "prompt": "Attending ___ is vital for learning the 'folk knowledge' of a field.", "answer": "seminars" },
    { "topic": "Capstone", "prompt": "A significant project that synthesizes your learning is a ___ project.", "answer": "capstone" },
    { "topic": "Proof of Concept", "prompt": "POC stands for Proof of ___.", "answer": "Concept" },
    { "topic": "Small Steps", "prompt": "Consistent daily progress is more effective than waiting for a '___' moment.", "answer": "eureka" },
    { "topic": "Teaching", "prompt": "The ability to ___ a subject is one of the highest forms of mastery.", "answer": "teach" },
    { "topic": "Junior to Senior", "prompt": "In CS, moving from Junior to Senior often involves developing a '___' specialization.", "answer": "vertical" },
    { "topic": "Connection", "prompt": "The more you know broadly, the more likely you are to find a novel ___-disciplinary solution.", "answer": "cross" },
    { "topic": "Practitioner", "prompt": "The ultimate goal of this journey is to transform from a student into a ___.", "answer": "practitioner", "altAnswers": ["researcher"] }
  ],
  "day92": [
    { "topic": "Consistency", "prompt": "Consistency beats ___.", "answer": "intensity" },
    { "topic": "Compound Interest", "prompt": "Improving 1% a day for a year makes you approximately ___ times better.", "answer": "37", "altAnswers": ["37.8"] },
    { "topic": "Skill Atrophy", "prompt": "Declining 1% a day for a year leaves you with only ~___% of your original skill.", "answer": "3" },
    { "topic": "Seinfeld Strategy", "prompt": "The 'Don't break the chain' method is called the ___ Strategy.", "answer": "Seinfeld" },
    { "topic": "The Chain", "prompt": "In the Seinfeld Strategy, the only goal is to not break the ___.", "answer": "chain" },
    { "topic": "Two-Day Rule", "prompt": "To prevent failure, never miss ___ days in a row.", "answer": "two" },
    { "topic": "Paul Graham", "prompt": "Paul Graham's model of scheduling is '___ vs Manager'.", "answer": "Maker" },
    { "topic": "Maker Schedule", "prompt": "Developers and mathematicians require a ___ schedule with long blocks of time.", "answer": "Maker" },
    { "topic": "Manager Schedule", "prompt": "A Manager schedule is typically divided into ___-hour units.", "answer": "one" },
    { "topic": "Interruption", "prompt": "A single ___ can ruin a Maker's entire focused block.", "answer": "interruption", "altAnswers": ["meeting", "distraction"] },
    { "topic": "Atomic Habits", "prompt": "James Clear wrote the book '___ Habits'.", "answer": "Atomic" },
    { "topic": "Willpower", "prompt": "Design your environment so you do not have to rely on ___.", "answer": "willpower" },
    { "topic": "Friction", "prompt": "Reducing ___ makes it easier to perform a desired habit.", "answer": "friction" },
    { "topic": "Negative Friction", "prompt": "Adding friction (like social media blockers) helps stop ___ habits.", "answer": "bad" },
    { "topic": "Deep Work", "prompt": "Uninterrupted blocks of 2-4 hours are called ___ Work.", "answer": "Deep" },
    { "topic": "Digital Hygiene", "prompt": "Turning off phone notifications is an example of digital ___ design.", "answer": "environment" },
    { "topic": "Cramming", "prompt": "The belief that you can catch up on a missed week in a single sprint is the ___ fallacy.", "answer": "intensity", "altAnswers": ["cramming"] },
    { "topic": "Flow", "prompt": "Routines help the brain enter the state of ___, or 'the zone'.", "answer": "Flow" },
    { "topic": "Feedback Loop", "prompt": "Tracking your progress on a calendar creates a visual ___ loop.", "answer": "feedback" },
    { "topic": "Biological Energy", "prompt": "Deep work is usually most effective in the ___ when energy is highest.", "answer": "morning" },
    { "topic": "2-Minute Rule", "prompt": "If a task takes less than 2 minutes, you should ___ it.", "answer": "do" },
    { "topic": "Momentum", "prompt": "Starting is the hardest part; once a habit is formed, it has ___.", "answer": "momentum" },
    { "topic": "Tech Debt", "prompt": "Skipping consistent code maintenance leads to technical ___.", "answer": "debt" },
    { "topic": "Refactoring", "prompt": "The software equivalent of the Seinfeld strategy is consistent ___.", "answer": "refactoring" },
    { "topic": "Discipline", "prompt": "___ is the bridge between goals and accomplishment.", "answer": "Discipline" }
  ],
  "day93": [
    { "topic": "Communication", "prompt": "Mathematics is ___; if a proof is unreadable, it fails regardless of correctness.", "answer": "communication" },
    { "topic": "Nouns", "prompt": "In a well-written proof, equations should be treated as ___ (or parts of speech).", "answer": "nouns" },
    { "topic": "Sentences", "prompt": "You should write proofs in complete ___, not just strings of symbols.", "answer": "sentences" },
    { "topic": "Assumptions", "prompt": "State your assumptions and define your variables at the ___ of the proof.", "answer": "beginning", "altAnswers": ["start"] },
    { "topic": "Setup", "prompt": "The 'Let x be a real number' part of a proof is called the ___.", "answer": "setup" },
    { "topic": "Symbol", "prompt": "The symbol used to end a proof (square) or QED is the '___'.", "answer": "tombstone", "altAnswers": ["square", "box"] },
    { "topic": "Q.E.D.", "prompt": "Q.E.D. stands for 'Quod erat ___'.", "answer": "demonstrandum" },
    { "topic": "Direct Proof", "prompt": "In a ___ proof, you assume P and show that Q follows directly.", "answer": "direct" },
    { "topic": "Contrapositive", "prompt": "To prove P => Q via contrapositive, you show that Not Q => ___.", "answer": "Not P", "altAnswers": ["~P"] },
    { "topic": "Contradiction", "prompt": "In proof by ___, you assume the negation and derive a logical impossibility.", "answer": "contradiction" },
    { "topic": "Induction", "prompt": "Proof by ___ is used to show a statement holds for all natural numbers.", "answer": "induction" },
    { "topic": "Standard", "prompt": "The standard tool for typesetting professional math is ___.", "answer": "LaTeX" },
    { "topic": "Environment", "prompt": "In LaTeX, the command to start a proof is \\begin{___}.", "answer": "proof" },
    { "topic": "Inductive Hypothesis", "prompt": "The assumption that P(k) is true in an induction proof is the Inductive ___.", "answer": "Hypothesis" },
    { "topic": "WLOG", "prompt": "WLOG stands for 'Without Loss of ___'.", "answer": "Generality" },
    { "topic": "IFF", "prompt": "IFF stands for 'If and ___ if'.", "answer": "only" },
    { "topic": "Lemma", "prompt": "A small 'helper' proposition used to prove a larger theorem is a ___.", "answer": "lemma" },
    { "topic": "Corollary", "prompt": "A result that follows immediately from a proven theorem is a ___.", "answer": "corollary" },
    { "topic": "Audience", "prompt": "Always write your proof for a specific ___, such as a peer.", "answer": "audience" },
    { "topic": "Clarity", "prompt": "Avoid using 'clearly' or 'obviously' to hide gaps in your ___.", "answer": "logic", "altAnswers": ["reasoning"] },
    { "topic": "Verification", "prompt": "Computer-assisted proofs often use proof assistants like Coq or ___.", "answer": "Lean" },
    { "topic": "Formal Verification", "prompt": "Proving a program is correct via mathematical logic is ___ Verification.", "answer": "Formal" },
    { "topic": "Narrative", "prompt": "A proof is essentially a ___ that convinces a skeptical reader.", "answer": "narrative", "altAnswers": ["argument"] },
    { "topic": "Precision", "prompt": "___ in your definitions is the foundation of a rigorous proof.", "answer": "Precision" },
    { "topic": "Base Case", "prompt": "The first step in induction is checking the ___ case.", "answer": "base" }
  ],
  "day94": [
    { "topic": "Ideas", "prompt": "'Your mind is for having ideas, not ___ them.'", "answer": "holding", "altAnswers": ["storing"] },
    { "topic": "Second Brain", "prompt": "An external system for organizing knowledge is called a ___ Brain.", "answer": "Second" },
    { "topic": "Atomic", "prompt": "Notes that contain only one single concept are called ___ notes.", "answer": "atomic" },
    { "topic": "Zettelkasten", "prompt": "The German method of 'slip-box' note taking is ___.", "answer": "Zettelkasten" },
    { "topic": "Linking", "prompt": "A key feature of tools like Obsidian is the ability to ___ notes together.", "answer": "link" },
    { "topic": "Lemma", "prompt": "A reusable trick or helper result in math is a ___.", "answer": "lemma" },
    { "topic": "Forgetting Curve", "prompt": "SRS helps combat the Ebbinghaus ___ Curve.", "answer": "Forgetting" },
    { "topic": "Spacing", "prompt": "In Spaced Repetition, the interval between reviews ___ over time.", "answer": "increases", "altAnswers": ["grows"] },
    { "topic": "Anki", "prompt": "The most popular open-source tool for spaced repetition is ___.", "answer": "Anki" },
    { "topic": "Own Words", "prompt": "Always rewrite definitions into your ___ words for better retention.", "answer": "own" },
    { "topic": "Graph", "prompt": "Knowledge is interconnected; a visualization of this is a ___ Graph.", "answer": "Knowledge" },
    { "topic": "Tiago Forte", "prompt": "The PARA method (Projects, Areas, Resources, Archives) was created by Tiago ___.", "answer": "Forte" },
    { "topic": "MOC", "prompt": "MOC stands for Map of ___.", "answer": "Content" },
    { "topic": "Active Recall", "prompt": "The process of pulling information out of your head is ___ recall.", "answer": "active" },
    { "topic": "Interleaving", "prompt": "Switching between different topics while studying is called ___.", "answer": "interleaving" },
    { "topic": "Hoarding", "prompt": "Avoid note-___; only capture what is truly useful.", "answer": "hoarding" },
    { "topic": "Novel Connections", "prompt": "A second brain helps you find ___ connections between different fields.", "answer": "novel", "altAnswers": ["new"] },
    { "topic": "Collector's Fallacy", "prompt": "The feeling that you've learned just because you saved a link is the Collector's ___.", "answer": "Fallacy" },
    { "topic": "Organic Growth", "prompt": "Your notes should grow ___ as your understanding deepens.", "answer": "organically" },
    { "topic": "Future Self", "prompt": "Effective notes are essentially gifts for your ___ self.", "answer": "future" },
    { "topic": "Intuition", "prompt": "The goal of a lemma notebook is to turn logic patterns into ___.", "answer": "intuition" },
    { "topic": "Progressive Summarization", "prompt": "Layering summaries and highlights over time is Progressive ___.", "answer": "Summarization" },
    { "topic": "External Cache", "prompt": "In CS terms, a second brain acts as an external ___ for your knowledge.", "answer": "cache" },
    { "topic": "Bi-directional", "prompt": "Links that work in both directions (backlinks) are ___ links.", "answer": "bi-directional" },
    { "topic": "Scaffolding", "prompt": "An external knowledge system acts as ___ for your biological brain.", "answer": "scaffolding" }
  ],
  "day95": [
    { "topic": "Linear Learning", "prompt": "Strictly ___ learning (reading page 1 to 100) is often inefficient for complex math.", "answer": "linear" },
    { "topic": "Pass 1", "prompt": "In the Two-Pass Model, Pass 1 is nicknamed 'The ___'.", "answer": "Scout" },
    { "topic": "Familiarity", "prompt": "The primary goal of Pass 1 is ___, not deep mastery.", "answer": "familiarity", "altAnswers": ["overview"] },
    { "topic": "Vocabulary", "prompt": "One goal of Pass 1 is to acquire the '___' of the subject.", "answer": "vocabulary" },
    { "topic": "Black Box", "prompt": "Treating a complex concept as a ___ Box means knowing its purpose without its implementation.", "answer": "black" },
    { "topic": "Pass 2", "prompt": "Pass 2 is nicknamed 'The ___'.", "answer": "Engineer" },
    { "topic": "Mastery", "prompt": "The goal of Pass 2 is ___ and deep understanding.", "answer": "mastery" },
    { "topic": "Derivations", "prompt": "Deriving proofs and solving hard problems are typical activities in Pass ___.", "answer": "2" },
    { "topic": "ToC", "prompt": "Reading the Table of ___ first provides a map of the subject.", "answer": "Contents" },
    { "topic": "Dependency", "prompt": "A ___ graph shows which concepts are prerequisites for others.", "answer": "dependency" },
    { "topic": "The 'Why'", "prompt": "Knowing the '___' before the 'How' keeps you motivated through hard proofs.", "answer": "why" },
    { "topic": "Context", "prompt": "Pass 1 gives you the ___ needed to make sense of the details in Pass 2.", "answer": "context" },
    { "topic": "Cognitive Overload", "prompt": "Stalling on a single page for hours is often caused by cognitive ___.", "answer": "overload" },
    { "topic": "Scan", "prompt": "___ reading involves looking for bolded terms and diagrams first.", "answer": "inspectional", "altAnswers": ["skimming", "scan"] },
    { "topic": "Iteration", "prompt": "Learning is ___: you must revisit the same material multiple times to 'dry' the cement.", "answer": "iterative" },
    { "topic": "MVP", "prompt": "In CS, an ___ is the software equivalent of a Pass 1 mental model.", "answer": "MVP" },
    { "topic": "Feynman Technique", "prompt": "The ___ Technique involves explaining a concept to a child to find gaps in your knowledge.", "answer": "Feynman" },
    { "topic": "Satellite View", "prompt": "Pass 1 is like the ___ View on a map; Pass 2 is the street level directions.", "answer": "satellite" },
    { "topic": "Derivation", "prompt": "Only move into Pass 2 when you have a clear ___ of where you are going.", "answer": "map", "altAnswers": ["overview"] },
    { "topic": "Structure", "prompt": "The ___ of knowledge is more important than memorizing individual facts.", "answer": "structure" },
    { "topic": "Speed", "prompt": "Pass 1 should be relatively ___, while Pass 2 is slow.", "answer": "fast", "altAnswers": ["quick"] },
    { "topic": "Keywords", "prompt": "Collecting '___' in Pass 1 helps build the vocabulary of the field.", "answer": "keywords" },
    { "topic": "Skip", "prompt": "If you see a wall of math in Pass 1, you should ___ it.", "answer": "skip", "altAnswers": ["ignore"] },
    { "topic": "Proactive", "prompt": "___ learning involves asking 'What is this trying to do?' during a first pass.", "answer": "active" },
    { "topic": "Synthesis", "prompt": "Pass 2 is about the ___ of concepts into a working skill.", "answer": "synthesis" }
  ],
  "day96": [
    { "topic": "Engineering", "prompt": "In Pass 2, you move from scouting the terrain to '___ the road'.", "answer": "building" },
    { "topic": "Derivation", "prompt": "To truly learn a theorem, you should avoid just reading and instead try to ___ it.", "answer": "re-derive", "altAnswers": ["prove"] },
    { "topic": "Close the Book", "prompt": "The '___ the Book' technique involves proving a result without looking at the text.", "answer": "Close" },
    { "topic": "Neural Connections", "prompt": "The feeling of ___ while stuck is actually your brain building new neural connections.", "answer": "struggle", "altAnswers": ["difficulty"] },
    { "topic": "Standard Example", "prompt": "A ___ example is the most common or straightforward case of a definition.", "answer": "standard" },
    { "topic": "Trivial Example", "prompt": "The simplest possible case (like the identity matrix) is a ___ example.", "answer": "trivial" },
    { "topic": "Pathological Example", "prompt": "A 'weird' case that breaks intuition (like the Cantor Set) is a ___ example.", "answer": "pathological" },
    { "topic": "From Scratch", "prompt": "Implementing an algorithm from ___ is the best way to verify your understanding.", "answer": "scratch" },
    { "topic": "Libraries", "prompt": "Using a library is for production; writing your own version is for ___.", "answer": "learning" },
    { "topic": "Rigor", "prompt": "___ means adhering to strict rules of logic and leaving no gaps in reasoning.", "answer": "rigor" },
    { "topic": "Own Words", "prompt": "Always explain the 'magic steps' of a proof in your own ___.", "answer": "words" },
    { "topic": "Gaps", "prompt": "The Feynman Technique helps you identify ___ in your understanding.", "answer": "gaps" },
    { "topic": "Illusion of Competence", "prompt": "Passive reading often leads to the 'Illusion of ___'.", "answer": "competence", "altAnswers": ["mastery"] },
    { "topic": "Mechanical Steps", "prompt": "In Pass 2, you must verify the mechanical ___ (like algebra) of a proof.", "answer": "steps", "altAnswers": ["calculations"] },
    { "topic": "Operational", "prompt": "The goal of Pass 2 is to make your knowledge durable and ___.", "answer": "operational" },
    { "topic": "The 'Why'", "prompt": "In Pass 2, you must understand ___ every step of the proof is necessary.", "answer": "why" },
    { "topic": "Transfer", "prompt": "___ of knowledge is when you can apply a concept to a new, unseen problem.", "answer": "transfer" },
    { "topic": "Unit Test", "prompt": "In TDL (Test-Driven Learning), a mathematical ___ acts as a unit test for your mind.", "answer": "derivation" },
    { "topic": "Assertions", "prompt": "Treat every logical step in a proof as an ___ that must be verified.", "answer": "assertion" },
    { "topic": "Production", "prompt": "Don't move 'to ___' (the next chapter) until your current understanding passes the derivation test.", "answer": "production" },
    { "topic": "Concrete", "prompt": "Constructing examples helps make abstract definitions more ___.", "answer": "concrete" },
    { "topic": "Mechanical", "prompt": "Checking the ___ steps ensures there are no hidden errors in the derivation.", "answer": "mechanical" },
    { "topic": "Deep Work", "prompt": "Pass 2 requires long blocks of ___ Work to achieve rigor.", "answer": "Deep" },
    { "topic": "Black Boxes", "prompt": "Pass 2 is when you finally open the '___ Boxes' from your first pass.", "answer": "Black" },
    { "topic": "Durable", "prompt": "Knowledge gained through struggle is far more ___ than knowledge gained through reading.", "answer": "durable", "altAnswers": ["permanent"] }
  ],
  "day97": [
    { "topic": "Great Explainer", "prompt": "Richard Feynman was known as the 'Great ___'.", "answer": "Explainer" },
    { "topic": "Audience", "prompt": "According to the Feynman Technique, you should explain a concept to a ___.", "answer": "child", "altAnswers": ["novice", "non-expert"] },
    { "topic": "Gaps", "prompt": "The primary goal of explaining to a child is to identify ___ in your own understanding.", "answer": "gaps" },
    { "topic": "Source Material", "prompt": "When you identify a gap, you must return to the ___ material.", "answer": "source" },
    { "topic": "Simplification", "prompt": "The final step of the Feynman Technique is to ___ and create analogies.", "answer": "simplify" },
    { "topic": "Jargon", "prompt": "Feynman believed using complicated ___ was a sign that you don't understand the concept.", "answer": "jargon" },
    { "topic": "Compression", "prompt": "Jargon is a form of '___ algorithm' for experts.", "answer": "compression" },
    { "topic": "Decompression", "prompt": "Teaching requires you to ___ experts' jargon into simple terms.", "answer": "decompress" },
    { "topic": "Analogy", "prompt": "An ___ bridges the gap between the known and the unknown.", "answer": "analogy" },
    { "topic": "Public Learning", "prompt": "Learning in ___ (e.g. blogging) forces you to be more rigorous.", "answer": "public" },
    { "topic": "StackOverflow", "prompt": "Answering questions on ___ is a great way to practice teaching in public.", "answer": "StackOverflow" },
    { "topic": "Career Capital", "prompt": "Blogging and teaching build your 'Career ___'.", "answer": "Capital" },
    { "topic": "Specialization", "prompt": "After completing this map, you should pick one ___ to dive deep into.", "answer": "specialization" },
    { "topic": "Infinite", "prompt": "Math and CS are ___; this 100-day course is just the beginning.", "answer": "infinite" },
    { "topic": "Review", "prompt": "Periodically ___ the principles of Deep Work and Discipline.", "answer": "review" },
    { "topic": "Action", "prompt": "Knowledge without ___ is useless; go build something!", "answer": "action" },
    { "topic": "Teaching", "prompt": "___ is the highest form of learning.", "answer": "Teaching" },
    { "topic": "Verification", "prompt": "Teaching acts as a final ___ step for your mental model.", "answer": "verification" },
    { "topic": "Feedback", "prompt": "Teaching in public allows others to provide ___ on your mistakes.", "answer": "feedback" },
    { "topic": "Mastery", "prompt": "The ability to explain simply is a proxy for ___.", "answer": "mastery" },
    { "topic": "Intuition", "prompt": "Analogies help build physical ___ for mathematical concepts.", "answer": "intuition" },
    { "topic": "Voltage", "prompt": "A common analogy for ___ is water pressure.", "answer": "voltage" },
    { "topic": "Entropy", "prompt": "A common analogy for ___ is the number of yes/no questions needed to guess a state.", "answer": "entropy" },
    { "topic": "Axes of Rotation", "prompt": "A common analogy for ___ is the axes of rotation.", "answer": "eigenvectors" },
    { "topic": "Curriculum", "prompt": "You have officially reached the end of the sections; now apply what you've learned to the ___ project.", "answer": "capstone" }
  ],
  "day98": [
    { "id": 1, "topic": "Review", "prompt": "Capstone: integrate ___", "answer": ["everything"], "display": "everything" },
    { "id": 2, "topic": "Connect", "prompt": "Connection: link concepts ___", "answer": ["together"], "display": "together" },
    { "id": 3, "topic": "Apply", "prompt": "Application: use knowledge in ___", "answer": ["practice"], "display": "practice" },
    { "id": 4, "topic": "Project", "prompt": "Project: end-to-end ___", "answer": ["implementation"], "display": "implementation" },
    { "id": 5, "topic": "Design", "prompt": "System design: architecture and ___", "answer": ["tradeoffs"], "display": "tradeoffs" },
    { "id": 6, "topic": "Implement", "prompt": "Implementation: translate design to ___", "answer": ["code"], "display": "code" },
    { "id": 7, "topic": "Test", "prompt": "Testing: ensure ___", "answer": ["quality"], "display": "quality" },
    { "id": 8, "topic": "Deploy", "prompt": "Deployment: make ___ available", "answer": ["live"], "display": "live" },
    { "id": 9, "topic": "Monitor", "prompt": "Monitoring: observe ___", "answer": ["behavior"], "display": "behavior" },
    { "id": 10, "topic": "Maintain", "prompt": "Maintenance: keep system ___", "answer": ["running"], "display": "running" },
    { "id": 11, "topic": "Document", "prompt": "Document: record ___", "answer": ["decisions"], "display": "decisions" },
    { "id": 12, "topic": "Present", "prompt": "Presentation: communicate ___", "answer": ["results"], "display": "results" },
    { "id": 13, "topic": "Evaluate", "prompt": "Evaluation: assess ___", "answer": ["success"], "display": "success" },
    { "id": 14, "topic": "Reflect", "prompt": "Reflection: learn from ___", "answer": ["experience"], "display": "experience" },
    { "id": 15, "topic": "Improve", "prompt": "Improvement: make ___", "answer": ["better"], "display": "better" },
    { "id": 16, "topic": "Collaborate", "prompt": "Collaboration: work with ___", "answer": ["team"], "display": "team" },
    { "id": 17, "topic": "Communicate", "prompt": "Communication: share ___", "answer": ["ideas"], "display": "ideas" },
    { "id": 18, "topic": "Learn", "prompt": "Learning: continuous ___", "answer": ["growth"], "display": "growth" },
    { "id": 19, "topic": "Adapt", "prompt": "Adaptation: respond to ___", "answer": ["change"], "display": "change" },
    { "id": 20, "topic": "Persist", "prompt": "Persistence: overcome ___", "answer": ["obstacles"], "display": "obstacles" }
  ],
  "day99": [
    { "id": 1, "topic": "Practice", "prompt": "Practice makes ___", "answer": ["perfect"], "display": "perfect" },
    { "id": 2, "topic": "Foundation", "prompt": "Strong foundation in ___", "answer": ["math"], "display": "math" },
    { "id": 3, "topic": "ThinkCS", "prompt": "Think like computer ___", "answer": ["scientist"], "display": "scientist" },
    { "id": 4, "topic": "Rigor", "prompt": "Mathematical rigor: precise ___", "answer": ["reasoning"], "display": "reasoning" },
    { "id": 5, "topic": "Intuition", "prompt": "Intuition: understanding without ___", "answer": ["proof"], "display": "proof" },
    { "id": 6, "topic": "Balance", "prompt": "Balance theory and ___", "answer": ["practice"], "display": "practice" },
    { "id": 7, "topic": "Explore", "prompt": "Explore: try new ___", "answer": ["things"], "display": "things" },
    { "id": 8, "topic": "Question", "prompt": "Question: ask ___", "answer": ["why"], "display": "why" },
    { "id": 9, "topic": "Build", "prompt": "Build: create ___", "answer": ["projects"], "display": "projects" },
    { "id": 10, "topic": "Share", "prompt": "Share: teach ___", "answer": ["others"], "display": "others" },
    { "id": 11, "topic": "Network", "prompt": "Network: connect with ___", "answer": ["community"], "display": "community" },
    { "id": 12, "topic": "OpenSource", "prompt": "Open source: contribute to ___", "answer": ["projects"], "display": "projects" },
    { "id": 13, "topic": "Research", "prompt": "Research: advance ___", "answer": ["knowledge"], "display": "knowledge" },
    { "id": 14, "topic": "Industry", "prompt": "Industry: solve real ___", "answer": ["problems"], "display": "problems" },
    { "id": 15, "topic": "Ethics", "prompt": "Ethics: consider ___", "answer": ["impact"], "display": "impact" },
    { "id": 16, "topic": "Diversity", "prompt": "Diversity: include ___", "answer": ["perspectives"], "display": "perspectives" },
    { "id": 17, "topic": "Accessibility", "prompt": "Accessibility: design for ___", "answer": ["everyone"], "display": "everyone" },
    { "id": 18, "topic": "Sustainability", "prompt": "Sustainability: long-term ___", "answer": ["thinking"], "display": "thinking" },
    { "id": 19, "topic": "Curiosity", "prompt": "Curiosity: never stop ___", "answer": ["learning"], "display": "learning" },
    { "id": 20, "topic": "Passion", "prompt": "Passion: love what you ___", "answer": ["do"], "display": "do" }
  ],
"day100": [
    { "id": 1, "topic": "Congrats", "prompt": "Congratulations on completing ___ days!", "answer": ["100"], "display": "100" },
    { "id": 2, "topic": "Journey", "prompt": "This is the ___ of a journey", "answer": ["beginning"], "display": "beginning" },
    { "id": 3, "topic": "Foundation", "prompt": "You've built a strong mathematical ___", "answer": ["foundation"], "display": "foundation" },
    { "id": 4, "topic": "Skills", "prompt": "Developed: algebra, calculus, probability, algorithms, ___", "answer": ["ml", "more"], "display": "and more" },
    { "id": 5, "topic": "Ready", "prompt": "Ready for advanced CS ___", "answer": ["courses"], "display": "courses" },
    { "id": 6, "topic": "Apply", "prompt": "Apply knowledge to real ___", "answer": ["problems"], "display": "problems" },
    { "id": 7, "topic": "Continue", "prompt": "Continue learning ___", "answer": ["always"], "display": "always" },
    { "id": 8, "topic": "Contribute", "prompt": "Contribute to the ___", "answer": ["field"], "display": "field" },
    { "id": 9, "topic": "Create", "prompt": "Create something ___", "answer": ["new"], "display": "new" },
    { "id": 10, "topic": "Share", "prompt": "Share your ___", "answer": ["knowledge"], "display": "knowledge" },
    { "id": 11, "topic": "Help", "prompt": "Help ___", "answer": ["others"], "display": "others" },
    { "id": 12, "topic": "Grow", "prompt": "Never stop ___", "answer": ["growing"], "display": "growing" },
    { "id": 13, "topic": "Challenge", "prompt": "Embrace ___", "answer": ["challenges"], "display": "challenges" },
    { "id": 14, "topic": "Fail", "prompt": "Learn from ___", "answer": ["failure"], "display": "failure" },
    { "id": 15, "topic": "Success", "prompt": "Define your own ___", "answer": ["success"], "display": "success" },
    { "id": 16, "topic": "Impact", "prompt": "Make positive ___", "answer": ["impact"], "display": "impact" },
    { "id": 17, "topic": "Dream", "prompt": "Dream ___", "answer": ["big"], "display": "big" },
    { "id": 18, "topic": "Execute", "prompt": "Execute with ___", "answer": ["excellence"], "display": "excellence" },
    { "id": 19, "topic": "Believe", "prompt": "Believe in ___", "answer": ["yourself"], "display": "yourself" },
    { "id": 20, "topic": "Future", "prompt": "The future is ___", "answer": ["yours"], "display": "yours" }
  ]
};