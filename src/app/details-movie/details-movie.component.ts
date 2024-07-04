import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatGridListModule } from '@angular/material/grid-list';
import { CustomCurrencyPipe } from '../shared/pipes/custom-currency.pipe';
import { DurationPipe } from '../shared/pipes/duration.pipe';
import { MovieDetailsModel } from '../shared/models/movie-details.model';

export interface DetailsRow {
  label: string,
  field: string,
  formatter?: string
};

@Component({
  selector: 'app-details-movie',
  standalone: true,
  imports: [ MatCardModule, MatIconModule, RouterModule, MatGridListModule, CustomCurrencyPipe, DurationPipe],
  templateUrl: './details-movie.component.html',
  styleUrl: './details-movie.component.css'
})
export class DetailsMovieComponent implements OnInit {

  private route = inject(ActivatedRoute);
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
    this.movie = this.route.snapshot.data['movieDetails'] as MovieDetailsModel;
  }
}
