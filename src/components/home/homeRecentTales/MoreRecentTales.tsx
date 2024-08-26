import Header from "@components/common/header/Header";
import { useLocation, useNavigate } from "react-router-dom";
import * as S from "./HomeRecentTales.styled";
import Card from "./Card";
import { CardProps } from "@type/card";
import { useMediaQuery } from "react-responsive";
import { ItemWrapper, Shelf } from "@components/common/common.styled";

const MoreRecentTales = () => {
  const mediaQuery = useMediaQuery({ query: "(max-width: 710px)" });

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
      <>
        <S.MoreWrapper>
          {mediaQuery ? (
            <ItemWrapper>
              {allTales.map((tale: CardProps, index: number) => (
                <>
                  <Card
                    taleId={tale.taleId}
                    title={tale.title}
                    createdAt={tale.createdAt}
                    readFunction={() => goRead(tale)}
                  />
                  {(index + 1) % 2 === 0 && index !== allTales.length - 1 && (
                    <Shelf src="shelf.png" key={`shelf-${index}`} />
                  )}
                </>
              ))}
            </ItemWrapper>
          ) : (
            chunkedTales.map((taleGroup) => (
              <>
                <ItemWrapper>
                  {taleGroup.map((tale) => (
                    <Card
                      taleId={tale.taleId}
                      title={tale.title}
                      createdAt={tale.createdAt}
                      readFunction={() => goRead(tale)}
                    />
                  ))}
                </ItemWrapper>
                <Shelf src="shelf.png" />
              </>
            ))
          )}
        </S.MoreWrapper>
      </>
    </>
  );
};

export default MoreRecentTales;
