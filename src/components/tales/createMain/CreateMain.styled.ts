import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  min-height: 90vh;
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
  font-size: 3rem;
  font-weight: 800;
  text-align: center;
  margin-bottom: 2rem;
`;

export const SelectContainer = styled.div`
  width: 100%;
  height: 100%;
  max-height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

export const OptionContainer = styled.div`
  width: 100%;
  height: 90%;
  display: flex;
  justify-content: center;
  gap: 1rem;
  align-items: center;
`;
