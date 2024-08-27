import { useEffect, useState } from "react";
import { charElements, charNextElements } from "@utils/defaultData";

type Character = string | number | null;

const useCharacters = () => {
  const [characters, setCharacters] = useState<Character>(null);
  const [selectedCharText, setSelectedCharText] = useState<string[]>([]);
  const [selectedCharValue, setSelectedCharValue] = useState<string[]>([]);
  const [useNextElements, setUseNextElements] = useState<boolean>(false); // 상태 변수 추가

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

      if (!useNextElements) {
        setUseNextElements(true);
      }
    }
  }, [characters]);

  const availableCharacters = (
    useNextElements ? charNextElements : charElements
  ).filter((element) => !selectedCharValue.includes(element.value as string));

  return {
    characters,
    setCharacters,
    selectedCharText,
    selectedCharValue,
    availableCharacters,
  };
};

export default useCharacters;
