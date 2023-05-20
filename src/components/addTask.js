import toggleTask from './tooggleTask.js';
import toggleCheckbox from './tooggleCheckbox.js';

const addTask = (inputId, listId) => {
  const taskInput = document.getElementById(inputId);
  const taskList = document.getElementById(listId);

  if (taskInput.value.trim() !== '') {
    const listItem = document.createElement('li');
    const checkbox = document.createElement('input');
    const task = document.createElement('div');
    const buttonOptions = document.createElement('button');
    buttonOptions.innerHTML = '<i class="fa-solid fa-ellipsis-vertical"></i>';
    checkbox.type = 'checkbox';
    checkbox.addEventListener('change', toggleTask);
    const label = document.createElement('label');
    label.textContent = taskInput.value;
    label.addEventListener('click', toggleCheckbox);
    task.append(checkbox);
    task.append(label);
    listItem.append(task);
    listItem.append(buttonOptions);
    taskList.append(listItem);
    taskInput.value = '';
  }
};
export default addTask;