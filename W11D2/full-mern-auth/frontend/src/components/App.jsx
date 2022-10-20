import "./../App.css";

// IMPORT REACT
import React, { useState } from "react";

// ADDITIONAL IMPORTS
import { Routes, Route } from "react-router-dom";
import AuthPage from "../pages/AuthPage";
import NewOrderPage from "../pages/NewOrderPage";
import OrderHistoryPage from "../pages/OrderHistoryPage";
import Navbar from "./Navbar";

// CREATE COMPONENT
const App = () => {
  // Create a variable to hold the state of our component
  const [user, setUser] = useState(null);
  return (
    <main className="App">
      {user ? (
        <>
          <Navbar />
          <Routes>
            <Route path="/orders/new/:id" element={<NewOrderPage />} />
            <Route path="/orders" element={<OrderHistoryPage />} />
          </Routes>
        </>
      ) : (
        <AuthPage />
      )}
    </main>
  );
};

// EXPORT COMPONENT
export default App;
