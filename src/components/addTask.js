export const $taskList = document.getElementById('taskList');
let tasks = [];

export function insertHTML(tasks) {
  $taskList.innerHTML = '';
  if (tasks.length > 0) {
    tasks.forEach((task) => {
      const $li = document.createElement('li');
      $li.innerHTML = `<div class="taskInputs">
                          <input type="checkbox" ${task.selected ? 'checked' : ''}>
                          <input class="none" type="text" id="${task.id}" name="${task.id}">
                          <label class="label ${task.selected ? 'completed' : ''}" for="${task.id}">${task.desc}</label>
                        </div>
                        <div class="buttonsContainer">
                          <button class="options-button" type="button"><i class="fa-solid fa-ellipsis-vertical"></i></button>
                          <button class="delete-button none" type="button"><i class="fa-solid fa-trash"></i></button>
                        </div>`;
      $taskList.appendChild($li);
    });
  }
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

const addTask = (input) => {
  if (input.value.trim() !== '') {
    const taskObj = {
      id: `task-${Date.now().toString() + Math.random().toString(36)}`,
      desc: input.value,
      selected: false,
    };
    const tasksLS = JSON.parse(localStorage.getItem('tasks'));
    if (tasksLS.length > 0) {
      tasks = [...tasksLS, taskObj];
    } else {
      tasks = [...tasksLS, taskObj];
    }
    insertHTML(tasks);
    input.value = '';
  }
};

export default addTask;