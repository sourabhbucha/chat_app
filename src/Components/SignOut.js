import React from 'react'
import { auth } from '../firebase'

function SignOut() {
    return (
        <div>
            <button className="SignOutBtn" onClick={() => auth.signOut()}>
                <i class="fa fa-sign-out"></i>
            </button>
        </div>
    )
}

export default SignOut
