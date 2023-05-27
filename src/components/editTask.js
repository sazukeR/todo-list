import updateTask from './updateTask.js';

export default function editTask(e) {
  if (e.target.matches('.label')) {
    const oldTaskText = e.target;
    const inputField = e.target.previousElementSibling;
    const buttons = [
      e.target.parentNode.nextElementSibling.firstElementChild,
      e.target.parentNode.nextElementSibling.lastElementChild,
    ];
    const $showButtons = document.querySelectorAll('.buttonsContainer');
    $showButtons.forEach((btn) => {
      btn.firstChild.nextElementSibling.classList.remove('none');
      btn.lastChild.previousElementSibling.classList.add('none');
      btn.parentElement.classList.remove('backgroundEdit');
    });
    oldTaskText.classList.add('none');
    inputField.classList.remove('none');
    buttons[0].classList.add('none');
    buttons[1].classList.remove('none');
    e.target.parentElement.parentElement.classList.add('backgroundEdit');
    inputField.value = oldTaskText.textContent;
    inputField.focus();

    inputField.addEventListener('keydown', (e) => {
      if (e.keyCode === 13) updateTask(e);
    });

    inputField.addEventListener('blur', (e) => {
      if (e.relatedTarget && e.relatedTarget.matches('.delete-button')) return;
      if (inputField.value.trim() === '') inputField.value = oldTaskText.textContent;
      updateTask(e);
    });
  }
}