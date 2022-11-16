import React, { useState } from 'react'
import ReceiverChild from './ReceiverChild'
import SenderChild from './SenderChild'

function Parent() {
    const [state, setState] = useState("Hello")

    // Function to update state to send to child
    const updateState = (data) => {
        return setState(data)
    }
    return (
        <div>
            <ReceiverChild value={state} />
            <SenderChild update={updateState} />
        </div>
    )
}

export default Parent