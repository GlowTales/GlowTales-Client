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

  const goTaleRead = (taleId: number) => {
    navigate(`/readTale`, { state: { response: { taleId: taleId } } });
  };

  const goTaleLearn = (taleId: number) => {
    console.log("이동");
    navigate(`/learnTale/pre`, { state: { taleId } });
  };

  const goTaleQuiz = (languageTaleId: number) => {
    console.log("이동");
    console.log(languageTaleId);
    navigate(`/learnTale/quiz`, { state: languageTaleId });
  };

  return (
    <>
      <S.CardContainer
        onClick={() => {
          goTaleRead(props.taleId);
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
            props.point ? (
              <S.BtnWrapper>
                <div>{props.point}</div>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    goTaleQuiz(props.languageTaleId);
                  }}
                >
                  {props.btnText}
                </button>
              </S.BtnWrapper>
            ) : (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  goTaleLearn(props.languageTaleId);
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
