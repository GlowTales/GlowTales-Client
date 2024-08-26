import LocalStorage from "@utils/localStorage";
import axios from "axios";
import { getAuthAxios } from "./authAxois";

const baseURL = import.meta.env.VITE_PUBLIC_SERVER_URL;

export const getToken = async () => {
  const response = await axios.get(`${baseURL}/members/token/es`);
  const accessToken = response.data.data;
  // const refreshToken = response.data.data.token.refreshToken;

  LocalStorage.setItem("access", accessToken);
};

export const postCode = async (code: string) => {
  try {
    const response = await axios.get(
      `${baseURL}/members/oauth/kakao/login?code=${code}`
    );
    // 가입된 사용자

    const accessToken = response.data.data.token.accessToken;
    const refreshToken = response.data.data.token.refreshToken;

    LocalStorage.setItem("access", accessToken);
    LocalStorage.setItem("refresh", refreshToken);

    return response.data.data;
  } catch (error) {
    throw error;
  }
};

/**
 * 사용자 정보 등록 메서드
 * 인자 추후 추가 예정
 */
export const registerUser = async ({
  languageId,
  learningLevel,
  age,
}: {
  languageId: number;
  learningLevel: string;
  age: number;
}) => {
  try {
    const access = LocalStorage.getItem("access");
    const authAxios = getAuthAxios(access);
    const response = await authAxios.put(`${baseURL}/members`, {
      languageId,
      learningLevel,
      age,
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};
