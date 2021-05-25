import React from "react"

export default function Photos(props){
  if (props.photos) {
    return (
      <section className="Photos">
        {props.photos.map(function (photos, index){
          return (
            <a 
            href={photos.photographer_url}
            target="_blank"
            rel="noreferrer">
            <img 
            src={photos.src.landscape} 
            key={index}
            alt="/" />
            </a>
          )
        })}
      </section>
    )
  } else {
    return null
  }
}