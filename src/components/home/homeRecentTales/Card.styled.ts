import { CardContainerProps } from "@type/card";
import styled from "styled-components";

export const CardContainer = styled.div<CardContainerProps>`
  min-width: 220px;
  width: 33%;
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
    border: none;
    border-radius: 4px;
    padding: 8px;
    font-size: 1.6rem;
    font-weight: 700;
  }
`;

export const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
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
