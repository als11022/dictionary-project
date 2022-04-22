import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import Photos from "./Photos";
import "./Dictionary.css";

export default function Dictionary(props) {
    const [keyword, setKeyword] = useState(props.defaultKeyword);
    const [result, setResult] = useState(null);
    const [loaded, setLoaded] = useState(false);
    const [photos, setPhotos] = useState(null);

    function handleResponse(response) {
        setResult(response.data[0]);
    }

    function handlePexelResponse(response){
        setPhotos(response.data.photos);
    }

    function search(){
        let apiUrl =`https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
        axios.get(apiUrl).then(handleResponse);

        let pexelApi = "563492ad6f917000010000010688575063564015be60e1eebd2f3ee8";
        let pexelApiUrl= `https://api.pexels.com/v1/search?query=${keyword}&per_page=9`;
        let headers= { Authorization: `Bearer ${pexelApi}` };
        axios.get(pexelApiUrl, { headers: headers }).then(handlePexelResponse);
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
               placeholder="enter a word"
               onChange={handleKeyword}
               />
           </form>
           <div className="hint">
               suggested words: sunset, watermelon, wave, forest, notebook...
           </div>
           </section>
           <Results results={result} />
           <Photos photos={photos} />
            </div>
);
    }
    else {
        load();
        return "loading";
    }
}