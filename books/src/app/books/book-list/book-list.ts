import { Component } from '@angular/core';

@Component({
  selector: 'books-list',
  imports: [],
  templateUrl: './book-list.html',
  styleUrl: './book-list.css',
})
export class BookList {

  books = [
    {
      isbn: '12345',
      title: 'Angular 19',
      price: 13.49,
      coverUrl: 'https://m.media-amazon.com/images/I/71Wv+d6oP6L._SY342_.jpg'

    }, {
      isbn: '12346',
      title: 'Angular 20',
      price: 14.99,
      coverUrl: 'https://m.media-amazon.com/images/I/71Wv+d6oP6L._SY342_.jpg'

    }, {
      isbn: '12347',
      title: 'Angular 21',
      price: 20.99,
      coverUrl: 'https://m.media-amazon.com/images/I/71Wv+d6oP6L._SY342_.jpg'
    }
  ];

  coverIsVisible: boolean = true;

  // ---- 

  toggleCover() {
    this.coverIsVisible = !this.coverIsVisible;
  }

}
