import FinishScreen from "@components/common/FinishScreen";
import NextBtn from "@components/common/NextBtn";
import ProgressBar from "@components/common/progressBar/ProgressBar";
import useLearning from "@hooks/useLearning";
import ChoiceQuiz from "./quiz/ChoiceQuiz";
import SentenceQuiz from "./quiz/SentenceQuiz";
import {
  EssayQuestions,
  MultipleChoices,
  QuizData,
  SentenceArrangements,
} from "@type/learning";
import { QUIZ_STAGES, QuizType } from "@utils/constants/QuizStage";
import SpeakPractice from "./quiz/SpeakPractice";
import { useEffect } from "react";
import { postAnswerCount } from "@apis/learning";
import Header from "@components/common/header/Header";
import styled from "styled-components";
import EssayQuiz from "./quiz/EssayQuiz";
import useNavigationWarning from "@hooks/useNavigationWarning";
import { useNavigate, useNavigation } from "react-router-dom";
import Modal from "@components/common/modal/Modal";

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
    setCorrectAnswers,
    isQuizGraded,
    correctAnswers,
  } = useLearning(quizData);
  const navigate = useNavigate();

  const { showModal, confirmNavigation, cancelNavigation } =
    useNavigationWarning(() => navigate("/learnTale"));

  useEffect(() => {
    const postResult = async (languageTaleId: number, answerCounts: number) => {
      try {
        const response = await postAnswerCount(languageTaleId, answerCounts);
        console.log(response);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    if (currentStep === totalSteps - 1) {
      const count = correctAnswers.reduce(
        (accumulator, currentValue) => accumulator + currentValue,
        0
      );
      postResult(quizData.languageTaleId, count);
    }
  }, [currentStep]);

  const incrementCorrectAnswer = (index: number) => {
    setCorrectAnswers((prevAnswers) => {
      const newAnswers = [...prevAnswers];
      newAnswers[index] = 1;
      return newAnswers;
    });
  };

  const progressPercentage = ((currentStep + 0.3) / (totalSteps - 1)) * 100;

  const getCurrentQuiz = () => {
    if (currentStep === 0) {
      return null;
    } else if (
      currentStep <
      QUIZ_STAGES[QuizType.MultipleChoice].end(quizData.multipleChoices.length)
    ) {
      return quizData.multipleChoices[currentStep - 1];
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
      {currentStep < totalSteps - 1 && <Header text="학습하기" />}
      {currentStep < totalSteps - 1 ? (
        <>
          <Wrapper>
            <ProgressBar percentage={progressPercentage} />
            <QuizSection>
              {currentStep === 0 && (
                <SpeakPractice data={quizData.keyWordsAndSentences} />
              )}
              {currentQuiz && currentQuiz.question && (
                <>
                  {currentQuizType === QuizType.MultipleChoice &&
                    isMultipleChoice(currentQuiz) && (
                      <ChoiceQuiz
                        setter={setChoice}
                        data={currentQuiz}
                        isQuizGraded={isQuizGraded}
                        index={currentStep}
                        gradeHandler={incrementCorrectAnswer}
                      />
                    )}
                  {currentQuizType === QuizType.Essay &&
                    isEssayQuestion(currentQuiz) && (
                      <EssayQuiz
                        setter={setEssay}
                        data={currentQuiz}
                        isQuizGraded={isQuizGraded}
                        index={currentStep}
                        gradeHandler={incrementCorrectAnswer}
                      />
                    )}
                  {currentQuizType === QuizType.SentenceArrangement &&
                    isSentenceArrangement(currentQuiz) && (
                      <SentenceQuiz
                        setter={setSentence}
                        data={currentQuiz}
                        isQuizGraded={isQuizGraded}
                        index={currentStep}
                        gradeHandler={incrementCorrectAnswer}
                      />
                    )}
                </>
              )}
            </QuizSection>

            <NextBtn
              isActive={isNextBtnActive}
              text={isLastStep ? "완료" : "다음"}
              handleBtn={handleNextStep}
            />
          </Wrapper>
          {showModal && (
            <Modal
              message="학습을 종료하시겠어요?"
              onConfirm={confirmNavigation}
              onCancel={cancelNavigation}
            />
          )}
        </>
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

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 90%;
  min-height: 88vh;
  overflow: scroll;
  height: fit-content;
  padding-bottom: 2rem;
`;

const QuizSection = styled.div`
  overflow: auto;
  width: 100%;
  height: 70vh;
`;
