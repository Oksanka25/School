import React, { useContext, useReducer } from 'react'
import Child1 from './Child1'
// import CheeseContext from '../contexts/CheeseContext'
import CounterContext from '../contexts/CounterContext'

function Parent1() {
    //2 Context hook
    // const context = useContext(CheeseContext)
    // console.log(context)

    // 3 Reducer Hook 
    // create reducer func
    const reducer = (state, action) => {
        switch (action.type) {
            // determine how to update the state based on action type
            case "add":
                return state + 1
            case "subtract":
                return state - 1
            default:
                // if it doesn't match any type, keep the state as is
                return state
        }
    }
    // define the initial value of the state 
    // this is what exported to the grandchild as context.state
    const initialState = 0

    // Initialize the hook
    // create the state and the dispatch function
    const [state, dispatch] = useReducer(reducer, initialState)

    return (
        // 1 
        // <div> <Child1 cheese="gouda" /> </div>
        // <div>
        //     <Child1  />
        // </div>
        //2 Context hook
        // <CheeseContext.Provider value="Gouda Cheese">
        //     <Child1 />
        // </CheeseContext.Provider>

        // 3 Reducer Hook
        <CounterContext.Provider value={{ state, dispatch }}>
            <Child1 />
        </CounterContext.Provider>

    )
}

export default Parent1