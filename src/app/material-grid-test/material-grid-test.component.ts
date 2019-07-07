import { Component } from '@angular/core';

@Component({
  selector: 'app-material-grid-test',
  templateUrl: './material-grid-test.component.html',
  styleUrls: ['./material-grid-test.component.scss']
})
export class MaterialGridTestComponent {
  tiles = [
    {cols: 1, rows: 1, color: this.generateColor()},
    {cols: 1, rows: 1, color: this.generateColor()},
    {cols: 1, rows: 1, color: this.generateColor()},
    {cols: 1, rows: 1, color: this.generateColor()},
    {cols: 1, rows: 1, color: this.generateColor()},
    {cols: 1, rows: 1, color: this.generateColor()}
  ];

  generateColorNum(): number {
    return Math.floor(Math.random() * 255) + 1;
  }

  generateColor(): string {
    return `rgb(${this.generateColorNum()},${this.generateColorNum()},${this.generateColorNum()})`;
  }
}
