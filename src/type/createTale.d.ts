export interface CreateTaleData {
  detail: string;
  keywords?: string[];
  mood: string | number | null;
  characters: string | number | null[];
  contents: string | number | null;
}

export interface ResponseTaleData {
  taleId: number;
  title: string;
  story: string;
}

export interface CardProps {
  height: string;
  backgroundColor1: string;
  backgroundColor2: string;
}
