import React, { useState } from 'react';
import { ImageUpload, DateInput } from '../components';
import { Link } from "react-router-dom";
import '../App.css';

const RegistrationForm = ({ newUser, setNewUser, submitUser }) => {
    const [selectedFile, setSelectedFile] = useState();
    
    return (
        <div className="RegistrationForm">
            <h1>Register</h1>
            <form>
                <div className="input-field">
                    <input type="text" required placeholder="Name" name="name" onChange={(event) => { event.target.value.length > 1 && setNewUser({ ...newUser, name: event.target.value})}} />
                </div>
                <div className="input-field">
                    <DateInput newUser={newUser} setNewUser={setNewUser} />
                </div>
                <div className="input-field">
                    <input type="text" required maxLength={14} placeholder="Phone (123) 456-7890" name="phone" onChange={(event) => setNewUser({ ...newUser, phone: event.target.value})} />
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
                    <input type="text" required maxLength={5} placeholder="Zip Code" name="zip" onChange={(event) => setNewUser({ ...newUser, zip: event.target.value})} />
                </div>
                <div className="input-field">
                    <ImageUpload newUser={newUser} setNewUser={setNewUser} selectedFile={selectedFile} setSelectedFile={setSelectedFile} />
                </div>
                <button type="submit" className="submit-button" onClick={() => submitUser(selectedFile)}>Submit</button>
            </form>
            <span className="account">Already have an account? <Link className="login-link" to="/login">Login</Link></span>            
        </div>
    );
}

export default RegistrationForm;
