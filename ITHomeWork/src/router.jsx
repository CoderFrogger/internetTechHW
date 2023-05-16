import {createBrowserRouter} from "react-router-dom";
import NotFound from "./views/notFound.jsx";
import Signup from "./views/signup.jsx";
import Login from "./views/login.jsx";
import Users from "./views/users.jsx";

const router = createBrowserRouter([
    {
        path: "/login",
        element: <Login/>
    },
    {
        path: "signup",
        element: <Signup/>
    },
    {
        path: "/users",
        element: <Users/>
    },
    {
        path: "*",
        element: <NotFound/>
    },
]);

export default router;
