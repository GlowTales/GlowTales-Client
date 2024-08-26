import { getUnlearnedTales } from "@apis/home";
import {
  CommonTitle,
  CommonTitleWrapper,
  ItemWrapper,
} from "@components/common/common.styled";
import Card from "@components/home/homeRecentTales/Card";
import { UnLearnedProps } from "@type/card";

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const UnLearned = () => {
  const navigate = useNavigate();
  const handleMoreClick = () => {
    navigate("/more", { state: { unLearned } });
  };
  const [unLearned, setUnLearned] = useState<UnLearnedProps[]>([]);
  const sliceUnLearned = unLearned.slice(0, 3);

  useEffect(() => {
    const fetchUnLearnTales = async () => {
      const response: UnLearnedProps[] = await getUnlearnedTales(true);
      setUnLearned(response);
    };

    fetchUnLearnTales();
  }, []);
  return (
    <>
      <CommonTitleWrapper>
        <CommonTitle>아직 학습하지 않은 동화</CommonTitle>
        <div className="more" onClick={handleMoreClick}>
          {"더보기 >"}
        </div>
      </CommonTitleWrapper>
      <ItemWrapper>
        {sliceUnLearned.map((unLearned: UnLearnedProps) => (
          <Card
            taleId={unLearned.tale_id}
            title={unLearned.languageTale.title}
            createdAt={unLearned.createdAt}
            btnText="학습하기✏️"
            readFunction={() => handleMoreClick()}
          />
        ))}
      </ItemWrapper>
    </>
  );
};

export default UnLearned;
