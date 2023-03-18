import { createBrowserRouter, Outlet } from "react-router-dom";
import Login, {checkLogin} from "../pages/Login/Login";
import Register, {checkRegister} from "../pages/Login/Register";
import Home from "../pages/Home";
import Project, {loader} from "../pages/Project/Project";

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
          
        ],
      },
    ],
  },
]);

export default router;
