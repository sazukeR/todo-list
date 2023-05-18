import addTask from './components/addTask.js';
import handleKeyDown from './components/handleKeyDown.js';
import toggleCheckbox from './components/tooggleCheckbox.js';
import toggleTask from './components/tooggleTask.js';
import './styles.css';

const button = document.getElementById('taskButton');
const taskInput = document.getElementById('taskInput');

const listItem = document.createElement('li');
const checkbox = document.createElement('input');
checkbox.type = 'checkbox';
checkbox.addEventListener('change', toggleTask);
const label = document.createElement('label');
label.textContent = 'Wash the Dog :(';
label.addEventListener('click', toggleCheckbox);
listItem.appendChild(checkbox);
listItem.appendChild(label);
document.querySelector('ol').appendChild(listItem);

button.addEventListener('click', () => addTask('taskInput', 'taskList'));
taskInput.addEventListener('keydown', (e) => handleKeyDown(e));
