import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { DataService } from './data.service';
import { HttpClient, HttpErrorResponse, HttpEvent, HttpHeaders } from '@angular/common/http';
import { UserRegister } from '../models/auth/user-register';
import { UserLogin } from '../models/auth/user-login';
import { ApiService } from './api.service';

const authUserDataCookieKey = 'authTokenCookieKey';

class UserData
{
  public tokenResponse: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService
{
  private userData = new UserData();

  constructor(private dataService: DataService, private cookieService: CookieService, 
              private http: HttpClient, private api: ApiService)
  {
    if (this.cookieService.check(authUserDataCookieKey))
    {
      const cookieData = this.cookieService.get(authUserDataCookieKey);
      if (cookieData.length > 0)
      {
        this.userData = JSON.parse(cookieData);
      }
    }
  }

  public getFakeUser()
  {
    return this.http.get('http://www.mocky.io/v2/5c979f272f000057009f2e67')
  }

  public register(registerData: UserRegister)
  {
    const url = this.api.baseUrl + 'users/register';
    return this.http.post(url, registerData, { observe: 'response' });
  }

  public signIn(credentials: UserLogin, callback)
  {
    const url = 'https://localhost:8443/oauth/token';
    /*
    this.http.post(url, credentials, { observe: 'response' }).subscribe( (response) => {
      // this.userData.tokenResponse = credentialsResponse;
      console.log('login response: ' + response);
      callback();
    });
    */
    let body = new URLSearchParams();
    body.set('username', credentials.username);
    body.set('password', credentials.password);
    
    let headers: HttpHeaders = new HttpHeaders();
    headers = headers.append('authorization', 'Basic c3VydmV5LWNsaWVudDpzdXJ2ZXktc2VjcmV0');
    // headers = headers.append('content-type', 'application/x-www-form-urlencoded');
    
    console.log(headers);

    this.http.post(url, body, {  headers: headers, observe: 'response' }).subscribe( (response) => {
      // this.userData.tokenResponse = credentialsResponse;
      console.log('login response: ' + response);
      callback();
    });
  }

  public signOut()
  {
    this.cookieService.set(authUserDataCookieKey, '');
    this.userData = new UserData();
  }

  public get authorizationHeaderValue(): string
  {
    if (this.userData.tokenResponse === null)
    {
      return null;
    }
    return this.userData.tokenResponse;
  }

  public get isUserLoggedIn(): boolean
  {
    return false;
  }
}
