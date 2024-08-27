import styled from "styled-components";

export const Title = styled.div`
  font-size: 3rem;
  font-weight: 800;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`;

export const Image = styled.img`
  width: 55%;
  height: auto; /* 비율 유지 */
  max-width: 600px;
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
