import LoadingSpinner from "@common/spinner/LoadingSpinner";
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { postCode } from "@apis/login";

const KakaoRedirect = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const code = params.get("code");
    const login = async () => {
      try {
        if (code) {
          const result = await postCode(code);
          if (result) {
            if (!result.isActive) {
              setTimeout(() => {
                navigate(`/onboarding`);
              }, 1000);
            } else {
              setTimeout(() => {
                navigate(`/home`);
              }, 1000);
            }
          }
        }
      } catch (err) {
        setTimeout(() => {
          navigate(`/login`);
        }, 1000);
      }
    };
    login();
  }, [location]);

  return <LoadingSpinner />;
};

export default KakaoRedirect;
