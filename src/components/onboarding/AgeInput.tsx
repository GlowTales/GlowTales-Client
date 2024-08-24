import { colorSets } from "@utils/defaultData";
import React, { ChangeEvent, KeyboardEvent } from "react";
import styled from "styled-components";

interface AgeInputProps {
  age: string | number | null;
  setter: (value: number | null) => void;
}

const AgeInput = ({ age, setter }: AgeInputProps) => {
  const [isEditing, setIsEditing] = React.useState<boolean>(false);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    const newValue = value === "" ? null : Number(value);
    setter(newValue);
  };

  const handleBlur = () => {
    setIsEditing(false);
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      setIsEditing(false);
    }
  };

  return (
    <Container $age={age}>
      {isEditing ? (
        <Input
          type="number"
          value={age ?? ""}
          onChange={handleChange}
          onBlur={handleBlur}
          onKeyDown={handleKeyDown}
          autoFocus
        />
      ) : (
        <Text onClick={() => setIsEditing(true)}>
          {age !== null ? `만 ${age}세` : "만"}
        </Text>
      )}
    </Container>
  );
};

export default AgeInput;

const Container = styled.div<{ $age?: any }>`
  display: flex;
  align-items: center;
  padding: 0 1rem;
  box-sizing: border-box;
  width: 50%;
  height: 4.5rem;
  font-size: 2rem;
  font-weight: 700;
  border: 1px solid
    ${({ $age }) =>
      $age ? colorSets["yellow"].border : colorSets["gray"].border};
  background-color: ${({ $age }) =>
    $age ? colorSets["yellow"].background : "none"};
  border-radius: 6px;
  position: relative;
`;

const Text = styled.div`
  cursor: pointer;
  width: 100%;
  line-height: 4.5rem;
  padding: 0 1rem;
`;

const Input = styled.input`
  font-size: 2rem;
  width: 100%;
  box-sizing: border-box;
  padding: 0 1.5rem;
  border: none;
  border-radius: 6px;
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  background-color: transparent;
`;
