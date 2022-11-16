import React, { useContext } from 'react'
// import CheeseContext from '../contexts/CheeseContext';
import CounterContext from '../contexts/CounterContext'

function GrandChild1({ data }) {
    // console.log(data);
    // const context = useContext(CheeseContext)
    // console.log(context);
    const context = useContext(CounterContext)
    console.log(context);
    return (
        <div>GrandChild :
            {/* {data} */}
            <h2> {context.state} </h2>
            // type has to exactly match the naming in a reducer function of Parent
            <button onClick={() => {
                return context.dispatch({ type: 'subtract' })
            }}> Subtract </button>
            <button onClick={() => {
                return context.dispatch({ type: 'add' })
            }}> Add</button>
        </div>
    )
}

export default GrandChild1