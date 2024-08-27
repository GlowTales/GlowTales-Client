export enum QuizType {
  SpeakPractice = "SPEAK_PRAC",
  MultipleChoice = "MULTIPLE_CHOICE",
  Essay = "ESSAY",
  SentenceArrangement = "SENTENCE_ARRANGEMENT",
}

export const QUIZ_STAGES = {
  [QuizType.SpeakPractice]: {
    start: 0,
    end: 1,
  },
  [QuizType.MultipleChoice]: {
    start: 1,
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
