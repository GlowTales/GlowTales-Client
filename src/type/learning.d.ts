export interface LearningInfoData {
  languageTaleId: number;
  learningLevel: string;
}

export interface QuizData {
  essayQuestions: EssayQuestions[];
  multipleChoices: MultipleChoices[];
  sentenceArrangements: SentenceArrangements[];
  totalSteps: number;
}
export interface EssayQuestions {
  question: string;
  answer: string;
}
export interface MultipleChoices {
  question: string;
  choiceList: Array<{ ids: number; sunji: string; isCorrect: number }>;
}
export interface SentenceArrangements {
  question: string;
  sequenceList: Array<{ order: number; word: string }>;
}

interface BaseQuizProps<T> {
  setter: (value: string | number | null) => void;
  data: T;
  isQuizGraded: boolean;
  index: number;
  gradeHandler: (index: number) => void;
}

export type ChoiceQuizProps = BaseQuizProps<MultipleChoices>;
export type EssayQuizProps = BaseQuizProps<EssayQuestions>;
export type SentenceQuizProps = BaseQuizProps<SentenceArrangements>;

export interface SpeakPracticeProps {
  title: string;
  text1: string;
  text2: string;
}
