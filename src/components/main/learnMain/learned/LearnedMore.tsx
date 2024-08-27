import Card from "@components/common/card/Card";
import {
  ItemWrapper,
  MainWrapper,
  Shelf,
} from "@components/common/common.styled";
import Header from "@components/common/header/Header";
import { LearnedProps } from "@type/card";
import { useMediaQuery } from "react-responsive";
import { useLocation, useNavigate } from "react-router-dom";

const LearnedMore = () => {
  const mediaQuery = useMediaQuery({ query: "(max-width: 710px)" });

  const location = useLocation();
  const { learned } = location.state || null;

  const navigate = useNavigate();

  const chunkedTales: LearnedProps[][] = [];
  const learnedSlice = learned.slice(0, 9);
  for (let i = 0; i < learnedSlice.length; i += 3) {
    chunkedTales.push(learnedSlice.slice(i, i + 3));
  }
  return (
    <>
      <Header text="최근 학습한 동화" backBtn={() => navigate(-1)} />
      <MainWrapper>
        <ItemWrapper>
          {mediaQuery ? (
            <ItemWrapper>
              {learned.map((learned: LearnedProps, index: number) => (
                <>
                  <Card
                    taleId={learned.tale_id}
                    languageTaleId={learned.languageTale.id}
                    title={`${learned.koreanTitle} (${learned.languageId === 1 ? "영어" : learned.languageId === 2 ? "한국어" : learned.languageId === 3 ? "일본어" : "중국어"})`}
                    createdAt={learned.createdAt}
                    firstQuizCount={learned.firstQuizCount}
                    btnText="복습하기"
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
                      languageTaleId={learned.languageTale.id}
                      title={`${learned.koreanTitle} (${learned.languageId === 1 ? "영어" : learned.languageId === 2 ? "한국어" : learned.languageId === 3 ? "일본어" : "중국어"})`}
                      createdAt={learned.createdAt}
                      firstQuizCount={learned.firstQuizCount}
                      btnText="복습하기"
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
