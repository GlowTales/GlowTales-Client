import { useEffect, useState } from "react";
import * as S from "./learn.styled";

interface SentenceQuizProps {
  setter: (value: string | number | null) => void;
  currentStep: number;
  quizData: SentenceQuizData;
}
interface SentenceQuizData {
  question: string;
  sequenceList: Array<{ order: number; word: string }>;
}

const shuffleArray = (array: Array<{ order: number; word: string }>) => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

const SentenceQuiz = ({ setter, currentStep, quizData }: SentenceQuizProps) => {
  const [selectedWords, setSelectedWords] = useState<
    Array<{ order: number; word: string }>
  >([]);
  const [shuffledWords, setShuffledWords] = useState<
    Array<{ order: number; word: string }>
  >([]);

  useEffect(() => {
    setShuffledWords(shuffleArray(quizData.sequenceList));
  }, []);

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
    if (selectedWords.length !== quizData.sequenceList.length) return false;
    return selectedWords.every(
      (wordObj, index) => wordObj.order === quizData.sequenceList[index].order
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
          onClick={
            currentStep !== 6 ? () => handleWordClick(wordObj) : () => {}
          }
          $isSelected={!!isSelected}
        >
          {wordObj.word}
        </S.WordButton>
      );
    });
  };

  useEffect(() => {
    if (selectedWords.length === quizData.sequenceList.length) {
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
        {currentStep !== 6
          ? "문장을 배열해볼까요?"
          : isCorrectOrder()
            ? "정답입니다!"
            : "오답입니다"}
      </S.Title>
      <S.SubContainer>
        <S.SubTitle>{quizData.question}</S.SubTitle>
        <S.SelectedSentence
          $isPlaceholder={selectedWords.length === 0}
          $state={
            currentStep !== 6 ? "gray" : isCorrectOrder() ? "green" : "red"
          }
        >
          {selectedWords.length === 0
            ? "단어를 선택해주세요"
            : selectedWords.map((wordObj) => wordObj.word).join(" ")}
        </S.SelectedSentence>
        {currentStep === 6 && !isCorrectOrder() && (
          <S.ResultSentence $isCorrect={isCorrectOrder()}>
            {"정답: " +
              quizData.sequenceList.map((wordObj) => wordObj.word).join(" ")}
          </S.ResultSentence>
        )}
      </S.SubContainer>
      <S.WordButtonContainer>{renderWordButtons()}</S.WordButtonContainer>
    </S.Container>
  );
};

export default SentenceQuiz;
