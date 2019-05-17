import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root'
})
export class ApiService
{
	public baseUrl = 'https://localhost:8443/api/';

	constructor() { }
}
