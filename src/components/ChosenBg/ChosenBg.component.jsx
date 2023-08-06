import { useState, useContext } from 'react';
import React, { useRef } from 'react';
import { DesignContext } from '../../contexts/design.context';
import './ChosenBg.styles.css'
import SmoothImage from 'react-smooth-image';

const ChosenBg = (props) => {
  const { currentDesign } =  useContext(DesignContext);

    return (
      <div className="chosen-bg">
        <div className="image-container">
          <SmoothImage style="height: 100vh" placeholderImgUrl="../../media/images/BG1.svg" transitionTime={0.0} imageStyles={{width: `100%`, height: `100vh`, position: `fixed`}} src={ `${currentDesign["background-image"]}`} alt="background image for timer"></SmoothImage> 
        </div>
      </div>
    );
}
  
export default ChosenBg;