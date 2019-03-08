export class Answer
{
	id: number;
	type: string;
	text?: string;
	isSelected: boolean = false;

	constructor(id: number, answerType: string)
	{
		this.id = id;
		this.type = answerType;
	}
}
