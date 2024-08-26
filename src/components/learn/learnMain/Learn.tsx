import { MainWrapper, Margin } from "@components/common/common.styled";
import TabBar from "@components/common/tabBar/TabBar";
import Word from "./word/Word";
import UnLearned from "./unLearned/UnLearned";
import Learned from "./learned/Learned";

const Learn = () => {
  return (
    <>
      <MainWrapper>
        <Word />
        <UnLearned />
        <Learned />
        <Margin />
      </MainWrapper>
      <TabBar />
    </>
  );
};

export default Learn;
