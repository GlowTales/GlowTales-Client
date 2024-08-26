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
  readFunction?: () => void;
  learnFunction?: () => void;
}
