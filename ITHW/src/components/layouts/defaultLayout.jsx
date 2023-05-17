
import {Link, Navigate, Outlet} from "react-router-dom";
import {useStateContext} from "../../contexts/contextProvider.jsx";

export default function DefaultLayout() {
    const {user, token} = useStateContext()
    const {setToken} = useStateContext()

    if (!token){
        return <Navigate to="/login"/>
    }

    const onLogout = (event) => {
        event.preventDefault()
        setToken(token)
        location.reload();
    }

    return (
        <div id = "defaultLayout">
            <aside>
                <Link to="/dashboard">Conditions</Link>
                <Link to="/delete">Delete Account</Link>
            </aside>
            <div className="content">
                <header>
                    <div></div>
                    <div>
                        <a href="#" onClick={onLogout} className="btn-logout">Logout</a>
                    </div>
                </header>
                <main>
                    <Outlet/>
                </main>
            </div>
        </div>
    )
}