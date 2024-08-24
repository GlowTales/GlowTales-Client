import { SelectOptionProps } from "@type/selectOption";
import SelectBtn from "./SelectBtn";
import * as S from "./SelectOption.styled";
import { useState } from "react";

const SelectOption = (props: SelectOptionProps) => {
  const [selectedValue, setSelectedValue] = useState<string | number | null>(
    null
  );
  const getColorName = (state: string) => {
    switch (state) {
      case "correct":
        return "green";
      case "wrong":
        return "red";
      case "selected":
        return "yellow";
      case "default":
      default:
        return "gray";
    }
  };

  const getImgURL = (state: string) => {
    switch (state) {
      case "correct":
        return "/correct.png";
      case "wrong":
        return "/wrong.png";
      case "selected":
        return "";
      default:
        return "";
    }
  };

  const handleSelect = (value: string | number | null) => {
    setSelectedValue(value);
    props.setter(value);
  };

  return (
    <S.SelectOptionContainer width={props.width}>
      {props.selectList.map((element) => (
        <SelectBtn
          key={element.text}
          text={element.text}
          colorName={getColorName(element.state)}
          imgURL={getImgURL(element.state)}
          onClick={() => handleSelect(element.value)}
        />
      ))}
    </S.SelectOptionContainer>
  );
};

export default SelectOption;
