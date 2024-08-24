import styled from "styled-components";

export const Wrapper = styled.div`
  width: 95%;
  height: 90%;
  overflow-y: hidden;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const ReadTaleHead = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 2.8rem 0;
`;

export const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const Title = styled.div`
  font-size: 2.5rem;
  font-weight: 800;
`;

export const Complete = styled.div`
  font-size: 1.7rem;
  font-weight: 500;
  color: #f7a300;
`;

export const TaleWrapper = styled.div`
  width: 100%;
  height: 75%;
  max-height: 75%;
  overflow-y: scroll;
  font-size: 1.9rem;
  margin-bottom: 1rem;
  line-height: 3rem;
`;

export const BtnWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;
