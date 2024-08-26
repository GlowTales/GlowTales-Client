export interface CardContainerProps {
  height: string;
  backgroundColor1: string;
  backgroundColor2: string;
}

export interface CardProps {
  taleId: string;
  title: string;
  createdAt: string;
  btnText?: string;
  point?: string;
  readFunction?: () => void;
  unLearnedFunction?: () => void;
  learnFunction?: () => void;
}

export interface WordProps {
  word: string;
  origin_word: string;
}

export interface UnLearnedProps {
  tale_id: string;
  createdAt: string;
  languageTale: {
    title: string;
    id: number;
  };
  firstQuizCount: number;
}

export interface LearnedProps {
  tale_id: string;
  createdAt: string;
  point?: string;
  languageTale: {
    title: string;
    id: number;
  };
  firstQuizCount: number;
}
