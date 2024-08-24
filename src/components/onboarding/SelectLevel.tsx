import * as S from "./onboarding.styled";
import useSelectLevel from "@hooks/useSelectLevel";
import { nationElements } from "@utils/defaultData";
import SelectOptionList from "@common/selectOption/SelectOptionList";

interface SelectLevelProps {
  languageId: number | string;
  setter: (value: string | number | null) => void;
}

const SelectLevel = ({ languageId, setter }: SelectLevelProps) => {
  const { selectedLevel, setSelectedLevel, levelOptions } = useSelectLevel();
  const language = nationElements.find(
    (element) => element.value === languageId
  );

  const handleOptionChange = (value: string | number | null) => {
    setSelectedLevel(value);
    setter(value);
  };

  return (
    <S.Container>
      <S.Title>{language?.text}를 얼마나 알고 계신가요?</S.Title>
      <S.SubContainer>
        <SelectOptionList
          selectList={levelOptions.map((option) => ({
            text: option.text,
            value: option.value,
            state: selectedLevel === option.value ? "selected" : "default",
          }))}
          setter={handleOptionChange}
        />
      </S.SubContainer>
    </S.Container>
  );
};

export default SelectLevel;
