import { getLearnedTales } from "@apis/home";
import Card from "@components/common/card/Card";
import {
  CommonTitle,
  CommonTitleWrapper,
  ItemWrapper,
} from "@components/common/common.styled";
import { LearnedProps } from "@type/card";

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Learned = () => {
  const navigate = useNavigate();
  const handleMoreClick = () => {
    navigate("/learnTale/moreLearned", { state: { learned } });
  };

  const [learned, setLearned] = useState<LearnedProps[]>([]);
  const sliceLearned = learned.slice(0, 3);

  useEffect(() => {
    const fetchGetStudiedTales = async () => {
      const response: LearnedProps[] = await getLearnedTales(false);
      setLearned(response);
    };
    fetchGetStudiedTales();
  }, []);

  return (
    <>
      <CommonTitleWrapper>
        <CommonTitle>최근 학습한 동화</CommonTitle>
        <div className="more" onClick={handleMoreClick}>
          {"더보기 >"}
        </div>
      </CommonTitleWrapper>
      <ItemWrapper>
        {sliceLearned.map((learned: LearnedProps) => (
          <Card
            taleId={learned.tale_id}
            title={`${learned.koreanTitle} (${learned.languageId === 1 ? "영어" : learned.languageId === 2 ? "한국어" : learned.languageId === 3 ? "일본어" : "중국어"})`}
            createdAt={learned.createdAt}
            languageTaleId={learned.languageTale.id}
            firstQuizCount={learned.firstQuizCount}
            btnText="복습하기"
          />
        ))}
      </ItemWrapper>
    </>
  );
};

export default Learned;
