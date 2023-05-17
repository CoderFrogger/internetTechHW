import {Link} from "react-router-dom";
import {useRef} from "react";
import {useStateContext} from "../contexts/contextProvider.jsx";
import axios from "axios";

export default function Signup() {
    const usernameRef = useRef()
    const emailRef = useRef()
    const passwordRef = useRef()

    const {setUser, setToken} = useStateContext()

    const onSubmit = (event) => {
        event.preventDefault()
        const payload = {
            username: usernameRef.current.value,
            email: emailRef.current.value,
            password: passwordRef.current.value,
        }
        axios.post('http://localhost:63342/api/signup.php', payload);
    }

    return (
        <div className="login-signup-form animated fadeInDown">
            <div className="form">
                <form onSubmit={onSubmit}>
                    <h1 className="title">Create an account</h1>
                    <input ref={usernameRef} type="username" placeholder="Username"/>
                    <input ref={emailRef} type="email" placeholder="Email"/>
                    <input ref={passwordRef} type="password" placeholder="Password"/>
                    <button className="btn btn-block">Signup</button>
                    <p className="message">
                        Already have an account? <Link to="/login">login here</Link>
                    </p>
                </form>
            </div>
        </div>
    )
}
