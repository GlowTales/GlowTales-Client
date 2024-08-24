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
      const response = await createTale(requestData);
      navigate(`/readTale`, { state: { response } });
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
