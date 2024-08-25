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
    element: <CreateMainPage />,
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
    path: "/create",
    element: <CreateTalePage />,
  },
  {
    path: "/readTale",
    element: <ReadTalePage />,
  },
  {
    path: "/learnTale",
    element: <PreLearningQuestionPage />,
  },
  {
    path: "/learnTale/:id",
    element: <TaleLearnPage />,
  },
]);

export default router;
