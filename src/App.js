import './App.css';
// import Chat from './Components/Chat';
import SignIn from './Components/SignIn';
import { auth } from './firebase';
import {useAuthState} from 'react-firebase-hooks/auth'
import Rooms from './Components/rooms';

function App() {
  const [user] = useAuthState(auth);
  return (
    <>
    {user ? <Rooms database="Database" /> : <SignIn /> }
    </>
  );
}

export default App;
