import React, { useState } from "react"

function MovieDisplay({ movie }) {
    const [cart, setCart] = useState([]);
    const addToCart = (movie) => {
        setCart([...cart, movie]);
    };
    const removeFromCart = (movie) => {
        let hardCopy = [...cart];
        hardCopy = hardCopy.filter((cartItem) => cartItem.imdbID
            !== movie.imdbID
        );
        setCart(hardCopy);
    };
    const cartItems = cart.map((movie) => (
        <div key={movie.imdbID}>
            {`${movie.Title}`}
            <br />
            <input type="submit" value="remove" onClick={() => removeFromCart(movie)} />
        </div>
    ));
    const loaded = () => {
        return (
            <>
                <div> ({cartItems.length})</div>
                <div>{cartItems}</div>
                <h1>{movie.Title}</h1>
                <h2>{movie.Genre}</h2>
                <img src={movie.Poster} alt={movie.Title} />
                <h2>{movie.Year}</h2>

                <input type="submit" value="add to Favorite" onClick={() => addToCart(movie)} />
            </>
        );
    };

    //function to return loading JSX
    const loading = () => {
        return <h1>No Movie to Display</h1>;
    };

    //Ternary operator will determine which functions JSX we will return
    return movie ? loaded() : loading();
};

export default MovieDisplay