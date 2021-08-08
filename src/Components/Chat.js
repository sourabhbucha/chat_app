import React, {useState, useEffect} from 'react'
import { db } from '../firebase';
import SentMessages from './SentMessages';
import SignOut from './SignOut'

function Chat() {
    const [messages,setMessages] = useState([]);
    const [lim,setLim] = useState(2);
    useEffect(() => {
        db.collection('messages').orderBy('createdAt','desc').limit(lim).onSnapshot(snapshot => {
            setMessages(snapshot.docs.map(doc => doc.data()))
        })
    },[lim])
    function loadMore() {
        setLim(lim + 2);
        console.log(lim);
        db.collection('messages').orderBy('createdAt','desc').limit(lim).onSnapshot(snapshot => {
            setMessages(snapshot.docs.map(doc => doc.data()))
        })
    }
    return (
        <div>
            <SignOut />
            <button onClick={loadMore}>loadmore</button>
            {messages.reverse().map(({id, text, photoURL, displayName , uid})=>(
                <div key={id}>
                    <img src={photoURL} alt="" />
                    <h4>{displayName}</h4>
                    <p>{text}</p>
                </div>
            ))}
            <SentMessages />
        </div>
    )
}

export default Chat
