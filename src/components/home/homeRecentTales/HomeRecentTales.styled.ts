import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding-bottom: 80px;
`;

export const Shelf = styled.img`
  width: 100%;
  @media (max-width: 710px) {
    width: 520px;
  }
  @media (max-width: 519px) {
    display: none;
  }
`;

export const MoreWrapper = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 4rem;
  gap: 2rem;
`;
