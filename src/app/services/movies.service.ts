import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { MovieModel } from '../shared/models/movie.model';
import { MovieDetailsModel } from '../shared/models/movie-details.model';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  private httpClient = inject(HttpClient);

  getListOfMovies(): Observable<MovieModel[]> {
    return this.httpClient.get<MovieModel[]>('/movies');
  }

  getMovieDetails(movieId: string): Observable<MovieDetailsModel> {
    return this.httpClient.get<MovieDetailsModel>(`/movies/${movieId}`);
  }
}
