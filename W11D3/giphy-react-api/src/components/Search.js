import React from 'react'

function Search(props) {
    return (
        <div className='d-flex justify-content-center'>
            <form onSubmit={props.handleSubmit} >
                <input className='form-control mb-3' onInput={props.handleInput} name='search' type='text' value={props.query} onKeyUp={props.getGiphy} />
                <button className='search-btn'> Search </button>
            </form>
        </div>
    )
}

export default Search;