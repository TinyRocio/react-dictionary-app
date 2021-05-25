import axios from "axios";
import React, {useState} from "react";
import Results from "./Results"
import Photos from "./Photos"

export default function Dictionary(){
  let [keyword ,setKeyword] = useState(" ")
  let [results, setResults] = useState(null)
  let [photos, setPhotos] = useState(null)

  function search(event){
    event.preventDefault();

    // documention from https://dictionaryapi.dev/
    let apiUrl=`https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`
    axios.get(apiUrl).then(displayResponse)

    // Photo's documention from "https://www.pexels.com/"
    let pexelsapiKey = "563492ad6f917000010000010847c1f8c3994beca0f45eccdb754114"
    let pexelsapiUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=6`
    let headers = {Authorization: `Bearer ${pexelsapiKey}`}
    axios.get(pexelsapiUrl, { headers : headers } ).then(displayPexelsResponse)
  }

  function displayPexelsResponse(response){
    console.log(response.data.photos)
    setPhotos(response.data.photos)
  }

  function handleKeywordChange(event){
    setKeyword(event.target.value)
  }

  function displayResponse(response){
    setResults(response.data[0])
  }

  return (
    <div className="Dictionary">
    <form onSubmit={search}>
      <input 
      type="search" 
      onChange={handleKeywordChange}
      autoFocus={true}
      />
    </form>
    <Results results={results}/>
    <Photos photos={photos} />
    </div>
  )
}
