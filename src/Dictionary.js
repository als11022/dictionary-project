import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import "./Dictionary.css";

export default function Dictionary() {
    const [keyword, setKeyword] = useState("");
    const [result, setResult] = useState(null);

    function handleResponse(response) {
        setResult(response.data[0]);
    }

    function search(event){
        event.preventDefault();

        let apiUrl =`https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
        axios.get(apiUrl).then(handleResponse);
    }

    
    function handleKeyword(event){
        setKeyword(event.target.value);
    }
    return (
        <div className="Dictionary">
           <form onSubmit={search}>
               <input 
               type="search"
               placeholder="enter a word"
               onChange={handleKeyword}
               />
           </form>
           <Results results={result} />
            </div>
    );
}