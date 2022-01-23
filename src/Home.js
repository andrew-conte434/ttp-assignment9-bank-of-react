import React, { Component } from "react";
import AccountBalance from "./AccountBalance";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";

export default function Home(props) {
  return (
    <body>
      <div id="home_page">
        <header>
          <img
            src="https://s14415.pcdn.co/wp-content/uploads/2018/04/Bank-header.png"
            alt="bank"
            id="header"
          />
        </header>
        <h1 id="bank_name">Bank of React</h1>
        <Navbar className="nav_btns" buttomName="btns" />
        {/* <Link to="/userProfile">User Profile</Link>
            <Link to="/debits">Debits</Link> */}
        <AccountBalance balance={props.balance} />
      </div>
    </body>
  );
}
