import { ColorSet } from "@type/selectList";
import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 3.5rem 0;
`;

export const SectionWrapper = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 1.5rem;
`;

export const Title = styled.div`
  font-size: 2.5rem;
  font-weight: 800;
`;

export const SemiTitle = styled.div`
  font-size: 1.5rem;
  font-weight: 700;
  color: #909090;
`;

export const CharacterWrapper = styled.div`
  width: 100%;
  display: flex;
  font-size: 1.7rem;
  gap: 1rem;
`;

export const Characters = styled.div<{ $colorSet: ColorSet }>`
  background-color: ${({ $colorSet }) => $colorSet.background};
  color: ${({ $colorSet }) => $colorSet.color};
  border: 1px solid ${({ $colorSet }) => $colorSet.border};
  border-radius: 5px;
  padding: 1rem;
`;
