import { useState } from "react";
import * as S from "./learn.styled";
import SelectBtn from "@components/common/selectOption/SelectBtn";
interface EssayQuizProps {
  setter: (value: string | number | null) => void;
  currentStep: number;
  answer: string;
}

const EssayQuiz = ({ setter, currentStep, answer }: EssayQuizProps) => {
  const [inputValue, setInputValue] = useState<string>("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const trimmedValue = event.target.value.trim();
    setInputValue(trimmedValue);
    setter(trimmedValue);
  };

  return (
    <S.Container>
      <S.Title>Love는 무슨 뜻인가요?</S.Title>
      <S.SubContainer>
        {currentStep !== 4 ? (
          <S.Input
            type="text"
            value={inputValue}
            onChange={handleChange}
            $isInputValid={inputValue.length ? inputValue : null}
            placeholder="정답을 입력해주세요!"
          />
        ) : (
          <>
            <SelectBtn
              text={inputValue}
              colorName={inputValue === answer ? "green" : "red"}
              imgURL={inputValue === answer ? "/correct.png" : "/wrong.png"}
              onClick={() => {}}
            />
            {inputValue !== answer && (
              <SelectBtn
                text={answer}
                colorName="green"
                imgURL="/correct.png"
                onClick={() => {}}
              />
            )}
          </>
        )}
      </S.SubContainer>
    </S.Container>
  );
};

export default EssayQuiz;
