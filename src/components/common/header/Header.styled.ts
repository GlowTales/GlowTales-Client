import { MdOutlineArrowBackIosNew } from "react-icons/md";
import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: 66px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Container = styled.div`
  width: 95%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  #textDiv {
    font-size: 20px;
    font-weight: 700;
  }
  #emptyDiv {
    width: 20px;
  }
`;

export const StyledFiChevronLeft = styled(MdOutlineArrowBackIosNew)`
  cursor: pointer;
  font-size: 20px;
`;
