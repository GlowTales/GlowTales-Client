import Header from "@components/common/header/Header";
import * as S from "./CreateMain.styled";
import SelectOption from "./SelectOption/SelectOption";
import TabBar from "@components/common/tabBar/TabBar";

const CreateMain = () => {
  return (
    <>
      <Header text="동화 만들기" />
      <S.Wrapper>
        <img src="/topGraphic.png" id="topGraphic" />
        <S.SelectContainer>
          <S.Title>동화를 만들어볼까요?</S.Title>
          <S.OptionContainer>
            <SelectOption text="사진으로" imgURL="/picture.png" />
            <SelectOption text="글로" imgURL="/text.png" />
          </S.OptionContainer>
        </S.SelectContainer>
        <img src="/btmGraphic.png" id="btmGraphic" />
      </S.Wrapper>
      <TabBar />
    </>
  );
};

export default CreateMain;
