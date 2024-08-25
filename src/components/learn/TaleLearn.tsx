import FinishScreen from "@components/common/FinishScreen";
import NextBtn from "@components/common/NextBtn";
import ProgressBar from "@components/common/progressBar/ProgressBar";
import useLearning from "@hooks/useLearning";
import ChoiceQuiz from "./ChoiceQuiz";
import EssayQuiz from "./EssayQuiz";
import SentenceQuiz from "./SentenceQuiz";
import { Wrapper } from "./learn.styled";
import {
  EssayQuestions,
  MultipleChoices,
  QuizData,
  SentenceArrangements,
} from "@type/learning";
import { QUIZ_STAGES, QuizType } from "@utils/constants/QuizStage";

interface TaleLearnProps {
  quizData?: QuizData;
}

const TaleLearn = ({ quizData }: TaleLearnProps) => {
  if (!quizData) {
    return;
  }

  const totalSteps = quizData.totalSteps;

  const {
    setChoice,
    setSentence,
    setEssay,
    currentStep,
    isLastStep,
    isNextBtnActive,
    handleNextStep,
    getCurrentQuizType,
    isQuizGraded,
  } = useLearning(quizData);

  const progressPercentage = (currentStep / (totalSteps - 1)) * 100;

  const getCurrentQuiz = () => {
    if (
      currentStep <
      QUIZ_STAGES[QuizType.MultipleChoice].end(quizData.multipleChoices.length)
    ) {
      return quizData.multipleChoices[currentStep];
    } else if (
      currentStep <
      QUIZ_STAGES[QuizType.Essay].end(
        quizData.multipleChoices.length,
        quizData.essayQuestions.length
      )
    ) {
      return quizData.essayQuestions[
        currentStep - quizData.multipleChoices.length
      ];
    } else {
      return quizData.sentenceArrangements[
        currentStep -
          QUIZ_STAGES[QuizType.Essay].end(
            quizData.multipleChoices.length,
            quizData.essayQuestions.length
          )
      ];
    }
  };

  const isMultipleChoice = (quiz: any): quiz is MultipleChoices =>
    "choiceList" in quiz;
  const isEssayQuestion = (quiz: any): quiz is EssayQuestions =>
    "answer" in quiz;
  const isSentenceArrangement = (quiz: any): quiz is SentenceArrangements =>
    "sequenceList" in quiz;

  const currentQuiz = getCurrentQuiz();
  const currentQuizType = getCurrentQuizType(currentStep);

  return (
    <>
      {currentStep < totalSteps ? (
        <Wrapper>
          <ProgressBar percentage={progressPercentage} />
          {/* {currentStep === 0 && <LearnTaleKeys />} */}
          {currentQuiz && currentQuiz.question && (
            <>
              {currentQuizType === QuizType.MultipleChoice &&
                isMultipleChoice(currentQuiz) && (
                  <ChoiceQuiz
                    setter={setChoice}
                    data={currentQuiz}
                    isQuizGraded={isQuizGraded}
                  />
                )}
              {currentQuizType === QuizType.Essay &&
                isEssayQuestion(currentQuiz) && (
                  <EssayQuiz
                    setter={setEssay}
                    data={currentQuiz}
                    isQuizGraded={isQuizGraded}
                  />
                )}
              {currentQuizType === QuizType.SentenceArrangement &&
                isSentenceArrangement(currentQuiz) && (
                  <SentenceQuiz
                    setter={setSentence}
                    data={currentQuiz}
                    isQuizGraded={isQuizGraded}
                  />
                )}
            </>
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
