import { useState } from "react";

const useSelectLevel = () => {
  const [selectedLevel, setSelectedLevel] = useState<string | number | null>(
    null
  );

  const levelOptions = [
    { text: "처음 배워요", value: "1000" },
    { text: "자주 사용되는 단어 몇 개를 알고 있어요", value: "2000" },
    { text: "기본적인 대화를 할 수 있어요", value: "3000" },
    { text: "다양한 주제에 대해 이야기할 수 있어요", value: "4000" },
    { text: "대부분의 주제에 대해 상세하게 논의할 수 있어요", value: "5000" },
  ];

  return {
    selectedLevel,
    setSelectedLevel,
    levelOptions,
  };
};

export default useSelectLevel;
