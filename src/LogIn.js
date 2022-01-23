import React, { useState } from 'react'
import { Navigate, Link } from 'react-router-dom'
import Navbar from './Navbar'

export default function Login(props) {
  let [userInfo, setUserInfo] = useState({
    user : {
      username : "",
      password : "",
    },
    nav : false
  })


  const handleChange = (e) => {
    const updatedUser = userInfo.user
    const inputField = e.target.name
    const inputValue = e.target.value
    updatedUser[inputField] = inputValue
    setUserInfo(prevUserInfo => ({
        ...prevUserInfo,
        user : updatedUser
    }))
  }
  console.log(userInfo.nav)
  const handleSubmit = (e) => {
    e.preventDefault()
    props.mockLogin(userInfo.user)
    setUserInfo ({nav : true})
    console.log(userInfo)
  }


  if(userInfo.nav){
    return <Navigate to='/userProfile'/>
  }

  return (
    <div>
      <Link to="/">
            <button className="home-btn">Home</button>
          </Link>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="userName">User Name</label>
          <input type="text" name="username" onChange={handleChange} value={userInfo.user.username} />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input type="password" name="password" onChange={handleChange} value={userInfo.user.password} />
        </div>
        <button>Log In</button>
      </form>
    </div>
  )
  
}