import { CommonTitle } from "@components/common/common.styled";
import Card from "./Card";
import * as S from "./HomeRecentTales.styled";
import { getToken } from "@apis/login";
import { getRecentTale } from "@apis/createTales";

const HomeRecentTales = () => {
  getToken();
  const response = getRecentTale();
  console.log(response);
  const onClick = () => {
    console.log("A");
  };
  return (
    <S.Wrapper>
      <S.TitleWrapper>
        <CommonTitle>최근 생성한 동화</CommonTitle>
        <div className="more" onClick={onClick}>
          {"더보기 >"}
        </div>
      </S.TitleWrapper>
      <S.CardWrapper>
        <Card />
      </S.CardWrapper>
      <img src="shelf.png" />
      <S.CardWrapper>
        <Card />
      </S.CardWrapper>
      <img src="shelf.png" />
    </S.Wrapper>
  );
};

export default HomeRecentTales;
