import FinishScreen from "@components/common/FinishScreen";
import NextBtn from "@components/common/NextBtn";
import ProgressBar from "@components/common/progressBar/ProgressBar";
import useLearning from "@hooks/useLearning";
import LearnTaleKeys from "./LearnTaleKeys";
import ChoiceQuiz from "./ChoiceQuiz";
import EssayQuiz from "./EssayQuiz";
import SentenceQuiz from "./SentenceQuiz";
import { Wrapper } from "./learn.styled";

const TaleLearn = () => {
  const {
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
  } = useLearning();
  return (
    <Wrapper>
      {currentStep < 3 ? (
        <>
          <ProgressBar percentage={(currentStep + 1) * 20} />
          {currentStep === 0 && <LearnTaleKeys />}
          {currentStep === 1 && <ChoiceQuiz setter={setChoice} />}
          {currentStep === 3 && choice && <EssayQuiz setter={setEssay} />}
          {currentStep === 5 && choice && essay && (
            <SentenceQuiz setter={setSentence} />
          )}
          <NextBtn
            isActive={isNextBtnActive}
            text={isLastStep ? "완료" : "다음"}
            handleBtn={handleNextStep}
          />
        </>
      ) : (
        <FinishScreen
          imgURL="/learningFinish.png"
          title="학습이 완료되었습니다
          잘했어요!"
          sub="모든 과정을 마무리했어요"
        />
      )}
    </Wrapper>
  );
};

export default TaleLearn;
