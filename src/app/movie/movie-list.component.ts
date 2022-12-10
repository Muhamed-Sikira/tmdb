import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ApiService } from '../apiservice.service';

@Component({
  selector: 'imdb-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss'],
})
export class MovieListComponent implements OnInit {
  constructor(private apiservice: ApiService) {}

  searchResult: any;
  searchForm = new FormGroup({
    movieName: new FormControl(null),
  });

  submitForm() {
    console.log(this.searchForm.valid, 'searchForm#');
    this.apiservice
      .getSearchMovie(this.searchForm.value)
      .subscribe((result) => {
        console.log(result, 'searchmovie##');
        this.searchResult = result.results;
      });
  }

  bannerResult: any = [];
  trendingMovieResult: any = [];

  ngOnInit(): void {
    this.banerData();
    this.trendingData();
  }

  banerData() {
    this.apiservice.bannerApiDataMovie().subscribe((result) => {
      console.log(result, 'bannerresult#');
      this.bannerResult = result.results;
    });
  }

  trendingData() {
    this.apiservice.trendingMovieApiData().subscribe((result) => {
      console.log(result, 'trenidngresult#');
      this.trendingMovieResult = result.results;
    });
  }
}
