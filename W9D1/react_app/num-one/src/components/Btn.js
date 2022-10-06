import React from "react";

export default function Btn(props) {
    return <button onClick={props.action}>{props.signs}</button>;
}