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
        fetch('https://patient-registration-api.herokuapp.com/api/users/all')
            .then(response => response.json())
            .then(data => setUsers(data))
            .catch(error => console.log('Error fetching users: ', error))
    }, []);

    const submitUser = () => {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newUser)
        };
        fetch('https://patient-registration-api.herokuapp.com/api/users/add', requestOptions)
            .then(response => response.json())
            .then(data => console.log('POST response: ', data))
            .catch(error => console.log("Error adding user: ", error))
        setTimeout(() => window.location.reload(false), 1000);
    };

    const deleteUser = (id) => {
        fetch(`https://patient-registration-api.herokuapp.com/api/users/remove/${id}`, { method: 'DELETE' })
            .then(() => {})
            .catch(error => console.log("Error deleting user: ", error))
        setTimeout(() => window.location.reload(false), 1000);
    };

    return { newUser, setNewUser, submitUser, deleteUser, users }
}

export default useRegistration;
