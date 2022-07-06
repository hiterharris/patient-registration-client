import { Link } from "react-router-dom";
import '../App.css';

const Login = () => {
    return (
        <div className="Login">
            <h1>Login</h1>
            <form>
                <div className="input-field">
                    <input type="text" placeholder="Username" name="username" onChange={() => null} />
                </div>
                <div className="input-field">
                    <input type="text" placeholder="Password" name="password" onChange={() => null} />
                </div>
            </form>
            <Link className="register-link" to="/admin">
                <button type="submit" className="submit-button" onClick={() => console.log('login')}>Login</button>
            </Link>
            <span className="account">Don't have an account? <Link className="register-link" to="/">Register</Link></span>            
        </div>
    );
}

export default Login;
