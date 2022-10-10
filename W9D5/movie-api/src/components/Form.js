import { useState, useEffect } from "react";
import React from 'react'

function Form(props) {
    //State to hold the data of our form
    const [formData, setFormData] = useState({
        searchTerm: "",
    });

    //handleChange - updates formData when we type into form
    const handleChange = (event) => {
        //use the event object to detect key and value to update
        setFormData({ ...formData, [event.target.name]: event.target.value });
        // ...formData - spread operator
    };

    const handleSubmit = (event) => {
        //prevent page from refreshing on form submission
        event.preventDefault();
        //pass the search term to movieSearch prop, which is apps getMovie function
        props.movieSearch(formData.searchTerm);
    };

    //The component must return some JSX
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="searchTerm"
                    onChange={handleChange}
                    value={formData.searchTerm}
                />
                <input type="submit" value="submit" />
            </form>
        </div>
    );
}

export default Form