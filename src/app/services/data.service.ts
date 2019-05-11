import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpEvent } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService
{
  private baseUrl = 'https://localhost:8443/api/';

  constructor(private http: HttpClient) { }

  getFakeSurveys()
  {
    return this.http.get('http://www.mocky.io/v2/5c34b1b92e00008200379039')
  }

  public postObjectByUrl<T>(object: T, relativeUrl: string): Observable<T>
  {
    const url = `${this.baseUrl}${relativeUrl}`;
    return this.http.post<T>(url, object).pipe(
      catchError(this.handleError)
    );
  }

  public postObjectByUrlWithOptions<T>(object: T, relativeUrl: string, options: any)
  : Observable<HttpEvent<T>>
  {
    const url = `${this.baseUrl}${relativeUrl}`;
    return this.http.post<T>(url, object, options).pipe(
      catchError(this.handleError)
    );
  }

  public getObjectByUrl<T>(type: new () => T, relativeUrl: string): Observable<T>
  {
    const url = `${this.baseUrl}${relativeUrl}`;
    return this.http.get<T>(url).pipe(
      catchError(this.handleError)
    );
  }

  public putObjectByUrl<T>(object: T, relativeUrl: string): Observable<T>
  {
    const url = `${this.baseUrl}${relativeUrl}?id=${(<any>object).id}`;
    return this.http.put<T>(url, object).pipe(
      catchError(this.handleError)
    );
  }

  public deleteObjectByUrl<T>(object: T, relativeUrl: string): Observable<T>
  {
    const url = `${this.baseUrl}${relativeUrl}?id=${(<any>object).id}`;
    return this.http.delete<T>(url).pipe(
      catchError(this.handleError)
    );
  }

  public getObjectsByUrl<T>(
    type: new () => T,
    relativeUrl: string,
    options?: any
  ): Observable<T[]>
  {
    const url = `${this.baseUrl}${relativeUrl}`;
    return this.http.get(url, options).pipe(
      map((input: Object, indx: number) => {
        const inputObjects: T[] = input as T[];
        const outputObjects: T[] = [];

        for (const obj of inputObjects) {
          outputObjects.push(Object.assign(new type(), obj));
        }

        return outputObjects;
      }),
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse)
  {
    if (error.error instanceof ErrorEvent)
    {
      console.error('An client-side or network error occured: ', error.error.message);
    }
    else
    {
      console.error(`Backend returned code ${error.status}, ` + `body was: ${error.error}`);
    }
    return throwError('Something bad happened');
  }
}
