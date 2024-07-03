import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {MatGridListModule} from '@angular/material/grid-list';
import { MatTableModule } from '@angular/material/table';
import { CustomCurrencyPipe } from '../shared/custom-currency.pipe';
import { DurationPipe } from '../shared/duration.pipe';

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

export interface DetailsRow {
  label: string,
  field: string,
  formatter?: string
};

@Component({
  selector: 'app-details-movie',
  standalone: true,
  imports: [HttpClientModule, MatCardModule, MatIconModule, RouterModule, MatGridListModule, MatTableModule, CustomCurrencyPipe, DurationPipe],
  providers: [HttpClientModule, HttpClient],
  templateUrl: './details-movie.component.html',
  styleUrl: './details-movie.component.css'
})
export class DetailsMovieComponent implements OnInit, OnDestroy {

  private httpClient = inject(HttpClient);
  private route = inject(ActivatedRoute);
  private subs?: Subscription;
  movie!: MovieDetailsModel;

  detailsRows: DetailsRow[] = [
    {
      label: 'Box office',
      field: 'box_office',
      formatter: 'customCurrency'
    },
    {
      label: 'Budget',
      field: 'budget',
      formatter: 'customCurrency'
    },
    {
      label: 'Duration',
      field: 'duration',
      formatter: 'duration'
    },
    {
      label: 'Producers',
      field: 'producers'
    },
    {
      label: 'Cinematographers',
      field: 'cinematographers'
    },
  ];

  ngOnInit(): void {
    this.subs = this.getMovieDetails(this.route.snapshot.params['movieId']).subscribe(movie => {
      this.movie = movie;
    });
  }

  getMovieDetails(movieId: string): Observable<MovieDetailsModel> {
    return this.httpClient.get<MovieDetailsModel>(`/movies/${movieId}`);
  }

  ngOnDestroy(): void {
    this.subs?.unsubscribe();
  }

}
