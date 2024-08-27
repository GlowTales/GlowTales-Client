import { CardProps } from "@type/card";
import * as S from "./Card.styled";
import { useNavigate } from "react-router-dom";

const pairs = [
  ["#FFC300", "#FFE249", "250px", "/taleGraphic1.png"],
  ["#B590FF", "#CBB2FF", "220px", "/taleGraphic2.png"],
  ["#609EFF", "#A5C8FF", "240px", "/taleGraphic3.png"],
  ["#24E47F", "#93F2C0", "200px", "/taleGraphic4.png"],
];

const getRandomColorPair = () => {
  const randomIndex = Math.floor(Math.random() * pairs.length);
  return pairs[randomIndex];
};

const Card = (props: CardProps) => {
  const [backgroundColor1, backgroundColor2, height, imgSrc] =
    getRandomColorPair();

  const navigate = useNavigate();

  const goTaleRead = () => {
    navigate(`/readTale`, { state: { response: { taleId: props.taleId } } });
  };

  const goTaleLearn = () => {
    navigate(`/learnTale/pre`, { state: { taleId: props.taleId } });
  };

  const goTaleQuiz = () => {
    navigate(`/learnTale/quiz`, { state: props.languageTaleId });
  };

  return (
    <>
      <S.CardContainer
        onClick={() => {
          goTaleRead();
        }}
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
            props.firstQuizCount !== undefined ? (
              <S.BtnWrapper>
                <div>{props.firstQuizCount}/10</div>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    goTaleQuiz();
                  }}
                >
                  {props.btnText}
                </button>
              </S.BtnWrapper>
            ) : (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  goTaleLearn();
                }}
              >
                {props.btnText}
              </button>
            )
          ) : (
            <S.CardImg src={imgSrc} />
          )}
        </S.CardWrapper>
      </S.CardContainer>
    </>
  );
};

export default Card;
