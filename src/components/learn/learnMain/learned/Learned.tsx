import { getLearnedTales } from "@apis/home";
import {
  CommonTitle,
  CommonTitleWrapper,
  ItemWrapper,
} from "@components/common/common.styled";
import Card from "@components/home/homeRecentTales/Card";
import { LearnedProps } from "@type/card";

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Learned = () => {
  const navigate = useNavigate();
  const handleMoreClick = () => {
    navigate("/more", { state: { learned } });
  };

  const [learned, setLearned] = useState<LearnedProps[]>([]);
  const sliceLearned = learned.slice(0, 3);

  useEffect(() => {
    const fetchGetStudiedTales = async () => {
      const response: LearnedProps[] = await getLearnedTales(true);
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
            title={learned.languageTale.title}
            createdAt={learned.createdAt}
            point={"4/10"}
            btnText="복습하기"
            // readFunction={() => handleMoreClick()}
          />
        ))}
      </ItemWrapper>
    </>
  );
};

export default Learned;
