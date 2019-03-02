import { Answer } from "./answer";

export class Question
{
	type: string;
	text: string;
	answers: Array<Answer> = [];

	constructor(type: string = Question.TYPES.OneOfN)
	{
		this.type = type;
	}
}

export namespace Question
{
	export enum TYPES
	{
		OneOfN = 'x z N',
		Text = 'Tekst'
	}
}
