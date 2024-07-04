import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatGridListModule } from '@angular/material/grid-list';
import { CustomCurrencyPipe } from '../shared/pipes/custom-currency.pipe';
import { DurationPipe } from '../shared/pipes/duration.pipe';
import { MovieDetailsModel, MovieDetailsRow } from '../shared/models/movie-details.model';



@Component({
  selector: 'app-details-movie',
  standalone: true,
  imports: [MatCardModule, MatIconModule, RouterModule, MatGridListModule],
  providers: [CustomCurrencyPipe, DurationPipe],
  templateUrl: './details-movie.component.html',
  styleUrl: './details-movie.component.css'
})
export class DetailsMovieComponent implements OnInit {

  private route = inject(ActivatedRoute);
  movie!: MovieDetailsModel;

  detailsRows: MovieDetailsRow[] = [
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

  private customCurrencyPipe = inject(CustomCurrencyPipe);
  private durationPipe = inject(DurationPipe);

  ngOnInit(): void {
    this.movie = this.route.snapshot.data['movieDetails'] as MovieDetailsModel;
    this.getDetailValue(this.detailsRows[0]);
  }

  getDetailValue = (detail: MovieDetailsRow) => {
    let detaiValue = this.movie[detail.field as keyof MovieDetailsModel];

    if (detail?.formatter === 'customCurrency') {
      return this.customCurrencyPipe.transform(detaiValue as string);
    } else if (detail?.formatter === 'duration') {
      return this.durationPipe.transform(detaiValue as string);
    }

    return detaiValue;
  }
}
