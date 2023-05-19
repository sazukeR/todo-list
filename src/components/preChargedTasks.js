import toggleCheckbox from './tooggleCheckbox.js';
import toggleTask from './tooggleTask.js';

const preChargedTask = (t) => {
  const taskList = document.getElementById('taskList');
  const listItem = document.createElement('li');
  const checkbox = document.createElement('input');
  const task = document.createElement('div');
  const buttonOptions = document.createElement('button');
  buttonOptions.innerHTML = '<i class=`fa-solid fa-ellipsis-vertical`></i>';
  checkbox.type = 'checkbox';
  checkbox.addEventListener('change', toggleTask);
  const label = document.createElement('label');
  label.textContent = t;
  label.addEventListener('click', toggleCheckbox);
  task.appendChild(checkbox);
  task.appendChild(label);
  listItem.appendChild(task);
  listItem.appendChild(buttonOptions);
  taskList.appendChild(listItem);
};
export default preChargedTask;