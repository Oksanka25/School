import React, { useState } from 'react'
import Search from './Search';
import Results from './Results';
import axios from 'axios';

function SearchContainer() {
    const [searchState, setSearchState] = useState({ query: '', searchSubmitted: false, resultsList: [] });


    function handleSubmit(event) {
        event.preventDefault();
        getGiphy();
    }

    function handleInput(event) {
        setSearchState((previousSearchState) => ({
            ...previousSearchState,
            query: event.target.value
        }))
        event.preventDefault();
        // getGiphy();
    }
    function getGiphy() {
        axios.get('https://api.giphy.com/v1/gifs/search', {
            params: {
                q: searchState.query,
                api_key: process.env.REACT_APP_KEY,
                limit: 20
                // limit: 1
            }
        })
            .then(function (res) {
                setSearchState((previousState) => ({
                    ...previousState,
                    searchSubmitted: true,
                    resultsList: res.data.data
                }))
            })
            .catch(function (error) {
                console.log(error)
            })
    }

    return (
        <>
            <Search query={searchState.query}
                handleInput={handleInput}
                // getGiphy={getGiphy}
                handleSubmit={handleSubmit} />
            {searchState.searchSubmitted ? <Results data={searchState.resultsList} /> : <h3> </h3>}
        </>
    )
}



export default SearchContainer