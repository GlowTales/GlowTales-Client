import { SelectOptionProps } from "@type/selectOption";
import * as S from "./SelectOption.styled";

const SelectOption = ({ text, imgURL }: SelectOptionProps) => {
  return (
    <S.Wrapper>
      <S.box>
        <img src={imgURL} />
      </S.box>
      <div>{text} 만들기</div>
    </S.Wrapper>
  );
};

export default SelectOption;
