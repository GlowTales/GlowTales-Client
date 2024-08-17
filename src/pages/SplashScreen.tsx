import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Splash from "@/components/splash/Splash";
import { CommonWrapper } from "@/components/common/common.styled";

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
