import LoadingScreen from "@components/common/spinner/LoadingScreen";

interface CreateQuizProps {
  languageTaleId: number;
  learningLevel: string;
}
const CreateQuiz = ({ languageTaleId, learningLevel }: CreateQuizProps) => {
  console.log(languageTaleId, learningLevel);
  return (
    <>
      <LoadingScreen text="퀴즈" />;
    </>
  );
};

export default CreateQuiz;
