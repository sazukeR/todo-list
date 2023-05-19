import addTask from './addTask.js';

const handleKeyDown = (e) => {
  if (e.keyCode === 13) {
    e.preventDefault();
    addTask('taskInput', 'taskList');
  }
};
export default handleKeyDown;