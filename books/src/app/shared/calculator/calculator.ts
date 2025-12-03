import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  imports: [FormsModule],
  templateUrl: './calculator.html',
  styleUrl: './calculator.css',
})
export class Calculator {

  x = 0;
  y = 0;
  result = 0;

  add() {
    this.result = this.x + this.y;
  }

  subtract() {
    this.result = this.x - this.y;
  }

  clear() {
    this.x = 0;
    this.y = 0;
    this.result = 0;
  }
}
