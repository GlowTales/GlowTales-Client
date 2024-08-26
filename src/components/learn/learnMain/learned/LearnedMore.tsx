import {
  ItemWrapper,
  MainWrapper,
  Shelf,
} from "@components/common/common.styled";
import Header from "@components/common/header/Header";
import Card from "@components/home/homeRecentTales/Card";
import { LearnedProps } from "@type/card";
import { useMediaQuery } from "react-responsive";
import { useLocation } from "react-router-dom";

const LearnedMore = () => {
  const mediaQuery = useMediaQuery({ query: "(max-width: 710px)" });

  const location = useLocation();
  const { learned } = location.state || null;
  const chunkedTales: LearnedProps[][] = [];
  const learnedSlice = learned.slice(0, 9);
  for (let i = 0; i < learnedSlice.length; i += 3) {
    chunkedTales.push(learnedSlice.slice(i, i + 3));
  }
  return (
    <>
      <Header text="최근 학습한 동화" />
      <MainWrapper>
        <ItemWrapper>
          {mediaQuery ? (
            <ItemWrapper>
              {learned.map((learned: LearnedProps, index: number) => (
                <>
                  <Card
                    taleId={learned.tale_id}
                    title={learned.languageTale.title}
                    createdAt={learned.createdAt}
                    point={"4/10"}
                    btnText="복습하기"
                    // readFunction={() => goRead(tale)}
                  />
                  {(index + 1) % 2 === 0 &&
                    index !== learnedSlice.length - 1 && (
                      <Shelf src="/shelf.png" />
                    )}
                </>
              ))}
            </ItemWrapper>
          ) : (
            chunkedTales.map((learnedGroup) => (
              <>
                <ItemWrapper>
                  {learnedGroup.map((learned: LearnedProps) => (
                    <Card
                      taleId={learned.tale_id}
                      title={learned.languageTale.title}
                      createdAt={learned.createdAt}
                      point={"4/10"}
                      btnText="복습하기"
                      //   readFunction={() => goRead(learned)}
                    />
                  ))}
                </ItemWrapper>
                <Shelf src="/shelf.png" />
              </>
            ))
          )}
        </ItemWrapper>
      </MainWrapper>
    </>
  );
};

export default LearnedMore;
