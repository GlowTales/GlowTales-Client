import styled from "styled-components";
import * as S from "@common/common.styled";
import Spinner from "./Spinner";

const LoadingSpinner = () => {
  return (
    <S.CommonWrapper>
      <S.ColumnFlexBox gap="5px">
        <LogoPicture>
          <source srcSet="/logo.webp" type="image/webp" />
          <source srcSet="/logo.png" type="image/png" />
          <LogoImage src="/logo.png" alt="logo" />
        </LogoPicture>
        <Spinner />
      </S.ColumnFlexBox>
    </S.CommonWrapper>
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
