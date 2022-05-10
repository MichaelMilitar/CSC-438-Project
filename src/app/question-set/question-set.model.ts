import { Question } from "./question/question.model";
export class QuestionSet {
    constructor(
        id: string,
        figure: string,
        question: string,
        choices: { value: string; truth: string; }[]
    ) {}
}