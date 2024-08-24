import { registerUser } from "@apis/login";
import { useState, useEffect } from "react";

const useOnboarding = () => {
  const [languageId, setLanguageId] = useState<null | string | number>(null);
  const [learningLevel, setLearningLevel] = useState<null | string | number>(
    null
  );
  const [age, setAge] = useState<null | string | number>(null);
  const [currentStep, setCurrentStep] = useState(0);
  const [isStepCompleted, setIsStepCompleted] = useState([false, false, false]);

  const handleNextStep = async () => {
    try {
      if (languageId && learningLevel && age) {
        const result = await registerUser({
          languageId: Number(languageId),
          learningLevel: String(learningLevel),
          age: Number(age),
        });
        if (!result) throw new Error("회원 등록 실패");
        console.log("회원 등록 성공:", result);
      }
    } catch (error) {
      console.error("회원 등록 중 오류 발생:", error);
    }
    setCurrentStep((prev) => prev + 1);
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
