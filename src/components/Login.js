import useAuth from '../hooks/useAuth';
import { Link } from "react-router-dom";
import '../App.css';

const Login = () => {
    const { login, setLogin, submitLogin } = useAuth();
    return (
        <div className="Login">
            <h1>Login</h1>
            <form>
                <div className="input-field">
                    <input type="text" placeholder="Username" name="username" onChange={e => setLogin({...login, userName: e.target.value})} />
                </div>
                <div className="input-field">
                    <input type="text" placeholder="Password" name="password" onChange={e => setLogin({...login, password: e.target.value})} />
                </div>
            </form>
            <button type="submit" className="submit-button" onClick={submitLogin}>Login</button>
            <span className="account">Don't have an account? <Link className="register-link" to="/">Register</Link></span>   
        </div>
    );
}

export default Login;
