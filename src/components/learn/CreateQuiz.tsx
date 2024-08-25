import { createQuiz } from "@apis/learning";
import LoadingScreen from "@components/common/spinner/LoadingScreen";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

interface CreateQuizProps {
  languageTaleId: number;
  learningLevel: string;
}
const CreateQuiz = (props: CreateQuizProps) => {
  const navigate = useNavigate();
  useEffect(() => {
    const createData = async () => {
      const response = await createQuiz({
        languageTaleId: props.languageTaleId,
        learningLevel: props.learningLevel,
      });
      if (response.result === "SUCCESS")
        navigate(`/learnTale/${props.languageTaleId}`);
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
