import { useNavigate } from 'react-router-dom';
import { useContext, useRef } from 'react';
import './StartPage.styles.css';
import hello from '../../media/images/HELLO_LANDING_PAGE.svg';
import logo from '../../media/images/ONTIME_LOGO.svg';
import credit from '../../media/images/CREDIT_LINE.svg';
import { CounterContext } from '../../contexts/counter.context';

const StartPage = (props) => {
  const { setCurrCounter } = useContext(CounterContext);
  const pageRef = useRef();

  const handleStartBtn = () => {
    pageRef.current.style.animation = "fade-out-screen 2s forwards";
    // pageRef.current.style.animation = "fade-out-screen 2s forwards";
    setTimeout(()=> {setCurrCounter("meeting")}, 0);
    
    // navigate("/meeting");
  }
    return (
      <div className={`start-page ${props.class}`} ref={pageRef}>
        <div className='black-overlay'></div>
        <img className="hello" src={hello}></img>
        <img className='logo' src={logo}/>
        <button className='start-btn next-btn' onClick={handleStartBtn}>התחל</button>
        <img className='credit' src={credit}></img>
      </div>
    );
}
  
export default StartPage;