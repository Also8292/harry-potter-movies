import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { MoviesService } from '../services/movies.service';
import { MovieDetailsModel } from '../shared/models/movie-details.model';

export const detailsMovieResolver: ResolveFn<MovieDetailsModel> = (route, state) => {
  return inject(MoviesService).getMovieDetails(route.params['movieId']);
};
