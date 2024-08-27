import { CardContainerProps } from "@type/card";
import styled from "styled-components";

export const CardContainer = styled.div<CardContainerProps>`
  min-width: 196px;
  width: 30%;
  height: ${({ height }) => height};
  background: linear-gradient(
    to right,
    ${({ backgroundColor1 }) => backgroundColor1} 10%,
    ${({ backgroundColor2 }) => backgroundColor2} 10%
  );
  border-radius: 8px;
  margin: 5px;
  box-sizing: border-box;
`;

export const CardWrapper = styled.div`
  width: 75%;
  height: 95%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 1.2rem 2.4rem;
  margin-left: 1.5rem;
  button {
    min-width: 80px;
    width: 100%;
    background-color: #ffffff;
    border: none;
    border-radius: 4px;
    padding: 8px;
    font-size: 1.6rem;
    font-weight: 700;
    margin-bottom: 2rem;
    cursor: pointer;
  }
`;

export const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 0.5rem;
  gap: 1rem;
`;

export const CardTitle = styled.div`
  width: 100%;
  font-size: 2.2rem;
  font-weight: 1000;
`;

export const CardCreatedAt = styled.div`
  width: 100%;
  font-size: 1.5rem;
  font-weight: 400;
`;

export const CardImg = styled.img`
  width: 100%;
  margin-bottom: 1rem;
`;

export const BtnWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 1rem;
  div {
    margin-top: 0.5rem;
    font-size: 3rem;
    font-weight: 700;
  }
`;
