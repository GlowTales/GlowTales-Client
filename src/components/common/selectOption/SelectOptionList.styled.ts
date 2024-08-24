import { ColorSet } from "@type/selectList";
import styled from "styled-components";

export const SelectOptionContainer = styled.div<{ width?: string }>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  gap: 1rem;
  width: ${({ width }) => (width ? width : "100%")};
`;

export const SelectBtnWrapper = styled.div<{ $colorSet: ColorSet }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1.5rem;
  box-sizing: border-box;
  width: 100%;
  height: 5rem;
  font-size: 2rem;
  font-weight: 700;
  background-color: ${({ $colorSet }) => $colorSet.background};
  color: ${({ $colorSet }) => $colorSet.color};
  border: 1px solid ${({ $colorSet }) => $colorSet.border};
  border-radius: 6px;
`;

export const SelectIcon = styled.img`
  width: 2.3rem;
  height: 2.3rem;
  margin-right: 10px;
  vertical-align: middle;
`;
