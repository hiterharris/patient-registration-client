import useAuth from '../hooks/useAuth';
import { Link } from "react-router-dom";
import '../App.css';
import { useEffect } from 'react';

const Login = () => {
    const { login, setLogin, submitLogin, loginError, session } = useAuth();
    const handleSubmit = event => {
        event.preventDefault();
        submitLogin();
    }

    useEffect(() => {
        console.log('session: ', session);
    }, [session]);

    return (
        <div className="Login">
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <div className="input-field">
                    <input type="text" required placeholder="Username" name="username" onChange={e => setLogin({...login, userName: e.target.value})} />
                </div>
                <div className="input-field">
                    <input type="pasword" required placeholder="Password" name="password" onChange={e => setLogin({...login, password: e.target.value})} />
                </div>
                {loginError && <p>Incorrect username or password</p>}
                <button type="submit" className="submit-button">Login</button>
            </form>
            <span className="account">Are you a new patient? <Link className="register-link" to="/">Register</Link></span>   
        </div>
    );
}

export default Login;
