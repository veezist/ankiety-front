import { Component, OnInit } from '@angular/core';
import { UserLogin } from 'src/app/models/auth/user-login';
import { NgxSpinnerService } from 'ngx-spinner';
import { JwtHelperService } from '@auth0/angular-jwt';
import { AuthService } from 'src/app/services/auth.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit
{
	public model = new UserLogin();

	constructor(private spinner: NgxSpinnerService, public auth: AuthService)
	{
	}

	ngOnInit()
	{
	}	 

	get diagnostic() { return JSON.stringify(this.model); }

	public onFormSubmit(form: NgForm)
	{
		if (form.valid)
		{
			this.spinner.show();
			
			console.log(this.diagnostic);

			this.auth.signIn(this.model, () => {
				console.log('callback called');
			});
		}
	}
}
