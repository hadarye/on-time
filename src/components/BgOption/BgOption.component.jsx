import React from'react';
import './BgOption.styles.css';

const BgOption = (props) => {
    const activateMouseEnter = (e) => {
        e.target.style.animation = "hoverAnimation 1s forwards";
    }

    const activateMouseLeave = (e) => {
        e.target.style.animation = "endHoverAnimation 1s forwards";
    }

    const userClicked = (e) => {
      props.handleOptionChose(props.index);
    }

    return (
      <div className="bg-option">
        <button className="bg_preview option" key={props.option} onMouseEnter={activateMouseEnter} onMouseLeave={activateMouseLeave} onClick={userClicked} style={{ backgroundImage:`url(${props.bg})`}}></button>
      </div>
    );
}
  
export default BgOption;