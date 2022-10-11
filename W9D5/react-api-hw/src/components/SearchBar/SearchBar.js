import React from 'react';
import { useState } from "react";
import "./SearchBar.css"

const SearchBar = ({ onQuerySubmit }) => {
  const [query, setQuery] = useState('');

  const handleSearchChange = (e) => {
    setQuery(e.target.value)
  }

  const onFormSubmit = (e) => {
    e.preventDefault();

    onQuerySubmit(query);
  }

  return (
    <>
      <div className="container searchBar-container">
        <form onSubmit={onFormSubmit} className="search-form">
          <label htmlFor="query" className="is-hidden">Video Search</label>
          <input
            className="search-form-input"
            type="text"
            name="query"
            placeholder="Search for..."
            value={query}
            onChange={handleSearchChange}
          />
          <button className="btn btn-primary">Search</button>
        </form>
      </div>
    </>
  )
}

export default SearchBar;