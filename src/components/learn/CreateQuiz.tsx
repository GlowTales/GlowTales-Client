import { createQuiz } from "@apis/learning";
import LoadingScreen from "@components/common/spinner/LoadingScreen";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

interface CreateQuizProps {
  languageTaleId: number;
  learningLevel: string;
  taleId: number;
}
const CreateQuiz = (props: CreateQuizProps) => {
  const navigate = useNavigate();
  useEffect(() => {
    const createData = async () => {
      try {
        const response = await createQuiz({
          languageTaleId: props.languageTaleId,
          learningLevel: props.learningLevel,
        });
        if (response.result === "SUCCESS")
          navigate(`/learnTale/quiz`, { state: props.languageTaleId });
        else throw new Error();
      } catch (error) {
        alert("퀴즈 생성 중 에러가 발생했습니다. 다시 시도해주세요.");
        const response = { taleId: props.taleId };
        navigate(`/readTale`, { state: { response } });
      }
    };
    createData();
  }, [props]);

  return (
    <>
      <LoadingScreen text="퀴즈" />;
    </>
  );
};

export default CreateQuiz;
