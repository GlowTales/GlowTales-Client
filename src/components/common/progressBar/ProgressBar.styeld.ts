import styled from "styled-components";

export const ProgressBarWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 14px;
  border-radius: 20px;
  background: #ededed;
  margin-top: 2rem;
  position: relative;
`;

export const Progress = styled.div<{ $percentage: number }>`
  background-color: #ffd600;
  border-top-left-radius: 20px;
  border-bottom-left-radius: 20px;
  border-top-right-radius: ${(props) => (props.$percentage === 100 ? 20 : 0)}px;
  border-bottom-right-radius: ${(props) =>
    props.$percentage === 100 ? 20 : 0}px;
  height: 100%;
  width: ${(props) => props.$percentage}%;
  transition: width 0.5s ease-in-out;
  position: relative;
`;
