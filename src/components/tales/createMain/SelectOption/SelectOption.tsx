import { SelectOptionProps } from "@type/selectOption";
import * as S from "./SelectOption.styled";
import InputImg from "./InputImg";
import { useNavigate } from "react-router-dom";
import { colorSets } from "@utils/defaultData";

const SelectOption = ({ text, imgURL, setIsLoading }: SelectOptionProps) => {
  if (text.includes("사진")) {
    return (
      <S.ImgLabel htmlFor="imageInput">
        <S.Wrapper $colorSet={colorSets.lemonYellow}>
          <InputImg setIsLoading={setIsLoading} />
          <S.ImgBox>
            <img src={imgURL} />
          </S.ImgBox>
          <div>{text} 만들기</div>
        </S.Wrapper>
      </S.ImgLabel>
    );
  } else {
    const navigate = useNavigate();

    return (
      <S.Wrapper
        $colorSet={colorSets.lemonYellow}
        onClick={() => {
          navigate("/createTale/details");
        }}
      >
        <S.ImgBox>
          <img src={imgURL} />
        </S.ImgBox>
        <div>{text} 만들기</div>
      </S.Wrapper>
    );
  }
};

export default SelectOption;
