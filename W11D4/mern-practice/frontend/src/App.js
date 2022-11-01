import "./App.css";

// IMPORT REACT
import React, { useState } from "react";

// ADDITIONAL IMPORTS
import { Routes, Route } from "react-router-dom";
import AuthPage from "./pages/AuthPage";
import Navbar from "./components/Navbar";
import ProductsListPage from "./pages/ProductsListPage";
import { getUser } from "./utilities/users-service"

// CREATE COMPONENT
const App = () => {
  // Create a variable to hold the state of our component
  const [user, setUser] = useState(getUser());
  // console.log(user);
  return (
    <main className="App">
      {user ? (
        <>
          <Navbar user={user} />
          <Routes>
            <Route path="/products" element={<ProductsListPage />} />
          </Routes>
        </>
      ) : (
        <AuthPage setUser={setUser} />
      )}
    </main>
  );
};

// EXPORT COMPONENT
export default App;

