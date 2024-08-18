const kakaoLoginConfig = {
  rest_api_key: import.meta.env.VITE_API_KEY,
  redirect_uri: import.meta.env.VITE_REDIRECT_URI,
};

export const kakaoURL = `https://kauth.kakao.com/oauth/authorize?client_id=${kakaoLoginConfig.rest_api_key}&redirect_uri=${kakaoLoginConfig.redirect_uri}&response_type=code`;
