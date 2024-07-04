import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { MoviesService } from '../services/movies.service';
import { MovieModel } from '../shared/models/movie.model';

export const listMoviesResolver: ResolveFn<MovieModel[]> = (route, state) => {
  return inject(MoviesService).getListOfMovies();
};
