import useAuth from '../hooks/useAuth';
import '../App.css'

const Users = ({ users }) => {
    const { submitLogout } = useAuth();
    return (
        <div className="Users">
            <h1 className="users-title">Users</h1>
            <div className="users-list">
                {users.map((user, index) => {
                    return (
                        <div key={index} className="user">
                            <p><span>Name: </span>{user.name}</p>
                            <p><span>Date of Birth: </span>{user.dateOfBirth}</p>
                            <p><span>Phone: </span>{user.phone}</p>
                            <p><span>Email: </span>{user.email}</p>
                            <div className="user-address">
                                <span>Address:</span>
                                <p>{user.addressLine1}</p>
                                <p>{user.addressLine2}</p>
                                <p>{user.city}, {user.state} {user.zip}</p>
                            </div>
                            <p><span>User ID: </span>{user.userId}</p>
                            <p><span>Date Created: </span>{user.registrationTime.slice(0, -29)}</p>
                            <span>Photo ID:</span><br />
                            <img className="selected-file" src={`https://patient-registration.s3.amazonaws.com/${user?.photoId}`} alt="selected file" />
                        </div>
                    );
                })}
            </div>
            <span className="register-link" onClick={submitLogout}>Logout</span>   
        </div>
    );
}

export default Users;
