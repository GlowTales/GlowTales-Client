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
    currentStep,
    isLastStep,
    isNextBtnActive,
    handleNextStep,
  } = useLearning();

  const progressPercentage =
    currentStep ===0
      ? 5
      : (currentStep)*16.7

  return (
    <>
      {currentStep < 7 ? (
        <Wrapper>
          <ProgressBar percentage={progressPercentage} />
          {currentStep === 0 && <LearnTaleKeys />}
          {(currentStep === 1 || currentStep === 2) && (
            <ChoiceQuiz setter={setChoice} currentStep={currentStep} />
          )}
          {(currentStep === 3 || currentStep === 4) && choice && (
            <EssayQuiz
              setter={setEssay}
              currentStep={currentStep}
              answer="사랑"
            />
          )}
          {(currentStep === 5 || currentStep === 6) && choice && essay && (
            <SentenceQuiz
              setter={setSentence}
              currentStep={currentStep}
              quizData={{
                question: "그들은 함께 왕국의 귀환을 축하했다.",
                sequenceList: [
                  { word: "Together,", order: 1 },
                  { word: "they celebrated", order: 2 },
                  { word: "the return", order: 3 },
                  { word: "of their kingdom.", order: 4 },
                ],
              }}
            />
          )}
          <NextBtn
            isActive={isNextBtnActive}
            text={isLastStep ? "완료" : "다음"}
            handleBtn={handleNextStep}
          />
        </Wrapper>
      ) : (
        <FinishScreen
          imgURL="/learningFinish.png"
          title="학습이 완료되었습니다
          잘했어요!"
          sub="모든 과정을 마무리했어요"
        />
      )}
    </>
  );
};

export default TaleLearn;
