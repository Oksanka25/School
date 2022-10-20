import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router";

const Price = (props) => {
    // Our api key from coinapi.io
    const apiKey = process.env.REACT_APP_API_KEY;
    const params = useParams()
    console.log(` This is a ${params.symbol}`)
    // Grabbing the Currency symbol from the URL Param
    const symbol = params.symbol;
    // Using the other two variables to create our URL
    const url = `http://rest.coinapi.io/v1/exchangerate/${symbol}/USD?apikey=${apiKey}`;

    //state to hold the coin data
    const [coin, setCoin] = useState("null");


    //function to fetch coin data
    const getCoin = async () => {
        try {
            const response = await fetch(url);
            //   Our data should come back in a readable format - JSON
            const data = await response.json();
            //   console.log(data) // this shows all key values
            setCoin(data);
        } catch (e) {
            console.error(e)
        }
    };

    // useEffect to run getCoin when component mounts
    // Calls the getCoin and the [] says "Run useEffect on initial render of the price component
    useEffect(() => {
        getCoin();
    }, []);

    // loaded function for when data is fetched
    const loaded = () => {
        return (
            <div>
                <h1>The value of one {coin.asset_id_base} is ${coin.rate} in {coin.asset_id_quote}</h1>
            </div>
        );
    };

    // Function for when data doesn't exist
    const loading = () => {
        return <h1>Loading...</h1>;
    };

    // if coin has data, run the loaded function, otherwise, run loading
    return coin ? loaded() : loading();
};

export default Price;