import { createContext, useState } from "react";

export const CounterContext = createContext({
    currentCounter: "start",
    setCurrCounter: () => "",
});
export const CounterProvider = ({children}) => {
    const [currentCounter, setCurrCounter] = useState("start");
    const value = {currentCounter, setCurrCounter};
    return <CounterContext.Provider value={value}>{children}</CounterContext.Provider>
} 

export default CounterContext;