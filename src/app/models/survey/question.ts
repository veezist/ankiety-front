import { Answer } from "./answer";

export class Question
{
	type: string;
	text: string;
	answers: Array<Answer> = [];

	constructor(type: string = '1ofn')
	{
		this.type = type;
	}
}
