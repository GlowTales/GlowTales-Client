import { useEffect, useState } from "react";
import { charElements } from "@utils/defaultData";

type Character = string | number | null;

const useCharacters = () => {
  const [characters, setCharacters] = useState<Character>(null);
  const [selectedCharText, setSelectedCharText] = useState<string[]>([]);
  const [selectedCharValue, setSelectedCharValue] = useState<string[]>([]);

  useEffect(() => {
    if (characters !== null) {
      const charText = charElements.find(
        (element) => element.value === characters
      )?.text;
      const charValue = charElements.find(
        (element) => element.value === characters
      )?.value;

      if (selectedCharText.length >= 3) {
        alert("등장인물은 3개까지입니다!");
        setCharacters(null);
        return;
      }

      setSelectedCharText((prevSelectedCharacters: string[]) => [
        ...prevSelectedCharacters,
        String(charText),
      ]);

      setSelectedCharValue((prevSelectedCharacters: string[]) => [
        ...prevSelectedCharacters,
        String(charValue),
      ]);

      setCharacters(null);
    }
  }, [characters]);

  const availableCharacters = charElements.filter((element) => {
    // "자동" 옵션을 나타내는 값이 있는 경우, 선택된 캐릭터가 하나도 없을 때만 표시
    const isAutoOption = element.value === null; // 예를 들어 "auto"가 자동을 나타낸다고 가정
    const isSelected = selectedCharValue.includes(element.value as string);
    return (!isAutoOption || selectedCharText.length === 0) && !isSelected;
  });

  return {
    characters,
    setCharacters,
    selectedCharText,
    selectedCharValue,
    availableCharacters,
  };
};

export default useCharacters;
