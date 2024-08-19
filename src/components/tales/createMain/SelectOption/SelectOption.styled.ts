import styled from "styled-components";

export const Wrapper = styled.div`
  width: 220px;
  height: 100%;
  max-height: 250px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  border-radius: 12px;
  border: 1px solid #f7a300;
  padding: 30px, 20px, 30px, 20px;
  background-color: #fff7cc;
  div {
    font-size: 1.7rem;
    font-weight: 700;
  }
  cursor: pointer;
`;

export const ImgBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    width: 55%;
  }
`;

export const ImgInput = styled.input`
  display: none;
`;

export const ImgLabel = styled.label`
  height: 250px;
  width: 220px;
`;
