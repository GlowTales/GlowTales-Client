import styled from "styled-components";

export const Wrapper = styled.div`
  width: 90%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 3rem;
  padding: 3rem;
  @media (min-width: 850px) {
    margin-bottom: 160px;
  }
  @media (min-height: 900px) {
    margin-bottom: 0;
  }
`;
