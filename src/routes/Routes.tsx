import { Routes as AppRoutes, Route } from "react-router-dom";
import { Home, About, UnhandledRoute } from "../pages";

interface RouteProps {
  path: string;
  element: React.ReactElement;
}

const routes: RouteProps[] = [
  { path: "/", element: <Home /> },
  { path: "/about", element: <About /> },
  { path: "*", element: <UnhandledRoute /> },
];

const Routes: React.FC = () => {
  return (
    <AppRoutes>
      {routes.map((route) => (
        <Route key={route.path} path={route.path} element={route.element} />
      ))}
    </AppRoutes>
  );
};

export default Routes;
