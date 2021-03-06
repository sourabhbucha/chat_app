import React, {useState, useEffect} from 'react'
import { db, auth } from '../firebase';
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
    
    const ChatUser = (emailid) =>{
        const {email} = auth.currentUser
        if(emailid === email){
            return 'self'
        }
        else{
            return 'other'
        }
    }

    return (
        <div className="ChatArea">
            <button className="LoadMore" onClick={loadMore}><i class="fa fa-spinner" aria-hidden="true"></i> Load More</button>
            {messages.reverse().map(({idx, text, photoURL, displayName, email})=>(
                <div className= {ChatUser(email)} key={idx}>
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
