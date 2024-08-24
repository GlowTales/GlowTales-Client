import { CommonWrapper } from "@common/common.styled";
import ProgressBar from "@components/common/progressBar/ProgressBar";
import SelectLanguage from "@components/onboarding/SelectLanguage";
import NextBtn from "@components/common/NextBtn";
import SelectLevel from "@components/onboarding/SelectLevel";
import SelectAge from "@components/onboarding/SelectAge";
import useOnboarding from "@hooks/useOnboarding";

const OnboardingPage = () => {
  const {
    languageId,
    setLanguageId,
    learningLevel,
    setLearningLevel,
    age,
    setAge,
    currentStep,
    isLastStep,
    isNextBtnActive,
    handleNextStep,
  } = useOnboarding();

  return (
    <CommonWrapper>
      <ProgressBar percentage={(currentStep + 1) * 25} />
      {currentStep === 0 && <SelectLanguage setter={setLanguageId} />}
      {currentStep === 1 && languageId && (
        <SelectLevel languageId={languageId} setter={setLearningLevel} />
      )}
      {currentStep === 2 && languageId && learningLevel && (
        <SelectAge age={age} setter={setAge} />
      )}
      <NextBtn
        isActive={isNextBtnActive}
        text={isLastStep ? "완료" : "다음"}
        handleBtn={handleNextStep}
      />
    </CommonWrapper>
  );
};

export default OnboardingPage;
