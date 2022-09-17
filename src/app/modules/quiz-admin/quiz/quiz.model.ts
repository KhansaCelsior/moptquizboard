export class quizData {
    userId: number | undefined;
    quizId: number | undefined;
    question: questionData | undefined;

}
export class questionData {
    questionId: number | undefined;
    questions: string | undefined;
    options: optionsData | undefined;
    correctAnswer?: string | undefined;

}
export class optionsData {
    optionId: number | undefined;
    option: string | undefined;
    isSelected?: boolean = false;
}