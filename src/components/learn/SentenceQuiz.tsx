import { useEffect, useState } from "react";
import * as S from "./learn.styled";
import { SentenceQuizProps } from "@type/learning";

const shuffleArray = (array: Array<{ order: number; word: string }>) => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

const SentenceQuiz = ({ setter, data, isQuizGraded }: SentenceQuizProps) => {
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
    return selectedWords.every(
      (wordObj, index) => wordObj.order === data.sequenceList[index].order
    );
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
          {selectedWords.length === 0
            ? "단어를 선택해주세요"
            : selectedWords.map((wordObj) => wordObj.word).join(" ")}
        </S.SelectedSentence>
        {isQuizGraded && !isCorrectOrder() && (
          <S.ResultSentence $isCorrect={isCorrectOrder()}>
            {"정답: " +
              data.sequenceList.map((wordObj) => wordObj.word).join(" ")}
          </S.ResultSentence>
        )}
      </S.SubContainer>
      <S.WordButtonContainer>{renderWordButtons()}</S.WordButtonContainer>
    </S.Container>
  );
};

export default SentenceQuiz;
