export default function toggleTask() {
  document.addEventListener('change', (e) => {
    if (e.target.matches('input[type="checkbox"]')) {
      const taskList = JSON.parse(localStorage.getItem('tasks'));
      const taskId = e.target.nextElementSibling.id;
      const label = e.target.nextElementSibling.nextElementSibling;
      if (e.target.checked) {
        label.classList.add('completed');
      } else {
        label.classList.remove('completed');
      }
      const updatedTaskList = taskList.map((task) => {
        if (task.id === taskId) {
          return { ...task, selected: e.target.checked };
        }
        return task;
      });
      localStorage.setItem('tasks', JSON.stringify(updatedTaskList));
    }
  });
}