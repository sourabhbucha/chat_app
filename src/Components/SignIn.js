import React from 'react';
import firebase from 'firebase';
import { auth} from '../firebase';

function SignIn() {
// const [messages,setMessages] = useState([]);


    function signInWithGoogle(){
        const provider = new firebase.auth.GoogleAuthProvider()
        auth.signInWithPopup(provider)
    }

    return (
        <div className="SignIn">
            <button onClick={signInWithGoogle}>Sign In With Google</button>
            {/* <a href="" onClick={signInWithGoogle}>Sign In With Google<</a> */}
        </div>
    )
}

export default SignIn
