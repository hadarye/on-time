import './MeetingInfo.styles.css'
import { useNavigate } from 'react-router-dom';
import { useState, useContext, useRef } from 'react';
import { MeetingContext } from '../../contexts/meeting.context';
import { CounterContext } from '../../contexts/counter.context';
import Error from '../../components/Error/Error.component';
import closeBtn from '../../media/images/x.svg';

const MeetingInfo = (props) => {
    const { setCurrCounter } = useContext(CounterContext);
    const { setCurrInfo } = useContext(MeetingContext);
    const pageRef = useRef();
    const isEmpty = useRef(true);
    const [showError, setShowError] = useState(false);
    const [currentInfoObj, setCurrentInfoObj] = useState({
        "name": "",
        "topic": "",
        "date": ""
    });

    const handleSNextBtn = () => {
        checkInputs();
        if (isEmpty.current) {
            setShowError(true);
        } else {
            setCurrInfo(currentInfoObj);
            setCurrCounter("design"); 
        }
 
        // navigate("/design");
    }

    const handlePrevBtn = () => {
        // navigate("/");
        setCurrCounter("start");
    }
    
    const checkInputs = () => {
        isEmpty.current = false;
        Object.values(currentInfoObj).forEach((name) => {
            if(name === "") {
                return isEmpty.current = true;
            }
        });
    }
    
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setCurrentInfoObj(prevState => ({
            ...prevState,
            [name]: value,
        }));
    }

    const closeError = () => {
        setShowError(false);
    }

    return (
        <div className={`meeting-info ${props.class}`} ref={pageRef}>
            {showError ? <Error></Error> : null}
            {showError ? <img src={closeBtn} className='icon close-btn-error' onClick={closeError}></img> : null}
            <div className='next-btn-container'>
                <p></p>
                <button className='next-btn' onClick={handleSNextBtn}>המשך</button>
            </div>
            <button className='prev-btn' onClick={handlePrevBtn}></button>
            {/* <div className="white-bg"></div> */}
            <div className='meeting-inputs'>
                <div className='padding-bottom'>
                    <label className='meeting-label'>שם הפגישה:</label>
                    <input maxLength="20" className='meeting-name-input' name='name' placeholder='הקלד את שם הפגישה' onChange={handleInputChange} />
                </div>
                <div >
                    <label className='meeting-label'>נושא הפגישה:</label>
                    <input maxLength="100" className='meeting-topic-input' name='topic' placeholder='הקלד את נושא הפגישה' onChange={handleInputChange} />
                </div>
                <div >
                    <label className='meeting-label'>תאריך:</label>
                    <input type="date" name='date' className='meeting-date-input' required pattern="\d{4}-\d{2}-\d{2}" onChange={handleInputChange} />
                </div>
            </div>

        </div>
    );
}

export default MeetingInfo;