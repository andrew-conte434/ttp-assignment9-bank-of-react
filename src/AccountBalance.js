import React, { Component } from "react";

export default function AppBalance(props) {
  console.log(props);
  return <h2 id="balance_bar">Balance: {props.balance}</h2>;
}
