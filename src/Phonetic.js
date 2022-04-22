import React from "react";
import "./Phonetic.css";
import ReactAudioPlayer from "react-audio-player";

export default function Phonetic(props) {
    if (props.phonetic && props.phonetic.audio)
    return (
        <div className="Phonetic">
            <span className="text">{props.phonetic.text}</span>
            <span className="audio"><ReactAudioPlayer src={props.phonetic.audio} controls /></span>
        </div>
    );
}