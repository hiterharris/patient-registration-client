import '../App.css'

const RegistrationForm = ({ newUser, setNewUser, submitUser }) => {
    return (
        <div className="RegistrationForm">
            <form className="form" onSubmit={submitUser}>
                <input type="text" placeholder="Name" name="name" onChange={(event) => setNewUser({ ...newUser, name: event.target.value})} />
                <input type="text" placeholder="Date of Birth" name="dateOfBirth" onChange={(event) => setNewUser({ ...newUser, dateOfBirth: event.target.value})} />
                <input type="text" placeholder="Phone Numnber" name="phone" onChange={(event) => setNewUser({ ...newUser, phone: event.target.value})} />
                <input type="text" placeholder="Email Address" name="email" onChange={(event) => setNewUser({ ...newUser, email: event.target.value})} />
                <input type="text" placeholder="Address" name="addressLine1" onChange={(event) => setNewUser({ ...newUser, addressLine1: event.target.value})} />
                <input type="text" placeholder="City" name="city" onChange={(event) => setNewUser({ ...newUser, city: event.target.value})} />
                <input type="text" placeholder="State" name="state" onChange={(event) => setNewUser({ ...newUser, state: event.target.value})} />
                <input type="text" placeholder="Zip Code" name="zip" onChange={(event) => setNewUser({ ...newUser, zip: event.target.value})} />
                <input type="text" placeholder="Photo Id" name="photoId" onChange={(event) => setNewUser({ ...newUser, photoId: event.target.value})} />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default RegistrationForm;
