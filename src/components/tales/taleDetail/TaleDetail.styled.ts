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

export const Characters = styled.div`
  padding: 8px;
  border-radius: 4px;
  background-color: #f7f7f7;
  border: 1px solid #d8d8d8;
  color: #777777;
  font-weight: 700;
`;
