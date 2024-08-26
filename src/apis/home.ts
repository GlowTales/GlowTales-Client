import LocalStorage from "@utils/localStorage";
import { getAuthAxios } from "./authAxois";

const baseURL = import.meta.env.VITE_PUBLIC_SERVER_URL;

/**
 * 단어장 조회
 */
export const getStatus = async () => {
  try {
    const access = LocalStorage.getItem("access");
    const authAxios = getAuthAxios(access);
    const response = await authAxios.get(`${baseURL}/tales/status`);
    return response.data.data;
  } catch (error) {
    throw error;
  }
};

export const getWord = async (count?: number) => {
  try {
    const access = LocalStorage.getItem("access");
    const authAxios = getAuthAxios(access);
    const response = await authAxios.get(
      `${baseURL}/tales/word${count ? `?count=${count}` : ""}`
    );
    return response.data.data;
  } catch (error) {
    throw error;
  }
};

/**
 * 완료하지 않은 동화 조회
 */
export const getUnlearnedTales = async (
  koreanVersion: boolean,
  count?: number
) => {
  try {
    const access = LocalStorage.getItem("access");
    const authAxios = getAuthAxios(access);
    const response = await authAxios.get(
      `${baseURL}/tales/unlearned?koreanVersion=${koreanVersion}${count ? `&count=${count}` : ""}`
    );
    return response.data.data;
  } catch (error) {
    throw error;
  }
};

/**
 * 최근 학습한 동화 전체 조회
 */
export const getLearnedTales = async (
  koreanVersion: boolean,
  count?: number
) => {
  try {
    const access = LocalStorage.getItem("access");
    const authAxios = getAuthAxios(access);
    const response = await authAxios.get(
      `${baseURL}/tales/studied?koreanVersion=${koreanVersion}${count ? `&count=${count}` : ""}`
    );
    return response.data.data;
  } catch (error) {
    throw error;
  }
};
