import { ImageUpload } from '../components';
import { Link } from "react-router-dom";
import '../App.css';

const RegistrationForm = ({ newUser, setNewUser, submitUser }) => {

    return (
        <div className="RegistrationForm">
            <h1>Register</h1>
            <form>
                <div className="input-field">
                    <input type="text" placeholder="Name" name="name" onChange={(event) => setNewUser({ ...newUser, name: event.target.value})} />
                </div>
                <div className="input-field">
                    <input type="text" placeholder="Date of Birth" name="dateOfBirth" onChange={(event) => setNewUser({ ...newUser, dateOfBirth: event.target.value})} />
                </div>
                <div className="input-field">
                    <input type="text" placeholder="Phone Number" name="phone" onChange={(event) => setNewUser({ ...newUser, phone: event.target.value})} />
                </div>
                <div className="input-field">
                    <input type="text" placeholder="Email Address" name="email" onChange={(event) => setNewUser({ ...newUser, email: event.target.value})} />
                </div>
                <div className="input-field">
                    <input type="text" placeholder="Address" name="addressLine1" onChange={(event) => setNewUser({ ...newUser, addressLine1: event.target.value})} />
                </div>
                <div className="input-field">
                    <input type="text" placeholder="City" name="city" onChange={(event) => setNewUser({ ...newUser, city: event.target.value})} />
                </div>
                <div className="input-field">
                    <input type="text" placeholder="State" name="state" onChange={(event) => setNewUser({ ...newUser, state: event.target.value})} />
                </div>
                <div className="input-field">
                    <input type="text" placeholder="Zip Code" name="zip" onChange={(event) => setNewUser({ ...newUser, zip: event.target.value})} />
                </div>
                <div className="input-field">
                    <ImageUpload newUser={newUser} setNewUser={setNewUser} />
                </div>
            </form>
            <button type="submit" className="submit-button" onClick={() => submitUser()}>Submit</button>
            <span className="account">Already have an account? <Link className="login-link" to="/login">Login</Link></span>            
        </div>
    );
}

export default RegistrationForm;
