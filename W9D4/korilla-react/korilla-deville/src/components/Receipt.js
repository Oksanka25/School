import React from 'react'

function Receipt(props) {
    return (
        <>
            <div className='receipt-container'>
                <h1> Receipt</h1>
                Name: {props.receipt.person}
                <br />
                Order: {props.receipt.order.main}
                <br />
                Protein: {props.receipt.order.protein}
                <br />
                Rice: {props.receipt.order.rice}
                <br />
                Sauce: {props.receipt.order.sauce}
                <br />
                Toppings: {props.receipt.order.toppings[0]} & {props.receipt.order.toppings[1]} & {props.receipt.order.toppings[2]}  <br />
                Drink: {props.receipt.order.drink}
                <br />
                Cost: ${props.receipt.order.cost}
                <br />
                Paid: {props.receipt.paid ? " Order is Paid" : "Order is NOT paid"}
                <br /> <br /> <br />
                {/* <div>
                    <button onClick={props.addToCart}> Add to Cart</button>
                </div> */}
            </div>
        </>
    )
}

export default Receipt