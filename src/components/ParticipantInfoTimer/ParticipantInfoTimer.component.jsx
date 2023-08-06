import './ParticipantInfoTimer.styles.css'
import { React, useEffect, useState } from 'react';
import whiteBg from "../../media/images/white_BG.svg";
import participantList from '../../Routes/ParticipantPage/ParticipantPage.component';

const ParticipantInfoTimer = (props) => {
  let participantInfo = [];
  // const [participantObj, setParticipantObj] = useState({});
  const [mounted, setMounted] = useState(false);

  // pulls the array from session storage
  // if (!mounted) {
  //   participantInfo = JSON.parse(localStorage.finalParticipantArray);
  // }

  // useEffect(() => {
  //   setMounted(true);
  //   setParticipantObj(participantInfo[props.participantCounter]);
  // }, []);
  return (
    <div className="participant-info-timer" style={{ backgroundImage: `url("${whiteBg}")` }}>
      <h1 className='participant-topic-timer txt-timer'>{props.participantObj.topic}</h1>
      <h1 className='participant-name-timer txt-timer'>{props.participantObj.name}</h1>
      <h2 className='participant-job-timer txt-timer'>{props.participantObj.job}</h2>
    </div>
  );
}

export default ParticipantInfoTimer;