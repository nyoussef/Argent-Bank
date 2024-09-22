import React, { useState } from "react";
import AccountCard from "../../components/account-card/AccountCard";
import "./user.css";
import { useDispatch, useSelector } from "react-redux";
import { updateUsername } from "../../redux/action";

const User = () => {
  const { token, user, usernameLoading } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  

  const [isEditing, setIsEditing] = useState(false);
  const [newUsername, setNewUsername] = useState(user.userName);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateUsername(newUsername, token));
    setIsEditing(false);
  }
  const handleViewTransactions = (accountName) => {
    console.log(`Viewing transactions for ${accountName}`);
  };
  return (
    <div className="bg-dark">
      <div className="header">
        {isEditing ? (
          <form onSubmit={handleSubmit}>
            <h2>Edit user info</h2>
            <div>
              <label htmlFor="user-name">User Name :</label>
              <input id="user-name" name="userName" type="text" value={newUsername} onChange={(e) => setNewUsername(e.target.value)}></input>
            </div>
            <div>
              <label htmlFor="first-name">First Name :</label>
              <input id="first-name" name="firstName" type="text" value={user.firstName} disabled></input>
            </div>
            <div>
              <label htmlFor="last-name">Last Name :</label>
              <input id="last-name" name="lastName" type="text" value={user.lastName} disabled></input>
            </div>
            <button type="submit" disabled={usernameLoading}>{usernameLoading ? "Saving..." : "Save"}</button>
          </form>
        ) : (
          <>
            <h1 className={isEditing ? "display-none" : "display-flex"}>
              Welcome back
              <br />
              {user.firstName} {user.lastName} {user.userName} !
            </h1>
            <button className={`edit-button ${isEditing ? "display-none" : "display-flex"}`} onClick={() => setIsEditing(true)}>
              Edit Name
            </button>
          </>
        )}
      </div>
      <h2 className="sr-only">Accounts</h2>
      <AccountCard
        title="Argent Bank Checking (x8349)"
        amount="$2,082.79"
        amountDescription="Available Balance"
        onViewTransactions={() => handleViewTransactions("Checking")}
      />
      <AccountCard
        title="Argent Bank Savings (x6712)"
        amount="$10,928.42"
        amountDescription="Available Balance"
        onViewTransactions={() => handleViewTransactions("Savings")}
      />
      <AccountCard
        title="Argent Bank Credit Card (x8349)"
        amount="$184.30"
        amountDescription="Current Balance"
        onViewTransactions={() => handleViewTransactions("Credit Card")}
      />
    </div>
  );
};

export default User;
