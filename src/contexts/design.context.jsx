import { createContext, useState, useEffect } from "react";
import BG1 from '../media/images/BG1.svg';
import BG1_PREVIEW from '../media/images/BG1_page3.svg';
import App from "../App";

export const DesignContext = createContext({
    currentDesign: {},
    setCurrDesign: () => {},
});
export const  DesignProvider = ({children}) => {
    const [currentDesign, setCurrDesign] = useState({
    "index": 0,
    "background-image": BG1,
    "background-preview": BG1_PREVIEW,
    "timer-start-hex": "",
    "timer-end-hex": "",
    "text-hex": ""});
    const value = {currentDesign, setCurrDesign};
    return <DesignContext.Provider value={value}>{children}</DesignContext.Provider>
} 

export default DesignContext;