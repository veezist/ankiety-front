import { Answer } from "./answer";

export class Question
{
	public type: Question.TYPES;
	public text: string;
	private answers: Array<Answer> = [];
	private answerIdCount = 0;
	public selectedAnswerIndex: number;
	public conditionalQuestions: Array<Array<Question>> = new Array<Array<Question>>();

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

	public addConditionalQuestion(question: Question)
	{
		// console.log(this.conditionalQuestions[this.selectedAnswerIndex]);
		if (this.conditionalQuestions[this.selectedAnswerIndex] === undefined)
		{
			this.conditionalQuestions[this.selectedAnswerIndex] = new Array<Question>();
		}
		this.conditionalQuestions[this.selectedAnswerIndex].push(question);
	}

	public addConditionalQuestionAtIndex(question: Question, index: number)
	{
		this.conditionalQuestions[this.selectedAnswerIndex].splice(index, 0, question);
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
