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

export const WordCard = styled.div`
  min-width: 220px;
  width: 100%;
  height: 56px;

  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 1.5rem;
  font-weight: 700;

  border-radius: 8px;
  border: 1px solid #dcdcdc;
  background-color: #f4f4f4;
`;
