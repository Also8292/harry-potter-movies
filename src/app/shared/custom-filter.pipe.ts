import { Pipe, PipeTransform } from '@angular/core';
import { MovieModel } from '../list-movies/list-movies.component';

@Pipe({
  name: 'customFilter',
  standalone: true
})
export class CustomFilterPipe implements PipeTransform {

  transform(movies: MovieModel[], title: string = '', releaseYear: string = ''): MovieModel[] {
    return movies.filter(movie => {
      const matchesTitle = title ? movie.title.toLowerCase().includes(title.toLowerCase()) : true;
      const matchesYear = releaseYear ? new Date(movie.release_date).getFullYear().toString().includes(releaseYear) : true;
      return matchesTitle && matchesYear;
    });
  }

}
