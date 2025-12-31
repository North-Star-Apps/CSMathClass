
// Central Store for Curriculum Questions
// Used for individual lessons and the global review/exam systems.

window.QUESTIONS_DATA = {
  "day1": [
    { "id": 1, "topic": "Fractions", "prompt": "2/3 + 1/6 = ? (simplify)", "answer": ["5/6"], "display": "5/6" },
    { "id": 2, "topic": "Fractions", "prompt": "3/4 × 2/5 = ?", "answer": ["3/10", "6/20"], "display": "3/10" },
    { "id": 3, "topic": "Fractions", "prompt": "7/8 ÷ 1/4 = ?", "answer": ["7/2", "3.5", "3 1/2"], "display": "7/2" },
    { "id": 4, "topic": "Fractions", "prompt": "Simplify 24/36", "answer": ["2/3"], "display": "2/3" },
    { "id": 5, "topic": "Negatives", "prompt": "(-7) + (-5) = ?", "answer": ["-12"], "display": "-12" },
    { "id": 6, "topic": "Negatives", "prompt": "5 - (-3) = ?", "answer": ["8"], "display": "8" },
    { "id": 7, "topic": "Negatives", "prompt": "(-4) × (-6) = ?", "answer": ["24"], "display": "24" },
    { "id": 8, "topic": "Negatives", "prompt": "-3² = ? (note: no parentheses)", "answer": ["-9"], "display": "-9" },
    { "id": 9, "topic": "Negatives", "prompt": "(-3)² = ?", "answer": ["9"], "display": "9" },
    { "id": 10, "topic": "Exponents", "prompt": "2⁴ × 2³ = 2^?", "answer": ["7", "2^7"], "display": "2⁷" },
    { "id": 11, "topic": "Exponents", "prompt": "5⁶ ÷ 5² = 5^?", "answer": ["4", "5^4"], "display": "5⁴" },
    { "id": 12, "topic": "Exponents", "prompt": "(3²)³ = 3^?", "answer": ["6", "3^6"], "display": "3⁶" },
    { "id": 13, "topic": "Exponents", "prompt": "Any number to the 0 power equals ___", "answer": ["1"], "display": "1" },
    { "id": 14, "topic": "Exponents", "prompt": "2⁻³ = ?", "answer": ["1/8", "0.125"], "display": "1/8" },
    { "id": 15, "topic": "Roots", "prompt": "16^(1/2) = ?", "answer": ["4"], "display": "4" },
    { "id": 16, "topic": "Roots", "prompt": "27^(1/3) = ?", "answer": ["3"], "display": "3" },
    { "id": 17, "topic": "Scientific", "prompt": "3.2 × 10⁴ in standard form = ?", "answer": ["32000"], "display": "32,000" },
    { "id": 18, "topic": "Scientific", "prompt": "0.0056 in scientific notation = ?", "answer": ["5.6e-3", "5.6 x 10^-3", "5.6×10⁻³"], "display": "5.6 × 10⁻³" },
    { "id": 19, "topic": "Ratios", "prompt": "Simplify ratio 12:18", "answer": ["2:3", "2 to 3"], "display": "2:3" },
    { "id": 20, "topic": "Ratios", "prompt": "Aspect ratio of 1920×1080?", "answer": ["16:9"], "display": "16:9" },
    { "id": 21, "topic": "Rates", "prompt": "100 Mbps = ? MB/s (remember: 8 bits = 1 byte)", "answer": ["12.5"], "display": "12.5 MB/s" },
    { "id": 22, "topic": "Percentages", "prompt": "What is 20% of 150?", "answer": ["30"], "display": "30" },
    { "id": 23, "topic": "Percentages", "prompt": "30 is what % of 120?", "answer": ["25", "25%"], "display": "25%" },
    { "id": 24, "topic": "Conversions", "prompt": "1 GB = ? MB", "answer": ["1024", "1000"], "display": "1024 (or 1000)" },
    { "id": 25, "topic": "Fractions", "prompt": "Convert 2 3/5 to improper fraction", "answer": ["13/5"], "display": "13/5" },
    { "id": 26, "topic": "Exponents", "prompt": "16^(3/4) = ?", "answer": ["8"], "display": "8" },
    { "id": 27, "topic": "Scientific", "prompt": "(2×10³) × (3×10⁴) = ?", "answer": ["6e7", "6×10⁷", "6 x 10^7"], "display": "6 × 10⁷" },
    { "id": 28, "topic": "Percentages", "prompt": "Price increases from $80 to $100. What is the % increase?", "answer": ["25", "25%"], "display": "25%" },
    { "id": 29, "topic": "Rates", "prompt": "3 workers finish 15 tasks/hour. How many tasks/hour with 5 workers?", "answer": ["25"], "display": "25 tasks/hour" },
    { "id": 30, "topic": "Fractions", "prompt": "5/6 - 1/4 = ? (simplify)", "answer": ["7/12"], "display": "7/12" }
  ],
  "day2": [
    { "id": 1, "topic": "Linear", "prompt": "Solve: 3x + 7 = 22", "answer": ["5", "x=5"], "display": "x = 5" },
    { "id": 2, "topic": "Linear", "prompt": "Solve: 5x - 3 = 2x + 9", "answer": ["4", "x=4"], "display": "x = 4" },
    { "id": 3, "topic": "Systems", "prompt": "System: x + y = 5, x - y = 1. What is x?", "answer": ["3"], "display": "x = 3" },
    { "id": 4, "topic": "Systems", "prompt": "System: x + y = 5, x - y = 1. What is y?", "answer": ["2"], "display": "y = 2" },
    { "id": 5, "topic": "Systems", "prompt": "Two parallel lines have ___ solutions (one/none/infinite)", "answer": ["none", "0", "no"], "display": "None" },
    { "id": 6, "topic": "Quadratic", "prompt": "Solve x² - 9 = 0 (both solutions)", "answer": ["3, -3", "±3", "-3, 3"], "display": "x = ±3" },
    { "id": 7, "topic": "Quadratic", "prompt": "Factor: x² + 5x + 6", "answer": ["(x+2)(x+3)", "(x+3)(x+2)"], "display": "(x+2)(x+3)" },
    { "id": 8, "topic": "Quadratic", "prompt": "The discriminant b² - 4ac tells us the number of ___", "answer": ["solutions", "roots", "real roots"], "display": "Solutions/Roots" },
    { "id": 9, "topic": "Quadratic", "prompt": "If discriminant = 0, how many real solutions?", "answer": ["1", "one"], "display": "1" },
    { "id": 10, "topic": "Quadratic", "prompt": "If discriminant < 0, how many real solutions?", "answer": ["0", "none", "zero"], "display": "0 (complex)" },
    { "id": 11, "topic": "Expanding", "prompt": "(x + 2)(x + 3) = x² + ?x + 6", "answer": ["5"], "display": "5" },
    { "id": 12, "topic": "Expanding", "prompt": "FOIL stands for First, Outer, ___, Last", "answer": ["inner"], "display": "Inner" },
    { "id": 13, "topic": "Factoring", "prompt": "Factor: 6x² + 9x (GCF)", "answer": ["3x(2x+3)"], "display": "3x(2x + 3)" },
    { "id": 14, "topic": "Factoring", "prompt": "Factor: x² - 16 (difference of squares)", "answer": ["(x+4)(x-4)", "(x-4)(x+4)"], "display": "(x+4)(x-4)" },
    { "id": 15, "topic": "Simplify", "prompt": "Simplify: (x² - 4)/(x + 2)", "answer": ["x-2", "x - 2"], "display": "x - 2" },
    { "id": 16, "topic": "Systems", "prompt": "To solve Ax = b in matrix form, x = ?", "answer": ["a^-1 b", "A⁻¹b", "inv(a)*b"], "display": "A⁻¹b" },
    { "id": 17, "topic": "Systems", "prompt": "If det(A) = 0, the system has ___ unique solution(s)", "answer": ["no", "0", "none", "zero"], "display": "No unique solution" },
    { "id": 18, "topic": "Special", "prompt": "(a + b)² = a² + ___ + b²", "answer": ["2ab"], "display": "2ab" },
    { "id": 19, "topic": "Special", "prompt": "(a - b)² = a² - ___ + b²", "answer": ["2ab"], "display": "2ab" },
    { "id": 20, "topic": "Special", "prompt": "a² - b² = (a + b)(___)", "answer": ["a-b", "a - b"], "display": "(a - b)" }
  ],
  "day3": [
    { "id": 1, "topic": "Basics", "prompt": "A function maps each ___ to exactly one output", "answer": ["input"], "display": "Input" },
    { "id": 2, "topic": "Basics", "prompt": "If f(x) = 2x + 3, what is f(5)?", "answer": ["13"], "display": "13" },
    { "id": 3, "topic": "Domain", "prompt": "The set of all valid inputs is called the ___", "answer": ["domain"], "display": "Domain" },
    { "id": 4, "topic": "Range", "prompt": "The set of all possible outputs is called the ___", "answer": ["range"], "display": "Range" },
    { "id": 5, "topic": "Domain", "prompt": "For f(x) = 1/(x-3), what value must x NOT equal?", "answer": ["3"], "display": "x ≠ 3" },
    { "id": 6, "topic": "Domain", "prompt": "For f(x) = √(x-2), x must be ≥ ?", "answer": ["2"], "display": "x ≥ 2" },
    { "id": 7, "topic": "Inverse", "prompt": "If f(x) = 2x + 3, then f⁻¹(x) = ?", "answer": ["(x-3)/2", "(x - 3) / 2"], "display": "(x - 3)/2" },
    { "id": 8, "topic": "Inverse", "prompt": "f⁻¹(f(x)) = ?", "answer": ["x"], "display": "x" },
    { "id": 9, "topic": "Inverse", "prompt": "True or False: f⁻¹(x) means 1/f(x)", "answer": ["false", "f"], "display": "False" },
    { "id": 10, "topic": "Inverse", "prompt": "A function must be ___ to have an inverse", "answer": ["one-to-one", "1-1", "injective"], "display": "One-to-one" },
    { "id": 11, "topic": "Composition", "prompt": "(f ∘ g)(x) means f(___)", "answer": ["g(x)"], "display": "g(x)" },
    { "id": 12, "topic": "Composition", "prompt": "If f(x)=x² and g(x)=x+1, what is (f∘g)(3)?", "answer": ["16"], "display": "16" },
    { "id": 13, "topic": "Composition", "prompt": "True or False: f ∘ g = g ∘ f for all functions", "answer": ["false", "f"], "display": "False" },
    { "id": 14, "topic": "Tests", "prompt": "The ___ line test determines if a graph is a function", "answer": ["vertical"], "display": "Vertical" },
    { "id": 15, "topic": "Tests", "prompt": "The ___ line test determines if a function has an inverse", "answer": ["horizontal"], "display": "Horizontal" },
    { "id": 16, "topic": "Inverse", "prompt": "The domain of f⁻¹ equals the ___ of f", "answer": ["range"], "display": "Range" },
    { "id": 17, "topic": "Composition", "prompt": "If f(x)=2x and g(x)=x-3, find (f∘g)(x)", "answer": ["2x-6", "2(x-3)", "2x - 6"], "display": "2x - 6" },
    { "id": 18, "topic": "Inverse", "prompt": "x² has no inverse over all reals because it's not ___", "answer": ["one-to-one", "1-1", "injective"], "display": "One-to-one" },
    { "id": 19, "topic": "Examples", "prompt": "Encrypt and decrypt are ___ functions of each other", "answer": ["inverse"], "display": "Inverse" },
    { "id": 20, "topic": "Basics", "prompt": "Type hints like (x: int) -> str are kinda like declaring ___ → range", "answer": ["domain"], "display": "Domain" }
  ],
  "day5": [
    {
      "id": 1,
      "topic": "Structure",
      "prompt": "The four parts of a proof are: Definitions, Claim, Proof, and ___",
      "answer": [
        "qed",
        "∎"
      ],
      "display": "QED (or ∎)"
    },
    {
      "id": 2,
      "topic": "Structure",
      "prompt": "A helper result used to prove a theorem is called a ___",
      "answer": [
        "lemma"
      ],
      "display": "Lemma"
    },
    {
      "id": 3,
      "topic": "Structure",
      "prompt": "An easy consequence of a theorem is called a ___",
      "answer": [
        "corollary"
      ],
      "display": "Corollary"
    },
    {
      "id": 4,
      "topic": "Definitions",
      "prompt": "n is even means n = ___ for some integer k",
      "answer": [
        "2k"
      ],
      "display": "2k"
    },
    {
      "id": 5,
      "topic": "Definitions",
      "prompt": "n is odd means n = ___ for some integer k",
      "answer": [
        "2k+1",
        "2k + 1"
      ],
      "display": "2k + 1"
    },
    {
      "id": 6,
      "topic": "Claims",
      "prompt": "Complete: 'For all x, if P(x) then ___'",
      "answer": [
        "q(x)"
      ],
      "display": "Q(x)"
    },
    {
      "id": 7,
      "topic": "Claims",
      "prompt": "The symbol ∀ means ___",
      "answer": [
        "for all",
        "for every"
      ],
      "display": "for all"
    },
    {
      "id": 8,
      "topic": "Claims",
      "prompt": "The symbol ∃ means ___",
      "answer": [
        "there exists",
        "exists"
      ],
      "display": "there exists"
    },
    {
      "id": 9,
      "topic": "Claims",
      "prompt": "'P if and only if Q' can be written with symbol ___",
      "answer": [
        "⟺",
        "↔",
        "iff"
      ],
      "display": "⟺ or ↔"
    },
    {
      "id": 10,
      "topic": "Style",
      "prompt": "Before using variable ε, you should first ___ it",
      "answer": [
        "define",
        "introduce",
        "declare"
      ],
      "display": "define/introduce"
    },
    {
      "id": 11,
      "topic": "Error",
      "prompt": "Proving P(5) is true shows 'for all n, P(n)' — True or False?",
      "answer": [
        "false",
        "f",
        "no"
      ],
      "display": "False"
    },
    {
      "id": 12,
      "topic": "Style",
      "prompt": "Using what you're trying to prove as a step is called ___ reasoning",
      "answer": [
        "circular"
      ],
      "display": "Circular"
    },
    {
      "id": 13,
      "topic": "Structure",
      "prompt": "A mathematical statement that is believed to be true but not yet proven is a ___.",
      "answer": [
        "conjecture"
      ],
      "display": "Conjecture"
    },
    {
      "id": 14,
      "topic": "Claims",
      "prompt": "What is the negation of 'For all x, P(x)'? (use symbols)",
      "answer": [
        "exists x, not p(x)",
        "∃x, ¬P(x)"
      ],
      "display": "∃x, ¬P(x)"
    },
    {
      "id": 15,
      "topic": "Style",
      "prompt": "True or False: In a high-quality proof, you should explain your reasoning in sentences, not just symbols.",
      "answer": [
        "true",
        "t"
      ],
      "display": "True"
    },
    {
      "id": 16,
      "topic": "Definitions",
      "prompt": "A prime number is an integer > 1 whose only divisors are 1 and ___.",
      "answer": [
        "itself",
        "n"
      ],
      "display": "itself"
    },
    {
      "id": 17,
      "topic": "Structure",
      "prompt": "Which is usually a smaller, helper result: a Lemma or a Theorem?",
      "answer": [
        "lemma"
      ],
      "display": "Lemma"
    },
    {
      "id": 18,
      "topic": "Error",
      "prompt": "Skipping a step because it 'seems obvious' is a common source of logical ___.",
      "answer": [
        "errors",
        "bugs",
        "flaws"
      ],
      "display": "Errors/Flaws"
    },
    {
      "id": 19,
      "topic": "Style",
      "prompt": "What does 'WLOG' stand for in math writing?",
      "answer": [
        "without loss of generality"
      ],
      "display": "Without Loss of Generality"
    },
    {
      "id": 20,
      "topic": "Claims",
      "prompt": "A statement like 'If P then Q' is called a ___ statement.",
      "answer": [
        "conditional",
        "implication"
      ],
      "display": "Conditional / Implication"
    }
  ],
  "day6": [
    {
      "id": 1,
      "topic": "Justification",
      "prompt": "What is the justification for 'a + b = 2m + 2n' when you know a=2m and b=2n?",
      "answer": [
        "substitution"
      ],
      "display": "Substitution"
    },
    {
      "id": 2,
      "topic": "Strategy",
      "prompt": "To prove P\u2192Q, you prove \u00acQ\u2192\u00acP. This is proof by ___.",
      "answer": [
        "contrapositive"
      ],
      "display": "Contrapositive"
    },
    {
      "id": 3,
      "topic": "Closure",
      "prompt": "If adding two integers always results in an integer, the set of integers is ___ under addition.",
      "answer": [
        "closed"
      ],
      "display": "Closed"
    },
    {
      "id": 4,
      "topic": "Induction",
      "prompt": "In induction, the assumption that P(k) is true is the Inductive ___.",
      "answer": [
        "hypothesis"
      ],
      "display": "Hypothesis"
    },
    {
      "id": 5,
      "topic": "Structure",
      "prompt": "A small helper theorem used to prove a larger theorem is called a ___.",
      "answer": [
        "lemma"
      ],
      "display": "Lemma"
    },
    {
      "id": 6,
      "topic": "Terminology",
      "prompt": "What does Q.E.D. stand for? (Latin)",
      "answer": [
        "quod erat demonstrandum"
      ],
      "display": "Quod Erat Demonstrandum"
    },
    {
      "id": 7,
      "topic": "Terminology",
      "prompt": "What symbol (\u220e) often replaces Q.E.D.? (named after a person)",
      "answer": [
        "halmos",
        "halmos's square",
        "halmos square"
      ],
      "display": "Halmos square"
    },
    {
      "id": 8,
      "topic": "Contradiction",
      "prompt": "In proof by contradiction, we assume the ___ of the claim.",
      "answer": [
        "negation",
        "opposite"
      ],
      "display": "Negation"
    },
    {
      "id": 9,
      "topic": "Style",
      "prompt": "What does 'WLOG' stand for?",
      "answer": [
        "without loss of generality"
      ],
      "display": "Without Loss of Generality"
    },
    {
      "id": 10,
      "topic": "Direct Proof",
      "prompt": "A proof that follows a logical chain from A to B to C is a ___ proof.",
      "answer": [
        "direct"
      ],
      "display": "Direct"
    },
    {
      "id": 11,
      "topic": "Justification",
      "prompt": "Is 'by algebra' a valid justification for simplification in this course? (yes/no)",
      "answer": [
        "yes",
        "y"
      ],
      "display": "Yes"
    },
    {
      "id": 12,
      "topic": "Invariants",
      "prompt": "Showing a loop invariant holds after an iteration is called loop ___.",
      "answer": [
        "maintenance"
      ],
      "display": "Maintenance"
    },
    {
      "id": 13,
      "topic": "Invariants",
      "prompt": "Showing a loop invariant holds BEFORE the first iteration is called ___.",
      "answer": [
        "initialization"
      ],
      "display": "Initialization"
    },
    {
      "id": 14,
      "topic": "Logic Errors",
      "prompt": "Assuming what you're trying to prove is called '___ the question'.",
      "answer": [
        "begging"
      ],
      "display": "Begging"
    },
    {
      "id": 15,
      "topic": "Proof Types",
      "prompt": "Proof by exhaustion is checking every possible ___.",
      "answer": [
        "case",
        "cases"
      ],
      "display": "Case"
    },
    {
      "id": 16,
      "topic": "Vacuous",
      "prompt": "If 'If P, then Q' is true because P is false, the statement is ___ true.",
      "answer": [
        "vacuously"
      ],
      "display": "Vacuously"
    },
    {
      "id": 17,
      "topic": "Paradoxes",
      "prompt": "The 'All horses are same color' induction fails at the transition from n=1 to n=?.",
      "answer": [
        "2"
      ],
      "display": "2"
    },
    {
      "id": 18,
      "topic": "XOR",
      "prompt": "To prove 'Exactly one of A or B is true', you must prove (A or B) AND NOT (___).",
      "answer": [
        "a and b"
      ],
      "display": "A and B"
    },
    {
      "id": 19,
      "topic": "Justification",
      "prompt": "Justifying 'x = 2k' because x is even uses the ___ of even numbers.",
      "answer": [
        "definition"
      ],
      "display": "Definition"
    },
    {
      "id": 20,
      "topic": "Terminology",
      "prompt": "A mathematical statement that HAS BEEN proven is a ___.",
      "answer": [
        "theorem",
        "proposition",
        "lemma",
        "corollary"
      ],
      "display": "Theorem / Proposition"
    }
  ],
  "day7": [
    {
      "id": 1,
      "topic": "Polynomials",
      "prompt": "The highest power of x in a polynomial is called its ___.",
      "answer": [
        "degree"
      ],
      "display": "Degree"
    },
    {
      "id": 2,
      "topic": "Polynomials",
      "prompt": "What is the degree of P(x) = 5x³ + 2x² + 7?",
      "answer": [
        "3"
      ],
      "display": "3"
    },
    {
      "id": 3,
      "topic": "Polynomials",
      "prompt": "True or False: The leading term (highest power) determines the end behavior of the graph.",
      "answer": [
        "true",
        "t"
      ],
      "display": "True"
    },
    {
      "id": 4,
      "topic": "Piecewise",
      "prompt": "A function that uses different rules for different parts of its domain is called a ___ function.",
      "answer": [
        "piecewise"
      ],
      "display": "Piecewise"
    },
    {
      "id": 5,
      "topic": "Piecewise",
      "prompt": "Evaluation: If f(x) = { x+1 if x≥0, x-1 if x<0 }, what is f(0)?",
      "answer": [
        "1"
      ],
      "display": "1"
    },
    {
      "id": 6,
      "topic": "Rational",
      "prompt": "A function that is a fraction of two polynomials is called a ___ function.",
      "answer": [
        "rational"
      ],
      "display": "Rational"
    },
    {
      "id": 7,
      "topic": "Rational",
      "prompt": "Values of x that make the denominator of a rational function zero lead to vertical ___.",
      "answer": [
        "asymptotes",
        "asymptote"
      ],
      "display": "Asymptotes"
    },
    {
      "id": 8,
      "topic": "Rational",
      "prompt": "What is the domain restriction for f(x) = 1 / (x - 5)? (x ≠ ?)",
      "answer": [
        "5"
      ],
      "display": "5"
    },
    {
      "id": 9,
      "topic": "Complexity",
      "prompt": "Which grows faster for very large n: n² or 2ⁿ?",
      "answer": [
        "2^n",
        "2ⁿ",
        "exponential"
      ],
      "display": "2ⁿ (Exponential)"
    },
    {
      "id": 10,
      "topic": "Complexity",
      "prompt": "Growth rate O(n) is called ___ growth.",
      "answer": [
        "linear"
      ],
      "display": "Linear"
    },
    {
      "id": 11,
      "topic": "Complexity",
      "prompt": "Growth rate O(n²) is called ___ growth.",
      "answer": [
        "quadratic"
      ],
      "display": "Quadratic"
    },
    {
      "id": 12,
      "topic": "Complexity",
      "prompt": "True or False: Every polynomial eventually grows slower than any exponential function.",
      "answer": [
        "true",
        "t"
      ],
      "display": "True"
    },
    {
      "id": 13,
      "topic": "Logarithms",
      "prompt": "What is log₂(8)?",
      "answer": [
        "3"
      ],
      "display": "3"
    },
    {
      "id": 14,
      "topic": "Logarithms",
      "prompt": "Logarithmic growth O(log n) is ___ (faster/slower) than linear growth O(n).",
      "answer": [
        "slower"
      ],
      "display": "Slower"
    },
    {
      "id": 15,
      "topic": "Analogies",
      "prompt": "In the Simple Mode analogy, Piecewise functions are compared to which coding structure?",
      "answer": [
        "if/else",
        "if-else",
        "if else",
        "conditional"
      ],
      "display": "If/Else (Conditional)"
    },
    {
      "id": 16,
      "topic": "Analogies",
      "prompt": "The 'Power Level' rule refers to which characteristic of a polynomial?",
      "answer": [
        "degree",
        "highest power"
      ],
      "display": "Degree / Highest Power"
    },
    {
      "id": 17,
      "topic": "Rational",
      "prompt": "The 'Invisible Fence' refers to what graphical feature of rational functions?",
      "answer": [
        "asymptote",
        "asymptotes"
      ],
      "display": "Asymptotes"
    },
    {
      "id": 18,
      "topic": "Complexity",
      "prompt": "Binary search is an example of O(___) complexity.",
      "answer": [
        "log n",
        "logn"
      ],
      "display": "log n"
    },
    {
      "id": 19,
      "topic": "Polynomials",
      "prompt": "Degree of P(x) = (x+1)(x+2)?",
      "answer": [
        "2"
      ],
      "display": "2"
    },
    {
      "id": 20,
      "topic": "Concept",
      "prompt": "Which 'speed tier' in the curriculum means 'Game Over' for large scale data?",
      "answer": [
        "exponential",
        "2^n",
        "2ⁿ",
        "o(2^n)"
      ],
      "display": "Exponential"
    }
  ],
  "day8": [
    {
      "id": 1,
      "topic": "Transformations",
      "prompt": "Comparing f(x) and f(x-3), the graph of f(x-3) is shifted 3 units to the ___.",
      "answer": [
        "right"
      ],
      "display": "Right"
    },
    {
      "id": 2,
      "topic": "Transformations",
      "prompt": "Comparing f(x) and f(x)+4, the graph of f(x)+4 is shifted 4 units ___.",
      "answer": [
        "up"
      ],
      "display": "Up"
    },
    {
      "id": 3,
      "topic": "Transformations",
      "prompt": "The transformation -f(x) reflects the graph across the ___ axis.",
      "answer": [
        "x",
        "x-axis"
      ],
      "display": "x-axis"
    },
    {
      "id": 4,
      "topic": "Transformations",
      "prompt": "The transformation f(-x) reflects the graph across the ___ axis.",
      "answer": [
        "y",
        "y-axis"
      ],
      "display": "y-axis"
    },
    {
      "id": 5,
      "topic": "Symmetry",
      "prompt": "A function is ___ if f(-x) = f(x) for all x in its domain.",
      "answer": [
        "even"
      ],
      "display": "Even"
    },
    {
      "id": 6,
      "topic": "Symmetry",
      "prompt": "A function is ___ if f(-x) = -f(x) for all x in its domain.",
      "answer": [
        "odd"
      ],
      "display": "Odd"
    },
    {
      "id": 7,
      "topic": "Symmetry",
      "prompt": "Even functions are symmetric across the ___ axis.",
      "answer": [
        "y",
        "y-axis"
      ],
      "display": "y-axis"
    },
    {
      "id": 8,
      "topic": "Symmetry",
      "prompt": "Odd functions are symmetric about the ___.",
      "answer": [
        "origin"
      ],
      "display": "Origin"
    },
    {
      "id": 9,
      "topic": "Asymptotes",
      "prompt": "For f(x) = 1/(x-5), the vertical asymptote is x = ___.",
      "answer": [
        "5"
      ],
      "display": "5"
    },
    {
      "id": 10,
      "topic": "Asymptotes",
      "prompt": "If the degree of the denominator is greater than the degree of the numerator, the horizontal asymptote is y = ___.",
      "answer": [
        "0"
      ],
      "display": "0"
    },
    {
      "id": 11,
      "topic": "Asymptotes",
      "prompt": "For f(x) = (3x+1)/(x-2), the horizontal asymptote is y = ___.",
      "answer": [
        "3"
      ],
      "display": "3"
    },
    {
      "id": 12,
      "topic": "Asymptotes",
      "prompt": "True or False: A graph can never cross its vertical asymptote.",
      "answer": [
        "true",
        "t"
      ],
      "display": "True"
    },
    {
      "id": 13,
      "topic": "Growth",
      "prompt": "As x approaches infinity, which grows faster: x^3 or 100x^2?",
      "answer": [
        "x^3",
        "x³"
      ],
      "display": "x³"
    },
    {
      "id": 14,
      "topic": "Growth",
      "prompt": "As x approaches infinity, which grows faster: x^100 or 2^x?",
      "answer": [
        "2^x",
        "2ⁿ",
        "exponential"
      ],
      "display": "2ⁿ (Exponential)"
    },
    {
      "id": 15,
      "topic": "Transformations",
      "prompt": "The transformation 5f(x) results in a vertical ___ (stretch/compression).",
      "answer": [
        "stretch"
      ],
      "display": "Stretch"
    },
    {
      "id": 16,
      "topic": "Transformations",
      "prompt": "The transformation f(5x) results in a horizontal ___ (stretch/compression).",
      "answer": [
        "compression"
      ],
      "display": "Compression"
    },
    {
      "id": 17,
      "topic": "Symmetry",
      "prompt": "Is f(x) = x^2 - 4 even, odd, or neither?",
      "answer": [
        "even"
      ],
      "display": "Even"
    },
    {
      "id": 18,
      "topic": "Symmetry",
      "prompt": "Is f(x) = x^3 + x even, odd, or neither?",
      "answer": [
        "odd"
      ],
      "display": "Odd"
    },
    {
      "id": 19,
      "topic": "Asymptotes",
      "prompt": "A 'hole' in a rational function occurs when a factor is present in both the numerator AND ___.",
      "answer": [
        "denominator"
      ],
      "display": "Denominator"
    },
    {
      "id": 20,
      "topic": "Growth",
      "prompt": "End behavior of f(x) = -x^2 as x approaches infinity is ___ infinity.",
      "answer": [
        "negative",
        "-"
      ],
      "display": "Negative"
    }
  ],
  "day4": [
    {
      "id": 1,
      "topic": "Identify",
      "prompt": "To prove P→Q, assume P and derive Q. Which technique?",
      "answer": [
        "direct",
        "direct proof"
      ],
      "display": "Direct proof"
    },
    {
      "id": 2,
      "topic": "Identify",
      "prompt": "Prove P→Q by proving ¬Q→¬P. Which technique?",
      "answer": [
        "contrapositive",
        "contraposition",
        "proof by contrapositive"
      ],
      "display": "Contrapositive"
    },
    {
      "id": 3,
      "topic": "Identify",
      "prompt": "Assume ¬P, derive impossibility, conclude P. Which technique?",
      "answer": [
        "contradiction",
        "proof by contradiction"
      ],
      "display": "Contradiction"
    },
    {
      "id": 4,
      "topic": "Identify",
      "prompt": "Base case + (P(k)→P(k+1)) = P(n) for all n. Which technique?",
      "answer": [
        "induction",
        "mathematical induction",
        "proof by induction"
      ],
      "display": "Induction"
    },
    {
      "id": 5,
      "topic": "Contrapositive",
      "prompt": "What is the contrapositive of: If it rains, the ground is wet?",
      "answer": [
        "if ground is not wet then it doesn't rain",
        "if not wet then not rain",
        "if the ground is not wet then it does not rain"
      ],
      "display": "If ground not wet → not raining"
    },
    {
      "id": 6,
      "topic": "Contrapositive",
      "prompt": "Contrapositive of: If n is prime, then n>1?",
      "answer": [
        "if n<=1 then n is not prime",
        "if n is not greater than 1 then n is not prime"
      ],
      "display": "If n ≤ 1, then n is not prime"
    },
    {
      "id": 7,
      "topic": "Induction",
      "prompt": "In induction, what must you prove first?",
      "answer": [
        "base case",
        "the base case",
        "base"
      ],
      "display": "Base case"
    },
    {
      "id": 8,
      "topic": "Induction",
      "prompt": "In the inductive step, you assume P(k). What do you prove?",
      "answer": [
        "p(k+1)",
        "p(k + 1)"
      ],
      "display": "P(k+1)"
    },
    {
      "id": 9,
      "topic": "Induction",
      "prompt": "Sum 1+2+...+n when n=1 equals?",
      "answer": [
        "1"
      ],
      "display": "1"
    },
    {
      "id": 10,
      "topic": "Induction",
      "prompt": "If 1+2+...+k = k(k+1)/2, what is 1+2+...+k+(k+1)?",
      "answer": [
        "(k+1)(k+2)/2"
      ],
      "display": "(k+1)(k+2)/2"
    },
    {
      "id": 11,
      "topic": "Invariant",
      "prompt": "A condition true before and after each loop iteration is called a?",
      "answer": [
        "loop invariant",
        "invariant"
      ],
      "display": "Loop invariant"
    },
    {
      "id": 12,
      "topic": "Invariant",
      "prompt": "To prove loop correctness: Initialization, Maintenance, and?",
      "answer": [
        "termination"
      ],
      "display": "Termination"
    },
    {
      "id": 13,
      "topic": "Contradiction",
      "prompt": "To prove √2 irrational, we first assume √2 is... (what)?",
      "answer": [
        "rational"
      ],
      "display": "Rational"
    },
    {
      "id": 14,
      "topic": "Apply",
      "prompt": "Prove: even + odd = odd. Which technique is simplest?",
      "answer": [
        "direct",
        "direct proof"
      ],
      "display": "Direct proof"
    },
    {
      "id": 15,
      "topic": "Strong",
      "prompt": "When P(k+1) depends on all of P(1)...P(k), use ___ induction.",
      "answer": [
        "strong"
      ],
      "display": "Strong"
    },
    {
      "id": 16,
      "topic": "Notation",
      "prompt": "What is the contrapositive of P → Q?",
      "answer": [
        "¬q → ¬p",
        "not q implies not p"
      ],
      "display": "¬Q → ¬P"
    },
    {
      "id": 17,
      "topic": "Invariants",
      "prompt": "If a loop invariant holds and the loop terminates, it helps prove loop ___.",
      "answer": [
        "correctness"
      ],
      "display": "Correctness"
    },
    {
      "id": 18,
      "topic": "Strong",
      "prompt": "In strong induction, we assume P(1) AND P(2) ... AND P(k) to prove ___.",
      "answer": [
        "p(k+1)",
        "p(k + 1)"
      ],
      "display": "P(k+1)"
    },
    {
      "id": 19,
      "topic": "Contradiction",
      "prompt": "To prove 'There is no largest prime', assume there IS a largest prime and find a ___.",
      "answer": [
        "contradiction",
        "impossibility"
      ],
      "display": "Contradiction"
    },
    {
      "id": 20,
      "topic": "Apply",
      "prompt": "Proving that a recursive function like factorial(n) is correct is done via ___.",
      "answer": [
        "induction",
        "mathematical induction"
      ],
      "display": "Induction"
    }
  ],
  "day1": [
    {
      "id": 1,
      "topic": "Fractions",
      "prompt": "Simplify 24/36 to lowest terms (format: a/b)",
      "answer": ["2/3"],
      "display": "2/3"
    },
    {
      "id": 2,
      "topic": "Fractions",
      "prompt": "What is 2/3 + 1/6? (simplified fraction)",
      "answer": ["5/6"],
      "display": "5/6"
    },
    {
      "id": 3,
      "topic": "Fractions",
      "prompt": "What is (3/4) × (2/5)?",
      "answer": ["3/10", "6/20"],
      "display": "3/10"
    },
    {
      "id": 4,
      "topic": "Fractions",
      "prompt": "What is (2/3) ÷ (4/5)?",
      "answer": ["5/6", "10/12"],
      "display": "5/6"
    },
    {
      "id": 5,
      "topic": "Fractions",
      "prompt": "Convert 2 3/5 to improper fraction",
      "answer": ["13/5"],
      "display": "13/5"
    },
    {
      "id": 6,
      "topic": "Negatives",
      "prompt": "What is (-7) + (-5)?",
      "answer": ["-12"],
      "display": "-12"
    },
    {
      "id": 7,
      "topic": "Negatives",
      "prompt": "What is 5 - (-3)?",
      "answer": ["8"],
      "display": "8"
    },
    {
      "id": 8,
      "topic": "Negatives",
      "prompt": "What is (-3)²?",
      "answer": ["9"],
      "display": "9"
    },
    {
      "id": 9,
      "topic": "Negatives",
      "prompt": "What is -3² (without parentheses)?",
      "answer": ["-9"],
      "display": "-9"
    },
    {
      "id": 10,
      "topic": "Exponents",
      "prompt": "Simplify: 2³ × 2⁴",
      "answer": ["128", "2^7"],
      "display": "2⁷ = 128"
    },
    {
      "id": 11,
      "topic": "Exponents",
      "prompt": "Simplify: (2³)²",
      "answer": ["64", "2^6"],
      "display": "2⁶ = 64"
    },
    {
      "id": 12,
      "topic": "Exponents",
      "prompt": "What is 5⁰?",
      "answer": ["1"],
      "display": "1"
    },
    {
      "id": 13,
      "topic": "Exponents",
      "prompt": "What is 2⁻³ as a fraction?",
      "answer": ["1/8"],
      "display": "1/8"
    },
    {
      "id": 14,
      "topic": "Exponents",
      "prompt": "What is 16^(1/2)?",
      "answer": ["4"],
      "display": "4"
    },
    {
      "id": 15,
      "topic": "Exponents",
      "prompt": "What is 27^(2/3)?",
      "answer": ["9"],
      "display": "9 (cube root of 27 is 3, then 3²=9)"
    },
    {
      "id": 16,
      "topic": "Scientific Notation",
      "prompt": "Write 0.0051 in scientific notation (format: a×10^n)",
      "answer": ["5.1e-3", "5.1×10^-3", "5.1*10^-3"],
      "display": "5.1 × 10⁻³"
    },
    {
      "id": 17,
      "topic": "Scientific Notation",
      "prompt": "Write 12,300 in scientific notation",
      "answer": ["1.23e4", "1.23×10^4", "1.23*10^4"],
      "display": "1.23 × 10⁴"
    },
    {
      "id": 18,
      "topic": "Ratios",
      "prompt": "Simplify 1920:1080 to lowest terms (format a:b)",
      "answer": ["16:9"],
      "display": "16:9"
    },
    {
      "id": 19,
      "topic": "Rates",
      "prompt": "100 Mbps = ? MB/s",
      "answer": ["12.5"],
      "display": "12.5 MB/s"
    },
    {
      "id": 20,
      "topic": "Percentages",
      "prompt": "What is 20% of 150?",
      "answer": ["30"],
      "display": "30"
    },
    {
      "id": 21,
      "topic": "Percentages",
      "prompt": "If price goes from $80 to $100, percent increase is?",
      "answer": ["25", "25%"],
      "display": "25%"
    },
    {
      "id": 22,
      "topic": "Percentages",
      "prompt": "Conversion rate 2%→3%: Is this 1 percentage point or 50% increase?",
      "answer": ["both"],
      "display": "Both (1pp AND 50%)"
    },
    {
      "id": 23,
      "topic": "Rates",
      "prompt": "3 parallel workers at 100, 150, 120 ops/sec. Total throughput?",
      "answer": ["370"],
      "display": "370 ops/sec"
    },
    {
      "id": 24,
      "topic": "Rates",
      "prompt": "Pipeline with stages 200, 80, 150 ops/sec. Bottleneck rate?",
      "answer": ["80"],
      "display": "80 ops/sec"
    },
    {
      "id": 25,
      "topic": "Common Gotchas",
      "prompt": "1 TB = 10^? bytes",
      "answer": ["12"],
      "display": "12 (1 TB = 10¹² bytes)"
    },
    {
      "id": 26,
      "topic": "Common Gotchas",
      "prompt": "10% growth for 5 years = 1.10^5 = ?% total (round to nearest %)",
      "answer": ["61", "61%"],
      "display": "61%"
    },
    {
      "id": 27,
      "topic": "Fractions",
      "prompt": "GCD of 24 and 36 is?",
      "answer": ["12"],
      "display": "12"
    },
    {
      "id": 28,
      "topic": "Scientific Notation",
      "prompt": "(2×10³) × (3×10⁵) = ? (scientific notation)",
      "answer": ["6e8", "6×10^8", "6*10^8"],
      "display": "6 × 10⁸"
    },
    {
      "id": 29,
      "topic": "Exponents",
      "prompt": "log₂(8) = ?",
      "answer": ["3"],
      "display": "3"
    },
    {
      "id": 30,
      "topic": "Rates",
      "prompt": "100 ops/sec = ? ms per operation",
      "answer": ["10"],
      "display": "10 ms/op"
    }
  ],
  "day2": [
    {
      "id": 1,
      "topic": "Linear Equations",
      "prompt": "Solve for x: 2x + 5 = 13",
      "answer": ["4"],
      "display": "x = 4"
    },
    {
      "id": 2,
      "topic": "Linear Equations",
      "prompt": "Solve for x: x/3 + x/4 = 7",
      "answer": ["12"],
      "display": "x = 12"
    },
    {
      "id": 3,
      "topic": "Systems",
      "prompt": "Solve: 2x + y = 7, x - y = 2. What is x?",
      "answer": ["3"],
      "display": "x = 3"
    },
    {
      "id": 4,
      "topic": "Systems",
      "prompt": "From problem above, what is y?",
      "answer": ["1"],
      "display": "y = 1"
    },
    {
      "id": 5,
      "topic": "Quadratics",
      "prompt": "Factor: x² + 5x + 6",
      "answer": ["(x+2)(x+3)", "(x + 2)(x + 3)"],
      "display": "(x + 2)(x + 3)"
    },
    {
      "id": 6,
      "topic": "Quadratics",
      "prompt": "Solve x² + 5x + 6 = 0. Roots are x = -2 and x = ?",
      "answer": ["-3"],
      "display": "-3"
    },
    {
      "id": 7,
      "topic": "Quadratics",
      "prompt": "In the quadratic formula, the discriminant is b² - ?",
      "answer": ["4ac"],
      "display": "4ac"
    },
    {
      "id": 8,
      "topic": "Quadratics",
      "prompt": "If discriminant < 0, how many real roots?",
      "answer": ["0", "zero", "none"],
      "display": "0 (complex roots only)"
    },
    {
      "id": 9,
      "topic": "Factoring",
      "prompt": "Factor: x² - 9",
      "answer": ["(x+3)(x-3)", "(x-3)(x+3)", "(x + 3)(x - 3)"],
      "display": "(x + 3)(x - 3)"
    },
    {
      "id": 10,
      "topic": "Factoring",
      "prompt": "GCF of 6x² + 9x is?",
      "answer": ["3x"],
      "display": "3x"
    },
    {
      "id": 11,
      "topic": "Expanding",
      "prompt": "Expand: (x + 2)(x + 3) = x² + 5x + ?",
      "answer": ["6"],
      "display": "6"
    },
    {
      "id": 12,
      "topic": "Expanding",
      "prompt": "(x + 3)² = x² + 6x + ?",
      "answer": ["9"],
      "display": "9"
    },
    {
      "id": 13,
      "topic": "Simplifying",
      "prompt": "Simplify: (x² - 4)/(x + 2)",
      "answer": ["x-2", "x - 2"],
      "display": "x - 2 (for x ≠ -2)"
    },
    {
      "id": 14,
      "topic": "Systems",
      "prompt": "If det(A) = 0, does the system have a unique solution? (yes/no)",
      "answer": ["no"],
      "display": "No"
    },
    {
      "id": 15,
      "topic": "Quadratics",
      "prompt": "Complete the square: x² + 6x + ? = (x + 3)²",
      "answer": ["9"],
      "display": "9"
    },
    {
      "id": 16,
      "topic": "Special Forms",
      "prompt": "a³ - b³ = (a - b)(a² + ab + ?)",
      "answer": ["b²", "b^2"],
      "display": "b²"
    },
    {
      "id": 17,
      "topic": "Special Forms",
      "prompt": "(a + b)² = a² + 2ab + ?",
      "answer": ["b²", "b^2"],
      "display": "b²"
    },
    {
      "id": 18,
      "topic": "Gotchas",
      "prompt": "Can you cancel (x+2) in (x+2)/(x+2)? (yes/no)",
      "answer": ["yes"],
      "display": "Yes (= 1, but only if x ≠ -2)"
    },
    {
      "id": 19,
      "topic": "Gotchas",
      "prompt": "Is (x + 2)/2 = x + 1? (yes/no)",
      "answer": ["no"],
      "display": "No (can't cancel terms)"
    },
    {
      "id": 20,
      "topic": "Systems",
      "prompt": "Two parallel lines have ___ solutions (one word)",
      "answer": ["no", "zero", "none"],
      "display": "No solutions"
    }
  ],
  "day6": [
    {
      "id": 1,
      "topic": "Induction",
      "prompt": "In a proof by induction, what is the first step called?",
      "answer": "base case",
      "display": "Base Case"
    },
    {
      "id": 2,
      "topic": "Induction",
      "prompt": "If proving for all n >= 4, what n value do you check first?",
      "answer": "4",
      "display": "4"
    },
    {
      "id": 3,
      "topic": "Recursion",
      "prompt": "What happens if a recursive function lacks a base case?",
      "answer": "stack overflow,infinite loop,error",
      "display": "Stack Overflow (Infinite Loop)"
    },
    {
      "id": 4,
      "topic": "Recursion",
      "prompt": "Convert this loop to recursion: for i in range(10): print(i). What represents the induction hypothesis? (The loop body or the recursive call?)",
      "answer": "recursive call",
      "display": "The recursive call"
    },
    {
      "id": 5,
      "topic": "Strong Induction",
      "prompt": "To prove 'Every integer > 1 has a prime factor', do you use Weak or Strong induction?",
      "answer": "strong",
      "display": "Strong Induction (You need factors to be < n)"
    },
    {
      "id": 6,
      "topic": "Summation",
      "prompt": "Based on the formula n(n+1)/2, what is the sum of 1 to 5?",
      "answer": "15",
      "display": "15"
    }
  ],
  "day3": [
    {
      "id": 1,
      "topic": "Evaluate",
      "prompt": "f(x) = 3x - 2. Find f(4).",
      "answer": [
        "10"
      ],
      "display": "10"
    },
    {
      "id": 2,
      "topic": "Evaluate",
      "prompt": "g(x) = x² + 1. Find g(-3).",
      "answer": [
        "10"
      ],
      "display": "10"
    },
    {
      "id": 3,
      "topic": "Evaluate",
      "prompt": "h(x) = 2x² - x. Find h(2).",
      "answer": [
        "6"
      ],
      "display": "6"
    },
    {
      "id": 4,
      "topic": "Domain",
      "prompt": "f(x) = 1/(x-5). What value is excluded?",
      "answer": [
        "5",
        "x=5"
      ],
      "display": "x = 5"
    },
    {
      "id": 5,
      "topic": "Domain",
      "prompt": "g(x) = √(x-3). Domain: x ≥ ?",
      "answer": [
        "3"
      ],
      "display": "x ≥ 3"
    },
    {
      "id": 6,
      "topic": "Domain",
      "prompt": "h(x) = 1/√(x-2). Domain: x > ?",
      "answer": [
        "2"
      ],
      "display": "x > 2"
    },
    {
      "id": 7,
      "topic": "Inverse",
      "prompt": "f(x) = x + 7. Find f⁻¹(x).",
      "answer": [
        "x-7"
      ],
      "display": "x - 7"
    },
    {
      "id": 8,
      "topic": "Inverse",
      "prompt": "f(x) = 3x. Find f⁻¹(x).",
      "answer": [
        "x/3"
      ],
      "display": "x/3"
    },
    {
      "id": 9,
      "topic": "Inverse",
      "prompt": "f(x) = 2x - 5. Find f⁻¹(x).",
      "answer": [
        "(x+5)/2"
      ],
      "display": "(x + 5)/2"
    },
    {
      "id": 10,
      "topic": "Inverse",
      "prompt": "f(x) = x³. Find f⁻¹(x).",
      "answer": [
        "x^(1/3)",
        "cbrt(x)",
        "∛x"
      ],
      "display": "∛x or x^(1/3)"
    },
    {
      "id": 11,
      "topic": "Compose",
      "prompt": "f(x)=x+2, g(x)=3x. Find (f∘g)(4).",
      "answer": [
        "14"
      ],
      "display": "14"
    },
    {
      "id": 12,
      "topic": "Compose",
      "prompt": "f(x)=x+2, g(x)=3x. Find (g∘f)(4).",
      "answer": [
        "18"
      ],
      "display": "18"
    },
    {
      "id": 13,
      "topic": "Compose",
      "prompt": "f(x)=x², g(x)=x+1. Find (f∘g)(2).",
      "answer": [
        "9"
      ],
      "display": "9"
    },
    {
      "id": 14,
      "topic": "Compose",
      "prompt": "f(x)=x², g(x)=x+1. Find (g∘f)(2).",
      "answer": [
        "5"
      ],
      "display": "5"
    },
    {
      "id": 15,
      "topic": "Compose",
      "prompt": "f(x)=2x, g(x)=x-3. Find (f∘g)(x).",
      "answer": [
        "2x-6",
        "2(x-3)"
      ],
      "display": "2x - 6"
    },
    {
      "id": 16,
      "topic": "Compose",
      "prompt": "f(x)=2x, g(x)=x-3. Find (g∘f)(x).",
      "answer": [
        "2x-3"
      ],
      "display": "2x - 3"
    },
    {
      "id": 17,
      "topic": "Verify",
      "prompt": "f(x)=x+5, f⁻¹(x)=x-5. Find f(f⁻¹(7)).",
      "answer": [
        "7"
      ],
      "display": "7"
    },
    {
      "id": 18,
      "topic": "Range",
      "prompt": "f(x) = x² has range y ≥ ?",
      "answer": [
        "0"
      ],
      "display": "y ≥ 0"
    },
    {
      "id": 19,
      "topic": "Range",
      "prompt": "f(x) = |x| + 3 has range y ≥ ?",
      "answer": [
        "3"
      ],
      "display": "y ≥ 3"
    },
    {
      "id": 20,
      "topic": "One-to-One",
      "prompt": "Is f(x)=x³ one-to-one? (yes/no)",
      "answer": [
        "yes",
        "y"
      ],
      "display": "Yes"
    }
  ],
  "day2": [
    {
      "id": 1,
      "topic": "Linear",
      "prompt": "Solve: 3x + 7 = 22",
      "answer": "5",
      "display": "x = 5"
    },
    {
      "id": 2,
      "topic": "Linear",
      "prompt": "Solve: 5x - 3 = 2x + 9",
      "answer": "4",
      "display": "x = 4"
    },
    {
      "id": 3,
      "topic": "Linear",
      "prompt": "Solve: x/3 + x/4 = 7",
      "answer": "12",
      "display": "x = 12"
    },
    {
      "id": 4,
      "topic": "Linear",
      "prompt": "Solve: 2(x - 3) = 4x + 2",
      "answer": "-4",
      "display": "x = -4"
    },
    {
      "id": 5,
      "topic": "Systems",
      "prompt": "Solve: x + y = 5, x - y = 1",
      "answer": "(3, 2)",
      "display": "(3, 2)"
    },
    {
      "id": 6,
      "topic": "Systems",
      "prompt": "Solve: 2x + y = 7, x - y = 2",
      "answer": "(3, 1)",
      "display": "(3, 1)"
    },
    {
      "id": 7,
      "topic": "Systems",
      "prompt": "Solve: 3x + 2y = 12, x - y = 1",
      "answer": "(2, 3)",
      "display": "(2, 3)"
    },
    {
      "id": 8,
      "topic": "Systems",
      "prompt": "Solve: x + 2y = 8, 3x - y = 3",
      "answer": "(2, 3)",
      "display": "(2, 3)"
    },
    {
      "id": 9,
      "topic": "Quadratic",
      "prompt": "Solve: x² + 5x + 6 = 0",
      "answer": "-2; -3",
      "display": "x = -2, -3"
    },
    {
      "id": 10,
      "topic": "Quadratic",
      "prompt": "Solve: x² - 9 = 0",
      "answer": "3; -3",
      "display": "x = ±3"
    },
    {
      "id": 11,
      "topic": "Quadratic",
      "prompt": "Solve: x² - 5x + 6 = 0",
      "answer": "2; 3",
      "display": "x = 2, 3"
    },
    {
      "id": 12,
      "topic": "Quadratic",
      "prompt": "Solve: x² + 4x = 0",
      "answer": "0; -4",
      "display": "x = 0, -4"
    },
    {
      "id": 13,
      "topic": "Quadratic",
      "prompt": "Solve: x² - 4x + 1 = 0 (simplify)",
      "answer": "2+√3; 2-√3",
      "display": "x = 2 ± √3"
    },
    {
      "id": 14,
      "topic": "Quadratic",
      "prompt": "Solve: 2x² + 3x - 2 = 0",
      "answer": "0.5; -2",
      "display": "x = 1/2, -2"
    },
    {
      "id": 15,
      "topic": "Quadratic",
      "prompt": "Discriminant of x² + 2x + 5 = 0?",
      "answer": "-16",
      "display": "-16 (no real roots)"
    },
    {
      "id": 16,
      "topic": "Mixed",
      "prompt": "Solve: y = x², y = 4",
      "answer": "(2, 4); (-2, 4)",
      "display": "(±2, 4)"
    },
    {
      "id": 17,
      "topic": "Mixed",
      "prompt": "Solve: y = x², y = 2x + 3",
      "answer": "(3, 9); (-1, 1)",
      "display": "(3, 9), (-1, 1)"
    },
    {
      "id": 18,
      "topic": "Mixed",
      "prompt": "Solve: x² + y² = 25, y = 0",
      "answer": "(5, 0); (-5, 0)",
      "display": "(±5, 0)"
    },
    {
      "id": 19,
      "topic": "Mixed",
      "prompt": "Solve: y = x² - 1, y = 3",
      "answer": "(2, 3); (-2, 3)",
      "display": "(±2, 3)"
    },
    {
      "id": 20,
      "topic": "Mixed",
      "prompt": "Solve: x² + y² = 10, x = y",
      "answer": "(√5, √5); (-√5, -√5)",
      "display": "(±√5, ±√5)"
    },
    {
      "id": 21,
      "topic": "Expand",
      "prompt": "Expand: 3(x + 5)",
      "answer": "3x+15",
      "display": "3x + 15"
    },
    {
      "id": 22,
      "topic": "Expand",
      "prompt": "Expand: -2(4x - 3)",
      "answer": "-8x+6",
      "display": "-8x + 6"
    },
    {
      "id": 23,
      "topic": "Expand",
      "prompt": "Expand: (x + 2)(x + 5)",
      "answer": "x^2+7x+10",
      "display": "x² + 7x + 10"
    },
    {
      "id": 24,
      "topic": "Expand",
      "prompt": "Expand: (x - 3)(x + 4)",
      "answer": "x^2+x-12",
      "display": "x² + x - 12"
    },
    {
      "id": 25,
      "topic": "Expand",
      "prompt": "Expand: (2x + 1)(x - 3)",
      "answer": "2x^2-5x-3",
      "display": "2x² - 5x - 3"
    },
    {
      "id": 26,
      "topic": "Factor",
      "prompt": "Factor: x² + 5x + 6",
      "answer": "(x+2)(x+3)",
      "display": "(x + 2)(x + 3)"
    },
    {
      "id": 27,
      "topic": "Factor",
      "prompt": "Factor: x² - 9",
      "answer": "(x+3)(x-3)",
      "display": "(x + 3)(x - 3)"
    },
    {
      "id": 28,
      "topic": "Factor",
      "prompt": "Factor: x² - 5x + 6",
      "answer": "(x-2)(x-3)",
      "display": "(x - 2)(x - 3)"
    },
    {
      "id": 29,
      "topic": "Factor",
      "prompt": "Factor: 2x² + 5x + 3",
      "answer": "(2x+3)(x+1)",
      "display": "(2x + 3)(x + 1)"
    },
    {
      "id": 30,
      "topic": "Factor",
      "prompt": "Factor: x² + 6x + 9",
      "answer": "(x+3)^2",
      "display": "(x + 3)²"
    },
    {
      "id": 31,
      "topic": "Factor",
      "prompt": "Factor: 4x² - 25",
      "answer": "(2x+5)(2x-5)",
      "display": "(2x + 5)(2x - 5)"
    },
    {
      "id": 32,
      "topic": "Factor",
      "prompt": "Factor: x³ - 8",
      "answer": "(x-2)(x^2+2x+4)",
      "display": "(x - 2)(x² + 2x + 4)"
    },
    {
      "id": 33,
      "topic": "Simplify",
      "prompt": "Simplify: (x² - 4)/(x + 2)",
      "answer": "x-2",
      "display": "x - 2"
    },
    {
      "id": 34,
      "topic": "Simplify",
      "prompt": "Simplify: 5x² + 3x² - 2x + 4x",
      "answer": "8x^2+2x",
      "display": "8x² + 2x"
    },
    {
      "id": 35,
      "topic": "Simplify",
      "prompt": "Simplify: x³ · x⁴ (as x^n)",
      "answer": "x^7",
      "display": "x⁷"
    },
    {
      "id": 36,
      "topic": "Simplify",
      "prompt": "Simplify: x⁶/x² (as x^n)",
      "answer": "x^4",
      "display": "x⁴"
    },
    {
      "id": 37,
      "topic": "Simplify",
      "prompt": "Simplify: (x³)² (as x^n)",
      "answer": "x^6",
      "display": "x⁶"
    },
    {
      "id": 38,
      "topic": "Special",
      "prompt": "Expand: (x + 4)²",
      "answer": "x^2+8x+16",
      "display": "x² + 8x + 16"
    },
    {
      "id": 39,
      "topic": "Special",
      "prompt": "Factor: x³ + 27",
      "answer": "(x+3)(x^2-3x+9)",
      "display": "(x + 3)(x² - 3x + 9)"
    },
    {
      "id": 40,
      "topic": "GCF",
      "prompt": "Factor: 6x³ - 9x²",
      "answer": "3x^2(2x-3)",
      "display": "3x²(2x - 3)"
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
  "day17": [
    {
      "id": 1,
      "topic": "Basics",
      "prompt": "dy/dx = 2y. General solution: y = Ce^(?x)",
      "answer": [
        "2",
        "2x"
      ],
      "display": "Ce^{2x}"
    },
    {
      "id": 2,
      "topic": "Basics",
      "prompt": "dy/dx = -y, y(0)=5. Solution: y = 5e^(?)",
      "answer": [
        "-x",
        "-t"
      ],
      "display": "5e^{-x}"
    },
    {
      "id": 3,
      "topic": "Separable",
      "prompt": "To solve dy/dx = xy, first step: separate to dy/y = ? dx",
      "answer": [
        "x"
      ],
      "display": "x dx"
    },
    {
      "id": 4,
      "topic": "Linear",
      "prompt": "For dy/dx + P(x)y = Q(x), integrating factor μ = e^∫? dx",
      "answer": [
        "p(x)",
        "p"
      ],
      "display": "e^{∫P(x)dx}"
    },
    {
      "id": 5,
      "topic": "Second",
      "prompt": "For ay'' + by' + cy = 0, we try y = e^(?)",
      "answer": [
        "rx",
        "r"
      ],
      "display": "e^{rx}"
    },
    {
      "id": 6,
      "topic": "Second",
      "prompt": "Characteristic equation ar² + br + c = 0 has complex roots ⟹ solution has ___ and ___ functions",
      "answer": [
        "sin",
        "cos",
        "sine",
        "cosine"
      ],
      "display": "sin and cos"
    },
    {
      "id": 7,
      "topic": "Second",
      "prompt": "y'' - 4y = 0. Char eq: r² = 4, r = ±2. Solution: y = C₁e^{2x} + C₂e^(?)",
      "answer": [
        "-2x"
      ],
      "display": "e^{-2x}"
    },
    {
      "id": 8,
      "topic": "Second",
      "prompt": "y'' + 4y = 0. Char eq: r² = -4, r = ±2i. Solution involves cos(?x) and sin(?x)",
      "answer": [
        "2"
      ],
      "display": "cos(2x), sin(2x)"
    },
    {
      "id": 9,
      "topic": "Numerical",
      "prompt": "Euler's method: y_{n+1} = y_n + h × f(x_n, ?)",
      "answer": [
        "yn",
        "y_n",
        "y"
      ],
      "display": "f(x_n, y_n)"
    },
    {
      "id": 10,
      "topic": "Apply",
      "prompt": "Overdamped system has ___ distinct real roots",
      "answer": [
        "2",
        "two"
      ],
      "display": "2"
    },
    {
      "id": 11,
      "topic": "Apply",
      "prompt": "Underdamped system shows decaying ___",
      "answer": [
        "oscillation",
        "oscillations"
      ],
      "display": "oscillations"
    },
    {
      "id": 12,
      "topic": "Apply",
      "prompt": "For production use, which scipy function solves ODEs?",
      "answer": [
        "odeint",
        "solve_ivp"
      ],
      "display": "odeint / solve_ivp"
    }
  ],
  "day11": [
    {
      "id": 1,
      "topic": "Arithmetic",
      "prompt": "Σᵢ₌₁⁵ i = 1+2+3+4+5 = ?",
      "answer": [
        "15"
      ],
      "display": "15"
    },
    {
      "id": 2,
      "topic": "Arithmetic",
      "prompt": "Σᵢ₌₁¹⁰⁰ i using formula n(n+1)/2 = ?",
      "answer": [
        "5050"
      ],
      "display": "5050"
    },
    {
      "id": 3,
      "topic": "Arithmetic",
      "prompt": "1+2+...+10 = 10×11/2 = ?",
      "answer": [
        "55"
      ],
      "display": "55"
    },
    {
      "id": 4,
      "topic": "Geometric",
      "prompt": "1+2+4+8 = 2⁴-1 = ?",
      "answer": [
        "15"
      ],
      "display": "15"
    },
    {
      "id": 5,
      "topic": "Geometric",
      "prompt": "1+2+4+8+16+32 = 2⁶-1 = ?",
      "answer": [
        "63"
      ],
      "display": "63"
    },
    {
      "id": 6,
      "topic": "Geometric",
      "prompt": "Σᵢ₌₀³ 3ⁱ = 1+3+9+27 = ?",
      "answer": [
        "40"
      ],
      "display": "40"
    },
    {
      "id": 7,
      "topic": "Infinite",
      "prompt": "1+1/2+1/4+1/8+... = 1/(1-0.5) = ?",
      "answer": [
        "2"
      ],
      "display": "2"
    },
    {
      "id": 8,
      "topic": "Formula",
      "prompt": "Σᵢ₌₁ⁿ i = n(n+?)/2",
      "answer": [
        "1"
      ],
      "display": "1"
    },
    {
      "id": 9,
      "topic": "Formula",
      "prompt": "Powers of 2: Σᵢ₌₀ⁿ 2ⁱ = 2^(n+1) - ?",
      "answer": [
        "1"
      ],
      "display": "1"
    },
    {
      "id": 10,
      "topic": "Telescope",
      "prompt": "(1-1/2)+(1/2-1/3)+(1/3-1/4)+(1/4-1/5) = 1 - ?",
      "answer": [
        "1/5",
        "0.2"
      ],
      "display": "1/5"
    },
    {
      "id": 11,
      "topic": "Apply",
      "prompt": "Full binary tree height 3: 1+2+4+8 = ? nodes",
      "answer": [
        "15"
      ],
      "display": "15"
    },
    {
      "id": 12,
      "topic": "Apply",
      "prompt": "Bubble sort n=10: 9+8+...+1 = 10×9/2 = ?",
      "answer": [
        "45"
      ],
      "display": "45"
    },
    {
      "id": 13,
      "topic": "BigO",
      "prompt": "Σᵢ₌₁ⁿ i is O(n^?) — what exponent?",
      "answer": [
        "2"
      ],
      "display": "2"
    },
    {
      "id": 14,
      "topic": "BigO",
      "prompt": "Σᵢ₌₁ⁿ i² is O(n^?) — what exponent?",
      "answer": [
        "3"
      ],
      "display": "3"
    },
    {
      "id": 15,
      "topic": "BigO",
      "prompt": "Harmonic series Σ1/i is O(? n)",
      "answer": [
        "log",
        "logn"
      ],
      "display": "O(log n)"
    },
    {
      "id": 16,
      "topic": "Property",
      "prompt": "Σᵢ₌₁ⁿ c = ? × c",
      "answer": [
        "n"
      ],
      "display": "n"
    }
  ],
  "day15": [
    {
      "id": 1,
      "topic": "Partial",
      "prompt": "f(x,y) = x²y. ∂f/∂x = ?",
      "answer": [
        "2xy"
      ],
      "display": "2xy"
    },
    {
      "id": 2,
      "topic": "Partial",
      "prompt": "f(x,y) = x²y. ∂f/∂y = ?",
      "answer": [
        "x^2",
        "x²"
      ],
      "display": "x²"
    },
    {
      "id": 3,
      "topic": "Partial",
      "prompt": "f(x,y) = 3xy². ∂f/∂x = ?",
      "answer": [
        "3y^2",
        "3y²"
      ],
      "display": "3y²"
    },
    {
      "id": 4,
      "topic": "Partial",
      "prompt": "f(x,y) = 3xy². ∂f/∂y = ?",
      "answer": [
        "6xy"
      ],
      "display": "6xy"
    },
    {
      "id": 5,
      "topic": "Gradient",
      "prompt": "f(x,y) = x² + y². ∇f = ?",
      "answer": [
        "(2x,2y)",
        "[2x,2y]"
      ],
      "display": "(2x, 2y)"
    },
    {
      "id": 6,
      "topic": "Gradient",
      "prompt": "Gradient points in direction of steepest ___?",
      "answer": [
        "ascent",
        "increase"
      ],
      "display": "ascent"
    },
    {
      "id": 7,
      "topic": "Gradient",
      "prompt": "For gradient descent, we move in direction -∇f. T/F?",
      "answer": [
        "t",
        "true",
        "yes"
      ],
      "display": "True"
    },
    {
      "id": 8,
      "topic": "Hessian",
      "prompt": "f_xy = f_yx when partials are ___?",
      "answer": [
        "continuous"
      ],
      "display": "continuous"
    },
    {
      "id": 9,
      "topic": "Hessian",
      "prompt": "Positive definite Hessian indicates local ___?",
      "answer": [
        "minimum",
        "min"
      ],
      "display": "minimum"
    },
    {
      "id": 10,
      "topic": "Jacobian",
      "prompt": "For F: ℝ² → ℝ², Jacobian is a _×_ matrix",
      "answer": [
        "2x2",
        "2 x 2"
      ],
      "display": "2×2"
    },
    {
      "id": 11,
      "topic": "Jacobian",
      "prompt": "Polar: x=r·cos(θ), y=r·sin(θ). |det(J)| = ?",
      "answer": [
        "r"
      ],
      "display": "r"
    },
    {
      "id": 12,
      "topic": "Jacobian",
      "prompt": "Jacobian determinant measures how transformation scales ___?",
      "answer": [
        "area",
        "volume"
      ],
      "display": "area/volume"
    },
    {
      "id": 13,
      "topic": "Chain",
      "prompt": "dz/dt = (∂f/∂x)(dx/dt) + (∂f/∂y)(dy/dt). This is ___ rule?",
      "answer": [
        "chain"
      ],
      "display": "chain rule"
    },
    {
      "id": 14,
      "topic": "Apply",
      "prompt": "In ML, gradient descent uses learning rate × ∇f. T/F?",
      "answer": [
        "t",
        "true",
        "yes"
      ],
      "display": "True"
    },
    {
      "id": 15,
      "topic": "Apply",
      "prompt": "Backpropagation computes gradients using ___ rule?",
      "answer": [
        "chain"
      ],
      "display": "chain rule"
    }
  ],
  "day14": [
    {
      "id": 1,
      "topic": "Birthday",
      "prompt": "Birthday problem uses which rule to simplify? (complement/addition/product)",
      "answer": [
        "complement"
      ],
      "display": "Complement rule"
    },
    {
      "id": 2,
      "topic": "Birthday",
      "prompt": "P(all different) uses which rule for sequential events?",
      "answer": [
        "chain",
        "multiplication",
        "product"
      ],
      "display": "Chain rule (multiplication)"
    },
    {
      "id": 3,
      "topic": "Coupon",
      "prompt": "Coupon collector: waiting time follows which distribution?",
      "answer": [
        "geometric"
      ],
      "display": "Geometric distribution"
    },
    {
      "id": 4,
      "topic": "Coupon",
      "prompt": "E[draws to collect n coupons] ≈ n × ln(?)",
      "answer": [
        "n"
      ],
      "display": "n ln n"
    },
    {
      "id": 5,
      "topic": "QuickSort",
      "prompt": "QuickSort analysis uses what type of random variables to count comparisons?",
      "answer": [
        "indicator"
      ],
      "display": "Indicator random variables"
    },
    {
      "id": 6,
      "topic": "Bayes",
      "prompt": "In spam example, P(spam|FREE) = 0.80. What rule was used?",
      "answer": [
        "bayes",
        "bayes'"
      ],
      "display": "Bayes' Theorem"
    }
  ],
  "day9": [
    {
      "id": 1,
      "topic": "Log",
      "prompt": "log₂(32) = ?",
      "answer": [
        "5"
      ],
      "display": "5"
    },
    {
      "id": 2,
      "topic": "Log",
      "prompt": "log₂(1) = ?",
      "answer": [
        "0"
      ],
      "display": "0"
    },
    {
      "id": 3,
      "topic": "Log",
      "prompt": "log₁₀(10000) = ?",
      "answer": [
        "4"
      ],
      "display": "4"
    },
    {
      "id": 4,
      "topic": "Log",
      "prompt": "2^(log₂(n)) = ?",
      "answer": [
        "n"
      ],
      "display": "n"
    },
    {
      "id": 5,
      "topic": "Log",
      "prompt": "log(a×b) = log(a) + ?",
      "answer": [
        "log(b)",
        "logb"
      ],
      "display": "log(b)"
    },
    {
      "id": 6,
      "topic": "Growth",
      "prompt": "Is n³ polynomial or exponential?",
      "answer": [
        "polynomial",
        "poly",
        "p"
      ],
      "display": "Polynomial"
    },
    {
      "id": 7,
      "topic": "Growth",
      "prompt": "Is 2ⁿ polynomial or exponential?",
      "answer": [
        "exponential",
        "exp",
        "e"
      ],
      "display": "Exponential"
    },
    {
      "id": 8,
      "topic": "Growth",
      "prompt": "Is 1.01ⁿ polynomial or exponential?",
      "answer": [
        "exponential",
        "exp",
        "e"
      ],
      "display": "Exponential"
    },
    {
      "id": 9,
      "topic": "Growth",
      "prompt": "Is n^100 polynomial or exponential?",
      "answer": [
        "polynomial",
        "poly",
        "p"
      ],
      "display": "Polynomial"
    },
    {
      "id": 10,
      "topic": "Compare",
      "prompt": "Which grows faster: n¹⁰ or 2ⁿ (for large n)?",
      "answer": [
        "2^n",
        "2ⁿ",
        "exponential"
      ],
      "display": "2ⁿ"
    },
    {
      "id": 11,
      "topic": "Compare",
      "prompt": "Which is faster algorithm: O(n²) or O(2ⁿ)?",
      "answer": [
        "o(n^2)",
        "n^2",
        "n²",
        "o(n²)"
      ],
      "display": "O(n²)"
    },
    {
      "id": 12,
      "topic": "Plot",
      "prompt": "On a log-log plot, y=n² appears as a line with slope?",
      "answer": [
        "2"
      ],
      "display": "2"
    },
    {
      "id": 13,
      "topic": "Plot",
      "prompt": "What type of plot makes exponentials look linear?",
      "answer": [
        "semi-log",
        "semilog",
        "log-linear"
      ],
      "display": "Semi-log"
    },
    {
      "id": 14,
      "topic": "Calc",
      "prompt": "If log₂(n)=20, what is n?",
      "answer": [
        "1048576",
        "2^20",
        "1,048,576"
      ],
      "display": "2²⁰ = 1,048,576"
    },
    {
      "id": 15,
      "topic": "Calc",
      "prompt": "How many steps for binary search on 1 billion items? (approx)",
      "answer": [
        "30",
        "~30",
        "about 30",
        "approximately 30"
      ],
      "display": "≈ 30"
    }
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
    }
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
    }
  ],
  "day10": [
    {
      "id": 1,
      "topic": "Floor",
      "prompt": "⌊4.7⌋ = ?",
      "answer": [
        "4"
      ],
      "display": "4"
    },
    {
      "id": 2,
      "topic": "Floor",
      "prompt": "⌊-2.3⌋ = ?",
      "answer": [
        "-3"
      ],
      "display": "-3"
    },
    {
      "id": 3,
      "topic": "Floor",
      "prompt": "⌊5.0⌋ = ?",
      "answer": [
        "5"
      ],
      "display": "5"
    },
    {
      "id": 4,
      "topic": "Ceiling",
      "prompt": "⌈3.1⌉ = ?",
      "answer": [
        "4"
      ],
      "display": "4"
    },
    {
      "id": 5,
      "topic": "Ceiling",
      "prompt": "⌈-1.5⌉ = ?",
      "answer": [
        "-1"
      ],
      "display": "-1"
    },
    {
      "id": 6,
      "topic": "Ceiling",
      "prompt": "⌈7.0⌉ = ?",
      "answer": [
        "7"
      ],
      "display": "7"
    },
    {
      "id": 7,
      "topic": "Division",
      "prompt": "17 // 5 = ? (Python)",
      "answer": [
        "3"
      ],
      "display": "3"
    },
    {
      "id": 8,
      "topic": "Division",
      "prompt": "-17 // 5 = ? (Python)",
      "answer": [
        "-4"
      ],
      "display": "-4"
    },
    {
      "id": 9,
      "topic": "Modulo",
      "prompt": "17 % 5 = ?",
      "answer": [
        "2"
      ],
      "display": "2"
    },
    {
      "id": 10,
      "topic": "Modulo",
      "prompt": "23 % 7 = ?",
      "answer": [
        "2"
      ],
      "display": "2"
    },
    {
      "id": 11,
      "topic": "Modulo",
      "prompt": "100 % 10 = ?",
      "answer": [
        "0"
      ],
      "display": "0"
    },
    {
      "id": 12,
      "topic": "Modulo",
      "prompt": "15 % 4 = ?",
      "answer": [
        "3"
      ],
      "display": "3"
    },
    {
      "id": 13,
      "topic": "Apply",
      "prompt": "Pagination: ⌈47/10⌉ pages = ?",
      "answer": [
        "5"
      ],
      "display": "5"
    },
    {
      "id": 14,
      "topic": "Apply",
      "prompt": "Binary search mid: (3 + 9) // 2 = ?",
      "answer": [
        "6"
      ],
      "display": "6"
    },
    {
      "id": 15,
      "topic": "Apply",
      "prompt": "Last digit of 12345: 12345 % 10 = ?",
      "answer": [
        "5"
      ],
      "display": "5"
    },
    {
      "id": 16,
      "topic": "Apply",
      "prompt": "Is 24 divisible by 6? (24 % 6 == 0): yes/no",
      "answer": [
        "yes",
        "y"
      ],
      "display": "Yes"
    },
    {
      "id": 17,
      "topic": "Apply",
      "prompt": "Wrap index: (4 + 1) % 5 = ?",
      "answer": [
        "0"
      ],
      "display": "0"
    },
    {
      "id": 18,
      "topic": "Identity",
      "prompt": "⌈x⌉ = -⌊?⌋ (fill in blank)",
      "answer": [
        "-x"
      ],
      "display": "-x"
    }
  ],
  "day13": [
    {
      "id": 1,
      "topic": "Definition",
      "prompt": "E[fair die roll] = (1+2+3+4+5+6)/6 = ?",
      "answer": [
        "3.5",
        "7/2"
      ],
      "display": "3.5"
    },
    {
      "id": 2,
      "topic": "Definition",
      "prompt": "E[fair coin] where heads=1, tails=0 = ?",
      "answer": [
        "0.5",
        "1/2"
      ],
      "display": "0.5"
    },
    {
      "id": 3,
      "topic": "Linearity",
      "prompt": "E[X+Y] = E[X] + E[?]",
      "answer": [
        "y",
        "e[y]"
      ],
      "display": "E[Y]"
    },
    {
      "id": 4,
      "topic": "Linearity",
      "prompt": "E[sum of 10 fair dice] = 10 × 3.5 = ?",
      "answer": [
        "35"
      ],
      "display": "35"
    },
    {
      "id": 5,
      "topic": "Linearity",
      "prompt": "E[2X + 5] if E[X] = 3 is 2×3 + 5 = ?",
      "answer": [
        "11"
      ],
      "display": "11"
    },
    {
      "id": 6,
      "topic": "Indicator",
      "prompt": "If Iₐ is indicator for A, E[Iₐ] = P(?)",
      "answer": [
        "a"
      ],
      "display": "P(A)"
    },
    {
      "id": 7,
      "topic": "Indicator",
      "prompt": "E[# heads in 100 fair flips] = 100 × 0.5 = ?",
      "answer": [
        "50"
      ],
      "display": "50"
    },
    {
      "id": 8,
      "topic": "Hat Check",
      "prompt": "n people, random hats. E[# correct] = ?",
      "answer": [
        "1"
      ],
      "display": "1"
    },
    {
      "id": 9,
      "topic": "Coupon",
      "prompt": "Coupon collector: E[draws] ≈ n × H_n ≈ n × ln(?)",
      "answer": [
        "n"
      ],
      "display": "n ln n"
    },
    {
      "id": 10,
      "topic": "Property",
      "prompt": "Does linearity require X,Y independent? (yes/no)",
      "answer": [
        "no",
        "n"
      ],
      "display": "No"
    },
    {
      "id": 11,
      "topic": "QuickSort",
      "prompt": "QuickSort expected time is O(n log ?)",
      "answer": [
        "n"
      ],
      "display": "O(n log n)"
    },
    {
      "id": 12,
      "topic": "Hash",
      "prompt": "Hash table α=0.5: E[unsuccessful probes] = 1/(1-0.5) = ?",
      "answer": [
        "2"
      ],
      "display": "2"
    },
    {
      "id": 13,
      "topic": "Calculate",
      "prompt": "Roll 2 dice, X = sum. E[X] = 2 × 3.5 = ?",
      "answer": [
        "7"
      ],
      "display": "7"
    },
    {
      "id": 14,
      "topic": "Calculate",
      "prompt": "100 trials, each succeeds with p=0.1. E[successes] = ?",
      "answer": [
        "10"
      ],
      "display": "10"
    },
    {
      "id": 15,
      "topic": "Concept",
      "prompt": "E[X] need not be a possible value of X. T/F?",
      "answer": [
        "t",
        "true",
        "yes"
      ],
      "display": "True"
    }
  ],
  "day12": [
    {
      "id": 1,
      "topic": "Basic",
      "prompt": "P(heads on fair coin) = ?",
      "answer": [
        "1/2",
        "0.5",
        "50%"
      ],
      "display": "1/2"
    },
    {
      "id": 2,
      "topic": "Basic",
      "prompt": "P(roll 6 on fair die) = ?",
      "answer": [
        "1/6"
      ],
      "display": "1/6"
    },
    {
      "id": 3,
      "topic": "Complement",
      "prompt": "P(not A) = 1 - P(?)",
      "answer": [
        "a",
        "p(a)"
      ],
      "display": "P(A)"
    },
    {
      "id": 4,
      "topic": "Complement",
      "prompt": "If P(rain) = 0.3, P(no rain) = ?",
      "answer": [
        "0.7",
        "7/10"
      ],
      "display": "0.7"
    },
    {
      "id": 5,
      "topic": "Addition",
      "prompt": "P(roll 1 or 2) = 1/6 + 1/6 = ?",
      "answer": [
        "2/6",
        "1/3"
      ],
      "display": "1/3"
    },
    {
      "id": 6,
      "topic": "Multiply",
      "prompt": "P(2 heads in a row) = 1/2 × 1/2 = ?",
      "answer": [
        "1/4",
        "0.25"
      ],
      "display": "1/4"
    },
    {
      "id": 7,
      "topic": "Multiply",
      "prompt": "P(3 heads in a row) = ?",
      "answer": [
        "1/8",
        "0.125"
      ],
      "display": "1/8"
    },
    {
      "id": 8,
      "topic": "Conditional",
      "prompt": "P(A|B) = P(A and B) / P(?)",
      "answer": [
        "b",
        "p(b)"
      ],
      "display": "P(B)"
    },
    {
      "id": 9,
      "topic": "Independence",
      "prompt": "If A,B independent: P(A and B) = P(A) × P(?)",
      "answer": [
        "b",
        "p(b)"
      ],
      "display": "P(B)"
    },
    {
      "id": 10,
      "topic": "Independence",
      "prompt": "Server fails 10%, 2 independent: P(both fail) = ?",
      "answer": [
        "0.01",
        "1/100",
        "1%"
      ],
      "display": "0.01"
    },
    {
      "id": 11,
      "topic": "Independence",
      "prompt": "P(at least one of 2 servers works) = 1 - 0.01 = ?",
      "answer": [
        "0.99",
        "99%"
      ],
      "display": "0.99"
    },
    {
      "id": 12,
      "topic": "Bayes",
      "prompt": "Bayes: P(A|B) = P(B|A) × P(A) / P(?)",
      "answer": [
        "b",
        "p(b)"
      ],
      "display": "P(B)"
    },
    {
      "id": 13,
      "topic": "Cards",
      "prompt": "P(ace from 52-card deck) = ?",
      "answer": [
        "4/52",
        "1/13"
      ],
      "display": "1/13"
    },
    {
      "id": 14,
      "topic": "Cards",
      "prompt": "P(second ace | first ace, no replacement) = 3/?",
      "answer": [
        "51"
      ],
      "display": "3/51"
    },
    {
      "id": 15,
      "topic": "Birthday",
      "prompt": "Birthday paradox: ~? people for 50% shared birthday",
      "answer": [
        "23"
      ],
      "display": "23"
    },
    {
      "id": 16,
      "topic": "Bayes",
      "prompt": "In disease test example, P(disease|positive) ≈ 50%. T/F?",
      "answer": [
        "t",
        "true",
        "yes"
      ],
      "display": "True"
    }
  ],
  "day20": [
    {
      "id": 1,
      "topic": "Basics",
      "prompt": "ODE stands for ___ Differential Equation",
      "answer": "ordinary",
      "display": "Ordinary"
    },
    {
      "id": 2,
      "topic": "Exponential",
      "prompt": "Solution to dy/dt = ky is y = y₀e^(___)",
      "answer": "kt",
      "display": "kt"
    },
    {
      "id": 3,
      "topic": "Exponential",
      "prompt": "If k < 0, we have exponential ___ (growth/decay)",
      "answer": "decay",
      "display": "decay"
    },
    {
      "id": 4,
      "topic": "Separable",
      "prompt": "dy/dx = xy can be solved by ___ variables",
      "answer": "separating",
      "display": "separating"
    },
    {
      "id": 5,
      "topic": "Harmonic",
      "prompt": "y'' + ω²y = 0 has solutions involving sin and ___",
      "answer": "cos,cosine",
      "display": "cos"
    },
    {
      "id": 6,
      "topic": "Numerical",
      "prompt": "SciPy function for solving ODEs numerically: ___",
      "answer": "odeint,solve_ivp",
      "display": "odeint (or solve_ivp)"
    }
  ],
  "day18": [
    {
      "id": 1,
      "topic": "Double",
      "prompt": "∫₀¹ ∫₀¹ 1 dxdy = ?",
      "answer": [
        "1"
      ],
      "display": "1"
    },
    {
      "id": 2,
      "topic": "Double",
      "prompt": "Order of integration can be switched by ___ theorem",
      "answer": [
        "fubini",
        "fubini's"
      ],
      "display": "Fubini's Theorem"
    },
    {
      "id": 3,
      "topic": "Polar",
      "prompt": "In polar, dA = ? dr dθ",
      "answer": [
        "r"
      ],
      "display": "r"
    },
    {
      "id": 4,
      "topic": "Polar",
      "prompt": "Area of unit circle: ∫₀^{2π} ∫₀¹ r drdθ = ?",
      "answer": [
        "π",
        "pi"
      ],
      "display": "π"
    },
    {
      "id": 5,
      "topic": "Spherical",
      "prompt": "In spherical, |J| = ρ² × sin(?)",
      "answer": [
        "φ",
        "phi"
      ],
      "display": "sin(φ)"
    },
    {
      "id": 6,
      "topic": "Spherical",
      "prompt": "Volume element in spherical: dV = ρ² sin(φ) dρ dφ d?",
      "answer": [
        "θ",
        "theta"
      ],
      "display": "dθ"
    },
    {
      "id": 7,
      "topic": "Change",
      "prompt": "When changing variables, we multiply by absolute value of ___?",
      "answer": [
        "jacobian",
        "det(j)",
        "determinant"
      ],
      "display": "Jacobian"
    },
    {
      "id": 8,
      "topic": "Cylindrical",
      "prompt": "In cylindrical, dV = r dr dθ d?",
      "answer": [
        "z"
      ],
      "display": "dz"
    },
    {
      "id": 9,
      "topic": "Apply",
      "prompt": "Mass of region E with density ρ: M = ∫∫∫ ? dV",
      "answer": [
        "ρ",
        "rho",
        "density"
      ],
      "display": "ρ (density)"
    },
    {
      "id": 10,
      "topic": "Apply",
      "prompt": "Volume of region E = ∫∫∫_E ? dV",
      "answer": [
        "1"
      ],
      "display": "1"
    },
    {
      "id": 11,
      "topic": "Polar",
      "prompt": "x² + y² in polar = ?",
      "answer": [
        "r^2",
        "r²"
      ],
      "display": "r²"
    },
    {
      "id": 12,
      "topic": "Concept",
      "prompt": "Jacobian measures how transformation scales ___?",
      "answer": [
        "area",
        "volume"
      ],
      "display": "area/volume"
    },
    {
      "id": 13,
      "topic": "Line",
      "prompt": "∫_C 1 ds gives the ___ of curve C",
      "answer": [
        "arclength",
        "arc length",
        "length"
      ],
      "display": "arc length"
    },
    {
      "id": 14,
      "topic": "Line",
      "prompt": "∫_C F·dr computes ___ done by force F?",
      "answer": [
        "work"
      ],
      "display": "work"
    },
    {
      "id": 15,
      "topic": "Conservative",
      "prompt": "F is conservative if F = ∇ ___ for some scalar function",
      "answer": [
        "φ",
        "phi",
        "f",
        "potential"
      ],
      "display": "φ (potential)"
    },
    {
      "id": 16,
      "topic": "Conservative",
      "prompt": "For conservative F, line integral depends only on ___?",
      "answer": [
        "endpoints",
        "start and end"
      ],
      "display": "endpoints"
    },
    {
      "id": 17,
      "topic": "Conservative",
      "prompt": "F is conservative if curl(F) = ?",
      "answer": [
        "0",
        "zero"
      ],
      "display": "0"
    },
    {
      "id": 18,
      "topic": "Surface",
      "prompt": "∫∫_S 1 dS gives ___ of surface S",
      "answer": [
        "area",
        "surface area"
      ],
      "display": "surface area"
    },
    {
      "id": 19,
      "topic": "Flux",
      "prompt": "∫∫_S F·dS measures ___ through surface",
      "answer": [
        "flux",
        "flow"
      ],
      "display": "flux"
    },
    {
      "id": 20,
      "topic": "Theorem",
      "prompt": "Green's theorem relates line integral to ___ integral",
      "answer": [
        "double",
        "area"
      ],
      "display": "double integral"
    },
    {
      "id": 21,
      "topic": "Theorem",
      "prompt": "Divergence theorem: ∫∫_S F·dS = ∫∫∫_V (∇·F) dV relates surface to ___",
      "answer": [
        "volume",
        "triple"
      ],
      "display": "volume/triple integral"
    },
    {
      "id": 22,
      "topic": "Concept",
      "prompt": "All big theorems relate boundary integral to ___ integral?",
      "answer": [
        "interior",
        "inside",
        "region"
      ],
      "display": "interior"
    }
  ]
};
