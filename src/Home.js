import React, {Component} from 'react'
import AccountBalance from './AccountBalance'
import {Link} from 'react-router-dom'
import Navbar from './Navbar'


export default function Home(props) {
    return (
        <body>
        <div id="home_page">
            <img 
            src="https://static.wikia.nocookie.net/pm-universe/images/c/cd/Colored_Undertale_Sans_sprite.png" 
            alt="bank" 
            id="sans"
            />
            <h1 id="bank_name">Bank of React</h1>
            <Navbar />
            {/* <Link to="/userProfile">User Profile</Link>
            <Link to="/debits">Debits</Link> */}
            <AccountBalance balance = {props.balance}/>
        </div>
        </body>
    )
}

