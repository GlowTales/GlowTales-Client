import { CommonWrapper } from "@common/common.styled";
import { LoginBtn, LogoBox, Title } from "./Login.styled";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const toLogin = () => {};

  return (
    <CommonWrapper>
      <Title>{`{메인소개 멘트}`}</Title>
      <LogoBox>{`{로고이미지}`}</LogoBox>
      <LoginBtn>
        <img id="login-bubble" src="./loginBubble.png" />
        <img id="login-btn" src="./loginbtn.png" onClick={toLogin} />
      </LoginBtn>
    </CommonWrapper>
  );
};

export default Login;
