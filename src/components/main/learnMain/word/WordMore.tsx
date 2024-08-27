import Header from "@components/common/header/Header";
import { useLocation, useNavigate } from "react-router-dom";
import * as S from "./Word.styled";
import { WordProps } from "@type/card";
import { MainWrapper } from "@components/common/common.styled";
import { useState } from "react";

const WordMore = () => {
  const location = useLocation();
  const { word } = location.state || { word: [] };
  const [selectedWords, setSelectedWords] = useState<WordProps[]>([]);

  const navigate = useNavigate();

  const handleWordClick = (selectedWord: WordProps) => {
    if (selectedWords.some((w) => w.word === selectedWord.word)) {
      setSelectedWords(
        selectedWords.filter((w) => w.word !== selectedWord.word)
      );
    } else {
      setSelectedWords([...selectedWords, selectedWord]);
    }
  };

  return (
    <>
      <Header text="단어장" backBtn={() => navigate(-1)} />
      <MainWrapper>
        <S.GridWrapper>
          {word.map((word: WordProps) => {
            const isSelected = selectedWords.some((w) => w.word === word.word);
            return (
              <S.WordCard
                key={word.word}
                $isSelected={isSelected}
                onClick={() => handleWordClick(word)}
              >
                {isSelected ? word.origin_word : word.word}
              </S.WordCard>
            );
          })}
        </S.GridWrapper>
      </MainWrapper>
    </>
  );
};

export default WordMore;
