import styled from "styled-components";

export const GridWrapper = styled.div`
  width: 100%;
  justify-content: center;
  align-items: flex-end;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

export const WordCard = styled.div<{ $isSelected: boolean }>`
  height: 55px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
  font-weight: 700;
  padding: 1rem;
  border-radius: 10px;
  background-color: ${({ $isSelected }) =>
    $isSelected ? "#fff7cc" : "#f4f4f4"};
  border: 1px solid
    ${({ $isSelected }) => ($isSelected ? "#ffc300" : "#dcdcdc")};
  cursor: pointer;
`;
