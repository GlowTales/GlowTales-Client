import { useEffect, useState } from "react";
import * as S from "../learn.styled";
import { SentenceQuizProps } from "@type/learning";
import { shuffleArray } from "@utils/learnUtil";

const SentenceQuiz = ({
  setter,
  data,
  isQuizGraded,
  index,
  gradeHandler,
}: SentenceQuizProps) => {
  const [selectedWords, setSelectedWords] = useState<
    Array<{ order: number; word: string }>
  >([]);
  const [shuffledWords, setShuffledWords] = useState<
    Array<{ order: number; word: string }>
  >([]);

  useEffect(() => {
    setSelectedWords([]);
    setShuffledWords(shuffleArray(data.sequenceList));
  }, [data]);

  useEffect(() => {
    if (isQuizGraded) {
      if (isCorrectOrder()) {
        gradeHandler(index);
      }
    }
  }, [isQuizGraded, index]);

  const handleWordClick = (wordObj: { order: number; word: string }) => {
    setSelectedWords((prev) => {
      const isSelected = prev.find((item) => item.order === wordObj.order);
      if (isSelected) {
        return prev.filter((item) => item.order !== wordObj.order);
      } else {
        return [...prev, wordObj];
      }
    });
  };

  const isCorrectOrder = () => {
    if (selectedWords.length !== data.sequenceList.length) return false;
    const result = selectedWords.every(
      (wordObj, index) => wordObj.order === data.sequenceList[index].order
    );
    return result;
  };

  const renderWordButtons = () => {
    return shuffledWords.map((wordObj) => {
      const isSelected = selectedWords.find(
        (item) => item.order === wordObj.order
      );
      return (
        <S.WordButton
          key={wordObj.order}
          onClick={!isQuizGraded ? () => handleWordClick(wordObj) : () => {}}
          $isSelected={!!isSelected}
        >
          {wordObj.word}
        </S.WordButton>
      );
    });
  };

  useEffect(() => {
    if (selectedWords.length === data.sequenceList.length) {
      const completedSentence = selectedWords
        .map((wordObj) => wordObj.word)
        .join(" ");
      setter(completedSentence);
    } else {
      setter(null);
    }
  }, [selectedWords]);

  return (
    <S.Container>
      <S.Title>
        {!isQuizGraded
          ? "문장을 배열해볼까요?"
          : isCorrectOrder()
            ? "정답입니다!"
            : "오답입니다"}
      </S.Title>
      <S.SubContainer>
        <S.SubTitle>{data.question}</S.SubTitle>
        <S.SelectedSentence
          $isPlaceholder={selectedWords.length === 0}
          $state={!isQuizGraded ? "gray" : isCorrectOrder() ? "green" : "red"}
        >
          {isQuizGraded && (
            <S.SelectIcon
              src={isCorrectOrder() ? "/correct.png" : "/wrong.png"}
              alt="선택지"
            />
          )}
          {selectedWords.length === 0
            ? "단어를 선택해주세요"
            : selectedWords.map((wordObj) => wordObj.word).join(" ")}
        </S.SelectedSentence>
        {isQuizGraded && !isCorrectOrder() && (
          <S.SelectedSentence
            $isPlaceholder={selectedWords.length === 0}
            $state={"green"}
          >
            {isQuizGraded && <S.SelectIcon src={"/correct.png"} alt="선택지" />}
            {data.sequenceList.map((wordObj) => wordObj.word).join(" ")}
          </S.SelectedSentence>
        )}
      </S.SubContainer>
      <S.WordButtonContainer>{renderWordButtons()}</S.WordButtonContainer>
    </S.Container>
  );
};

export default SentenceQuiz;
