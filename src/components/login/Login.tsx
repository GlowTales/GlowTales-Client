import { CommonWrapper } from "@common/common.styled";
import * as S from "./Login.styled";
import { kakaoURL } from "./kakaoLoginConfig";

const Login = () => {
  const toLogin = () => {
    window.location.href = kakaoURL;
  };

  return (
    <CommonWrapper>
      <S.Title>{`{메인소개 멘트}`}</S.Title>
      <S.LogoBox>{`{로고이미지}`}</S.LogoBox>
      <S.LoginBtn>
        <img id="login-bubble" src="./loginBubble.png" alt="3초 로그인" />
        <img
          id="login-btn"
          src="./loginbtn.png"
          alt="카카오 로그인 버튼"
          onClick={toLogin}
        />
      </S.LoginBtn>
    </CommonWrapper>
  );
};

export default Login;
