import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService
{
  private baseUrl = '';

  constructor(private http: HttpClient) { }

  getFakeSurveys()
  {
    return this.http.get('http://www.mocky.io/v2/5c34b1b92e00008200379039')
  }

  public getObjectByUrl<T>(type: new () => T, relativeUrl: string): Observable<T>
  {
    const url = `${this.baseUrl}${relativeUrl}`;
    return this.http.get<T>(url).pipe(
      // catchError()
    );
  }
}
