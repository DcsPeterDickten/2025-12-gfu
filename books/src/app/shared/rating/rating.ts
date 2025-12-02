import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'rating',
  imports: [],
  templateUrl: './rating.html',
  styleUrl: './rating.css',
})
export class Rating {

  @Input()
  stars: number = 0;

  @Input()
  id: string = '-';

  @Output()
  plusWasClicked: EventEmitter<string> = new EventEmitter<string>()

  @Output()
  minusWasClicked: EventEmitter<string> = new EventEmitter<string>()

  plus() {
    console.log(this.id, 'rating - plus was clicked');
    this.plusWasClicked.emit(this.id);
  }

  minus() {
    console.log(this.id, 'rating - minus was clicked');
    this.minusWasClicked.emit(this.id);
  }
}
