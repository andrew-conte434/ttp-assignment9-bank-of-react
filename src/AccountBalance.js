import React, { Component } from "react";

export default function AppBalance(props) {

  return (
    <div className="balance">
          <h3>Account Balance: {props.balance}</h3>
        </div>
  );
}
