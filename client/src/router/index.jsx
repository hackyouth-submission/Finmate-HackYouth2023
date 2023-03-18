import { createBrowserRouter, Outlet } from "react-router-dom";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Home from "../pages/Home";
import Payment from "../pages/payments/Payment"
import BankSelect from "../pages/payments/BankSelect"

import Projects from "../pages/Projects";

const AuthLayout = () => {
    return <Outlet />
}

export default createBrowserRouter([
    {
        element: <AuthLayout />,
        children: [
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/register',
                element: <Register />
            },
            {
                path: '/payment',
                element: <Payment />,
                
            },
            {
                path: "/projects",
                element: <Projects />
            }
            ,
            {
                path: '/',
                element: <Home />
            },{
                path: '/Bankselect',
                element: <BankSelect />
            }
            
        ]
    }
]);

