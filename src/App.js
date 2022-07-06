import { Routes, Route } from "react-router-dom";
import useRegistration from './hooks/useRegistration';
import { RegistrationForm, Login, Users } from './components';
import './App.css';

const App = () => {
  const { newUser, setNewUser, submitUser, deleteUser, users } = useRegistration()

  return (
    <div className="App">
        <Routes>
          <Route path="/" element={<RegistrationForm newUser={newUser} setNewUser={setNewUser} submitUser={submitUser}  />} />
          <Route path="login" element={<Login />} />
          <Route path="admin" element={<Users users={users} deleteUser={deleteUser} />} />
      </Routes>
    </div>
  );
}

export default App;
