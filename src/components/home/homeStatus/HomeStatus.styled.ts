import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  border-radius: 6px;
  border: 1px solid #e5e5e2;
`;

export const StatusWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 1.5rem;
`;

export const Status = styled.div`
  width: 40%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 3rem;
  padding: 1rem;
`;

export const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const StatusTitle = styled.div`
  font-size: 2.5rem;
  font-weight: 800;
`;

export const Img = styled.img`
  width: 50%;
`;

export const StateWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const State = styled.div`
  font-size: 1.8rem;
  font-weight: 700;
  margin-top: 1rem;
  color: #a3a3a3;
`;
