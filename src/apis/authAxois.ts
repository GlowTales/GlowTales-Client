import LocalStorage from "@utils/localStorage";
import axios from "axios";

const baseURL = import.meta.env.VITE_PUBLIC_SERVER_URL;

const parseJwt = (token: string | null) => {
  if (token) return JSON.parse(atob(token.split(".")[1]));
};

// 토큰 유효성 검사 및 재발급
export const checkAndRefreshToken = async () => {
  const accessToken = LocalStorage.getItem("access");
  const refreshToken = LocalStorage.getItem("refresh");

  if (!accessToken || !refreshToken) {
    return null;
  }

  const decodedAccess = parseJwt(accessToken);

  if (decodedAccess && decodedAccess.exp * 1000 < Date.now()) {
    alert("토큰 만료로 자동 로그아웃되었습니다. 다시 로그인해주세요.");
    LocalStorage.removeItem("access");
    LocalStorage.removeItem("refresh");
    return null;
  }

  return accessToken;
};

// 토큰 유효성 검사 함수
export const AuthVerify = async () => {
  const accessToken = await checkAndRefreshToken();

  if (!accessToken) {
    return false;
  }
  return true;
};

export const getAuthAxios = (token: string | null) => {
  // Axios 인스턴스 생성
  const authAxios = axios.create({
    baseURL,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  // 응답 인터셉터 설정
  authAxios.interceptors.response.use(
    (response) => {
      return response;
    },
    async (error) => {
      throw error;
      // alert("토큰이 만료되었습니다. 재로그인 후 시도해주세요!");
      // LocalStorage.removeItem("access");
      // LocalStorage.removeItem("refresh");
      // window.location.href = "/login";
      // return Promise.reject(error); // 에러 전달
    }
  );

  return authAxios;
};
