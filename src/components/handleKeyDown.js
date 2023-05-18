import addTask from './addTask.js';

export default function handleKeyDown(e) {
  if (e.keyCode === 13) {
    e.preventDefault();
    addTask('taskInput', 'taskList');
  }
}