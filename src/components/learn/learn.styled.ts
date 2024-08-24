import { colorSets } from "@utils/defaultData";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 70%;
  gap: 4rem;
`;

export const Title = styled.div`
  font-size: 2.5rem;
  font-weight: 800;
`;

export const SubContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 2rem;
`;

export const SubTitle = styled.div`
  font-size: 2rem;
  font-weight: 700;
  color: #b1b1b1;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 90%;
  min-height: 88%;
`;

export const Input = styled.input<{ $isInputValid: string | null }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1.5rem;
  box-sizing: border-box;
  width: 100%;
  height: 5rem;
  font-size: 2rem;
  font-weight: 700;
  border: 1px solid
    ${({ $isInputValid }) =>
      $isInputValid ? colorSets["yellow"].border : colorSets["gray"].border};
  background-color: ${({ $isInputValid }) =>
    $isInputValid ? colorSets["yellow"].background : "none"};
  border-radius: 6px;
`;
