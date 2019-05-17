export class UserRegister
{
	constructor 
	(
		public name = '',
		public surname = '',
		public displayName = '',
		public password = '',
		public email = '',
		public dateOfDeletion = new Date(),
	) { };
}
