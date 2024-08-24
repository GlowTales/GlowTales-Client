import { createBrowserRouter } from "react-router-dom";
import LoginPage from "@pages/LoginPage";
import OnboardingPage from "@pages/OnboardingPage";
import HomePage from "@pages/HomePage";
import SplashScreen from "@pages/SplashScreen";
import CreatePage from "@pages/CreatePage";
import KakaoRedirect from "@pages/KakaoRedirect";
import LearningPage from "@pages/LearningPage";
import SelectKeywordPage from "@pages/SelectKeywordPage";
import TaleDetailPage from "@pages/TaleDetailPage";
import ReadTale from "@components/tales/readTale/ReadTale";
import TaleLearnPage from "@pages/TaleLearnPage";

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
    path: "/home",
    element: <HomePage />,
  },
  {
    path: "/createTale",
    element: <CreatePage />,
  },
  {
    path: "/kakao",
    element: <KakaoRedirect />,
  },
  {
    path: "/learning",
    element: <LearningPage />,
  },
  {
    path: "/selectKeyword",
    element: <SelectKeywordPage />,
  },
  {
    path: "/taleDetail",
    element: <TaleDetailPage />,
  },
  {
    path: "/readTale",
    element: <ReadTale />,
  },
  {
    path: "/learnTale/:id",
    element: <TaleLearnPage />,
  },
]);

export default router;
