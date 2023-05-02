import React, { useState, useEffect, useRef } from "react";

import DateTimeHeader from "./components/DateTimeHeader";
import MainWindow from "./components/MainWindow";
import TopNav from "./components/TopNav";
import "./App.css";

function parse_datetime() {
  const raw_date = new Date();
  return [
    String(raw_date.getFullYear()),
    String(raw_date.getMonth() + 1),
    String(raw_date.getDate()),
    String(raw_date.getHours()),
    String(raw_date.getMinutes()).padStart(2, "0")
  ];
}

export default function App() {
  const init = parse_datetime();
  const [dateTime, setDateTime] = useState(init);

  const dateTimeRef = useRef(dateTime);
  dateTimeRef.current = dateTime;

  function refreshDateTime() {
    const newDateTime = parse_datetime();
    if(newDateTime[4] !== dateTimeRef.current[4]) setDateTime(newDateTime);
  }

  useEffect(() => {
    const timerId = setInterval(refreshDateTime, 1000);
    return () => clearInterval(timerId);
  }, []);

  return(
    <React.Fragment>
      <TopNav>
        <button className="active">Home</button>
        <button>News</button>
        <button>Contact</button>
        <button>About</button>
        <DateTimeHeader date_time={dateTime}/>
      </TopNav>
      <MainWindow />
    </React.Fragment>
  );
}