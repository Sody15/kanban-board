import { Column } from './models/column';
import { Component } from '@angular/core';

import { boardData } from './boardData';
import { Board } from './models/board';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  board: Board = boardData;

  boardName: string = 'Board Name';
  // sections = KanbanList;
  // kanbanItems!: KanbanItem[];
}
