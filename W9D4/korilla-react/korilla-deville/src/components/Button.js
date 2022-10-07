import React from "react";

export default function Button(props) {
    return <button onClick={props.action}>{props.title}</button>;
}