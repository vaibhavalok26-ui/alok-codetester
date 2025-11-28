// Initialize CodeMirror editors
const htmlEditor = CodeMirror.fromTextArea(document.getElementById('htmlEditor'), {
  mode: 'xml',
  htmlMode: true,
  lineNumbers: true,
  autoCloseTags: true,
  matchBrackets: true
});

const cssEditor = CodeMirror.fromTextArea(document.getElementById('cssEditor'), {
  mode: 'css',
  lineNumbers: true,
  autoCloseBrackets: true
});

const jsEditor = CodeMirror.fromTextArea(document.getElementById('jsEditor'), {
  mode: 'javascript',
  lineNumbers: true,
  autoCloseBrackets: true
});

const runBtn = document.getElementById('runBtn');
const output = document.getElementById('output');
const toggleTheme = document.getElementById('toggleTheme');
const signupBtn = document.getElementById('signupBtn');
const demoBtn = document.getElementById('demoBtn');

// Run code
runBtn.addEventListener('click', () => {
  const html = htmlEditor.getValue();
  const css = `<style>${cssEditor.getValue()}</style>`;
  const js = `<script>${jsEditor.getValue()}<\/script>`;
  output.srcdoc = html + css + js;
});

// Toggle dark/light mode
toggleTheme.addEventListener('click', () => {
  document.body.classList.toggle('dark');
});

// Signup button
signupBtn.addEventListener('click', () => {
  alert("Sign Up feature coming soon! Please enter your email in future updates.");
});

// Demo button - show example code
demoBtn.addEventListener('click', () => {
  htmlEditor.setValue('<h1>Namaste from Alok CodeTester!</h1>');
  cssEditor.setValue('h1 { color: green; text-align: center; margin-top: 50px; }');
  jsEditor.setValue('console.log("Namaste!");');
  runBtn.click(); // Automatically run the demo code
});

// Resizable editor/output panels
const resizer = document.querySelector('.resizer');
const editors = document.querySelector('.editors');
const outputContainer = document.querySelector('.output-container');

let isResizing = false;

resizer.addEventListener('mousedown', (e) => {
  isResizing = true;
  document.body.style.cursor = 'row-resize';
});

document.addEventListener('mousemove', (e) => {
  if (!isResizing) return;
  const containerOffsetTop = editors.parentNode.offsetTop;
  const newEditorHeight = e.clientY - containerOffsetTop;
  const containerHeight = editors.parentNode.clientHeight;
  if (newEditorHeight > 50 && newEditorHeight < containerHeight - 50) {
    editors.style.flex = `0 0 ${newEditorHeight}px`;
    outputContainer.style.flex = `1`;
  }
});

document.addEventListener('mouseup', () => {
  isResizing = false;
  document.body.style.cursor = 'default';
});
