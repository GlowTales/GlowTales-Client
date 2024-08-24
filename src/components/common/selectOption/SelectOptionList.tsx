import { SelectListProps } from "@type/selectList";
import SelectBtn from "./SelectBtn";
import * as S from "./SelectOptionList.styled";

const SelectOptionList = (props: SelectListProps) => {
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

export default SelectOptionList;