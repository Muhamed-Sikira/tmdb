import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { MovieListComponent } from './movie/movie-list.component';
import { ShowDetailComponent } from './show-detail/show-detail.component';
import { ShowListComponent } from './shows/show-list.component';

const routes: Routes = [];

@NgModule({
  imports: [
    RouterModule.forRoot([
      { path: 'movie', component: MovieListComponent },
      { path: 'movie/:id', component: MovieDetailComponent },
      { path: 'shows', component: ShowListComponent },
      { path: 'shows/:id', component: ShowDetailComponent },
      
    ]),
  ],
  exports: [RouterModule,],
})
export class AppRoutingModule {}
