import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-kb-card',
  templateUrl: './kb-card.component.html',
  styleUrls: ['./kb-card.component.scss'],
})
export class KbCardComponent implements OnInit {
  @Input() task!: string;

  constructor() {}

  ngOnInit(): void {}
}
