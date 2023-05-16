import {Link} from "react-router-dom";

export default function Signup() {

    const onSubmit = (event) => {
        event.preventDefault()
    }

    return (
        <div className="login-signup-form animated fadeInDown">
            <div className="form">
                <form onSubmit={onSubmit}>
                    <h1 className="title">Create an account</h1>
                    <input type="email" placeholder="Email"/>
                    <input type="fName" placeholder="First Name"/>
                    <input type="lName" placeholder="Last Name"/>
                    <input type="username" placeholder="Username"/>
                    <input type="password" placeholder="Password"/>
                    <button className="btn btn-block">Login</button>
                    <p className="message">
                        Already have an account? <Link to="/login">login here</Link>
                    </p>
                </form>
            </div>
        </div>
    )
}
