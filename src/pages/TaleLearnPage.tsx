import { getQuizAndAnswer } from "@apis/learning";
import Header from "@components/common/header/Header";
import TaleLearn from "@components/learn/TaleLearn";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

const TaleLearnPage = () => {
  const { id } = useParams();
  const taleId = Number(id);
  useEffect(() => {
    const getQuiz = async (taleId: number) => {
      // const quiz = await createQuiz({
      //   taleId: taleId,
      //   languageId: 1,
      //   learningLevel: "2000",
      // });
      // console.log(quiz);
      const response = await getQuizAndAnswer(taleId);
      console.log(response);
    };

    if (id) getQuiz(taleId);
  }, [id]);
  return (
    <>
      <Header text="학습하기" />
      <TaleLearn />
    </>
  );
};

export default TaleLearnPage;
