import { CustomFilterPipe } from './custom-filter.pipe';
import { MovieModel } from '../models/movie.model';

describe('CustomFilterPipe', () => {
  let pipe: CustomFilterPipe;

  beforeEach(() => {
    pipe = new CustomFilterPipe();
  });

  it('should filter movies by title', () => {
    const movies: MovieModel[] = [
      { title: 'Harry Potter and the Philosopher\'s Stone', release_date: '2001-11-16', budget: '0', duration: '0', id: '0' },
      { title: 'Harry Potter and the Chamber of Secrets', release_date: '2002-11-15', budget: '0', duration: '0', id: '0' },
      { title: 'Harry Potter and the Prisoner of Azkaban', release_date: '2004-06-04', budget: '0', duration: '0', id: '0' },
    ];

    const filteredMovies = pipe.transform(movies, 'chamber', '');

    expect(filteredMovies.length).toBe(1);
    expect(filteredMovies[0].title).toBe('Harry Potter and the Chamber of Secrets');
  });

  it('should filter movies by release year', () => {
    const movies: MovieModel[] = [
      { title: 'Harry Potter and the Philosopher\'s Stone', release_date: '2001-11-16', budget: '0', duration: '0', id: '0' },
      { title: 'Harry Potter and the Chamber of Secrets', release_date: '2002-11-15', budget: '0', duration: '0', id: '0' },
      { title: 'Harry Potter and the Prisoner of Azkaban', release_date: '2004-06-04', budget: '0', duration: '0', id: '0' },
    ];

    const filteredMovies = pipe.transform(movies, '', '2002');

    expect(filteredMovies.length).toBe(1);
    expect(filteredMovies[0].title).toBe('Harry Potter and the Chamber of Secrets');
  });

  it('should filter movies by title and release year', () => {
    const movies: MovieModel[] = [
      { title: 'Harry Potter and the Philosopher\'s Stone', release_date: '2001-11-16', budget: '0', duration: '0', id: '0' },
      { title: 'Harry Potter and the Chamber of Secrets', release_date: '2002-11-15', budget: '0', duration: '0', id: '0' },
      { title: 'Harry Potter and the Prisoner of Azkaban', release_date: '2004-06-04', budget: '0', duration: '0', id: '0' },
    ];

    const filteredMovies = pipe.transform(movies, 'potter', '2001');

    expect(filteredMovies.length).toBe(1);
    expect(filteredMovies[0].title).toBe('Harry Potter and the Philosopher\'s Stone');
  });

  it('should return all movies if no filters are provided', () => {
    const movies: MovieModel[] = [
      { title: 'Harry Potter and the Philosopher\'s Stone', release_date: '2001-11-16', budget: '0', duration: '0', id: '0' },
      { title: 'Harry Potter and the Chamber of Secrets', release_date: '2002-11-15', budget: '0', duration: '0', id: '0' },
      { title: 'Harry Potter and the Prisoner of Azkaban', release_date: '2004-06-04', budget: '0', duration: '0', id: '0' },
    ];

    const filteredMovies = pipe.transform(movies);

    expect(filteredMovies.length).toBe(3);
    expect(filteredMovies).toEqual(movies);
  });
});
