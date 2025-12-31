
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
  "day4": [
    { "id": 1, "topic": "Definitions", "prompt": "A proof that proceeds directly from assumptions to conclusion is a ___ proof.", "answer": ["direct"], "display": "Direct" },
    { "id": 2, "topic": "Logic", "prompt": "The contrapositive of 'If P, then Q' is 'If not Q, then ___'.", "answer": ["not p", "!p", "notp"], "display": "Not P" },
    { "id": 3, "topic": "Logic", "prompt": "True or False: A statement and its contrapositive are logically equivalent.", "answer": ["true", "t"], "display": "True" },
    { "id": 4, "topic": "Contradiction", "prompt": "To prove P by contradiction, you assume ___ and derive a contradiction.", "answer": ["not p", "!p", "negation of p"], "display": "Not P (Negation)" },
    { "id": 5, "topic": "Induction", "prompt": "The first step of mathematical induction is the ___ case.", "answer": ["base"], "display": "Base" },
    { "id": 6, "topic": "Induction", "prompt": "In the inductive step, you assume P(k) is true. This assumption is called the Inductive ___.", "answer": ["hypothesis"], "display": "Hypothesis" },
    { "id": 7, "topic": "Invariants", "prompt": "A condition that remains true before and after each loop iteration is a loop ___.", "answer": ["invariant"], "display": "Invariant" },
    { "id": 8, "topic": "Definitions", "prompt": "An integer n is even if n = ___ for some integer k.", "answer": ["2k"], "display": "2k" },
    { "id": 9, "topic": "Definitions", "prompt": "An integer n is odd if n = ___ for some integer k.", "answer": ["2k+1", "2k + 1"], "display": "2k + 1" },
    { "id": 10, "topic": "Latin", "prompt": "Q.E.D. stands for 'quod erat ___'.", "answer": ["demonstrandum"], "display": "Demonstrandum" },
    { "id": 11, "topic": "Acronyms", "prompt": "WLOG stands for 'Without Loss of ___'.", "answer": ["generality"], "display": "Generality" },
    { "id": 12, "topic": "Logic", "prompt": "To disprove 'For all x, P(x)', you only need one ___.", "answer": ["counterexample", "counter-example"], "display": "Counterexample" },
    { "id": 13, "topic": "Examples", "prompt": "True or False: The sum of two odd numbers is always odd.", "answer": ["false", "f"], "display": "False (It's even!)" },
    { "id": 14, "topic": "Formulas", "prompt": "Sum of 1 + 2 + ... + n = ?", "answer": ["n(n+1)/2", "n^2/2 + n/2"], "display": "n(n+1)/2" },
    { "id": 15, "topic": "Invariants", "prompt": "For binary search, the invariant is that the target must be in the window [lo, ___].", "answer": ["hi", "high"], "display": "hi" }
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
  "day9": [
    { "id": 1, "topic": "Radians", "prompt": "360 degrees is equal to ___ radians", "answer": ["2pi", "2 pi", "6.28"], "display": "2π" },
    { "id": 2, "topic": "Radians", "prompt": "180 degrees is equal to ___ radians", "answer": ["pi", "3.14"], "display": "π" },
    { "id": 3, "topic": "Unit Circle", "prompt": "The Unit Circle has a radius of ___", "answer": ["1", "one"], "display": "1" },
    { "id": 4, "topic": "Coordinates", "prompt": "On the Unit Circle, the x-coordinate corresponds to ___ (sin/cos)", "answer": ["cos", "cosine"], "display": "cos" },
    { "id": 5, "topic": "Coordinates", "prompt": "On the Unit Circle, the y-coordinate corresponds to ___ (sin/cos)", "answer": ["sin", "sine"], "display": "sin" },
    { "id": 6, "topic": "Values", "prompt": "What is sin(0)?", "answer": ["0"], "display": "0" },
    { "id": 7, "topic": "Values", "prompt": "What is cos(0)?", "answer": ["1"], "display": "1" },
    { "id": 8, "topic": "Values", "prompt": "What is sin(pi/2)?", "answer": ["1"], "display": "1" },
    { "id": 9, "topic": "Values", "prompt": "What is cos(pi/2)?", "answer": ["0"], "display": "0" },
    { "id": 10, "topic": "Identities", "prompt": "sin^2(x) + cos^2(x) = ___", "answer": ["1"], "display": "1" },
    { "id": 11, "topic": "Definitions", "prompt": "Tangent (tan) is defined as sin / ___", "answer": ["cos", "cosine"], "display": "cos" },
    { "id": 12, "topic": "Definitions", "prompt": "SOH CAH TOA: Sin is Opposite over ___", "answer": ["hypotenuse"], "display": "Hypotenuse" },
    { "id": 13, "topic": "Definitions", "prompt": "SOH CAH TOA: Cos is Adjacent over ___", "answer": ["hypotenuse"], "display": "Hypotenuse" },
    { "id": 14, "topic": "Definitions", "prompt": "SOH CAH TOA: Tan is Opposite over ___", "answer": ["adjacent"], "display": "Adjacent" },
    { "id": 15, "topic": "Values", "prompt": "What is sin(pi)?", "answer": ["0"], "display": "0" },
    { "id": 16, "topic": "Values", "prompt": "What is cos(pi)?", "answer": ["-1"], "display": "-1" },
    { "id": 17, "topic": "Game Dev", "prompt": "To get the angle between two points, use the function ___", "answer": ["atan2", "arctan2"], "display": "atan2" },
    { "id": 18, "topic": "Conversion", "prompt": "To convert degrees to radians, multiply by pi / ___", "answer": ["180"], "display": "180" },
    { "id": 19, "topic": "Period", "prompt": "The period of sin(x) is ___ radians", "answer": ["2pi", "2 pi"], "display": "2π" },
    { "id": 20, "topic": "Range", "prompt": "The range of sin(x) is from -1 to ___", "answer": ["1"], "display": "1" }
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
    { "id": 20, "topic": "Recursion", "prompt": "Does Bubble Sort use recurrence relations typically?", "answer": ["no"], "display": "No" }
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
    { "id": 20, "topic": "Application", "prompt": "Is calculating Fibonacci numbers iteratively a summation?", "answer": ["yes", "no", "depends"], "display": "Yes (adding terms)" }
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
    { "id": 20, "topic": "General", "prompt": "Can a function have a limit where it has a hole?", "answer": ["yes"], "display": "Yes" }
  ],
  "day13": [
    { "id": 1, "topic": "Power Rule", "prompt": "Derivative of x^2 is?", "answer": ["2x"], "display": "2x" },
    { "id": 2, "topic": "Power Rule", "prompt": "Derivative of x^3 is?", "answer": ["3x^2"], "display": "3x²" },
    { "id": 3, "topic": "Power Rule", "prompt": "Derivative of constant 5 is?", "answer": ["0"], "display": "0" },
    { "id": 4, "topic": "Power Rule", "prompt": "Derivative of 5x is?", "answer": ["5"], "display": "5" },
    { "id": 5, "topic": "Trig", "prompt": "Derivative of sin(x) is?", "answer": ["cos(x)", "cos x"], "display": "cos(x)" },
    { "id": 6, "topic": "Trig", "prompt": "Derivative of cos(x) is?", "answer": ["-sin(x)", "-sin x"], "display": "-sin(x)" },
    { "id": 7, "topic": "Exponential", "prompt": "Derivative of e^x is?", "answer": ["e^x"], "display": "e^x" },
    { "id": 8, "topic": "Log", "prompt": "Derivative of ln(x) is?", "answer": ["1/x"], "display": "1/x" },
    { "id": 9, "topic": "Chain Rule", "prompt": "Derivative of (2x)^2 using chain rule?", "answer": ["8x"], "display": "8x" },
    { "id": 10, "topic": "Chain Rule", "prompt": "Derivative of sin(x^2)?", "answer": ["2xcos(x^2)", "2x cos(x^2)"], "display": "2x cos(x²)" },
    { "id": 11, "topic": "Application", "prompt": "If f(x) is position, f'(x) is ___", "answer": ["velocity", "speed"], "display": "Velocity" },
    { "id": 12, "topic": "Application", "prompt": "If f(x) is velocity, f'(x) is ___", "answer": ["acceleration"], "display": "Acceleration" },
    { "id": 13, "topic": "Interpretation", "prompt": "Derivative at a maximum is usually ___", "answer": ["0", "zero"], "display": "0" },
    { "id": 14, "topic": "Interpretation", "prompt": "Derivative > 0 means the function is ___", "answer": ["increasing", "rising"], "display": "Increasing" },
    { "id": 15, "topic": "Product Rule", "prompt": "d/dx (uv) = u'v + ___", "answer": ["uv'", "u v'"], "display": "uv'" },
    { "id": 16, "topic": "Quotient Rule", "prompt": "d/dx (u/v) denominator is v squared. True/False?", "answer": ["true", "yes"], "display": "True" },
    { "id": 17, "topic": "Definition", "prompt": "Limits h -> ___ for the definition of derivative", "answer": ["0", "zero"], "display": "0" },
    { "id": 18, "topic": "Power Rule", "prompt": "Derivative of x^-1 is?", "answer": ["-x^-2", "-1/x^2"], "display": "-x⁻²" },
    { "id": 19, "topic": "Power Rule", "prompt": "Derivative of sqrt(x) is 1 over ___", "answer": ["2sqrt(x)", "2 sqrt(x)"], "display": "2√x" },
    { "id": 20, "topic": "General", "prompt": "Is d/dx linear? (d/dx(a+b) = d/dx(a) + d/dx(b))", "answer": ["yes"], "display": "Yes" }
  ],
  "day14": [
    { "id": 1, "topic": "Concept", "prompt": "Integration is the reverse operation of ___", "answer": ["differentiation", "derivative"], "display": "Differentiation" },
    { "id": 2, "topic": "Concept", "prompt": "Integral represents the Area ___ the Curve", "answer": ["under"], "display": "Under" },
    { "id": 3, "topic": "Riemann", "prompt": "Riemann sums approximate area using ___ (shape)", "answer": ["rectangles"], "display": "Rectangles" },
    { "id": 4, "topic": "Riemann", "prompt": "As rectangle width -> 0, the sum becomes the ___", "answer": ["integral"], "display": "Integral" },
    { "id": 5, "topic": "FTC", "prompt": "FTC part 2: Integral from a to b = F(b) - ___", "answer": ["f(a)"], "display": "F(a)" },
    { "id": 6, "topic": "FTC", "prompt": "What is F(x) in the FTC?", "answer": ["antiderivative", "anti-derivative"], "display": "Antiderivative" },
    { "id": 7, "topic": "Power Rule", "prompt": "Integral of x^2 dx is x^3/3 + ___", "answer": ["c"], "display": "C" },
    { "id": 8, "topic": "Power Rule", "prompt": "Integral of x dx is?", "answer": ["x^2/2", "0.5x^2"], "display": "x²/2" },
    { "id": 9, "topic": "Power Rule", "prompt": "Integral of 1 dx is?", "answer": ["x", "x+c"], "display": "x" },
    { "id": 10, "topic": "Indefinite", "prompt": "Indefinite integrals must always include +___", "answer": ["c", "constant"], "display": "+ C" },
    { "id": 11, "topic": "Definite", "prompt": "Does a definite integral (with bounds) resulted in a function or a number?", "answer": ["number", "value"], "display": "Number" },
    { "id": 12, "topic": "Common", "prompt": "Integral of 1/x dx is?", "answer": ["ln(x)", "ln|x|"], "display": "ln|x|" },
    { "id": 13, "topic": "Common", "prompt": "Integral of e^x dx is?", "answer": ["e^x", "e^x+c"], "display": "e^x" },
    { "id": 14, "topic": "Common", "prompt": "Integral of cos(x) dx is?", "answer": ["sin(x)", "sin x"], "display": "sin(x)" },
    { "id": 15, "topic": "Common", "prompt": "Integral of sin(x) dx is?", "answer": ["-cos(x)", "-cos x"], "display": "-cos(x)" },
    { "id": 16, "topic": "Application", "prompt": "Integral of velocity over time is?", "answer": ["displacement", "distance", "position"], "display": "Displacement" },
    { "id": 17, "topic": "Application", "prompt": "Physics: Integral of acceleration is?", "answer": ["velocity"], "display": "Velocity" },
    { "id": 18, "topic": "Logic", "prompt": "If F'(x) = f(x), then integral of f(x) is ___", "answer": ["f(x)", "f(x)+c"], "display": "F(x)" },
    { "id": 19, "topic": "Concept", "prompt": "Can area under the curve be negative?", "answer": ["yes"], "display": "Yes (signed area)" },
    { "id": 20, "topic": "Notation", "prompt": "What is the 'dx' in the integral notation?", "answer": ["width", "differential", "change in x"], "display": "Differential (width)" }
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
  ],
  "day44": [
    { "id": 1, "topic": "Limits", "prompt": "lim f(x) = L means f(x) gets ___ to L", "answer": ["close", "arbitrarily close"], "display": "close" },
    { "id": 2, "topic": "Limits", "prompt": "ε-δ: |x - a| < δ ⟹ |f(x) - L| < ___", "answer": ["ε", "epsilon"], "display": "ε" },
    { "id": 3, "topic": "Continuity", "prompt": "f continuous at a iff lim f(x) = f(___)", "answer": ["a"], "display": "f(a)" },
    { "id": 4, "topic": "Continuity", "prompt": "Continuous function on [a,b]: intermediate value ___", "answer": ["theorem"], "display": "theorem" },
    { "id": 5, "topic": "OpenSet", "prompt": "Open set: every point has ___ contained in set", "answer": ["neighborhood", "ball"], "display": "neighborhood" },
    { "id": 6, "topic": "ClosedSet", "prompt": "Closed set contains all its ___ points", "answer": ["limit"], "display": "limit points" },
    { "id": 7, "topic": "Topology", "prompt": "Set is clopen if both ___ and closed", "answer": ["open"], "display": "open" },
    { "id": 8, "topic": "Boundary", "prompt": "Boundary of set = closure \\ ___", "answer": ["interior"], "display": "interior" },
    { "id": 9, "topic": "Compact", "prompt": "In ℝⁿ, compact = closed and ___", "answer": ["bounded"], "display": "bounded" },
    { "id": 10, "topic": "Compact", "prompt": "Every open cover has finite ___", "answer": ["subcover"], "display": "subcover" },
    { "id": 11, "topic": "Sequence", "prompt": "Sequence (xₙ) converges if |xₙ - L| < ε for n > ___", "answer": ["n", "N"], "display": "N" },
    { "id": 12, "topic": "Cauchy", "prompt": "Cauchy sequence: |xₘ - xₙ| < ε for m,n > ___", "answer": ["n", "N"], "display": "N" },
    { "id": 13, "topic": "Complete", "prompt": "Complete space: every ___ sequence converges", "answer": ["cauchy"], "display": "Cauchy" },
    { "id": 14, "topic": "BolzanoWeierstrass", "prompt": "Bounded sequence in ℝ has convergent ___", "answer": ["subsequence"], "display": "subsequence" },
    { "id": 15, "topic": "Continuity", "prompt": "f continuous iff preimage of open is ___", "answer": ["open"], "display": "open" },
    { "id": 16, "topic": "Uniform", "prompt": "Uniform continuity: δ depends only on ___, not x", "answer": ["ε", "epsilon"], "display": "ε" },
    { "id": 17, "topic": "Compact", "prompt": "Continuous function on compact set is uniformly ___", "answer": ["continuous"], "display": "continuous" },
    { "id": 18, "topic": "Compact", "prompt": "Continuous f on compact K attains max and ___", "answer": ["min"], "display": "min" },
    { "id": 19, "topic": "Connected", "prompt": "Connected: cannot split into 2 nonempty ___ sets", "answer": ["open", "disjoint"], "display": "open" },
    { "id": 20, "topic": "PathConnected", "prompt": "Path connected ⟹ ___ (but not converse)", "answer": ["connected"], "display": "connected" }
  ],
  "day45": [
    { "id": 1, "topic": "Sequence", "prompt": "Monotone bounded sequence ___", "answer": ["converges"], "display": "converges" },
    { "id": 2, "topic": "Series", "prompt": "Σaₙ converges ⟹ aₙ → ___", "answer": ["0", "zero"], "display": "0" },
    { "id": 3, "topic": "Series", "prompt": "Geometric series Σrⁿ converges for |r| < ___", "answer": ["1"], "display": "1" },
    { "id": 4, "topic": "Comparison", "prompt": "0 ≤ aₙ ≤ bₙ and Σbₙ converges ⟹ Σaₙ ___", "answer": ["converges"], "display": "converges" },
    { "id": 5, "topic": "Ratio", "prompt": "Ratio test: if lim|aₙ₊₁/aₙ| < 1, series ___", "answer": ["converges"], "display": "converges" },
    { "id": 6, "topic": "Root", "prompt": "Root test: if lim|aₙ|^(1/n) < 1, series ___", "answer": ["converges"], "display": "converges" },
    { "id": 7, "topic": "Alternating", "prompt": "Alternating series: if |aₙ| ↓ 0, Σ(-1)ⁿaₙ ___", "answer": ["converges"], "display": "converges" },
    { "id": 8, "topic": "Absolute", "prompt": "Σ|aₙ| converges ⟹ Σaₙ ___ (absolute convergence)", "answer": ["converges"], "display": "converges" },
    { "id": 9, "topic": "Conditional", "prompt": "Conditionally convergent: converges but not ___", "answer": ["absolutely"], "display": "absolutely" },
    { "id": 10, "topic": "PSeries", "prompt": "p-series Σ1/nᵖ converges for p > ___", "answer": ["1"], "display": "1" },
    { "id": 11, "topic": "Integral", "prompt": "Integral test: Σf(n) and ∫f(x)dx converge ___", "answer": ["together"], "display": "together" },
    { "id": 12, "topic": "LimSup", "prompt": "lim sup = limit of ___ of tail", "answer": ["supremum", "sup"], "display": "supremum" },
    { "id": 13, "topic": "LimInf", "prompt": "lim inf = limit of ___ of tail", "answer": ["infimum", "inf"], "display": "infimum" },
    { "id": 14, "topic": "Cauchy", "prompt": "Series Σaₙ converges iff partial sums are ___", "answer": ["cauchy"], "display": "Cauchy" },
    { "id": 15, "topic": "Rearrangement", "prompt": "Absolutely convergent series: any rearrangement has same ___", "answer": ["sum"], "display": "sum" },
    { "id": 16, "topic": "Power", "prompt": "Power series Σaₙxⁿ converges for |x| < ___", "answer": ["r", "radius"], "display": "R (radius)" },
    { "id": 17, "topic": "Radius", "prompt": "R = 1/lim sup|aₙ|^(1/n) is radius of ___", "answer": ["convergence"], "display": "convergence" },
    { "id": 18, "topic": "Taylor", "prompt": "Taylor series: f(x) = Σf⁽ⁿ⁾(a)(x-a)ⁿ/___!", "answer": ["n"], "display": "n!" },
    { "id": 19, "topic": "Maclaurin", "prompt": "Maclaurin series is Taylor at a = ___", "answer": ["0"], "display": "0" },
    { "id": 20, "topic": "Analytic", "prompt": "Analytic function equals its ___ series", "answer": ["taylor"], "display": "Taylor" }
  ],
  "day46": [
    { "id": 1, "topic": "Complete", "prompt": "ℝ is complete: every Cauchy sequence ___", "answer": ["converges"], "display": "converges" },
    { "id": 2, "topic": "Completeness", "prompt": "Least upper bound property = Dedekind ___", "answer": ["completeness"], "display": "completeness" },
    { "id": 3, "topic": "Supremum", "prompt": "sup S = least ___ bound of S", "answer": ["upper"], "display": "upper" },
    { "id": 4, "topic": "Infimum", "prompt": "inf S = greatest ___ bound of S", "answer": ["lower"], "display": "lower" },
    { "id": 5, "topic": "Nested", "prompt": "Nested intervals: ∩[aₙ,bₙ] ≠ ∅ if intervals are ___", "answer": ["closed"], "display": "closed" },
    { "id": 6, "topic": "Compact", "prompt": "Sequential compactness: every sequence has convergent ___", "answer": ["subsequence"], "display": "subsequence" },
    { "id": 7, "topic": "HeineBorel", "prompt": "Heine-Borel: in ℝⁿ, compact ⟺ closed and ___", "answer": ["bounded"], "display": "bounded" },
    { "id": 8, "topic": "Compact", "prompt": "Image of compact under continuous is ___", "answer": ["compact"], "display": "compact" },
    { "id": 9, "topic": "Extreme", "prompt": "Extreme value theorem: continuous on compact attains ___", "answer": ["extrema", "max/min"], "display": "max/min" },
    { "id": 10, "topic": "Compact", "prompt": "Compact in metric space ⟹ ___ and bounded", "answer": ["closed"], "display": "closed" },
    { "id": 11, "topic": "TotallyBounded", "prompt": "Totally bounded: finite ε-net for any ___", "answer": ["ε", "epsilon"], "display": "ε" },
    { "id": 12, "topic": "Compact", "prompt": "In complete metric: compact ⟺ closed + totally ___", "answer": ["bounded"], "display": "bounded" },
    { "id": 13, "topic": "Lebesgue", "prompt": "Lebesgue number: minimum δ for open cover of ___", "answer": ["compact"], "display": "compact" },
    { "id": 14, "topic": "Arzelà", "prompt": "Arzelà-Ascoli: equicontinuous + pointwise bounded ⟹ ___", "answer": ["compact"], "display": "compact" },
    { "id": 15, "topic": "Equicontinuous", "prompt": "Equicontinuous: same δ works for all ___ in family", "answer": ["functions"], "display": "functions" },
    { "id": 16, "topic": "StoneWeierstrass", "prompt": "Stone-Weierstrass: polynomials ___ continuous functions", "answer": ["approximate"], "display": "approximate" },
    { "id": 17, "topic": "Dense", "prompt": "A is dense in X if closure of A = ___", "answer": ["x"], "display": "X" },
    { "id": 18, "topic": "Baire", "prompt": "Baire: complete metric space is not countable union of ___ sets", "answer": ["nowhere dense"], "display": "nowhere dense" },
    { "id": 19, "topic": "Perfect", "prompt": "Perfect set: closed with no ___ points", "answer": ["isolated"], "display": "isolated" },
    { "id": 20, "topic": "Cantor", "prompt": "Cantor set is compact, perfect, ___ measure", "answer": ["zero"], "display": "zero" }
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
    { "id": 1, "topic": "Pointwise", "prompt": "fₙ→f pointwise: for each x, fₙ(x)→f(___)", "answer": ["x"], "display": "f(x)" },
    { "id": 2, "topic": "Uniform", "prompt": "Uniform: sup|fₙ(x) - f(x)| → ___", "answer": ["0"], "display": "0" },
    { "id": 3, "topic": "Uniform", "prompt": "Uniform limit of continuous = ___", "answer": ["continuous"], "display": "continuous" },
    { "id": 4, "topic": "Weierstrass", "prompt": "Weierstrass M-test: |fₙ| ≤ Mₙ, ΣMₙ< ∞ ⟹ Σfₙ converges ___", "answer": ["uniformly"], "display": "uniformly" },
    { "id": 5, "topic": "Power", "prompt": "Power series converges uniformly on ___ subsets of disk", "answer": ["compact"], "display": "compact" },
    { "id": 6, "topic": "Interchange", "prompt": "Uniform convergence allows interchange of limit and ___", "answer": ["integral"], "display": "integral" },
    { "id": 7, "topic": "Interchange", "prompt": "For derivatives: need fₙ' converges ___ and fₙ(x₀) converges", "answer": ["uniformly"], "display": "uniformly" },
    { "id": 8, "topic": "Cauchy", "prompt": "Uniform Cauchy ⟺ uniformly ___", "answer": ["convergent"], "display": "convergent" },
    { "id": 9, "topic": "Normal", "prompt": "Σ‖fₙ‖ < ∞ gives ___ convergence", "answer": ["normal", "absolute"], "display": "normal" },
    { "id": 10, "topic": "Fourier", "prompt": "Fourier series: f = Σ(aₙcos(nx) + bₙsin(___))", "answer": ["nx"], "display": "sin(nx)" },
    { "id": 11, "topic": "Fourier", "prompt": "Fourier coefficients: aₙ = (1/π)∫f cos(nx)dx", "answer": ["true"], "display": "True" },
    { "id": 12, "topic": "Parseval", "prompt": "Parseval: ‖f‖² = Σ|cₙ|² relates ___ and coefficients", "answer": ["norm"], "display": "norm" },
    { "id": 13, "topic": "Dirichlet", "prompt": "Dirichlet: Fourier converges for ___ functions", "answer": ["piecewise smooth"], "display": "piecewise smooth" },
    { "id": 14, "topic": "Gibbs", "prompt": "Gibbs phenomenon: overshoot at ___", "answer": ["discontinuities", "jumps"], "display": "discontinuities" },
    { "id": 15, "topic": "Complete", "prompt": "L²: inner product space of square-___ functions", "answer": ["integrable"], "display": "integrable" },
    { "id": 16, "topic": "Orthonormal", "prompt": "Fourier basis is ___ in L²", "answer": ["orthonormal"], "display": "orthonormal" },
    { "id": 17, "topic": "Cesàro", "prompt": "Cesàro sums: average of partial ___", "answer": ["sums"], "display": "sums" },
    { "id": 18, "topic": "Fejér", "prompt": "Fejér: Cesàro sums of Fourier converge ___", "answer": ["uniformly"], "display": "uniformly" },
    { "id": 19, "topic": "Density", "prompt": "Trigonometric polynomials are ___ in C[0,2π]", "answer": ["dense"], "display": "dense" },
    { "id": 20, "topic": "RiemannLebesgue", "prompt": "Riemann-Lebesgue: Fourier coefficients → ___", "answer": ["0"], "display": "0" }
  ],
  "day49": [
    { "id": 1, "topic": "Metric", "prompt": "d(x,y) ≥ 0 and = 0 iff x = ___", "answer": ["y"], "display": "y" },
    { "id": 2, "topic": "Metric", "prompt": "Triangle inequality: d(x,z) ≤ d(x,y) + d(y,___)", "answer": ["z"], "display": "z" },
    { "id": 3, "topic": "Metric", "prompt": "Symmetry: d(x,y) = d(y,___)", "answer": ["x"], "display": "x" },
    { "id": 4, "topic": "Ball", "prompt": "Open ball B(x,r) = {y : d(x,y) < ___}", "answer": ["r"], "display": "r" },
    { "id": 5, "topic": "Induced", "prompt": "Metric induces ___ via open balls", "answer": ["topology"], "display": "topology" },
    { "id": 6, "topic": "Equivalent", "prompt": "Equivalent metrics: same open ___", "answer": ["sets"], "display": "sets" },
    { "id": 7, "topic": "Complete", "prompt": "Banach space: complete ___ space", "answer": ["normed"], "display": "normed" },
    { "id": 8, "topic": "Contraction", "prompt": "Contraction: d(f(x),f(y)) ≤ c×d(x,y), c < ___", "answer": ["1"], "display": "1" },
    { "id": 9, "topic": "Banach", "prompt": "Banach fixed point: contraction on complete has unique ___", "answer": ["fixed point"], "display": "fixed point" },
    { "id": 10, "topic": "Lipschitz", "prompt": "Lipschitz: |f(x) - f(y)| ≤ L|x - ___|", "answer": ["y"], "display": "y" },
    { "id": 11, "topic": "Isometry", "prompt": "Isometry: d(f(x),f(y)) = d(x,___)", "answer": ["y"], "display": "y" },
    { "id": 12, "topic": "Completion", "prompt": "Every metric space has unique ___ (up to isometry)", "answer": ["completion"], "display": "completion" },
    { "id": 13, "topic": "Separable", "prompt": "Separable: has countable ___ subset", "answer": ["dense"], "display": "dense" },
    { "id": 14, "topic": "SecondCountable", "prompt": "Second countable: countable ___ of topology", "answer": ["basis"], "display": "basis" },
    { "id": 15, "topic": "Product", "prompt": "Product metric: many choices, all ___", "answer": ["equivalent"], "display": "equivalent" },
    { "id": 16, "topic": "Quotient", "prompt": "Quotient metric induced by equivalence ___", "answer": ["relation"], "display": "relation" },
    { "id": 17, "topic": "Hausdorff", "prompt": "Metric space is always ___", "answer": ["hausdorff"], "display": "Hausdorff" },
    { "id": 18, "topic": "First", "prompt": "Metric space is first ___", "answer": ["countable"], "display": "countable" },
    { "id": 19, "topic": "Diameter", "prompt": "diam(A) = sup d(x,y) for x,y in ___", "answer": ["a"], "display": "A" },
    { "id": 20, "topic": "Distance", "prompt": "d(A,B) = inf d(a,b) for a∈A, b∈___", "answer": ["b"], "display": "B" }
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
    { "id": 1, "topic": "Group", "prompt": "Group: set with binary op, identity, inverses, ___", "answer": ["associativity", "closure"], "display": "associativity" },
    { "id": 2, "topic": "Group", "prompt": "Abelian group: operation is ___", "answer": ["commutative"], "display": "commutative" },
    { "id": 3, "topic": "Order", "prompt": "|g| = smallest n s.t. gⁿ = ___", "answer": ["e", "identity"], "display": "e" },
    { "id": 4, "topic": "Subgroup", "prompt": "H ≤ G: H is ___ of G", "answer": ["subgroup"], "display": "subgroup" },
    { "id": 5, "topic": "Lagrange", "prompt": "Lagrange: |H| divides |___| ", "answer": ["g"], "display": "|G|" },
    { "id": 6, "topic": "Coset", "prompt": "gH = {gh : h ∈ ___}", "answer": ["h"], "display": "H" },
    { "id": 7, "topic": "Normal", "prompt": "Normal subgroup: gH = ___ for all g", "answer": ["hg"], "display": "Hg" },
    { "id": 8, "topic": "Quotient", "prompt": "G/N: quotient group of G by normal subgroup ___", "answer": ["n"], "display": "N" },
    { "id": 9, "topic": "Homomorphism", "prompt": "φ(ab) = φ(a)φ(___)", "answer": ["b"], "display": "φ(b)" },
    { "id": 10, "topic": "Kernel", "prompt": "ker(φ) = {g : φ(g) = ___}", "answer": ["e", "identity"], "display": "e" },
    { "id": 11, "topic": "FirstIso", "prompt": "First iso: G/ker(φ) ≅ ___(G)", "answer": ["im", "image"], "display": "im(φ)" },
    { "id": 12, "topic": "Ring", "prompt": "Ring: abelian group under +, ___ under ×", "answer": ["associative"], "display": "associative" },
    { "id": 13, "topic": "Ring", "prompt": "Ring with multiplicative identity 1 ≠ 0", "answer": ["true"], "display": "True" },
    { "id": 14, "topic": "Ideal", "prompt": "Ideal I: for r∈R, a∈I: ra∈___", "answer": ["i"], "display": "I" },
    { "id": 15, "topic": "Quotient", "prompt": "R/I inherits ___ structure from R", "answer": ["ring"], "display": "ring" },
    { "id": 16, "topic": "Prime", "prompt": "Prime ideal P: ab∈P ⟹ a∈P or b∈___", "answer": ["p"], "display": "P" },
    { "id": 17, "topic": "Maximal", "prompt": "Maximal ideal M: R/M is a ___", "answer": ["field"], "display": "field" },
    { "id": 18, "topic": "Domain", "prompt": "Integral domain: no zero ___", "answer": ["divisors"], "display": "divisors" },
    { "id": 19, "topic": "PID", "prompt": "PID: every ideal is ___", "answer": ["principal"], "display": "principal" },
    { "id": 20, "topic": "UFD", "prompt": "UFD: unique ___ factorization domain", "answer": ["factorization"], "display": "factorization" }
  ],
  "day53": [
    { "id": 1, "topic": "Field", "prompt": "Field: ring where every nonzero element has ___", "answer": ["inverse"], "display": "inverse" },
    { "id": 2, "topic": "Char", "prompt": "Characteristic: smallest n s.t. n×1 = ___", "answer": ["0"], "display": "0" },
    { "id": 3, "topic": "Extension", "prompt": "L/K: L is ___ extension of K", "answer": ["field"], "display": "field" },
    { "id": 4, "topic": "Degree", "prompt": "[L:K] = dimension of L as ___ over K", "answer": ["vector space"], "display": "vector space" },
    { "id": 5, "topic": "Algebraic", "prompt": "α algebraic over K: root of ___ with coeffs in K", "answer": ["polynomial"], "display": "polynomial" },
    { "id": 6, "topic": "Minimal", "prompt": "Minimal polynomial: monic, ___ degree, α as root", "answer": ["lowest"], "display": "lowest" },
    { "id": 7, "topic": "Tower", "prompt": "Tower law: [M:K] = [M:L][L:___]", "answer": ["k"], "display": "K" },
    { "id": 8, "topic": "Splitting", "prompt": "Splitting field: smallest extension where poly ___ completely", "answer": ["splits", "factors"], "display": "splits" },
    { "id": 9, "topic": "Galois", "prompt": "Galois extension: normal and ___", "answer": ["separable"], "display": "separable" },
    { "id": 10, "topic": "Galois", "prompt": "Gal(L/K) = automorphisms of L fixing ___", "answer": ["k"], "display": "K" },
    { "id": 11, "topic": "FTGT", "prompt": "Fund. thm: subgroups ↔ intermediate ___", "answer": ["fields"], "display": "fields" },
    { "id": 12, "topic": "Solvable", "prompt": "Poly solvable by radicals iff Galois group is ___", "answer": ["solvable"], "display": "solvable" },
    { "id": 13, "topic": "Degree5", "prompt": "General degree ≥ ___ poly not solvable by radicals", "answer": ["5"], "display": "5" },
    { "id": 14, "topic": "Finite", "prompt": "Finite field exists for q = p^___ elements", "answer": ["n"], "display": "pⁿ" },
    { "id": 15, "topic": "Finite", "prompt": "𝔽ₚ = ℤ/___ℤ", "answer": ["p"], "display": "p" },
    { "id": 16, "topic": "Cyclotomic", "prompt": "n-th roots of unity form ___ group", "answer": ["cyclic"], "display": "cyclic" },
    { "id": 17, "topic": "Primitive", "prompt": "Primitive n-th root: generates all n-th ___", "answer": ["roots"], "display": "roots" },
    { "id": 18, "topic": "Frobenius", "prompt": "Frobenius: x → x^___ in char p", "answer": ["p"], "display": "p" },
    { "id": 19, "topic": "Separable", "prompt": "Separable poly: no ___ roots", "answer": ["repeated"], "display": "repeated" },
    { "id": 20, "topic": "Normal", "prompt": "Normal extension: every irreducible with one root has ___ roots", "answer": ["all"], "display": "all" }
  ],
  "day54": [
    { "id": 1, "topic": "Module", "prompt": "Module over R: like vector space over ___", "answer": ["ring"], "display": "ring" },
    { "id": 2, "topic": "Module", "prompt": "Vector space = module over ___", "answer": ["field"], "display": "field" },
    { "id": 3, "topic": "Submodule", "prompt": "Submodule: subgroup closed under scalar ___", "answer": ["multiplication"], "display": "multiplication" },
    { "id": 4, "topic": "Free", "prompt": "Free module: has ___", "answer": ["basis"], "display": "basis" },
    { "id": 5, "topic": "Rank", "prompt": "Rank of free module = size of ___", "answer": ["basis"], "display": "basis" },
    { "id": 6, "topic": "Quotient", "prompt": "M/N is quotient module for submodule ___", "answer": ["n"], "display": "N" },
    { "id": 7, "topic": "Hom", "prompt": "Hom(M,N) = R-module homomorphisms ___→N", "answer": ["m"], "display": "M" },
    { "id": 8, "topic": "Tensor", "prompt": "M ⊗_R N: tensor ___ over R", "answer": ["product"], "display": "product" },
    { "id": 9, "topic": "Exact", "prompt": "Exact sequence: im = ___ at each step", "answer": ["ker"], "display": "ker" },
    { "id": 10, "topic": "Short", "prompt": "0 → A → B → C → 0 is ___ exact sequence", "answer": ["short"], "display": "short" },
    { "id": 11, "topic": "Projective", "prompt": "Projective module: lifting property for ___", "answer": ["epimorphisms"], "display": "epis" },
    { "id": 12, "topic": "Injective", "prompt": "Injective module: extension property for ___", "answer": ["monomorphisms"], "display": "monos" },
    { "id": 13, "topic": "Flat", "prompt": "Flat module: ⊗ M preserves ___", "answer": ["exactness"], "display": "exactness" },
    { "id": 14, "topic": "Noetherian", "prompt": "Noetherian module: every submodule is finitely ___", "answer": ["generated"], "display": "generated" },
    { "id": 15, "topic": "Artinian", "prompt": "Artinian module: descending chain condition on ___", "answer": ["submodules"], "display": "submodules" },
    { "id": 16, "topic": "Linear", "prompt": "Linear map of modules: f(rx) = r×f(___)", "answer": ["x"], "display": "x" },
    { "id": 17, "topic": "Annihilator", "prompt": "Ann(m) = {r∈R : rm = ___}", "answer": ["0"], "display": "0" },
    { "id": 18, "topic": "Torsion", "prompt": "Torsion element: rm = 0 for some r ≠ ___", "answer": ["0"], "display": "0" },
    { "id": 19, "topic": "StructThm", "prompt": "Finitely gen module over PID = free ⊕ ___", "answer": ["torsion"], "display": "torsion" },
    { "id": 20, "topic": "JNF", "prompt": "Jordan normal form follows from module theory over ___", "answer": ["k[x]"], "display": "K[x]" }
  ],
  "day55": [
    { "id": 1, "topic": "Topology", "prompt": "Topology τ on X: ∅ ∈ τ, X ∈ τ, closed under ∪ and finite ___", "answer": ["∩", "intersection"], "display": "∩" },
    { "id": 2, "topic": "Open", "prompt": "O ∈ τ means O is ___", "answer": ["open"], "display": "open" },
    { "id": 3, "topic": "Closed", "prompt": "C closed iff X \\ C is ___", "answer": ["open"], "display": "open" },
    { "id": 4, "topic": "Basis", "prompt": "Basis generates topology via arbitrary ___", "answer": ["unions"], "display": "unions" },
    { "id": 5, "topic": "Continuous", "prompt": "f continuous: preimage of open is ___", "answer": ["open"], "display": "open" },
    { "id": 6, "topic": "Homeomorphism", "prompt": "Homeomorphism: continuous bijection with continuous ___", "answer": ["inverse"], "display": "inverse" },
    { "id": 7, "topic": "Compact", "prompt": "Every open cover has finite ___", "answer": ["subcover"], "display": "subcover" },
    { "id": 8, "topic": "Compact", "prompt": "Compact Hausdorff ⟹ ___", "answer": ["normal"], "display": "normal" },
    { "id": 9, "topic": "Hausdorff", "prompt": "Hausdorff: distinct points have disjoint ___", "answer": ["neighborhoods"], "display": "neighborhoods" },
    { "id": 10, "topic": "Connected", "prompt": "Connected: not union of two disjoint nonempty ___ sets", "answer": ["open"], "display": "open" },
    { "id": 11, "topic": "PathConnected", "prompt": "Path connected: continuous path between any two ___", "answer": ["points"], "display": "points" },
    { "id": 12, "topic": "Closure", "prompt": "cl(A): smallest ___ set containing A", "answer": ["closed"], "display": "closed" },
    { "id": 13, "topic": "Interior", "prompt": "int(A): largest ___ set in A", "answer": ["open"], "display": "open" },
    { "id": 14, "topic": "Boundary", "prompt": "∂A = cl(A) \\ ___", "answer": ["int(a)"], "display": "int(A)" },
    { "id": 15, "topic": "Limit", "prompt": "x is limit point of A if every nbhd meets A \\ {___}", "answer": ["x"], "display": "{x}" },
    { "id": 16, "topic": "Subspace", "prompt": "Subspace topology: O_Y = O_X ∩ ___", "answer": ["y"], "display": "Y" },
    { "id": 17, "topic": "Quotient", "prompt": "Quotient topology: U open iff π⁻¹(U) is ___", "answer": ["open"], "display": "open" },
    { "id": 18, "topic": "T1", "prompt": "T1: points are ___ sets", "answer": ["closed"], "display": "closed" },
    { "id": 19, "topic": "Normal", "prompt": "Normal: disjoint closed sets have ___ open sets", "answer": ["disjoint"], "display": "disjoint" },
    { "id": 20, "topic": "Urysohn", "prompt": "Urysohn: separates closed sets by continuous ___", "answer": ["function"], "display": "function" }
  ],
  "day56": [
    { "id": 1, "topic": "Product", "prompt": "Product topology: basis = ΠUᵢ where finitely many Uᵢ ≠ ___", "answer": ["xᵢ", "Xi"], "display": "Xᵢ" },
    { "id": 2, "topic": "Projection", "prompt": "Projections πᵢ: ΠXⱼ → Xᵢ are ___", "answer": ["continuous"], "display": "continuous" },
    { "id": 3, "topic": "Universal", "prompt": "Product: f: Y→ΠXᵢ continuous iff each πᵢ∘f is ___", "answer": ["continuous"], "display": "continuous" },
    { "id": 4, "topic": "Tychonoff", "prompt": "Tychonoff: product of compacts is ___", "answer": ["compact"], "display": "compact" },
    { "id": 5, "topic": "Box", "prompt": "Box topology: all products of open sets as ___", "answer": ["basis"], "display": "basis" },
    { "id": 6, "topic": "Difference", "prompt": "Product ≠ box when ___ many factors", "answer": ["infinitely"], "display": "infinitely" },
    { "id": 7, "topic": "Connectedness", "prompt": "Product of connected spaces is ___", "answer": ["connected"], "display": "connected" },
    { "id": 8, "topic": "Hausdorff", "prompt": "Product of Hausdorff is ___", "answer": ["hausdorff"], "display": "Hausdorff" },
    { "id": 9, "topic": "Sequence", "prompt": "Sequential convergence in product: each ___ converges", "answer": ["coordinate"], "display": "coordinate" },
    { "id": 10, "topic": "Metric", "prompt": "Countable product of metric spaces is ___", "answer": ["metrizable"], "display": "metrizable" },
    { "id": 11, "topic": "Cantor", "prompt": "Cantor space = {0,1}^___ with product topology", "answer": ["ℕ", "N"], "display": "ℕ" },
    { "id": 12, "topic": "Stone", "prompt": "Stone-Čech: largest ___", "answer": ["compactification"], "display": "compactification" },
    { "id": 13, "topic": "Coproduct", "prompt": "Coproduct = disjoint ___ with sum topology", "answer": ["union"], "display": "union" },
    { "id": 14, "topic": "Separation", "prompt": "Separation axioms: T0 < T1 < T2 (___) < T3 < T4", "answer": ["hausdorff"], "display": "Hausdorff" },
    { "id": 15, "topic": "Regular", "prompt": "Regular = T3 = point and closed set have disjoint ___", "answer": ["neighborhoods"], "display": "neighborhoods" },
    { "id": 16, "topic": "Compact", "prompt": "Compact Hausdorff is ___", "answer": ["normal"], "display": "normal" },
    { "id": 17, "topic": "LocallyCompact", "prompt": "Locally compact: every point has compact ___", "answer": ["neighborhood"], "display": "neighborhood" },
    { "id": 18, "topic": "Paracompact", "prompt": "Paracompact: every open cover has locally finite ___", "answer": ["refinement"], "display": "refinement" },
    { "id": 19, "topic": "Lindelöf", "prompt": "Lindelöf: every open cover has ___ subcover", "answer": ["countable"], "display": "countable" },
    { "id": 20, "topic": "Second", "prompt": "Second countable ⟹ ___ countable", "answer": ["first"], "display": "first" }
  ],
  "day57": [
    { "id": 1, "topic": "SigmaAlgebra", "prompt": "σ-algebra: closed under complement and countable ___", "answer": ["unions"], "display": "unions" },
    { "id": 2, "topic": "Measurable", "prompt": "(X, Σ): X with σ-algebra Σ on it", "answer": ["true"], "display": "measurable space" },
    { "id": 3, "topic": "Borel", "prompt": "Borel σ-algebra: generated by ___ sets", "answer": ["open"], "display": "open" },
    { "id": 4, "topic": "Measure", "prompt": "Measure μ: μ(∅) = ___, countably additive", "answer": ["0"], "display": "0" },
    { "id": 5, "topic": "Lebesgue", "prompt": "Lebesgue measure: length/area/volume on ___", "answer": ["ℝⁿ", "Rn"], "display": "ℝⁿ" },
    { "id": 6, "topic": "Monotone", "prompt": "μ(A) ≤ μ(B) if A ⊆ ___", "answer": ["b"], "display": "B" },
    { "id": 7, "topic": "Countable", "prompt": "Countable set has Lebesgue measure ___", "answer": ["0", "zero"], "display": "0" },
    { "id": 8, "topic": "Cantor", "prompt": "Cantor set: uncountable, measure ___", "answer": ["0", "zero"], "display": "0" },
    { "id": 9, "topic": "Outer", "prompt": "Outer measure: μ*(A) = inf Σμ(Iᵢ) covering ___", "answer": ["a"], "display": "A" },
    { "id": 10, "topic": "Carathéodory", "prompt": "Carathéodory: A measurable iff splits all sets ___", "answer": ["additively"], "display": "additively" },
    { "id": 11, "topic": "Complete", "prompt": "Complete measure: subsets of null sets are ___", "answer": ["measurable"], "display": "measurable" },
    { "id": 12, "topic": "NullSet", "prompt": "Null set: measure ___ (μ(N) = 0)", "answer": ["0", "zero"], "display": "0" },
    { "id": 13, "topic": "Almost", "prompt": "Almost everywhere (a.e.): except on ___ set", "answer": ["null", "measure zero"], "display": "null" },
    { "id": 14, "topic": "Finite", "prompt": "Finite measure: μ(X) < ___", "answer": ["∞", "infinity"], "display": "∞" },
    { "id": 15, "topic": "SigmaFinite", "prompt": "σ-finite: X = countable union of ___ measure sets", "answer": ["finite"], "display": "finite" },
    { "id": 16, "topic": "Prob", "prompt": "Probability measure: μ(X) = ___", "answer": ["1"], "display": "1" },
    { "id": 17, "topic": "Product", "prompt": "Product measure on X × Y: μ × ___", "answer": ["ν", "nu"], "display": "ν" },
    { "id": 18, "topic": "Fubini", "prompt": "Fubini: ∫∫ = ∫∫ (interchangeable for ___ functions)", "answer": ["integrable"], "display": "integrable" },
    { "id": 19, "topic": "Regularity", "prompt": "Regular measure: approximate from inside by ___", "answer": ["compact"], "display": "compact" },
    { "id": 20, "topic": "RadonNikodym", "prompt": "Radon-Nikodym: ν << μ ⟹ ν = ∫___dμ", "answer": ["f"], "display": "f dμ" }
  ],
  "day58": [
    { "id": 1, "topic": "Measurable", "prompt": "f measurable: f⁻¹(open) is ___", "answer": ["measurable"], "display": "measurable" },
    { "id": 2, "topic": "Simple", "prompt": "Simple function: finite number of ___", "answer": ["values"], "display": "values" },
    { "id": 3, "topic": "Indicator", "prompt": "χ_A(x) = 1 if x∈A, else ___", "answer": ["0"], "display": "0" },
    { "id": 4, "topic": "Approximation", "prompt": "Measurable f ≥ 0: limit of increasing ___ functions", "answer": ["simple"], "display": "simple" },
    { "id": 5, "topic": "Lebesgue", "prompt": "Lebesgue integral of simple: Σaᵢ μ(Aᵢ)", "answer": ["true"], "display": "True" },
    { "id": 6, "topic": "Nonneg", "prompt": "∫f dμ = sup ∫s dμ for simple s ≤ ___", "answer": ["f"], "display": "f" },
    { "id": 7, "topic": "General", "prompt": "∫f = ∫f⁺ - ∫f⁻ where f = f⁺ - ___", "answer": ["f⁻"], "display": "f⁻" },
    { "id": 8, "topic": "Integrable", "prompt": "f integrable: ∫|f| < ___", "answer": ["∞", "infinity"], "display": "∞" },
    { "id": 9, "topic": "L1", "prompt": "L¹(μ) = integrable functions with ‖f‖₁ = ∫|f|dμ", "answer": ["true"], "display": "True" },
    { "id": 10, "topic": "Lp", "prompt": "Lᵖ: ∫|f|ᵖ < ∞ with ‖f‖ₚ = (∫|f|ᵖ)^(1/___)", "answer": ["p"], "display": "p" },
    { "id": 11, "topic": "Holder", "prompt": "Hölder: ‖fg‖₁ ≤ ‖f‖ₚ ‖g‖___ where 1/p + 1/q = 1", "answer": ["q"], "display": "q" },
    { "id": 12, "topic": "Minkowski", "prompt": "Minkowski: ‖f+g‖ₚ ≤ ‖f‖ₚ + ‖g‖___", "answer": ["p"], "display": "p" },
    { "id": 13, "topic": "Complete", "prompt": "Lᵖ is complete (Banach space) for p ≥ ___", "answer": ["1"], "display": "1" },
    { "id": 14, "topic": "L2", "prompt": "L² is a ___ space (inner product)", "answer": ["hilbert"], "display": "Hilbert" },
    { "id": 15, "topic": "Dense", "prompt": "Simple functions are ___ in Lᵖ", "answer": ["dense"], "display": "dense" },
    { "id": 16, "topic": "Linearity", "prompt": "∫(af + bg) = a∫f + b∫___", "answer": ["g"], "display": "g" },
    { "id": 17, "topic": "Monotone", "prompt": "0 ≤ f ≤ g ⟹ ∫f ≤ ∫___", "answer": ["g"], "display": "g" },
    { "id": 18, "topic": "Fatou", "prompt": "Fatou: ∫lim inf fₙ ≤ lim inf ∫___", "answer": ["fₙ", "fn"], "display": "fₙ" },
    { "id": 19, "topic": "Essential", "prompt": "ess sup f = inf{M : f ≤ M a.___}", "answer": ["e", "everywhere"], "display": "a.e." },
    { "id": 20, "topic": "L∞", "prompt": "L^∞: ‖f‖_∞ = ess ___ f", "answer": ["sup"], "display": "ess sup" }
  ],
  "day59": [
    { "id": 1, "topic": "MCT", "prompt": "Monotone Convergence: 0 ≤ fₙ ↑ f ⟹ ∫fₙ → ∫___", "answer": ["f"], "display": "f" },
    { "id": 2, "topic": "Fatou", "prompt": "Fatou's lemma: ∫lim inf ≤ lim inf ∫", "answer": ["true"], "display": "True" },
    { "id": 3, "topic": "DCT", "prompt": "Dominated: |fₙ| ≤ g integrable, fₙ→f ⟹ ∫fₙ → ∫___", "answer": ["f"], "display": "f" },
    { "id": 4, "topic": "DCT", "prompt": "DCT allows interchange of limit and ___", "answer": ["integral"], "display": "integral" },
    { "id": 5, "topic": "Uniform", "prompt": "Uniform integrability: stronger than ___", "answer": ["dominated", "DCT"], "display": "dominated" },
    { "id": 6, "topic": "Vitali", "prompt": "Vitali: unif integrable + a.e. convergence ⟹ ∫ ___", "answer": ["converges"], "display": "converges" },
    { "id": 7, "topic": "Egorov", "prompt": "Egorov: a.e. convergence on finite measure ⟹ ___ except small set", "answer": ["uniform"], "display": "uniform" },
    { "id": 8, "topic": "Lusin", "prompt": "Lusin: measurable f is continuous except on small ___", "answer": ["set"], "display": "set" },
    { "id": 9, "topic": "RiemannLebesgue", "prompt": "Riemann integrable ⟹ Lebesgue integrable with same ___", "answer": ["value"], "display": "value" },
    { "id": 10, "topic": "Differentiation", "prompt": "Lebesgue: ∫_a^x f' dx = f(x) - f(a) for absolutely ___", "answer": ["continuous"], "display": "continuous" },
    { "id": 11, "topic": "Riesz", "prompt": "Riesz: Lᵖ convergence ⟹ subsequence converges ___", "answer": ["a.e.", "pointwise"], "display": "a.e." },
    { "id": 12, "topic": "Approximation", "prompt": "Continuous functions with compact support are ___ in Lᵖ", "answer": ["dense"], "display": "dense" },
    { "id": 13, "topic": "Convolution", "prompt": "(f*g)(x) = ∫f(x-y)g(y)dy is ___", "answer": ["convolution"], "display": "convolution" },
    { "id": 14, "topic": "Young", "prompt": "Young: ‖f*g‖ᵣ ≤ ‖f‖ₚ‖g‖_q for 1/p + 1/q = 1 + 1/___", "answer": ["r"], "display": "r" },
    { "id": 15, "topic": "Fubini", "prompt": "Fubini: ∫∫|f| < ∞ ⟹ ∫∫f = ∫∫___", "answer": ["f"], "display": "∫∫f (order swap)" },
    { "id": 16, "topic": "Tonelli", "prompt": "Tonelli: for f ≥ 0, can always ___", "answer": ["swap"], "display": "swap integrals" },
    { "id": 17, "topic": "Bounded", "prompt": "Bounded convergence on finite measure works like ___", "answer": ["dct"], "display": "DCT" },
    { "id": 18, "topic": "Modes", "prompt": "Convergence modes: a.e., ___,  Lᵖ, in measure", "answer": ["pointwise"], "display": "pointwise" },
    { "id": 19, "topic": "InMeasure", "prompt": "fₙ → f in measure: μ{|fₙ-f| > ε} → ___", "answer": ["0"], "display": "0" },
    { "id": 20, "topic": "Lp", "prompt": "Lᵖ convergence ⟹ convergence in ___", "answer": ["measure"], "display": "measure" }
  ],
  "day60": [
    { "id": 1, "topic": "ProbSpace", "prompt": "(Ω, 𝓕, P): sample space, σ-algebra, probability ___", "answer": ["measure"], "display": "measure" },
    { "id": 2, "topic": "RV", "prompt": "Random variable: measurable function X: Ω → ___", "answer": ["ℝ", "R"], "display": "ℝ" },
    { "id": 3, "topic": "Distribution", "prompt": "Distribution of X: μ_X(A) = P(X ∈ ___)", "answer": ["a"], "display": "A" },
    { "id": 4, "topic": "Expectation", "prompt": "E[X] = ∫X dP = ∫x d___", "answer": ["μx", "μ_X"], "display": "μ_X" },
    { "id": 5, "topic": "Independent", "prompt": "X,Y independent: P(X∈A, Y∈B) = P(X∈A) × P(Y∈___)", "answer": ["b"], "display": "B" },
    { "id": 6, "topic": "Conditioning", "prompt": "E[X|𝓖] is 𝓖-measurable and ∫E[X|𝓖]dP = ∫X dP on ___∈𝓖", "answer": ["g", "G"], "display": "G" },
    { "id": 7, "topic": "Martingale", "prompt": "Martingale: E[Xₙ₊₁|𝓕ₙ] = ___", "answer": ["xₙ", "Xn"], "display": "Xₙ" },
    { "id": 8, "topic": "Submartingale", "prompt": "Submartingale: E[Xₙ₊₁|𝓕ₙ] ≥ ___", "answer": ["xₙ", "Xn"], "display": "Xₙ" },
    { "id": 9, "topic": "Filtration", "prompt": "Filtration: increasing sequence of ___-algebras", "answer": ["σ", "sigma"], "display": "σ" },
    { "id": 10, "topic": "Adapted", "prompt": "Xₙ adapted: Xₙ is 𝓕ₙ-___", "answer": ["measurable"], "display": "measurable" },
    { "id": 11, "topic": "StoppingTime", "prompt": "Stopping time τ: {τ ≤ n} ∈ 𝓕ₙ for all ___", "answer": ["n"], "display": "n" },
    { "id": 12, "topic": "Optional", "prompt": "Optional stopping: martingale at stopping time has E[X_{τ}] = E[___]", "answer": ["x₀", "X0"], "display": "X₀" },
    { "id": 13, "topic": "Kolmogorov", "prompt": "Kolmogorov 0-1: tail event has probability ___ or 1", "answer": ["0"], "display": "0" },
    { "id": 14, "topic": "Borel", "prompt": "Borel-Cantelli 1: Σ P(Aₙ) < ∞ ⟹ P(lim sup Aₙ) = ___", "answer": ["0"], "display": "0" },
    { "id": 15, "topic": "Borel", "prompt": "Borel-Cantelli 2: Σ P(Aₙ) = ∞ + ind. ⟹ P(lim sup Aₙ) = ___", "answer": ["1"], "display": "1" },
    { "id": 16, "topic": "IID", "prompt": "IID = independent and identically ___", "answer": ["distributed"], "display": "distributed" },
    { "id": 17, "topic": "SLLN", "prompt": "Strong LLN: X̄ₙ → μ almost ___", "answer": ["surely"], "display": "surely" },
    { "id": 18, "topic": "Characteristic", "prompt": "Characteristic function: φ(t) = E[e^___]", "answer": ["itx", "itX"], "display": "e^{itX}" },
    { "id": 19, "topic": "Uniqueness", "prompt": "Characteristic function ___ determines distribution", "answer": ["uniquely"], "display": "uniquely" },
    { "id": 20, "topic": "Levy", "prompt": "Lévy: continuous at 0 ⟹ φ is char. function of some ___", "answer": ["distribution"], "display": "distribution" }
  ],
  "day61": [
    { "id": 1, "topic": "SLLN", "prompt": "Strong LLN: (X₁+...+Xₙ)/n → E[X] almost ___", "answer": ["surely"], "display": "surely" },
    { "id": 2, "topic": "WLLN", "prompt": "Weak LLN: (X₁+...+Xₙ)/n → E[X] in ___", "answer": ["probability"], "display": "probability" },
    { "id": 3, "topic": "CLT", "prompt": "CLT: √n(X̄ₙ - μ)/σ → N(___, 1)", "answer": ["0"], "display": "N(0,1)" },
    { "id": 4, "topic": "CLT", "prompt": "CLT requires finite ___ (and mean)", "answer": ["variance"], "display": "variance" },
    { "id": 5, "topic": "Lindeberg", "prompt": "Lindeberg CLT: relaxed ___ requirement", "answer": ["identically distributed", "iid"], "display": "iid" },
    { "id": 6, "topic": "LyapunovCLT", "prompt": "Lyapunov condition: stronger than ___", "answer": ["lindeberg"], "display": "Lindeberg" },
    { "id": 7, "topic": "Berry", "prompt": "Berry-Esséen: convergence rate O(1/√___)", "answer": ["n"], "display": "√n" },
    { "id": 8, "topic": "Convergence", "prompt": "a.s. ⟹ probability ⟹ ___", "answer": ["distribution"], "display": "distribution" },
    { "id": 9, "topic": "Convergence", "prompt": "Lᵖ ⟹ ___", "answer": ["probability"], "display": "probability" },
    { "id": 10, "topic": "Portmanteau", "prompt": "Portmanteau: equivalent defs of convergence in ___", "answer": ["distribution"], "display": "distribution" },
    { "id": 11, "topic": "Slutsky", "prompt": "Slutsky: Xₙ →^d X, Yₙ →^P c ⟹ Xₙ+Yₙ →^d X+___", "answer": ["c"], "display": "c" },
    { "id": 12, "topic": "ContinuousMapping", "prompt": "Continuous mapping: Xₙ →^d X ⟹ g(Xₙ) →^d g(___)", "answer": ["x"], "display": "g(X)" },
    { "id": 13, "topic": "DeltaMethod", "prompt": "Delta method: for smooth g, √n(g(X̄)-g(μ)) →^d N(0, g'(μ)²___)", "answer": ["σ²"], "display": "σ²" },
    { "id": 14, "topic": "Cramer", "prompt": "Cramér-Wold: multivariate CLT via ___ combinations", "answer": ["linear"], "display": "linear" },
    { "id": 15, "topic": "Tightness", "prompt": "Tight family: probability concentrates on ___ sets", "answer": ["compact"], "display": "compact" },
    { "id": 16, "topic": "Prokhorov", "prompt": "Prokhorov: tight ⟹ relatively ___", "answer": ["compact"], "display": "compact" },
    { "id": 17, "topic": "Ergodic", "prompt": "Ergodic theorem: time average → space ___", "answer": ["average"], "display": "average" },
    { "id": 18, "topic": "Glivenko", "prompt": "Glivenko-Cantelli: empirical CDF → true CDF ___", "answer": ["uniformly"], "display": "uniformly" },
    { "id": 19, "topic": "DKW", "prompt": "Dvoretzky-Kiefer-Wolfowitz: concentration for empirical ___", "answer": ["cdf"], "display": "CDF" },
    { "id": 20, "topic": "Moments", "prompt": "Method of moments: match sample moments to ___ moments", "answer": ["population"], "display": "population" }
  ],
  "day62": [
    { "id": 1, "topic": "Normed", "prompt": "Normed space: ‖x‖ ≥ 0, = 0 iff x = ___", "answer": ["0"], "display": "0" },
    { "id": 2, "topic": "Normed", "prompt": "‖αx‖ = |α| × ‖___‖", "answer": ["x"], "display": "‖x‖" },
    { "id": 3, "topic": "Normed", "prompt": "Triangle: ‖x + y‖ ≤ ‖x‖ + ‖___‖", "answer": ["y"], "display": "‖y‖" },
    { "id": 4, "topic": "Banach", "prompt": "Banach = complete ___ space", "answer": ["normed"], "display": "normed" },
    { "id": 5, "topic": "Hilbert", "prompt": "Hilbert = complete ___ space", "answer": ["inner product"], "display": "inner product" },
    { "id": 6, "topic": "Inner", "prompt": "⟨x,y⟩ induces norm ‖x‖ = √⟨x,___⟩", "answer": ["x"], "display": "x" },
    { "id": 7, "topic": "Orthogonal", "prompt": "x ⊥ y iff ⟨x,y⟩ = ___", "answer": ["0"], "display": "0" },
    { "id": 8, "topic": "Projection", "prompt": "Projection onto closed subspace M: P² = ___", "answer": ["p"], "display": "P" },
    { "id": 9, "topic": "Riesz", "prompt": "Riesz representation: bounded linear functional = ⟨·, y⟩ for some ___", "answer": ["y"], "display": "y" },
    { "id": 10, "topic": "Dual", "prompt": "Dual space X*: bounded linear ___ on X", "answer": ["functionals"], "display": "functionals" },
    { "id": 11, "topic": "Bounded", "prompt": "T bounded: ‖Tx‖ ≤ M‖___‖", "answer": ["x"], "display": "x" },
    { "id": 12, "topic": "Operator", "prompt": "Operator norm: ‖T‖ = sup{‖Tx‖ : ‖x‖ ≤ ___}", "answer": ["1"], "display": "1" },
    { "id": 13, "topic": "BLT", "prompt": "Bounded linear = ___", "answer": ["continuous"], "display": "continuous" },
    { "id": 14, "topic": "OpenMapping", "prompt": "Open mapping: surjective bounded T maps open to ___", "answer": ["open"], "display": "open" },
    { "id": 15, "topic": "ClosedGraph", "prompt": "Closed graph: graph of T is closed ⟹ T is ___", "answer": ["bounded"], "display": "bounded" },
    { "id": 16, "topic": "UBP", "prompt": "Uniform boundedness: pointwise bounded ⟹ ___ bounded", "answer": ["uniformly"], "display": "uniformly" },
    { "id": 17, "topic": "HahnBanach", "prompt": "Hahn-Banach: extend bounded linear ___ from subspace", "answer": ["functional"], "display": "functional" },
    { "id": 18, "topic": "Adjoint", "prompt": "⟨Tx, y⟩ = ⟨x, T*___⟩", "answer": ["y"], "display": "T*y" },
    { "id": 19, "topic": "SelfAdjoint", "prompt": "Self-adjoint: T* = ___", "answer": ["t"], "display": "T" },
    { "id": 20, "topic": "Compact", "prompt": "Compact operator: maps bounded to relatively ___", "answer": ["compact"], "display": "compact" }
  ],
  "day63": [
    { "id": 1, "topic": "Complex", "prompt": "z = x + iy, z̄ = x - ___", "answer": ["iy"], "display": "iy" },
    { "id": 2, "topic": "Modulus", "prompt": "|z| = √(x² + ___)", "answer": ["y²"], "display": "y²" },
    { "id": 3, "topic": "Argument", "prompt": "arg(z) = angle from positive ___ axis", "answer": ["real", "x"], "display": "real" },
    { "id": 4, "topic": "Euler", "prompt": "e^(iθ) = cos(θ) + i sin(___)", "answer": ["θ", "theta"], "display": "θ" },
    { "id": 5, "topic": "Holomorphic", "prompt": "Holomorphic = complex ___", "answer": ["differentiable"], "display": "differentiable" },
    { "id": 6, "topic": "CauchyRiemann", "prompt": "Cauchy-Riemann: ∂u/∂x = ∂v/∂y, ∂u/∂y = -∂v/∂___", "answer": ["x"], "display": "x" },
    { "id": 7, "topic": "Analytic", "prompt": "Analytic = holomorphic with convergent ___ series", "answer": ["power"], "display": "power" },
    { "id": 8, "topic": "CauchyIntegral", "prompt": "Cauchy integral formula: f(a) = (1/2πi) ∮ f(z)/(z-a) ___", "answer": ["dz"], "display": "dz" },
    { "id": 9, "topic": "Cauchy", "prompt": "Cauchy theorem: ∮_C f(z)dz = ___ for holomorphic f", "answer": ["0"], "display": "0" },
    { "id": 10, "topic": "Liouville", "prompt": "Liouville: bounded entire function is ___", "answer": ["constant"], "display": "constant" },
    { "id": 11, "topic": "FTA", "prompt": "Fundamental theorem of algebra: poly has ___ in ℂ", "answer": ["roots"], "display": "roots" },
    { "id": 12, "topic": "Laurent", "prompt": "Laurent series: includes ___ powers of (z-a)", "answer": ["negative"], "display": "negative" },
    { "id": 13, "topic": "Residue", "prompt": "Residue = coefficient of (z-a)^___ in Laurent", "answer": ["-1"], "display": "-1" },
    { "id": 14, "topic": "ResidueThm", "prompt": "∮f dz = 2πi Σ ___", "answer": ["residues"], "display": "residues" },
    { "id": 15, "topic": "Pole", "prompt": "Pole of order n: (z-a)^n f(z) is ___", "answer": ["holomorphic"], "display": "holomorphic" },
    { "id": 16, "topic": "Essential", "prompt": "Essential singularity: neither removable nor ___", "answer": ["pole"], "display": "pole" },
    { "id": 17, "topic": "Picard", "prompt": "Picard: near essential, f takes all values (except maybe ___)", "answer": ["one", "1"], "display": "one" },
    { "id": 18, "topic": "Maximum", "prompt": "Maximum modulus: |f| max on ___ of domain", "answer": ["boundary"], "display": "boundary" },
    { "id": 19, "topic": "Conformal", "prompt": "Holomorphic with f' ≠ 0 is ___ (angle-preserving)", "answer": ["conformal"], "display": "conformal" },
    { "id": 20, "topic": "Riemann", "prompt": "Riemann mapping: any simply connected ≠ ℂ maps to ___", "answer": ["disk"], "display": "disk" }
  ],
  "day64": [
    { "id": 1, "topic": "Proposition", "prompt": "Propositional logic: T/F ___", "answer": ["statements"], "display": "statements" },
    { "id": 2, "topic": "Connectives", "prompt": "∧ = and, ∨ = or, ¬ = ___", "answer": ["not"], "display": "not" },
    { "id": 3, "topic": "Implies", "prompt": "p → q false only when p true and q ___", "answer": ["false"], "display": "false" },
    { "id": 4, "topic": "Tautology", "prompt": "Tautology: always ___", "answer": ["true"], "display": "true" },
    { "id": 5, "topic": "Contradiction", "prompt": "Contradiction: always ___", "answer": ["false"], "display": "false" },
    { "id": 6, "topic": "CNF", "prompt": "CNF = conjunction of ___", "answer": ["clauses"], "display": "clauses" },
    { "id": 7, "topic": "DNF", "prompt": "DNF = disjunction of ___", "answer": ["terms"], "display": "terms" },
    { "id": 8, "topic": "SAT", "prompt": "SAT: is formula ___?", "answer": ["satisfiable"], "display": "satisfiable" },
    { "id": 9, "topic": "Predicate", "prompt": "First-order logic: predicates, quantifiers ∀ and ___", "answer": ["∃", "exists"], "display": "∃" },
    { "id": 10, "topic": "Interpretation", "prompt": "Interpretation: domain + ___ for symbols", "answer": ["meaning"], "display": "meaning" },
    { "id": 11, "topic": "Model", "prompt": "Model: interpretation where formula is ___", "answer": ["true"], "display": "true" },
    { "id": 12, "topic": "Valid", "prompt": "Valid formula: true in all ___", "answer": ["models"], "display": "models" },
    { "id": 13, "topic": "Soundness", "prompt": "Soundness: provable ⟹ ___", "answer": ["valid"], "display": "valid" },
    { "id": 14, "topic": "Completeness", "prompt": "Completeness (Gödel): valid ⟹ ___", "answer": ["provable"], "display": "provable" },
    { "id": 15, "topic": "Incompleteness", "prompt": "Gödel 1: consistent system cannot prove its own ___", "answer": ["consistency"], "display": "consistency" },
    { "id": 16, "topic": "Incompleteness", "prompt": "Gödel 2: true but ___ statement exists", "answer": ["unprovable"], "display": "unprovable" },
    { "id": 17, "topic": "Decidable", "prompt": "Decidable: algorithm to determine ___ of any input", "answer": ["membership"], "display": "membership" },
    { "id": 18, "topic": "Halting", "prompt": "Halting problem is ___", "answer": ["undecidable"], "display": "undecidable" },
    { "id": 19, "topic": "Church", "prompt": "Church-Turing: computable = ___ computable", "answer": ["turing"], "display": "Turing" },
    { "id": 20, "topic": "Computability", "prompt": "Computable function: computed by some ___", "answer": ["algorithm", "turing machine"], "display": "algorithm" }
  ],
  "day65": [
    { "id": 1, "topic": "Set", "prompt": "ZFC: Zermelo-Fraenkel with ___", "answer": ["choice"], "display": "Choice" },
    { "id": 2, "topic": "Extensionality", "prompt": "Extensionality: sets with same ___ are equal", "answer": ["elements"], "display": "elements" },
    { "id": 3, "topic": "PowerSet", "prompt": "Power set P(A) = set of all ___", "answer": ["subsets"], "display": "subsets" },
    { "id": 4, "topic": "Cardinality", "prompt": "|A| = |B| iff bijection between A and ___", "answer": ["b"], "display": "B" },
    { "id": 5, "topic": "Countable", "prompt": "Countable: |A| ≤ |___| (integers)", "answer": ["ℕ", "N"], "display": "ℕ" },
    { "id": 6, "topic": "Uncountable", "prompt": "Cantor: ℝ is ___", "answer": ["uncountable"], "display": "uncountable" },
    { "id": 7, "topic": "Cantor", "prompt": "Cantor: |A| < |P(___ )|", "answer": ["a"], "display": "A" },
    { "id": 8, "topic": "Continuum", "prompt": "Continuum hypothesis: no set between ℕ and ___", "answer": ["ℝ", "R"], "display": "ℝ" },
    { "id": 9, "topic": "Ordinal", "prompt": "Ordinal: well-ordered ___ type", "answer": ["order"], "display": "order" },
    { "id": 10, "topic": "Cardinal", "prompt": "Cardinal: size of ___", "answer": ["set"], "display": "set" },
    { "id": 11, "topic": "Transfinite", "prompt": "ω = first infinite ___", "answer": ["ordinal"], "display": "ordinal" },
    { "id": 12, "topic": "Aleph", "prompt": "ℵ₀ = cardinality of ___", "answer": ["ℕ", "N"], "display": "ℕ" },
    { "id": 13, "topic": "Choice", "prompt": "Axiom of choice: every collection has ___ function", "answer": ["choice"], "display": "choice" },
    { "id": 14, "topic": "Zorn", "prompt": "Zorn's lemma: every chain has upper bound ⟹ has ___", "answer": ["maximal"], "display": "maximal" },
    { "id": 15, "topic": "WellOrdering", "prompt": "Well-ordering: every set can be ___", "answer": ["well-ordered"], "display": "well-ordered" },
    { "id": 16, "topic": "Induction", "prompt": "Transfinite induction: prove for ordinals using ___", "answer": ["predecessor"], "display": "predecessor" },
    { "id": 17, "topic": "Foundation", "prompt": "Foundation: no infinite ___ chains ∈", "answer": ["descending"], "display": "descending" },
    { "id": 18, "topic": "Russell", "prompt": "Russell's paradox: set of sets not containing ___", "answer": ["themselves"], "display": "themselves" },
    { "id": 19, "topic": "Type", "prompt": "Type theory: alternative to set theory with ___", "answer": ["types"], "display": "types" },
    { "id": 20, "topic": "Model", "prompt": "Model theory: structure satisfying ___", "answer": ["axioms"], "display": "axioms" }
  ],
  "day66": [
    { "id": 1, "topic": "TM", "prompt": "Turing machine: tape, head, states, ___", "answer": ["transitions"], "display": "transitions" },
    { "id": 2, "topic": "Regular", "prompt": "Regular language: recognized by ___", "answer": ["dfa", "finite automaton"], "display": "DFA" },
    { "id": 3, "topic": "CFL", "prompt": "Context-free: generated by ___ grammar", "answer": ["context-free", "cfg"], "display": "CFG" },
    { "id": 4, "topic": "PDA", "prompt": "PDA = DFA + ___", "answer": ["stack"], "display": "stack" },
    { "id": 5, "topic": "Pumping", "prompt": "Pumping lemma: proves language is ___ regular", "answer": ["not"], "display": "not" },
    { "id": 6, "topic": "Decidable", "prompt": "Decidable: TM always ___ (halts with answer)", "answer": ["halts"], "display": "halts" },
    { "id": 7, "topic": "Recognizable", "prompt": "Recognizable: TM halts accepting on valid ___", "answer": ["input"], "display": "input" },
    { "id": 8, "topic": "Halting", "prompt": "Halting problem: is M on w ___?", "answer": ["halting"], "display": "halting" },
    { "id": 9, "topic": "Rice", "prompt": "Rice: nontrivial property of TM language is ___", "answer": ["undecidable"], "display": "undecidable" },
    { "id": 10, "topic": "Reduction", "prompt": "A reduces to B: solve A using ___ for B", "answer": ["solver", "oracle"], "display": "oracle" },
    { "id": 11, "topic": "P", "prompt": "P: polynomial time on ___ TM", "answer": ["deterministic"], "display": "deterministic" },
    { "id": 12, "topic": "NP", "prompt": "NP: polynomial time on ___ TM", "answer": ["nondeterministic"], "display": "nondeterministic" },
    { "id": 13, "topic": "PSPACE", "prompt": "PSPACE: polynomial ___", "answer": ["space"], "display": "space" },
    { "id": 14, "topic": "EXPTIME", "prompt": "EXPTIME: 2^poly(n) ___", "answer": ["time"], "display": "time" },
    { "id": 15, "topic": "Hierarchy", "prompt": "P ⊆ NP ⊆ PSPACE ⊆ ___", "answer": ["exptime"], "display": "EXPTIME" },
    { "id": 16, "topic": "Hardest", "prompt": "NP-complete: hardest in ___", "answer": ["np"], "display": "NP" },
    { "id": 17, "topic": "Oracle", "prompt": "Oracle TM: can query ___ in one step", "answer": ["oracle"], "display": "oracle" },
    { "id": 18, "topic": "BPP", "prompt": "BPP: bounded-error ___ polynomial time", "answer": ["probabilistic"], "display": "probabilistic" },
    { "id": 19, "topic": "Interactive", "prompt": "IP = PSPACE: interactive ___ power", "answer": ["proof"], "display": "proof" },
    { "id": 20, "topic": "Quantum", "prompt": "BQP: bounded-error ___ polynomial time", "answer": ["quantum"], "display": "quantum" }
  ],
  "day67": [
    { "id": 1, "topic": "Lambda", "prompt": "λ-calculus: functions as ___", "answer": ["first-class"], "display": "first-class" },
    { "id": 2, "topic": "Lambda", "prompt": "λx.e means function with parameter ___", "answer": ["x"], "display": "x" },
    { "id": 3, "topic": "BetaReduce", "prompt": "(λx.e)a reduces to e[x := ___]", "answer": ["a"], "display": "a" },
    { "id": 4, "topic": "Curry", "prompt": "Currying: f(x,y) = (f x) ___", "answer": ["y"], "display": "y" },
    { "id": 5, "topic": "ChurchNum", "prompt": "Church numeral n = λf.λx.f^n ___", "answer": ["x"], "display": "x" },
    { "id": 6, "topic": "YCombinator", "prompt": "Y combinator enables ___ in λ-calculus", "answer": ["recursion"], "display": "recursion" },
    { "id": 7, "topic": "Type", "prompt": "Simply typed: λx:T.e where T is ___", "answer": ["type"], "display": "type" },
    { "id": 8, "topic": "Polymorphism", "prompt": "∀α.T: ___ quantification", "answer": ["type"], "display": "type" },
    { "id": 9, "topic": "Hindley", "prompt": "Hindley-Milner: ___ type inference", "answer": ["principal"], "display": "principal" },
    { "id": 10, "topic": "SystemF", "prompt": "System F: polymorphic ___-calculus", "answer": ["λ", "lambda"], "display": "λ" },
    { "id": 11, "topic": "CoC", "prompt": "CoC: Calculus of ___", "answer": ["constructions"], "display": "Constructions" },
    { "id": 12, "topic": "Dependent", "prompt": "Dependent types: types depend on ___", "answer": ["values"], "display": "values" },
    { "id": 13, "topic": "Curry", "prompt": "Curry-Howard: proofs ↔ ___", "answer": ["programs"], "display": "programs" },
    { "id": 14, "topic": "Category", "prompt": "Category: objects + ___ + composition", "answer": ["morphisms"], "display": "morphisms" },
    { "id": 15, "topic": "Functor", "prompt": "Functor: maps objects and morphisms between ___", "answer": ["categories"], "display": "categories" },
    { "id": 16, "topic": "Monad", "prompt": "Monad: unit + bind for ___ effects", "answer": ["sequencing"], "display": "sequencing" },
    { "id": 17, "topic": "Applicative", "prompt": "Applicative: pure + <*> (apply in ___)", "answer": ["context"], "display": "context" },
    { "id": 18, "topic": "Natural", "prompt": "Natural transformation: morphism between ___", "answer": ["functors"], "display": "functors" },
    { "id": 19, "topic": "Yoneda", "prompt": "Yoneda: Hom(A,-) ≅ ___", "answer": ["functor"], "display": "functor" },
    { "id": 20, "topic": "Adjunction", "prompt": "Adjunction: F ⊣ G: Hom(FA,B) ≅ Hom(A,___)", "answer": ["gb"], "display": "GB" }
  ],
  "day68": [
    { "id": 1, "topic": "OneWay", "prompt": "One-way function: easy to compute, hard to ___", "answer": ["invert"], "display": "invert" },
    { "id": 2, "topic": "Trapdoor", "prompt": "Trapdoor: one-way with ___ for inversion", "answer": ["secret"], "display": "secret" },
    { "id": 3, "topic": "Hash", "prompt": "Cryptographic hash: collision-___, preimage-resistant", "answer": ["resistant"], "display": "resistant" },
    { "id": 4, "topic": "SHA", "prompt": "SHA-256 outputs ___ bits", "answer": ["256"], "display": "256" },
    { "id": 5, "topic": "Symmetric", "prompt": "Symmetric encryption: same key for encrypt and ___", "answer": ["decrypt"], "display": "decrypt" },
    { "id": 6, "topic": "AES", "prompt": "AES: Advanced Encryption ___", "answer": ["standard"], "display": "Standard" },
    { "id": 7, "topic": "Asymmetric", "prompt": "Asymmetric: public key encrypts, ___ key decrypts", "answer": ["private"], "display": "private" },
    { "id": 8, "topic": "RSA", "prompt": "RSA: based on difficulty of ___", "answer": ["factoring"], "display": "factoring" },
    { "id": 9, "topic": "DH", "prompt": "Diffie-Hellman: key exchange using discrete ___", "answer": ["log"], "display": "log" },
    { "id": 10, "topic": "ECC", "prompt": "ECC: elliptic curve ___", "answer": ["cryptography"], "display": "cryptography" },
    { "id": 11, "topic": "Signature", "prompt": "Digital signature: authenticity + ___", "answer": ["integrity"], "display": "integrity" },
    { "id": 12, "topic": "MAC", "prompt": "MAC = message authentication ___", "answer": ["code"], "display": "code" },
    { "id": 13, "topic": "ZeroKnowledge", "prompt": "Zero-knowledge: prove without revealing ___", "answer": ["secret"], "display": "secret" },
    { "id": 14, "topic": "MPC", "prompt": "MPC: multiparty ___ computation", "answer": ["secure"], "display": "secure" },
    { "id": 15, "topic": "Homomorphic", "prompt": "Homomorphic: compute on ___ data", "answer": ["encrypted"], "display": "encrypted" },
    { "id": 16, "topic": "OTP", "prompt": "One-time pad: perfect ___ if key is random", "answer": ["secrecy"], "display": "secrecy" },
    { "id": 17, "topic": "PFS", "prompt": "Perfect forward secrecy: past sessions stay ___", "answer": ["secure"], "display": "secure" },
    { "id": 18, "topic": "Blockchain", "prompt": "Blockchain: chain of ___ blocks", "answer": ["hashed"], "display": "hashed" },
    { "id": 19, "topic": "PoW", "prompt": "Proof of work: find nonce where hash < ___", "answer": ["target"], "display": "target" },
    { "id": 20, "topic": "PostQuantum", "prompt": "Post-quantum: secure against ___ computers", "answer": ["quantum"], "display": "quantum" }
  ],
  "day69": [
    { "id": 1, "topic": "InfoTheory", "prompt": "Information = -log₂ P, measured in ___", "answer": ["bits"], "display": "bits" },
    { "id": 2, "topic": "Entropy", "prompt": "Entropy H(X) = -Σ p log ___", "answer": ["p"], "display": "p" },
    { "id": 3, "topic": "Joint", "prompt": "Joint entropy H(X,Y) ≥ max(H(X), H(___))", "answer": ["y"], "display": "Y" },
    { "id": 4, "topic": "Conditional", "prompt": "H(Y|X) = H(X,Y) - H(___)", "answer": ["x"], "display": "X" },
    { "id": 5, "topic": "Mutual", "prompt": "I(X;Y) = H(X) + H(Y) - H(X,___)", "answer": ["y"], "display": "Y" },
    { "id": 6, "topic": "Mutual", "prompt": "I(X;Y) = H(X) - H(X|___)", "answer": ["y"], "display": "Y" },
    { "id": 7, "topic": "Channel", "prompt": "Channel capacity C = max I(X;___)", "answer": ["y"], "display": "Y" },
    { "id": 8, "topic": "Shannon", "prompt": "Shannon: can transmit at rate < C with ___ error", "answer": ["zero"], "display": "zero" },
    { "id": 9, "topic": "Source", "prompt": "Source coding: compress to H(X) bits on ___", "answer": ["average"], "display": "average" },
    { "id": 10, "topic": "Huffman", "prompt": "Huffman: optimal ___ code", "answer": ["prefix"], "display": "prefix" },
    { "id": 11, "topic": "Kraft", "prompt": "Kraft inequality: Σ 2^(-lᵢ) ≤ ___", "answer": ["1"], "display": "1" },
    { "id": 12, "topic": "AEP", "prompt": "AEP: typical set has probability ≈ ___", "answer": ["1"], "display": "1" },
    { "id": 13, "topic": "KL", "prompt": "KL divergence D(P||Q) = Σ p log(p/___)", "answer": ["q"], "display": "q" },
    { "id": 14, "topic": "KL", "prompt": "D(P||Q) ≥ ___, = 0 iff P = Q", "answer": ["0"], "display": "0" },
    { "id": 15, "topic": "CrossEntropy", "prompt": "Cross-entropy = H(P) + D(P||___)", "answer": ["q"], "display": "Q" },
    { "id": 16, "topic": "Rate", "prompt": "Rate-distortion: minimum rate for distortion ≤ ___", "answer": ["d"], "display": "D" },
    { "id": 17, "topic": "BSC", "prompt": "BSC: binary ___ channel", "answer": ["symmetric"], "display": "symmetric" },
    { "id": 18, "topic": "Capacity", "prompt": "BSC capacity = 1 - H(___)", "answer": ["p"], "display": "H(p)" },
    { "id": 19, "topic": "AWGN", "prompt": "AWGN capacity = (1/2)log(1 + ___)", "answer": ["snr"], "display": "SNR" },
    { "id": 20, "topic": "Fano", "prompt": "Fano: H(X|Y) ≤ 1 + P_e log(|X| - ___)", "answer": ["1"], "display": "1" }
  ],
  "day70": [
    { "id": 1, "topic": "ErrorCorrect", "prompt": "Error-correcting code: detect and ___ errors", "answer": ["correct"], "display": "correct" },
    { "id": 2, "topic": "Hamming", "prompt": "Hamming distance: number of differing ___", "answer": ["bits"], "display": "bits" },
    { "id": 3, "topic": "Hamming", "prompt": "Hamming code: corrects ___ error", "answer": ["1", "one"], "display": "1" },
    { "id": 4, "topic": "Linear", "prompt": "Linear code: codewords form ___ space", "answer": ["vector"], "display": "vector" },
    { "id": 5, "topic": "Generator", "prompt": "Generator matrix G: c = m × ___", "answer": ["g"], "display": "G" },
    { "id": 6, "topic": "Parity", "prompt": "Parity check H: H × c^T = ___", "answer": ["0"], "display": "0" },
    { "id": 7, "topic": "Syndrome", "prompt": "Syndrome s = H × r^T reveals ___", "answer": ["error"], "display": "error" },
    { "id": 8, "topic": "BCH", "prompt": "BCH codes: correct ___ errors", "answer": ["multiple"], "display": "multiple" },
    { "id": 9, "topic": "ReedSolomon", "prompt": "Reed-Solomon: used in CDs, ___", "answer": ["qr codes"], "display": "QR codes" },
    { "id": 10, "topic": "Rate", "prompt": "Code rate R = k/n where k = message, n = ___", "answer": ["codeword"], "display": "codeword" },
    { "id": 11, "topic": "ShortestDistance", "prompt": "Minimum distance d: detect d-1, correct ⌊(d-1)/___⌋", "answer": ["2"], "display": "2" },
    { "id": 12, "topic": "Singleton", "prompt": "Singleton bound: d ≤ n - k + ___", "answer": ["1"], "display": "1" },
    { "id": 13, "topic": "MDS", "prompt": "MDS code: meets ___ bound", "answer": ["singleton"], "display": "Singleton" },
    { "id": 14, "topic": "Turbo", "prompt": "Turbo codes: near-Shannon-limit ___", "answer": ["performance"], "display": "performance" },
    { "id": 15, "topic": "LDPC", "prompt": "LDPC: low-___ parity-check", "answer": ["density"], "display": "density" },
    { "id": 16, "topic": "Polar", "prompt": "Polar codes: provably achieve channel ___", "answer": ["capacity"], "display": "capacity" },
    { "id": 17, "topic": "Convolutional", "prompt": "Convolutional codes: encoder has ___", "answer": ["memory"], "display": "memory" },
    { "id": 18, "topic": "Viterbi", "prompt": "Viterbi decodes convolutional via ___ programming", "answer": ["dynamic"], "display": "dynamic" },
    { "id": 19, "topic": "Interleaving", "prompt": "Interleaving spreads ___ errors", "answer": ["burst"], "display": "burst" },
    { "id": 20, "topic": "ARQ", "prompt": "ARQ: automatic ___ request", "answer": ["repeat"], "display": "repeat" }
  ],
  "day71": [
    { "id": 1, "topic": "Optimization", "prompt": "min f(x) s.t. g(x) ≤ 0, h(x) = ___", "answer": ["0"], "display": "0" },
    { "id": 2, "topic": "Convex", "prompt": "f convex: f(λx + (1-λ)y) ≤ λf(x) + (1-λ)f(___)", "answer": ["y"], "display": "y" },
    { "id": 3, "topic": "Convex", "prompt": "Local minimum of convex = ___", "answer": ["global"], "display": "global" },
    { "id": 4, "topic": "LP", "prompt": "LP: linear objective + linear ___", "answer": ["constraints"], "display": "constraints" },
    { "id": 5, "topic": "Simplex", "prompt": "Simplex: walk along ___ of polytope", "answer": ["vertices"], "display": "vertices" },
    { "id": 6, "topic": "Duality", "prompt": "Weak duality: primal ≥ ___ (for min)", "answer": ["dual"], "display": "dual" },
    { "id": 7, "topic": "StrongDuality", "prompt": "Strong duality: primal = dual under ___ conditions", "answer": ["slater"], "display": "Slater" },
    { "id": 8, "topic": "KKT", "prompt": "KKT: ∇L = 0, complementary ___, feasibility", "answer": ["slackness"], "display": "slackness" },
    { "id": 9, "topic": "Lagrangian", "prompt": "L(x,λ) = f(x) + λᵀg(___)", "answer": ["x"], "display": "x" },
    { "id": 10, "topic": "Gradient", "prompt": "Gradient descent: x ← x - α∇f(___)", "answer": ["x"], "display": "x" },
    { "id": 11, "topic": "Convergence", "prompt": "GD converges for ___ and L-smooth f", "answer": ["convex"], "display": "convex" },
    { "id": 12, "topic": "Momentum", "prompt": "Momentum: accelerates using past ___", "answer": ["gradients"], "display": "gradients" },
    { "id": 13, "topic": "Newton", "prompt": "Newton: x ← x - (∇²f)⁻¹ ∇f uses ___", "answer": ["hessian"], "display": "Hessian" },
    { "id": 14, "topic": "QuasiNewton", "prompt": "BFGS: approximates ___ without computing it", "answer": ["hessian"], "display": "Hessian" },
    { "id": 15, "topic": "SGD", "prompt": "SGD: stochastic ___ descent", "answer": ["gradient"], "display": "gradient" },
    { "id": 16, "topic": "Adam", "prompt": "Adam combines momentum and ___ scaling", "answer": ["adaptive"], "display": "adaptive" },
    { "id": 17, "topic": "Constrained", "prompt": "Projected GD: project back onto ___ set", "answer": ["feasible"], "display": "feasible" },
    { "id": 18, "topic": "Interior", "prompt": "Interior point: stay inside ___ during optimization", "answer": ["feasible"], "display": "feasible" },
    { "id": 19, "topic": "SDP", "prompt": "SDP: semidefinite ___", "answer": ["programming"], "display": "programming" },
    { "id": 20, "topic": "SOCP", "prompt": "SOCP: second-order ___ programming", "answer": ["cone"], "display": "cone" }
  ],
  "day72": [
    { "id": 1, "topic": "Supervised", "prompt": "Supervised: learn f: X → Y from ___ data", "answer": ["labeled"], "display": "labeled" },
    { "id": 2, "topic": "Unsupervised", "prompt": "Unsupervised: find structure without ___", "answer": ["labels"], "display": "labels" },
    { "id": 3, "topic": "Regression", "prompt": "Regression: predict ___ output", "answer": ["continuous"], "display": "continuous" },
    { "id": 4, "topic": "Classification", "prompt": "Classification: predict ___ label", "answer": ["discrete", "categorical"], "display": "discrete" },
    { "id": 5, "topic": "Loss", "prompt": "Loss function measures prediction ___", "answer": ["error"], "display": "error" },
    { "id": 6, "topic": "MSE", "prompt": "MSE = (1/n) Σ(y - ŷ)^___", "answer": ["2"], "display": "2" },
    { "id": 7, "topic": "CrossEntropy", "prompt": "Cross-entropy loss for ___", "answer": ["classification"], "display": "classification" },
    { "id": 8, "topic": "Bias", "prompt": "Bias-variance: error = bias² + variance + ___", "answer": ["noise"], "display": "noise" },
    { "id": 9, "topic": "Overfit", "prompt": "Overfitting: low train error, high ___ error", "answer": ["test"], "display": "test" },
    { "id": 10, "topic": "Regularization", "prompt": "Regularization: add penalty ___‖w‖²", "answer": ["λ", "lambda"], "display": "λ" },
    { "id": 11, "topic": "L1", "prompt": "L1 (Lasso) promotes ___", "answer": ["sparsity"], "display": "sparsity" },
    { "id": 12, "topic": "L2", "prompt": "L2 (Ridge) prevents large ___", "answer": ["weights"], "display": "weights" },
    { "id": 13, "topic": "CV", "prompt": "Cross-validation: estimate ___ error", "answer": ["generalization"], "display": "generalization" },
    { "id": 14, "topic": "kNN", "prompt": "k-NN: classify by ___ nearest neighbors", "answer": ["k"], "display": "k" },
    { "id": 15, "topic": "LinearReg", "prompt": "Linear regression: ŷ = w^T x + ___", "answer": ["b"], "display": "b" },
    { "id": 16, "topic": "LogisticReg", "prompt": "Logistic regression: σ(w^T x) where σ = ___", "answer": ["sigmoid"], "display": "sigmoid" },
    { "id": 17, "topic": "SVM", "prompt": "SVM maximizes ___ between classes", "answer": ["margin"], "display": "margin" },
    { "id": 18, "topic": "Kernel", "prompt": "Kernel trick: implicit ___ mapping", "answer": ["feature"], "display": "feature" },
    { "id": 19, "topic": "DecisionTree", "prompt": "Decision tree splits on ___ to reduce impurity", "answer": ["features"], "display": "features" },
    { "id": 20, "topic": "Ensemble", "prompt": "Random forest: ensemble of ___", "answer": ["trees"], "display": "trees" }
  ],
  "day73": [
    { "id": 1, "topic": "Perceptron", "prompt": "Perceptron: linear classifier with step ___", "answer": ["activation", "function"], "display": "activation" },
    { "id": 2, "topic": "MLP", "prompt": "MLP: multi-layer ___", "answer": ["perceptron"], "display": "perceptron" },
    { "id": 3, "topic": "Activation", "prompt": "ReLU = max(0, ___)", "answer": ["x"], "display": "x" },
    { "id": 4, "topic": "Activation", "prompt": "Sigmoid squashes to [0, ___]", "answer": ["1"], "display": "1" },
    { "id": 5, "topic": "Softmax", "prompt": "Softmax outputs sum to ___", "answer": ["1"], "display": "1" },
    { "id": 6, "topic": "Backprop", "prompt": "Backpropagation: compute gradients via ___ rule", "answer": ["chain"], "display": "chain" },
    { "id": 7, "topic": "Forward", "prompt": "Forward pass computes ___, backward pass computes gradients", "answer": ["output"], "display": "output" },
    { "id": 8, "topic": "Vanishing", "prompt": "Vanishing gradient: ∂L/∂w → ___ in deep nets", "answer": ["0", "zero"], "display": "0" },
    { "id": 9, "topic": "Exploding", "prompt": "Exploding gradient: ∂L/∂w → ___", "answer": ["∞", "infinity"], "display": "∞" },
    { "id": 10, "topic": "BatchNorm", "prompt": "Batch normalization: normalize ___ per layer", "answer": ["activations"], "display": "activations" },
    { "id": 11, "topic": "Dropout", "prompt": "Dropout: randomly set neurons to ___ during training", "answer": ["0", "zero"], "display": "0" },
    { "id": 12, "topic": "ResNet", "prompt": "ResNet: skip ___ connections", "answer": ["residual"], "display": "residual" },
    { "id": 13, "topic": "Initialization", "prompt": "Xavier: variance = 1/(___) for Gaussian init", "answer": ["n", "fan_in"], "display": "n" },
    { "id": 14, "topic": "LR", "prompt": "Learning rate schedule: decay α over ___", "answer": ["time", "epochs"], "display": "time" },
    { "id": 15, "topic": "EarlyStopping", "prompt": "Early stopping: stop when ___ error increases", "answer": ["validation"], "display": "validation" },
    { "id": 16, "topic": "Universal", "prompt": "Universal approximation: 1 hidden layer can approximate any ___", "answer": ["function"], "display": "function" },
    { "id": 17, "topic": "Autograd", "prompt": "Autograd: automatic ___", "answer": ["differentiation"], "display": "differentiation" },
    { "id": 18, "topic": "GPU", "prompt": "GPU acceleration: matrix ops are ___", "answer": ["parallel"], "display": "parallel" },
    { "id": 19, "topic": "Minibatch", "prompt": "Mini-batch: subset of data per ___ step", "answer": ["gradient"], "display": "gradient" },
    { "id": 20, "topic": "Epoch", "prompt": "Epoch = one pass through entire ___", "answer": ["dataset"], "display": "dataset" }
  ],
  "day74": [
    { "id": 1, "topic": "CNN", "prompt": "CNN: convolutional neural ___", "answer": ["network"], "display": "network" },
    { "id": 2, "topic": "Convolution", "prompt": "Convolution: slide ___ over input", "answer": ["kernel", "filter"], "display": "kernel" },
    { "id": 3, "topic": "Pooling", "prompt": "Max pooling takes ___ in window", "answer": ["maximum"], "display": "maximum" },
    { "id": 4, "topic": "Stride", "prompt": "Stride: step size of ___ sliding", "answer": ["kernel", "filter"], "display": "kernel" },
    { "id": 5, "topic": "Padding", "prompt": "Padding: add zeros to preserve ___", "answer": ["size"], "display": "size" },
    { "id": 6, "topic": "Channel", "prompt": "RGB image has ___ channels", "answer": ["3"], "display": "3" },
    { "id": 7, "topic": "Feature", "prompt": "CNN learns hierarchical ___", "answer": ["features"], "display": "features" },
    { "id": 8, "topic": "RNN", "prompt": "RNN: recurrent for ___ data", "answer": ["sequence"], "display": "sequence" },
    { "id": 9, "topic": "Hidden", "prompt": "RNN hidden state: hₜ = f(hₜ₋₁, ___)", "answer": ["xₜ", "xt"], "display": "xₜ" },
    { "id": 10, "topic": "LSTM", "prompt": "LSTM: long short-term ___", "answer": ["memory"], "display": "memory" },
    { "id": 11, "topic": "Gates", "prompt": "LSTM gates: forget, input, ___", "answer": ["output"], "display": "output" },
    { "id": 12, "topic": "GRU", "prompt": "GRU: gated ___ unit (simpler than LSTM)", "answer": ["recurrent"], "display": "recurrent" },
    { "id": 13, "topic": "Attention", "prompt": "Attention: weighted sum over ___", "answer": ["inputs"], "display": "inputs" },
    { "id": 14, "topic": "SelfAttention", "prompt": "Self-attention: Q, K, ___ (query, key, value)", "answer": ["v"], "display": "V" },
    { "id": 15, "topic": "Transformer", "prompt": "Transformer: attention without ___", "answer": ["recurrence"], "display": "recurrence" },
    { "id": 16, "topic": "Positional", "prompt": "Positional encoding: add ___ information", "answer": ["position"], "display": "position" },
    { "id": 17, "topic": "BERT", "prompt": "BERT: bidirectional encoder from ___", "answer": ["transformers"], "display": "Transformers" },
    { "id": 18, "topic": "GPT", "prompt": "GPT: generative pre-trained ___", "answer": ["transformer"], "display": "Transformer" },
    { "id": 19, "topic": "Encoder", "prompt": "Encoder-decoder: seq2seq ___", "answer": ["model"], "display": "model" },
    { "id": 20, "topic": "MultiHead", "prompt": "Multi-head attention: parallel ___ heads", "answer": ["attention"], "display": "attention" }
  ],
  "day75": [
    { "id": 1, "topic": "GAN", "prompt": "GAN: generator vs ___", "answer": ["discriminator"], "display": "discriminator" },
    { "id": 2, "topic": "Generator", "prompt": "Generator: noise → ___ data", "answer": ["fake", "synthetic"], "display": "fake" },
    { "id": 3, "topic": "Discriminator", "prompt": "Discriminator: real or ___?", "answer": ["fake"], "display": "fake" },
    { "id": 4, "topic": "Minimax", "prompt": "GAN training: minimax ___", "answer": ["game"], "display": "game" },
    { "id": 5, "topic": "ModeCollapse", "prompt": "Mode collapse: generator produces limited ___", "answer": ["variety"], "display": "variety" },
    { "id": 6, "topic": "VAE", "prompt": "VAE: variational ___", "answer": ["autoencoder"], "display": "autoencoder" },
    { "id": 7, "topic": "Latent", "prompt": "Latent space: compressed ___", "answer": ["representation"], "display": "representation" },
    { "id": 8, "topic": "ELBO", "prompt": "ELBO = evidence lower ___", "answer": ["bound"], "display": "bound" },
    { "id": 9, "topic": "Reparametrization", "prompt": "Reparametrization trick: z = μ + σ × ___", "answer": ["ε", "epsilon"], "display": "ε" },
    { "id": 10, "topic": "Diffusion", "prompt": "Diffusion: gradually add ___ then reverse", "answer": ["noise"], "display": "noise" },
    { "id": 11, "topic": "DDPM", "prompt": "DDPM: denoising diffusion probabilistic ___", "answer": ["model"], "display": "model" },
    { "id": 12, "topic": "ScoreMatching", "prompt": "Score matching: learn ∇_x log p(___)", "answer": ["x"], "display": "x" },
    { "id": 13, "topic": "ContrastiveLearning", "prompt": "Contrastive: pull similar, push ___ apart", "answer": ["dissimilar"], "display": "dissimilar" },
    { "id": 14, "topic": "SSL", "prompt": "Self-supervised: create labels from ___ itself", "answer": ["data"], "display": "data" },
    { "id": 15, "topic": "NeuralODE", "prompt": "Neural ODE: hidden state evolves via ___", "answer": ["ode"], "display": "ODE" },
    { "id": 16, "topic": "FlowModels", "prompt": "Normalizing flows: invertible ___", "answer": ["transformations"], "display": "transformations" },
    { "id": 17, "topic": "EnergyBased", "prompt": "Energy-based: low energy = high ___", "answer": ["probability"], "display": "probability" },
    { "id": 18, "topic": "GraphNN", "prompt": "GNN: neural networks on ___", "answer": ["graphs"], "display": "graphs" },
    { "id": 19, "topic": "MessagePassing", "prompt": "Message passing: aggregate from ___", "answer": ["neighbors"], "display": "neighbors" },
    { "id": 20, "topic": "NeRF", "prompt": "NeRF: neural radiance ___", "answer": ["field"], "display": "field" }
  ],
  "day76": [
    { "id": 1, "topic": "RL", "prompt": "RL: agent learns from ___", "answer": ["rewards"], "display": "rewards" },
    { "id": 2, "topic": "MDP", "prompt": "MDP: states, actions, transitions, ___", "answer": ["rewards"], "display": "rewards" },
    { "id": 3, "topic": "Policy", "prompt": "Policy π(a|s) = P(action ___ | state)", "answer": ["a"], "display": "a" },
    { "id": 4, "topic": "Value", "prompt": "Value V(s) = expected ___ return", "answer": ["cumulative"], "display": "cumulative" },
    { "id": 5, "topic": "Q", "prompt": "Q(s,a) = value of taking action a in state ___", "answer": ["s"], "display": "s" },
    { "id": 6, "topic": "Bellman", "prompt": "Bellman: V(s) = r + γ × V(s')", "answer": ["true"], "display": "True" },
    { "id": 7, "topic": "Discount", "prompt": "Discount γ: future rewards are worth ___", "answer": ["less"], "display": "less" },
    { "id": 8, "topic": "TD", "prompt": "TD learning: update using ___ step estimation", "answer": ["one", "1"], "display": "one-step" },
    { "id": 9, "topic": "QLearning", "prompt": "Q-learning: off-policy TD ___", "answer": ["control"], "display": "control" },
    { "id": 10, "topic": "DQN", "prompt": "DQN: deep ___-network", "answer": ["q"], "display": "Q" },
    { "id": 11, "topic": "PolicyGradient", "prompt": "Policy gradient: ∇J = E[∇log π × ___]", "answer": ["r", "reward"], "display": "R" },
    { "id": 12, "topic": "ActorCritic", "prompt": "Actor-critic: actor = policy, critic = ___", "answer": ["value"], "display": "value" },
    { "id": 13, "topic": "A2C", "prompt": "A2C: advantage ___-critic", "answer": ["actor"], "display": "actor" },
    { "id": 14, "topic": "PPO", "prompt": "PPO: proximal policy ___", "answer": ["optimization"], "display": "optimization" },
    { "id": 15, "topic": "Exploration", "prompt": "Exploration vs ___", "answer": ["exploitation"], "display": "exploitation" },
    { "id": 16, "topic": "EpsilonGreedy", "prompt": "ε-greedy: random with prob ___", "answer": ["ε", "epsilon"], "display": "ε" },
    { "id": 17, "topic": "ModelBased", "prompt": "Model-based RL: learn environment ___", "answer": ["model"], "display": "model" },
    { "id": 18, "topic": "MCTS", "prompt": "MCTS: Monte Carlo tree ___", "answer": ["search"], "display": "search" },
    { "id": 19, "topic": "AlphaGo", "prompt": "AlphaGo: MCTS + deep ___", "answer": ["learning"], "display": "learning" },
    { "id": 20, "topic": "RLHF", "prompt": "RLHF: RL from human ___", "answer": ["feedback"], "display": "feedback" }
  ],
  "day77": [
    { "id": 1, "topic": "PDE", "prompt": "PDE: partial ___ equation", "answer": ["differential"], "display": "differential" },
    { "id": 2, "topic": "Laplace", "prompt": "Laplace: ∇²u = ___", "answer": ["0"], "display": "0" },
    { "id": 3, "topic": "Poisson", "prompt": "Poisson: ∇²u = ___", "answer": ["f"], "display": "f" },
    { "id": 4, "topic": "Heat", "prompt": "Heat: ∂u/∂t = k∇²___", "answer": ["u"], "display": "u" },
    { "id": 5, "topic": "Wave", "prompt": "Wave: ∂²u/∂t² = c²∇²___", "answer": ["u"], "display": "u" },
    { "id": 6, "topic": "Elliptic", "prompt": "Elliptic: Laplace type (steady ___)", "answer": ["state"], "display": "state" },
    { "id": 7, "topic": "Parabolic", "prompt": "Parabolic: heat type (___)", "answer": ["diffusion"], "display": "diffusion" },
    { "id": 8, "topic": "Hyperbolic", "prompt": "Hyperbolic: wave type (___)", "answer": ["propagation"], "display": "propagation" },
    { "id": 9, "topic": "Dirichlet", "prompt": "Dirichlet BC: specify u on ___", "answer": ["boundary"], "display": "boundary" },
    { "id": 10, "topic": "Neumann", "prompt": "Neumann BC: specify ∂u/∂n on ___", "answer": ["boundary"], "display": "boundary" },
    { "id": 11, "topic": "Separation", "prompt": "Separation of variables: u = X(x)T(___)", "answer": ["t"], "display": "T(t)" },
    { "id": 12, "topic": "Fourier", "prompt": "Fourier method: expand in ___ series", "answer": ["fourier"], "display": "Fourier" },
    { "id": 13, "topic": "Green", "prompt": "Green's function G: ∇²G = ___", "answer": ["δ", "delta"], "display": "δ" },
    { "id": 14, "topic": "Characteristic", "prompt": "Characteristics: curves along which PDE is ___", "answer": ["ode"], "display": "ODE" },
    { "id": 15, "topic": "FDM", "prompt": "FDM: finite ___ method", "answer": ["difference"], "display": "difference" },
    { "id": 16, "topic": "FEM", "prompt": "FEM: finite ___ method", "answer": ["element"], "display": "element" },
    { "id": 17, "topic": "Weak", "prompt": "Weak form: multiply by ___ function and integrate", "answer": ["test"], "display": "test" },
    { "id": 18, "topic": "Galerkin", "prompt": "Galerkin: test functions = ___ functions", "answer": ["trial", "basis"], "display": "trial" },
    { "id": 19, "topic": "Stability", "prompt": "CFL condition: stability for ___ schemes", "answer": ["explicit"], "display": "explicit" },
    { "id": 20, "topic": "Conservation", "prompt": "Conservation law: ∂u/∂t + ∇·___ = 0", "answer": ["f", "flux"], "display": "F" }
  ],
  "day78": [
    { "id": 1, "topic": "ODE", "prompt": "ODE: ordinary ___ equation", "answer": ["differential"], "display": "differential" },
    { "id": 2, "topic": "IVP", "prompt": "IVP: initial ___ problem", "answer": ["value"], "display": "value" },
    { "id": 3, "topic": "BVP", "prompt": "BVP: boundary ___ problem", "answer": ["value"], "display": "value" },
    { "id": 4, "topic": "Linear", "prompt": "Linear ODE: y'' + p(x)y' + q(x)y = ___", "answer": ["r(x)", "f(x)"], "display": "r(x)" },
    { "id": 5, "topic": "Euler", "prompt": "Euler method: y_{n+1} = y_n + h×f(x_n, ___)", "answer": ["yₙ", "yn"], "display": "yₙ" },
    { "id": 6, "topic": "RK4", "prompt": "RK4: Runge-Kutta order ___", "answer": ["4"], "display": "4" },
    { "id": 7, "topic": "Order", "prompt": "Method order p: error is O(h^___)", "answer": ["p"], "display": "p" },
    { "id": 8, "topic": "Stiff", "prompt": "Stiff ODE: needs ___ methods", "answer": ["implicit"], "display": "implicit" },
    { "id": 9, "topic": "Adaptive", "prompt": "Adaptive: adjust ___ based on error", "answer": ["stepsize"], "display": "stepsize" },
    { "id": 10, "topic": "Existence", "prompt": "Picard: existence for Lipschitz ___", "answer": ["f"], "display": "f" },
    { "id": 11, "topic": "Uniqueness", "prompt": "Lipschitz condition guarantees ___", "answer": ["uniqueness"], "display": "uniqueness" },
    { "id": 12, "topic": "Linear", "prompt": "Linear systems: x' = ___x", "answer": ["a"], "display": "Ax" },
    { "id": 13, "topic": "Eigenvalue", "prompt": "Stability of x' = Ax: eigenvalues with Re < ___", "answer": ["0"], "display": "0" },
    { "id": 14, "topic": "PhasePortrait", "prompt": "Phase portrait: plot trajectories in ___ space", "answer": ["phase"], "display": "phase" },
    { "id": 15, "topic": "Equilibrium", "prompt": "Equilibrium: f(x*) = ___", "answer": ["0"], "display": "0" },
    { "id": 16, "topic": "Lyapunov", "prompt": "Lyapunov function: proves ___", "answer": ["stability"], "display": "stability" },
    { "id": 17, "topic": "Bifurcation", "prompt": "Bifurcation: qualitative change at ___ value", "answer": ["parameter"], "display": "parameter" },
    { "id": 18, "topic": "Chaos", "prompt": "Chaos: sensitive to initial ___", "answer": ["conditions"], "display": "conditions" },
    { "id": 19, "topic": "Lorenz", "prompt": "Lorenz system has strange ___", "answer": ["attractor"], "display": "attractor" },
    { "id": 20, "topic": "Pendulum", "prompt": "Nonlinear pendulum: θ'' + sin(___) = 0", "answer": ["θ", "theta"], "display": "θ" }
  ],
  "day79": [
    { "id": 1, "topic": "Integration", "prompt": "Trapezoidal rule: O(h^___) error", "answer": ["2"], "display": "2" },
    { "id": 2, "topic": "Integration", "prompt": "Simpson's rule: O(h^___) error", "answer": ["4"], "display": "4" },
    { "id": 3, "topic": "GaussQuad", "prompt": "Gaussian quadrature: optimal ___ points", "answer": ["node"], "display": "node" },
    { "id": 4, "topic": "Interpolation", "prompt": "Lagrange interpolation: polynomial through ___", "answer": ["points"], "display": "points" },
    { "id": 5, "topic": "Spline", "prompt": "Cubic spline: piecewise ___ C²", "answer": ["cubic"], "display": "cubic" },
    { "id": 6, "topic": "RootFinding", "prompt": "Bisection: O(1/___)^n convergence", "answer": ["2"], "display": "2" },
    { "id": 7, "topic": "Secant", "prompt": "Secant method: superlinear convergence ≈ ___", "answer": ["1.618", "golden"], "display": "1.618" },
    { "id": 8, "topic": "LinearSystem", "prompt": "Gaussian elimination: O(n^___) for dense", "answer": ["3"], "display": "3" },
    { "id": 9, "topic": "Iterative", "prompt": "Krylov methods: CG, ___", "answer": ["gmres"], "display": "GMRES" },
    { "id": 10, "topic": "CG", "prompt": "Conjugate gradient for symmetric positive ___", "answer": ["definite"], "display": "definite" },
    { "id": 11, "topic": "Preconditioning", "prompt": "Preconditioner: improve ___ number", "answer": ["condition"], "display": "condition" },
    { "id": 12, "topic": "SVD", "prompt": "SVD: A = UΣV^___ (transpose)", "answer": ["t", "T"], "display": "T" },
    { "id": 13, "topic": "Pseudoinverse", "prompt": "Moore-Penrose: A⁺ = VΣ⁺U^___", "answer": ["t", "T"], "display": "T" },
    { "id": 14, "topic": "LeastSquares", "prompt": "LS: minimize ‖Ax - ___‖²", "answer": ["b"], "display": "b" },
    { "id": 15, "topic": "Eigensolvers", "prompt": "Power iteration: finds ___ eigenvalue", "answer": ["dominant", "largest"], "display": "dominant" },
    { "id": 16, "topic": "QR", "prompt": "QR iteration for eigenvalue ___", "answer": ["decomposition"], "display": "decomposition" },
    { "id": 17, "topic": "Sparse", "prompt": "Sparse matrix: store only ___ entries", "answer": ["nonzero"], "display": "nonzero" },
    { "id": 18, "topic": "FFT", "prompt": "FFT: O(n log ___) for DFT", "answer": ["n"], "display": "n" },
    { "id": 19, "topic": "Chebyshev", "prompt": "Chebyshev points minimize ___ error", "answer": ["interpolation"], "display": "interpolation" },
    { "id": 20, "topic": "Automatic", "prompt": "Automatic differentiation: exact ___", "answer": ["gradients"], "display": "gradients" }
  ],
  "day80": [
    { "id": 1, "topic": "Graphics", "prompt": "Rasterization: convert to ___", "answer": ["pixels"], "display": "pixels" },
    { "id": 2, "topic": "RayTracing", "prompt": "Ray tracing: simulate light ___", "answer": ["rays"], "display": "rays" },
    { "id": 3, "topic": "Transform", "prompt": "Transformation: translate, rotate, ___", "answer": ["scale"], "display": "scale" },
    { "id": 4, "topic": "Homogeneous", "prompt": "Homogeneous coordinates: [x,y,z,___]", "answer": ["w", "1"], "display": "w" },
    { "id": 5, "topic": "Projection", "prompt": "Perspective projection: divide by ___", "answer": ["z"], "display": "z" },
    { "id": 6, "topic": "Clipping", "prompt": "Clipping: remove objects outside ___", "answer": ["viewport"], "display": "viewport" },
    { "id": 7, "topic": "ZBuffer", "prompt": "Z-buffer: depth ___ per pixel", "answer": ["test"], "display": "test" },
    { "id": 8, "topic": "Shading", "prompt": "Phong: ambient + diffuse + ___", "answer": ["specular"], "display": "specular" },
    { "id": 9, "topic": "Normal", "prompt": "Normal vectors for ___", "answer": ["lighting"], "display": "lighting" },
    { "id": 10, "topic": "Texture", "prompt": "Texture mapping: image on ___", "answer": ["surface"], "display": "surface" },
    { "id": 11, "topic": "AlphaBlending", "prompt": "Alpha blending for ___", "answer": ["transparency"], "display": "transparency" },
    { "id": 12, "topic": "BRDF", "prompt": "BRDF: bidirectional reflectance distribution ___", "answer": ["function"], "display": "function" },
    { "id": 13, "topic": "PathTracing", "prompt": "Path tracing: Monte Carlo ___", "answer": ["integration"], "display": "integration" },
    { "id": 14, "topic": "GI", "prompt": "Global illumination: indirect ___", "answer": ["lighting"], "display": "lighting" },
    { "id": 15, "topic": "Mesh", "prompt": "Triangle mesh: vertices, edges, ___", "answer": ["faces"], "display": "faces" },
    { "id": 16, "topic": "Bezier", "prompt": "Bézier curve: defined by control ___", "answer": ["points"], "display": "points" },
    { "id": 17, "topic": "BSpline", "prompt": "B-spline: local ___ of points", "answer": ["control"], "display": "control" },
    { "id": 18, "topic": "Subdivision", "prompt": "Subdivision surfaces: refine ___", "answer": ["mesh"], "display": "mesh" },
    { "id": 19, "topic": "SDF", "prompt": "SDF: signed ___ function", "answer": ["distance"], "display": "distance" },
    { "id": 20, "topic": "Physically", "prompt": "PBR: physically based ___", "answer": ["rendering"], "display": "rendering" }
  ],
  "day81": [
    { "id": 1, "topic": "Bayesian", "prompt": "Bayesian: prior × likelihood = posterior × ___", "answer": ["evidence"], "display": "evidence" },
    { "id": 2, "topic": "MAP", "prompt": "MAP: maximum a ___ estimate", "answer": ["posteriori"], "display": "posteriori" },
    { "id": 3, "topic": "Conjugate", "prompt": "Conjugate prior: posterior same family as ___", "answer": ["prior"], "display": "prior" },
    { "id": 4, "topic": "MCMC", "prompt": "MCMC: Markov chain Monte ___", "answer": ["carlo"], "display": "Carlo" },
    { "id": 5, "topic": "Metropolis", "prompt": "Metropolis-Hastings: accept with probability min(1, ___)", "answer": ["ratio"], "display": "ratio" },
    { "id": 6, "topic": "Gibbs", "prompt": "Gibbs sampling: sample from ___ distributions", "answer": ["conditional"], "display": "conditional" },
    { "id": 7, "topic": "BayesNet", "prompt": "Bayesian network: DAG of ___ dependencies", "answer": ["probabilistic"], "display": "probabilistic" },
    { "id": 8, "topic": "HMM", "prompt": "HMM: hidden Markov ___", "answer": ["model"], "display": "model" },
    { "id": 9, "topic": "Viterbi", "prompt": "Viterbi: find most likely ___ in HMM", "answer": ["sequence"], "display": "sequence" },
    { "id": 10, "topic": "ForwardBackward", "prompt": "Forward-backward: marginals in ___", "answer": ["hmm"], "display": "HMM" },
    { "id": 11, "topic": "EM", "prompt": "EM: expectation-___", "answer": ["maximization"], "display": "maximization" },
    { "id": 12, "topic": "Latent", "prompt": "Latent variables: ___ (not observed)", "answer": ["hidden"], "display": "hidden" },
    { "id": 13, "topic": "GMM", "prompt": "GMM: Gaussian ___ model", "answer": ["mixture"], "display": "mixture" },
    { "id": 14, "topic": "Clustering", "prompt": "k-means minimizes within-cluster ___", "answer": ["variance"], "display": "variance" },
    { "id": 15, "topic": "Hierarchical", "prompt": "Hierarchical clustering: agglomerative or ___", "answer": ["divisive"], "display": "divisive" },
    { "id": 16, "topic": "PCA", "prompt": "PCA: principal component ___", "answer": ["analysis"], "display": "analysis" },
    { "id": 17, "topic": "PCA", "prompt": "PCA: project onto top ___ eigenvectors", "answer": ["k"], "display": "k" },
    { "id": 18, "topic": "TSNE", "prompt": "t-SNE: dimensionality ___ for visualization", "answer": ["reduction"], "display": "reduction" },
    { "id": 19, "topic": "Bootstrap", "prompt": "Bootstrap: resample with ___", "answer": ["replacement"], "display": "replacement" },
    { "id": 20, "topic": "Causal", "prompt": "Causal inference: do(X) vs observe ___", "answer": ["x"], "display": "X" }
  ],
  "day82": [
    { "id": 1, "topic": "Parallel", "prompt": "Parallel: execute ___ simultaneously", "answer": ["tasks"], "display": "tasks" },
    { "id": 2, "topic": "Distributed", "prompt": "Distributed: across multiple ___", "answer": ["machines"], "display": "machines" },
    { "id": 3, "topic": "Speedup", "prompt": "Speedup S = T_sequential / T___", "answer": ["parallel"], "display": "parallel" },
    { "id": 4, "topic": "Amdahl", "prompt": "Amdahl's law: speedup limited by ___ fraction", "answer": ["sequential"], "display": "sequential" },
    { "id": 5, "topic": "Gustafson", "prompt": "Gustafson: larger problems ___ well", "answer": ["scale"], "display": "scale" },
    { "id": 6, "topic": "MapReduce", "prompt": "MapReduce: map then ___", "answer": ["reduce"], "display": "reduce" },
    { "id": 7, "topic": "HadoopSpark", "prompt": "Spark: in-___ MapReduce", "answer": ["memory"], "display": "memory" },
    { "id": 8, "topic": "SIMD", "prompt": "SIMD: single instruction, multiple ___", "answer": ["data"], "display": "data" },
    { "id": 9, "topic": "SPMD", "prompt": "SPMD: single program, multiple ___", "answer": ["data"], "display": "data" },
    { "id": 10, "topic": "MPI", "prompt": "MPI: message ___ interface", "answer": ["passing"], "display": "passing" },
    { "id": 11, "topic": "OpenMP", "prompt": "OpenMP: shared ___ parallelism", "answer": ["memory"], "display": "memory" },
    { "id": 12, "topic": "CUDA", "prompt": "CUDA: NVIDIA ___ programming", "answer": ["gpu"], "display": "GPU" },
    { "id": 13, "topic": "Thread", "prompt": "Thread: lightweight ___ of execution", "answer": ["unit"], "display": "unit" },
    { "id": 14, "topic": "Race", "prompt": "Race condition: concurrent ___ to shared data", "answer": ["access"], "display": "access" },
    { "id": 15, "topic": "Mutex", "prompt": "Mutex: mutual ___", "answer": ["exclusion"], "display": "exclusion" },
    { "id": 16, "topic": "Deadlock", "prompt": "Deadlock: circular ___ wait", "answer": ["resource"], "display": "resource" },
    { "id": 17, "topic": "Consistency", "prompt": "Consistency models: sequential, eventual, ___", "answer": ["causal"], "display": "causal" },
    { "id": 18, "topic": "CAP", "prompt": "CAP: consistency, availability, partition ___", "answer": ["tolerance"], "display": "tolerance" },
    { "id": 19, "topic": "LoadBalance", "prompt": "Load balancing: distribute work ___", "answer": ["evenly"], "display": "evenly" },
    { "id": 20, "topic": "Fault", "prompt": "Fault tolerance: handle ___", "answer": ["failures"], "display": "failures" }
  ],
  "day83": [
    { "id": 1, "topic": "DB", "prompt": "Database: organized collection of ___", "answer": ["data"], "display": "data" },
    { "id": 2, "topic": "Relational", "prompt": "Relational: tables with rows and ___", "answer": ["columns"], "display": "columns" },
    { "id": 3, "topic": "SQL", "prompt": "SQL: structured query ___", "answer": ["language"], "display": "language" },
    { "id": 4, "topic": "Key", "prompt": "Primary key: unique ___ for row", "answer": ["identifier"], "display": "identifier" },
    { "id": 5, "topic": "Foreign", "prompt": "Foreign key: reference to ___ table", "answer": ["another"], "display": "another" },
    { "id": 6, "topic": "Join", "prompt": "Join: combine tables on matching ___", "answer": ["keys"], "display": "keys" },
    { "id": 7, "topic": "Index", "prompt": "Index: speed up ___ queries", "answer": ["search"], "display": "search" },
    { "id": 8, "topic": "NF", "prompt": "Normalization: reduce ___", "answer": ["redundancy"], "display": "redundancy" },
    { "id": 9, "topic": "ACID", "prompt": "ACID: atomicity, consistency, isolation, ___", "answer": ["durability"], "display": "durability" },
    { "id": 10, "topic": "Transaction", "prompt": "Transaction: atomic unit of ___", "answer": ["work"], "display": "work" },
    { "id": 11, "topic": "BTree", "prompt": "B-tree: balanced for disk ___", "answer": ["access"], "display": "access" },
    { "id": 12, "topic": "Query", "prompt": "Query optimizer: find efficient ___", "answer": ["plan"], "display": "plan" },
    { "id": 13, "topic": "NoSQL", "prompt": "NoSQL: non-___ databases", "answer": ["relational"], "display": "relational" },
    { "id": 14, "topic": "Key-Value", "prompt": "Key-value: simple ___ store", "answer": ["key"], "display": "key" },
    { "id": 15, "topic": "Document", "prompt": "Document store: JSON-like ___", "answer": ["documents"], "display": "documents" },
    { "id": 16, "topic": "Graph", "prompt": "Graph database: nodes and ___", "answer": ["edges"], "display": "edges" },
    { "id": 17, "topic": "Sharding", "prompt": "Sharding: horizontal ___", "answer": ["partitioning"], "display": "partitioning" },
    { "id": 18, "topic": "Replication", "prompt": "Replication: copy data for ___", "answer": ["availability"], "display": "availability" },
    { "id": 19, "topic": "Eventual", "prompt": "Eventual consistency: eventually all nodes ___", "answer": ["agree"], "display": "agree" },
    { "id": 20, "topic": "Warehouse", "prompt": "Data warehouse: for ___ analytics", "answer": ["olap", "analytical"], "display": "OLAP" }
  ],
  "day84": [
    { "id": 1, "topic": "OS", "prompt": "Operating system: manages ___", "answer": ["resources"], "display": "resources" },
    { "id": 2, "topic": "Process", "prompt": "Process: running ___", "answer": ["program"], "display": "program" },
    { "id": 3, "topic": "Scheduling", "prompt": "CPU scheduling: decide which ___ runs", "answer": ["process"], "display": "process" },
    { "id": 4, "topic": "Context", "prompt": "Context switch: save and restore ___", "answer": ["state"], "display": "state" },
    { "id": 5, "topic": "Virtual", "prompt": "Virtual memory: illusion of more ___", "answer": ["ram", "memory"], "display": "RAM" },
    { "id": 6, "topic": "Paging", "prompt": "Paging: divide memory into ___", "answer": ["pages"], "display": "pages" },
    { "id": 7, "topic": "PageFault", "prompt": "Page fault: page not in ___", "answer": ["memory", "ram"], "display": "memory" },
    { "id": 8, "topic": "TLB", "prompt": "TLB: translation lookaside ___", "answer": ["buffer"], "display": "buffer" },
    { "id": 9, "topic": "FileSystem", "prompt": "File system: organize files on ___", "answer": ["disk"], "display": "disk" },
    { "id": 10, "topic": "Inode", "prompt": "Inode: metadata about ___", "answer": ["file"], "display": "file" },
    { "id": 11, "topic": "Semaphore", "prompt": "Semaphore: synchronization ___", "answer": ["primitive"], "display": "primitive" },
    { "id": 12, "topic": "IPC", "prompt": "IPC: inter-___ communication", "answer": ["process"], "display": "process" },
    { "id": 13, "topic": "Pipe", "prompt": "Pipe: one-way communication ___", "answer": ["channel"], "display": "channel" },
    { "id": 14, "topic": "Socket", "prompt": "Socket: network ___", "answer": ["endpoint"], "display": "endpoint" },
    { "id": 15, "topic": "Kernel", "prompt": "Kernel: core of ___", "answer": ["os"], "display": "OS" },
    { "id": 16, "topic": "UserSpace", "prompt": "User vs kernel ___", "answer": ["mode"], "display": "mode" },
    { "id": 17, "topic": "SystemCall", "prompt": "System call: request ___ from OS", "answer": ["service"], "display": "service" },
    { "id": 18, "topic": "Interrupt", "prompt": "Interrupt: signal needing ___", "answer": ["attention"], "display": "attention" },
    { "id": 19, "topic": "Cache", "prompt": "CPU cache: fast ___ close to CPU", "answer": ["memory"], "display": "memory" },
    { "id": 20, "topic": "Virtualization", "prompt": "VM: virtual ___", "answer": ["machine"], "display": "machine" }
  ],
  "day85": [
    { "id": 1, "topic": "Networking", "prompt": "OSI model has ___ layers", "answer": ["7"], "display": "7" },
    { "id": 2, "topic": "Physical", "prompt": "Layer 1: physical ___", "answer": ["signals"], "display": "signals" },
    { "id": 3, "topic": "DataLink", "prompt": "Layer 2: MAC ___", "answer": ["addresses"], "display": "addresses" },
    { "id": 4, "topic": "Network", "prompt": "Layer 3: ___ routing", "answer": ["ip"], "display": "IP" },
    { "id": 5, "topic": "Transport", "prompt": "Layer 4: TCP/___", "answer": ["udp"], "display": "UDP" },
    { "id": 6, "topic": "TCP", "prompt": "TCP: reliable, ___-oriented", "answer": ["connection"], "display": "connection" },
    { "id": 7, "topic": "UDP", "prompt": "UDP: fast, ___", "answer": ["unreliable"], "display": "unreliable" },
    { "id": 8, "topic": "IP", "prompt": "IPv4: ___ bits", "answer": ["32"], "display": "32" },
    { "id": 9, "topic": "IP", "prompt": "IPv6: ___ bits", "answer": ["128"], "display": "128" },
    { "id": 10, "topic": "DNS", "prompt": "DNS: domain name ___", "answer": ["system"], "display": "system" },
    { "id": 11, "topic": "HTTP", "prompt": "HTTP: hypertext transfer ___", "answer": ["protocol"], "display": "protocol" },
    { "id": 12, "topic": "HTTPS", "prompt": "HTTPS: HTTP + ___", "answer": ["tls", "ssl"], "display": "TLS" },
    { "id": 13, "topic": "Routing", "prompt": "Routing: path selection via ___", "answer": ["algorithms"], "display": "algorithms" },
    { "id": 14, "topic": "BGP", "prompt": "BGP: border gateway ___", "answer": ["protocol"], "display": "protocol" },
    { "id": 15, "topic": "NAT", "prompt": "NAT: network address ___", "answer": ["translation"], "display": "translation" },
    { "id": 16, "topic": "Firewall", "prompt": "Firewall: filter ___", "answer": ["traffic"], "display": "traffic" },
    { "id": 17, "topic": "Latency", "prompt": "Latency: time ___", "answer": ["delay"], "display": "delay" },
    { "id": 18, "topic": "Throughput", "prompt": "Throughput: data ___ per time", "answer": ["transferred"], "display": "transferred" },
    { "id": 19, "topic": "Congestion", "prompt": "Congestion control: avoid network ___", "answer": ["overload"], "display": "overload" },
    { "id": 20, "topic": "CDN", "prompt": "CDN: content delivery ___", "answer": ["network"], "display": "network" }
  ],
  "day86": [
    { "id": 1, "topic": "Security", "prompt": "CIA: confidentiality, integrity, ___", "answer": ["availability"], "display": "availability" },
    { "id": 2, "topic": "Auth", "prompt": "Authentication: verify ___", "answer": ["identity"], "display": "identity" },
    { "id": 3, "topic": "Authz", "prompt": "Authorization: verify ___", "answer": ["permissions"], "display": "permissions" },
    { "id": 4, "topic": "Attack", "prompt": "SQL injection: malicious ___", "answer": ["input"], "display": "input" },
    { "id": 5, "topic": "XSS", "prompt": "XSS: cross-site ___", "answer": ["scripting"], "display": "scripting" },
    { "id": 6, "topic": "CSRF", "prompt": "CSRF: cross-site request ___", "answer": ["forgery"], "display": "forgery" },
    { "id": 7, "topic": "Buffer", "prompt": "Buffer overflow: write past ___", "answer": ["boundary"], "display": "boundary" },
    { "id": 8, "topic": "Sanitize", "prompt": "Input validation: ___ user input", "answer": ["sanitize"], "display": "sanitize" },
    { "id": 9, "topic": "Salt", "prompt": "Password hashing: add ___ before hash", "answer": ["salt"], "display": "salt" },
    { "id": 10, "topic": "MFA", "prompt": "MFA: multi-___ authentication", "answer": ["factor"], "display": "factor" },
    { "id": 11, "topic": "OAuth", "prompt": "OAuth: authorization ___", "answer": ["framework"], "display": "framework" },
    { "id": 12, "topic": "JWT", "prompt": "JWT: JSON web ___", "answer": ["token"], "display": "token" },
    { "id": 13, "topic": "TLS", "prompt": "TLS: transport layer ___", "answer": ["security"], "display": "security" },
    { "id": 14, "topic": "Certificate", "prompt": "X.509 certificate: prove ___", "answer": ["identity"], "display": "identity" },
    { "id": 15, "topic": "PKI", "prompt": "PKI: public key ___", "answer": ["infrastructure"], "display": "infrastructure" },
    { "id": 16, "topic": "Penetration", "prompt": "Pen testing: ___ attacks", "answer": ["simulated"], "display": "simulated" },
    { "id": 17, "topic": "OWASP", "prompt": "OWASP Top ___: common vulnerabilities", "answer": ["10"], "display": "10" },
    { "id": 18, "topic": "Phishing", "prompt": "Phishing: social ___", "answer": ["engineering"], "display": "engineering" },
    { "id": 19, "topic": "Malware", "prompt": "Malware: malicious ___", "answer": ["software"], "display": "software" },
    { "id": 20, "topic": "Defense", "prompt": "Defense in depth: multiple ___ of security", "answer": ["layers"], "display": "layers" }
  ],
  "day87": [
    { "id": 1, "topic": "SoftEng", "prompt": "Software engineering: systematic ___", "answer": ["development"], "display": "development" },
    { "id": 2, "topic": "SDLC", "prompt": "SDLC: software development life ___", "answer": ["cycle"], "display": "cycle" },
    { "id": 3, "topic": "Agile", "prompt": "Agile: iterative, ___", "answer": ["incremental"], "display": "incremental" },
    { "id": 4, "topic": "Scrum", "prompt": "Scrum: sprints, daily ___, retrospectives", "answer": ["standup"], "display": "standup" },
    { "id": 5, "topic": "Waterfall", "prompt": "Waterfall: sequential ___", "answer": ["phases"], "display": "phases" },
    { "id": 6, "topic": "Requirements", "prompt": "Requirements: what system should ___", "answer": ["do"], "display": "do" },
    { "id": 7, "topic": "Design", "prompt": "Design: how system will ___", "answer": ["work"], "display": "work" },
    { "id": 8, "topic": "UML", "prompt": "UML: unified modeling ___", "answer": ["language"], "display": "language" },
    { "id": 9, "topic": "Pattern", "prompt": "Design pattern: reusable ___", "answer": ["solution"], "display": "solution" },
    { "id": 10, "topic": "SOLID", "prompt": "SOLID: single responsibility, open-closed, Liskov, interface, ___", "answer": ["dependency"], "display": "dependency" },
    { "id": 11, "topic": "Testing", "prompt": "Unit testing: test individual ___", "answer": ["components"], "display": "components" },
    { "id": 12, "topic": "Integration", "prompt": "Integration testing: test ___ together", "answer": ["components"], "display": "components" },
    { "id": 13, "topic": "TDD", "prompt": "TDD: test-driven ___", "answer": ["development"], "display": "development" },
    { "id": 14, "topic": "CI", "prompt": "CI/CD: continuous integration and ___", "answer": ["deployment"], "display": "deployment" },
    { "id": 15, "topic": "Git", "prompt": "Git: version ___ system", "answer": ["control"], "display": "control" },
    { "id": 16, "topic": "Branch", "prompt": "Branching: parallel development ___", "answer": ["lines"], "display": "lines" },
    { "id": 17, "topic": "Refactor", "prompt": "Refactoring: improve code without changing ___", "answer": ["behavior"], "display": "behavior" },
    { "id": 18, "topic": "CodeReview", "prompt": "Code review: peer ___", "answer": ["review"], "display": "review" },
    { "id": 19, "topic": "Technical", "prompt": "Technical debt: shortcuts that need ___", "answer": ["fixing"], "display": "fixing" },
    { "id": 20, "topic": "DevOps", "prompt": "DevOps: dev + ___", "answer": ["operations"], "display": "operations" }
  ],
  "day88": [
    { "id": 1, "topic": "Qubit", "prompt": "Qubit: |0⟩ and |1⟩ in ___", "answer": ["superposition"], "display": "superposition" },
    { "id": 2, "topic": "Superposition", "prompt": "Superposition: α|0⟩ + β|1⟩ with |α|² + |β|² = ___", "answer": ["1"], "display": "1" },
    { "id": 3, "topic": "Entanglement", "prompt": "Entanglement: correlated ___ states", "answer": ["quantum"], "display": "quantum" },
    { "id": 4, "topic": "Gate", "prompt": "Quantum gate: ___ transformation", "answer": ["unitary"], "display": "unitary" },
    { "id": 5, "topic": "Hadamard", "prompt": "Hadamard: creates ___", "answer": ["superposition"], "display": "superposition" },
    { "id": 6, "topic": "CNOT", "prompt": "CNOT: controlled-___", "answer": ["not"], "display": "NOT" },
    { "id": 7, "topic": "Measurement", "prompt": "Measurement: collapses to ___ state", "answer": ["classical"], "display": "classical" },
    { "id": 8, "topic": "Grover", "prompt": "Grover: search in O(√___)", "answer": ["n"], "display": "√N" },
    { "id": 9, "topic": "Shor", "prompt": "Shor: factors in polynomial ___", "answer": ["time"], "display": "time" },
    { "id": 10, "topic": "QFT", "prompt": "QFT: quantum Fourier ___", "answer": ["transform"], "display": "transform" },
    { "id": 11, "topic": "Decoherence", "prompt": "Decoherence: loss of quantum ___", "answer": ["coherence"], "display": "coherence" },
    { "id": 12, "topic": "ErrorCorrect", "prompt": "Quantum error correction: protect against ___", "answer": ["noise"], "display": "noise" },
    { "id": 13, "topic": "Surface", "prompt": "Surface code: topological error ___", "answer": ["correction"], "display": "correction" },
    { "id": 14, "topic": "Supremacy", "prompt": "Quantum supremacy: beat classical ___", "answer": ["computers"], "display": "computers" },
    { "id": 15, "topic": "NISQ", "prompt": "NISQ: noisy intermediate-scale ___", "answer": ["quantum"], "display": "quantum" },
    { "id": 16, "topic": "VQE", "prompt": "VQE: variational quantum ___", "answer": ["eigensolver"], "display": "eigensolver" },
    { "id": 17, "topic": "QAOA", "prompt": "QAOA: quantum approximate optimization ___", "answer": ["algorithm"], "display": "algorithm" },
    { "id": 18, "topic": "Bloch", "prompt": "Bloch sphere: visualize single ___", "answer": ["qubit"], "display": "qubit" },
    { "id": 19, "topic": "Bell", "prompt": "Bell state: maximally ___ pair", "answer": ["entangled"], "display": "entangled" },
    { "id": 20, "topic": "Teleportation", "prompt": "Quantum teleportation: transmit state via ___", "answer": ["entanglement"], "display": "entanglement" }
  ],
  "day89": [
    { "id": 1, "topic": "Proof", "prompt": "Mathematical proof: sequence of ___ steps", "answer": ["logical"], "display": "logical" },
    { "id": 2, "topic": "Direct", "prompt": "Direct proof: assume P, derive ___", "answer": ["q"], "display": "Q" },
    { "id": 3, "topic": "Contrapositive", "prompt": "Contrapositive: ¬Q → ___", "answer": ["¬p"], "display": "¬P" },
    { "id": 4, "topic": "Contradiction", "prompt": "Contradiction: assume ¬P, derive ___", "answer": ["false"], "display": "false" },
    { "id": 5, "topic": "Induction", "prompt": "Induction: base case + ___ step", "answer": ["inductive"], "display": "inductive" },
    { "id": 6, "topic": "Strong", "prompt": "Strong induction: assume all k < n, prove for ___", "answer": ["n"], "display": "n" },
    { "id": 7, "topic": "WellOrdering", "prompt": "Well-ordering: smallest ___ exists", "answer": ["element"], "display": "element" },
    { "id": 8, "topic": "Constructive", "prompt": "Constructive: provide explicit ___", "answer": ["example"], "display": "example" },
    { "id": 9, "topic": "Nonconstructive", "prompt": "Nonconstructive: existence without explicit ___", "answer": ["construction"], "display": "construction" },
    { "id": 10, "topic": "Pigeonhole", "prompt": "Pigeonhole: n+1 into n boxes → some has ___", "answer": ["2", "two"], "display": "≥2" },
    { "id": 11, "topic": "Counting", "prompt": "Double counting: count same thing two ___", "answer": ["ways"], "display": "ways" },
    { "id": 12, "topic": "Bijection", "prompt": "Bijective proof: show sets have same ___", "answer": ["size"], "display": "size" },
    { "id": 13, "topic": "Probabilistic", "prompt": "Probabilistic method: P > 0 implies ___", "answer": ["existence"], "display": "existence" },
    { "id": 14, "topic": "Diagonalization", "prompt": "Diagonalization: Cantor's ___ argument", "answer": ["diagonal"], "display": "diagonal" },
    { "id": 15, "topic": "Invariant", "prompt": "Invariant: quantity that doesn't ___", "answer": ["change"], "display": "change" },
    { "id": 16, "topic": "Monovariant", "prompt": "Monovariant: quantity that only ___ (or down)", "answer": ["increases"], "display": "increases" },
    { "id": 17, "topic": "Extremal", "prompt": "Extremal: consider min/max ___", "answer": ["cases"], "display": "cases" },
    { "id": 18, "topic": "Compactness", "prompt": "Compactness: infinite → finite ___", "answer": ["argument"], "display": "argument" },
    { "id": 19, "topic": "Parity", "prompt": "Parity: even vs ___", "answer": ["odd"], "display": "odd" },
    { "id": 20, "topic": "Coloring", "prompt": "Coloring argument: partition into ___", "answer": ["classes"], "display": "classes" }
  ],
  "day90": [
    { "id": 1, "topic": "Research", "prompt": "Research: systematic ___ of knowledge", "answer": ["investigation"], "display": "investigation" },
    { "id": 2, "topic": "Hypothesis", "prompt": "Hypothesis: proposed ___", "answer": ["explanation"], "display": "explanation" },
    { "id": 3, "topic": "Experiment", "prompt": "Experiment: test ___", "answer": ["hypothesis"], "display": "hypothesis" },
    { "id": 4, "topic": "Reproducible", "prompt": "Reproducible: others can ___", "answer": ["replicate"], "display": "replicate" },
    { "id": 5, "topic": "PeerReview", "prompt": "Peer review: evaluated by ___", "answer": ["experts"], "display": "experts" },
    { "id": 6, "topic": "Citation", "prompt": "Citation: acknowledge ___", "answer": ["sources"], "display": "sources" },
    { "id": 7, "topic": "Paper", "prompt": "Paper: abstract, intro, methods, results, ___", "answer": ["conclusion"], "display": "conclusion" },
    { "id": 8, "topic": "Thesis", "prompt": "Thesis: central ___", "answer": ["argument"], "display": "argument" },
    { "id": 9, "topic": "Literature", "prompt": "Literature review: summarize existing ___", "answer": ["research"], "display": "research" },
    { "id": 10, "topic": "Falsifiable", "prompt": "Falsifiable: can be proven ___", "answer": ["wrong"], "display": "wrong" },
    { "id": 11, "topic": "Quantitative", "prompt": "Quantitative: ___ data", "answer": ["numerical"], "display": "numerical" },
    { "id": 12, "topic": "Qualitative", "prompt": "Qualitative: ___ data", "answer": ["descriptive"], "display": "descriptive" },
    { "id": 13, "topic": "Control", "prompt": "Control group: no ___", "answer": ["treatment"], "display": "treatment" },
    { "id": 14, "topic": "Bias", "prompt": "Bias: systematic ___", "answer": ["error"], "display": "error" },
    { "id": 15, "topic": "Ethical", "prompt": "Research ethics: do no ___", "answer": ["harm"], "display": "harm" },
    { "id": 16, "topic": "Plagiarism", "prompt": "Plagiarism: using others' work without ___", "answer": ["credit"], "display": "credit" },
    { "id": 17, "topic": "OpenScience", "prompt": "Open science: publicly ___ data and methods", "answer": ["available"], "display": "available" },
    { "id": 18, "topic": "Incremental", "prompt": "Incremental research: ___ improvements", "answer": ["small"], "display": "small" },
    { "id": 19, "topic": "Breakthrough", "prompt": "Breakthrough: paradigm ___", "answer": ["shift"], "display": "shift" },
    { "id": 20, "topic": "Collaboration", "prompt": "Collaboration: work with ___", "answer": ["others"], "display": "others" }
  ],
  "day91": [
    { "id": 1, "topic": "Linear", "prompt": "Vectors form a ___ space", "answer": ["vector"], "display": "vector" },
    { "id": 2, "topic": "Span", "prompt": "Span of vectors: all linear ___", "answer": ["combinations"], "display": "combinations" },
    { "id": 3, "topic": "Independent", "prompt": "Linearly independent: no vector is ___ of others", "answer": ["combination"], "display": "combination" },
    { "id": 4, "topic": "Basis", "prompt": "Basis: independent + ___", "answer": ["spanning"], "display": "spanning" },
    { "id": 5, "topic": "Dimension", "prompt": "Dimension = number of ___ vectors", "answer": ["basis"], "display": "basis" },
    { "id": 6, "topic": "DotProduct", "prompt": "a·b = |a||b|cos(___)", "answer": ["θ", "theta"], "display": "θ" },
    { "id": 7, "topic": "CrossProduct", "prompt": "a × b is ___ to both a and b", "answer": ["perpendicular"], "display": "perpendicular" },
    { "id": 8, "topic": "Determinant", "prompt": "det(A) = 0 iff A is ___", "answer": ["singular"], "display": "singular" },
    { "id": 9, "topic": "Eigenvalue", "prompt": "Av = ___v", "answer": ["λ"], "display": "λv" },
    { "id": 10, "topic": "Diagonalize", "prompt": "Diagonalizable: A = PDP^___", "answer": ["-1"], "display": "-1" },
    { "id": 11, "topic": "Derivative", "prompt": "f'(x) = lim (f(x+h) - f(x))/___", "answer": ["h"], "display": "h" },
    { "id": 12, "topic": "Integral", "prompt": "∫f(x)dx is area under ___", "answer": ["curve"], "display": "curve" },
    { "id": 13, "topic": "FTC", "prompt": "FTC: ∫_a^b f'(x)dx = f(b) - ___", "answer": ["f(a)"], "display": "f(a)" },
    { "id": 14, "topic": "Taylor", "prompt": "Taylor: f(x) ≈ f(a) + f'(a)(x-a) + f''(a)(x-a)²/___ + ...", "answer": ["2!", "2"], "display": "2!" },
    { "id": 15, "topic": "Gradient", "prompt": "∇f points in direction of steepest ___", "answer": ["ascent"], "display": "ascent" },
    { "id": 16, "topic": "Limit", "prompt": "ε-δ: |x - a| < δ ⟹ |f(x) - L| < ___", "answer": ["ε"], "display": "ε" },
    { "id": 17, "topic": "Continuity", "prompt": "f continuous at a: lim_{x→a} f(x) = f(___)", "answer": ["a"], "display": "f(a)" },
    { "id": 18, "topic": "Chain", "prompt": "Chain rule: (f∘g)' = f'(g(x)) × g'(___)", "answer": ["x"], "display": "x" },
    { "id": 19, "topic": "Probability", "prompt": "P(A ∪ B) = P(A) + P(B) - P(A ∩ ___)", "answer": ["b"], "display": "B" },
    { "id": 20, "topic": "Expectation", "prompt": "E[X] is the ___ of X", "answer": ["mean"], "display": "mean" }
  ],
  "day92": [
    { "id": 1, "topic": "BigO", "prompt": "O(f(n)): at most c×f(n) for n > n₀", "answer": ["true"], "display": "upper bound" },
    { "id": 2, "topic": "BigTheta", "prompt": "Θ(f(n)): both O(f(n)) and Ω(___)", "answer": ["f(n)"], "display": "f(n)" },
    { "id": 3, "topic": "Array", "prompt": "Array access: O(___)", "answer": ["1"], "display": "O(1)" },
    { "id": 4, "topic": "HashTable", "prompt": "Hash table average: O(___)", "answer": ["1"], "display": "O(1)" },
    { "id": 5, "topic": "BST", "prompt": "Balanced BST: O(log ___)", "answer": ["n"], "display": "O(log n)" },
    { "id": 6, "topic": "Sort", "prompt": "Comparison sort lower bound: Ω(n log ___)", "answer": ["n"], "display": "n" },
    { "id": 7, "topic": "MergeSort", "prompt": "Merge sort: O(n log n) time, O(___) space", "answer": ["n"], "display": "n" },
    { "id": 8, "topic": "BFS", "prompt": "BFS: O(V + ___)", "answer": ["e"], "display": "E" },
    { "id": 9, "topic": "Dijkstra", "prompt": "Dijkstra: O((V+E) log ___)", "answer": ["v"], "display": "V" },
    { "id": 10, "topic": "DP", "prompt": "DP: avoid recomputing via ___", "answer": ["memoization"], "display": "memoization" },
    { "id": 11, "topic": "Greedy", "prompt": "Greedy: local ___ choice", "answer": ["optimal"], "display": "optimal" },
    { "id": 12, "topic": "DivideConquer", "prompt": "Divide and conquer: split, solve, ___", "answer": ["combine"], "display": "combine" },
    { "id": 13, "topic": "NP", "prompt": "NP: verifiable in ___", "answer": ["polynomial"], "display": "polynomial" },
    { "id": 14, "topic": "Reduction", "prompt": "A ≤p B: if B in P, then A in ___", "answer": ["p"], "display": "P" },
    { "id": 15, "topic": "Space", "prompt": "Space complexity: memory ___", "answer": ["usage"], "display": "usage" },
    { "id": 16, "topic": "Amortized", "prompt": "Amortized: average over ___", "answer": ["sequence"], "display": "sequence" },
    { "id": 17, "topic": "Recursion", "prompt": "Recursion: function calls ___", "answer": ["itself"], "display": "itself" },
    { "id": 18, "topic": "Master", "prompt": "Master theorem: T(n) = aT(n/b) + f(n)", "answer": ["true"], "display": "True" },
    { "id": 19, "topic": "Stack", "prompt": "DFS uses ___", "answer": ["stack"], "display": "stack" },
    { "id": 20, "topic": "Queue", "prompt": "BFS uses ___", "answer": ["queue"], "display": "queue" }
  ],
  "day93": [
    { "id": 1, "topic": "Propositional", "prompt": "p ∧ q is true iff both ___ and q are true", "answer": ["p"], "display": "p" },
    { "id": 2, "topic": "DeMorgan", "prompt": "¬(p ∧ q) = ¬p ∨ ___", "answer": ["¬q"], "display": "¬q" },
    { "id": 3, "topic": "Implies", "prompt": "p → q = ¬p ∨ ___", "answer": ["q"], "display": "q" },
    { "id": 4, "topic": "Quantifier", "prompt": "∀x P(x): for ___ x, P holds", "answer": ["all"], "display": "all" },
    { "id": 5, "topic": "Exists", "prompt": "∃x P(x): there ___ x where P holds", "answer": ["exists"], "display": "exists" },
    { "id": 6, "topic": "Set", "prompt": "A ∪ B: elements in A ___ B", "answer": ["or"], "display": "or" },
    { "id": 7, "topic": "Intersection", "prompt": "A ∩ B: elements in both A ___ B", "answer": ["and"], "display": "and" },
    { "id": 8, "topic": "PowerSet", "prompt": "|P(A)| = 2^|___| ", "answer": ["a"], "display": "|A|" },
    { "id": 9, "topic": "Function", "prompt": "Bijection: injective ___ surjective", "answer": ["and"], "display": "and" },
    { "id": 10, "topic": "Countable", "prompt": "ℚ is ___ (countable)", "answer": ["countable"], "display": "countable" },
    { "id": 11, "topic": "Uncountable", "prompt": "ℝ is ___ (uncountable)", "answer": ["uncountable"], "display": "uncountable" },
    { "id": 12, "topic": "Relation", "prompt": "Equivalence: reflexive, symmetric, ___", "answer": ["transitive"], "display": "transitive" },
    { "id": 13, "topic": "Graph", "prompt": "Tree: connected, no ___", "answer": ["cycles"], "display": "cycles" },
    { "id": 14, "topic": "Euler", "prompt": "Euler path: traverse each ___ once", "answer": ["edge"], "display": "edge" },
    { "id": 15, "topic": "Hamilton", "prompt": "Hamiltonian path: visit each ___ once", "answer": ["vertex"], "display": "vertex" },
    { "id": 16, "topic": "Handshake", "prompt": "Sum of degrees = 2 × |___| ", "answer": ["e"], "display": "|E|" },
    { "id": 17, "topic": "Coloring", "prompt": "Planar graph: chromatic ≤ ___", "answer": ["4"], "display": "4" },
    { "id": 18, "topic": "Bipartite", "prompt": "Bipartite: 2-___ possible", "answer": ["colorable"], "display": "colorable" },
    { "id": 19, "topic": "Modular", "prompt": "a ≡ b (mod n): n divides ___", "answer": ["a-b"], "display": "a-b" },
    { "id": 20, "topic": "GCD", "prompt": "Euclidean algorithm computes ___", "answer": ["gcd"], "display": "gcd" }
  ],
  "day94": [
    { "id": 1, "topic": "Bayes", "prompt": "P(A|B) = P(B|A)P(A) / P(___)", "answer": ["b"], "display": "P(B)" },
    { "id": 2, "topic": "Independence", "prompt": "P(A ∩ B) = P(A)P(B) iff ___", "answer": ["independent"], "display": "independent" },
    { "id": 3, "topic": "Expectation", "prompt": "E[aX + b] = aE[X] + ___", "answer": ["b"], "display": "b" },
    { "id": 4, "topic": "Variance", "prompt": "Var(X) = E[X²] - E[X]^___", "answer": ["2"], "display": "2" },
    { "id": 5, "topic": "Normal", "prompt": "68-95-99.7 rule for ___", "answer": ["normal"], "display": "normal" },
    { "id": 6, "topic": "CLT", "prompt": "CLT: sample means → ___", "answer": ["normal"], "display": "normal" },
    { "id": 7, "topic": "LLN", "prompt": "LLN: X̄_n → ___", "answer": ["μ"], "display": "μ" },
    { "id": 8, "topic": "Binomial", "prompt": "Binomial: n trials, success prob ___", "answer": ["p"], "display": "p" },
    { "id": 9, "topic": "Poisson", "prompt": "Poisson: ___ events", "answer": ["rare"], "display": "rare" },
    { "id": 10, "topic": "Markov", "prompt": "Markov: P(X ≥ a) ≤ E[X] / ___", "answer": ["a"], "display": "a" },
    { "id": 11, "topic": "Confidence", "prompt": "95% CI: true param in interval with 0.95 ___", "answer": ["probability"], "display": "probability" },
    { "id": 12, "topic": "Pvalue", "prompt": "p-value: prob of data if H₀ ___", "answer": ["true"], "display": "true" },
    { "id": 13, "topic": "TypeI", "prompt": "Type I: reject true ___", "answer": ["h₀", "null"], "display": "H₀" },
    { "id": 14, "topic": "TypeII", "prompt": "Type II: fail to reject false ___", "answer": ["h₀", "null"], "display": "H₀" },
    { "id": 15, "topic": "Regression", "prompt": "Least squares: minimize Σ(y - ŷ)^___", "answer": ["2"], "display": "2" },
    { "id": 16, "topic": "Correlation", "prompt": "r = 1: perfect ___ correlation", "answer": ["positive"], "display": "positive" },
    { "id": 17, "topic": "Random", "prompt": "Random variable: function from outcomes to ___", "answer": ["numbers"], "display": "numbers" },
    { "id": 18, "topic": "CDF", "prompt": "CDF: F(x) = P(X ≤ ___)", "answer": ["x"], "display": "x" },
    { "id": 19, "topic": "PDF", "prompt": "PDF: f(x) with ∫f = ___", "answer": ["1"], "display": "1" },
    { "id": 20, "topic": "Joint", "prompt": "Joint: P(X=x, Y=y) for two ___", "answer": ["variables"], "display": "variables" }
  ],
  "day95": [
    { "id": 1, "topic": "Integration", "prompt": "Math for ML: linear algebra + calculus + ___", "answer": ["probability"], "display": "probability" },
    { "id": 2, "topic": "Gradient", "prompt": "Gradient descent: x ← x - α∇f(___)", "answer": ["x"], "display": "x" },
    { "id": 3, "topic": "Convex", "prompt": "Convex: local min = ___ min", "answer": ["global"], "display": "global" },
    { "id": 4, "topic": "Loss", "prompt": "MSE: Σ(y - ŷ)² / ___", "answer": ["n"], "display": "n" },
    { "id": 5, "topic": "Backprop", "prompt": "Backprop uses ___ rule", "answer": ["chain"], "display": "chain" },
    { "id": 6, "topic": "Matrix", "prompt": "Neural layer: y = σ(Wx + ___)", "answer": ["b"], "display": "b" },
    { "id": 7, "topic": "Activation", "prompt": "ReLU: max(0, ___)", "answer": ["x"], "display": "x" },
    { "id": 8, "topic": "Softmax", "prompt": "Softmax: exp(xᵢ) / Σexp(___)", "answer": ["xⱼ", "xj"], "display": "xⱼ" },
    { "id": 9, "topic": "CrossEntropy", "prompt": "Cross-entropy: -Σ y log ___", "answer": ["ŷ"], "display": "ŷ" },
    { "id": 10, "topic": "Regularization", "prompt": "L2 reg: add λ‖w‖^___", "answer": ["2"], "display": "2" },
    { "id": 11, "topic": "BiasVariance", "prompt": "Error = bias² + variance + ___", "answer": ["noise"], "display": "noise" },
    { "id": 12, "topic": "PCA", "prompt": "PCA: top ___ eigenvectors", "answer": ["k"], "display": "k" },
    { "id": 13, "topic": "SVD", "prompt": "SVD: A = UΣV^___", "answer": ["t", "T"], "display": "T" },
    { "id": 14, "topic": "Kernel", "prompt": "Kernel: K(x,y) = φ(x)·φ(___)", "answer": ["y"], "display": "y" },
    { "id": 15, "topic": "MLE", "prompt": "MLE: maximize ___", "answer": ["likelihood"], "display": "likelihood" },
    { "id": 16, "topic": "MAP", "prompt": "MAP = MLE + ___", "answer": ["prior"], "display": "prior" },
    { "id": 17, "topic": "KL", "prompt": "KL: D(P||Q) = Σ p log(p/___)", "answer": ["q"], "display": "q" },
    { "id": 18, "topic": "Entropy", "prompt": "Entropy: H = -Σ p log ___", "answer": ["p"], "display": "p" },
    { "id": 19, "topic": "InfoGain", "prompt": "Info gain = H(parent) - weighted H(___)", "answer": ["children"], "display": "children" },
    { "id": 20, "topic": "Jacobian", "prompt": "Jacobian: matrix of partial ___", "answer": ["derivatives"], "display": "derivatives" }
  ],
  "day96": [
    { "id": 1, "topic": "Syntax", "prompt": "Syntax: structure of ___", "answer": ["language"], "display": "language" },
    { "id": 2, "topic": "Semantics", "prompt": "Semantics: ___ of language", "answer": ["meaning"], "display": "meaning" },
    { "id": 3, "topic": "Compiler", "prompt": "Compiler: source → ___", "answer": ["machine"], "display": "machine code" },
    { "id": 4, "topic": "Interpreter", "prompt": "Interpreter: execute ___", "answer": ["directly"], "display": "directly" },
    { "id": 5, "topic": "Lexing", "prompt": "Lexer: characters → ___", "answer": ["tokens"], "display": "tokens" },
    { "id": 6, "topic": "Parsing", "prompt": "Parser: tokens → ___", "answer": ["ast", "tree"], "display": "AST" },
    { "id": 7, "topic": "TypeCheck", "prompt": "Type checking: verify ___", "answer": ["types"], "display": "types" },
    { "id": 8, "topic": "Static", "prompt": "Static typing: checked at ___ time", "answer": ["compile"], "display": "compile" },
    { "id": 9, "topic": "Dynamic", "prompt": "Dynamic typing: checked at ___ time", "answer": ["runtime"], "display": "runtime" },
    { "id": 10, "topic": "Closure", "prompt": "Closure: function + ___", "answer": ["environment"], "display": "environment" },
    { "id": 11, "topic": "GC", "prompt": "GC: garbage ___", "answer": ["collection"], "display": "collection" },
    { "id": 12, "topic": "Memory", "prompt": "Stack: function calls; Heap: dynamic ___", "answer": ["allocation"], "display": "allocation" },
    { "id": 13, "topic": "Recursion", "prompt": "Tail recursion: can be optimized to ___", "answer": ["loop"], "display": "loop" },
    { "id": 14, "topic": "Functional", "prompt": "Functional: no side ___", "answer": ["effects"], "display": "effects" },
    { "id": 15, "topic": "Imperative", "prompt": "Imperative: sequence of ___", "answer": ["statements"], "display": "statements" },
    { "id": 16, "topic": "OOP", "prompt": "OOP: objects with state and ___", "answer": ["methods"], "display": "methods" },
    { "id": 17, "topic": "Polymorphism", "prompt": "Polymorphism: many ___", "answer": ["forms"], "display": "forms" },
    { "id": 18, "topic": "Inheritance", "prompt": "Inheritance: derive from ___", "answer": ["parent"], "display": "parent" },
    { "id": 19, "topic": "Interface", "prompt": "Interface: contract without ___", "answer": ["implementation"], "display": "implementation" },
    { "id": 20, "topic": "Abstraction", "prompt": "Abstraction: hide ___", "answer": ["details"], "display": "details" }
  ],
  "day97": [
    { "id": 1, "topic": "Problem", "prompt": "Problem solving: understand, plan, execute, ___", "answer": ["review"], "display": "review" },
    { "id": 2, "topic": "Decompose", "prompt": "Decomposition: break into smaller ___", "answer": ["parts"], "display": "parts" },
    { "id": 3, "topic": "Pattern", "prompt": "Pattern recognition: find ___", "answer": ["similarities"], "display": "similarities" },
    { "id": 4, "topic": "Algorithm", "prompt": "Algorithmic thinking: step by step ___", "answer": ["procedure"], "display": "procedure" },
    { "id": 5, "topic": "Debug", "prompt": "Debugging: find and fix ___", "answer": ["errors"], "display": "errors" },
    { "id": 6, "topic": "Test", "prompt": "Testing: verify ___", "answer": ["correctness"], "display": "correctness" },
    { "id": 7, "topic": "EdgeCase", "prompt": "Edge cases: ___ inputs", "answer": ["boundary"], "display": "boundary" },
    { "id": 8, "topic": "Simplify", "prompt": "Simplify: reduce ___", "answer": ["complexity"], "display": "complexity" },
    { "id": 9, "topic": "Generalize", "prompt": "Generalize: from specific to ___", "answer": ["general"], "display": "general" },
    { "id": 10, "topic": "Modular", "prompt": "Modular: separate ___", "answer": ["concerns"], "display": "concerns" },
    { "id": 11, "topic": "DRY", "prompt": "DRY: don't repeat ___", "answer": ["yourself"], "display": "yourself" },
    { "id": 12, "topic": "KISS", "prompt": "KISS: keep it simple ___", "answer": ["stupid"], "display": "stupid" },
    { "id": 13, "topic": "Readable", "prompt": "Readable code: easy to ___", "answer": ["understand"], "display": "understand" },
    { "id": 14, "topic": "Document", "prompt": "Documentation: explain ___", "answer": ["why"], "display": "why" },
    { "id": 15, "topic": "Tradeoff", "prompt": "Tradeoffs: time vs ___", "answer": ["space"], "display": "space" },
    { "id": 16, "topic": "Iterate", "prompt": "Iterate: improve ___", "answer": ["repeatedly"], "display": "repeatedly" },
    { "id": 17, "topic": "Verify", "prompt": "Verification: check ___", "answer": ["correctness"], "display": "correctness" },
    { "id": 18, "topic": "Benchmark", "prompt": "Benchmark: measure ___", "answer": ["performance"], "display": "performance" },
    { "id": 19, "topic": "Optimize", "prompt": "Optimize: improve ___", "answer": ["performance"], "display": "performance" },
    { "id": 20, "topic": "Scale", "prompt": "Scalability: handle ___ data", "answer": ["more"], "display": "more" }
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

