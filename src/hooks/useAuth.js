import { useState } from 'react';
import { useNavigate } from "react-router-dom";

const useAuth = () => {
    const [login, setLogin] = useState({ userName: '', password: ''});
    let navigate = useNavigate();

    const submitLogin = (e) => {
        e.preventDefault();
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(login)
        };
        fetch('https://patient-registration-api.herokuapp.com/api/auth/login', requestOptions)
            .then(response => response.json())
            .then(data => { sessionStorage.setItem("sessionId", data?.OK?.sessionId); setTimeout(() => navigate("../admin", { replace: true }), 1000) })
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
            .then(sessionStorage.setItem("sessionId", ''))
            .then(navigate("../login", { replace: true }))
            .catch(error => console.log("Error adding user: ", error))
    };

    return { login, setLogin, submitLogin, submitLogout };
}

export default useAuth;
