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
  createdAt: string;
}
