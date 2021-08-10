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

    const [mode,setMode] = useState(true);

    useEffect(()=>{
        if(mode){
            document.body.style.setProperty("--bg", "#ffffff")
            document.body.style.setProperty("--bg", " #ffffff")
            document.body.style.setProperty("--sidebar", " #4849a1")
            document.body.style.setProperty("--left", " #f9f9fc")
            document.body.style.setProperty("--heading", " #31324e")
            document.body.style.setProperty("--search", " #ffffff")
            document.body.style.setProperty("--text-box", " #ffffff")
            document.body.style.setProperty("--search-text", " #63636d")
            document.body.style.setProperty("--text-light", " #b4b6cb")
            document.body.style.setProperty("--roomlist-txt", " #13145c")
            document.body.style.setProperty("--chat-self", " #f0f0f6")
            document.body.style.setProperty("--btn", " #6364af")
            document.body.style.setProperty("--base", "#000000")
        }
        else{
            document.body.style.setProperty("--bg" , " #1B1F22")
            document.body.style.setProperty("--sidebar" , " #6364AF")
            document.body.style.setProperty("--left" , " #363940")
            document.body.style.setProperty("--heading" , " #ffffff")
            document.body.style.setProperty("--search" , " #363940")
            document.body.style.setProperty("--text-box" , " #363940")
            document.body.style.setProperty("--search-text" , " #63636d")
            document.body.style.setProperty("--text-light" , " #b4b6cb")
            document.body.style.setProperty("--roomlist-txt" , " #ffffff")
            document.body.style.setProperty("--chat-self" , " #f0f0f6")
            document.body.style.setProperty("--btn" , " #7879D5")
            document.body.style.setProperty("--base" , "#ffffff") 
        }
    },[mode])

    return (
        <>
        {/* {Database()} */}
        <CreateRoom  list={databaseList}/>
        <div className="barleft">
            <img className="profilePic" src={photoURL} alt="" />
            <div className="bottom">
                <hr />
                <SignOut />
                <button className="darkmode"onClick={()=> setMode(!mode)} ><i class="fa fa-moon-o"></i></button>
            </div>
        </div>    
            {/* <h1>{displayName}</h1> */}
            {/* <h2>{email}</h2> */}
        <div className="left">  
            <div className="flex1">
            <h1>iChating</h1>
            </div>
            <input type="text" placeholder="Search..." className="search" value = {keyword} onChange={(e) => setKeyword(e.target.value)}/>
            <div className="flex">
                <h3>Rooms</h3>
                <button className="refreshRooms" onClick={()=>Database()}><i className="fa fa-refresh"></i></button>
                <button className="CrRoom" onClick={()=>document.getElementById("CRoom").style.display="flex"}><i class="fa fa-plus"></i></button>
            </div>
            <div className="roomslistbox">
                {database.map((data,idx) => (
                    <div className={activeRoom(data["Room"])} key={idx} onClick={()=>setRoom(data["Room"])}>
                        <div className="name" style={{backgroundColor: colour[Math.floor( Math.random() * (7) )] }}><h3>{data["Room"][0].toUpperCase()}</h3></div>
                        <h4>{data["Room"]} </h4>
                    </div>
                ))}
            </div>    
        </div>    
        <div className="right">    
            <h1>{room}</h1>
            <Chat database={room} lim = {20}/>
        </div>    
            
        </>
    )
}

export default Rooms
