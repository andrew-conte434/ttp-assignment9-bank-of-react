import React, { Component } from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";

class UserProfile extends Component {
  render() {
    return (
      <div>
        <img
          src="https://64.media.tumblr.com/27b289ab512310f2841b5a645be7b480/tumblr_pdng0ditTJ1ubr8pfo3_400.gifv"
          alt="scrooge_McDuck"
          className="profile_picture"
        />
        <div className="user-info">
          <h1>User Profile</h1>
          <div>
            <strong>Username: </strong>
            {this.props.userName}
          </div>
          <div>
            <strong>Member Since: </strong>
            {this.props.memberSince}
          </div>
          <Link to="/">
            <button className="home-btn">Home</button>
          </Link>
        </div>
      </div>
    );
  }
}

export default UserProfile;
