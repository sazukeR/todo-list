import addTask from '../../src/components/addTask.js';
import insertHTML from '../../src/components/insertHTML.js';

jest.mock('../../src/components/insertHTML.js');

beforeEach(() => {
  localStorage.clear(); // Limpiar el localStorage antes de cada prueba
  insertHTML.mockClear();
});

describe('Tests in addTask()', () => {
  test('Empty description does not add anything to DOM', () => {
    const input = { value: '' };
    addTask(input);
    expect(insertHTML).not.toHaveBeenCalled();
  });
  test('using addTask function adds an element to DOM with given description', () => {
    const input = { value: 'Task 1' };
    const tasksLS = JSON.stringify([{ id: '1', desc: `${input.value}`, selected: false }]);
    localStorage.setItem('tasks', tasksLS);
    addTask(input);
    expect(insertHTML).toHaveBeenCalled();
  });
});