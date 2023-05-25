function updateTask(e) {
  if (e.target.value.trim() !== '') {
    const buttons = [
      e.target.parentNode.nextElementSibling.firstElementChild,
      e.target.parentNode.nextElementSibling.lastElementChild,
    ];
    const inputField = e.target;
    const taskUpdated = inputField.nextElementSibling;
    taskUpdated.classList.remove('none');
    inputField.classList.add('none');
    if (e.type !== 'blur') {
      buttons[0].classList.toggle('none');
      buttons[1].classList.toggle('none');
    }
    taskUpdated.textContent = inputField.value;
    const taskList = JSON.parse(localStorage.getItem('tasks'));
    const taskId = inputField.id;
    const updatedTaskList = taskList.map((task) => {
      if (task.id === taskId) {
        return { ...task, desc: inputField.value };
      }
      return task;
    });
    localStorage.setItem('tasks', JSON.stringify(updatedTaskList));
  }
}
export default updateTask;