import * as S from "./CreateMain.styled";
import SelectOption from "./SelectOption/SelectOption";
import TabBar from "@components/common/tabBar/TabBar";
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
          <S.Wrapper>
            <img src="/topGraphic.png" id="topGraphic" />
            <S.SelectContainer>
              <S.Title>동화를 만들어볼까요?</S.Title>
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
