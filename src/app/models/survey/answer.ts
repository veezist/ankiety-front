export const answerTypes = ['tekstowa', '1 z N'];

export class Answer
{
	type: string;
	isSelected: boolean = false;

	text?: string;
}
