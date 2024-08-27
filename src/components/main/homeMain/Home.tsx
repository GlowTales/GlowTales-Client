import TabBar from "@components/common/tabBar/TabBar";
import * as S from "./Home.styled";
import HomeRecentTales from "./homeRecentTales/HomeRecentTales";
import HomeStatus from "./homeStatus/HomeStatus";
import HomeHeader from "./homeHeader/HomeHeader";
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
