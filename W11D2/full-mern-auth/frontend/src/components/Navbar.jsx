// IMPORT REACT
import React from "react";

// ADDITIONAL IMPORTS
import { Link } from "react-router-dom";

// CREATE COMPONENT
const Navbar = () => {
  return (
    <nav>
      <Link to="/orders">Order History</Link>
      &nbsp; | &nbsp;
      <Link to="/orders/new/:id">New Order</Link>
    </nav>
  );
};

// EXPORT COMPONENT
export default Navbar;
