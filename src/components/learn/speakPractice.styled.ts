import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 3.5rem;
  width: 100%;
  padding-bottom: 3rem;
`;

export const Title = styled.div`
  font-size: 2.5rem;
  font-weight: 800;
`;

export const SpeakSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  height: fit-content;
`;

export const SpeakRowBox = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  height: fit-content;
`;

export const SpeakColumnBox = styled.div`
  display: flex;
  flex-direction: column;
  height: fit-content;
  gap: 1rem;
`;

export const SpeakBtn = styled.img`
  cursor: pointer;
  width: 2.2rem;
`;

export const WordBox = styled.div`
  font-size: 2.2rem;
  font-weight: 700;
  border: 1px solid #dcdcdc;
  border-radius: 8px;
  padding: 0.8rem 2rem;
  line-height: 3rem;
`;

export const MeanText1 = styled.div`
  font-size: 2rem;
  font-weight: 400;
  color: #808080;
  margin-left: 2rem;
`;
export const MeanText2 = styled.div`
  font-size: 2rem;
  font-weight: 400;
  color: #808080;
  margin-bottom: 1rem;
  margin-left: 4rem;
`;
