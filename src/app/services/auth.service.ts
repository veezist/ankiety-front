import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { DataService } from './data.service';

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
}
