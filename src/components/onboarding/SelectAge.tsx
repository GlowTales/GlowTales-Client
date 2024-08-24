import AgeInput from "./AgeInput";
import * as S from "./onboarding.styled";

interface SelectAgeProps {
  age: string | number | null;
  setter: (value: string | number | null) => void;
}

const SelectAge = ({ age, setter }: SelectAgeProps) => {
  return (
    <S.Container>
      <S.Title>학습자의 나이는 몇살인가요?</S.Title>
      <S.SubContainer>
        <S.SubTitle>만 나이</S.SubTitle>
        <AgeInput age={age} setter={setter} />
      </S.SubContainer>
    </S.Container>
  );
};

export default SelectAge;
