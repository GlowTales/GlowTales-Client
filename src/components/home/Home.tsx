import TabBar from "@components/common/tabBar/TabBar";
import HomeHeader from "./homeHeader/HomeHeader";
import * as S from "./Home.styled";
import HomeStatus from "./homeStatus/HomeStatus";
import HomeRecentTales from "./homeRecentTales/HomeRecentTales";

const Home = () => {
  return (
    <>
      <S.Wrapper>
        <HomeHeader />
        <HomeStatus />
        <HomeRecentTales />
      </S.Wrapper>
      <TabBar />
    </>
  );
};

export default Home;
