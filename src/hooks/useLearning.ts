import { useState, useEffect } from "react";

const useLearning = () => {
  const [choice, setChoice] = useState<null | string | number>(null);
  const [essay, setEssay] = useState<null | string | number>(null);
  const [sentence, setSentence] = useState<null | string | number>(null);
  const [currentStep, setCurrentStep] = useState(0);
  const [isStepCompleted, setIsStepCompleted] = useState([
    true,
    false,
    true,
    false,
    true,
    false,
    true,
  ]);

  const handleNextStep = async () => {
    setCurrentStep((prev) => prev + 1);
  };

  const checkStepCompletion = () => {
    const stepsCompletion = [...isStepCompleted];
    stepsCompletion[0] = true;
    stepsCompletion[0] = true;
    stepsCompletion[1] = !!choice;
    stepsCompletion[3] = !!essay;
    stepsCompletion[5] = sentence !== null;

    setIsStepCompleted(stepsCompletion);

    setIsStepCompleted(stepsCompletion);
  };

  useEffect(() => {
    checkStepCompletion();
  }, [choice, essay, sentence]);

  const isLastStep = currentStep === 6;
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
  };
};

export default useLearning;
