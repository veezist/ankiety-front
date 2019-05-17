import { Component } from "@angular/core";
import { UserRegister } from "src/app/models/auth/user-register";
import { NgForm } from "@angular/forms";
import { AuthService } from "src/app/services/auth.service";
import { HttpResponse } from "@angular/common/http";
import { Router } from "@angular/router";
import { NgxSpinnerService } from "ngx-spinner";

@Component(
	{
		templateUrl: './register.component.html',
		styleUrls: [ './register.component.scss' ]
	}
)
export class RegisterComponent
{
	public model = new UserRegister();

	constructor(public auth: AuthService, public router: Router, private spinner: NgxSpinnerService)
	{
		console.log(this.model);
	}

	get diagnostic() { return JSON.stringify(this.model); }

	onFormSubmit(form: NgForm)
	{
		if (form.valid)
		{
			this.spinner.show();
			
			this.model.displayName = this.model.name + ' ' + this.model.surname;
			console.log(this.diagnostic);

			this.auth.register(this.model).subscribe( response => {
				if (response.status === 200)
				{
					console.log('success');
					console.log(response);
					// this.spinner.hide();
					this.router.navigate(['./register-complete']);
				}
			},
			error => {
				console.log('failure');
				console.log(error);
				this.spinner.hide();
				alert('register failed');
			});
		}
	}
}