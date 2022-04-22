import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import "./Dictionary.css";

export default function Dictionary(props) {
    const [keyword, setKeyword] = useState(props.defaultKeyword);
    const [result, setResult] = useState(null);
    const [loaded, setLoaded] = useState(false);

    function handleResponse(response) {
        setResult(response.data[0]);
    }

    function search(){
        let apiUrl =`https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
        axios.get(apiUrl).then(handleResponse);
    }

    function handleSubmit(event){
        event.preventDefault();
        search();

    }
    
    function handleKeyword(event){
        setKeyword(event.target.value);
    }
    function load() {
        setLoaded(true);
        search();
    }
    if (loaded) {
        return (
            <div className="Dictionary">
                <section id="form">
                    <h1>What word do you want to look up? </h1>
           <form onSubmit={handleSubmit}>
               <input 
               type="search"
               defaultValue={props.defaultKeyword}
               onChange={handleKeyword}
               />
           </form>
           <div className="hint">
               suggested words: sunset, walk, animal, forest, notebook...
           </div>
           </section>
           <Results results={result} />
            </div>
);
    }
    else {
        load();
        return "loading";
    }
}