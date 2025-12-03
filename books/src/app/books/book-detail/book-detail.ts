import { ChangeDetectionStrategy, ChangeDetectorRef, Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BookData } from '../book-data';
import { Book } from '../book';
import { JsonPipe } from '@angular/common';

@Component({
  imports: [],
  templateUrl: './book-detail.html',
  styleUrl: './book-detail.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BookDetail implements OnInit {

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private bookData: BookData,
    private changeDetectionRef: ChangeDetectorRef
  ) { }

  // changeDetectionRef: ChangeDetectorRef = inject(ChangeDetectorRef)

  book: Book | null = null;

  async ngOnInit(): Promise<void> {
    const isbn = this.route.snapshot.paramMap.get('isbn');
    if (!isbn) {
      alert('ISBN fehlt');
      return;
    }
    try {
      this.book = await this.bookData.getBook(isbn);
      this.changeDetectionRef.markForCheck();
    } catch (error) {
      console.error(error);
    }
  }

  zurListe() {
    this.router.navigateByUrl('/books');
  }

}
