import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { MoviesService } from './movies.service';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Movie } from '../components/models/movie';

@Injectable({
  providedIn: 'root'
})
export class MovieResolverService implements Resolve<Movie[]> {

  constructor(private movieService: MoviesService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Movie[]> {
    return this.movieService.getMovies()
      .pipe(
        catchError(err => of(err))
        );
  }
}
