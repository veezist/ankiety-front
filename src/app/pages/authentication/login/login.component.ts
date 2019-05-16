import { Component, OnInit } from '@angular/core';
import { UserLogin } from 'src/app/models/auth/user-login';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit
{
	public model = new UserLogin('Ala', 'Makota', '123');

	constructor(private spinner: NgxSpinnerService)
	{
		this.model.surname = "";
	}

	ngOnInit()
	{
		setTimeout(() => 
		{
			// this.spinner.show();
			// console.log('juz');
		}, 300);
	}	 

	get diagnostic() { return JSON.stringify(this.model); }
}
