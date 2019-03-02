export class Answer
{
	type: string;
	isSelected: boolean = false;

	text?: string;

	constructor(answerType: string)
	{
		this.type = answerType;
	}
}
