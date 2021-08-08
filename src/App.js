import './App.css';
import Chat from './Components/Chat';
import SignIn from './Components/SignIn';
import { auth } from './firebase';
import {useAuthState} from 'react-firebase-hooks/auth'

function App() {
  const [user] = useAuthState(auth);
  return (
    <>
    {user ? <Chat /> : <SignIn /> }
    </>
  );
}

export default App;
