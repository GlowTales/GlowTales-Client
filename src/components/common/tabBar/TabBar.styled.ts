import styled from "styled-components";

export const Margin = styled.div`
  width: 100%;
  min-height: 80px;
`;

export const TabBarContainer = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  background-color: #fff;
  position: fixed;
  bottom: 0;
  box-shadow: 0 -2px 8px -6px rgba(0, 0, 0, 0.2);
  z-index: 1;
  @media (min-width: 900px) {
    width: 768px;
  }
`;

export const TabWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30%;
  height: 100%;
  position: relative;
`;

export const TabBackground = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  height: 100%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  background-color: white;
`;

export const TabCircle = styled.div<{ isSelected: boolean }>`
  display: ${({ isSelected }) => (isSelected ? "flex" : "none")};
  height: 100%;
  aspect-ratio: 1.3 / 1;
  background-color: white;
  box-shadow: 0 -2px 8px -6px rgba(0, 0, 0, 0.2);
  padding-top: 15px;
  padding-bottom: 15px;
  border-radius: 50%;
  margin-bottom: 2rem;
`;

export const TabContents = styled.div<{ isSelected: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  height: 90%;
  padding: 5px;
  position: absolute;
  top: ${({ isSelected }) => (isSelected ? "35%" : "48%")};
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  .tab-icon {
    width: 18%;
  }
  .tab-text {
    font-size: 1.6rem;
    font-weight: 700;
  }
`;
