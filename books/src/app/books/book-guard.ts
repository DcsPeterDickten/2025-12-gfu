import { CanActivateFn } from '@angular/router';

export const bookGuard: CanActivateFn = (route, state) => {
  const isbn = route.paramMap.get('isbn');
  const erlaubt = isbn && isbn !== '12347';
  return erlaubt || false;
};
