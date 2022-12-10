import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../apiservice.service';

@Component({
  selector: 'imdb-show-detail',
  templateUrl: './show-detail.component.html',
  styleUrls: ['./show-detail.component.scss'],
})
export class ShowDetailComponent implements OnInit {
  constructor(private apiservice: ApiService, private router: ActivatedRoute) {}
  getShowDetailResult: any;
  ngOnInit(): void {
    let getParamId = this.router.snapshot.paramMap.get('id');
    console.log(getParamId, 'getparamid#');
    this.getShow(getParamId);
  }
  getShow(id: any) {
    this.apiservice.getShowDetails(id).subscribe((result) => {
      console.log(result, 'getmoviedetails#');
      this.getShowDetailResult = result;
    });
  }
}
