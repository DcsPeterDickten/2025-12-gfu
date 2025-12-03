import { AsyncPipe, CurrencyPipe } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Rating } from '../../shared/rating/rating';
import { Book } from '../book';
import { BookData } from '../book-data';
import { BookFilterPipe } from '../book-filter-pipe';

@Component({
  selector: 'books-list',
  imports: [FormsModule, CurrencyPipe, BookFilterPipe, Rating],
  templateUrl: './book-list.html',
  styleUrl: './book-list.css',
  changeDetection: ChangeDetectionStrategy.OnPush
  //styleUrls: ['./book-list.css'],
  //styles: ['div {background-color: green}']
})
export class BookList implements OnInit, OnChanges, OnDestroy {

  books: Array<Book> = [];
  coverIsVisible: boolean = true;
  filterValue: string = '';

  // ---- 

  constructor(private myBookService: BookData, private ref: ChangeDetectorRef) {
    console.log('BookList - constructor');
  }

  async ngOnInit() {
    console.log('BookList - ngOnInit');
    this.books = await this.myBookService.getBooks();
    this.ref.markForCheck();
  }

  ngOnDestroy() {
    console.log('BookList - ngOnDestroy');
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('BookList - ngOnChanges', changes);
  }

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
