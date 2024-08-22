import { ChangeEvent } from "react";
import * as S from "./SelectOption.styled";
import { createWithImg } from "../../../../apis/createTales";

const InputImg = () => {
  const insertImg = async (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const formData = new FormData();
      formData.append("file", file);
      try {
        const result = await createWithImg(formData);
        console.log(result);
      } catch (error) {
        console.error("파일 업로드 중 오류 발생:", error);
      }
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
