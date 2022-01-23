import React from "react";
import { Link } from "react-router-dom";

export default function Navbar(props) {
  return (
    <div className={props.className}>
      <Link to="/login">
        <button className={props.buttomName}>Log in</button>
      </Link>

      <Link to="/userProfile">
        <button className={props.buttomName}>User Profile</button>
      </Link>

      <Link to="/debits">
        <button className={props.buttomName}>Debit information</button>
      </Link>

      <Link to="/credits">
        <button className={props.buttomName}>Credit information</button>
      </Link>
    </div>
  );
}
