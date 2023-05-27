class TodoList {
  constructor() {
    this.preTasks = [
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
    this.tasks = JSON.parse(localStorage.getItem('tasks')) || [...this.preTasks];
    this.$clearButton = document.querySelector('.clear-button');
    this.$inputEntryTask = document.getElementById('taskInput');
    document.addEventListener('change', (e) => {
      if (e.target.matches('#taskInput')) this.addTask({ id: Date.now(), desc: e.target.value, selected: false });
      if (e.target.matches('input[type="checkbox"]')) this.updateCheckbox();
    });
    this.editTask();
  }

  updateCheckbox() {
    this.checks = document.querySelectorAll('input[type="checkbox"]');
    this.tasks.forEach((task, inx) => {
      const input = this.checks[inx];
      task.selected = input.checked;
      this.updateLocalStorage();
    });
  }

  addTask(task) {
    if (task === '') return;
    this.tasks.push(task);
    this.updateLocalStorage();
    this.$inputEntryTask.value = '';
  }

  editTask() {
    document.addEventListener('click', (e) => {
      if (e.target.matches('.clear-button')) {
        this.tasks = this.tasks.filter((task) => !task.selected);
        this.updateLocalStorage();
      }
      if (e.target.matches('label')) {
        const $input = e.target.previousElementSibling;
        const $label = e.target;
        const $deleteBtn = e.target.parentElement.nextElementSibling.lastElementChild;
        const $optionsBtn = e.target.parentElement.nextElementSibling.firstElementChild;
        $input.value = $label.textContent;
        $input.classList.remove('none');
        $label.classList.add('none');
        $deleteBtn.classList.remove('none');
        $optionsBtn.classList.add('none');
        $input.addEventListener('keydown', (e) => {
          if (e.keyCode === 13) {
            this.tasks = this.tasks.map((task) => {
              if (parseInt(task.id, 10) === parseInt($input.id, 10)) {
                return { ...task, desc: $input.value };
              }
              return task;
            });
            this.updateLocalStorage();
          }
        });
        $input.addEventListener('blur', (e) => {
          if (e.relatedTarget && e.relatedTarget.matches('.delete-button')) {
            this.tasks = this.tasks.filter((task) => {
              if (parseInt(task.id, 10) !== parseInt($input.id, 10)) {
                return { ...task };
              }
              return false;
            });
            this.updateLocalStorage();
          }
          if ($input.value.trim() === '') {
            $input.value = $label.textContent;
          }
          this.tasks = this.tasks.map((task) => {
            if (parseInt(task.id, 10) === parseInt($input.id, 10)) {
              return { ...task, desc: $input.value };
            }
            return task;
          });
          this.updateLocalStorage();
        });
      }
    });
  }

  updateLocalStorage() {
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
    this.renderTasks();
  }

  renderTasks() {
    const taskList = document.getElementById('taskList');
    taskList.innerHTML = '';
    this.tasks.forEach((task) => {
      const taskElement = document.createElement('li');
      taskElement.innerHTML = `<div class="taskInputs">
                                   <input type="checkbox" ${task.selected ? 'checked' : ''}>
                                   <input class="none" type="text" id="${task.id}" name="${task.id}">
                                   <label class="label ${task.selected ? 'completed' : ''}" for="${task.id}" ${task.selected ? 'checked' : ''}>${task.desc}</label>
                               </div>
                               <div class="buttonsContainer">
                                   <button class="options-button" type="button"><i class="fa-solid fa-ellipsis-vertical"></i></button>
                                   <button class="delete-button none" type="button"><i class="fa-solid fa-trash"></i></button>
                              </div>`;

      taskList.appendChild(taskElement);
    });
  }
}
export default TodoList;
