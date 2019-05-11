export class SurveyHeader
{
	constructor
	(
		public id: number,
		public title: string,
		public description: string,
		public countOfQuestion:number,
		public userDisplay:string
	) { }
}
