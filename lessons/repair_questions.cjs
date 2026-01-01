const fs = require('fs');
const path = require('path');

const targetPath = path.resolve('questions-data.js');
const fixedPath = path.resolve('questions-data.js');

const day6_content = \`  "day6": [
    {
      "id": 1,
      "topic": "Arithmetic",
      "prompt": "What is the value of 2^10?",
      "answer": ["1024"],
      "display": "1024",
      "generate": function () {
        const p = GenUtils.randomInt(5, 12);
        const n = Math.pow(2, p);
        return {
          prompt: \\\`What is the value of 2^\\\${\\p}?\\\`,
          answer: [n.toString()],
          display: n.toString()
        };
      }
    },
    {
      "id": 2,
      "topic": "Arithmetic",
      "prompt": "What is 15 * 6?",
      "answer": ["90"],
      "display": "90",
      "generate": function () {
        const a = GenUtils.randomInt(11, 25);
        const b = GenUtils.randomInt(3, 9);
        return {
          prompt: \\\`What is \\\${a} * \\\${b}?\\\`,
          answer: [(a * b).toString()],
          display: (a * b).toString()
        };
      }
    },
    {
      "id": 3,
      "topic": "Algebra",
      "prompt": "Simplify: 2x + 3x",
      "answer": ["5x"],
      "display": "5x",
      "generate": function () {
        const a = GenUtils.randomInt(2, 10);
        const b = GenUtils.randomInt(2, 10);
        return {
          prompt: \\\`Simplify: \\\${a}x + \\\${b}x\\\`,
          answer: [\\\`\\\${a + b}x\\\`],
          display: [\\\`\\\${a + b}x\\\`]
        };
      }
    },
    {
      "id": 4,
      "topic": "Algebra",
      "prompt": "If x + 5 = 12, then x = ___",
      "answer": ["7"],
      "display": "7",
      "generate": function () {
        const x = GenUtils.randomInt(1, 20);
        const a = GenUtils.randomInt(1, 10);
        return {
          prompt: \\\`If x + \\\${a} = \\\${x + a}, then x = ___\\\`,
          answer: [x.toString()],
          display: x.toString()
        };
      }
    },
    {
      "id": 5,
      "topic": "Logic",
      "prompt": "NOT True is ___",
      "answer": ["false"],
      "display": "False",
      "generate": function () {
        return {
          prompt: "NOT (NOT True) is ___",
          answer: ["true"],
          display: "True"
        };
      }
    },
    {
      "id": 6,
      "topic": "Logic",
      "prompt": "A implies B is equivalent to (NOT A) ___ B.",
      "answer": ["or"],
      "display": "OR",
      "generate": function () {
        return {
          prompt: "Is 'P -> Q' equivalent to '(!P || Q)'? (Yes/No)",
          answer: ["yes"],
          display: "Yes"
        };
      }
    },
    {
      "id": 7,
      "topic": "Proofs",
      "prompt": "A loop invariant must be true ___ and after each iteration.",
      "answer": ["before"],
      "display": "Before",
      "generate": function () {
        return {
          prompt: "If a loop invariant is true before the loop and after each step, it is true ___ (during/after) the loop.",
          answer: ["after"],
          display: "After"
        };
      }
    },
    {
      "id": 8,
      "topic": "Proofs",
      "prompt": "Proof by ___ assumes the opposite and finds a contradiction.",
      "answer": ["contradiction"],
      "display": "Contradiction",
      "generate": function () {
        return {
          prompt: "To prove P, assuming !P and deriving False is called Proof by ___.",
          answer: ["contradiction"],
          display: "Contradiction"
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
      "prompt": "If $\\\\log_2(n) = 10$, then n = ___.",
      "answer": ["1024"],
      "display": "1024",
      "generate": function () {
        const p = GenUtils.randomInt(5, 12);
        const n = Math.pow(2, p);
        return {
          prompt: \\\`If $\\\\log_2(n) = \\\${\\p}$, then n = ___?\\\`,
          answer: [n.toString()],
          display: n.toString()
        };
      }
    },
    {
      "id": 14,
      "topic": "Logic",
      "prompt": "A truth table for P XOR Q is true ONLY when P and Q have (same/different) values.",
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
      "prompt": "True or False: $P \\\\to Q$ is logically equivalent to $\\\\neg P \\\\lor Q$.",
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
      "prompt": "Function composition f(g(x)) is represented in Unix by the ___ operator.",
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
      "prompt": "Is $P \\\\to Q$ True or False if P is False and Q is True?",
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
      "prompt": "Solve for n: $2^{n-1} = 16$.",
      "answer": ["5"],
      "display": "5",
      "generate": function () {
        const exponents = [3, 4, 5, 6, 7];
        const p = GenUtils.randomSelection(exponents);
        const n = Math.pow(2, p);
        return {
          prompt: \\\`Solve for x: $2^{x-1} = \\\${\\n}$.\\\`,
          answer: [(p + 1).toString()],
          display: (p + 1).toString()
        };
      }
    },
    {
      "id": 28,
      "topic": "Functions",
      "prompt": "What is the inverse of f(x) = x + 10?",
      "answer": ["x-10", "x - 10"],
      "display": "$x-10$",
      "generate": function () {
        const a = GenUtils.randomInt(5, 50);
        return {
          prompt: \\\`What is the inverse of f(x) = x + \\\${\\a}?\\\`,
          answer: [\\\`x-\\\${\\a}\\\`, \\\`x - \\\${\\a}\\\`],
          display: \\\`$x-\\\${\\a}$\`\\\`
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
      "prompt": "What is $\\\\log_{10}(1000)$?",
      "answer": ["3"],
      "display": "3",
      "generate": function () {
        const powers = [2, 3, 4, 5];
        const p = GenUtils.randomSelection(powers);
        const v = Math.pow(10, p);
        return {
          prompt: \\\`What is $\\\\log_{10}(\\\${\\v})$?\\\`,
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
          display: "Generality"
        };
      }
    }
  ]\`;

const day7_content = \`  "day7": [
    {
      "id": 1,
      "topic": "Polynomials",
      "prompt": "A polynomial of degree 2 is called a ___.",
      "answer": ["quadratic"],
      "display": "Quadratic",
      "generate": function () {
        return {
          prompt: "A function $f(x) = ax^2 + bx + c$ is a ___ polynomial.",
          answer: ["quadratic"],
          display: "Quadratic"
        };
      }
    },
    {
      "id": 2,
      "topic": "Polynomials",
      "prompt": "The behavior of a polynomial as $x \\\\to \\\\infty$ is its ___ behavior.",
      "answer": ["end"],
      "display": "End",
      "generate": function () {
        return {
          prompt: "To find the limit of a polynomial as $x$ gets very large, we look at its ___ behavior.",
          answer: ["end"],
          display: "End"
        };
      }
    },
    {
      "id": 3,
      "topic": "Algebra",
      "prompt": "The Fundamental Theorem of Algebra states a degree n polynomial has n ___ roots.",
      "answer": ["complex"],
      "display": "Complex",
      "generate": function () {
        const d = GenUtils.randomInt(3, 10);
        return {
          prompt: \\\`How many complex roots does a degree \\\${\\d} polynomial have?\\\`,
          answer: [d.toString()],
          display: d.toString()
        };
      }
    },
    {
      "id": 4,
      "topic": "CS Mastery",
      "prompt": "Evaluating a polynomial P(x) efficiently in O(n) uses ___ Scheme.",
      "answer": ["horner", "horner's"],
      "display": "Horner's",
      "generate": function () {
        return {
          prompt: "The algorithm for fast polynomial evaluation is ___ Method.",
          answer: ["horner"],
          display: "Horner"
        };
      }
    },
    {
      "id": 5,
      "topic": "Piecewise",
      "prompt": "A function defined by different rules for different intervals is a ___ function.",
      "answer": ["piecewise"],
      "display": "Piecewise",
      "generate": function () {
        return {
          prompt: "In programming, an 'if-else' block implementing a mathematical function creates a ___ function.",
          answer: ["piecewise"],
          display: "Piecewise"
        };
      }
    },
    {
      "id": 6,
      "topic": "Piecewise",
      "prompt": "The 'Absolute Value' function $f(x) = |x|$ is a simple ___ function.",
      "answer": ["piecewise"],
      "display": "Piecewise",
      "generate": function () {
        return {
          prompt: "Which function returns $x$ if $x \\\\ge 0$ and $-x$ if $x < 0$?",
          answer: ["absolute value", "abs"],
          display: "Absolute Value"
        };
      }
    },
    {
      "id": 7,
      "topic": "Algebra",
      "prompt": "If $(x-2)$ is a factor of $P(x)$, then $P(2) = ___$.",
      "answer": ["0"],
      "display": "0",
      "generate": function () {
        const a = GenUtils.randomInt(-10, 10);
        return {
          prompt: \\\`If $(x - \\\${\\a})$ is a factor of $P(x)$, what is $P(\\\${\\a})$?\\\`,
          answer: ["0"],
          display: "0"
        };
      }
    },
    {
      "id": 8,
      "topic": "Polynomials",
      "prompt": "The maximum number of 'turns' in a degree n polynomial graph is ___.",
      "answer": ["n-1", "n - 1"],
      "display": "n-1",
      "generate": function () {
        const d = GenUtils.randomInt(3, 8);
        return {
          prompt: \\\`A degree \\\${\\d} polynomial can have at most how many turning points?\\\`,
          answer: [(d - 1).toString()],
          display: (d - 1).toString()
        };
      }
    },
    {
      "id": 9,
      "topic": "Piecewise",
      "prompt": "The 'Step Function' (Floor) is used in CS for ___ division.",
      "answer": ["integer"],
      "display": "Integer",
      "generate": function () {
        return {
          prompt: "In Python, <code>//</code> implements the ___ function, a type of piecewise step function.",
          answer: ["floor"],
          display: "Floor"
        };
      }
    },
    {
      "id": 10,
      "topic": "CS Connections",
      "prompt": "The ReLU activation function in AI is $f(x) = \\\\max(___, x)$.",
      "answer": ["0"],
      "display": "0",
      "generate": function () {
        return {
          prompt: "ReLU is short for ___ Linear Unit.",
          answer: ["rectified"],
          display: "Rectified"
        };
      }
    },
    {
      "id": 11,
      "topic": "Symmetry",
      "prompt": "A polynomial with only even powers is a(n) ___ function.",
      "answer": ["even"],
      "display": "Even",
      "generate": function () {
        return {
          prompt: "If $f(-x) = f(x)$, the function is ___.",
          answer: ["even"],
          display: "Even"
        };
      }
    },
    {
      "id": 12,
      "topic": "Symmetry",
      "prompt": "A polynomial with only odd powers is a(n) ___ function.",
      "answer": ["odd"],
      "display": "Odd",
      "generate": function () {
        return {
          prompt: "If $f(-x) = -f(x)$, the function is ___.",
          answer: ["odd"],
          display: "Odd"
        };
      }
    },
    {
      "id": 13,
      "topic": "Algebra",
      "prompt": "Find the roots of $x^2 - 9 = 0$.",
      "answer": ["3, -3", "3 and -3", "-3, 3"],
      "display": "±3",
      "generate": function () {
        const a = GenUtils.randomInt(1, 10);
        return {
          prompt: \\\`Find the positive root of $x^2 - \\\${\\a * a} = 0$.\\\`,
          answer: [a.toString()],
          display: a.toString()
        };
      }
    },
    {
      "id": 14,
      "topic": "Piecewise",
      "prompt": "A function is ___ if there are no 'breaks' or 'holes' in its graph.",
      "answer": ["continuous"],
      "display": "Continuous",
      "generate": function () {
        return {
          prompt: "If $\\\\lim_{x \\\\to c} f(x) = f(c)$, the function is ___ at c.",
          answer: ["continuous"],
          display: "Continuous"
        };
      }
    },
    {
      "id": 15,
      "topic": "Definitions",
      "prompt": "The highest power in a polynomial is called its ___.",
      "answer": ["degree"],
      "display": "Degree",
      "generate": function () {
        return {
          prompt: "The 'Order' of a polynomial is more commonly called its ___.",
          answer: ["degree"],
          display: "Degree"
        };
      }
    },
    {
      "id": 16,
      "topic": "CS mastery",
      "prompt": "___ interpolation fits a polynomial through a set of points.",
      "answer": ["lagrange"],
      "display": "Lagrange",
      "generate": function () {
        return {
          prompt: "To find a polynomial passing through $(x_1, y_1), \\\\dots, (x_n, y_n)$, we use ___ interpolation.",
          answer: ["lagrange"],
          display: "Lagrange"
        };
      }
    },
    {
      "id": 17,
      "topic": "Polynomials",
      "prompt": "The coefficient of the highest-degree term is the ___ coefficient.",
      "answer": ["leading"],
      "display": "Leading",
      "generate": function () {
        return {
          prompt: "In $ax^n + \\\\dots + c$, a is the ___ coefficient.",
          answer: ["leading"],
          display: "Leading"
        };
      }
    },
    {
      "id": 18,
      "topic": "Piecewise",
      "prompt": "Piecewise functions are commonly used in ___ to model discrete changes.",
      "answer": ["simulations", "simulation"],
      "display": "Simulations",
      "generate": function () {
        return {
          prompt: "Modeling tax brackets is a classic real-world use of ___ functions.",
          answer: ["piecewise"],
          display: "Piecewise"
        };
      }
    },
    {
      "id": 19,
      "topic": "Algebra",
      "prompt": "The 'Zeros' of a function are the values of x where $f(x) = ___$.",
      "answer": ["0", "zero"],
      "display": "0",
      "generate": function () {
        return {
          prompt: "The x-intercepts of a graph are the ___ of the function.",
          answer: ["zeros", "roots"],
          display: "Zeros"
        };
      }
    },
    {
      "id": 20,
      "topic": "Arithmetic",
      "prompt": "Expand $(x+1)^2$.",
      "answer": ["x^2+2x+1", "x^2 + 2x + 1"],
      "display": "x² + 2x + 1",
      "generate": function () {
        const a = GenUtils.randomInt(1, 5);
        return {
          prompt: \\\`Expand $(x + \\\${\\a})^2$.\\\`,
          answer: [\\\`x^2+\\\${\\2 * a}x+\\\${\\a * a}\\\`, \\\`x^2 + \\\${\\2 * a}x + \\\${\\a * a}\\\`],
          display: \\\`x^2 + \\\${\\2 * a}x + \\\${\\a * a}\\\`
        };
      }
    },
    {
      "id": 21,
      "topic": "CS Connections",
      "prompt": "Polynomials allow us to approximate complex functions using ___ series.",
      "answer": ["taylor"],
      "display": "Taylor",
      "generate": function () {
        return {
          prompt: "The calculus method for turning $\\\\sin(x)$ into a polynomial is the ___ series.",
          answer: ["taylor"],
          display: "Taylor"
        };
      }
    },
    {
      "id": 22,
      "topic": "Algebra",
      "prompt": "Is $f(x) = 1/x$ a polynomial? (Yes/No)",
      "answer": ["no"],
      "display": "No",
      "generate": function () {
        return {
          prompt: "Polynomials must have non-negative ___ exponents.",
          answer: ["integer"],
          display: "Integer"
        };
      }
    },
    {
      "id": 23,
      "topic": "Geometry",
      "prompt": "A degree 1 polynomial $f(x) = mx + b$ graphs as a ___.",
      "answer": ["line", "straight line"],
      "display": "Line",
      "generate": function () {
        return {
          prompt: "A 'Linear' function is a polynomial of degree ___.",
          answer: ["1", "one"],
          display: "1"
        };
      }
    },
    {
      "id": 24,
      "topic": "Complexity",
      "prompt": "The time complexity of evaluating a degree n polynomial naively is $O(___)$.",
      "answer": ["n^2", "n squared"],
      "display": "n²",
      "generate": function () {
        return {
          prompt: "Calculating each power $x^k$ separately and summing takes $O(n^2)$, but Horner's takes $O(___)$.",
          answer: ["n"],
          display: "n"
        };
      }
    },
    {
      "id": 25,
      "topic": "Piecewise",
      "prompt": "A 'Jump Discontinuity' occurs in a piecewise function when the left and right ___ don't match.",
      "answer": ["limits"],
      "display": "Limits",
      "generate": function () {
        return {
          prompt: "If $\\\\lim_{x \\\\to c^-} f(x) \\\\neq \\\\lim_{x \\\\to c^+} f(x)$, there is a ___ discontinuity.",
          answer: ["jump"],
          display: "Jump"
        };
      }
    },
    {
      "id": 26,
      "topic": "Polynomials",
      "prompt": "If the leading coefficient is positive and the degree is even, both ends of the graph go ___.",
      "answer": ["up", "to infinity"],
      "display": "Up",
      "generate": function () {
        return {
          prompt: "If $P(x) = x^4$, as $x \\\\to -\\\\infty$, $P(x) \\\\to ___$.",
          answer: ["infinity", "inf"],
          display: "Infinity"
        };
      }
    },
    {
      "id": 27,
      "topic": "Algebra",
      "prompt": "The 'Rational Root Theorem' provides a list of ___ zeros.",
      "answer": ["potential", "candidate"],
      "display": "Potential",
      "generate": function () {
        return {
          prompt: "To find roots of $2x^2 + 3$, we test factors of the constant over factors of the ___ coefficient.",
          answer: ["leading"],
          display: "Leading"
        };
      }
    },
    {
      "id": 28,
      "topic": "CS mastery",
      "prompt": "Bezier curves used in graphics are defined by ___ polynomials.",
      "answer": ["bernstein"],
      "display": "Bernstein",
      "generate": function () {
        return {
          prompt: "Smooth paths for a mouse cursor or vector art use ___ curves.",
          answer: ["bezier"],
          display: "Bezier"
        };
      }
    },
    {
      "id": 29,
      "topic": "Piecewise",
      "prompt": "The Heaviside Step Function outputs 0 for x < 0 and ___ for x >= 0.",
      "answer": ["1"],
      "display": "1",
      "generate": function () {
        return {
          prompt: "A 'Unit Step' function is also known as the ___ Step Function.",
          answer: ["heaviside"],
          display: "Heaviside"
        };
      }
    },
    {
      "id": 30,
      "topic": "Arithmetic",
      "prompt": "What is the remainder when $x^2 + 1$ is divided by (x - 1)?",
      "answer": ["2"],
      "display": "2",
      "generate": function () {
        const a = GenUtils.randomInt(1, 3);
        const b = GenUtils.randomInt(1, 3);
        return {
          prompt: \\\`Using the Remainder Theorem, what is $P(\\\${\\a})$ if $P(x) = x^2 + \\\${\\b}$?\\\`,
          answer: [(a * a + b).toString()],
          display: (a * a + b).toString()
        };
      }
    },
    {
      "id": 31,
      "topic": "Polynomials",
      "prompt": "A polynomial with 3 terms is a ___.",
      "answer": ["trinomial"],
      "display": "Trinomial",
      "generate": function () {
        return {
          prompt: "A 'Binomial' has 2 terms, a '___' has 3.",
          answer: ["trinomial"],
          display: "Trinomial"
        };
      }
    },
    {
      "id": 32,
      "topic": "Piecewise",
      "prompt": "In a C-style switch statement, the math logic is effectively ___.",
      "answer": ["piecewise"],
      "display": "Piecewise",
      "generate": function () {
        return {
          prompt: "Segmenting data into 'bins' or 'buckets' is a data-science form of ___ definitions.",
          answer: ["piecewise"],
          display: "Piecewise"
        };
      }
    },
    {
      "id": 33,
      "topic": "CS Connections",
      "prompt": "Splines are piecewise ___ used for smooth interpolation.",
      "answer": ["polynomials"],
      "display": "Polynomials",
      "generate": function () {
        return {
          prompt: "A 'Cubic ___' is a popular smooth curve made of degree-3 pieces.",
          answer: ["spline"],
          display: "Spline"
        };
      }
    },
    {
      "id": 34,
      "topic": "Algebra",
      "prompt": "Complex roots of real polynomials always come in ___ pairs.",
      "answer": ["conjugate"],
      "display": "Conjugate",
      "generate": function () {
        return {
          prompt: "If $2 + 3i$ is a root, then $2 - 3i$ is also a root by the Complex ___ Theorem.",
          answer: ["conjugate"],
          display: "Conjugate"
        };
      }
    },
    {
      "id": 35,
      "topic": "Symmetry",
      "prompt": "Odd functions have rotational symmetry about the ___.",
      "answer": ["origin"],
      "display": "Origin",
      "generate": function () {
        return {
          prompt: "Even functions are symmetric about the y-axis.",
          answer: ["y"],
          display: "y"
        };
      }
    },
    {
      "id": 36,
      "topic": "Piecewise",
      "prompt": "The signum function sgn(x) returns ___ for x > 0.",
      "answer": ["1"],
      "display": "1",
      "generate": function () {
        return {
          prompt: "The signum function returns ___ for x < 0.",
          answer: ["-1"],
          display: "-1"
        };
      }
    },
    {
      "id": 37,
      "topic": "Gotcha",
      "prompt": "Is $\\\\sqrt{x}$ a polynomial? (Yes/No)",
      "answer": ["no"],
      "display": "No (Power is 1/2)",
      "generate": function () {
        return {
          prompt: "Polynomials cannot have variables inside a ___.",
          answer: ["radical", "square root"],
          display: "Radical"
        };
      }
    },
    {
      "id": 38,
      "topic": "CS mastery",
      "prompt": "The Fast Fourier Transform evaluates polynomials at roots of ___.",
      "answer": ["unity"],
      "display": "Unity",
      "generate": function () {
        return {
          prompt: "FFT reduces polynomial multiplication from O(n^2) to O(___).",
          answer: ["n log n", "nlogn"],
          display: "n log n"
        };
      }
    },
    {
      "id": 39,
      "topic": "Arithmetic",
      "prompt": "What is the degree of P(x) = (x^2 + 1)(x^3 - 1)?",
      "answer": ["5"],
      "display": "5",
      "generate": function () {
        const a = GenUtils.randomInt(1, 4);
        const b = GenUtils.randomInt(1, 4);
        return {
          prompt: \\\`What is the degree of $(x^\\\${\\a} + 1)(x^\\\${\\b} + 1)$?\\\`,
          answer: [(a + b).toString()],
          display: (a + b).toString()
        };
      }
    },
    {
      "id": 40,
      "topic": "Summary",
      "prompt": "Polynomials and Piecewise functions are the 'Prims' (primitives) of mathematical ___.",
      "answer": ["modeling"],
      "display": "Modeling"
    }
  ]\`;

try {
    const rawContent = fs.readFileSync(targetPath, 'utf8');
    const lines = rawContent.split('\\n');

    let blocks = {};
    let currentDay = null;
    let startLine = 0;

    console.log(\`Analyzing \${targetPath}...\`);

    lines.forEach((line, i) => {
        const match = line.match(/^\\s+"(day\\d+)": \\[/); // Corrected regex
        if (match) {
            currentDay = match[1];
            startLine = i;
        }
        
        if (line.match(/^\\s+\\],/) && currentDay) {
            const blockLines = lines.slice(startLine, i + 1);
            if (!blocks[currentDay] || blockLines.length > blocks[currentDay].length) {
                blocks[currentDay] = blockLines;
            }
            currentDay = null;
        }
    });

    console.log("Applying Gold Standard for Day 6 and Day 7...");
    blocks['day6'] = day6_content.split('\\n');
    blocks['day7'] = day7_content.split('\\n');

    const dayOrder = Object.keys(blocks).sort((a, b) => {
        return parseInt(a.replace('day', '')) - parseInt(b.replace('day', ''));
    });

    console.log(\`Found \${dayOrder.length} unique days.\`);

    let output = [
        '// Central Store for Curriculum Questions',
        '// Used for individual lessons and the global review/exam systems.',
        '',
        'window.QUESTIONS_DATA = {'
    ];

    dayOrder.forEach((day, index) => {
        let blockText = blocks[day].join('\\n');
        
        if (index < dayOrder.length - 1) {
            if (!blockText.trim().endsWith(',')) {
                blockText = blockText.trim() + ',';
            }
        } else {
            blockText = blockText.trim().replace(/,$/, '');
        }
        
        output.push(blockText);
    });

    output.push('};');

    fs.writeFileSync(fixedPath, output.join('\\n'), 'utf8');
    console.log(\`Successfully repaired and updated \${fixedPath}\`);
} catch (err) {
    console.error("Error occurred:", err.message);
    process.exit(1);
}
