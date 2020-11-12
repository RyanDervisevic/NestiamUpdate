import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MovieResolverService } from './services/movie-resolver.service';
import { AuthGuard } from 'src/app/services/authentication.guard';
import { SerieResolverService } from './services/serie-resolver.service';
import { Err404Component } from './components/err404/err404.component';
import { SignupComponent } from './components/authentication/signup/signup.component';
import { SigninComponent } from './components/authentication/signin/signin.component';
import { MovieListComponent } from './components/movie/movie-list/movie-list.component';
import { MoviDetailsComponent } from './components/movie/movi-details/movi-details.component';
import { SerieListComponent } from './components/serie/serie-list/serie-list.component';
import { SerieDetailsComponent } from './components/serie/serie-details/serie-details.component';
import { FavouriteComponent } from './components/movie/movi-details/favourite-movie/favourite.component';
import { FavouriteSerieComponent } from './components/serie/serie-details/favourite-serie/favourite-serie.component';
//canActivate: [AuthGuard]
const routes: Routes = [
  {path: 'movie', component: MovieListComponent, resolve: {resolvedMovies: MovieResolverService}, canActivate: [AuthGuard]},
  {path: '404', component: Err404Component},
  {path: 'movie/:id', component: MoviDetailsComponent, canActivateChild: [AuthGuard]},
  {path: 'serie', component: SerieListComponent, resolve: {resolvedSeries: SerieResolverService}, canActivate: [AuthGuard], canActivateChild:[SerieDetailsComponent]}, 
  {path: 'serie/:id', component: SerieDetailsComponent, canActivateChild:[SerieDetailsComponent]},
  {path: 'movies/favouriteMovie', component: FavouriteComponent,  canActivate: [AuthGuard]},
  {path: 'series/favouriteSerie', component: FavouriteSerieComponent, canActivate: [AuthGuard]},
  {path: 'signup', component: SignupComponent},
  {path: 'signin', component: SigninComponent},
  {path: '', redirectTo: 'signin', pathMatch: 'full'},
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
