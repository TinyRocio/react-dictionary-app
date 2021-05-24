import React from "react"

export default function Phonetics(props){
  return (
    <div className="Phonetics">
      <span>
        <a href={props.phonetics.audio}
        target="_blank"
        rel="noreferrer">
        "Listen"
        </a>
        </span> 
        {" "}
      <span>
        {props.phonetics.text}
      </span>
    </div>
  )
}