import insertHTML from './insertHTML.js';

let tasks = [];

const addTask = (input) => {
  if (input.value.trim() !== '') {
    const taskObj = {
      id: `task-${Date.now().toString() + Math.random().toString(36)}`,
      desc: input.value,
      selected: false,
    };
    const tasksLS = JSON.parse(localStorage.getItem('tasks'));
    tasks = [...tasksLS, taskObj];
    input.value = '';
    insertHTML(tasks);
  }
};

export default addTask;