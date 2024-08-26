import { getWord } from "@apis/home";
import {
  CommonTitle,
  CommonTitleWrapper,
} from "@components/common/common.styled";
import { WordProps } from "@type/card";
import * as S from "./Word.styled";

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Word = () => {
  const navigate = useNavigate();
  const handleMoreClick = () => {
    navigate("/more", { state: { word } });
  };
  const [word, setWord] = useState<WordProps[]>([]);
  const sliceWord = word.slice(0, 6);

  useEffect(() => {
    const fetchWord = async () => {
      const response: WordProps[] = await getWord();
      setWord(response);
    };

    fetchWord();
  }, []);

  return (
    <>
      <CommonTitleWrapper>
        <CommonTitle>단어장</CommonTitle>
        <div className="more" onClick={handleMoreClick}>
          {"더보기 >"}
        </div>
      </CommonTitleWrapper>
      <S.GridWrapper>
        {sliceWord.map((word: WordProps) => (
          <S.WordCard>{word.word}</S.WordCard>
        ))}
      </S.GridWrapper>
    </>
  );
};

export default Word;
