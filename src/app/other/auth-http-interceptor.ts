import { Injectable } from "@angular/core";
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from "@angular/common/http";
import { AuthService } from "../services/auth.service";
import { Observable } from "rxjs";

@Injectable()
export class AuthHttpInterceptor implements HttpInterceptor
{
	constructor(private auth: AuthService) {}

	intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>
	{
		const options = {
			setHeaders: {}
		};

		const authHeaderValue = this.auth.authorizationHeaderValue;
		if (authHeaderValue)
		{
			options.setHeaders['Authorization'] = `${authHeaderValue}`;
		}
		req = req.clone(options);

		return next.handle(req);
	}
}
