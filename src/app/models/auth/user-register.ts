export class UserRegister
{
	constructor 
	(
		public name: string,
		public surname: string,
		public password: string,
		public email: string,
		public dateOfDeletion: Date
	) { };
}
