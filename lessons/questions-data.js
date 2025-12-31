
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
  ],
  "day19": [
    { "id": 1, "topic": "Matrix", "prompt": "A 3×2 matrix times a 2×4 matrix gives a ___×___ matrix", "answer": ["3x4", "3×4"], "display": "3×4" },
    { "id": 2, "topic": "Matrix", "prompt": "If AB = I, then B = A^?", "answer": ["-1", "inverse"], "display": "A⁻¹" },
    { "id": 3, "topic": "Rank", "prompt": "The rank of a matrix is the number of linearly independent ___", "answer": ["rows", "columns"], "display": "rows/columns" },
    { "id": 4, "topic": "Elimination", "prompt": "Row reduction to upper triangular form is called ___ elimination", "answer": ["gaussian", "gauss"], "display": "Gaussian" },
    { "id": 5, "topic": "Determinant", "prompt": "If det(A) = 0, the matrix is ___", "answer": ["singular"], "display": "Singular" },
    { "id": 6, "topic": "Determinant", "prompt": "det(AB) = det(A) × det(___)", "answer": ["b"], "display": "B" },
    { "id": 7, "topic": "Inverse", "prompt": "(AB)⁻¹ = B⁻¹ × ___⁻¹", "answer": ["a"], "display": "A" },
    { "id": 8, "topic": "Transpose", "prompt": "(AB)ᵀ = Bᵀ × ___ᵀ", "answer": ["a"], "display": "A" },
    { "id": 9, "topic": "Rank", "prompt": "rank(A) ≤ min(m, ___) for an m×n matrix", "answer": ["n"], "display": "n" },
    { "id": 10, "topic": "Eigenvalue", "prompt": "det(A - λI) = 0 finds ___", "answer": ["eigenvalues"], "display": "Eigenvalues" },
    { "id": 11, "topic": "Eigenvalue", "prompt": "Av = λv means v is an ___ of A", "answer": ["eigenvector"], "display": "Eigenvector" },
    { "id": 12, "topic": "Systems", "prompt": "Ax = b has unique solution if rank(A) = rank([A|b]) = number of ___", "answer": ["unknowns", "variables"], "display": "unknowns" },
    { "id": 13, "topic": "Nullspace", "prompt": "The nullspace of A contains all x where Ax = ___", "answer": ["0", "zero"], "display": "0" },
    { "id": 14, "topic": "Concept", "prompt": "NumPy function to solve Ax=b: np.linalg.___", "answer": ["solve"], "display": "solve" },
    { "id": 15, "topic": "LU", "prompt": "LU decomposition factors A = ___ × U", "answer": ["l"], "display": "L" },
    { "id": 16, "topic": "Determinant", "prompt": "det(I) = ?", "answer": ["1"], "display": "1" },
    { "id": 17, "topic": "Matrix", "prompt": "A matrix equal to its transpose is called ___", "answer": ["symmetric"], "display": "Symmetric" },
    { "id": 18, "topic": "Eigenvalue", "prompt": "Sum of eigenvalues = ___ of matrix", "answer": ["trace"], "display": "Trace" },
    { "id": 19, "topic": "Eigenvalue", "prompt": "Product of eigenvalues = ___ of matrix", "answer": ["determinant", "det"], "display": "Determinant" },
    { "id": 20, "topic": "Concept", "prompt": "Identity matrix has ___ on diagonal, 0 elsewhere", "answer": ["1", "ones"], "display": "1s" }
  ],
  "day20": [
    { "id": 1, "topic": "Orthogonal", "prompt": "Two vectors are orthogonal if their dot product is ___", "answer": ["0", "zero"], "display": "0" },
    { "id": 2, "topic": "Orthogonal", "prompt": "||v|| = √(v · ___)", "answer": ["v", "itself"], "display": "v" },
    { "id": 3, "topic": "Projection", "prompt": "proj_u(v) = (v·u / u·u) × ___", "answer": ["u"], "display": "u" },
    { "id": 4, "topic": "LeastSquares", "prompt": "Least squares solution minimizes ||Ax - ___||²", "answer": ["b"], "display": "b" },
    { "id": 5, "topic": "LeastSquares", "prompt": "Normal equations: AᵀAx = Aᵀ___", "answer": ["b"], "display": "b" },
    { "id": 6, "topic": "Orthonormal", "prompt": "Orthonormal vectors have unit ___ and are mutually orthogonal", "answer": ["length", "norm"], "display": "length" },
    { "id": 7, "topic": "GramSchmidt", "prompt": "Process to create orthonormal basis from linearly independent vectors: ___-Schmidt", "answer": ["gram"], "display": "Gram" },
    { "id": 8, "topic": "QR", "prompt": "QR decomposition: Q is orthogonal, R is upper ___", "answer": ["triangular"], "display": "Triangular" },
    { "id": 9, "topic": "Orthogonal", "prompt": "If Q is orthogonal, QᵀQ = ___", "answer": ["i", "identity"], "display": "I" },
    { "id": 10, "topic": "Orthogonal", "prompt": "Orthogonal matrices preserve ___ (lengths/angles)", "answer": ["lengths", "angles", "both"], "display": "lengths and angles" },
    { "id": 11, "topic": "Projection", "prompt": "Projection matrix P satisfies P² = ___", "answer": ["p"], "display": "P (idempotent)" },
    { "id": 12, "topic": "Pseudoinverse", "prompt": "Moore-Penrose inverse A⁺ gives least squares solution for ___ systems", "answer": ["overdetermined"], "display": "overdetermined" },
    { "id": 13, "topic": "SVD", "prompt": "SVD stands for Singular ___ Decomposition", "answer": ["value"], "display": "Value" },
    { "id": 14, "topic": "SVD", "prompt": "A = UΣVᵀ. The diagonal entries of Σ are called ___ values", "answer": ["singular"], "display": "Singular" },
    { "id": 15, "topic": "Concept", "prompt": "NumPy for least squares: np.linalg.___", "answer": ["lstsq"], "display": "lstsq" },
    { "id": 16, "topic": "Norm", "prompt": "||v||₂ is the ___ norm", "answer": ["euclidean", "l2", "2-norm"], "display": "Euclidean (L2)" },
    { "id": 17, "topic": "Concept", "prompt": "Column space of A is the span of A's ___", "answer": ["columns"], "display": "columns" },
    { "id": 18, "topic": "Rank", "prompt": "rank(A) = rank(Aᵀ). T/F?", "answer": ["true", "t"], "display": "True" },
    { "id": 19, "topic": "Orthogonal", "prompt": "det(Q) = ±1 for orthogonal Q. T/F?", "answer": ["true", "t"], "display": "True" },
    { "id": 20, "topic": "Concept", "prompt": "Rotation matrices are ___ matrices", "answer": ["orthogonal"], "display": "Orthogonal" }
  ],
  "day21": [
    { "id": 1, "topic": "VectorSpace", "prompt": "A vector space requires closure under addition and scalar ___", "answer": ["multiplication"], "display": "Multiplication" },
    { "id": 2, "topic": "VectorSpace", "prompt": "ℝⁿ is a vector space over the field ___", "answer": ["r", "reals", "ℝ"], "display": "ℝ (reals)" },
    { "id": 3, "topic": "Subspace", "prompt": "A subspace must contain the ___ vector", "answer": ["zero", "0"], "display": "Zero" },
    { "id": 4, "topic": "LinearMap", "prompt": "T(ax + by) = aT(x) + bT(y) defines a ___ map", "answer": ["linear"], "display": "Linear" },
    { "id": 5, "topic": "LinearMap", "prompt": "Matrix represents linear map; columns are images of ___ vectors", "answer": ["basis", "standard basis"], "display": "basis" },
    { "id": 6, "topic": "Kernel", "prompt": "ker(T) = {v : T(v) = ___}", "answer": ["0", "zero"], "display": "0" },
    { "id": 7, "topic": "Image", "prompt": "im(T) is also called the ___ of T", "answer": ["range", "image"], "display": "Range" },
    { "id": 8, "topic": "Dimension", "prompt": "dim(ker T) + dim(im T) = dim(domain). This is the ___-nullity theorem", "answer": ["rank"], "display": "Rank" },
    { "id": 9, "topic": "Isomorphism", "prompt": "Bijective linear map is an ___", "answer": ["isomorphism"], "display": "Isomorphism" },
    { "id": 10, "topic": "Dual", "prompt": "V* (dual space) consists of linear ___ from V to F", "answer": ["functionals", "maps"], "display": "Functionals" },
    { "id": 11, "topic": "Basis", "prompt": "Linearly independent set that spans V is a ___", "answer": ["basis"], "display": "Basis" },
    { "id": 12, "topic": "Dimension", "prompt": "Number of vectors in any basis of V is the ___ of V", "answer": ["dimension", "dim"], "display": "Dimension" },
    { "id": 13, "topic": "Coordinates", "prompt": "[v]_B gives v's ___ with respect to basis B", "answer": ["coordinates"], "display": "Coordinates" },
    { "id": 14, "topic": "ChangeOfBasis", "prompt": "P converts coordinates between bases. [v]_B' = P⁻¹[v]_B. T/F?", "answer": ["true", "t"], "display": "True" },
    { "id": 15, "topic": "DirectSum", "prompt": "V = U ⊕ W means V = U + W and U ∩ W = {___}", "answer": ["0", "zero"], "display": "{0}" },
    { "id": 16, "topic": "Quotient", "prompt": "V/W is the ___ space", "answer": ["quotient"], "display": "Quotient" },
    { "id": 17, "topic": "Dual", "prompt": "dim(V*) = dim(___)", "answer": ["v"], "display": "V" },
    { "id": 18, "topic": "Concept", "prompt": "Polynomials of degree ≤ n form a vector space of dimension ___", "answer": ["n+1"], "display": "n+1" },
    { "id": 19, "topic": "LinearMap", "prompt": "Composition of linear maps is ___", "answer": ["linear"], "display": "Linear" },
    { "id": 20, "topic": "Concept", "prompt": "{0} is a subspace of every vector space. T/F?", "answer": ["true", "t"], "display": "True" }
  ],
  "day22": [
    { "id": 1, "topic": "InnerProduct", "prompt": "⟨v, v⟩ ≥ ___ with equality iff v = 0", "answer": ["0", "zero"], "display": "0" },
    { "id": 2, "topic": "InnerProduct", "prompt": "⟨u, v⟩ = ⟨v, u⟩ (real case). This is ___", "answer": ["symmetry", "symmetric"], "display": "Symmetry" },
    { "id": 3, "topic": "Norm", "prompt": "||v|| = √⟨v, ___⟩", "answer": ["v"], "display": "v" },
    { "id": 4, "topic": "CauchySchwarz", "prompt": "|⟨u,v⟩| ≤ ||u|| × ||___||", "answer": ["v"], "display": "v" },
    { "id": 5, "topic": "Orthogonal", "prompt": "u ⊥ v means ⟨u, v⟩ = ___", "answer": ["0", "zero"], "display": "0" },
    { "id": 6, "topic": "Adjoint", "prompt": "⟨Av, w⟩ = ⟨v, A*w⟩. A* is the ___ of A", "answer": ["adjoint", "conjugate transpose"], "display": "Adjoint" },
    { "id": 7, "topic": "SelfAdjoint", "prompt": "A = A* means A is self-adjoint (or ___ in real case)", "answer": ["symmetric"], "display": "Symmetric" },
    { "id": 8, "topic": "Spectral", "prompt": "Spectral theorem: self-adjoint matrices are orthogonally ___", "answer": ["diagonalizable"], "display": "Diagonalizable" },
    { "id": 9, "topic": "Spectral", "prompt": "Eigenvalues of self-adjoint matrices are all ___", "answer": ["real"], "display": "Real" },
    { "id": 10, "topic": "Spectral", "prompt": "Eigenvectors of distinct eigenvalues of self-adjoint A are ___", "answer": ["orthogonal"], "display": "Orthogonal" },
    { "id": 11, "topic": "Normal", "prompt": "A is normal if AA* = A*___", "answer": ["a"], "display": "A" },
    { "id": 12, "topic": "Unitary", "prompt": "U*U = I means U is ___ (complex) or orthogonal (real)", "answer": ["unitary"], "display": "Unitary" },
    { "id": 13, "topic": "PositiveDefinite", "prompt": "⟨Av, v⟩ > 0 for all v ≠ 0 means A is positive ___", "answer": ["definite"], "display": "Definite" },
    { "id": 14, "topic": "PositiveDefinite", "prompt": "Positive definite matrices have all ___ eigenvalues > 0", "answer": ["positive"], "display": "Positive" },
    { "id": 15, "topic": "InnerProduct", "prompt": "Standard dot product on ℝⁿ: ⟨x,y⟩ = Σxᵢ___ᵢ", "answer": ["y"], "display": "yᵢ" },
    { "id": 16, "topic": "Triangle", "prompt": "||u + v|| ≤ ||u|| + ||v|| is the ___ inequality", "answer": ["triangle"], "display": "Triangle" },
    { "id": 17, "topic": "Parallelogram", "prompt": "||u+v||² + ||u-v||² = 2(||u||² + ||v||²) is the ___ law", "answer": ["parallelogram"], "display": "Parallelogram" },
    { "id": 18, "topic": "Concept", "prompt": "Frobenius inner product: ⟨A,B⟩ = tr(AᵀB). T/F exists?", "answer": ["true", "t"], "display": "True" },
    { "id": 19, "topic": "Diagonalization", "prompt": "A = QΛQᵀ for symmetric A where Q is ___", "answer": ["orthogonal"], "display": "Orthogonal" },
    { "id": 20, "topic": "Concept", "prompt": "L² functions form an ___ dimensional inner product space", "answer": ["infinite"], "display": "Infinite" }
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
    { "id": 5, "topic": "Logic", "prompt": "p → q is equivalent to ¬p ___ q", "answer": ["∨", "or"], "display": "∨ q" },
    { "id": 6, "topic": "Logic", "prompt": "p → q is false only when p is true and q is ___", "answer": ["false"], "display": "false" },
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
    { "id": 1, "topic": "Recurrence", "prompt": "Fibonacci: F(n) = F(n-1) + F(n-___)", "answer": ["2"], "display": "2" },
    { "id": 2, "topic": "Recurrence", "prompt": "To solve linear recurrence, find ___ of characteristic equation", "answer": ["roots"], "display": "roots" },
    { "id": 3, "topic": "Recurrence", "prompt": "aₙ = 2aₙ₋₁ has characteristic equation r = ___", "answer": ["2"], "display": "2" },
    { "id": 4, "topic": "Recurrence", "prompt": "Solution with roots r₁ ≠ r₂: aₙ = c₁r₁ⁿ + c₂r___ⁿ", "answer": ["2"], "display": "r₂" },
    { "id": 5, "topic": "Recurrence", "prompt": "Repeated root r: aₙ = (c₁ + c₂___)rⁿ", "answer": ["n"], "display": "n" },
    { "id": 6, "topic": "GenFunc", "prompt": "Generating function of sequence aₙ: G(x) = Σ aₙ___ⁿ", "answer": ["x"], "display": "xⁿ" },
    { "id": 7, "topic": "GenFunc", "prompt": "G(x) for 1,1,1,... is 1/(1-___)", "answer": ["x"], "display": "x" },
    { "id": 8, "topic": "GenFunc", "prompt": "G(x) for 1,2,3,... is 1/(1-x)___", "answer": ["2", "squared"], "display": "²" },
    { "id": 9, "topic": "GenFunc", "prompt": "Coefficient extraction: [xⁿ]G(x) means coefficient of ___", "answer": ["x^n", "xⁿ"], "display": "xⁿ" },
    { "id": 10, "topic": "GenFunc", "prompt": "Product of GFs corresponds to ___ of sequences", "answer": ["convolution"], "display": "convolution" },
    { "id": 11, "topic": "MasterTheorem", "prompt": "T(n) = aT(n/b) + f(n). Compare f to n^log_b(___)", "answer": ["a"], "display": "a" },
    { "id": 12, "topic": "Recurrence", "prompt": "T(n) = 2T(n/2) + n solves to O(n ___)", "answer": ["log n", "logn"], "display": "n log n" },
    { "id": 13, "topic": "Recurrence", "prompt": "T(n) = T(n/2) + O(1) is O(___)", "answer": ["log n", "logn"], "display": "log n" },
    { "id": 14, "topic": "Recurrence", "prompt": "Towers of Hanoi: T(n) = 2T(n-1) + 1 → T(n) = 2ⁿ - ___", "answer": ["1"], "display": "1" },
    { "id": 15, "topic": "GenFunc", "prompt": "Exponential GF: Σ aₙ xⁿ/___!", "answer": ["n"], "display": "n!" },
    { "id": 16, "topic": "Catalan", "prompt": "Catalan recurrence: Cₙ₊₁ = Σ Cₖ × C___₋ₖ", "answer": ["n"], "display": "Cₙ₋ₖ" },
    { "id": 17, "topic": "Fibonacci", "prompt": "Fibonacci closed form involves golden ratio φ = (1+√___)/2", "answer": ["5"], "display": "√5" },
    { "id": 18, "topic": "GenFunc", "prompt": "G(x) for Fibonacci: x/(1-x-___))", "answer": ["x^2", "x²"], "display": "x²" },
    { "id": 19, "topic": "Recurrence", "prompt": "Substitution method: guess solution and prove by ___", "answer": ["induction"], "display": "Induction" },
    { "id": 20, "topic": "Recurrence", "prompt": "Recursion tree method: sum costs across all ___", "answer": ["levels"], "display": "levels" }
  ],
  "day29": [
    { "id": 1, "topic": "Graph", "prompt": "Graph G = (V, ___)", "answer": ["e", "edges"], "display": "E (edges)" },
    { "id": 2, "topic": "Graph", "prompt": "Degree of vertex v = number of ___ incident to v", "answer": ["edges"], "display": "edges" },
    { "id": 3, "topic": "Graph", "prompt": "Sum of all degrees = 2 × |___|", "answer": ["e", "edges"], "display": "|E|" },
    { "id": 4, "topic": "Tree", "prompt": "Tree with n vertices has ___ edges", "answer": ["n-1"], "display": "n-1" },
    { "id": 5, "topic": "Tree", "prompt": "Tree is connected graph with no ___", "answer": ["cycles"], "display": "cycles" },
    { "id": 6, "topic": "Connected", "prompt": "Connected graph: path between every pair of ___", "answer": ["vertices", "nodes"], "display": "vertices" },
    { "id": 7, "topic": "Bipartite", "prompt": "Bipartite graph: vertices split into 2 sets, edges only ___ sets", "answer": ["between"], "display": "between" },
    { "id": 8, "topic": "Bipartite", "prompt": "Graph is bipartite iff no ___ cycle", "answer": ["odd"], "display": "odd" },
    { "id": 9, "topic": "Complete", "prompt": "Complete graph Kₙ has ___ edges", "answer": ["n(n-1)/2", "c(n,2)"], "display": "n(n-1)/2" },
    { "id": 10, "topic": "Matching", "prompt": "Perfect matching: every vertex is ___", "answer": ["matched"], "display": "matched" },
    { "id": 11, "topic": "Matching", "prompt": "Hall's theorem: X has matching to Y iff |N(S)| ≥ |S| for all S ⊆ ___", "answer": ["x"], "display": "X" },
    { "id": 12, "topic": "Flow", "prompt": "Max-flow = min-___ (theorem)", "answer": ["cut"], "display": "cut" },
    { "id": 13, "topic": "Flow", "prompt": "Ford-Fulkerson finds max flow via ___ paths", "answer": ["augmenting"], "display": "augmenting" },
    { "id": 14, "topic": "Planar", "prompt": "Planar graph: can be drawn with no edge ___", "answer": ["crossings"], "display": "crossings" },
    { "id": 15, "topic": "Euler", "prompt": "V - E + F = ___ (Euler's formula for planar graphs)", "answer": ["2"], "display": "2" },
    { "id": 16, "topic": "Euler", "prompt": "Eulerian circuit exists iff every vertex has ___ degree", "answer": ["even"], "display": "even" },
    { "id": 17, "topic": "Hamiltonian", "prompt": "Hamiltonian path visits every vertex exactly ___", "answer": ["once", "1"], "display": "once" },
    { "id": 18, "topic": "Coloring", "prompt": "χ(G) = chromatic number = minimum colors to ___ vertices", "answer": ["color"], "display": "color" },
    { "id": 19, "topic": "Coloring", "prompt": "χ(Kₙ) = ___", "answer": ["n"], "display": "n" },
    { "id": 20, "topic": "Bipartite", "prompt": "χ(bipartite) = ___ (if at least one edge)", "answer": ["2"], "display": "2" }
  ],
  "day30": [
    { "id": 1, "topic": "BFS", "prompt": "BFS uses a ___ (data structure)", "answer": ["queue"], "display": "Queue" },
    { "id": 2, "topic": "DFS", "prompt": "DFS uses a ___ (data structure)", "answer": ["stack"], "display": "Stack" },
    { "id": 3, "topic": "BFS", "prompt": "BFS finds ___ path in unweighted graph", "answer": ["shortest"], "display": "shortest" },
    { "id": 4, "topic": "DFS", "prompt": "DFS on directed graph classifies edges: tree, back, forward, ___", "answer": ["cross"], "display": "cross" },
    { "id": 5, "topic": "DFS", "prompt": "Cycle exists iff DFS finds ___ edge", "answer": ["back"], "display": "back" },
    { "id": 6, "topic": "TopSort", "prompt": "Topological sort exists iff graph is ___ (DAG)", "answer": ["acyclic", "dag"], "display": "acyclic" },
    { "id": 7, "topic": "TopSort", "prompt": "TopSort: order vertices so all edges go ___", "answer": ["forward", "left to right"], "display": "forward" },
    { "id": 8, "topic": "SCC", "prompt": "Strongly connected components: every vertex reachable from every ___", "answer": ["other", "vertex"], "display": "other" },
    { "id": 9, "topic": "Algorithm", "prompt": "Kosaraju's or Tarjan's algorithm finds ___", "answer": ["scc", "strongly connected components"], "display": "SCCs" },
    { "id": 10, "topic": "Correctness", "prompt": "Loop invariant proves ___ correctness", "answer": ["partial", "algorithm"], "display": "partial" },
    { "id": 11, "topic": "Correctness", "prompt": "Termination + partial correctness = ___ correctness", "answer": ["total"], "display": "total" },
    { "id": 12, "topic": "Invariant", "prompt": "Invariant must hold: before loop, after each ___, after loop", "answer": ["iteration"], "display": "iteration" },
    { "id": 13, "topic": "Complexity", "prompt": "BFS/DFS time: O(V + ___)", "answer": ["e", "edges"], "display": "E" },
    { "id": 14, "topic": "SpanningTree", "prompt": "MST algorithms: Prim and ___", "answer": ["kruskal"], "display": "Kruskal" },
    { "id": 15, "topic": "SpanningTree", "prompt": "Cut property: min edge across any cut is in ___", "answer": ["mst"], "display": "MST" },
    { "id": 16, "topic": "ShortestPath", "prompt": "Dijkstra's algorithm requires ___ edge weights", "answer": ["non-negative", "positive"], "display": "non-negative" },
    { "id": 17, "topic": "ShortestPath", "prompt": "Bellman-Ford handles ___ weights but slower", "answer": ["negative"], "display": "negative" },
    { "id": 18, "topic": "ShortestPath", "prompt": "Floyd-Warshall: all-pairs shortest paths in O(V^___)", "answer": ["3"], "display": "V³" },
    { "id": 19, "topic": "Complexity", "prompt": "Dijkstra with binary heap: O((V+E) log ___)", "answer": ["v"], "display": "V" },
    { "id": 20, "topic": "Graph", "prompt": "Adjacency list space: O(V + ___)", "answer": ["e"], "display": "E" }
  ],
  "day31": [
    { "id": 1, "topic": "Prime", "prompt": "2, 3, 5, 7, 11, 13 are the first ___ primes", "answer": ["6", "six"], "display": "6" },
    { "id": 2, "topic": "Prime", "prompt": "Fundamental theorem of arithmetic: unique ___ factorization", "answer": ["prime"], "display": "prime" },
    { "id": 3, "topic": "Divisibility", "prompt": "a | b means a ___ b evenly", "answer": ["divides"], "display": "divides" },
    { "id": 4, "topic": "GCD", "prompt": "gcd(12, 18) = ?", "answer": ["6"], "display": "6" },
    { "id": 5, "topic": "GCD", "prompt": "Euclidean algorithm: gcd(a,b) = gcd(b, a mod ___)", "answer": ["b"], "display": "b" },
    { "id": 6, "topic": "LCM", "prompt": "lcm(a,b) × gcd(a,b) = a × ___", "answer": ["b"], "display": "b" },
    { "id": 7, "topic": "Modular", "prompt": "17 mod 5 = ?", "answer": ["2"], "display": "2" },
    { "id": 8, "topic": "Modular", "prompt": "(a + b) mod n = ((a mod n) + (b mod n)) mod ___", "answer": ["n"], "display": "n" },
    { "id": 9, "topic": "Modular", "prompt": "a ≡ b (mod n) means n | (a - ___)", "answer": ["b"], "display": "b" },
    { "id": 10, "topic": "Fermat", "prompt": "Fermat's little theorem: aᵖ⁻¹ ≡ 1 (mod p) if p is prime and gcd(a,p) = ___", "answer": ["1"], "display": "1" },
    { "id": 11, "topic": "Euler", "prompt": "Euler's theorem: a^φ(n) ≡ ___ (mod n)", "answer": ["1"], "display": "1" },
    { "id": 12, "topic": "Euler", "prompt": "φ(p) for prime p = p - ___", "answer": ["1"], "display": "p-1" },
    { "id": 13, "topic": "RSA", "prompt": "RSA: n = pq (product of two large ___)", "answer": ["primes"], "display": "primes" },
    { "id": 14, "topic": "RSA", "prompt": "RSA: public key (n, e), private key (n, ___)", "answer": ["d"], "display": "d" },
    { "id": 15, "topic": "RSA", "prompt": "RSA encryption: c = m^___ mod n", "answer": ["e"], "display": "e" },
    { "id": 16, "topic": "RSA", "prompt": "RSA decryption: m = c^___ mod n", "answer": ["d"], "display": "d" },
    { "id": 17, "topic": "Inverse", "prompt": "Modular inverse of a mod n: a⁻¹ such that a × a⁻¹ ≡ ___ (mod n)", "answer": ["1"], "display": "1" },
    { "id": 18, "topic": "Inverse", "prompt": "Modular inverse exists iff gcd(a, n) = ___", "answer": ["1"], "display": "1" },
    { "id": 19, "topic": "CRT", "prompt": "Chinese Remainder Theorem solves system of ___ congruences", "answer": ["modular", "linear"], "display": "modular" },
    { "id": 20, "topic": "Primality", "prompt": "Miller-Rabin is a probabilistic ___ test", "answer": ["primality"], "display": "primality" }
  ],
  "day32": [
    { "id": 1, "topic": "Array", "prompt": "Array access by index is O(___)", "answer": ["1", "constant"], "display": "O(1)" },
    { "id": 2, "topic": "Array", "prompt": "Inserting at array beginning (with shift) is O(___)", "answer": ["n"], "display": "O(n)" },
    { "id": 3, "topic": "LinkedList", "prompt": "Linked list insert at head is O(___)", "answer": ["1"], "display": "O(1)" },
    { "id": 4, "topic": "LinkedList", "prompt": "Linked list access by index is O(___)", "answer": ["n"], "display": "O(n)" },
    { "id": 5, "topic": "Stack", "prompt": "Stack follows ___ principle (last in first out)", "answer": ["lifo"], "display": "LIFO" },
    { "id": 6, "topic": "Queue", "prompt": "Queue follows ___ principle (first in first out)", "answer": ["fifo"], "display": "FIFO" },
    { "id": 7, "topic": "Deque", "prompt": "Deque supports insertion at ___ ends", "answer": ["both", "2"], "display": "both" },
    { "id": 8, "topic": "HashTable", "prompt": "Hash table average lookup is O(___)", "answer": ["1"], "display": "O(1)" },
    { "id": 9, "topic": "HashTable", "prompt": "When multiple keys map to same slot, it's called a ___", "answer": ["collision"], "display": "collision" },
    { "id": 10, "topic": "HashTable", "prompt": "Load factor = n / ___ (table size)", "answer": ["m", "size"], "display": "m" },
    { "id": 11, "topic": "Array", "prompt": "Dynamic arrays double in size, giving amortized O(___) append", "answer": ["1"], "display": "O(1)" },
    { "id": 12, "topic": "LinkedList", "prompt": "Finding middle of linked list in one pass: use ___ pointers", "answer": ["two", "2", "fast/slow"], "display": "two (fast/slow)" },
    { "id": 13, "topic": "Stack", "prompt": "Matching parentheses uses a ___", "answer": ["stack"], "display": "stack" },
    { "id": 14, "topic": "Queue", "prompt": "BFS uses a ___ data structure", "answer": ["queue"], "display": "queue" },
    { "id": 15, "topic": "Stack", "prompt": "DFS (iterative) uses a ___ data structure", "answer": ["stack"], "display": "stack" },
    { "id": 16, "topic": "HashTable", "prompt": "Chaining handles collisions by storing ___ at each slot", "answer": ["lists", "linked list"], "display": "linked lists" },
    { "id": 17, "topic": "HashTable", "prompt": "Open addressing finds next open ___ for collisions", "answer": ["slot", "index"], "display": "slot" },
    { "id": 18, "topic": "Complexity", "prompt": "Space complexity measures ___ usage", "answer": ["memory", "space"], "display": "memory" },
    { "id": 19, "topic": "Clean", "prompt": "Avoid mutating ___ in functions (clean code principle)", "answer": ["globals", "global state"], "display": "global state" },
    { "id": 20, "topic": "Clean", "prompt": "Functions should do ___ thing well", "answer": ["one", "1"], "display": "one" }
  ],
  "day33": [
    { "id": 1, "topic": "BST", "prompt": "BST: left child < parent < ___ child", "answer": ["right"], "display": "right" },
    { "id": 2, "topic": "BST", "prompt": "BST search average case is O(___)", "answer": ["log n", "logn"], "display": "O(log n)" },
    { "id": 3, "topic": "BST", "prompt": "Worst case BST (unbalanced) is O(___)", "answer": ["n"], "display": "O(n)" },
    { "id": 4, "topic": "AVL", "prompt": "AVL trees maintain balance using ___", "answer": ["rotations"], "display": "rotations" },
    { "id": 5, "topic": "RedBlack", "prompt": "Red-Black trees guarantee O(log n) for insert/delete/___", "answer": ["search", "find"], "display": "search" },
    { "id": 6, "topic": "Heap", "prompt": "Min-heap: parent ≤ ___", "answer": ["children"], "display": "children" },
    { "id": 7, "topic": "Heap", "prompt": "Heap extract-min is O(___)", "answer": ["log n", "logn"], "display": "O(log n)" },
    { "id": 8, "topic": "Heap", "prompt": "Building a heap from n elements is O(___)", "answer": ["n"], "display": "O(n)" },
    { "id": 9, "topic": "Heap", "prompt": "Priority queue is typically implemented with a ___", "answer": ["heap"], "display": "heap" },
    { "id": 10, "topic": "Trie", "prompt": "Trie is optimized for ___ lookup (e.g., autocomplete)", "answer": ["prefix", "string"], "display": "prefix" },
    { "id": 11, "topic": "Trie", "prompt": "Trie lookup is O(___) where m = key length", "answer": ["m"], "display": "O(m)" },
    { "id": 12, "topic": "Graph", "prompt": "Adjacency matrix uses O(V^___) space", "answer": ["2"], "display": "O(V²)" },
    { "id": 13, "topic": "Graph", "prompt": "Adjacency list uses O(V + ___) space", "answer": ["e", "edges"], "display": "O(V + E)" },
    { "id": 14, "topic": "Graph", "prompt": "Sparse graph: |E| << |V|². Use ___ representation", "answer": ["list", "adjacency list"], "display": "adjacency list" },
    { "id": 15, "topic": "BST", "prompt": "Inorder traversal of BST gives ___ order", "answer": ["sorted", "ascending"], "display": "sorted" },
    { "id": 16, "topic": "Tree", "prompt": "Number of edges in tree with n nodes = n - ___", "answer": ["1"], "display": "n - 1" },
    { "id": 17, "topic": "Heap", "prompt": "Heapsort time complexity: O(n ___)", "answer": ["log n", "logn"], "display": "O(n log n)" },
    { "id": 18, "topic": "SegmentTree", "prompt": "Segment tree supports range queries in O(___)", "answer": ["log n", "logn"], "display": "O(log n)" },
    { "id": 19, "topic": "UnionFind", "prompt": "Union-Find (disjoint set) uses ___ compression", "answer": ["path"], "display": "path" },
    { "id": 20, "topic": "UnionFind", "prompt": "Union by rank + path compression: O(α(n)) ≈ O(___)", "answer": ["1", "constant"], "display": "≈ O(1)" }
  ],
  "day34": [
    { "id": 1, "topic": "Sorting", "prompt": "Bubble sort worst case: O(n^___)", "answer": ["2"], "display": "O(n²)" },
    { "id": 2, "topic": "Sorting", "prompt": "Merge sort time complexity: O(n ___)", "answer": ["log n", "logn"], "display": "O(n log n)" },
    { "id": 3, "topic": "Sorting", "prompt": "Quicksort average case: O(n ___)", "answer": ["log n", "logn"], "display": "O(n log n)" },
    { "id": 4, "topic": "Sorting", "prompt": "Quicksort worst case (bad pivot): O(n^___)", "answer": ["2"], "display": "O(n²)" },
    { "id": 5, "topic": "Sorting", "prompt": "Merge sort space complexity: O(___)", "answer": ["n"], "display": "O(n)" },
    { "id": 6, "topic": "Sorting", "prompt": "In-place sorting uses O(___) extra space", "answer": ["1", "constant"], "display": "O(1)" },
    { "id": 7, "topic": "Sorting", "prompt": "Stable sort preserves ___ order of equal elements", "answer": ["relative"], "display": "relative" },
    { "id": 8, "topic": "Sorting", "prompt": "Counting sort is O(n + ___) where k = range", "answer": ["k"], "display": "O(n + k)" },
    { "id": 9, "topic": "Sorting", "prompt": "Comparison-based sorting lower bound: Ω(n ___)", "answer": ["log n", "logn"], "display": "Ω(n log n)" },
    { "id": 10, "topic": "Searching", "prompt": "Binary search requires ___ array", "answer": ["sorted"], "display": "sorted" },
    { "id": 11, "topic": "Searching", "prompt": "Binary search time: O(___)", "answer": ["log n", "logn"], "display": "O(log n)" },
    { "id": 12, "topic": "Greedy", "prompt": "Greedy makes ___ optimal choice at each step", "answer": ["locally"], "display": "locally" },
    { "id": 13, "topic": "Greedy", "prompt": "Huffman coding is a ___ algorithm", "answer": ["greedy"], "display": "greedy" },
    { "id": 14, "topic": "Greedy", "prompt": "Activity selection (max non-overlapping): sort by ___ time", "answer": ["end", "finish"], "display": "end time" },
    { "id": 15, "topic": "DivideConquer", "prompt": "Divide and conquer: split, solve, ___", "answer": ["merge", "combine"], "display": "merge/combine" },
    { "id": 16, "topic": "DivideConquer", "prompt": "Merge sort uses divide and ___", "answer": ["conquer"], "display": "conquer" },
    { "id": 17, "topic": "DivideConquer", "prompt": "Karatsuba multiplication is faster than O(n^___)", "answer": ["2"], "display": "O(n²)" },
    { "id": 18, "topic": "Sorting", "prompt": "Radix sort processes digits from ___ to most significant", "answer": ["least", "lsd"], "display": "least" },
    { "id": 19, "topic": "Searching", "prompt": "Interpolation search best case: O(log log ___)", "answer": ["n"], "display": "O(log log n)" },
    { "id": 20, "topic": "Greedy", "prompt": "Greedy fails when local optimum ≠ ___ optimum", "answer": ["global"], "display": "global" }
  ],
  "day35": [
    { "id": 1, "topic": "DP", "prompt": "DP solves problems with overlapping ___ subproblems", "answer": ["optimal"], "display": "optimal" },
    { "id": 2, "topic": "DP", "prompt": "Memoization stores results to avoid ___", "answer": ["recomputation"], "display": "recomputation" },
    { "id": 3, "topic": "DP", "prompt": "Top-down DP = recursion + ___", "answer": ["memoization"], "display": "memoization" },
    { "id": 4, "topic": "DP", "prompt": "Bottom-up DP = ___", "answer": ["tabulation"], "display": "tabulation" },
    { "id": 5, "topic": "DP", "prompt": "Fibonacci with DP: O(___) time", "answer": ["n"], "display": "O(n)" },
    { "id": 6, "topic": "DP", "prompt": "Fibonacci naive recursion: O(___) time", "answer": ["2^n", "exponential"], "display": "O(2ⁿ)" },
    { "id": 7, "topic": "DP", "prompt": "Longest common subsequence: dp[i][j] uses dp[i-1][j-1] if chars ___", "answer": ["match", "equal"], "display": "match" },
    { "id": 8, "topic": "DP", "prompt": "LCS of 'ABCD' and 'ACD' has length ___", "answer": ["3"], "display": "3 (ACD)" },
    { "id": 9, "topic": "DP", "prompt": "Edit distance counts insert, delete, ___", "answer": ["replace", "substitute"], "display": "replace" },
    { "id": 10, "topic": "DP", "prompt": "0/1 Knapsack: can't take ___ of an item", "answer": ["fraction"], "display": "fraction" },
    { "id": 11, "topic": "DP", "prompt": "Knapsack dp[i][w] = max value using first i items with capacity ___", "answer": ["w"], "display": "w" },
    { "id": 12, "topic": "DP", "prompt": "Coin change minimum coins: O(n × ___)", "answer": ["amount", "w"], "display": "O(n × amount)" },
    { "id": 13, "topic": "DP", "prompt": "Matrix chain multiplication optimizes ___ order", "answer": ["parenthesization", "multiplication"], "display": "parenthesization" },
    { "id": 14, "topic": "DP", "prompt": "Longest increasing subsequence: O(n ___) with binary search", "answer": ["log n", "logn"], "display": "O(n log n)" },
    { "id": 15, "topic": "DP", "prompt": "State transition: current state depends on ___ states", "answer": ["previous", "prior"], "display": "previous" },
    { "id": 16, "topic": "DP", "prompt": "Space optimization: if only need last row, space is O(___)", "answer": ["n", "1"], "display": "O(n) or O(1)" },
    { "id": 17, "topic": "DP", "prompt": "Rod cutting: maximize profit by cutting rod into ___", "answer": ["pieces", "parts"], "display": "pieces" },
    { "id": 18, "topic": "DP", "prompt": "Subset sum: can we make target sum using subset? T/F problem", "answer": ["true", "yes"], "display": "Yes (T/F)" },
    { "id": 19, "topic": "DP", "prompt": "DP works when problem has optimal ___", "answer": ["substructure"], "display": "substructure" },
    { "id": 20, "topic": "DP", "prompt": "Key to DP: identify ___ and transitions", "answer": ["state", "states"], "display": "states" }
  ],
  "day36": [
    { "id": 1, "topic": "BFS", "prompt": "BFS explores level by ___ (layer by layer)", "answer": ["level"], "display": "level" },
    { "id": 2, "topic": "DFS", "prompt": "DFS goes ___ first before backtracking", "answer": ["deep"], "display": "deep" },
    { "id": 3, "topic": "Dijkstra", "prompt": "Dijkstra uses a ___ queue for efficiency", "answer": ["priority"], "display": "priority" },
    { "id": 4, "topic": "Dijkstra", "prompt": "Dijkstra fails with ___ edge weights", "answer": ["negative"], "display": "negative" },
    { "id": 5, "topic": "BellmanFord", "prompt": "Bellman-Ford runs ___ iterations", "answer": ["v-1", "n-1"], "display": "V-1" },
    { "id": 6, "topic": "BellmanFord", "prompt": "Bellman-Ford can detect ___ cycles", "answer": ["negative"], "display": "negative" },
    { "id": 7, "topic": "FloydWarshall", "prompt": "Floyd-Warshall computes ___ shortest paths", "answer": ["all-pairs"], "display": "all-pairs" },
    { "id": 8, "topic": "Topological", "prompt": "Topological sort: process node only after all ___ processed", "answer": ["predecessors"], "display": "predecessors" },
    { "id": 9, "topic": "Correctness", "prompt": "To prove loop correctness, define a loop ___", "answer": ["invariant"], "display": "invariant" },
    { "id": 10, "topic": "Correctness", "prompt": "Invariant holds: before loop, after each iteration, and at ___", "answer": ["termination", "end"], "display": "termination" },
    { "id": 11, "topic": "MST", "prompt": "Prim's algorithm grows tree by adding ___ edge to tree", "answer": ["minimum", "smallest"], "display": "minimum" },
    { "id": 12, "topic": "MST", "prompt": "Kruskal's adds edges in ___ order (avoiding cycles)", "answer": ["sorted", "increasing"], "display": "sorted" },
    { "id": 13, "topic": "MST", "prompt": "MST of n vertices has ___ edges", "answer": ["n-1"], "display": "n-1" },
    { "id": 14, "topic": "Connected", "prompt": "Graph is connected if BFS/DFS visits all ___ from any start", "answer": ["vertices", "nodes"], "display": "vertices" },
    { "id": 15, "topic": "Bipartite", "prompt": "Graph is bipartite iff 2-___ is possible", "answer": ["colorable", "coloring"], "display": "colorable" },
    { "id": 16, "topic": "DAG", "prompt": "DAG = Directed ___ Graph", "answer": ["acyclic"], "display": "Acyclic" },
    { "id": 17, "topic": "ShortestPath", "prompt": "Single-source shortest paths in DAG: O(V + ___)", "answer": ["e"], "display": "E" },
    { "id": 18, "topic": "Correctness", "prompt": "Binary search invariant: target is in range [lo, ___]", "answer": ["hi"], "display": "hi" },
    { "id": 19, "topic": "Graph", "prompt": "Cycle detection in directed graph: look for ___ edge in DFS", "answer": ["back"], "display": "back" },
    { "id": 20, "topic": "Complexity", "prompt": "Dijkstra with Fibonacci heap: O(E + V log ___)", "answer": ["v"], "display": "V" }
  ],
  "day37": [
    { "id": 1, "topic": "Amortized", "prompt": "Amortized analysis averages cost over ___ of operations", "answer": ["sequence"], "display": "sequence" },
    { "id": 2, "topic": "Amortized", "prompt": "Dynamic array append: worst O(n), amortized O(___)", "answer": ["1"], "display": "O(1)" },
    { "id": 3, "topic": "Aggregate", "prompt": "Aggregate method: total cost / ___ of operations", "answer": ["number"], "display": "number" },
    { "id": 4, "topic": "Accounting", "prompt": "Accounting method: assign ___ to each operation", "answer": ["credits", "cost"], "display": "credits" },
    { "id": 5, "topic": "Potential", "prompt": "Potential method: Φ measures ___ for future operations", "answer": ["potential"], "display": "potential" },
    { "id": 6, "topic": "Amortized", "prompt": "Stack with multipop: push O(1), multipop(k) O(k), amortized push O(___)", "answer": ["1"], "display": "O(1)" },
    { "id": 7, "topic": "Amortized", "prompt": "Binary counter increment: worst O(k), amortized O(___)", "answer": ["1"], "display": "O(1)" },
    { "id": 8, "topic": "Splay", "prompt": "Splay trees have O(log n) ___ time", "answer": ["amortized"], "display": "amortized" },
    { "id": 9, "topic": "UnionFind", "prompt": "Union-Find with optimizations: O(α(n)) amortized per ___", "answer": ["operation"], "display": "operation" },
    { "id": 10, "topic": "Potential", "prompt": "Amortized cost = actual cost + Δ___", "answer": ["potential", "Φ"], "display": "Φ (potential)" },
    { "id": 11, "topic": "HashTable", "prompt": "Hash table resizing: amortized O(___) insert", "answer": ["1"], "display": "O(1)" },
    { "id": 12, "topic": "Fibonacci", "prompt": "Fibonacci heap: amortized O(1) insert, O(log n) ___", "answer": ["delete-min", "extract-min"], "display": "delete-min" },
    { "id": 13, "topic": "Concept", "prompt": "Amortized ≠ average case. Average assumes ___ distribution", "answer": ["probability", "random"], "display": "probability" },
    { "id": 14, "topic": "Concept", "prompt": "Amortized guarantees worst case over ___ operations", "answer": ["n", "sequence"], "display": "n operations" },
    { "id": 15, "topic": "Accounting", "prompt": "Accounting: cheap ops pay for ___ ops", "answer": ["expensive"], "display": "expensive" },
    { "id": 16, "topic": "Potential", "prompt": "Good potential function: high Φ before expensive op, ___ after", "answer": ["low"], "display": "low" },
    { "id": 17, "topic": "RedBlack", "prompt": "Red-black tree insert/delete: O(log n) worst, O(___) amortized rotations", "answer": ["1", "constant"], "display": "O(1)" },
    { "id": 18, "topic": "Concept", "prompt": "Amortized analysis applies to data ___, not algorithms", "answer": ["structures"], "display": "structures" },
    { "id": 19, "topic": "Dynamic", "prompt": "std::vector in C++ uses ___ allocation strategy", "answer": ["doubling", "dynamic"], "display": "doubling" },
    { "id": 20, "topic": "Concept", "prompt": "Credit invariant: always ___ (non-negative)", "answer": ["positive", "≥0"], "display": "≥ 0" }
  ],
  "day38": [
    { "id": 1, "topic": "Randomized", "prompt": "Randomized quicksort has O(n log n) ___ time", "answer": ["expected"], "display": "expected" },
    { "id": 2, "topic": "Randomized", "prompt": "Monte Carlo algorithms may be ___ but are fast", "answer": ["wrong", "incorrect"], "display": "wrong" },
    { "id": 3, "topic": "Randomized", "prompt": "Las Vegas algorithms are always ___ but random time", "answer": ["correct"], "display": "correct" },
    { "id": 4, "topic": "Random", "prompt": "Choosing random pivot in quicksort avoids ___ case", "answer": ["worst"], "display": "worst" },
    { "id": 5, "topic": "Hashing", "prompt": "Universal hashing: family of ___ functions", "answer": ["hash"], "display": "hash" },
    { "id": 6, "topic": "Hashing", "prompt": "Birthday paradox: ~√n people for 50% chance of ___ birthday", "answer": ["collision", "same"], "display": "collision" },
    { "id": 7, "topic": "Complexity", "prompt": "P = problems solvable in polynomial ___", "answer": ["time"], "display": "time" },
    { "id": 8, "topic": "Complexity", "prompt": "NP = problems ___ in polynomial time", "answer": ["verifiable"], "display": "verifiable" },
    { "id": 9, "topic": "Complexity", "prompt": "NP-hard problems are at least as ___ as any NP problem", "answer": ["hard"], "display": "hard" },
    { "id": 10, "topic": "Complexity", "prompt": "NP-complete = NP ∩ ___-hard", "answer": ["np"], "display": "NP" },
    { "id": 11, "topic": "Reduction", "prompt": "A ≤p B means A ___ to B in poly time", "answer": ["reduces"], "display": "reduces" },
    { "id": 12, "topic": "NPComplete", "prompt": "SAT, 3-SAT, Clique, Vertex Cover are ___-complete", "answer": ["np"], "display": "NP" },
    { "id": 13, "topic": "NPComplete", "prompt": "First proven NP-complete problem: ___ (Cook-Levin)", "answer": ["sat"], "display": "SAT" },
    { "id": 14, "topic": "PvsNP", "prompt": "P = NP? is an ___ problem (Clay prize)", "answer": ["open", "unsolved"], "display": "open" },
    { "id": 15, "topic": "Approximation", "prompt": "For NP-hard, we use ___ algorithms", "answer": ["approximation"], "display": "approximation" },
    { "id": 16, "topic": "Approximation", "prompt": "2-approximation means solution ≤ 2 × ___", "answer": ["optimal", "opt"], "display": "OPT" },
    { "id": 17, "topic": "Random", "prompt": "Bloom filter may have ___ positives", "answer": ["false"], "display": "false" },
    { "id": 18, "topic": "Complexity", "prompt": "co-NP contains complements of ___ problems", "answer": ["np"], "display": "NP" },
    { "id": 19, "topic": "Random", "prompt": "Skip list: randomized with O(log n) ___ and search", "answer": ["insert"], "display": "insert" },
    { "id": 20, "topic": "Complexity", "prompt": "PSPACE contains problems solvable with polynomial ___", "answer": ["space"], "display": "space" }
  ],
  "day39": [
    { "id": 1, "topic": "Basic", "prompt": "P(A) is always between ___ and 1", "answer": ["0"], "display": "0" },
    { "id": 2, "topic": "Basic", "prompt": "P(S) = ___ for sample space S", "answer": ["1"], "display": "1" },
    { "id": 3, "topic": "Conditional", "prompt": "P(A|B) = P(A ∩ B) / P(___)", "answer": ["b"], "display": "P(B)" },
    { "id": 4, "topic": "Conditional", "prompt": "If P(A|B) = P(A), then A and B are ___", "answer": ["independent"], "display": "independent" },
    { "id": 5, "topic": "Independent", "prompt": "P(A ∩ B) = P(A) × P(B) iff A, B are ___", "answer": ["independent"], "display": "independent" },
    { "id": 6, "topic": "Bayes", "prompt": "Bayes: P(A|B) = P(B|A) × P(A) / P(___)", "answer": ["b"], "display": "P(B)" },
    { "id": 7, "topic": "Bayes", "prompt": "Prior × likelihood / evidence = ___", "answer": ["posterior"], "display": "posterior" },
    { "id": 8, "topic": "LawTotal", "prompt": "P(B) = Σ P(B|Aᵢ) × P(Aᵢ) is law of ___ probability", "answer": ["total"], "display": "total" },
    { "id": 9, "topic": "Complement", "prompt": "P(Aᶜ) = 1 - P(___)", "answer": ["a"], "display": "P(A)" },
    { "id": 10, "topic": "Union", "prompt": "P(A ∪ B) = P(A) + P(B) - P(A ∩ ___)", "answer": ["b"], "display": "P(A ∩ B)" },
    { "id": 11, "topic": "Mutually", "prompt": "Mutually exclusive: P(A ∩ B) = ___", "answer": ["0", "zero"], "display": "0" },
    { "id": 12, "topic": "Conditional", "prompt": "Chain rule: P(A,B,C) = P(A) × P(B|A) × P(C|A,___)", "answer": ["b"], "display": "B" },
    { "id": 13, "topic": "Bayes", "prompt": "In spam filtering, Bayes classifies as spam if P(spam|words) > P(___|words)", "answer": ["ham", "not spam"], "display": "ham" },
    { "id": 14, "topic": "Counting", "prompt": "P(event) = favorable / ___ outcomes", "answer": ["total"], "display": "total" },
    { "id": 15, "topic": "Conditional", "prompt": "P(A|B) defined only when P(B) > ___", "answer": ["0", "zero"], "display": "0" },
    { "id": 16, "topic": "Independent", "prompt": "n independent events: P(all occur) = Π P(___)", "answer": ["each", "event"], "display": "each" },
    { "id": 17, "topic": "Conditional", "prompt": "Monty Hall: switch wins with probability ___/3", "answer": ["2"], "display": "2/3" },
    { "id": 18, "topic": "Bayes", "prompt": "Sensitivity = P(positive | ___)", "answer": ["disease", "sick"], "display": "disease" },
    { "id": 19, "topic": "Bayes", "prompt": "Specificity = P(negative | ___)", "answer": ["healthy", "no disease"], "display": "healthy" },
    { "id": 20, "topic": "Basic", "prompt": "Uniform distribution: all outcomes equally ___", "answer": ["likely", "probable"], "display": "likely" }
  ],
  "day40": [
    { "id": 1, "topic": "RV", "prompt": "Random variable maps outcomes to ___", "answer": ["numbers", "real numbers"], "display": "numbers" },
    { "id": 2, "topic": "PMF", "prompt": "PMF: P(X = x) for ___ random variable", "answer": ["discrete"], "display": "discrete" },
    { "id": 3, "topic": "PDF", "prompt": "PDF: f(x) for ___ random variable", "answer": ["continuous"], "display": "continuous" },
    { "id": 4, "topic": "CDF", "prompt": "CDF: F(x) = P(X ≤ ___)", "answer": ["x"], "display": "x" },
    { "id": 5, "topic": "Expectation", "prompt": "E[X] = Σ x × P(X = ___)", "answer": ["x"], "display": "x" },
    { "id": 6, "topic": "Expectation", "prompt": "E[aX + b] = a × E[X] + ___", "answer": ["b"], "display": "b (linearity)" },
    { "id": 7, "topic": "Variance", "prompt": "Var(X) = E[X²] - (E[X])²", "answer": ["true", "yes"], "display": "True" },
    { "id": 8, "topic": "Variance", "prompt": "Var(aX) = a² × Var(___)", "answer": ["x"], "display": "X" },
    { "id": 9, "topic": "StdDev", "prompt": "Standard deviation σ = √___", "answer": ["var", "variance"], "display": "Var" },
    { "id": 10, "topic": "Covariance", "prompt": "Cov(X,Y) = E[XY] - E[X]×E[___]", "answer": ["y"], "display": "Y" },
    { "id": 11, "topic": "Independent", "prompt": "If X,Y independent: Var(X+Y) = Var(X) + Var(___)", "answer": ["y"], "display": "Var(Y)" },
    { "id": 12, "topic": "Indicator", "prompt": "Indicator I_A = 1 if A occurs, else ___", "answer": ["0"], "display": "0" },
    { "id": 13, "topic": "Indicator", "prompt": "E[I_A] = P(___)", "answer": ["a"], "display": "P(A)" },
    { "id": 14, "topic": "Linearity", "prompt": "E[X + Y] = E[X] + E[Y] always (even if ___)", "answer": ["dependent"], "display": "dependent" },
    { "id": 15, "topic": "LOTUS", "prompt": "E[g(X)] = Σ g(x) × P(X = x) is ___ (theorem name)", "answer": ["lotus"], "display": "LOTUS" },
    { "id": 16, "topic": "Moment", "prompt": "E[X^n] is the n-th ___ of X", "answer": ["moment"], "display": "moment" },
    { "id": 17, "topic": "MGF", "prompt": "Moment generating function: M(t) = E[e^___]", "answer": ["tx"], "display": "e^tX" },
    { "id": 18, "topic": "Discrete", "prompt": "Discrete RV: countable number of ___", "answer": ["values", "outcomes"], "display": "values" },
    { "id": 19, "topic": "Continuous", "prompt": "For continuous X: P(X = x) = ___", "answer": ["0", "zero"], "display": "0" },
    { "id": 20, "topic": "Joint", "prompt": "Joint PMF: P(X=x, Y=y). Marginal: P(X=x) = Σ P(X=x, Y=___)", "answer": ["y"], "display": "y" }
  ],
  "day41": [
    { "id": 1, "topic": "Bernoulli", "prompt": "Bernoulli: X ∈ {0, 1} with P(X=1) = ___", "answer": ["p"], "display": "p" },
    { "id": 2, "topic": "Bernoulli", "prompt": "Bernoulli E[X] = ___", "answer": ["p"], "display": "p" },
    { "id": 3, "topic": "Binomial", "prompt": "Binomial(n,p): n ___ Bernoulli trials", "answer": ["independent"], "display": "independent" },
    { "id": 4, "topic": "Binomial", "prompt": "Binomial E[X] = n × ___", "answer": ["p"], "display": "np" },
    { "id": 5, "topic": "Binomial", "prompt": "Binomial Var(X) = np(1-___)", "answer": ["p"], "display": "np(1-p)" },
    { "id": 6, "topic": "Geometric", "prompt": "Geometric: trials until first ___ (with prob p)", "answer": ["success"], "display": "success" },
    { "id": 7, "topic": "Geometric", "prompt": "Geometric E[X] = 1/___", "answer": ["p"], "display": "1/p" },
    { "id": 8, "topic": "Poisson", "prompt": "Poisson(λ): E[X] = Var(X) = ___", "answer": ["λ", "lambda"], "display": "λ" },
    { "id": 9, "topic": "Poisson", "prompt": "Poisson models ___ events in fixed interval", "answer": ["rare", "random"], "display": "rare" },
    { "id": 10, "topic": "Uniform", "prompt": "Uniform(a,b) continuous: E[X] = (a + ___)/2", "answer": ["b"], "display": "(a+b)/2" },
    { "id": 11, "topic": "Uniform", "prompt": "Uniform(a,b) Var = (b-a)² / ___", "answer": ["12"], "display": "12" },
    { "id": 12, "topic": "Exponential", "prompt": "Exponential(λ): time between Poisson events. E[X] = 1/___", "answer": ["λ", "lambda"], "display": "1/λ" },
    { "id": 13, "topic": "Exponential", "prompt": "Exponential is ___less (no memory)", "answer": ["memory"], "display": "memoryless" },
    { "id": 14, "topic": "Normal", "prompt": "Normal(μ, σ²): μ is ___, σ is std dev", "answer": ["mean"], "display": "mean" },
    { "id": 15, "topic": "Normal", "prompt": "Standard normal: μ = 0, σ = ___", "answer": ["1"], "display": "1" },
    { "id": 16, "topic": "Normal", "prompt": "68% of data within ___ standard deviation of mean", "answer": ["1", "one"], "display": "1" },
    { "id": 17, "topic": "Normal", "prompt": "95% of data within ___ standard deviations of mean", "answer": ["2", "two"], "display": "2" },
    { "id": 18, "topic": "Normal", "prompt": "Sum of normals is ___", "answer": ["normal"], "display": "normal" },
    { "id": 19, "topic": "CLT", "prompt": "Central Limit Theorem: sample means → ___ distribution", "answer": ["normal"], "display": "normal" },
    { "id": 20, "topic": "Distribution", "prompt": "Chi-squared distribution = sum of squared ___ normals", "answer": ["standard"], "display": "standard" }
  ],
  "day42": [
    { "id": 1, "topic": "Markov", "prompt": "Markov's inequality: P(X ≥ a) ≤ E[X] / ___ (for X ≥ 0)", "answer": ["a"], "display": "a" },
    { "id": 2, "topic": "Chebyshev", "prompt": "Chebyshev: P(|X - μ| ≥ kσ) ≤ 1/k^___", "answer": ["2"], "display": "1/k²" },
    { "id": 3, "topic": "Chebyshev", "prompt": "Chebyshev uses ___ and variance only", "answer": ["mean"], "display": "mean" },
    { "id": 4, "topic": "Chernoff", "prompt": "Chernoff bounds give ___ (faster) decay", "answer": ["exponential"], "display": "exponential" },
    { "id": 5, "topic": "Chernoff", "prompt": "Chernoff applies to sum of ___ random variables", "answer": ["independent"], "display": "independent" },
    { "id": 6, "topic": "LLN", "prompt": "Law of Large Numbers: sample mean → ___ as n → ∞", "answer": ["μ", "mean", "true mean"], "display": "μ (true mean)" },
    { "id": 7, "topic": "LLN", "prompt": "Weak LLN: convergence in ___", "answer": ["probability"], "display": "probability" },
    { "id": 8, "topic": "LLN", "prompt": "Strong LLN: ___ sure convergence", "answer": ["almost"], "display": "almost sure" },
    { "id": 9, "topic": "CLT", "prompt": "CLT: √n(X̄ - μ)/σ → N(0, ___)", "answer": ["1"], "display": "1" },
    { "id": 10, "topic": "CLT", "prompt": "CLT requires samples to be ___ (not identical distribution)", "answer": ["independent", "iid"], "display": "independent" },
    { "id": 11, "topic": "Hoeffding", "prompt": "Hoeffding: for bounded X, gives ___ bound", "answer": ["exponential", "tight"], "display": "exponential" },
    { "id": 12, "topic": "Concentration", "prompt": "Concentration inequalities bound ___ from mean", "answer": ["deviation"], "display": "deviation" },
    { "id": 13, "topic": "Tail", "prompt": "P(X ≥ t) is called ___ probability", "answer": ["tail"], "display": "tail" },
    { "id": 14, "topic": "Union", "prompt": "Union bound: P(A₁ ∪ ... ∪ Aₙ) ≤ Σ P(___)", "answer": ["ai", "each"], "display": "P(Aᵢ)" },
    { "id": 15, "topic": "Markov", "prompt": "Markov only needs E[X] and X ≥ ___", "answer": ["0", "zero"], "display": "0" },
    { "id": 16, "topic": "Variance", "prompt": "Variance of sample mean X̄ = σ² / ___", "answer": ["n"], "display": "n" },
    { "id": 17, "topic": "Sampling", "prompt": "Standard error = σ / √___", "answer": ["n"], "display": "√n" },
    { "id": 18, "topic": "Bounds", "prompt": "Tighter bound: Markov < Chebyshev < ___ (for sum of iid)", "answer": ["chernoff"], "display": "Chernoff" },
    { "id": 19, "topic": "Application", "prompt": "Randomized algorithms use concentration for ___ analysis", "answer": ["success", "probability"], "display": "success probability" },
    { "id": 20, "topic": "Concentration", "prompt": "Sub-Gaussian variables have ___ tail decay", "answer": ["exponential"], "display": "exponential" }
  ],
  "day43": [
    { "id": 1, "topic": "Estimation", "prompt": "Point estimate: single ___ for parameter", "answer": ["value"], "display": "value" },
    { "id": 2, "topic": "Estimation", "prompt": "Interval estimate: range like ___ interval", "answer": ["confidence"], "display": "confidence" },
    { "id": 3, "topic": "MLE", "prompt": "MLE maximizes ___ function", "answer": ["likelihood"], "display": "likelihood" },
    { "id": 4, "topic": "MLE", "prompt": "Log-likelihood is often easier to ___ than likelihood", "answer": ["maximize", "optimize"], "display": "maximize" },
    { "id": 5, "topic": "Bias", "prompt": "Estimator is unbiased if E[θ̂] = ___", "answer": ["θ", "theta"], "display": "θ" },
    { "id": 6, "topic": "Variance", "prompt": "Good estimator: low bias and low ___", "answer": ["variance"], "display": "variance" },
    { "id": 7, "topic": "MSE", "prompt": "MSE = Bias² + ___", "answer": ["variance"], "display": "Variance" },
    { "id": 8, "topic": "Confidence", "prompt": "95% CI: true parameter is in interval with 95% ___", "answer": ["probability", "confidence"], "display": "probability" },
    { "id": 9, "topic": "Confidence", "prompt": "Wider CI = ___ confidence level", "answer": ["higher"], "display": "higher" },
    { "id": 10, "topic": "Hypothesis", "prompt": "Null hypothesis H₀ is ___ to be true", "answer": ["assumed"], "display": "assumed" },
    { "id": 11, "topic": "Pvalue", "prompt": "p-value: probability of data given H₀ is ___", "answer": ["true"], "display": "true" },
    { "id": 12, "topic": "Pvalue", "prompt": "Small p-value: evidence ___ null hypothesis", "answer": ["against"], "display": "against" },
    { "id": 13, "topic": "TypeErrors", "prompt": "Type I error: reject H₀ when H₀ is ___", "answer": ["true"], "display": "true" },
    { "id": 14, "topic": "TypeErrors", "prompt": "Type II error: fail to reject H₀ when H₀ is ___", "answer": ["false"], "display": "false" },
    { "id": 15, "topic": "Regression", "prompt": "Linear regression: y = β₀ + β₁x + ___", "answer": ["ε", "error"], "display": "ε (error)" },
    { "id": 16, "topic": "Regression", "prompt": "OLS minimizes sum of squared ___", "answer": ["residuals", "errors"], "display": "residuals" },
    { "id": 17, "topic": "Regression", "prompt": "R² measures proportion of ___ explained", "answer": ["variance"], "display": "variance" },
    { "id": 18, "topic": "Regression", "prompt": "R² = 1 means ___ fit", "answer": ["perfect"], "display": "perfect" },
    { "id": 19, "topic": "Correlation", "prompt": "Correlation r is between ___ and 1", "answer": ["-1"], "display": "-1 to 1" },
    { "id": 20, "topic": "Correlation", "prompt": "Correlation ≠ ___", "answer": ["causation"], "display": "causation" }
  ]
};

