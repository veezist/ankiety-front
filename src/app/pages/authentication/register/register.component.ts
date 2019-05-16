import { Component } from "@angular/core";
import { UserRegister } from "src/app/models/auth/user-register";
import { NgForm } from "@angular/forms";
import { AuthService } from "src/app/services/auth.service";
import { HttpResponse } from "@angular/common/http";
import { Router } from "@angular/router";

@Component(
	{
		templateUrl: './register.component.html',
		styleUrls: [ './register.component.scss' ]
	}
)
export class RegisterComponent
{
	public model = new UserRegister();

	constructor(public auth: AuthService, public router: Router)
	{
		console.log(this.model);
		this.router.navigate(['./register-complete']);
	}

	get diagnostic() { return JSON.stringify(this.model); }

	onFormSubmit(form: NgForm)
	{
		if (form.valid)
		{
			this.model.displayName = this.model.name + ' ' + this.model.surname;
			console.log(this.diagnostic);
			this.auth.register(this.model).subscribe( response => {
				if (response.status === 200)
				{
					console.log('success');
					console.log(response);
					this.router.navigate(['./register-complete']);
				}
			},
			error => {
				console.log('failure');
				console.log(error);
			});
		}
	}
}