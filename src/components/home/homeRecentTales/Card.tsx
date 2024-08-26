import { CardProps } from "@type/card";
import * as S from "./Card.styled";

const pairs = [
  ["#FFC300", "#FFE249", "250px", "taleGraphic1.png"],
  ["#B590FF", "#CBB2FF", "220px", "taleGraphic2.png"],
  ["#609EFF", "#A5C8FF", "240px", "taleGraphic3.png"],
  ["#24E47F", "#93F2C0", "200px", "taleGraphic4.png"],
];

const getRandomColorPair = () => {
  const randomIndex = Math.floor(Math.random() * pairs.length);
  return pairs[randomIndex];
};

const Card = (props: CardProps) => {
  const [backgroundColor1, backgroundColor2, height, imgSrc] =
    getRandomColorPair();

  return (
    <>
      <S.CardContainer
        onClick={props.readFunction}
        height={height}
        backgroundColor1={backgroundColor1}
        backgroundColor2={backgroundColor2}
      >
        <S.CardWrapper>
          <S.TitleWrapper>
            <S.CardTitle>{props.title}</S.CardTitle>
            <S.CardCreatedAt>{props.createdAt}</S.CardCreatedAt>
          </S.TitleWrapper>
          {props.btnText ? (
            <button onClick={props.learnFunction}>{props.btnText}</button>
          ) : (
            <S.CardImg src={imgSrc} />
          )}
        </S.CardWrapper>
      </S.CardContainer>
    </>
  );
};

export default Card;
