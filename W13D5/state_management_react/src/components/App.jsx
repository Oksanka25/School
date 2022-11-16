// IMPORT REACT
import React from "react";
// import Parent from "./Parent";
import Parent1 from "./Parent1";
import CheeseContext from '../contexts/CheeseContext';

// CREATE COMPONENT
const App = () => {
  return (
    <div>
      <h1> App</h1>
      {/* <Parent /> */}
      {/* <Parent1 /> */}
      <CheeseContext.Provider value="Cheese">
        <Parent1 />
      </CheeseContext.Provider>
    </div>
  );
};

// EXPORT COMPONENT
export default App;