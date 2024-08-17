import { CommonWrapper } from "@common/common.styled";
import { LoginBtn, LogoBox, Title } from "./Login.styled";
import { kakaoURL } from "./kakaoLoginConfig";

const Login = () => {
  const toLogin = () => {
    window.location.href = kakaoURL;
  };

  return (
    <CommonWrapper>
      <Title>{`{메인소개 멘트}`}</Title>
      <LogoBox>{`{로고이미지}`}</LogoBox>
      <LoginBtn>
        <img id="login-bubble" src="./loginBubble.png" alt="3초 로그인" />
        <img
          id="login-btn"
          src="./loginbtn.png"
          alt="카카오 로그인 버튼"
          onClick={toLogin}
        />
      </LoginBtn>
    </CommonWrapper>
  );
};

export default Login;
