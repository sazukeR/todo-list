import toggleTask from './tooggleTask.js';
import toggleCheckbox from './tooggleCheckbox.js';

export default function addTask(inputId, listId) {
  const taskInput = document.getElementById(inputId);
  const taskList = document.getElementById(listId);

  if (taskInput.value.trim() !== '') {
    const listItem = document.createElement('li');
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.addEventListener('change', toggleTask);
    const label = document.createElement('label');
    label.textContent = taskInput.value;
    label.addEventListener('click', toggleCheckbox);
    listItem.appendChild(checkbox);
    listItem.appendChild(label);
    taskList.appendChild(listItem);
    taskInput.value = '';
  }
}