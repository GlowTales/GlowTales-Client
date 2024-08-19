import { useNavigate } from "react-router-dom";
import * as S from "./Header.styled";

const Header = ({ text }: { text: string }) => {
  const navigate = useNavigate();

  return (
    <S.Wrapper>
      <S.Container>
        <S.StyledFiChevronLeft onClick={() => navigate(-1)} />
        <div id="textDiv">{text}</div>
        <div id="emptyDiv"></div>
      </S.Container>
    </S.Wrapper>
  );
};

export default Header;
