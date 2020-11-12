import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Movie } from '../../models/movie';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})

export class MovieListComponent implements OnInit {
  moviesArray: Movie[];
  imageBaseUrl = 'https://image.tmdb.org/t/p/original';

  constructor(private route: ActivatedRoute) {

  }

  ngOnInit() {
    const resolvedData: Movie[] = this.route.snapshot.data.resolvedMovies;
    this.moviesArray = resolvedData;
  }

}
