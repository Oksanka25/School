import './App.css';
import { useState } from 'react'
import cardImages from './models/cardImage';
import symbols from './models/symbols';

import signs from './models/signs';

import Card from './components/Card'
import Button from './components/Button'

import Btn from './components/Btn'


function App() {

  const [count, setCount] = useState(0);
  const [currentPic, setCurrentPic] = useState(cardImages[count]);

  const changeCount = () => {
    console.log("CurrentCount:", count);
    //change the current count
    setCount(count + 1);
    //reassign image based on the counter
    setCurrentPic(cardImages[count])
  }
  const reverseCount = () => {
    console.log("CurrentCount:", count);
    //change the current count
    setCount(count - 1);
    //reassign image based on the counter
    setCurrentPic(cardImages[count])
  }



  const [myCount, setMyCount] = useState(0);

  let incrementCount = () => {
    setMyCount(myCount + 1);
  };

  let decrementCount = () => {
    setMyCount(myCount - 1);
  };



  return (
    <div className="app">

      <Card currentCount={count} images={cardImages[count]} />

      <Button picChange={reverseCount} symbols={symbols.left} />
      <Button picChange={changeCount} symbols={symbols.right} />


      <div>
        <div className="count">
          <h3>Count:</h3>
          <h1>{myCount}</h1>
        </div>
        <div className="buttons">
          <Btn title={"-"} signs={signs.minus} action={decrementCount} />
          <Btn title={"+"} signs={signs.plus} action={incrementCount} />
        </div>
      </div>





    </div>
  );
}

export default App;
