import axios from "axios";
import React, {useState} from "react";
import Results from "./Results"

export default function Dictionary(){
  let [keyword ,setKeyword] = useState("")
  let [results, setResults] = useState(null)

  function search(event){
    event.preventDefault();

    // documention from https://dictionaryapi.dev/
    let apiUrl=`https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`
    axios.get(apiUrl).then(displayResponse)
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
    </div>
  )
}