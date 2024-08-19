import LocalStorage from "@utils/localStorage";
import axios from "axios";

const baseURL = import.meta.env.VITE_PUBLIC_SERVER_URL;

export const postCode = async (code: string) => {
  try {
    const response = await axios.get(
      `${baseURL}/members/oauth/kakao/login?code=${code}`
    );
    console.log(response.data);
    // 가입된 사용자

    const accessToken = response.data.data.token.access_token;
    const refreshToken = response.data.data.token.refresh_token;

    LocalStorage.setItem("access", accessToken);
    LocalStorage.setItem("refresh", refreshToken);

    return response.data;
  } catch (error) {
    // console.error('에러 발생', error);
    throw error;
  }
};
