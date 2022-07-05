import { useState, useEffect } from 'react';

const useRegistration = () => {
    const [users, setUsers] = useState([]);
    const [newUser, setNewUser] = useState({
        name: '',
        dateOfBirth: '',
        phone: '',
        email: '',
        addressLine1: '',
        city: '',
        state: '',
        zip: '',
        photoId: ''
    });

    useEffect(() => {
        fetch('https://patient-registration-api.herokuapp.com/users/all')
            .then(response => response.json())
            .then(data => setUsers(data))
            .catch(error => console.log('error fetching data: ', error));
    }, []);

    const submitUser = () => {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newUser)
        };
        fetch('https://patient-registration-api.herokuapp.com/users/add', requestOptions)
            .then(response => response.json())
            .then(data => console.log('POST response: ', data));
    }

    return { newUser, setNewUser, submitUser, users }
}

export default useRegistration;
