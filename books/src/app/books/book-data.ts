import { Injectable } from '@angular/core';
import { Book } from './book';

@Injectable({
  providedIn: 'root',
})
export class BookData {

  getBooks(): Book[] {
    return [
      {
        isbn: '12345',
        title: 'Angular 19',
        price: 13.0,
        coverUrl: 'https://m.media-amazon.com/images/I/71Wv+d6oP6L._SY342_.jpg',
        rating: 3.7
      }, {
        isbn: '12346',
        title: 'Angular 20',
        price: 14.99,
        coverUrl: 'https://m.media-amazon.com/images/I/71Wv+d6oP6L._SY342_.jpg',
        rating: 4.1
      }, {
        isbn: '12347',
        title: 'Angular 21',
        price: 20.99,
        coverUrl: 'https://m.media-amazon.com/images/I/71Wv+d6oP6L._SY342_.jpg',
        rating: 4.8
      }
    ]

  }


}
