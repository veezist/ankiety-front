import { Answer } from "./answer";

export class Question
{
	type: Question.TYPES;
	text: string;
	answers: Array<Answer> = [];

	constructor(type = Question.TYPES.Text)
	{
		this.type = type;

		if (this.type === Question.TYPES.Text)
		{
			this.answers.push(new Answer(Question.TYPES.Text));
		}
	}
}

export namespace Question
{
	export enum TYPES
	{
		Text = 'Tekst',
		XOfN = 'x z N',
		OneOfN = '1 z N'
	}
}
