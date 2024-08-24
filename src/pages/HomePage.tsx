import { getStudiedTales, getUnlearnedTales, getWord } from "@apis/home";
import TabBar from "@components/common/tabBar/TabBar";

const HomePage = () => {
  const handleBtn1 = async () => {
    try {
      const response = getUnlearnedTales(true);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };
  const handleBtn2 = async () => {
    try {
      const response = getWord();
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };
  const handleBtn3 = async () => {
    try {
      const response = getStudiedTales(true);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div>홈페이지에용</div>
      <button onClick={handleBtn1}>미학습 동화조회</button>
      <button onClick={handleBtn2}>학습 동화조회</button>
      <button onClick={handleBtn3}>키워드 동화조회</button>
      <TabBar />
    </>
  );
};

export default HomePage;
