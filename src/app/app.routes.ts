import { Routes } from '@angular/router';
import { ListMoviesComponent } from './list-movies/list-movies.component';
import { DetailsMovieComponent } from './details-movie/details-movie.component';
import { detailsMovieResolver } from './resolvers/details-movie.resolver';
import { listMoviesResolver } from './resolvers/list-movies.resolver';

export const routes: Routes = [
  {
    path: 'movies',
    component: ListMoviesComponent,
    resolve: {
      movies: listMoviesResolver
    }
  },
  {
    path: 'movies/:movieId',
    component: DetailsMovieComponent,
    resolve: {
      movieDetails: detailsMovieResolver
    }
  }
];
