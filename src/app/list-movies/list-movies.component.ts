import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable, Subscription } from 'rxjs';
import { DatePipe } from '@angular/common';
import { DurationPipe } from '../shared/duration.pipe';
import { MatListModule } from '@angular/material/list';
import { CustomCurrencyPipe } from '../shared/custom-currency.pipe';
import { RouterModule } from '@angular/router';

export interface MovieModel {
  budget: string,
  duration: string,
  id: string,
  release_date: string,
  title: string
}

@Component({
  selector: 'app-list-movies',
  standalone: true,
  imports: [HttpClientModule, DatePipe, CustomCurrencyPipe, DurationPipe, MatListModule, RouterModule],
  providers: [HttpClientModule, HttpClient],
  templateUrl: './list-movies.component.html',
  styleUrl: './list-movies.component.css'
})
export class ListMoviesComponent implements OnInit, OnDestroy {

  private httpClient = inject(HttpClient);
  private subs?: Subscription;
  movies: MovieModel[] = [];

  ngOnInit(): void {
    this.subs = this.getListOfMovies().subscribe((listOfMovies) => {
      this.movies = listOfMovies;
    });
  }

  private getListOfMovies(): Observable<MovieModel[]> {
    return this.httpClient.get<MovieModel[]>('/movies');
  }

  ngOnDestroy(): void {
    this.subs?.unsubscribe();
  }

}
