import TabBar from "@components/common/tabBar/TabBar";
import HomeHeader from "./homeHeader/HomeHeader";
import * as S from "./Home.styled";
import HomeStatus from "./homeStatus/HomeStatus";
import HomeRecentTales from "./homeRecentTales/HomeRecentTales";
// import Modal from "@components/common/modal/Modal";

const Home = () => {
  return (
    <>
      {/* <Modal /> */}
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
