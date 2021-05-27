import React from "react"
import "./Phonetics.css"

export default function Phonetics({phonetics}){
  const audio = new Audio(phonetics.audio);
  const playSound = (audioFile) => {
      audioFile.play();
    };

  return (
    <div className="Phonetics">
        <div className="callToPress">
          </div>
      <button
        className="btn btn"
        onClick={() => playSound(audio) }     >
        <i className="fas fa-play"></i> {phonetics.text}🔊
      </button>
  </div>
  )
}