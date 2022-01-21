import React, {Component} from 'react'

class AccountBalance extends Component {
    render() {
        return (
            <div>
                Balance: {this.props.balance}
            </div>
        )
    }
}

export default AccountBalance