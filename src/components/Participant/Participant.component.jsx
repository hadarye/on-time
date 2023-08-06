import React from "react";

import { useState, useEffect, useRef, useImperativeHandle, forwardRef } from "react";
import './Participant.styles.css';
import timeBg from "../../media/images/clock_BG.svg";
import whiteBg from "../../media/images/white_BG.svg";

const Participant = forwardRef((props, ref) => {
    const [hoursInputValue, setHoursInputValue] = useState("00");
    const [minutesInputValue, setMinutesInputValue] = useState("00");
    const [secondsInputValue, setSecondsInputValue] = useState("00");
    let isSecMistakeRef = useRef(false);
    let isMinMistakeRef = useRef(false);
    let isHourMistakeRef = useRef(false);
    let warningRef = useRef();

    const handleChangeInput = (e) => {
        // console.log(e.target.value);
        // if (Number(e.target.value) > 59) {
        //     console.log("mistake");
        // } else if (e.target.value.validity.valid) {
        //     console.log("mistake2");
        // }
    }
    // useEffect(() => {
    //     if(hoursInputValue.ValidityState.patternMismatch) {
    //         console.log("in");
    //     }
    //     if (Number(hoursInputValue) > 9){
    //         setHoursInputValue("00");
    //     } else if (isNaN(hoursInputValue) || Number(hoursInputValue) < 0) {
    //         isHourMistakeRef.current = true;
    //     } else {
    //         isHourMistakeRef.current = false;
    //     }
    // }, [hoursInputValue]);

    // useEffect(() => {
    //     if (Number(minutesInputValue) > 59){
    //         setMinutesInputValue("00");
    //     } else if (isNaN(minutesInputValue) || Number(minutesInputValue) < 0) {
    //         isMinMistakeRef.current = true;
    //     } else {
    //         isMinMistakeRef.current = false;
    //     }
    // }, [minutesInputValue]);

    // useEffect(() => {
    //     if (Number(secondsInputValue) > 59){
    //         setSecondsInputValue("00");
    //     } else if (isNaN(secondsInputValue) || Number(secondsInputValue) < 0) {
    //         isSecMistakeRef.current = true;
    //     } else {
    //         isSecMistakeRef.current = false;
    //     }
    // }, [secondsInputValue]);

    useImperativeHandle(ref, () => ({
        checkForMistake() {
            console.log("hours " + isHourMistakeRef.current + " " + hoursInputValue + " min " + isMinMistakeRef.current + " " + minutesInputValue + " sec " + isSecMistakeRef.current + " " + secondsInputValue);
            if(!isHourMistakeRef.current && !isMinMistakeRef.current && !isSecMistakeRef.current) {
                console.log("no mistake");
            } else {
                console.log("mistake");
            }
        } 
    }));

    const handleInvalidInput = () => {
        console.log("in");
        // warningRef.current.style.opacity = "1";
    }
    
    return (
        <div className="participant">
            <div className="form-container" style={{ backgroundImage: `url("${whiteBg}")` }}>
                <div className="remove-participant" onClick={() => { props.HandleDeleteBtn(props.list) }}></div>
                <div className="right-inputs-container">
                    <div className="top-inputs-container">
                        <span className="input-arrange">
                            <h3 className="input-title">שם המציג:</h3>
                            <input className="participant-name input" id="name" placeholder="הקלד את שם המציג" value={props.name || ""} onChange={(event) => { props.handleChange(event) }}></input>
                        </span>
                        <span className="input-arrange">
                            <h3 className="input-title">תפקיד/ תואר:</h3>
                            <input className="participant-job input" id="job" placeholder="הקלד את תחום עיסוק המציג" value={props.job || ""} onChange={(event) => { props.handleChange(event) }}></input>
                        </span>
                    </div>
                    <span className="input-arrange-topic">
                        <h3 className="input-title">נושא:</h3>
                        <input className="participant-topic" id="topic" placeholder="הקלד את נושא ההצגה" value={props.topic || ""} onChange={(event) => { props.handleChange(event) }}></input>
                    </span>
                </div>
                <span className="input-arrange-time">
                    <h3 className="input-title">הזן זמן:</h3>
                    <div className="timer-container" style={{ backgroundImage: `url("${timeBg}")` }}>
                        <input type="text" pattern="[0-9]*" className="timer-single-input" onChange={(e) => { setHoursInputValue(e.target.value); props.handleChange(e); handleChangeInput(e);}} maxLength="1" max="9" min="0" id="hours" value={hoursInputValue}></input>:
                        {/* <div className="warning-icon" id="warning" ref={warningRef}></div> */}
                        <input type="text" pattern="[0-9]*" onInvalid={handleInvalidInput} className="timer-single-input" id="minutes" onChange={(e) => { setMinutesInputValue(e.target.value); props.handleChange(e); handleChangeInput(e);}} maxLength="2" max="59" min="0" value={minutesInputValue}></input>:
                        <input type="text" pattern="[0-9]*" onInvalid={handleInvalidInput} className="timer-single-input" id="seconds" onChange={(e) => {setSecondsInputValue(e.target.value); props.handleChange(e); handleChangeInput(e);}} maxLength="2" max="59" min="0" value={secondsInputValue}></input>
                    </div>
                    
                </span>
                
            </div>

        </div>
    )
        
});
// onChange={(event) => { props.handleChange(event) }}
export default Participant;