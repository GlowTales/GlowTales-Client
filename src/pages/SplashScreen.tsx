import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { CommonWrapper } from "@common/common.styled";
import Splash from "@components/splash/Splash";

const SplashScreen = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/login");
    }, 3200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <CommonWrapper>
      <Splash />
    </CommonWrapper>
  );
};

export default SplashScreen;
