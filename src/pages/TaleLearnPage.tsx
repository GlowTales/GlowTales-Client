import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { getQuizAndAnswer } from "@apis/learning";
import TaleLearn from "@components/learn/TaleLearn";
import styled from "styled-components";

const TaleLearnPage = () => {
  const [quizData, setQuizData] = useState();
  const location = useLocation();
  const id = location.state || {};

  useEffect(() => {
    const getQuiz = async (taleId: number) => {
      const response = await getQuizAndAnswer(taleId);
      if (response) {
        response.totalSteps =
          1 +
          response.multipleChoices.length +
          response.essayQuestions.length +
          response.sentenceArrangements.length;
        response.languageTaleId = taleId;
        setQuizData(response);
      }
    };

    if (id) getQuiz(id);
  }, [id]);

  return (
    <Wrapper>
      <TaleLearn quizData={quizData} />
    </Wrapper>
  );
};

export default TaleLearnPage;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 100%;
`;
