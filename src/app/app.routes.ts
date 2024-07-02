import { Routes } from '@angular/router';
import { ListMoviesComponent } from './list-movies/list-movies.component';
import { DetailsMovieComponent } from './details-movie/details-movie.component';

export const routes: Routes = [
  {
    path: 'movies',
    component: ListMoviesComponent
  },
  {
    path: 'movies/:movieId',
    component: DetailsMovieComponent
  }
];
