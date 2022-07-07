import { useState } from 'react';
import { useNavigate } from "react-router-dom";

const useAuth = () => {
    const [login, setLogin] = useState({ userName: '', password: ''});
    const [setSession] = useState('');
    let navigate = useNavigate();

    const submitLogin = () => {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(login)
        };
        fetch('https://patient-registration-api.herokuapp.com/api/auth/login', requestOptions)
            .then(response => response.json())
            .then(data => setSession(data.OK.sessionId))
            .then(  navigate("../admin", { replace: true }))
            .catch(error => console.log("Error adding user: ", error))
    };

    const submitLogout = () => {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({})
        };
        fetch('https://patient-registration-api.herokuapp.com/api/auth/logout', requestOptions)
            .then(response => response.json())
            .then(navigate("../login", { replace: true }))
            .catch(error => console.log("Error adding user: ", error))
    };

    return { login, setLogin, submitLogin, submitLogout };
}

export default useAuth;