import { useState } from 'react';
import './App.css';
import Receipts from './models/receipt';
import Receipt from './components/Receipt'
import Button from './components/Button'

function App() {

  const state = {
    receipt1: Receipts[0],
    receipt2: Receipts[1],
    receipt3: Receipts[2],
  }

  const [cart, setCart] = useState(0);

  let addToCart = () => {
    setCart(cart + 1);
  };
  let removeFromCart = () => {
    setCart(cart - 1);
  };

  return (
    <div className="App">
      <h1>
        Korilla Deville Korean barbecue
      </h1>
      <hr />
      <div className="cart">
        <h3>Cart: {cart}</h3>

      </div>
      <Receipt receipt={state.receipt1} />
      <Button title={"Add to Cart"} action={addToCart} />
      <Button title={"Remove from Cart"} action={removeFromCart} />
      <Receipt receipt={state.receipt2} />
      <Button title={"Add to Cart"} action={addToCart} />
      <Button title={"Remove from Cart"} action={removeFromCart} />
      <Receipt receipt={state.receipt3} />
      <Button title={"Add to Cart"} action={addToCart} />
      <Button title={"Remove from Cart"} action={removeFromCart} />


    </div>
  );
}

export default App;
