import { Component, OnInit } from '@angular/core';
import { UserLogin } from 'src/app/models/auth/user-login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit
{
	public model = new UserLogin('Ala', 'Makota', '123');

	constructor()
	{
		this.model.surname = "";
	}

	get diagnostic() { return JSON.stringify(this.model); }
}
