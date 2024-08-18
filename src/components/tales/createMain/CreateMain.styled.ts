import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-color: black;
  #topGraphic {
    width: 100%;
    height: 17%;
  }
  #btmGraphic {
    width: 100%;
    height: 23%;
  }
`;

export const SelectContainer = styled.div`
  width: 100%;
  height: 60%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  background-color: white;
`;

export const Title = styled.div`
  font-size: 4rem;
  font-weight: 800;
`;
