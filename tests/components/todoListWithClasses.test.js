import TodoList from '../../src/components/todoListWithClasses.js';

describe('Tests in TodoList class', () => {
  test('pre-charged tasks must be exist', () => {
    const todoList = new TodoList();
    const testPreTasks = [
      {
        id: 111,
        desc: 'wash the dogs',
        selected: false,
      },
      {
        id: 222,
        desc: 'fix car',
        selected: false,
      },
      {
        id: 333,
        desc: 'complete to do list',
        selected: false,
      },
    ];

    expect(todoList.preTasks).toEqual(testPreTasks);
  });
  test('using addTask function adds an element to DOM with given description', () => {
    const $input = document.createElement('input');
    $input.type = 'text';
    $input.id = 'taskInput';
    $input.value = 'another task';
    document.body.appendChild($input);
    const todoList = new TodoList();
    todoList.tasks = [];
    const task = { id: 555, desc: $input.value, selected: false };
    const updateLocalStorageMOCK = jest.fn();
    todoList.updateLocalStorage = updateLocalStorageMOCK;
    todoList.addTask(task);

    expect(todoList.tasks.length).toBe(1);
    expect(updateLocalStorageMOCK).toHaveBeenCalled();
  });
  test('If the input is empty dont add a task', () => {
    const $input = document.createElement('input');
    $input.type = 'text';
    $input.id = 'taskInput';
    $input.value = '';
    document.body.appendChild($input);

    const todoList = new TodoList();
    todoList.tasks = [];
    const task = { id: 555, desc: $input.value, selected: false };
    const updateLocalStorageMOCK = jest.fn();
    todoList.updateLocalStorage = updateLocalStorageMOCK;
    todoList.addTask(task);

    expect(todoList.tasks.length).toBe(0);
    expect(updateLocalStorageMOCK).not.toHaveBeenCalled();
  });

  test('using removeTask removes exactly 1 task from the DOM', () => {
    const $liContainer = document.createElement('ul');
    $liContainer.id = 'taskList';
    document.body.appendChild($liContainer);
    const $li = document.createElement('li');
    $li.innerHTML = `<div class="taskInputs">
                      <input type="checkbox">
                      <input class="none" type="text" id="888">
                      <label class="label" for="888">some text</label>
                    </div>
                    <div class="buttonsContainer">
                      <button class="options-button none" type="button"><i class="fa-solid fa-ellipsis-vertical"></i></button>
                      <button class="delete-button" type="button"><i class="fa-solid fa-trash"></i></button>
                    </div>`;
    $liContainer.appendChild($li);
    const todoList = new TodoList();
    todoList.tasks = [{ id: 888, desc: 'some text', selected: false }];
    const updateLocalStorageMOCK = jest.fn();
    todoList.updateLocalStorage = updateLocalStorageMOCK;

    todoList.editTask();
    const label = document.querySelector('.label');
    label.click();
    const input = document.getElementById('888');
    const deleteButton = document.querySelector('.delete-button');
    const blurEvent = new FocusEvent('blur', { relatedTarget: deleteButton });
    input.dispatchEvent(blurEvent);

    expect(todoList.tasks).toEqual([]);
    expect(updateLocalStorageMOCK).toHaveBeenCalledTimes(4);
  });
});