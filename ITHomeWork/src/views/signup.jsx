import {Link} from "react-router-dom";
import {useRef} from "react";
import axiosClient from "axios";
import {useStateContext} from "../contexts/contextProvider.jsx";

export default function Signup() {
    const fNameRef = useRef()
    const lNameRef = useRef()
    const emailRef = useRef()
    const usernameRef = useRef()
    const passwordRef = useRef()

    const {setUser, setToken} = useStateContext()

    const onSubmit = (event) => {
        event.preventDefault()
        const payload = {
            fName: fNameRef.current.value,
            lName: lNameRef.current.value,
            email: emailRef.current.value,
            username: usernameRef.current.value,
            password: passwordRef.current.value,
        }
        axiosClient.post('/signup', payload)
            .then(({data}) => {
                setUser(data.user)
                setToken(data.token)
            })
            .catch(err => {
                const response = err.response;
                if (response.status === 422) {
                    console.log(response.data.errors);
                }
            })
    }

    return (
        <div className="login-signup-form animated fadeInDown">
            <div className="form">
                <form onSubmit={onSubmit}>
                    <h1 className="title">Create an account</h1>
                    <input ref={fNameRef} type="fName" placeholder="First Name"/>
                    <input ref={lNameRef} type="lName" placeholder="Last Name"/>
                    <input ref={emailRef} type="email" placeholder="Email"/>
                    <input ref={usernameRef} type="username" placeholder="Username"/>
                    <input ref={passwordRef} type="password" placeholder="Password"/>
                    <button className="btn btn-block">Login</button>
                    <p className="message">
                        Already have an account? <Link to="/login">login here</Link>
                    </p>
                </form>
            </div>
        </div>
    )
}
