import { Injectable } from '@angular/core';
import { Book } from './book';
import { environment } from '../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BookData {

  constructor(private httpClient: HttpClient) {
  }

  async getBooks(): Promise<Book[]> {
    const URL = environment.SERVER_URL + '/books';
    const response = await fetch(URL, { method: 'GET' });
    const books = await response.json() as Book[];
    return books;
  }


  async getBookWithHttpClient(): Promise<Book[]> {
    const URL = environment.SERVER_URL + '/books';
    const observableBooks = this.httpClient.get<Book[]>(URL);
    const promiseBooks = firstValueFrom(observableBooks);
    return promiseBooks;
  }



  getBook(isbn: string) {
    const URL = environment.SERVER_URL + '/books/' + isbn;
  }

}
