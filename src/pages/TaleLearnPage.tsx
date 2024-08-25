import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getQuizAndAnswer } from "@apis/learning";
import Header from "@components/common/header/Header";
import TaleLearn from "@components/learn/TaleLearn";

const TaleLearnPage = () => {
  const [quizData, setQuizData] = useState();
  const { id } = useParams();

  useEffect(() => {
    const getQuiz = async (taleId: number) => {
      const response = await getQuizAndAnswer(taleId);
      if (response) {
        // 테스트용
        response.multipleChoices = response.multipleChoices.slice(0, 4);
        response.essayQuestions = response.essayQuestions.slice(0, 4);
        response.sentenceArrangements = response.sentenceArrangements.slice(
          0,
          2
        );

        response.totalSteps =
          response.multipleChoices.length +
          response.essayQuestions.length +
          response.sentenceArrangements.length;
        setQuizData(response);
      }
    };

    if (id) getQuiz(Number(id));
  }, [id]);

  return (
    <>
      <Header text="학습하기" />
      <TaleLearn quizData={quizData} />
    </>
  );
};

export default TaleLearnPage;
