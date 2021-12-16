import React from "react"
type props = {
    text:string;
}
export default function Text({text}:props) {
    return(
    <h1>{text}</h1>
    )
}