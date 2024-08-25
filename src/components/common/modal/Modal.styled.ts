import styled from "styled-components";

export const ModalSection = styled.div<{ height: number }>`
  position: fixed;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 768px;
  top: 0;
  right: 50%;
  bottom: 0;
  left: 50%;
  transform: translate(-50%, 0%);
  height: ${(props) => props.height};
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 3;
  @media (max-width: 899px) {
    width: 100%;
  }
`;

export const ModalStyle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 30rem;
  height: fit-content;
  font-size: 1.5rem;
  font-weight: bold;
  background-color: #ffffff;
  border-radius: 5px;
  z-index: 3;
  @media (min-width: 576px) {
    width: 60%;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  width: 100%;
  border-top: 1px solid #f3f3f3;
`;

export const Content = styled.div`
  margin: 4rem 0 4rem 0;
  text-align: center;
`;

export const ButtonStyle = styled.div<{ isRightButton: boolean }>`
  display: flex;
  text-align: center;
  justify-content: center;
  width: 49%;
  color: ${(props) => (props.isRightButton ? "#FF5757" : "black")};
  font-size: 1.5rem;
  margin: 2rem 0 2rem 0;
  border-left: ${(props) =>
    props.isRightButton ? "1px solid #f3f3f3" : "none"};
`;
