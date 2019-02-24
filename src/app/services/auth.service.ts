import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { DataService } from './data.service';
import { UserRegister } from '../models/auth/user-register';
import { UserLogin } from '../models/auth/user-login';

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

  constructor(private dataService: DataService, private cookieService: CookieService)
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

  public register(registerData: UserRegister)
  {
    const url = '';
    return this.dataService.postObjectByUrlWithOptions(registerData, url, { observe: 'response' });
  }

  public signIn(credentials: UserLogin)
  {
    const credentialsString = '';
    this.dataService.postObjectByUrl(credentialsString, 'Token').subscribe( (credentialsResponse) => {
      this.userData.tokenResponse = credentialsResponse;
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
}
