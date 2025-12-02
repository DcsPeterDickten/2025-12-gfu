import { CurrencyPipe } from '@angular/common';
import { Component, ViewEncapsulation } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Book } from '../book';

@Component({
  selector: 'books-list',
  imports: [FormsModule, CurrencyPipe],
  templateUrl: './book-list.html',
  styleUrl: './book-list.css',
  //styleUrls: ['./book-list.css'],
  //styles: ['div {background-color: green}']
})
export class BookList {

  books: Array<Book> = [
    {
      isbn: '12345',
      title: 'Angular 19',
      price: 13.0,
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
  filterValue: string = '';

  // ---- 

  toggleCover() {
    this.coverIsVisible = !this.coverIsVisible;
  }

}
