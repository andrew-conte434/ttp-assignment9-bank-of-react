import React, {Component} from 'react'
import AccountBalance from './AccountBalance'
import {Link} from 'react-router-dom'

class Home extends Component {
    render() {
        return (
            <div>
                <img src="https://static.wikia.nocookie.net/pm-universe/images/c/cd/Colored_Undertale_Sans_sprite.png" alt="bank"/>
                <h1>Bank of React</h1>

                <Link to="/userProfile">User Profile</Link>

                <AccountBalance balance = {this.props.balance}/>
            </div>
        )
    }
}

export default Home