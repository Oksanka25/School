import React from 'react'

export default function Card(props) {
    return (
        <>
            <h1>
                Current Pic
            </h1>
            <img src={props.images} alt="cities" />


        </>
    )
}
