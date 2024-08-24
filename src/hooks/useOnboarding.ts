import { useState, useEffect } from "react";

const useOnboarding = () => {
  const [languageId, setLanguageId] = useState<null | string | number>(null);
  const [learningLevel, setLearningLevel] = useState<null | string | number>(
    null
  );
  const [age, setAge] = useState<null | string | number>(null);
  const [currentStep, setCurrentStep] = useState(0);
  const [isStepCompleted, setIsStepCompleted] = useState([false, false, false]);

  const handleNextStep = () => {
    if (currentStep < 2) {
      setCurrentStep(currentStep + 1);
    } else {
      console.log(languageId, learningLevel, age);
    }
  };

  const checkStepCompletion = () => {
    const stepsCompletion = [false, false, false];
    if (languageId) stepsCompletion[0] = true;
    if (learningLevel) stepsCompletion[1] = true;
    if (age !== null) stepsCompletion[2] = true;

    setIsStepCompleted(stepsCompletion);
  };

  useEffect(() => {
    checkStepCompletion();
  }, [languageId, learningLevel, age]);

  const isLastStep = currentStep === 2;
  const isNextBtnActive = isStepCompleted[currentStep];

  return {
    languageId,
    setLanguageId,
    learningLevel,
    setLearningLevel,
    age,
    setAge,
    currentStep,
    setCurrentStep,
    isLastStep,
    isNextBtnActive,
    handleNextStep,
  };
};

export default useOnboarding;
