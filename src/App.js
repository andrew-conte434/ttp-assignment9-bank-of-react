import React, { Component, useState, useContext, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Home";
import "./App.css";
import UserProfile from "./UserProfile";
import LogIn from "./LogIn";
import Debits from "./Debits";
import AccountBalance from "./AccountBalance";
import Credits from "./Credits";


function App() {
  //Create states for balance, credits, debits, and user
  let [balance, setBalance] = useState(null);
  let [debits, setDebits] = useState([]);
  let [credits, setCredits] = useState([]);
  let [user, setUser] = useState({
    name: "bob loblaw",
    memberSince: "08/23/1999",
  });

  useEffect(() => {
    const fetchData = async () => {
      const debit = await fetch("https://moj-api.herokuapp.com/debits");
      const debitData = await debit.json();
      setDebits(debitData);

      const credit = await fetch("https://moj-api.herokuapp.com/credits");
      const creditData = await credit.json();
      setCredits(creditData);
    };
    fetchData();
  }, []);

  useEffect(() => {
    //console.log(debits);
  }, [debits]);

  useEffect(() => {
    //console.log(credits);
    totalUp();
  }, [credits]);

  //temp accountbalance function
  const totalUp = () => {
    let total = null;
    for (let i in credits) {
      total += credits[i].amount;
    }

    for (let i in debits) {
      total -= debits[i].amount;
    }
    total = Math.round(total * 100) / 100;
    setBalance(total);
  };

  useEffect(() => {
    //console.log(balance);
  }, [balance]);

  const mockLogin = (logInInfo) => {
      setUser( { ...user, name: logInInfo.username } )
  }  


  if (balance !== null) {
    return (
     
      <Router>
        <div>
          <Routes>
            <Route exact path="/" element={<Home balance={balance} />} />

            <Route
              exact
              path="/userProfile"
              element={
                <UserProfile
                  userName={user.name}
                  memberSince={user.memberSince}
                />
              }
            />

            <Route 
              exact 
              path="/debits" 
              element={<Debits 
                debits={debits} 
                balance = {balance}
                setDebits = {setDebits}
                />}
            />
            
            <Route
              exact
              path="/credits"
              element={<Credits 
                credit={credits}
                balance={balance}
                setCredits={setCredits}
                setBalance={setBalance}
                />}
            />
            
            <Route
              exact
              path="/login"
              element={
                <LogIn
                  user={user.currentUser}
                  mockLogin = {mockLogin}
                />
              }
            />
          </Routes>
        </div>
      </Router>
    
    );
  } else {
    return <div>Loading</div>;
  }
}

export default App;
