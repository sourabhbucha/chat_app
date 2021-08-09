import React, {useState, useEffect} from 'react';
import { db , auth } from '../firebase';
import Chat from './Chat';
import CreateRoom from './CreateRoom';
import SignOut from './SignOut'


function Rooms(props) {

    const [databaseList,setDatabaseList] = useState([{"Room":"messages"}])
    const [database,setDatabase] = useState(databaseList)
    const [room,setRoom] = useState(databaseList[0]["Room"])
    const colour = ["#37A163","#7854A1","#41A4C9","#EB5211","#2C7DB2","#DE0077","#6C67AC"];
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

    const activeRoom = (NAME) => {
        if(room === NAME){
            return 'roomlist active'
        }
        else{
            return 'roomlist'
        }
    }

    return (
        <>
        {/* {Database()} */}
        <div className="barleft">
            <img className="profilePic" src={photoURL} alt="" />
            <div className="bottom">
                <hr />
                <SignOut />
                <button className="darkmode"><i class="fa fa-moon-o"></i></button>
            </div>
        </div>    
            {/* <h1>{displayName}</h1> */}
            {/* <h2>{email}</h2> */}
        <div className="left">    
            <h1>iChating</h1>
            <input type="text" placeholder="Search..." className="search" value = {keyword} onChange={(e) => setKeyword(e.target.value)}/>
            <div className="flex">
                <h3>Rooms</h3>
                <button className="refreshRooms" onClick={()=>Database()}><i className="fa fa-refresh"></i></button>
            </div>

            {database.map((data,idx) => (
                <div className={activeRoom(data["Room"])} key={idx} onClick={()=>setRoom(data["Room"])}>
                    <div className="name" style={{backgroundColor: colour[Math.floor( Math.random() * (7) )] }}><h3>{data["Room"][0].toUpperCase()}</h3></div>
                    <h4>{data["Room"]} </h4>
                </div>
            ))}
        </div>    
        <div className="right">    
            <h1>{room}</h1>
            <Chat database={room} lim = {20}/>
        </div>    
            
        </>
    )
}

export default Rooms
