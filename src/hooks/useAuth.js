import { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";

const useAuth = () => {
    const [login, setLogin] = useState({ userName: '', password: ''});
    const [session, setSession] = useState('');
    let navigate = useNavigate();

    const submitLogin = () => {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(login)
        };
        fetch('https://patient-registration-api.herokuapp.com/api/auth/login', requestOptions)
            .then(response => response.json())
            .then(data => setSession(data?.OK?.sessionId))
            .catch(error => console.log("Error adding user: ", error))
    };

    useEffect(() => {
        session && setTimeout(() => navigate("../admin", { replace: true }), 1000)
    }, [session, navigate]);

    const submitLogout = () => {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({})
        };
        fetch('https://patient-registration-api.herokuapp.com/api/auth/logout', requestOptions)
            .then(response => response.json())
            .then(setSession({}))
            .then(navigate("../login", { replace: true }))
            .catch(error => console.log("Error adding user: ", error))
    };

    return { login, setLogin, submitLogin, submitLogout };
}

export default useAuth;
