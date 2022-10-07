import React, { useState, useEffect } from "react";
import items from "../models/items";

const Shop = () => {
    const [cart, setCart] = useState([]);
    const [cartTotal, setCartTotal] = useState(0);


    useEffect(() => {
        total();
    }, [cart]);

    const total = () => {
        let totalVal = 0;
        for (let i = 0; i < cart.length; i++) {
            totalVal += cart[i].price;
        }
        setCartTotal(totalVal);
    };

    const addToCart = (el) => {
        setCart([...cart, el]);
    };

    const removeFromCart = (el) => {
        let hardCopy = [...cart];
        hardCopy = hardCopy.filter((cartItem) => cartItem.id !== el.id);
        setCart(hardCopy);
    };

    const listItems = items.map((el) => (
        <div key={el.id}>
            {`${el.name}: $${el.price}`}
            <input type="submit" value="add" onClick={() => addToCart(el)} />
        </div>
    ));

    const cartItems = cart.map((el) => (
        <div key={el.id}>
            {`${el.name}: $${el.price}`}
            <br />
            <input type="submit" value="remove" onClick={() => removeFromCart(el)} />
        </div>
    ));

    return (
        <div>
            <h2>Devices</h2>
            <div className="list-items">{listItems}</div>
            <div className="cart-container">
                <h2>CART</h2>
                <div>{cartItems}</div>
                <div>
                    <h3>Total: ${cartTotal}</h3>
                </div>
            </div>
        </div>
    );
};

export default Shop;