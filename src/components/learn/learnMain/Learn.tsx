import {
  CommonTitle,
  CommonTitleWrapper,
  ItemWrapper,
  MainWrapper,
} from "@components/common/common.styled";
import * as S from "./Learn.styeld";
import TabBar from "@components/common/tabBar/TabBar";

const Learn = () => {
  const handleMoreClick = () => {
    console.log(1);
  };
  return (
    <>
      <MainWrapper>
        <CommonTitleWrapper>
          <CommonTitle>단어장</CommonTitle>
          <div className="more" onClick={handleMoreClick}>
            {"더보기 >"}
          </div>
        </CommonTitleWrapper>
        <S.GridWrapper>
          <S.WordCard>단어장</S.WordCard>
          <S.WordCard>단어장</S.WordCard>
          <S.WordCard>단어장</S.WordCard>
          <S.WordCard>단어장</S.WordCard>
        </S.GridWrapper>
        <CommonTitleWrapper>
          <CommonTitle>아직 학습하지 않은 동화</CommonTitle>
          <div className="more" onClick={handleMoreClick}>
            {"더보기 >"}
          </div>
        </CommonTitleWrapper>
        <ItemWrapper>
          <S.WordCard>단어장</S.WordCard>
          <S.WordCard>단어장</S.WordCard>
          <S.WordCard>단어장</S.WordCard>
          <S.WordCard>단어장</S.WordCard>
        </ItemWrapper>
        <CommonTitleWrapper>
          <CommonTitle>최근 학습한 동화</CommonTitle>
          <div className="more" onClick={handleMoreClick}>
            {"더보기 >"}
          </div>
        </CommonTitleWrapper>
        <ItemWrapper>
          <S.WordCard>단어장</S.WordCard>
          <S.WordCard>단어장</S.WordCard>
          <S.WordCard>단어장</S.WordCard>
          <S.WordCard>단어장</S.WordCard>
        </ItemWrapper>
      </MainWrapper>
      <TabBar />
    </>
  );
};

export default Learn;
