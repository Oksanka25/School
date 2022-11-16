import React from 'react'
// props.value = {value} that comes from the Parents return
function ReceiverChild({ value }) {
    return (
        <div>
            {value}
        </div>
    )
}

export default ReceiverChild