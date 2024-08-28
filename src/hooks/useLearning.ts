import { QuizData } from "@type/learning";
import { QUIZ_STAGES, QuizType } from "@utils/constants/QuizStage";
import { useState, useEffect } from "react";

const useLearning = (quizData: QuizData) => {
  const [choice, setChoice] = useState<null | string | number>(null);
  const [essay, setEssay] = useState<null | string | number>(null);
  const [sentence, setSentence] = useState<null | string | number>(null);
  const [currentStep, setCurrentStep] = useState(0);
  const [isStepCompleted, setIsStepCompleted] = useState<boolean[]>([
    true,
    ...Array(quizData.totalSteps + 1).fill(false),
  ]);
  const [isQuizGraded, setIsQuizGraded] = useState<boolean>(false);
  const [correctAnswers, setCorrectAnswers] = useState<number[]>(
    Array(quizData.totalSteps + 1).fill(0)
  );

  const handleNextStep = async () => {
    if (isQuizGraded) {
      setCurrentStep((prev) => prev + 1);
      setIsQuizGraded(false);
    } else {
      setIsQuizGraded(true);
    }
  };

  const getCurrentQuizType = (step: number): QuizType => {
    if (step < QUIZ_STAGES[QuizType.SpeakPractice].end(1)) {
      return QuizType.SpeakPractice;
    } else if (
      step <
      QUIZ_STAGES[QuizType.MultipleChoice].end(
        1,
        quizData.multipleChoices.length
      )
    ) {
      return QuizType.MultipleChoice;
    } else if (
      step <
      QUIZ_STAGES[QuizType.Essay].end(
        1,
        quizData.multipleChoices.length,
        quizData.essayQuestions.length
      )
    ) {
      return QuizType.Essay;
    } else {
      return QuizType.SentenceArrangement;
    }
  };

  const checkStepCompletion = () => {
    const stepsCompletion = [...isStepCompleted];
    stepsCompletion[0] = true;

    const currentQuizType = getCurrentQuizType(currentStep);

    if (currentStep !== 0) {
      switch (currentQuizType) {
        case QuizType.MultipleChoice:
          stepsCompletion[currentStep] = !!choice;
          break;
        case QuizType.Essay:
          stepsCompletion[currentStep] = !!essay;
          break;
        case QuizType.SentenceArrangement:
          stepsCompletion[currentStep] = sentence !== null;
          break;
        default:
          break;
      }
    } else {
      setIsQuizGraded(true);
    }

    setIsStepCompleted(stepsCompletion);
  };

  useEffect(() => {
    checkStepCompletion();
  }, [choice, essay, sentence, currentStep]);

  const isLastStep = currentStep === quizData.totalSteps - 1;
  const isNextBtnActive = isStepCompleted[currentStep];

  return {
    setChoice,
    choice,
    setSentence,
    essay,
    setEssay,
    sentence,
    setIsStepCompleted,
    currentStep,
    setCurrentStep,
    isLastStep,
    isNextBtnActive,
    handleNextStep,
    getCurrentQuizType,
    isQuizGraded,
    setCorrectAnswers,
    correctAnswers,
  };
};

export default useLearning;
