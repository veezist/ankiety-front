import { Component } from "@angular/core";
import { UserRegister } from "src/app/models/auth/user-register";
import { NgForm } from "@angular/forms";

@Component(
	{
		templateUrl: './register.component.html',
		styleUrls: [ './register.component.scss' ]
	}
)
export class RegisterComponent
{
	public model = new UserRegister('Ala', 'Makota', '123', 'ala@makota.pl', new Date());

	constructor()
	{
		this.model.surname = null;
		this.model.dateOfDeletion = null;
	}

	get diagnostic() { return JSON.stringify(this.model); }

	onFormSubmit(form: NgForm)
	{
		if (form.valid)
		{
			console.log(this.diagnostic);
		}
	}
}