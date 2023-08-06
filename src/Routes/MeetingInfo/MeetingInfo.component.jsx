import './MeetingInfo.styles.css'
import { useNavigate } from 'react-router-dom';
import { useState, useContext, useRef } from 'react';
import { MeetingContext } from '../../contexts/meeting.context';
import { CounterContext } from '../../contexts/counter.context';

const MeetingInfo = (props) => {
    const { setCurrCounter } = useContext(CounterContext);
    const pageRef = useRef();
    const navigate = useNavigate();
    const { setCurrInfo } = useContext(MeetingContext);
    const [currentInfoObj, setCurrentInfoObj] = useState({
        "name": "",
        "topic": "",
        "date": ""
    });

    const handleSNextBtn = () => {
        setCurrInfo(currentInfoObj);
        setCurrCounter("design");
        // navigate("/design");
    }

    const handlePrevBtn = () => {
        // navigate("/");
        setCurrCounter("start");
    }
    
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setCurrentInfoObj(prevState => ({
            ...prevState,
            [name]: value,
        }));
    }

    return (
        <div className={`meeting-info ${props.class}`} ref={pageRef}>
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