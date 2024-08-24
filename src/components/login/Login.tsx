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
        <div>메인 소개 멘트 어쩌구</div>
        <div>글로우테일로 동화를 어쩌구</div>
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
