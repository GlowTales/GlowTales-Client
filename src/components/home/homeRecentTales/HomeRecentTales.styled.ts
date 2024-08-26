import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding-bottom: 80px;
`;

export const TitleWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin: 5px;
  .more {
    margin-right: 1rem;
    font-size: 1.8rem;
    text-align: center;
    font-weight: 700;
    color: #bdbdbd;
    cursor: pointer;
  }
`;

export const CardWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  @media (max-width: 710px) {
    margin-top: 2rem;
    flex-wrap: wrap;
    gap: 1rem;
  }
`;

export const ShelfWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 1rem;
`;

export const Shelf = styled.img`
  @media (max-width: 710px) {
    width: 550px;
  }
  @media (max-width: 450px) {
    display: none;
  }
`;
