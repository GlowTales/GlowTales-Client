export interface CardContainerProps {
  height: string;
  backgroundColor1: string;
  backgroundColor2: string;
}

export interface CardProps {
  taleId: number;
  title: string;
  languageTaleId: number;
  createdAt: string;
  btnText?: string;
  firstQuizCount?: number;
}

export interface WordProps {
  word: string;
  origin_word: string;
}

export interface UnLearnedProps {
  tale_id: number;
  createdAt: string;
  languageTale: {
    title: string;
    id: number;
  };
  firstQuizCount: number;
}

export interface LearnedProps {
  tale_id: number;
  createdAt: string;
  languageTale: {
    title: string;
    id: number;
  };
  languageId: number;
  koreanTitle: string;
  firstQuizCount: number;
}
