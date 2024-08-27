import styled from "styled-components";

const Splash = () => {
  return (
    <BlinkLogo>
      <img src="./mainLogo.svg" />
    </BlinkLogo>
  );
};

export default Splash;

const BlinkLogo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  animation: blink 3s forwards;

  @keyframes blink {
    0%,
    100% {
      opacity: 0;
    }
    50% {
      opacity: 1;
    }
  }
`;
