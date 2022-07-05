import '../App.css';

const RegistrationForm = ({ newUser, setNewUser, submitUser }) => {
    return (
        <div className="RegistrationForm">
            <h1>New Patient Registration</h1>
            <form>
                <div className="input-field">
                    <label>Name:</label>
                    <input type="text" placeholder="Name" name="name" onChange={(event) => setNewUser({ ...newUser, name: event.target.value})} />
                </div>
                <div className="input-field">
                    <label>Date of Birth:</label>
                    <input type="text" placeholder="Date of Birth" name="dateOfBirth" onChange={(event) => setNewUser({ ...newUser, dateOfBirth: event.target.value})} />
                </div>
                <div className="input-field">
                    <label>Phone:</label>
                    <input type="text" placeholder="Phone Number" name="phone" onChange={(event) => setNewUser({ ...newUser, phone: event.target.value})} />
                </div>
                <div className="input-field">
                    <label>Email:</label>
                    <input type="text" placeholder="Email Address" name="email" onChange={(event) => setNewUser({ ...newUser, email: event.target.value})} />
                </div>
                <div className="input-field">
                    <label>Address:</label>
                    <input type="text" placeholder="Address" name="addressLine1" onChange={(event) => setNewUser({ ...newUser, addressLine1: event.target.value})} />
                </div>
                <div className="input-field">
                    <label>City:</label>
                    <input type="text" placeholder="City" name="city" onChange={(event) => setNewUser({ ...newUser, city: event.target.value})} />
                </div>
                <div className="input-field">
                    <label>State:</label>
                    <input type="text" placeholder="State" name="state" onChange={(event) => setNewUser({ ...newUser, state: event.target.value})} />
                </div>
                <div className="input-field">
                    <label>Zip Code:</label>
                    <input type="text" placeholder="Zip Code" name="zip" onChange={(event) => setNewUser({ ...newUser, zip: event.target.value})} />
                </div>
                <div className="input-field" />
                <div className="input-field" />
            </form>
            <button type="submit" className="submit-button" onClick={() => submitUser()}>Submit</button>
        </div>
    );
}

export default RegistrationForm;
