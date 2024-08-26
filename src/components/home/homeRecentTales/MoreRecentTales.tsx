import Header from "@components/common/header/Header";
import { useLocation, useNavigate } from "react-router-dom";
import * as S from "./HomeRecentTales.styled";
import Card from "./Card";
import { CardProps } from "@type/card";

const MoreRecentTales = () => {
  const location = useLocation();
  const { allTales } = location.state || { allTales: [] };
  const navigate = useNavigate();

  const chunkedTales: CardProps[][] = [];
  for (let i = 0; i < allTales.length; i += 3) {
    chunkedTales.push(allTales.slice(i, i + 3));
  }

  const goRead = (response: CardProps) => {
    navigate(`/readTale`, { state: { response } });
  };
  return (
    <>
      <Header text="최근 생성한 동화" />
      <S.Wrapper>
        {chunkedTales.map((taleGroup, index) => (
          <>
            <div key={index}>
              <S.CardWrapper>
                {taleGroup.map((tale) => (
                  <Card
                    key={tale.taleId}
                    taleId={tale.taleId}
                    title={tale.title}
                    createdAt={tale.createdAt}
                    readFunction={() => goRead(tale)}
                  />
                ))}
              </S.CardWrapper>
            </div>
            <S.Shelf src="shelf.png" />
          </>
        ))}
      </S.Wrapper>
    </>
  );
};

export default MoreRecentTales;
