import React, {useState, useEffect} from 'react';
import { db } from '../firebase';
import Chat from './Chat';

function Rooms(props) {
    // const [data] = use
    const [database,setDatabase] = useState([{"Room":"messages"}])
    const [room,setRoom] = useState(database[0]["Room"])
    const Database = () => {
            db.collection('Database').limit(10).onSnapshot(snapshot => {
            setDatabase(snapshot.docs.map(doc => doc.data()))
        })
        // console.log(database.length);
        // setIsLoading(false);
    }
    useEffect(()=>{
    },[room])
    return (
        <>
        {/* {Database()} */}
            <button onClick={()=>Database()}> getDatabase</button>
            {database.map(data => (
                <button onClick={()=>setRoom(data["Room"])}>{data["Room"]} </button>
            ))}
            
            {/* {database.length > 0 ? <Chat database={database} /> : Database()} */}
            <Chat database={room} lim = {3}/>
            
        </>
    )
}

export default Rooms
