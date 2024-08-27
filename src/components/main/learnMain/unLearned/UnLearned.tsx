import { getUnlearnedTales } from "@apis/home";
import Card from "@components/common/card/Card";
import {
  CommonTitle,
  CommonTitleWrapper,
  ItemWrapper,
} from "@components/common/common.styled";
import { UnLearnedProps } from "@type/card";
import { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import { useNavigate } from "react-router-dom";

const UnLearned = () => {
  const navigate = useNavigate();
  const isMobile = useMediaQuery({ query: "(max-width: 710px)" });
  const [unLearned, setUnLearned] = useState<UnLearnedProps[]>([]);
  const sliceUnLearned = unLearned.slice(0, isMobile ? 2 : 3);

  useEffect(() => {
    const fetchUnLearnTales = async () => {
      const response: UnLearnedProps[] = await getUnlearnedTales(true);
      setUnLearned(response);
    };

    fetchUnLearnTales();
  }, []);

  const handleMoreClick = () => {
    navigate("/learnTale/moreUnLearned", { state: { unLearned } });
  };

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
            languageTaleId={unLearned.languageTale.id}
            btnText="학습하기 ✏️"
          />
        ))}
      </ItemWrapper>
    </>
  );
};

export default UnLearned;
