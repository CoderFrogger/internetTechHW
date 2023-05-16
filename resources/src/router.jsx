import {createBrowserRouter} from "react-router-dom";
import Login from "../views/login.js";
import Users from "../views/users.js";
import Signup from "../views/signup.js";

const router = createBrowserRouter([
    {
        path: "/login",
        element: <Login/>
    },
    {
        path: "/signup",
        element: <Signup/>
    },
    {
        path: "/users",
        element: <Users/>
    },
])

export default router;
