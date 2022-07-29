import React, { useEffect } from 'react';
import { ImageUpload } from '../components';
import { Link } from "react-router-dom";
import useRegistration from '../hooks/useRegistration';
import { formatPhoneNumber } from '../helpers/formatPhoneNumber';
import { formatDateISO } from '../helpers/formatDates';
import '../App.css';

const RegistrationForm = ({ newUser, setNewUser, submitUser }) => {
    const { selectedFile, setSelectedFile } = useRegistration();

    const handleSubmit = event => {
        event.preventDefault();
        submitUser(selectedFile);
    };

    return (
        <>
        <div className="RegistrationForm">
            <h1>Register</h1>
            <form onSubmit={handleSubmit}>
                <div className="input-field">
                    <input type="text" required minlength="2" placeholder="Name" name="name" onChange={(event) => { event.target.value.length > 1 && setNewUser({ ...newUser, name: event.target.value})}} />
                </div>
                <div className="input-field">
                    <input type="date"required max={formatDateISO(new Date())} onChange={(e) => {setNewUser({ ...newUser, dateOfBirth: e.target.value})}} className="date-input" />
                </div>
                <div className="input-field">
                    <input type="text" required maxLength={14} placeholder="Phone (123) 456-7890" name="phone" value={newUser.phone} onChange={(event) => setNewUser({ ...newUser, phone: formatPhoneNumber(event.target.value)})} />
                </div>
                <div className="input-field">
                    <input type="email" required placeholder="Email Address" name="email" onChange={(event) => setNewUser({ ...newUser, email: event.target.value})} />
                </div>
                <div className="input-field">
                    <input type="text" required placeholder="Address" name="addressLine1" onChange={(event) => setNewUser({ ...newUser, addressLine1: event.target.value})} />
                </div>
                <div className="input-field">
                    <input type="text" required placeholder="City" name="city" onChange={(event) => setNewUser({ ...newUser, city: event.target.value})} />
                </div>
                <div className="input-field">
                    <input type="text" required maxLength={2} placeholder="State" name="state"  onChange={(event) => setNewUser({ ...newUser, state: event.target.value})} />
                </div>
                <div className="input-field">
                    <input type="number" required maxLength={5} placeholder="Zip Code" name="zip" onChange={(event) => setNewUser({ ...newUser, zip: event.target.value})} />
                </div>
                <div className="input-field">
                    <ImageUpload newUser={newUser} setNewUser={setNewUser} selectedFile={selectedFile} setSelectedFile={setSelectedFile} />
                </div>
                <button type="submit" className="submit-button">Submit</button>
            </form>
            <div className='modal'>
            <div className='success'>
                <p>You have successfully registered!</p>
            </div>
            </div>
            
            <span className="account">Are you an admin? <Link className="login-link" to="/login">Login</Link></span>         
        </div>
        </>
        
    );
}

export default RegistrationForm;
