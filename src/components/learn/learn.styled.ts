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
  font-weight: 400;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90%;
  min-height: 100vh;
  overflow: scroll;
  height: fit-content;
  padding-bottom: 2rem;
`;

export const Input = styled.input<{ $isInputValid: string | null }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1.5rem;
  width: 100%;
  height: 5rem;
  border: 1px solid
    ${({ $isInputValid }) =>
      $isInputValid ? colorSets["yellow"].border : colorSets["gray"].border};
  background-color: ${({ $isInputValid }) =>
    $isInputValid ? colorSets["yellow"].background : "none"};
  border-radius: 6px;
  font-size: 2rem;
  font-weight: 700;
  font-family: "NanumSquareRound";
  box-sizing: border-box;
  &:focus {
    outline: none;
  }
`;

export const WordButtonContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
`;

export const WordButton = styled.button<{ $isSelected: boolean }>`
  border: 1px solid
    ${({ $isSelected }) =>
      $isSelected ? colorSets["yellow"].border : colorSets["gray"].border};
  background-color: ${({ $isSelected }) =>
    $isSelected ? colorSets["yellow"].background : "white"};
  border-radius: 4px;
  height: 5rem;
  padding: 0 3rem;
  font-size: 2rem;
  font-weight: 400;
  cursor: pointer;
`;

export const ResultSentence = styled.div<{ $isCorrect: boolean }>`
  font-size: 1.5rem;
  font-weight: 600;
  padding-top: 1rem;
  color: ${({ $isCorrect }) => ($isCorrect ? "green" : "red")};
`;

export const SelectedSentence = styled.div<{
  $isPlaceholder: boolean;
  $state: string;
}>`
  display: flex;
  flex-wrap: wrap;
  justify-content: start;
  align-items: center;
  padding: 1rem 1.5rem;
  width: 90%;
  min-height: 3rem;
  height: fit-content;
  line-height: 3rem;
  border: 1px solid ${({ $state }) => colorSets[$state].border};
  border-radius: 8px;
  background-color: ${({ $state }) => colorSets[$state].background};
  font-size: 1.8rem;
  font-weight: 400;
  color: ${({ $isPlaceholder }) => ($isPlaceholder ? "#b1b1b1" : "black")};
`;

export const PreContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 70vh;
  gap: 1rem;
`;

export const PreTitle = styled.div`
  font-size: 2.8rem;
  font-weight: 800;
  margin-bottom: 2rem;
`;

export const PreSubTitle = styled.div`
  font-size: 1.6rem;
  font-weight: 400;
  color: #f7a300;
`;

export const SelectIcon = styled.img`
  width: 2.3rem;
  height: 2.3rem;
  margin-right: 10px;
  vertical-align: middle;
`;
