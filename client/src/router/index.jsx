import { createBrowserRouter, Outlet } from "react-router-dom";
import Login, {checkLogin} from "../pages/Login";
import Register, {checkRegister} from "../pages/Register";
import Home from "../pages/Home";
import Project, {loader} from "../pages/Project";
import CreateProject from "../pages/createProject";

const AuthLayout = () => {
  return <Outlet />;
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <AuthLayout />,
    children: [
      {
        path: "",
        element: <Home />,
        children: [
          {
            path: "login",
            element: <Login />,
            action: checkLogin
          },
          {
            path: "register",
            element: <Register />,
            action: checkRegister
          },
          {
            path: "project/:pageNum",
            element: <Project />,
            loader: loader
          },
          {
            path: "create_project",
            element: <CreateProject />,
          },
        ],
      },
    ],
  },
]);

export default router;
