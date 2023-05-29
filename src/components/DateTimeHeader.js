import { useState, useEffect } from "react";

//Why does this component render twice every minute OR twice on parent re-render???
//Note: StrictMode is off!
const DateTimeHeader = (props) => {
    const {children, ...other} = props;
    const rawDate = new Date();
    const [state, setState] = useState(rawDate.getMinutes());
    useEffect(() => {
        const timer = setInterval(() => { 
            setState((prev) => {
                const newRawDate = new Date();
                return newRawDate.getMinutes();
            });
        }, 1000);
        return () => clearInterval(timer);
    }, []);
    return (
        <h1 {...other} children={`${rawDate.getFullYear()}-${rawDate.getMonth() + 1}-${rawDate.getDate()} ${rawDate.getHours()}:${String(state).padStart(2, "0")}`} />
    );
};

export default DateTimeHeader;