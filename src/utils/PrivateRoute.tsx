import { AuthVerify } from "@apis/authAxois";
import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";

interface PrivateRouteProps {
  element: JSX.Element;
  [key: string]: any;
}

const PrivateRoute = ({ element }: PrivateRouteProps) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);

  useEffect(() => {
    const checkAuth = async () => {
      const result = await AuthVerify();
      setIsAuthenticated(result);
    };
    checkAuth();
  }, []);

  if (isAuthenticated === null) {
    return;
  }

  return isAuthenticated ? element : <Navigate to="/login" />;
};

export default PrivateRoute;
