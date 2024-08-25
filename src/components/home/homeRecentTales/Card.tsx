import * as S from "./Card.styled";

// 색상 쌍 배열
const colorPairs = [
  ["#B590FF", "#CBB2FF"],
  ["#609EFF", "#A5C8FF"],
  ["#FFC300", "#FFE249"],
  ["#24E47F", "#93F2C0"],
];

// 랜덤 색상 쌍 선택 함수
const getRandomColorPair = () => {
  const randomIndex = Math.floor(Math.random() * colorPairs.length);
  return colorPairs[randomIndex];
};

const Card = () => {
  // 각 카드의 색상 쌍을 독립적으로 선택하기 위해 Card 컴포넌트 내부에서 색상 쌍을 결정
  const renderCard = () => {
    return Array.from({ length: 3 }, (_, index) => {
      const [backgroundColor1, backgroundColor2] = getRandomColorPair();
      return (
        <S.Card
          key={index}
          height="230px"
          backgroundColor1={backgroundColor1}
          backgroundColor2={backgroundColor2}
        >
          <div>ㅇㅇ</div>
        </S.Card>
      );
    });
  };

  return <>{renderCard()}</>;
};

export default Card;
