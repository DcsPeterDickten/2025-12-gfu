import { Pipe, PipeTransform } from '@angular/core';
import { Book } from './book';

@Pipe({
  name: 'bookFilter',
})
export class BookFilterPipe implements PipeTransform {

  // (books | bookFilter : filterValue)

  transform(books: Book[], filterValue: string = ''): Book[] {

    if (filterValue === '') {
      return books;
    }

    filterValue = filterValue.toLocaleLowerCase();

    return books.filter((book) =>
      book.title.toLocaleLowerCase().includes(filterValue)
    );
  }

}
