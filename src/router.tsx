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
import PrivateRoute from "@utils/PrivateRoute";
import WordMore from "@components/learn/learnMain/word/WordMore";
import UnLearnedMore from "@components/learn/learnMain/unLearned/UnLearnedMore";
import LearnedMore from "@components/learn/learnMain/learned/LearnedMore";

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
    element: <PrivateRoute element={<OnboardingPage />} />,
  },
  {
    path: "/home",
    element: <PrivateRoute element={<HomePage />} />,
  },
  {
    path: "/home/moreRecentTales",
    element: <MoreRecentTales />,
  },
  {
    path: "/learnTale",
    element: <PrivateRoute element={<LearningPage />} />,
  },
  {
    path: "/learnTale/moreWord",
    element: <WordMore />,
  },
  {
    path: "/learnTale/moreUnLearned",
    element: <UnLearnedMore />,
  },
  {
    path: "/learnTale/moreLearned",
    element: <LearnedMore />,
  },
  {
    path: "/createTale",
    element: <PrivateRoute element={<CreateMainPage />} />,
  },
  {
    path: "/createTale/keyword",
    element: <PrivateRoute element={<SelectKeywordPage />} />,
  },
  {
    path: "/createTale/details",
    element: <PrivateRoute element={<TaleDetailPage />} />,
  },
  {
    path: "/createTale/generate",
    element: <PrivateRoute element={<CreateTalePage />} />,
  },
  {
    path: "/readTale",
    element: <PrivateRoute element={<ReadTalePage />} />,
  },
  {
    path: "/learnTale/pre",
    element: <PrivateRoute element={<PreLearningQuestionPage />} />,
  },
  {
    path: "/learnTale/quiz",
    element: <PrivateRoute element={<TaleLearnPage />} />,
  },
]);

export default router;
