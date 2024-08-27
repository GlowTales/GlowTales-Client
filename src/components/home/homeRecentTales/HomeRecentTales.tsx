import {
  CommonTitle,
  CommonTitleWrapper,
  ItemWrapper,
  Shelf,
} from "@components/common/common.styled";
import Card from "./Card";
import * as S from "./HomeRecentTales.styled";
import { getRecentTale } from "@apis/createTales";
import { useEffect, useState } from "react";
import { CardProps } from "@type/card";
import { useNavigate } from "react-router-dom";
import { useMediaQuery } from "react-responsive";

const HomeRecentTales = () => {
  const mediaQuery = useMediaQuery({ query: "(max-width: 710px)" });

  const [tales, setTales] = useState<CardProps[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    const recentTales = async () => {
      const response: CardProps[] = await getRecentTale();
      setTales(response);
    };
    recentTales();
  }, []);

  const chunkedTales = [];
  const sliceTales = tales.slice(0, 9);
  for (let i = 0; i < sliceTales.length; i += 3) {
    chunkedTales.push(sliceTales.slice(i, i + 3));
  }

  const goRead = (response: CardProps) => {
    navigate(`/readTale`, { state: { response } });
  };

  const handleMoreClick = () => {
    navigate("/home/moreRecentTales", { state: { allTales: tales } });
  };

  return (
    <S.Wrapper>
      <CommonTitleWrapper>
        <CommonTitle>최근 생성한 동화</CommonTitle>
        <div className="more" onClick={handleMoreClick}>
          {"더보기 >"}
        </div>
      </CommonTitleWrapper>
      {mediaQuery ? (
        <ItemWrapper>
          {sliceTales.map((tale, index) => (
            <>
              <Card
                taleId={tale.taleId}
                title={tale.title}
                createdAt={tale.createdAt}
                readFunction={() => goRead(tale)}
              />
              {(index + 1) % 2 === 0 && index !== sliceTales.length - 1 && (
                <Shelf src="/shelf.png" key={`shelf-${index}`} />
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
            <Shelf src="/shelf.png" />
          </>
        ))
      )}
    </S.Wrapper>
  );
};

export default HomeRecentTales;
