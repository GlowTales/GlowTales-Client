import Header from "@components/common/header/Header";
import * as S from "./CreateMain.styled";
import SelectOption from "./SelectOption/SelectOption";
import TabBar from "@components/common/tabBar/TabBar";
import { CommonTitle } from "@components/common/common.styled";
import { useState } from "react";
import LoadingSpinner from "@components/common/spinner/LoadingSpinner";

const CreateMain = () => {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <>
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <>
          <Header text="동화 만들기" />
          <S.Wrapper>
            <img src="/topGraphic.png" id="topGraphic" />
            <S.SelectContainer>
              <CommonTitle>동화를 만들어볼까요?</CommonTitle>
              <S.OptionContainer>
                <SelectOption
                  text="사진으로"
                  imgURL="/picture.png"
                  setIsLoading={setIsLoading}
                />
                <SelectOption text="글로" imgURL="/text.png" />
              </S.OptionContainer>
            </S.SelectContainer>
            <img src="/btmGraphic.png" id="btmGraphic" />
          </S.Wrapper>
          <TabBar />
        </>
      )}
    </>
  );
};

export default CreateMain;
