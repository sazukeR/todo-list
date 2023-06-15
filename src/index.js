import TodoList from './components/todoListWithClasses.js';
import './styles.css';

/* import editTask from './components/editTask.js';
import preChargedTask from './components/preChargedTask.js';
import handleKeyDown from './components/handleKeyDown.js';

preChargedTask();
const taskInput = document.getElementById('taskInput');
taskInput.addEventListener('keydown', (e) => handleKeyDown(e));
document.addEventListener('click', (e) => editTask(e));
 */

const todoList = new TodoList();
todoList.renderTasks();