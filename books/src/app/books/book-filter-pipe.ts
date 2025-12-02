import { Pipe, PipeTransform } from '@angular/core';
import { Book } from './book';
import { filter } from 'rxjs';

@Pipe({
  name: 'bookFilter',
})
export class BookFilterPipe implements PipeTransform {

  // (books | bookFilter : filterValue)

  transform(books: Book[], filterValue: string = ''): unknown {

    if (filterValue === '') {
      return books;
    }

    filterValue = filterValue.toLocaleLowerCase();

    return books.filter((book) =>
      book.title.toLocaleLowerCase().includes(filterValue)
    );
  }

}
