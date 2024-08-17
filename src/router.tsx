import { createBrowserRouter } from "react-router-dom";
import LogoMain from "./pages/LogoMain";
import Login from "./pages/Login";
import Onboarding from "./pages/Onboarding";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LogoMain />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/onboading",
    element: <Onboarding />,
  },
]);

export default router;
