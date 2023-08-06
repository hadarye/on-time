import './StartMeeting.styles.css';
import MeetingContext from '../../contexts/meeting.context';
import { useContext } from 'react';

const StartMeeting = () => {
    const { currentInfo } =  useContext(MeetingContext);
    return (
      <div className="meeting-page">
        {/* <div className="white-bg"></div> */}
        <h1 className='main-header'>{ currentInfo.name }</h1>
        <p className='meeting-topic'>{ currentInfo.topic }</p>
        <p className='meeting-date'>{ currentInfo.date }</p>
      </div>
    );
}
  
export default StartMeeting;