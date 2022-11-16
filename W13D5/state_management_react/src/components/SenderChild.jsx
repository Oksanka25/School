import React from 'react'
// props.update is the same(=) {update} that comes from the Parent
function SenderChild({ update }) {
    return (
        <div>
            <button onClick={() => update("Goodbye")}>Click Me</button>
        </div>
    )
}

export default SenderChild