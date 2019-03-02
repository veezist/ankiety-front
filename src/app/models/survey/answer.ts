import { Question } from "./question";

export class Answer
{
	type: string;
	isSelected: boolean = false;

	text?: string;

	constructor(answerType = Question.TYPES.OneOfN)
	{
		this.type = answerType;
	}
}
