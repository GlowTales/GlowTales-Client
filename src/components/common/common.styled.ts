import styled from "styled-components";

export const CommonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  min-height: 100vh;
  width: 90%;
`;

export const ColumnFlexBox = styled.div<{ gap: string }>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: ${(props) => props.gap};
`;

export const CommonBtn = styled.div<{ width?: string; $isActive: boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: ${({ width }) => (width ? width : "100%")};
  height: 5rem;
  font-size: 2rem;
  font-weight: 700;
  background-color: ${({ $isActive }) => ($isActive ? "#FFD600" : "#EFEFED")};
  color: ${({ $isActive }) => ($isActive ? "black" : "#B1B1B1")};
  border: 1px solid ${({ $isActive }) => ($isActive ? "#FFC700" : "#E5E5E2")};
  border-radius: 6px;
  cursor: ${({ $isActive }) => ($isActive ? "pointer" : "not-allowed")};
`;

export const CommonTitle = styled.div`
  font-size: 2.5rem;
  font-weight: 800;
  text-align: center;
`;
