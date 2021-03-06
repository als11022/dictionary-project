import React from "react";
import "./Meaning.css";
import Synonyms from "./Synonyms";

export default function Meaning(props){
    return (
        <div className= "Meaning">
<h3>{props.meaning.partOfSpeech}</h3>
{props.meaning.definitions.map(function(definition, index){
    if (index<4){
return (
    <div key={index} className="index">
        <div className="definition">
    {definition.definition}
    </div>
    <div className="example">
    {definition.example}
    </div>
    <Synonyms synonyms={definition.synonyms} />
    <hr />
    </div>
);
    }
    else {
        return null;
    }
})}
        </div>
    );

}