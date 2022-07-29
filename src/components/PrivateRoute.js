import React, { useEffect } from 'react';
import { Navigate, Link } from 'react-router-dom';
import { Users } from '../components';
import useAuth from '../hooks/useAuth';


const PrivateRoute = ({ users, deleteUser }) => {
    const { session } = useAuth();

    useEffect(() => {
        console.log('session: ', window.localStorage.getItem('session'));
    }, []);

    if (session) {
        return <Users users={users} deleteUser={deleteUser} />
    }

    if (!session) {
    return (
        <div className='access-denied'>
            <h1>Access Denied</h1>
            <Link className="login-link" to="/login">Login</Link>
        </div>
    )
    }

  return <Navigate to="/" />
}

export default PrivateRoute;
