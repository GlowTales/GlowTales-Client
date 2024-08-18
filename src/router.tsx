import { createBrowserRouter } from "react-router-dom";
import LoginPage from "@pages/LoginPage";
import OnboardingPage from "@pages/OnboardingPage";
import SplashScreen from "@pages/SplashScreen";
import CreatePage from "@pages/CreatePage";

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
    path: "/onboading",
    element: <OnboardingPage />,
  },
  {
    path: "/createTale",
    element: <CreatePage />,
  },
]);

export default router;
