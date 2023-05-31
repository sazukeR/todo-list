import insertHTML from '../../src/components/insertHTML.js';

describe('Tests in insertHTML()', () => {
  const $liContainer = document.createElement('ul');
  $liContainer.id = 'taskList';
  document.body.appendChild($liContainer);
  localStorage.clear();
  insertHTML([{ id: 'task1', desc: 'task1', selected: false }]);
  const listLength = document.querySelectorAll('li').length;
  const localstorageTasks = JSON.parse(localStorage.getItem('tasks'));
  test('using addTask increases size of li array in DOM by 1', () => {
    expect(listLength).toBe(1);
  });
  test('Tasks array should be saved in localStorage', () => {
    expect(localstorageTasks).toBeTruthy();
  });
});