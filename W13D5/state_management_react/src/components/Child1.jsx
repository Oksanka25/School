import React from 'react'
import GrandChild1 from './GrandChild1'

function Child1({ cheese }) {
    console.log(cheese)
    return (
        <div> <GrandChild1 data={cheese} /> </div>

    )
}

export default Child1