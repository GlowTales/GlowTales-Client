import styled from "styled-components";

export const Title = styled.div`
  font-size: 3.4rem;
  font-weight: 800;
`;

export const LogoBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 60%;
  height: 250px;
  border-radius: 15px;
  background-color: #efefed;
`;

export const LoginBtn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 8px;
  #login-bubble {
    width: 55%;
  }
  #login-btn {
    width: 80%;
    cursor: pointer;
  }
`;
