import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable, Subscription } from 'rxjs';

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
  imports: [HttpClientModule],
  providers: [HttpClientModule, HttpClient],
  templateUrl: './list-movies.component.html',
  styleUrl: './list-movies.component.css'
})
export class ListMoviesComponent implements OnInit, OnDestroy {

  private httpClient = inject(HttpClient);
  private subs?: Subscription;

  ngOnInit(): void {
    this.subs = this.getListOfMovies().subscribe((list) => {
      console.log('TEST : ', list);
    })
  }

  getListOfMovies(): Observable<MovieModel[]> {
    return this.httpClient.get<MovieModel[]>('/movies');
  }

  ngOnDestroy(): void {
      this.subs?.unsubscribe();
  }

}
