import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
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
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

export const OptionContainer = styled.div`
  width: 65%;
  height: 85%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;
