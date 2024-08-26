import { createTale } from "@apis/createTales";
import Header from "@components/common/header/Header";
import LoadingScreen from "@components/common/spinner/LoadingScreen";
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const CreateTale = () => {
  const location = useLocation();
  const { requestData } = location.state || {};
  const navigate = useNavigate();

  useEffect(() => {
    const createData = async () => {
      try {
        const response = await createTale(requestData);
        navigate(`/readTale`, { state: { response } });
      } catch (error) {
        alert("동화 생성 중 에러가 발생했습니다. 다시 시도해주세요.");
        navigate(`/createTale`);
      }
    };
    createData();
  }, [requestData]);

  return (
    <>
      <Header text="동화 생성" />
      <LoadingScreen text="동화" />;
    </>
  );
};

export default CreateTale;
