// IMPORT REACT
import React from "react";

// ADDITIONAL IMPORTS
import { Link } from "react-router-dom";

// CREATE COMPONENT
const Navbar = ({ user }) => {
  // console.log(user);
  return (
    <nav>
      <Link to="/orders">Order History</Link>
      &nbsp; | &nbsp;
      <Link to="/orders/new/:id">New Order</Link>
      <span style={{ paddingLeft: "10px" }}>Welcome {user.newUser.name}</span>
    </nav>
  );
};

// EXPORT COMPONENT
export default Navbar;
