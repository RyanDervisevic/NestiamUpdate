import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { AppComponent } from './app.component';
import { MoviesService } from './services/movies.service';
import { AppRoutingModule } from './app-routing.module';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MovieSearchComponent } from './components/movie-search/movie-search.component';
import { Err404Component } from './components/err404/err404.component';
import { SigninComponent } from './components/authentication/signin/signin.component';
import { SignupComponent } from './components/authentication/signup/signup.component';
import { AddHeaderInterceptor } from './components/http-interceptors/add-header.interceptor';
import { LogResponseInterceptor } from './components/http-interceptors/log-response.interceptor';
import { CacheInterceptor } from './components/http-interceptors/cache.interceptor';
import { MovieListComponent } from './components/movie/movie-list/movie-list.component';
import { CarouselHolderComponent } from './components/movie/movie-list/carousel-holder/carousel-holder.component';
import { CarouselHolderComponentSerie } from './components/serie/serie-list/carousel-holder/carousel-holder.component';
import { MoviDetailsComponent } from './components/movie/movi-details/movi-details.component';
import { LikeComponent } from './components/movie/movi-details/like-movie/like.component';
import { FavouriteComponent } from './components/movie/movi-details/favourite-movie/favourite.component';
import { SerieListComponent } from './components/serie/serie-list/serie-list.component';
import { SerieDetailsComponent } from './components/serie/serie-details/serie-details.component';
import { FavouriteSerieComponent } from './components/serie/serie-details/favourite-serie/favourite-serie.component';
import { LikeSerieComponent } from './components/serie/serie-details/like-serie/like-serie.component';

// FIREBASE
import { AngularFireModule } from '@angular/fire';
import { environment } from 'src/environments/environment';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireMessagingModule } from '@angular/fire/messaging';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireFunctionsModule } from '@angular/fire/functions';

import { ReactiveFormsModule } from '@angular/forms';
import { AuthGuard } from 'src/app/services/authentication.guard';
import { AuthenticationService } from 'src/app/services/authentication.service';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MovieListComponent,
    CarouselHolderComponent,
    CarouselHolderComponentSerie,
    MoviDetailsComponent,
    MovieSearchComponent,
    Err404Component,
	  LikeComponent, // flavien	
    FavouriteComponent, 
    SigninComponent, 
    SignupComponent,		
    SerieListComponent, 
    SerieDetailsComponent, 
    FavouriteSerieComponent, 
    LikeSerieComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    CarouselModule,
    BrowserAnimationsModule,
    FontAwesomeModule,
    RouterModule.forRoot([]),
    // FIREBASE
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireStorageModule,
    AngularFireMessagingModule,
    AngularFireDatabaseModule,
    AngularFireFunctionsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [
    MoviesService,
    { provide: HTTP_INTERCEPTORS, useClass: AddHeaderInterceptor, multi: true },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LogResponseInterceptor,
      multi: true,
    },
    { provide: HTTP_INTERCEPTORS, useClass: CacheInterceptor, multi: true },
    AuthGuard,
    AuthenticationService
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
