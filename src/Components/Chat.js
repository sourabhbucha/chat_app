import React, {useState, useEffect} from 'react'
import { db } from '../firebase';
import SignOut from './SignOut'

function Chat() {
    const [messages,setMessages] = useState([]);
    useEffect(() => {
        db.collection('messages').orderBy('createdAt').limit(50).onSnapshot(snapshot => {
            setMessages(snapshot.docs.map(doc => doc.data()))
        })
    },[messages])
    return (
        <div>
            <SignOut />
            {messages.map(({id, text, photoURL})=>(
                <div key={id}>
                    <img src={photoURL} alt="" />
                    <p>{text}</p>
                </div>
            ))}
        </div>
    )
}

export default Chat
