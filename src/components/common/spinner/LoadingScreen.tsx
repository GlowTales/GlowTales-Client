import { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";

const LoadingScreen = ({ text }: { text: string }) => {
  const [showLogo, setShowLogo] = useState(false);

  useEffect(() => {
    const logoTimer = setTimeout(() => {
      setShowLogo(true);
    }, 1000);
    return () => clearTimeout(logoTimer);
  }, []);

  return (
    <>
      <LoadingContainer>
        <LoadingText>{text}를 만들고 있어요!</LoadingText>
        <ConveyorBelt>
          <Icon src="/loadingIcon1.png" alt="Icon 1" />
          <Icon src="/loadingIcon2.png" alt="Icon 2" />
          <Icon src="/loadingIcon3.png" alt="Icon 3" />
          <Icon src="/loadingIcon4.png" alt="Icon 4" />
          <Icon src="/loadingIcon5.png" alt="Icon 1" />
          <Icon src="/loadingIcon6.png" alt="Icon 2" />
          <Icon src="/loadingIcon3.png" alt="Icon 3" />
          <Icon src="/loadingIcon1.png" alt="Icon 4" />
          <Icon src="/loadingIcon2.png" alt="Icon 2" />
          <Icon src="/loadingIcon3.png" alt="Icon 3" />
          <Icon src="/loadingIcon1.png" alt="Icon 1" />
          <Icon src="/loadingIcon4.png" alt="Icon 4" />
          <Icon src="/loadingIcon5.png" alt="Icon 1" />
          <Icon src="/loadingIcon6.png" alt="Icon 2" />
          <Icon src="/loadingIcon3.png" alt="Icon 3" />
          <Icon src="/loadingIcon1.png" alt="Icon 4" />
          <Icon src="/loadingIcon2.png" alt="Icon 2" />
          <Icon src="/loadingIcon3.png" alt="Icon 3" />
          <Icon src="/loadingIcon4.png" alt="Icon 4" />
          <Icon src="/loadingIcon1.png" alt="Icon 1" />
          <Icon src="/loadingIcon5.png" alt="Icon 1" />
          <Icon src="/loadingIcon6.png" alt="Icon 2" />
          <Icon src="/loadingIcon3.png" alt="Icon 3" />
          <Icon src="/loadingIcon1.png" alt="Icon 4" />
        </ConveyorBelt>
        <BookContainer>
          <BookImage src="/loadingBook.png" alt="Book" />
        </BookContainer>
        <LogoContainer className={showLogo ? "show" : ""}>
          <LogoImage src="/loadingLogo.png" alt="Logo" />
        </LogoContainer>
      </LoadingContainer>
    </>
  );
};

export default LoadingScreen;

const LoadingContainer = styled.div`
  position: relative;
  width: 100%;
  height: 84vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  overflow: hidden;
`;

const conveyorAnimation = keyframes`
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
`;

const ConveyorBelt = styled.div`
  display: flex;
  width: 200%;
  white-space: nowrap;
  animation: ${conveyorAnimation} 10s linear infinite;
  position: absolute;
  top: 50%;
  left: 0;
  transform: translateY(-50%);
  z-index: 1;
`;

const Icon = styled.img`
  margin: 0 20px;
  height: 50px;
  width: auto;
  opacity: 0.5;
`;

const BookContainer = styled.div`
  width: 30%;
  position: relative;
  top: 2rem;
  z-index: 2;
`;

const fillLogo = keyframes`
  0% {
    clip-path: inset(100% 0 0 0); 
  }
  100% {
    clip-path: inset(0% 0 0 0); 
  }
`;

const BookImage = styled.img`
  width: 100%;
  height: auto;
`;

const LogoContainer = styled.div`
  position: absolute;
  margin-top: 1rem;
  margin-left: 1rem;
  top: 50;
  left: 50;
  width: 5%;
  height: 5%;
  overflow: hidden;
  z-index: 3;
`;

const LogoImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  animation: ${fillLogo} 3s ease-in-out infinite forwards;
`;

const LoadingText = styled.div`
  position: absolute;
  top: 18rem;
  font-size: 2.5rem;
  font-weight: 800;
  color: black;
`;
