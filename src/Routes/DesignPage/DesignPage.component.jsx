import { useNavigate } from 'react-router-dom';
import './DesignPage.styles.css'
import { useContext } from 'react';
import BgAllOptions from '../../components/BgAllOptions/BgAllOptions.component';
import { CounterContext } from '../../contexts/counter.context';

const DesignPage = (props) => {
  const { setCurrCounter } = useContext(CounterContext);
  const navigate = useNavigate();

  const handleNextBtn = () => {
    setCurrCounter('participants');
    // navigate("/participants");
  }

  const handlePrevBtn = () => {
    setCurrCounter("meeting");
    // navigate("/meeting");
}

  return (
    <div className={`design-page ${props.class}`}>
      <button className='prev-btn' onClick={handlePrevBtn}></button>
      <div className='page-container'>
        <span>
          <h1 className='main-header'>עיצוב רקע</h1>
          <h4 className='second-header'>בחרו רקע ועיצוב לטיימר שלכם!</h4>
        </span>
        <BgAllOptions></BgAllOptions>
      </div>
      <div className="next-btn-container">
        <p></p>
        <button className='next-btn' onClick={handleNextBtn}>המשך</button>
      </div>
    </div>
  );
}

export default DesignPage;