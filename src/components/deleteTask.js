const deleteTask = () => {
  document.addEventListener('click', (e) => {
    if (e.target.matches('.clear-button') || e.target.matches('.clear-button *')) {
      const $tasksSelected = document.querySelectorAll('li');
      const tasks = JSON.parse(localStorage.getItem('tasks'));
      const taskUpdated = tasks.filter((task) => !task.selected);
      localStorage.setItem('tasks', JSON.stringify(taskUpdated));
      $tasksSelected.forEach((li) => {
        const checkbox = li.querySelector('input[type="checkbox"]');
        if (checkbox.checked) {
          li.remove();
        }
      });
    }
    if (e.target.matches('.delete-button') || e.target.matches('.delete-button *')) {
      const taskSelectedId = e.target.closest('li').firstElementChild.children[1].id;
      const tasks = JSON.parse(localStorage.getItem('tasks'));
      const taskUpdated = tasks.filter((task) => task.id !== taskSelectedId);
      localStorage.setItem('tasks', JSON.stringify(taskUpdated));
      document.getElementById(taskSelectedId).closest('li').remove();
    }
  });
};
export default deleteTask;