import { Board } from './models/board';
import { Column } from './models/column';

export const boardData = new Board('Test Board', [
  new Column('Ideas', [
    'Some random idea',
    'This is another random idea',
    'build an awesome application',
  ]),
  new Column('Research', [
    'Lorem ipsum',
    'foo',
    "This was in the 'Research' column",
  ]),
  new Column('Todo', [
    'Get to work',
    'Pick up groceries',
    'Go home',
    'Fall asleep',
  ]),
  new Column('Done', [
    'Get up',
    'Brush teeth',
    'Take a shower',
    'Check e-mail',
    'Walk dog',
  ]),
]);
