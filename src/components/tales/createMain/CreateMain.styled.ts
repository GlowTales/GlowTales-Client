import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  overflow-x: hidden;
  gap: 2.5rem;
  #topGraphic {
    width: 100%;
    height: auto;
    object-fit: cover;
  }
  #btmGraphic {
    width: 100%;
    height: auto;
    object-fit: cover;
  }
`;

export const Title = styled.div`
  font-size: 2.5rem;
  font-weight: 800;
`;

export const SelectContainer = styled.div`
  width: 100%;
  height: 100%;
  max-height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 600px) {
    flex-wrap: wrap;
    gap: 1.5rem;
    max-height: 100%;
  }
`;

export const OptionContainer = styled.div`
  width: 65%;
  height: 90%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  @media (max-width: 600px) {
    flex-wrap: wrap;
    gap: 1.5rem;
  }
`;
