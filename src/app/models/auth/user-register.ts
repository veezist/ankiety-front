export class UserRegister
{
	private displayName: string;

	constructor 
	(
		public name: string,
		public surname: string,
		public password: string,
		public email: string,
		public dateOfDeletion: Date,
	) { this.displayName = name + surname };
}
