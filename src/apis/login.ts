import LocalStorage from "@utils/localStorage";
import axios from "axios";
import { getAuthAxios } from "./authAxois";

const baseURL = import.meta.env.VITE_PUBLIC_SERVER_URL;

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

    // 임시로 바로 회원등록
    if (!response.data.data.isActive) {
      const result = await registerUser();
      if (!result) throw Error("회원 등록 실패");
    }
    return response.data;
  } catch (error) {
    // console.error('에러 발생', error);
    throw error;
  }
};

/**
 * 사용자 정보 등록 메서드
 * 인자 추후 추가 예정
 */
export const registerUser = async (): Promise<string[]> => {
  try {
    const access = LocalStorage.getItem("access");
    const authAxios = getAuthAxios(access);
    const response = await authAxios.put(`${baseURL}/members`, {
      languageId: 1,
      learningLevel: "1000",
      age: 3,
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};
