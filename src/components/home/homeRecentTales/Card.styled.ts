import { CardProps } from "@type/createTale";
import styled from "styled-components";

export const Card = styled.div<CardProps>`
  width: 200px;
  height: ${({ height }) => height}; /* Height is dynamic */
  background: linear-gradient(
    to right,
    ${({ backgroundColor1 }) => backgroundColor1} 10%,
    ${({ backgroundColor2 }) => backgroundColor2} 10%
  );
  border-radius: 8px;
  margin: 5px;
  padding: 3rem;
  box-sizing: border-box;
`;
