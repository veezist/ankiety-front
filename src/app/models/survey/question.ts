import { Answer } from "./answer";

export class Question
{
	public type: Question.TYPES;
	private text: string;
	private answers: Array<Answer> = [];
	private answerIdCount = 0;
	private selectedAnswerIndex: String;
	private conditionalQuestions: Array<Array<Question>> = null;

	constructor(type = Question.TYPES.Text)
	{
		this.type = type;

		if (this.type === Question.TYPES.Text)
		{
			this.answers.push(new Answer(this.answerIdCount++, Question.TYPES.Text));
		}
	}

	public addAnswer(answerType: Question.TYPES)
	{
		this.answers.push(new Answer(this.answerIdCount++, answerType));
	}

	public deleteAnswer(answerToDelete: Answer)
	{
		const index = this.answers.indexOf(answerToDelete);
    this.answers.splice(index, 1);
	}

	public deleteAllAnswers()
	{
		this.answers.length = 0;
	}
}

export namespace Question
{
	export enum TYPES
	{
		Text = 'Tekst',
		XOfN = 'x z N',
		OneOfN = '1 z N',
		Condition = 'Cond.'
	}
}
