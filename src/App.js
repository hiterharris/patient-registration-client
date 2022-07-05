import useRegistration from './hooks/useRegistration';
import { RegistrationForm, Users } from './components';

import './App.css';

const App = () => {
  const { newUser, setNewUser, submitUser, deleteUser, users } = useRegistration()

  return (
    <div className="App">
        <RegistrationForm newUser={newUser} setNewUser={setNewUser} submitUser={submitUser}  />
        <Users users={users} deleteUser={deleteUser} />
    </div>
  );
}

export default App;
