import {createBrowserRouter, Navigate} from "react-router-dom";
import NotFound from "./views/notFound.jsx";
import Signup from "./views/signup.jsx";
import Login from "./views/login.jsx";
import DefaultLayout from "./components/layouts/defaultLayout.jsx";
import GuestLayout from "./components/layouts/guestLayout.jsx";
import Dashboard from "./views/dashboard.jsx";
import Users from "./views/users.jsx";
import Condition from "./views/condition.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <DefaultLayout/>,
        children: [
            {
                path: "/",
                element: <Navigate to="/dashboard"/>
            },
            {
                path: "/dashboard",
                element: <Dashboard/>
            },
            {
                path: "/conditions/:index",
                element: <Condition/>
            },
        ]
    },
    {
        path: "/",
        element: <GuestLayout/>,
        children: [
            {
                path: "/login",
                element: <Login/>
            },
            {
                path: "signup",
                element: <Signup/>
            },
        ]
    },
    {
        path: "*",
        element: <NotFound/>
    },
]);

export default router;