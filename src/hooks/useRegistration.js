import { useState, useEffect } from 'react';

const useRegistration = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3001/users/all')
            .then(response => response.json())
            .then(data => setUsers(data))
            .catch(error => console.log('error fetching data: ', error));
    }, []);

    const submitUser = (newUser) => {
        console.log('newUser: ', newUser);
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newUser)
        };
        fetch('http://localhost:3001/users/add', requestOptions)
            .then(response => response.json())
            .then(data => console.log('POST response: ', data));
    }

    return { users, submitUser }
}

export default useRegistration;