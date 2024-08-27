import styled from "styled-components";

export const ModalSection = styled.div<{ height: number }>`
  width: 768px;
  height: ${(props) => props.height};
  position: fixed;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  top: 0;
  right: 50%;
  bottom: 0;
  left: 50%;
  transform: translate(-50%, 0%);
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 5;
  @media (max-width: 899px) {
    width: 100%;
  }
`;

export const ModalWrapper = styled.div`
  width: 50%;
  height: 25%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;
  font-weight: bold;
  background-color: #ffffff;
  border-radius: 14px;
  z-index: 6;
`;

export const TextWrapper = styled.div`
  width: 100%;
  height: 60%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  text-align: center;
  padding-top: 3.5rem;
`;

export const ModalTitle = styled.div`
  font-size: 2.4rem;
  font-weight: 800;
`;

export const ModalExplain = styled.div`
  font-size: 2rem;
  font-weight: 700;
  color: #777777;
`;

export const ButtonWrapper = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  border-top: 2.5px solid #d0d0d0;
`;

export const ButtonStyle = styled.div<{ isRightButton: boolean }>`
  display: flex;
  text-align: center;
  justify-content: center;
  width: 49%;
  color: ${(props) => (props.isRightButton ? "#FF5757" : "black")};
  font-size: 1.9rem;
  font-weight: 700;
  padding: 2rem;
  border-left: ${(props) =>
    props.isRightButton ? "2.5px solid #d0d0d0" : "none"};
`;
