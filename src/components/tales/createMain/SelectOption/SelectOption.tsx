import { SelectOptionProps } from "@type/selectOption";
import * as S from "./SelectOption.styled";
import InputImg from "./InputImg";

const SelectOption = ({ text, imgURL }: SelectOptionProps) => {
  if (text.includes("사진")) {
    return (
      <S.ImgLabel htmlFor="imageInput">
        <S.Wrapper>
          <InputImg />
          <S.ImgBox>
            <img src={imgURL} />
          </S.ImgBox>
          <div>{text} 만들기</div>
        </S.Wrapper>
      </S.ImgLabel>
    );
  } else {
    return (
      <S.Wrapper>
        <S.ImgBox>
          <img src={imgURL} />
        </S.ImgBox>
        <div>{text} 만들기</div>
      </S.Wrapper>
    );
  }
};

export default SelectOption;
