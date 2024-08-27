import { useNavigate } from "react-router-dom";
import * as S from "./Header.styled";
import { HeaderProps } from "@type/header";

const Header = ({ text, backBtn }: HeaderProps) => {
  const navigate = useNavigate();

  return (
    <S.Wrapper>
      <S.Container>
        <S.StyledFiChevronLeft onClick={backBtn} />
        <div id="textDiv">{text}</div>
        <div id="emptyDiv"></div>
      </S.Container>
    </S.Wrapper>
  );
};

export default Header;
