import { getWord } from "@apis/home";
import {
  CommonTitle,
  CommonTitleWrapper,
} from "@components/common/common.styled";
import { WordProps } from "@type/card";
import * as S from "./Word.styled";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaAngleRight } from "react-icons/fa6";

const Word = () => {
  const navigate = useNavigate();
  const handleMoreClick = () => {
    navigate("/learnTale/moreWord", { state: { word } });
  };
  const [word, setWord] = useState<WordProps[]>([]);
  const sliceWord = word.slice(0, 6);

  const [selectedWords, setSelectedWords] = useState<WordProps[]>([]);

  const handleWordClick = (selectedWord: WordProps) => {
    if (selectedWords.some((w) => w.word === selectedWord.word)) {
      setSelectedWords(
        selectedWords.filter((w) => w.word !== selectedWord.word)
      );
    } else {
      setSelectedWords([...selectedWords, selectedWord]);
    }
  };

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
          {"더보기"}
          <FaAngleRight />
        </div>
      </CommonTitleWrapper>
      <S.GridWrapper>
        {sliceWord.map((word: WordProps) => {
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
    </>
  );
};

export default Word;
