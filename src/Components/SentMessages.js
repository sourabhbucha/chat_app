import React, {useState} from 'react';
import {db, auth} from '../firebase'
import firebase from 'firebase';

function SentMessages(props) {
    const [msg,setMsg] = useState('')

    async function sendMessage(e) {
        if(msg !== ''){
        e.preventDefault()
        const {uid, photoURL, email , displayName } = auth.currentUser
        await 
            db.collection(props.database).add({
            text: msg,
            photoURL,
            uid,
            email,
            displayName,
            createdAt: firebase.firestore.FieldValue.serverTimestamp()
        })
        setMsg('')
    
    }
    }
    return (
        <div onSubmit={sendMessage}>
            <form>
                <input className="SendMsg" type="text" value={msg} placeholder="Message.." onChange={(e) => setMsg(e.target.value)} />
                <button className="SendMsgBtn" type="submit"><i class="fa fa-paper-plane"></i></button>
            </form>
        </div>
    )
}

export default SentMessages
