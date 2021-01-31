import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-color-bar',
  templateUrl: './color-bar.component.html',
  styleUrls: ['./color-bar.component.css'],
})
export class ColorBarComponent implements OnInit {
  @Input() color: string = '';
  @Output() onColorSelected = new EventEmitter<string>();

  constructor() {}

  ngOnInit(): void {}

  onColorClicked() {
    this.onColorSelected.emit(this.color);
  }
}
