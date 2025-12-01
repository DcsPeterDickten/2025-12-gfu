import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'books-list',
  imports: [JsonPipe],
  templateUrl: './book-list.html',
  styleUrl: './book-list.css',
})
export class BookList {
   books = [
    {
      isbn: '12345',
      title: 'Angular 19',
      price: 12.99
    },{
      isbn: '12346',
      title: 'Angular 20',
      price: 14.99

    },{
      isbn: '12347',
      title: 'Angular 21',
      price: 19.99
    }
   ];
}
