import React, {useState,useEffect} from 'react';
import {db , auth} from '../firebase'
import firebase from 'firebase';

function CreateRoom(props) {
            const [room,setRoom] = useState('')

    async function createRoom(e) {
        if(room !== ''){
        e.preventDefault()
        const {uid, photoURL, email , displayName } = auth.currentUser
        await db.collection('Database').add({
            Room: room,
        })
        // e.preventDefault()
        db.collection(room).add({
            text: "Welcome to the room",
            photoURL,
            uid,
            email,
            displayName,
            createdAt: firebase.firestore.FieldValue.serverTimestamp()
        })
        setRoom('')
}
}

const [isAvalialbe,setIsAvailable] = useState(true)

useEffect(() => {
    if (room !== '' && !props.list.some(p => p["Room"] === room)){
        setIsAvailable(false);
    }
    else{
        setIsAvailable(true)
    }
}, [room])


    return (
        <div onSubmit={createRoom}>
            <form>
                <input type="text" value={room} placeholder="Create Room..." onChange={(e) => setRoom(e.target.value)} />
                <button type="submit" disabled={isAvalialbe}>Create</button>
            </form>
        </div>
    )
}

export default CreateRoom
