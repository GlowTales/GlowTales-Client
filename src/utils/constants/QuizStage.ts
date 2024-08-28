export enum QuizType {
  SpeakPractice = "SPEAK_PRAC",
  MultipleChoice = "MULTIPLE_CHOICE",
  Essay = "ESSAY",
  SentenceArrangement = "SENTENCE_ARRANGEMENT",
}

export const QUIZ_STAGES = {
  [QuizType.SpeakPractice]: {
    start: 0,
    end: (speakPracticeLength: number) => speakPracticeLength,
  },
  [QuizType.MultipleChoice]: {
    start: (speakPracticeLength: number) => speakPracticeLength,
    end: (speakPracticeLength: number, multipleChoicesLength: number) =>
      speakPracticeLength + multipleChoicesLength,
  },
  [QuizType.Essay]: {
    start: (speakPracticeLength: number, multipleChoicesLength: number) =>
      speakPracticeLength + multipleChoicesLength,
    end: (
      speakPracticeLength: number,
      multipleChoicesLength: number,
      essayQuestionsLength: number
    ) => speakPracticeLength + multipleChoicesLength + essayQuestionsLength,
  },
  [QuizType.SentenceArrangement]: {
    start: (
      speakPracticeLength: number,
      multipleChoicesLength: number,
      essayQuestionsLength: number
    ) => speakPracticeLength + multipleChoicesLength + essayQuestionsLength,
    end: (
      speakPracticeLength: number,
      multipleChoicesLength: number,
      essayQuestionsLength: number,
      sentenceArrangementsLength: number
    ) =>
      speakPracticeLength +
      multipleChoicesLength +
      essayQuestionsLength +
      sentenceArrangementsLength,
  },
};
