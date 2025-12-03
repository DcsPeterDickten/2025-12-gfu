import { BookFilterPipe } from './book-filter-pipe';

describe('BookFilterPipe', () => {

  let buecherListe = [
    {
      "isbn": "12345",
      "title": "Angular 19",
      "price": 13,
      "coverUrl": "https://m.media-amazon.com/images/I/71Wv+d6oP6L._SY342_.jpg",
      "rating": 3.7
    },
    {
      "isbn": "12346",
      "title": "Angular 20",
      "price": 14.99,
      "coverUrl": "https://m.media-amazon.com/images/I/71Wv+d6oP6L._SY342_.jpg",
      "rating": 4.1
    },
    {
      "isbn": "12347",
      "title": "Angular 21",
      "price": 20.99,
      "coverUrl": "https://m.media-amazon.com/images/I/71Wv+d6oP6L._SY342_.jpg",
      "rating": 4.8
    }
  ];

  let pipe = new BookFilterPipe();

  beforeEach(() => {
    pipe = new BookFilterPipe();
  })

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('works with an empty book array', () => {
    const gefilterteListe = pipe.transform([], 'bla');
    expect(gefilterteListe.length).toBe(0);
  });

  it('works with an single match', () => {
    const gefilterteListe = pipe.transform(buecherListe, '19');
    expect(gefilterteListe.length).toBe(1);
    expect(gefilterteListe[0].isbn).toBe('12345');
  });

  it('ignores upper/lowercase', () => {
    const gefilterteListe = pipe.transform(buecherListe, 'ANGUlar');
    expect(gefilterteListe.length).toBe(buecherListe.length);
  });


});

/// Arrange, Action, Assert 