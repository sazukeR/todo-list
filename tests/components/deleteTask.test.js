import deleteTask from '../../src/components/deleteTask.js';

describe('Tests in deleteTask()', () => {
  test('using removeTask removes exactly 1 task from the DOM', () => {
    const $liContainer = document.createElement('ul');
    $liContainer.id = 'taskList';
    document.body.appendChild($liContainer);
    const $li = document.createElement('li');
    $li.innerHTML = `<div class="taskInputs">
                       <input type="checkbox">
                       <input class="none" type="text" id="task1">
                       <label class="label" for="task1">some text</label>
                     </div>
                     <div class="buttonsContainer">
                       <button class="options-button" type="button"><i class="fa-solid fa-ellipsis-vertical"></i></button>
                       <button class="delete-button" type="button"><i class="fa-solid fa-trash"></i></button>
                     </div>`;
    $liContainer.appendChild($li);
    const $buttonDelete = document.querySelector('.delete-button');
    const tasksLS = JSON.stringify([{ id: 'task1', desc: 'some text', selected: false }]);
    localStorage.setItem('tasks', tasksLS);
    deleteTask();
    $buttonDelete.click();
    const $taskDeleted = document.getElementById('task1');

    expect($taskDeleted).toBeFalsy();
  });
});