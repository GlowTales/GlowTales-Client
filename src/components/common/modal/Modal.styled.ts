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
  height: 180px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  font-size: 1.5rem;
  font-weight: bold;
  background-color: #ffffff;
  border-radius: 14px;
  z-index: 6;
  @media (max-width: 553px) {
    width: 80%;
    height: 150px;
  }
`;

export const TextWrapper = styled.div`
  width: 100%;
  height: 60%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  padding-top: 1rem;
  gap: 10px;
`;

export const ModalTitle = styled.div`
  font-size: 2.3rem;
  font-weight: 800;
  @media (max-width: 560px) {
    font-size: 2rem;
  }
`;

export const ModalExplain = styled.div`
  font-size: 1.8rem;
  font-weight: 700;
  color: #777777;
  @media (max-width: 560px) {
    font-size: 1.6rem;
  }
`;

export const ButtonWrapper = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  border-top: 1px solid #d0d0d0;
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
    props.isRightButton ? "1px solid #d0d0d0" : "none"};
`;
