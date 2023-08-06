import React from'react';
import './BgAllOptions.styles.css';
import { useState, useContext } from 'react';
import BgOption from '../BgOption/BgOption.component';
import BG1_PREVIEW from '../../media/images/preview_BG_1.svg';
import BG2_PREVIEW from '../../media/images/preview_BG_2.svg';
import BG3_PREVIEW from '../../media/images/preview_BG_3.svg';
import BG4_PREVIEW from '../../media/images/preview_BG_4.svg';
import BG5_PREVIEW from '../../media/images/preview_BG_5.svg';
import BG6_PREVIEW from '../../media/images/preview_BG_6.svg';
import BG1 from '../../media/images/BG1.svg';
import BG2 from '../../media/images/BG2.svg';
import BG3 from '../../media/images/BG3.svg';
import BG4 from '../../media/images/BG4.svg';
import BG5 from '../../media/images/BG5.svg';
import BG6 from '../../media/images/BG6.svg';
import { DesignContext } from '../../contexts/design.context';

const BgAllOptions = (props) => {
  const { setCurrDesign } = useContext(DesignContext);
    const designData = [
      {
        "index": 0,
        "background-image": BG1,
        "background-preview": BG1_PREVIEW,
        "timer-start-hex": "#A197DB",
        "timer-end-hex": "#668FF1",
        "text-hex": ""
      },
      {
        "index": 1,
        "background-image": BG2,
        "background-preview": BG2_PREVIEW,
        "timer-start-hex": "#81ADE7",
        "timer-end-hex": "#89ACE1",
        "text-hex": ""
      },
      {
        "index": 2,
        "background-image": BG3,
        "background-preview": BG3_PREVIEW,
        "timer-start-hex": "#C2E8DB",
        "timer-end-hex": "#C2E8DB",
        "text-hex": ""
      },
      {
        "index": 3,
        "background-image": BG4,
        "background-preview": BG4_PREVIEW,
        "timer-start-hex": "",
        "timer-end-hex": "",
        "text-hex": ""
      },
      {
        "index": 4,
        "background-image": BG5,
        "background-preview": BG5_PREVIEW,
        "timer-start-hex": "#C2DFDD",
        "timer-end-hex": "#C2DFDD",
        "text-hex": ""
      },
      {
        "index": 5,
        "background-image": BG6,
        "background-preview": BG6_PREVIEW,
        "timer-start-hex": "#E1E5E3",
        "timer-end-hex": "#E1E5E3",
        "text-hex": ""
      }
    ]

    const handleOptionChose = (index) => {
      setCurrDesign(designData[index]);
    }

    return (
      <div className="bg-all-options">
        {designData.map(option => (<BgOption key={option["background-preview"]} bg={option["background-preview"]} index={option["index"]} handleOptionChose={handleOptionChose}></BgOption>))}
      </div>
    );
}
  
export default BgAllOptions;