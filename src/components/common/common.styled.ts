import styled from "styled-components";

export const CommonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  min-height: 100%;
  height: fit-content;
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

export const CommonTitleWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin: 5px;
  .more {
    margin-right: 1rem;
    font-size: 1.8rem;
    text-align: center;
    font-weight: 700;
    color: #bdbdbd;
    cursor: pointer;
  }
`;

export const ItemWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  flex-wrap: wrap;
  gap: 1rem;
`;

export const MainWrapper = styled.div`
  width: 90%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 3rem;
  padding-top: 3rem;
`;
