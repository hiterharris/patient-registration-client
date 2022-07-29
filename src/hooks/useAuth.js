import { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";

const useAuth = () => {
    const [login, setLogin] = useState({ userName: '', password: ''});
    const [session, setSession] = useState(window.localStorage.getItem('session') || '');
    const [loginError, setLoginError] = useState(false);
    let navigate = useNavigate();

    const submitLogin = () => {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(login)
        };
        fetch('https://patient-registration-api.herokuapp.com/api/auth/login', requestOptions)
            .then(response => response.json())
            .then(data => window.localStorage.setItem('session', data?.OK?.sessionId))
            .then(setTimeout(() => {navigate("../admin", { replace: true })}, 1000))
            .catch(error => { setLoginError(true); console.log("Error on submitLogin: ", error )})
    };

    useEffect(() => {
        console.log('session: ', session);
        session && navigate("../admin", { replace: true });
    }, [session, navigate]);

    const submitLogout = () => {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({})
        };
        fetch('https://patient-registration-api.herokuapp.com/api/auth/logout', requestOptions)
            .then(response => response.json())
            .then(window.localStorage.removeItem('session'))
            .then(navigate("../login", { replace: true }))
            .catch(error => console.log("Error adding user: ", error))
    };

    return { login, setLogin, submitLogin, submitLogout, loginError, session, setSession };
}

export default useAuth;
