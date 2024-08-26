import LocalStorage from "@utils/localStorage";
import { getAuthAxios } from "./authAxois";
import { CreateTaleData } from "@type/createTale";
// import { Server } from "./settings";

const baseURL = import.meta.env.VITE_PUBLIC_SERVER_URL;

export const createKeyword = async (body: FormData): Promise<string[]> => {
  try {
    const access = LocalStorage.getItem("access");
    const authAxios = getAuthAxios(access);
    const response = await authAxios.post(`${baseURL}/tales/keyword`, body, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    // response에서 keyword만 추출하여 배열에 담아 return
    const keywords: string[] = response.data.data.result.map(
      (item: { keyword: string }) => item.keyword
    );

    return keywords;
  } catch (error) {
    alert(
      "이미지 화질이 안좋거나, 추출된 키워드가 없습니다. 다시 이미지를 업로드하세요!"
    );
    throw error;
  }
};

export const createTale = async (body: CreateTaleData) => {
  try {
    const access = LocalStorage.getItem("access");
    const authAxios = getAuthAxios(access);
    const response = await authAxios.post(`${baseURL}/tales/`, body);
    return response.data.data;
  } catch (error) {
    throw error;
  }
};

export const getTale = async (lanId: number, taleId: number) => {
  try {
    const access = LocalStorage.getItem("access");
    const authAxios = getAuthAxios(access);
    const response = await authAxios.get(
      `${baseURL}/tales/detail/lan?languageId=${lanId}&taleId=${taleId}`
    );
    return response.data.data;
  } catch (error) {
    throw error;
  }
};

export const getRecentTale = async (count?: number) => {
  try {
    const access = LocalStorage.getItem("access");
    const authAxios = getAuthAxios(access);
    const response = await authAxios.get(
      `${baseURL}/tales/recently${count ? `&count=${count}` : ""}`
    );
    console.log(response.data.data.tales);
    return response.data.data.tales;
  } catch (error) {
    throw error;
  }
};
