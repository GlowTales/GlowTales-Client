import { useEffect, useState } from "react";
import * as S from "./learn.styled";
import SelectBtn from "@components/common/selectOption/SelectBtn";
import { EssayQuizProps } from "@type/learning";

const EssayQuiz = ({
  setter,
  data,
  isQuizGraded,
  index,
  gradeHandler,
}: EssayQuizProps) => {
  const [inputValue, setInputValue] = useState<string>("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const trimmedValue = event.target.value.trim();
    setInputValue(trimmedValue);
    setter(trimmedValue);
  };

  useEffect(() => {
    setter(null);
    setInputValue("");
  }, [data]);

  useEffect(() => {
    if (isQuizGraded && inputValue) {
      if (inputValue === data.answer) {
        gradeHandler(index);
      }
    }
  }, [isQuizGraded, index]);

  return (
    <S.Container>
      <S.Title>{data.question}</S.Title>
      <S.SubContainer>
        {!isQuizGraded ? (
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
              colorName={inputValue === "답" ? "green" : "red"}
              imgURL={inputValue === "답" ? "/correct.png" : "/wrong.png"}
              onClick={() => {}}
            />
            {inputValue !== "답" && (
              <SelectBtn
                text={"답"}
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
