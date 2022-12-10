import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../apiservice.service';

@Component({
  selector: 'imdb-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss'],
})
export class MovieDetailComponent implements OnInit {
  constructor(private apiservice: ApiService, private router: ActivatedRoute) {}
  getMovieDetailResult: any;

  ngOnInit(): void {
    let getParamId = this.router.snapshot.paramMap.get('id');
    console.log(getParamId, 'getparamid#');
    this.getMovie(getParamId);
  }

  getMovie(id: any) {
    this.apiservice.getMovieDetails(id).subscribe((result) => {
      console.log(result, 'getmoviedetails#');
      this.getMovieDetailResult = result;
    });
  }
}
