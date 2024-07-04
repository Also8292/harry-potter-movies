import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Subscription } from 'rxjs';
import { AsyncPipe, DatePipe } from '@angular/common';
import { DurationPipe } from '../shared/pipes/duration.pipe';
import { MatListModule } from '@angular/material/list';
import { CustomCurrencyPipe } from '../shared/pipes/custom-currency.pipe';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { CustomFilterPipe } from '../shared/pipes/custom-filter.pipe';
import { MovieModel } from '../shared/models/movie.model';
import { MoviesService } from '../services/movies.service';

@Component({
  selector: 'app-list-movies',
  standalone: true,
  imports: [HttpClientModule, DatePipe, AsyncPipe, CustomCurrencyPipe, DurationPipe, MatListModule, RouterModule, MatIconModule, CustomFilterPipe, FormsModule],
  providers: [HttpClientModule, HttpClient],
  templateUrl: './list-movies.component.html',
  styleUrl: './list-movies.component.css'
})
export class ListMoviesComponent implements OnInit, OnDestroy {

  private service = inject(MoviesService);
  private subs?: Subscription;
  movies: MovieModel[] = [];
  title = '';
  releaseYear = '';

  ngOnInit() {
    this.subs = this.service.getListOfMovies().subscribe((listOfMovies) => {
      this.movies = listOfMovies;
    });
  }

  ngOnDestroy(): void {
    this.subs?.unsubscribe();
  }
}
