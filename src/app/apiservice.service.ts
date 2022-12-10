import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  BASE_URL = 'https://api.themoviedb.org/3';
  API_KEY = '18cc83307229a8009b2a320ef295b9d5';

  bannerApiDataMovie(): Observable<any> {
    return this.http.get(
      `${this.BASE_URL}/trending/movie/week?api_key=${this.API_KEY}`
    );
  }
  bannerApiDataShow(): Observable<any> {
    return this.http.get(
      `${this.BASE_URL}/trending/tv/week?api_key=${this.API_KEY}`
    );
  }

  trendingMovieApiData(): Observable<any> {
    return this.http.get(
      `${this.BASE_URL}/trending/movie/day?api_key=${this.API_KEY}`
    );
  }
  trendingShowApiData(): Observable<any> {
    return this.http.get(
      `${this.BASE_URL}/trending/tv/day?api_key=${this.API_KEY}`
    );
  }

  getSearchMovie(data: any): Observable<any> {
    console.log(data, 'movie##');
    return this.http.get(
      `${this.BASE_URL}/search/movie?api_key=${this.API_KEY}&query=${data.movieName}`
    );
  }
  getSearchShow(data: any): Observable<any> {
    console.log(data, 'show##');
    return this.http.get(
      `${this.BASE_URL}/search/tv?api_key=${this.API_KEY}&query=${data.movieName}`
    );
  }

  getMovieDetails(data: any): Observable<any>{
    return this.http.get(`${this.BASE_URL}/movie/${data}?api_key=${this.API_KEY}`)
  }
  getShowDetails(data: any): Observable<any>{
    return this.http.get(`${this.BASE_URL}/tv/${data}?api_key=${this.API_KEY}`)
  }
}
