import { Routes } from '@angular/router';
import { BookList } from './books/book-list/book-list';
import { Welcome } from './books/welcome/welcome';
import { BookDetail } from './books/book-detail/book-detail';
import { Calculator } from './shared/calculator/calculator';

export const routes: Routes = [
    { path: '', component: Welcome, pathMatch: 'full' },
    { path: 'welcome', component: Welcome },
    { path: 'books', component: BookList },
    { path: 'book/:isbn', component: BookDetail },
    { path: 'taschenrechner', component: Calculator },
    { path: '**', redirectTo: '/' },
];
