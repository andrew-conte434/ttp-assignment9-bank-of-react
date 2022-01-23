import React, { useState } from "react";
import { Link } from "react-router-dom";
import AccountBalance from "./AccountBalance";

export default function Credits(props) {
  let creditData = props.credit;
  const today = new Date()
  let [newCredit, setNewCredit] = useState({
    description: "",
    amount: 0,
    date : today.toISOString(),
  });

  const handleChange = (e) => {
    e.preventDefault();
    let updatedCredit = { ...newCredit };
    const fieldName = e.target.name;
    const fieldValue = e.target.value;

    updatedCredit[fieldName] = fieldValue;

    setNewCredit(updatedCredit);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newCredits = [...creditData, newCredit];
    props.setCredits(newCredits);
    props.setBalance((prev) => { return (prev + newCredit.amount)})
  };
  return (
      <div>
        <div>
          <div className="home-btn-div">
            <Link to="/">
              <button className="home-btn">Home</button>
            </Link>
          </div>
          <div className="statement_box">
            <h1 className="title">Credits</h1>
            {creditData.map((item) => {
              return (
                <div>
                  <div id="panel">
                    <div id="topPanel">
                      <h2>{item.description}</h2>
                      <p id="date_text">Date: {item.date}</p>
                    </div>
                    <p id="amount_text">Amount: ${item.amount}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="balance">
          <h3>Account Balance: {props.balance}</h3>
        </div>
        <div className="add-credit">
          <h3>Add Credit: </h3>
          <form onSubmit={handleSubmit}>
            <label htmlFor="amount">Amount: </label>
            <input
              type="text"
              name="amount"
              onChange={handleChange}
              value={newCredit.amount}
            />
            <label htmlFor="description">Description: </label>
            <input
              type="text"
              name="description"
              onChange={handleChange}
              value={newCredit.description}
            />
            <button type="submit">Add</button>
          </form>
        </div>
      </div>
  );
}
