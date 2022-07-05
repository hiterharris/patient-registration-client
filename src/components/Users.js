import '../App.css'

const Users = ({ users }) => {
    return (
        <div className="Users">
            <h1 className="users-title">Users</h1>
            <div className="users-list">
                {users.map((user, index) => {
                    return (
                        <div key={index} className="user">
                            <p>{user.name}</p>
                            <p>{user.dateOfBirth}</p>
                            <p>{user.phone}</p>
                            <p>{user.email}</p>
                            <p>{user.addressLine1}</p>
                            <p>{user.addressLine2}</p>
                            <p>{user.cit}</p>
                            <p>{user.state}</p>
                            <p>{user.zip}</p>
                            <p>{user.addressLine2}</p>
                            <p>{user.userId}</p>
                            <p>{user.registrationTime}</p>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default Users;
