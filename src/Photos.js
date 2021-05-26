import React from "react"

import "./Photos.css"

export default function Photos(props){
  if (props.photos) {
    return (
      <section className="Photos">
            <div className="row">
        {props.photos.map(function (photos, index){
          return (
            <div className="col-4" key={ index }>
            <a 
            href={photos.photographer_url}
            target="_blank"
            rel="noreferrer"
            >
            <img 
            src={photos.src.landscape} 
            className="img-fluid"
            alt="#" 
            />
            </a>
            </div>
          )
        })}
        </div>
      </section>
    )
  } else {
    return null
  }
}