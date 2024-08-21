import Dropdown from "@common/dropDown/Dropdown";
import { DropdownElement } from "@type/dropdown";
import { useEffect, useState } from "react";
import { CommonWrapper } from "@common/common.styled";

export const nationElements: DropdownElement[] = [
  {
    text: "선택해주세요",
    value: null,
  },
  {
    imgURL: `/america.png`,
    text: "영어",
    value: "영어",
  },
  {
    imgURL: `/china.png`,
    text: "중국어",
    value: "중국어",
  },
  {
    imgURL: `/korea.png`,
    text: "한국어",
    value: "한국어",
  },
  {
    imgURL: `/japan.png`,
    text: "일본어",
    value: "일본어",
  },
];

const OnboardingPage = () => {
  const [result, setResult] = useState<string | number | null>();

  useEffect(() => {
    console.log(result);
  }, [result]);

  return (
    <CommonWrapper>
      <Dropdown selectList={nationElements} setter={setResult} width="55%" />
    </CommonWrapper>
  );
};

export default OnboardingPage;
