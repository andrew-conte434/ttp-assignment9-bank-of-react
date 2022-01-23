import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";

export default function Debits(props) {
  let debitData = props.debits;
  let [newDebit, setNewDebit] = useState({
    description: "",
    amount: 0,
    date: new Date().toISOString(),
  });

  const handleChange = (e) => {
    e.preventDefault();
    let updatedDebit = { ...newDebit };
    const fieldName = e.target.name;
    const fieldValue = e.target.value;

    updatedDebit[fieldName] = fieldValue;

    setNewDebit(updatedDebit);
    console.log(newDebit);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newDebits = [...debitData, newDebit];
    props.setDebits(newDebits);
  };
  return (
    <body>
      <div>
        <div>
          <div className="home-btn-div">
            <Link to="/">
              <button className="home-btn">Home</button>
            </Link>
          </div>
          <div className="statement_box">
            <h1 className="title">Debits</h1>
            {debitData.map((item) => {
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
          <div className="balance">
            <h3>Account Balance: {props.balance}</h3>
          </div>
          <div className="add-debit">
          <h3>Add Debit: </h3>
          <form onSubmit={handleSubmit}>
            <label htmlFor="amount">Amount: </label>
            <input
              type="text"
              name="amount"
              onChange={handleChange}
              value={newDebit.amount}
            />
            <label htmlFor="description">Description: </label>
            <input
              type="text"
              name="description"
              onChange={handleChange}
              value={newDebit.description}
            />
            <button type="submit">Add</button>
          </form>
        </div>
        </div>
      </div>
    </body>
  );
}
