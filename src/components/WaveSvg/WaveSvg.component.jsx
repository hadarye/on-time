import React from "react";
import { useContext } from 'react';
import { DesignContext } from '../../contexts/design.context';

const Wave = () => {
    const { currentDesign } =  useContext(DesignContext);

    return (
        <React.Fragment>
            <svg xmlns="http://www.w3.org/2000/svg" width="1600" height="198" preserveAspectRatio="none">
                <defs>
                    <linearGradient id="a" x1="50%" x2="50%" y1="20%" y2="80%">
                        <stop stopColor={currentDesign["timer-end-hex"]} offset="0%" />
                        <stop stopColor={currentDesign["timer-start-hex"]} offset="100%" />
                    </linearGradient>
                </defs>
                <path fill="url(#a)" stroke="current" fillRule="current" d="M.005 121C311 121 409.898-.25 811 0c400 0 500 121 789 121v77H0s.005-48 .005-77z" transform="matrix(-1 0 0 1 1600 0)" />
            </svg>

        </React.Fragment>
    );
}

export default Wave;