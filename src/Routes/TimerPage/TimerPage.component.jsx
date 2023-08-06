import { React, useEffect, useState, useRef, useContext } from 'react';
import './TimerPage.styles.css'
import TimerCircle from '../../components/TimerCircle/TimerCircle.component';
import StartMeeting from '../../components/StartMeeting/StartMeeting.component';
import ParticipantInfoTimer from '../../components/ParticipantInfoTimer/ParticipantInfoTimer.component';
import { useNavigate } from 'react-router-dom';
import { CounterContext } from '../../contexts/counter.context';
import { TimerContext } from '../../contexts/timer.context';

const TimerPage = (props) => {
    const { currTimerObj } = useContext(TimerContext);
    const { setCurrCounter } = useContext(CounterContext);
    const childRef = useRef(null);
    const navigate = useNavigate();
    let [isStarting, setIsStarting] = useState(false);
    const timerRef = useRef();
    const participantCounter = useRef(0);
    const [participantArr, setParticipantArr] = useState([{}]);
    const [participantObj, setParticipantObj] = useState({});

    const handlePrevBtn = () => {
        if (isStarting) {
            setIsStarting(false);
        } else {
            setParticipantObj(participantArr[0]);
            setIsStarting(false);
            setCurrCounter("participants");
            // navigate("/participants");
        }
    }

    useEffect(() => {
        setParticipantArr([...currTimerObj]);
        // setParticipantArr([...JSON.parse(sessionStorage.finalParticipantArray)]);
    }, [currTimerObj]);

    useEffect(() => {
        setParticipantObj(participantArr[participantCounter.current]);
    }, [participantArr]);

    const handleStartBtn = () => {
        setIsStarting(true);
    }

    // sets the curr object as the next one
    const timerEnded = (isEnded) => {
        if (isEnded && participantCounter.current < props.infoParticipantArr.length - 1) {
            setParticipantObj(participantArr[participantCounter.current + 1]);
            participantCounter.current = participantCounter.current + 1;
        } else {
            setCurrCounter("final");
        }
    }

    const handleParticipantChange = (type) => {
        if (type === "next") {
            if (participantCounter.current < props.infoParticipantArr.length - 1) {
                setParticipantObj(participantArr[participantCounter.current + 1]);
                participantCounter.current = participantCounter.current + 1;
            } else {
                setCurrCounter("final");
            }
        } else if (type === "prev") {
            if (participantCounter.current > 0) {
                setParticipantObj(participantArr[participantCounter.current - 1]);
                participantCounter.current = participantCounter.current - 1;
            }
        }
        childRef.current.handleNavBtn();
    }

    return (
        <div className={`timer-page ${props.class}`}>
            {isStarting ? null : <div className='start-question-page'>
                <StartMeeting></StartMeeting>
            </div>}
            {isStarting ? null : <div className='next-btn-container'>
                <p></p>
                <button className='next-btn' onClick={handleStartBtn}>התחל פגישה</button>
            </div>}

            {isStarting ? <div className='next-btn-container'>
                <p></p>
                <button className='next-btn' onClick={() => handleParticipantChange("next")}>{participantCounter.current < props.infoParticipantArr.length - 1 ? `משתתף הבא` : `סיום הפגישה`}</button>
            </div> 
            : null }
            {isStarting && participantCounter.current > 0 ? <div className='back-btn-container'>
                <p></p>
                <button className='next-btn' onClick={() => handleParticipantChange("prev")}>משתתף קודם</button>
            </div> 
            : null }
            {/* <button className='prev-btn' onClick={handlePrevBtn}>חזור</button> */}
            <div className={`timer-page-container ${isStarting ? "" : "not-visible"}`} ref={timerRef} >
                <ParticipantInfoTimer participantObj={participantObj}></ParticipantInfoTimer>
                <TimerCircle ref={childRef} startTimer={isStarting} timerEnded={timerEnded} participantCounter={participantCounter.current} participantObj={participantObj} ></TimerCircle>
            </div>

        </div>
    );
}

export default TimerPage;