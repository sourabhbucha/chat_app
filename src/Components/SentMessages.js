import React, {useState} from 'react';
import {db, auth} from '../firebase'
import firebase from 'firebase';

function SentMessages() {
    const [msg,setMsg] = useState('')

    async function sendMessage(e) {
        if(msg !== ''){
        e.preventDefault()
        const {uid, photoURL, email , displayName } = auth.currentUser
        await db.collection('messages').add({
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
                <input type="text" value={msg} placeholder="Message.." onChange={(e) => setMsg(e.target.value)} />
                <button type="submit">Send</button>
            </form>
        </div>
    )
}

export default SentMessages
