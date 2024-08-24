import { SelectBtnProps } from "@type/selectOption";
import * as S from "./SelectOption.styled";
import { colorSets } from "@utils/defaultData";

const SelectBtn = (props: SelectBtnProps) => {
  const colorSet = colorSets[props.colorName];

  return (
    <S.SelectBtnWrapper $colorSet={colorSet} onClick={props.onClick}>
      {props.text}
      {props.imgURL && <S.SelectIcon src={props.imgURL} alt="선택지" />}
    </S.SelectBtnWrapper>
  );
};

export default SelectBtn;
