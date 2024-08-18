import * as S from "./SelectOption.styled";

const SelectOption = ({ text }: { text: string }) => {
  return (
    <S.Wrapper>
      <S.box />
      <div>{text}으로 만들기</div>
    </S.Wrapper>
  );
};

export default SelectOption;
