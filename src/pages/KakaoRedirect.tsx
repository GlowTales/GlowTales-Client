import LoadingSpinner from "@common/LoadingSpinner";
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const KakaoRedirect = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const code = params.get("code");
    if (code) {
      console.log("Kakao Authorization Code:", code);
      setTimeout(() => {
        navigate(`/onboarding`);
      }, 1000);
    } else {
      navigate(`/login`);
    }
  }, [location]);

  return <LoadingSpinner />;
};

export default KakaoRedirect;
