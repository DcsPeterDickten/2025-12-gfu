import { CurrencyPipe } from '@angular/common';
import { Component, OnChanges, OnDestroy, OnInit, SimpleChanges, ViewEncapsulation } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Book } from '../book';
import { BookFilterPipe } from '../book-filter-pipe';
import { Rating } from '../../shared/rating/rating';

@Component({
  selector: 'books-list',
  imports: [FormsModule, CurrencyPipe, BookFilterPipe, Rating],
  templateUrl: './book-list.html',
  styleUrl: './book-list.css',
  //styleUrls: ['./book-list.css'],
  //styles: ['div {background-color: green}']
})
export class BookList implements OnInit, OnChanges, OnDestroy {

  /// variable = new BookList();

  constructor() {
    console.log('BookList - constructor');
  }

  ngOnInit() {
    console.log('BookList - ngOnInit');
  }

  ngOnDestroy() {
    console.log('BookList - ngOnDestroy');
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('BookList - ngOnChanges', changes);
  }

  books: Array<Book> = [
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
  ];

  coverIsVisible: boolean = true;
  filterValue: string = '';

  // ---- 

  toggleCover() {
    this.coverIsVisible = !this.coverIsVisible;
  }

  ratingPlus(isbn: string) {
    console.log('booklist - plus was clicked on ' + isbn);
    const book = this.books.find((book) => book.isbn === isbn);
    if (book) {
      book.rating = this.changeRating(book.rating, 0.1);
    }
  }

  ratingMinus(isbn: string) {
    console.log('booklist - minus was clicked on ' + isbn);
    const book = this.books.find((book) => book.isbn === isbn);
    if (book) {
      book.rating = this.changeRating(book.rating, -0.1);
    }
  }

  changeRating(currentRating: number, delta: number) {
    return Math.max(1, Math.min(5, currentRating + delta));
  }

}
