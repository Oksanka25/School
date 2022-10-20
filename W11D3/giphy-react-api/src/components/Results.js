import React from 'react'

function Results(props) {
    // let mappingData = props.data.map((gif) => (
    //     <img src={gif.images.fixed_height_still.url} alt={gif.type} key={gif.id} />
    // ))
    let linkData = props.data.map((gif) => (
        <a href={gif.images.fixed_height.url}>
            <img src={gif.images.fixed_height.url} alt={gif.type} key={gif.id} />
        </a>

    ))


    return (
        <div className='d-flex flex-wrap justify-content-center mt-5'>
            {/* {mappingData} */}
            {linkData}
        </div>
    )
}

export default Results;
