import { useState, useEffect } from 'react';
import useRegistration from './hooks/useRegistration';

import './App.css';

const App = () => {
  const [newUser, setNewUser] = useState({
    name: '',
    dateOfBirth: '',
    phone: '',
    email: '',
    photoId: ''
  });
  const { users, submitUser } = useRegistration();

  useEffect(() => {
    console.log('users: ', users);
  }, [users]);

  return (
    <div className="App">
      <div className="form">
          <input type="text" placeholder="Name" name="name" onChange={(event) => setNewUser({ ...newUser, name: event.target.value})} />
          <input type="text" placeholder="Date of Birth" name="dateOfBirth" onChange={(event) => setNewUser({ ...newUser, dateOfBirth: event.target.value})} />
          <input type="text" placeholder="Phone Numnber" name="phone" onChange={(event) => setNewUser({ ...newUser, phone: event.target.value})} />
          <input type="text" placeholder="Email Address" name="email" onChange={(event) => setNewUser({ ...newUser, email: event.target.value})} />
          <input type="text" placeholder="Photo Id" name="photoId" onChange={(event) => setNewUser({ ...newUser, photoId: event.target.value})} />
      </div>
      <button onClick={() => submitUser(newUser)}>Submit</button>
    </div>
  );
}

export default App;
