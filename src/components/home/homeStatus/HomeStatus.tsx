import * as S from "./HomeStatus.styled";

const HomeStatus = () => {
  let n = 1;
  return (
    <S.Wrapper>
      <S.StatusWrapper>
        <S.Status>
          <S.TitleWrapper>
            <S.StatusTitle>글로우테일과 함께하는</S.StatusTitle>
            <S.StatusTitle>다문화 동화</S.StatusTitle>
          </S.TitleWrapper>
          <S.StateWrapper>
            <S.State>생성한 동화 | {n}개</S.State>
            <S.State>학습한 동화 | {n}개</S.State>
            <S.State>학습 횟수 | {n}개</S.State>
            <S.State>
              학습 중인 언어 | {n}, {n}
            </S.State>
          </S.StateWrapper>
        </S.Status>
        <S.Img src="/statusImg.png" />
      </S.StatusWrapper>
    </S.Wrapper>
  );
};

export default HomeStatus;
