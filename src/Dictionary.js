import axios from "axios";
import React, {useState} from "react";
import Results from "./Results"
import Photos from "./Photos"

import "./Dictionary.css"

export default function Dictionary(props){
  let [keyword ,setKeyword] = useState(props.defaultkeyword)
  let [results, setResults] = useState(null)
  let [photos, setPhotos] = useState(null)
  let [loaded, setLoaded] = useState(false)

  function search(){
    // documention from https://dictionaryapi.dev/
    let apiUrl=`https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`
    axios.get(apiUrl).then(displayResponse)

    // Photo's documention from "https://www.pexels.com/"
    let pexelsapiKey = "563492ad6f917000010000010847c1f8c3994beca0f45eccdb754114"
    let pexelsapiUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=9`
    let headers = {Authorization: `Bearer ${pexelsapiKey}`}
    axios.get(pexelsapiUrl, { headers : headers } ).then(displayPexelsResponse)
  }

  function submit(event){ 
    event.preventDefault()
    search()
  }
  
  function displayPexelsResponse(response){
    setPhotos(response.data.photos)
  }
  
  function handleKeywordChange(event){
    setKeyword(event.target.value)
  }
  
  function displayResponse(response){
    setResults(response.data[0])
  }
  
  function load(){
      setLoaded(true);
      search();
  }

  if (loaded) {
    return (
      <div className="Dictionary">
      <form onSubmit={submit}>
        <div className="row justify-content-md-center">
          <div className="col-8">
        <input 
        type="search" 
        onChange={handleKeywordChange}
        autoFocus={true}
        className="search btn btn-outline-secondary w-100"
        placeholder={keyword}
        />
        </div>
        <div className="col-3">
          <button
          type="submit" 
          className="submit btn btn-secondary w-100">
            <i className="fas fa-search"></i>
          </button>
            </div>
            </div>
      </form>
        <hr />
      <Results results={results}/>
      <Photos photos={photos} />
      </div>
    )
  } else {
    load();
    return null
  }
}
