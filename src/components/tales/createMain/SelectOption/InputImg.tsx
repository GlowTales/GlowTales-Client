import { ChangeEvent } from "react";
import * as S from "./SelectOption.styled";
import { createKeyword } from "../../../../apis/createTales";
import { useNavigate } from "react-router-dom";
import { InputImgProps } from "@type/selectOption";

const InputImg = ({ setIsLoading }: InputImgProps) => {
  const navigate = useNavigate();

  const insertImg = async (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const formData = new FormData();
      formData.append("file", file);
      if (setIsLoading) setIsLoading(true);
      const keywords: string[] = await createKeyword(formData);
      navigate("/createTale/keyword", { state: { keywords } });
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
