import styled, { keyframes } from "styled-components";

const Spinner = () => {
  return (
    <DotsWrapper>
      <Dot delay="0s" />
      <Dot delay="0.1s" />
      <Dot delay="0.2s" />
    </DotsWrapper>
  );
};

export default Spinner;

const bounce = keyframes`
  0%, 80%, 100% {
    transform: scale(0);
  }
  40% {
    transform: scale(1);
  }
`;

const DotsWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  width: 50px;
`;

const Dot = styled.div<{ delay: string }>`
  width: 10px;
  height: 10px;
  background-color: #606060;
  border-radius: 50%;
  animation: ${bounce} 1.4s infinite ease-in-out both;
  animation-delay: ${(props) => props.delay};
`;
