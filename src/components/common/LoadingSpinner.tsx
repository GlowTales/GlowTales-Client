import styled from "styled-components";
import { ColumnFlexBox, CommonWrapper } from "./common.styled";
import Spinner from "./Spinner";

const LoadingSpinner = () => {
  return (
    <CommonWrapper>
      <ColumnFlexBox gap="5px">
        <LogoPicture>
          <source srcSet="/logo.webp" type="image/webp" />
          <source srcSet="/logo.png" type="image/png" />
          <LogoImage src="/logo.png" alt="logo" />
        </LogoPicture>
        <Spinner />
      </ColumnFlexBox>
    </CommonWrapper>
  );
};

export default LoadingSpinner;

const LogoPicture = styled.picture`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LogoImage = styled.img`
  width: 40%;
`;
