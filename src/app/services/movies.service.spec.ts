import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { MoviesService } from './movies.service';
import { MovieDetailsModel } from '../shared/models/movie-details.model';
import { MovieModel } from '../shared/models/movie.model';

describe('MoviesService', () => {
  let service: MoviesService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [MoviesService]
    });
    service = TestBed.inject(MoviesService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should retrieve movie details', () => {
    const movieId = '123';
    const expectedMovieDetails: MovieDetailsModel = {
      id: '123',
      title: 'Sample Movie',
      duration: '120',
      budget: '1000000',
      release_date: '2022-01-01',
      box_office: '1000000',
      cinematographers: ['John Doe'],
      poster: 'https://example.com/poster.jpg',
      producers: ['Jane Smith'],
      summary: 'Lorem ipsum dolor sit amet.',
    };

    service.getMovieDetails(movieId).subscribe((movieDetails) => {
      expect(movieDetails).toEqual(expectedMovieDetails);
    });

    const req = httpMock.expectOne(`/movies/${movieId}`);
    expect(req.request.method).toBe('GET');
    req.flush(expectedMovieDetails);
  });

  it('should retrieve a list of movies', () => {
    const expectedMovies: MovieModel[] = [
      { id: '1', title: 'Movie 1', budget: '', duration: '', release_date: '' },
      { id: '2', title: 'Movie 2', budget: '', duration: '', release_date: '' },
      { id: '3', title: 'Movie 3', budget: '', duration: '', release_date: '' }
    ];

    service.getListOfMovies().subscribe((movies) => {
      expect(movies).toEqual(expectedMovies);
    });

    const req = httpMock.expectOne('/movies');
    expect(req.request.method).toBe('GET');
    req.flush(expectedMovies);
  });
});

