import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MovieListComponent } from './movie/movie-list.component';
import { ShowListComponent } from './shows/show-list.component';
import { HttpClientModule } from '@angular/common/http';
import { ApiService } from './apiservice.service';
import { ReactiveFormsModule } from '@angular/forms';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { ShowDetailComponent } from './show-detail/show-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    MovieListComponent,
    ShowListComponent,
    MovieDetailComponent,
    ShowDetailComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [ApiService],
  bootstrap: [AppComponent],
})
export class AppModule {}
