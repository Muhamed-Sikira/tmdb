import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Observable, tap } from 'rxjs';
import { ApiService } from '../apiservice.service';

@Component({
  selector: 'imdb-show-list',
  templateUrl: './show-list.component.html',
  styleUrls: ['./show-list.component.scss'],
})
export class ShowListComponent implements OnInit {
  constructor(private apiservice: ApiService) {}
  bannerResult: any = [];
  trendingShowResult: any = [];
  
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

  ngOnInit(): void {
    this.banerData();
    this.trendingData();
  }

  banerData() {
    this.apiservice.bannerApiDataShow().subscribe((result) => {
      console.log(result, 'bannerresult#');
      this.bannerResult = result.results;
    });
  }

  trendingData() {
    this.apiservice.trendingShowApiData().subscribe((result) => {
      console.log(result, 'trenidngresult#');
      this.trendingShowResult = result.results;
    });
  }
}
