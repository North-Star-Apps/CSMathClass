/**
 * Add Generate Functions to Questions
 * Repairs questions-data.js by adding generate functions to all questions
 */

const fs = require('fs');
const path = require('path');

const questionsPath = path.join(__dirname, 'questions-data.js');
let content = fs.readFileSync(questionsPath, 'utf-8');

// Backup original
fs.writeFileSync(questionsPath + '.backup', content);
console.log('Created backup at questions-data.js.backup');

/**
 * Create a generate function for a question based on its content
 */
function createGenerateFunction(question) {
    const { prompt, answer, display, topic } = question;

    // Detect question type and create appropriate generator

    // Type 1: Fill-in-the-blank with single word answer
    if (prompt.includes('___') && answer && answer.length === 1 && answer[0].split(' ').length === 1) {
        // Simple fill-in-blank - just return same question
        return `function() { return { prompt: ${JSON.stringify(prompt)}, answer: ${JSON.stringify(answer)}, display: ${JSON.stringify(display || answer[0])} }; }`;
    }

    // Type 2: Numeric calculation (What is X + Y?, etc.)
    const numericMatch = prompt.match(/What is (\d+)\s*[\+\-\*×\/]\s*(\d+)/i);
    if (numericMatch) {
        const op = prompt.includes('+') ? '+' : prompt.includes('-') ? '-' : prompt.includes('*') || prompt.includes('×') ? '*' : '/';
        return `function() { const a = GenUtils.randomInt(2, 20); const b = GenUtils.randomInt(2, 10); const result = ${op === '/' ? 'Math.floor(a / b)' : `a ${op} b`}; return { prompt: \`What is \${a} ${op === '*' ? '×' : op} \${b}?\`, answer: [result.toString()], display: result.toString() }; }`;
    }

    // Type 3: Power/Exponent (What is 2^X?)
    if (prompt.match(/\d+\^/)) {
        return `function() { const p = GenUtils.randomInt(2, 8); const base = ${prompt.match(/(\d+)\^/)?.[1] || 2}; const result = Math.pow(base, p); return { prompt: \`What is ${prompt.match(/(\d+)\^/)?.[1] || 2}^\${p}?\`, answer: [result.toString()], display: result.toString() }; }`;
    }

    // Type 4: Magnitude calculation (3 + 4i -> 5)
    if (prompt.includes('magnitude') || prompt.includes('modulus')) {
        return `function() { const a = GenUtils.randomInt(1, 12); const b = GenUtils.randomInt(1, 12); const mag = Math.sqrt(a*a + b*b); const display = Number.isInteger(mag) ? mag.toString() : mag.toFixed(2); return { prompt: \`The magnitude of \${a} + \${b}i is ___.\`, answer: [display], display: display }; }`;
    }

    // Type 5: Complex arithmetic (addition, multiplication)
    if (prompt.includes('+') && prompt.includes('i') && prompt.includes('=')) {
        return `function() { const a = GenUtils.randomInt(1, 5); const b = GenUtils.randomInt(1, 5); const c = GenUtils.randomInt(1, 5); const d = GenUtils.randomInt(1, 5); return { prompt: \`(\${a}+\${b}i) + (\${c}+\${d}i) = ?\`, answer: [\`\${a+c}+\${b+d}i\`, \`\${a+c} + \${b+d}i\`], display: \`\${a+c} + \${b+d}i\` }; }`;
    }

    // Type 6: Solve for x (If x + A = B)
    if (prompt.match(/x\s*[\+\-]\s*\d+\s*=\s*\d+/i)) {
        return `function() { const x = GenUtils.randomInt(1, 20); const a = GenUtils.randomInt(1, 10); return { prompt: \`If x + \${a} = \${x + a}, then x = ___\`, answer: [x.toString()], display: x.toString() }; }`;
    }

    // Type 7: Log questions
    if (prompt.includes('log') && prompt.includes('=')) {
        return `function() { const p = GenUtils.randomInt(2, 6); const base = 2; const n = Math.pow(base, p); return { prompt: \`If $\\\\log_\${base}(n) = \${p}$, then n = ___.\`, answer: [n.toString()], display: n.toString() }; }`;
    }

    // Default: Return the same question (conceptual questions that don't vary)
    const safePrompt = prompt.replace(/\\/g, '\\\\').replace(/`/g, '\\`').replace(/\$/g, '\\$');
    const safeDisplay = (display || (Array.isArray(answer) ? answer[0] : answer) || '').replace(/\\/g, '\\\\').replace(/`/g, '\\`').replace(/\$/g, '\\$');

    return `function() { return { prompt: \`${safePrompt}\`, answer: ${JSON.stringify(answer)}, display: \`${safeDisplay}\` }; }`;
}

// Process each day's questions
// This regex finds question objects without generate functions
const dayPattern = /"day(\d+)":\s*\[([^\]]*)\]/gs;

let processedCount = 0;
let skippedCount = 0;

// Find all question objects that don't have generate functions
const questionPattern = /\{\s*"id":\s*(\d+),\s*"topic":\s*"([^"]+)",\s*"prompt":\s*"([^"]+)",\s*"answer":\s*(\[[^\]]+\]),\s*"display":\s*"([^"]+)"\s*\}/g;

let newContent = content;
let match;

while ((match = questionPattern.exec(content)) !== null) {
    const fullMatch = match[0];
    const id = match[1];
    const topic = match[2];
    const prompt = match[3];
    const answerStr = match[4];
    const display = match[5];

    // Skip if already has generate function
    if (content.indexOf(fullMatch + ',') !== -1) {
        // Check if next thing after this object is a generate function
        const afterMatch = content.substring(content.indexOf(fullMatch) + fullMatch.length, content.indexOf(fullMatch) + fullMatch.length + 50);
        if (afterMatch.includes('"generate"') || afterMatch.includes('generate:')) {
            skippedCount++;
            continue;
        }
    }

    // Parse answer array
    let answer;
    try {
        answer = JSON.parse(answerStr);
    } catch (e) {
        answer = [answerStr];
    }

    // Create generate function
    const genFunc = createGenerateFunction({ prompt, answer, display, topic });

    // Create new question object with generate function
    const newQuestion = `{ "id": ${id}, "topic": "${topic}", "prompt": "${prompt}", "answer": ${answerStr}, "display": "${display}", "generate": ${genFunc} }`;

    // Replace in content
    newContent = newContent.replace(fullMatch, () => newQuestion);
    processedCount++;
}

// Write updated content
fs.writeFileSync(questionsPath, newContent);

console.log(`\nProcessed: ${processedCount} questions`);
console.log(`Skipped (already had generate): ${skippedCount} questions`);
console.log(`\nquestions-data.js has been updated!`);
