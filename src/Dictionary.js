import axios from "axios";
import React, {useState} from "react";

export default function Dictionary(){
  let [keyword ,setKeyword] = useState("")

  function search(event){
    event.preventDefault();
    alert(`Searching for ${keyword} .... `)
    let apiUrl=`https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`
    axios.get(apiUrl).then(displayResponse)
  }

  function handleKeywordChange(event){
    setKeyword(event.target.value)
  }

  function displayResponse(response){
    console.log(response.data[0])
  }

  return (
    <div className="Dictionary">
    <form onSubmit={search}>
      <input 
      type="search" 
      onChange={handleKeywordChange}
      />
    </form>
    </div>
  )
}