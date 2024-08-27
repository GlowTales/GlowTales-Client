import { createTale } from "@apis/createTales";
import Header from "@components/common/header/Header";
import Modal from "@components/common/modal/Modal";
import LoadingScreen from "@components/common/spinner/LoadingScreen";
import useNavigationWarning from "@hooks/useNavigationWarning";
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const CreateTale = () => {
  const location = useLocation();
  const { requestData } = location.state || {};
  const navigate = useNavigate();
  const { showModal, confirmNavigation, cancelNavigation } =
    useNavigationWarning(() => navigate("/createTale"));

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
      <LoadingScreen text="동화" />
      {showModal && (
        <Modal
          message="동화만들기를 종료하시겠어요?"
          onConfirm={confirmNavigation}
          onCancel={cancelNavigation}
        />
      )}
    </>
  );
};

export default CreateTale;

// import useNavigationWarning from "@hooks/useNavigationWarning";

// const { showModal, confirmNavigation, cancelNavigation } =
// useNavigationWarning(() => navigate("/createTale"));

// {showModal && (
//   <Modal
//     message="동화만들기를 종료하시겠어요?"
//     onConfirm={confirmNavigation}
//     onCancel={cancelNavigation}
//   />
// )}
