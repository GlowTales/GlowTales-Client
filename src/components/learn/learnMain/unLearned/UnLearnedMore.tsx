import {
  ItemWrapper,
  MainWrapper,
  Shelf,
} from "@components/common/common.styled";
import Header from "@components/common/header/Header";
import Card from "@components/home/homeRecentTales/Card";
import { UnLearnedProps } from "@type/card";
import { useMediaQuery } from "react-responsive";
import { useLocation } from "react-router-dom";

const UnLearnedMore = () => {
  const mediaQuery = useMediaQuery({ query: "(max-width: 710px)" });

  const location = useLocation();
  const { unLearned } = location.state || null;
  const chunkedTales: UnLearnedProps[][] = [];
  const unLearnedSlice = unLearned.slice(0, 9);
  for (let i = 0; i < unLearned.length; i += 3) {
    chunkedTales.push(unLearned.slice(i, i + 3));
  }
  return (
    <>
      <Header text="학습하지 않은 동화" />
      <MainWrapper>
        <ItemWrapper>
          {mediaQuery ? (
            <ItemWrapper>
              {unLearned.map((unLearned: UnLearnedProps, index: number) => (
                <>
                  <Card
                    taleId={unLearned.tale_id}
                    title={unLearned.languageTale.title}
                    createdAt={unLearned.createdAt}
                    btnText="학습하기✏️"
                    // readFunction={() => goRead(tale)}
                  />
                  {(index + 1) % 2 === 0 &&
                    index !== unLearnedSlice.length - 1 && (
                      <Shelf src="/shelf.png" />
                    )}
                </>
              ))}
            </ItemWrapper>
          ) : (
            chunkedTales.map((learnedGroup) => (
              <>
                <ItemWrapper>
                  {learnedGroup.map((learned: UnLearnedProps) => (
                    <Card
                      taleId={learned.tale_id}
                      title={learned.languageTale.title}
                      createdAt={learned.createdAt}
                      btnText="학습하기✏️"
                      //   readFunction={}
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

export default UnLearnedMore;
