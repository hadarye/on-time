
import { React, useEffect, useState, useRef, useContext, useImperativeHandle, forwardRef } from "react";
import './TimerCircle.styles.css';
import Wave from '../WaveSvg/WaveSvg.component';
import { DesignContext } from '../../contexts/design.context';
import pauseBtn from '../../media/images/pause_button.svg';
import playBtn from '../../media/images/play_button.svg';

const TimerCircle = forwardRef((props, ref) => {
    const { currentDesign } =  useContext(DesignContext);
    let isNext = useRef(false);
    const intervalRef = useRef(null);
    const waveRef = useRef();
    let hours = useRef(0);
    let minutes = useRef(0);
    let seconds = useRef(0);
    let counter = useRef(0);
    let totalParticipantInSeconds = useRef(0);
    let [isPaused, setIsPaused] = useState(false);
    let [timerString, setTimerString] = useState("00:00:00");

    // let waveAnimationStyle = useRef(animation: `waveDecline ${totalParticipantInSeconds}s forwards`);

    useEffect(() => {
        if (props.startTimer) {
            intervalRef.current = (setInterval(timerControl, 1000));
            calcTimerStyling();
        }
    }, [props.startTimer]);

    useEffect(() => {
        hours.current = Number(props.participantObj.hours) || 0;
        minutes.current = Number(props.participantObj.minutes) || 0;
        seconds.current = Number(props.participantObj.seconds) || 0;
        updateTimeString(props.participantObj.seconds || 0, props.participantObj.minutes || 0, props.participantObj.hours || 0);
        if(isNext.current) {
            nextParticipant();
        }
    }, [props.participantObj]);

    const nextParticipant = () => {
        isNext.current = false;
        intervalRef.current = (setInterval(timerControl, 1000));
        calcTimerStyling();
    }

    useImperativeHandle(ref, () => ({
        handleNavBtn() {
            isNext.current = true;
            clearInterval(intervalRef.current);
            intervalRef.current = null;
        }
    }));

    const timerControl = () => {
        if (seconds.current === 0) {
            if (minutes.current === 0) {
                if (hours.current === 0) {
                    clearInterval(intervalRef.current);
                    intervalRef.current = null;
                    props.timerEnded(true);  
                    isNext.current = true;
                }
                else {
                    hours.current = hours.current - 1;
                    minutes.current = 59;
                    seconds.current = 60;
                }
            } else {
                seconds.current += 60;
                minutes.current = minutes.current - 1;
            }
        }
        seconds.current = seconds.current - 1;
        updateTimeString(seconds.current, minutes.current, hours.current);
    }


    const updateTimeString = (sec, min, hour) => {
        if (sec.toString().length < 2) {
            if (min.toString().length < 2) {
                setTimerString(`0${hour}:0${min}:0${sec}`);
            } else {
                setTimerString(`0${hour}:${min}:0${sec}`);
            }
        } else {
            if (min.toString().length < 2) {
                setTimerString(`0${hour}:0${min}:${sec}`);
            } else {
                setTimerString(`0${hour}:${min}:${sec}`);
            }
        }
    };

    const calcTimerStyling = () => {
        let total;
        total = (hours.current * 60 + minutes.current) * 60 + seconds.current;
        totalParticipantInSeconds.current = total;
        counter.current = counter.current + 1;
        return(total);
    }

    const pauseTimer = () => {
        if(!isPaused) {
            clearInterval(intervalRef.current);
            intervalRef.current = null;
            setIsPaused(true);
        } else { 
            intervalRef.current = (setInterval(timerControl, 1000));
            setIsPaused(false);
        }
    }

    return (
        <>
            <div className="all-timer-container">
                <div className="TimerCircle">
                    <div className="timer-txt-container">
                        <div className="timer-txt">{timerString}</div>
                    </div>
                    {/* style={{animation: `waveDecline ${totalParticipantInSeconds}s forwards`}}  */}
                    <div className="circle-container">
                        <div key={counter.current} className={isPaused ? "ocean paused" : "ocean"} style={{animation: `waveDecline ${totalParticipantInSeconds.current}s ease-in`}} ref={waveRef}>
                            <div className='wave'>
                                <div className="wave-top">
                                    <Wave stroke="none" className="inner-wave"></Wave>
                                    <Wave stroke="none" className="inner-wave"></Wave>
                                </div>
                                <div className="wave-bg" style={{background: `${currentDesign["timer-end-hex"]}`}}></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="pause-btn" onClick={pauseTimer} style={ isPaused ? {backgroundImage: `url(${playBtn})`} : {backgroundImage: `url(${pauseBtn})`}}></div>
            </div>
        </>
    )

});

export default TimerCircle;