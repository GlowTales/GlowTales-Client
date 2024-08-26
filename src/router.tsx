import { createBrowserRouter } from "react-router-dom";
import LoginPage from "@pages/LoginPage";
import OnboardingPage from "@pages/OnboardingPage";
import HomePage from "@pages/HomePage";
import SplashScreen from "@pages/SplashScreen";
import KakaoRedirect from "@pages/KakaoRedirect";
import LearningPage from "@pages/LearningPage";
import SelectKeywordPage from "@pages/SelectKeywordPage";
import TaleDetailPage from "@pages/TaleDetailPage";
import ReadTalePage from "@pages/ReadTalePage";
import CreateMainPage from "@pages/CreateMainPage";
import CreateTalePage from "@pages/CreateTalePage";
import TaleLearnPage from "@pages/TaleLearnPage";
import PreLearningQuestionPage from "@pages/PreLearningQuestionPage";
import MoreRecentTales from "@components/home/homeRecentTales/MoreRecentTales";

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
    path: "/kakao",
    element: <KakaoRedirect />,
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
    path: "/more",
    element: <MoreRecentTales />,
  },
  {
    path: "/learnTale",
    element: <LearningPage />,
  },
  {
    path: "/createTale",
    element: <CreateMainPage />,
  },
  {
    path: "/createTale/keyword",
    element: <SelectKeywordPage />,
  },
  {
    path: "/createTale/details",
    element: <TaleDetailPage />,
  },
  {
    path: "/createTale/generate",
    element: <CreateTalePage />,
  },
  {
    path: "/readTale",
    element: <ReadTalePage />,
  },
  {
    path: "/learnTale/pre",
    element: <PreLearningQuestionPage />,
  },
  {
    path: "/learnTale/quiz",
    element: <TaleLearnPage />,
  },
]);

export default router;
