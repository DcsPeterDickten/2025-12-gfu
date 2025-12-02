import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'rating',
  imports: [],
  templateUrl: './rating.html',
  styleUrl: './rating.css',
})
export class Rating implements OnChanges {

  @Input()
  stars: number = 0;

  @Input()
  id: string = '-';

  @Output()
  plusWasClicked: EventEmitter<string> = new EventEmitter<string>()

  @Output()
  minusWasClicked: EventEmitter<string> = new EventEmitter<string>()

  ngOnChanges(changes: SimpleChanges): void {
    console.log('rating', { changes })
  }

  ngOnInit() {
    console.log('rating - oninit');
  }

  plus() {
    console.log(this.id, 'rating - plus was clicked');
    this.plusWasClicked.emit(this.id);
  }

  minus() {
    console.log(this.id, 'rating - minus was clicked');
    this.minusWasClicked.emit(this.id);
  }
}
