import React from 'react'
import {Link} from 'react-router-dom'


export default function Navbar (){
    return(
        <div id="nav_btns">

            <Link to="/login">
            <button id="btns">Log in</button>
            </Link>

            <Link to="/userProfile">
            <button id="btns">User Profile</button>
            </Link>

            <Link to="/debits">
            <button id="btns">Debit information</button>
            </Link>

            <Link to="/credits">
            <button id="btns">Credit information</button>
            </Link>
        </div>
    )
}