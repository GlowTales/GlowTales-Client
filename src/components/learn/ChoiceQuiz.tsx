import SelectOptionList from "@components/common/selectOption/SelectOptionList";
import * as S from "./learn.styled";
import { useState } from "react";
import { ChoiceQuizProps } from "@type/learning";

const dummy = [
  { text: "사랑", value: true },
  { text: "엄마", value: false },
  { text: "우정", value: false },
  { text: "추억", value: false },
  { text: "행복", value: false },
];

const ChoiceQuiz = ({ setter, currentStep }: ChoiceQuizProps) => {
  const [select, setSelect] = useState<string | number | null>(null);

  const handleOptionChange = (text: string | number | null) => {
    setSelect(text as string);
    setter(text);
    console.log(select);
  };

  return (
    <S.Container>
      <S.Title>Love는 무슨 뜻인가요?</S.Title>
      <S.SubContainer>
        <SelectOptionList
          selectList={dummy.map((option) => ({
            text: option.text,
            value: option.text,
            state:
              currentStep === 2
                ? option.text === select
                  ? option.text === "사랑"
                    ? "correct"
                    : "wrong"
                  : option.text === "사랑"
                    ? "correct"
                    : "default"
                : option.text === select
                  ? "selected"
                  : "default",
          }))}
          setter={currentStep === 1 ? handleOptionChange : () => {}}
        />
      </S.SubContainer>
    </S.Container>
  );
};

export default ChoiceQuiz;
