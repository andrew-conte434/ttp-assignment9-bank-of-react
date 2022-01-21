import React, {Component} from 'react'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Home from './Home'
import './App.css';
import UserProfile from './UserProfile';
import LogIn from './LogIn';

class App extends Component{
  constructor() {
    super()

    this.state = {
      balance: 14000.98,
      currentUser: {
        userName: "bob_loblaw",
        memberSince: "8/13/99"
      }
    }
  }


  render() {
    
    return (
      <Router>
        <div>
          <Routes>
            <Route exact path="/" 
                   element={
                    <Home balance={this.state.balance}/>}/>
            <Route exact path="/userProfile" 
                   element={
                    <UserProfile userName = {this.state.currentUser.userName}
                                             memberSince = {this.state.currentUser.memberSince}/>}/>
            <Route exact path="/login" 
                   element={
                    <LogIn user = {this.state.currentUser}
                                  mockLogin = {this.mockLogin}
                                  {...this.props}/>}/>
          </Routes>
        </div>
      </Router>
    )
  }
}

export default App;
