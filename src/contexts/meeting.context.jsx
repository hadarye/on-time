import { createContext, useState } from "react";
import App from "../App";

export const MeetingContext = createContext({
    currentInfo: {},
    setCurrInfo: () => {},
});

export const MeetingProvider = ({children}) => {
    const [currentInfo, setCurrInfo] = useState({
    "name": "",
    "topic": "",
    "date": ""});
    const value = {currentInfo, setCurrInfo};
    return <MeetingContext.Provider value={value}>{children}</MeetingContext.Provider>
} 

export default MeetingContext;