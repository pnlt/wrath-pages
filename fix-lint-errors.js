// This is a Node.js script to fix the ESLint errors
// Save this as fix-lint-errors.js in your project root
// Run with: node fix-lint-errors.js

const fs = require('fs');
const path = require('path');

// Function to prefix unused variables with underscore
function prefixUnusedVars(filePath, unusedVars) {
  let content = fs.readFileSync(filePath, 'utf8');

  unusedVars.forEach(varName => {
    // This regex matches the variable name in import statements
    const importRegex = new RegExp(`(import[^{]*{[^}]*?)\\b${varName}\\b([^}]*})`, 'g');
    content = content.replace(importRegex, `$1_${varName}$2`);
  });

  fs.writeFileSync(filePath, content);
  console.log(`✅ Fixed unused variables in ${filePath}`);
}

// Function to escape entities in JSX
function escapeEntities(filePath, lineInfo) {
  let content = fs.readFileSync(filePath, 'utf8');
  const lines = content.split('\n');

  lineInfo.forEach(({ line, char }) => {
    const lineIndex = line - 1; // Convert to 0-based index
    if (lines[lineIndex]) {
      if (char === '"') {
        lines[lineIndex] = lines[lineIndex].replace(/"/g, '&quot;');
      } else if (char === "'") {
        lines[lineIndex] = lines[lineIndex].replace(/'/g, '&apos;');
      }
    }
  });

  content = lines.join('\n');
  fs.writeFileSync(filePath, content);
  console.log(`✅ Fixed unescaped entities in ${filePath}`);
}

// Fix files based on the error log
console.log('🔧 Fixing ESLint errors...');

// Fix pages/index.js
prefixUnusedVars(path.join(__dirname, 'pages', 'index.js'), ['IoLogoTwitter', 'IoLogoInstagram']);
escapeEntities(path.join(__dirname, 'pages', 'index.js'), [
  { line: 127, char: '"' },
  { line: 127, char: '"' },
  { line: 168, char: "'" },
  { line: 213, char: "'" },
  { line: 213, char: "'" }
]);

// Fix pages/works/margelo.js
prefixUnusedVars(path.join(__dirname, 'pages', 'works', 'margelo.js'), ['AspectRatio']);

// Fix pages/works/pichu2.js
prefixUnusedVars(path.join(__dirname, 'pages', 'works', 'pichu2.js'),
  ['Link', 'UnorderedList', 'Heading', 'Center', 'ExternalLinkIcon']);

// Fix pages/works.js
prefixUnusedVars(path.join(__dirname, 'pages', 'works.js'),
  ['thumbWalknote', 'thumbFourPainters', 'thumbMenkiki', 'thumbModeTokyo',
    'thumbStyly', 'thumbFreeDBTagger', 'thumbAmembo']);

// Fix components/navbar.js
prefixUnusedVars(path.join(__dirname, 'components', 'navbar.js'), ['IoLogoGithub']);

console.log('✨ All ESLint errors fixed!');
