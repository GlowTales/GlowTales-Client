import styled from "styled-components";

export const DropdownContainer = styled.div<{ width?: string }>`
  position: relative;
  width: ${({ width }) => (width ? width : "50%")};
`;

export const DropdownButton = styled.button`
  width: 100%;
  padding: 1.5rem;
  background-color: white;
  border: 1.5px solid #d8d8d8;
  border-radius: 5px;
  text-align: left;
  display: flex;
  align-items: center;
  font-size: 2rem;
  font-weight: 700;
  position: relative;
  box-sizing: border-box;

  img:first-of-type {
    width: 2.3rem;
    height: 2.3rem;
    margin-right: 10px;
  }

  img:last-of-type {
    width: 2.3rem;
    height: 2.3rem;
    cursor: pointer;
    margin-left: auto;
  }
`;

export const DropdownMenu = styled.div<{ isOpen: boolean }>`
  position: absolute;
  width: 100%;
  background-color: #f7f7f7;
  border: 1.5px solid #d8d8d8;
  border-radius: 0 0 5px 5px;
  border-top: none;
  border-bottom: none;
  z-index: 1000;
  font-size: 2rem;
  font-weight: 700;
  display: ${({ isOpen }) => (isOpen ? "block" : "none")};
  box-sizing: border-box;
`;

export const DropdownItem = styled.div`
  padding: 1.5rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  color: #777777;
  border-bottom: 1px solid #d8d8d8;
  &:hover {
    background-color: #f0f0f0;
  }
`;

export const DropdownImage = styled.img`
  width: 2.3rem;
  height: 2.3rem;
  margin-right: 10px;
  vertical-align: middle;
`;
