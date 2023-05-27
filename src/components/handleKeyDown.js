import addTask from './addTask.js';

const handleKeyDown = (e) => {
  if (e.keyCode === 13) {
    e.preventDefault();
    addTask(e.target);
  }
};
export default handleKeyDown;