import React from "react";
import Meaning from "./Meaning"
import Phonetics from "./Phonetics"
import "./Results.css"

export default function Reults(props){
  if (props.results){
    return (
      <div className="Results">
        <div className="row">
          <div className="col">
            <i className="fas fa-feather-alt"></i>
          </div>
          <div className="col">
      <h2>{props.results.word} </h2>
      {props.results.phonetics.map(function(phonetics, index){
        return (
          <div key="index">
            <Phonetics phonetics={phonetics}/>
          </div>
        )
      })}
      </div>
      <div className="col">
        <i className="fas fa-feather-alt"></i>
      </div>
      </div>
      <hr />
      {props.results.meanings.map(function
      (meaning, index){
        return (
          <section key={index}>
            <Meaning meaning={meaning}/>
          </section>
        )
      })}
    </div>
  )
} else {
  return null
}
}


          // <i class="fas fa-feather-alt"></i>