export enum QuizType {
  MultipleChoice = "MULTIPLE_CHOICE",
  Essay = "ESSAY",
  SentenceArrangement = "SENTENCE_ARRANGEMENT",
}

export const QUIZ_STAGES = {
  [QuizType.MultipleChoice]: {
    start: 0,
    end: (multipleChoicesLength: number) => multipleChoicesLength,
  },
  [QuizType.Essay]: {
    start: (multipleChoicesLength: number) => multipleChoicesLength,
    end: (multipleChoicesLength: number, essayQuestionsLength: number) =>
      multipleChoicesLength + essayQuestionsLength,
  },
  [QuizType.SentenceArrangement]: {
    start: (multipleChoicesLength: number, essayQuestionsLength: number) =>
      multipleChoicesLength + essayQuestionsLength,
    end: (
      multipleChoicesLength: number,
      essayQuestionsLength: number,
      sentenceArrangementsLength: number
    ) =>
      multipleChoicesLength + essayQuestionsLength + sentenceArrangementsLength,
  },
};
