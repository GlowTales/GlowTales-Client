import SelectOptionList from "@components/common/selectOption/SelectOptionList";
import * as S from "./learn.styled";
import { useEffect, useState } from "react";
import { ChoiceQuizProps } from "@type/learning";

const ChoiceQuiz = ({
  setter,
  data,
  isQuizGraded,
}: ChoiceQuizProps) => {
  const [select, setSelect] = useState<string | number | null>(null);

  useEffect(() => {
    setter(null);
    setSelect(null);
  }, [data]);

  const handleOptionChange = (text: string | number | null) => {
    setSelect(text as string);
    setter(text);
  };

  return (
    <S.Container>
      <S.Title>{data.question}</S.Title>
      <S.SubContainer>
        <SelectOptionList
          selectList={data.choiceList.map((option, id) => ({
            text: option.sunji,
            value: id + 1,
            state: isQuizGraded
              ? id + 1 === select
                ? option.isCorrect === 1
                  ? "wrong"
                  : "correct"
                : option.isCorrect === 0
                  ? "correct"
                  : "default"
              : id + 1 === select
                ? "selected"
                : "default",
          }))}
          setter={handleOptionChange}
        />
      </S.SubContainer>
    </S.Container>
  );
};

export default ChoiceQuiz;
