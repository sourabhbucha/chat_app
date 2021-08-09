import React from 'react'
import { auth } from '../firebase'

function SignOut() {

    function refreshPage() {
        window.location.reload();
    }

    return (
        <div>
            <button className="SignOutBtn" 
            onClick={() => {
                auth.signOut();
                refreshPage();
            }}>
                <i class="fa fa-sign-out"></i>
            </button>
        </div>
    )
}

export default SignOut
