import { CommonTitle } from "@components/common/common.styled";
import Card from "./Card";
import * as S from "./HomeRecentTales.styled";
import { getRecentTale } from "@apis/createTales";
import { useEffect, useState } from "react";
import { CardProps } from "@type/card";
import { useNavigate } from "react-router-dom";

const HomeRecentTales = () => {
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
    navigate("/more", { state: { allTales: tales } });
  };

  return (
    <S.Wrapper>
      <S.TitleWrapper>
        <CommonTitle>최근 생성한 동화</CommonTitle>
        <div className="more" onClick={handleMoreClick}>
          {"더보기 >"}
        </div>
      </S.TitleWrapper>
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
  );
};

export default HomeRecentTales;
