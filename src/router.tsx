import { createBrowserRouter } from "react-router-dom";
import LoginPage from "@pages/LoginPage";
import OnboardingPage from "@pages/OnboardingPage";
import SplashScreen from "@pages/SplashScreen";
import CreatePage from "@pages/CreatePage";
import KakaoRedirect from "@pages/KakaoRedirect";

const router = createBrowserRouter([
  {
    path: "/",
    element: <SplashScreen />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/onboarding",
    element: <OnboardingPage />,
  },
  {
    path: "/createTale",
    element: <CreatePage />,
  },
  {
    path: "/kakao",
    element: <KakaoRedirect />,
  },
]);

export default router;
