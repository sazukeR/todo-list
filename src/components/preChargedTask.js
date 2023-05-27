import { insertHTML } from './addTask.js';
import deleteTask from './deleteTask.js';
import toggleTask from './tooggleTask.js';

export default function preChargedTask() {
  document.addEventListener('DOMContentLoaded', () => {
    const preTasks = [
      {
        id: 'task1',
        desc: 'wash the dogs',
        selected: false,
      },
      {
        id: 'task2',
        desc: 'fix car',
        selected: false,
      },
      {
        id: 'task3',
        desc: 'complete to do list',
        selected: false,
      },
    ];
    const tasks = JSON.parse(localStorage.getItem('tasks')) || preTasks;
    if (tasks != null) insertHTML(tasks);
  });
  deleteTask();
  toggleTask();
}