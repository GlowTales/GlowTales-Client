import { ChangeEvent } from "react";
import * as S from "./SelectOption.styled";
import { createWithImg } from "../../../../apis/createTales";

const InputImg = () => {
  const insertImg = (e: ChangeEvent<HTMLInputElement>) => {
    let reader = new FileReader();
    const file = e.target.files?.[0];
    const formData = new FormData();
    if (file) {
      formData.append("file", file);
      const result = createWithImg(formData);
    }
  };
  return (
    <S.ImgInput
      id="imageInput"
      type="file"
      accept="image/*"
      onChange={(e) => insertImg(e)}
    />
  );
};

export default InputImg;
