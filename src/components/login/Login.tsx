import { CommonWrapper } from "@common/common.styled";
import * as S from "./Login.styled";
import { kakaoURL } from "./kakaoLoginConfig";

const Login = () => {
  const toLogin = () => {
    window.location.href = kakaoURL;
  };

  return (
    <CommonWrapper>
      <S.Title>
        <div>글로우테일에서 동화를 만들고,</div>
        <div>퀴즈로 학습의 재미를 더해보세요!</div>
      </S.Title>
      <S.Image src="/loginGraphic.png" />
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
