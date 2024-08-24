export interface CreateTaleData {
  detail: string;
  keywords?: string[];
  mood: string | number | null;
  characters: string | number | null[];
  contents: string | number | null;
}
