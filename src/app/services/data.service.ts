import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService
{
  constructor(private http: HttpClient) { }

  getFakeSurveys()
  {
    return this.http.get('http://www.mocky.io/v2/5c34b1b92e00008200379039')
  }
}
