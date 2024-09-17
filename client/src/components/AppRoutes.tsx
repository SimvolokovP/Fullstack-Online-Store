import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import { RouteNames, routes } from "../routes";
import { FC, useEffect } from "react";

interface AppRoutesProps {
  isAuth: boolean
}

const AppRoutes:FC<AppRoutesProps> = ({isAuth}) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuth) {
      navigate("/auth");
    }
  }, [isAuth]);

  return (
    <Routes>
      {routes.map((route) => (
        <Route
          key={route.path}
          path={route.path}
          element={<route.component />}
          index={route.isIndex}
        />
      ))}
      <Route path="*" element={<Navigate to={RouteNames.MAIN} />} />
    </Routes>
  );
};

export default AppRoutes;
