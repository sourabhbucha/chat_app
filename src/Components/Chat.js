import React, {useState, useEffect} from 'react'
import { db } from '../firebase';
import SentMessages from './SentMessages';


function Chat(props) {
    const [messages,setMessages] = useState([]);
    const [lim,setLim] = useState(props.lim);
    useEffect(()=>{
        setLim(props.lim)
    },[props.database])
    
    useEffect(() => {
            db.collection(props.database).orderBy('createdAt','desc').limit(lim).onSnapshot(snapshot => {
            setMessages(snapshot.docs.map(doc => doc.data()))
        })
    })
    function loadMore() {
        setLim(lim + 2);
        db.collection(props.database).orderBy('createdAt','desc').limit(lim).onSnapshot(snapshot => {
            setMessages(snapshot.docs.map(doc => doc.data()))
        })
    }
    return (
        <div>
            <button onClick={loadMore}>loadmore</button>
            {messages.reverse().map(({idx, text, photoURL, displayName , uid})=>(
                <div key={idx}>
                    <img src={photoURL} alt="" />
                    <h4>{displayName}</h4>
                    <p>{text}</p>
                </div>
            ))}
            <SentMessages database = {props.database} />
        </div>
    )
}

export default Chat
