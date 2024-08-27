import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: 95%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  gap: 2rem;
`;

export const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const Title = styled.div`
  font-size: 2.5rem;
  font-weight: 800;
  text-align: center;
`;

export const KeywordWrapper = styled.div`
  width: 95%;
  height: 50%;
  flex-wrap: wrap;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 1rem;
`;

export const Keyword = styled.div<{ $isSelected: boolean }>`
  width: 190px;
  height: 55px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
  font-weight: 700;
  padding: 1rem;
  border-radius: 10px;
  background-color: ${({ $isSelected }) => ($isSelected ? "#fff7cc" : "#f4f4f4")};
  border: 1px solid ${({ $isSelected }) => ($isSelected ? "#ffc300" : "#dcdcdc")};
  cursor: pointer;
`;
