import LocalStorage from "@utils/localStorage";
import { getAuthAxios } from "./authAxois";
import { LearningInfoData } from "@type/learning";

const baseURL = import.meta.env.VITE_PUBLIC_SERVER_URL;

export const createQuiz = async (body: LearningInfoData) => {
  try {
    const access = LocalStorage.getItem("access");
    const authAxios = getAuthAxios(access);
    const response = await authAxios.post(`${baseURL}/quiz/`, body);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getQuizAndAnswer = async (languageTaleId: number) => {
  try {
    const access = LocalStorage.getItem("access");
    const authAxios = getAuthAxios(access);
    const response = await authAxios.get(`${baseURL}/quiz/${languageTaleId}`);
    return response.data.data;
  } catch (error) {
    throw error;
  }
};

export const getLearningLevel = async (languageId: number) => {
  try {
    const access = LocalStorage.getItem("access");
    const authAxios = getAuthAxios(access);
    const response = await authAxios.get(
      `${baseURL}/members/learningLevel?languageId=${languageId}`
    );
    return response.data.data;
  } catch (error) {
    throw error;
  }
};
