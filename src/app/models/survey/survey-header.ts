export class SurveyHeader
{
	public id: number;
	public title: string;
	public description: string;
	public countOfQuestion:number;
	public userDisplay:string;

	constructor 
	(
	 id=1,
	 title= ' ',
	 description= ' ',
	 countOfQuestion=' ',
	 userDisplay=' ',
	) { };
}
