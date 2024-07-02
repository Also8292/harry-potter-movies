import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subscription } from 'rxjs';

export interface MovieDetailsModel {
  id: string,
  title: string,
  duration: string,
  budget: string,
  release_date: string,
  box_office: string,
  cinematographers: string[],
  poster: string,
  producers: string[],
  summary: string
}

@Component({
  selector: 'app-details-movie',
  standalone: true,
  imports: [HttpClientModule],
  providers: [HttpClientModule, HttpClient],
  templateUrl: './details-movie.component.html',
  styleUrl: './details-movie.component.css'
})
export class DetailsMovieComponent implements OnInit, OnDestroy {

  private httpClient = inject(HttpClient);
  private route = inject(ActivatedRoute);
  private subs?: Subscription;

  ngOnInit(): void {
    this.subs = this.getListOfMovies(this.route.snapshot.params['movieId']).subscribe(movie => {
      console.log('MOVIE : ', movie);
    });
  }

  getListOfMovies(movieId: string): Observable<MovieDetailsModel> {
    return this.httpClient.get<MovieDetailsModel>(`/movies/${movieId}`);
  }

  ngOnDestroy(): void {
    this.subs?.unsubscribe();
  }

}
