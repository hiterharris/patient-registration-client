import { useState, useEffect } from 'react';
import AWS from 'aws-sdk';

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
    const [progress, setProgress] = useState(0);

    const S3_BUCKET = process.env.REACT_APP_S3_BUCKET;
    const REGION = process.env.REACT_APP_REGION;

    AWS.config.update({
        accessKeyId: process.env.REACT_APP_ACCESS_KEY_ID,
        secretAccessKey: process.env.REACT_APP_SECRET_ACCESS_KEY
    });

    const myBucket = new AWS.S3({
        params: { Bucket: S3_BUCKET},
        region: REGION,
    })

    const uploadFile = (file) => {
        console.log('file: ', file)
        const params = {
            ACL: 'public-read',
            Body: file,
            Bucket: S3_BUCKET,
            Key: file.name
        };

        myBucket.putObject(params)
            .on('httpUploadProgress', (evt) => {
                setProgress(Math.round((evt.loaded / evt.total) * 100))
            })
            .send((err) => {
                if (err) console.log(err)
                else console.log(progress)
            })
    };

    useEffect(() => {
        fetch('https://patient-registration-api.herokuapp.com/api/users/all')
            .then(response => response.json())
            .then(data => setUsers(data))
            .catch(error => console.log('Error fetching users: ', error))
    }, []);

    const submitUser = (file) => {
        uploadFile(file);
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
