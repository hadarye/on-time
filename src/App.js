
import { Routes, Route } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar.component'
import Abouts from "./components/Abouts/Abouts.compoent";
import StartPage from './Routes/StartPage/StartPage.component';
import DesignPage from './Routes/DesignPage/DesignPage.component'
import ParticipantPage from "./Routes/ParticipantPage/ParticipantPage.component";
import TimerPage from "./Routes/TimerPage/TimerPage.component";
import MeetingInfo from "./Routes/MeetingInfo/MeetingInfo.component";
import FinalPage from "./Routes/FinalPage/FinalPage.component";
import Error from "./components/Error/Error.component";
import './App.css';
import { useState, useContext, useRef, useEffect } from "react";
import ChosenBg from "./components/ChosenBg/ChosenBg.component";
import tillLogo from "./media/images/logoTill.svg"
import closeBtn from './media/images/x.svg'
import { CounterContext } from './contexts/counter.context';
import { TimerContext } from './contexts/timer.context';

const App = () => {
  const { setCurrTimerObj } = useContext(TimerContext);
  const { currTimerObj } = useContext(TimerContext);
  const { currentCounter } = useContext(CounterContext);
  const currRef = useRef(currentCounter);
  const [finalParticipantArray, setFinalParticipantArray] = useState([]);
  const [showExitPrompt, setShowExitPrompt] = useState(false);
  const [type, setType] = useState("");
  const [isAboutsOpen, setIsAboutsOpen] = useState(false);
  const [isErrorOpen, setIsErrorOpen] = useState(false);

  // updating the participant arrray after all changes from the participant page
  const UpdateFinalArray = (finalArr) => {
    console.log(finalArr);
    setFinalParticipantArray([...finalArr]);
    setCurrTimerObj([...finalArr]);
    sessionStorage.finalParticipantArray = JSON.stringify(finalArr);
  }

  // useEffect(() => {
  //   window.addEventListener("beforeunload", alertUser);
  //   return () => {
  //     window.removeEventListener("beforeunload", alertUser);
  //   };
  // }, []);

  // const alertUser = (e) => { 
  //   e.preventDefault();
  //   e.returnValue = "";
  // };

  return (
    <div className="App">
      {/* <input type="file"
       className="choose-pic"
       accept="image/png, image/jpeg"></input> */}
      {/* {currRef.current === "start" ? null : */}
      <div className="icons-container-all">
        <div className={currentCounter === "start" ? "question-btn icon" : "question-btn icon opacity-none"} onClick={() => {setIsAboutsOpen(true); setType("question")}}></div>
        <div className="icons-container-left">
          <img className="logo-till" src={tillLogo}></img>
          <div className="odot-btn icon" onClick={() => {setIsAboutsOpen(true); setType("abouts")}}></div>
        </div>
      </div>

      {/* sends the abouts the corect pop up type and closes it if needed */}
      {isAboutsOpen ? 
      <Abouts type={type}></Abouts> : null}
      {isAboutsOpen ? <img src={closeBtn} className='icon close-abouts-btn' onClick={() => setIsAboutsOpen(false)}></img>
       : null}

      {isErrorOpen ? <Error></Error> : null}
      {isErrorOpen ? <img src={closeBtn} className='icon close-error-btn' onClick={() => setIsErrorOpen(false)}></img>
       : null}

      <ChosenBg></ChosenBg>
      <StartPage class={currentCounter === "start" ? "" : "hidden"}></StartPage>
      <MeetingInfo class={currentCounter === "meeting" ? "" : "hidden"}></MeetingInfo>
      <DesignPage class={currentCounter === "design" ? "" : "hidden"}></DesignPage>
      <ParticipantPage class={currentCounter === "participants" ? "" : "hidden"} UpdateArray={UpdateFinalArray} ></ParticipantPage>
      <TimerPage class={currentCounter === "timer" ? "" : "hidden"} infoParticipantArr={finalParticipantArray}></TimerPage>
      <FinalPage class={currentCounter === "final" ? "" : "hidden"}></FinalPage>

      {/* delete */}
      {/* <Routes>
          <Route path="/" element={<><NavBar /><ChosenBg /></>}>
            <Route index element={<StartPage />} />
            <Route path="meeting" element={<MeetingInfo />} />
            <Route path="design" element={<DesignPage />} />
            <Route path="participants" element={<ParticipantPage UpdateArray={UpdateFinalArray} />} />
            <Route path="timer" element={<TimerPage infoParticipantArr={finalParticipantArray} />} />
          </Route>
        </Routes> */}
    </div>
  );
}

export default App;
