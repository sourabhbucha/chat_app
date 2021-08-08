import React from 'react'
import { auth } from '../firebase'

function SignOut() {
    return (
        <div>
            <button onClick={() => auth.signOut()}>
                SignOut
            </button>
        </div>
    )
}

export default SignOut
