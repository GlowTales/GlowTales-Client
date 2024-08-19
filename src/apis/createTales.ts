import axios from "axios";

const baseURL = import.meta.env.VITE_PUBLIC_SERVER_URL;

export const createWithImg = async (body: FormData): Promise<string[]> => {
  try {
    const response = await axios.post(`${baseURL}/tale/keyword`, body, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    console.log(response.data);
    return response.data;
  } catch (error) {
    alert("동화 생성 중 문제가 발생했습니다. 잠시 후 다시 시도해주세요.");
    throw error;
  }
};
