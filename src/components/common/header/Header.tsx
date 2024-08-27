import * as S from "./Header.styled";
import { HeaderProps } from "@type/header";

const Header = ({ text, backBtn }: HeaderProps) => {
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
