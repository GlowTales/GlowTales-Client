import LoadingSpinner from "@common/spinner/LoadingSpinner";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { postCode } from "@apis/login";

const KakaoRedirect = () => {
  const location = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const code = params.get("code");
    const login = async () => {
      try {
        if (code) {
          const result = await postCode(code);
          console.log(result);
          // if (result) {
          //   setTimeout(() => {
          //     navigate(`/onboarding`);
          //   }, 1000);
          // }
        }
      } catch (err) {
        console.log(err);
        // setTimeout(() => {
        //   navigate(`/login`);
        // }, 1000);
      }
    };
    login();
  }, [location]);

  return <LoadingSpinner />;
};

export default KakaoRedirect;
