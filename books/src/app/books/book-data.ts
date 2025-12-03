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

  async getBook(isbn: string): Promise<Book | null> {
    const URL = environment.SERVER_URL + '/books/' + isbn;
    const response = await fetch(URL, { method: 'GET' });
    console.log({ response });
    if (response.status === 404) {
      return null;
    }
    const book = await response.json() as Book;
    return book;
  }

  async createBook(neuesBuch: Book): Promise<any> {
    const URL = environment.SERVER_URL + '/books';
    const response = await fetch(URL, { method: 'POST', body: JSON.stringify(neuesBuch) });
    const result = await response.json() as any;
    return result;
  }


}
