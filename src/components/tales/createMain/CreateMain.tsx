import Header from "@components/common/header/Header";
import * as S from "./CreateMain.styled";
import SelectOption from "./SelectOption/SelectOption";
import TabBar from "@components/common/tabBar/TabBar";

const CreateMain = () => {
  return (
    <>
      <Header text="동화 만들기" />
      <S.Wrapper>
        <div></div>
        {/* <img src="/graphic.png" id="topGraphic" /> */}
        <S.SelectContainer>
          <S.Title>동화를 만들어볼까요?</S.Title>
          <S.OptionContainer>
            <SelectOption text="사진" />
            <SelectOption text="글" />
          </S.OptionContainer>
        </S.SelectContainer>
        <div></div>

        {/* <img src="/graphic.png" id="btmGraphic" /> */}
      </S.Wrapper>
      <TabBar />
    </>
  );
};

export default CreateMain;
