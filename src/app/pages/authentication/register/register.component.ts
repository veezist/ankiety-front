import { Component } from "@angular/core";
import { UserRegister } from "src/app/models/auth/user-register";
import { NgForm } from "@angular/forms";
import { AuthService } from "src/app/services/auth.service";

@Component(
	{
		templateUrl: './register.component.html',
		styleUrls: [ './register.component.scss' ]
	}
)
export class RegisterComponent
{
	public model = new UserRegister();

	constructor(public auth: AuthService)
	{
		console.log(this.model);
	}

	get diagnostic() { return JSON.stringify(this.model); }

	onFormSubmit(form: NgForm)
	{
		if (form.valid)
		{
			this.model.displayName = this.model.name + ' ' + this.model.surname;
			console.log(this.diagnostic);
			this.auth.register(this.model).subscribe( response => {
				console.log('success');
				console.log(response);
			},
			error => {
				console.log('failure');
				console.log(error);
			});
		}
	}
}