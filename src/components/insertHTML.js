export default function insertHTML(tasks) {
  const $taskList = document.getElementById('taskList');
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