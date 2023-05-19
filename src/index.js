import handleKeyDown from './components/handleKeyDown.js';
import preChargedTask from './components/preChargedTasks.js';
import './styles.css';

preChargedTask('wash the dog');
preChargedTask('Complete To Do list project');
preChargedTask('fix card');
const taskInput = document.getElementById('taskInput');
taskInput.addEventListener('keydown', (e) => handleKeyDown(e));
