import {Link} from "react-router-dom";
import {useRef} from "react";
import axios from "axios";
import {useStateContext} from "../contexts/contextProvider.jsx";

export default function Login() {
    const usernameRef = useRef()
    const passwordRef = useRef()

    const {setToken} = useStateContext()

    const onSubmit = (event) => {
        event.preventDefault()
        const payload = {
            username: usernameRef.current.value,
            password: passwordRef.current.value,
        }
        axios.post('http://localhost/api/login.php', payload)
            .then(function (response) {
                if (response.status === 200) {
                    setToken(response.token)
                    location.reload();
                }
            })
    }

    return (
        <div className="login-signup-form animated fadeInDown">
            <div className="form">
                <form onSubmit={onSubmit}>
                    <h1 className="title">Login</h1>
                    <input ref={usernameRef} type="username" placeholder="Username"/>
                    <input ref={passwordRef} type="password" placeholder="Password"/>
                    <button className="btn btn-block">Login</button>
                    <p className="message">
                        Not registered? <Link to="/signup">Create an account</Link>
                    </p>
                </form>
            </div>
        </div>
    )
}