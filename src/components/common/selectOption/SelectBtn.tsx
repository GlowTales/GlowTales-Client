import { ColorSet, SelectBtnProps } from "@type/selectOption";
import * as S from "./SelectOption.styled";

export const colorSets: { [key: string]: ColorSet } = {
  red: {
    background: "#FFDADA",
    border: "#FF5757",
    color: "black",
  },
  green: {
    background: "#E6FFE5",
    border: "#6CE368",
    color: "black",
  },
  yellow: {
    background: "#FFF9E5",
    border: "#FFC300",
    color: "black",
  },
  gray: {
    background: "none",
    border: "#D8D8D8",
    color: "#909090",
  },
};

const SelectBtn = (props: SelectBtnProps) => {
  const colorSet = colorSets[props.colorName];

  return (
    <S.SelectBtnWrapper $colorSet={colorSet}>
      {props.text}
      {props.imgURL && <S.SelectIcon src={props.imgURL} alt="선택지" />}
    </S.SelectBtnWrapper>
  );
};

export default SelectBtn;
