import styled from "styled-components";

export const TabBarContainer = styled.div`
  width: 100%;
  height: 70px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0;
  background-color: #fff;
  position: fixed;
  bottom: 0;
  box-shadow: 0 -2px 8px -6px rgba(0, 0, 0, 0.3);
  z-index: 1;
  @media (min-width: 900px) {
    width: 768px;
  }
`;

export const TabItem = styled.div<{ isSelected: boolean }>`
  width: 90%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  position: relative;
  cursor: pointer;

  svg {
    font-size: 30px;
    color: ${({ isSelected }) => (isSelected ? "#000" : "#aaa")};
    transition: color 0.3s, transform 0.3s;
    transform: ${({ isSelected }) =>
      isSelected ? "translateY(-10px)" : "translateY(0)"};
  }

  span {
    font-size: 1.7rem;
    font-weight: 700;
    color: ${({ isSelected }) => (isSelected ? "#000" : "#aaa")};
  }

  &::before {
    content: "";
    width: 70px;
    height: 50px;
    position: absolute;
    top: -28px;
    left: 50%;
    transform: translateX(-50%);
    background-color: #fff;
    border-radius: 50%;
    box-shadow: 0 -2px 8px -6px rgba(0, 0, 0, 0.3);
    opacity: ${({ isSelected }) => (isSelected ? "1" : "0")};
    transition: opacity 0.3s;
  }
`;
