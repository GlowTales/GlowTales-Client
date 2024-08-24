import Dropdown from "@components/common/dropDown/Dropdown";
import * as S from "./onboarding.styled";
import { nationElements } from "@utils/defaultData";

interface SelectLanguageProps {
  setter: (value: string | number | null) => void;
}

const SelectLanguage = ({ setter }: SelectLanguageProps) => {
  return (
    <S.Container>
      <S.Title>어떤 언어를 배우시나요?</S.Title>
      <S.SubContainer>
        <S.SubTitle>언어</S.SubTitle>
        <Dropdown selectList={nationElements} setter={setter} />
      </S.SubContainer>
    </S.Container>
  );
};

export default SelectLanguage;
