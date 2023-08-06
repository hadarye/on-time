import { createContext, useState } from "react";

export const TimerContext = createContext({
    currTimerObj: {},
    setCurrTimerObj: () => {},
});

export const TimerProvider = ({children}) => {
    const [currTimerObj, setCurrTimerObj] = useState([{
    name: "", 
    job: "", 
    topic: "", 
    hours: "0", 
    minutes: "0", 
    seconds: "0"}]);
    const value = {currTimerObj, setCurrTimerObj};
    return <TimerContext.Provider value={value}>{children}</TimerContext.Provider>
} 

export default TimerContext;