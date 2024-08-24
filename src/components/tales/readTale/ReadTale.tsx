import Header from "@components/common/header/Header";
import * as S from "./ReadTale.styled";
import Dropdown from "@components/common/dropDown/Dropdown";
import { nationElements } from "@pages/OnboardingPage";
import { useState } from "react";
import NextBtn from "@components/common/NextBtn";
import LoadingScreen from "@components/common/spinner/LoadingScreen";

const ReadTale = () => {
  const [result, setResult] = useState<string | number | null>(null);
  const data = null;

  const onClick = () => {
    console.log(result);
  };
  return (
    <>
      <Header text="동화 읽기" />
      <S.Wrapper>
        {data ? (
          <>
            <S.ReadTaleHead>
              <S.TitleWrapper>
                <S.Complete>동화가 완성되었어요!</S.Complete>
                <S.Title>제목: 사과나무와 작은 동물들</S.Title>
              </S.TitleWrapper>
              <Dropdown
                selectList={nationElements}
                setter={setResult}
                width="30%"
              />
            </S.ReadTaleHead>
            <S.TaleWrapper></S.TaleWrapper>
            <S.BtnWrapper>
              <NextBtn
                width="48%"
                isActive={true}
                text="음성으로 듣기"
                handleBtn={onClick}
              />
              <NextBtn
                width="48%"
                isActive={true}
                text="학습하기"
                handleBtn={onClick}
              />
            </S.BtnWrapper>
          </>
        ) : (
          <LoadingScreen text="동화" />
        )}
      </S.Wrapper>
    </>
  );
};

export default ReadTale;
