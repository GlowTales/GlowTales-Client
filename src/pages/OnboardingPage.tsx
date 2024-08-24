import { CommonWrapper } from "@common/common.styled";
import ProgressBar from "@components/common/progressBar/ProgressBar";
import SelectLanguage from "@components/onboarding/SelectLanguage";
import NextBtn from "@components/common/NextBtn";
import SelectLevel from "@components/onboarding/SelectLevel";
import SelectAge from "@components/onboarding/SelectAge";
import useOnboarding from "@hooks/useOnboarding";
import FinishScreen from "@components/common/FinishScreen";

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
      {currentStep < 3 ? (
        <>
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
        </>
      ) : (
        <FinishScreen
          imgURL="/onboardingFinish.png"
          title="글로우테일로 동화를 만들고 
          언어를 학습해보세요!"
          sub="정보 입력이 완료되었어요!"
        />
      )}
    </CommonWrapper>
  );
};

export default OnboardingPage;
