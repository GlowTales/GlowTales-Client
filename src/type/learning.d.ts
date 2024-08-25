export interface LearningInfoData {
  taleId: number;
  languageId: number;
  learningLevel: "1000" | "2000" | "3000" | "4000" | "5000";
}

interface ChoiceQuizProps {
  setter: (value: string | number | null) => void;
  currentStep: number;
}

interface EssayQuizProps {
  setter: (value: string | number | null) => void;
  currentStep: number;
  answer: string;
}
interface SentenceQuizProps {
  setter: (value: string | number | null) => void;
  currentStep: number;
  quizData: SentenceQuizData;
}
interface SentenceQuizData {
  question: string;
  sequenceList: Array<{ order: number; word: string }>;
}

interface SpeakPracticeProps {
  title: string;
  text1: string;
  text2: string;
}
