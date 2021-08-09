import React, {useState, useEffect} from 'react';
import { db , auth } from '../firebase';
import Chat from './Chat';
import CreateRoom from './CreateRoom';


function Rooms(props) {

    const [databaseList,setDatabaseList] = useState([{"Room":"messages"}])
    const [database,setDatabase] = useState(databaseList)
    const [room,setRoom] = useState(databaseList[0]["Room"])
    const Database = () => {
            db.collection('Database').onSnapshot(snapshot => {
            setDatabaseList(snapshot.docs.map(doc => doc.data()));
            setDatabase(databaseList);
        })
    }
    useEffect(()=>{
    },[room])

    const {photoURL, email , displayName } = auth.currentUser
    const [keyword,setKeyword] = useState('');
    useEffect (() => {
        if(keyword.length > 0 ){ 
            setDatabase(databaseList.filter((data) =>  data.Room.toLowerCase().includes(keyword.toLowerCase())))
        }
        else{
        setDatabase(databaseList); 
        }
    },[keyword]);

    return (
        <>
        {/* {Database()} */}
        <div className="barleft">
            <img className="profilePic" src={photoURL} alt="" />
        </div>    
            {/* <h1>{displayName}</h1> */}
            {/* <h2>{email}</h2> */}
        <div className="left">    
            <h1>iChating</h1>
            <input type="text" placeholder="Search..." className="search" value = {keyword} onChange={(e) => setKeyword(e.target.value)}/>
            <h3>Rooms</h3>
            <button onClick={()=>Database()}> GetRooms</button>
            {database.map(data => (
                <button onClick={()=>setRoom(data["Room"])}>{data["Room"]} </button>
            ))}
        </div>    
            {/* <CreateRoom list = {databaseList}/> */}
            {/* {database.length > 0 ? <Chat database={database} /> : Database()} */}
        <div className="right">    
            <h1>{room}</h1>
            <Chat database={room} lim = {3}/>
        </div>    
            
        </>
    )
}

export default Rooms
