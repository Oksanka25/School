import { useState } from 'react';
import './App.css';
import Receipts from './models/receipt';
import Receipt from './components/Receipt'

function App() {

  const state = {
    receipt1: Receipts[0],
    receipt2: Receipts[1],
    receipt3: Receipts[2],
  }
  return (
    <div className="App">
      <h1>
        Korilla Deville Korean barbecue
      </h1>
      <hr />
      <Receipt receipt={state.receipt1} />
      <Receipt receipt={state.receipt2} />
      <Receipt receipt={state.receipt3} />

      {/* <Receipt receiptTwo={receipt2} />
      <Receipt receiptThree={receipt3} /> */}
    </div>
  );
}

export default App;
