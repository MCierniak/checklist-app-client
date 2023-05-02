import React, { useState, useEffect, useRef } from "react";

import DateTimeHeader from "./components/DateTimeHeader";
import MainWindow from "./components/MainWindow";
import TButton from "./components/TButton";
import TopNav from "./components/TopNav";
import "./App.css";

const parse_datetime = () => {
  const raw_date = new Date();
  return [
    String(raw_date.getFullYear()),
    String(raw_date.getMonth() + 1),
    String(raw_date.getDate()),
    String(raw_date.getHours()),
    String(raw_date.getMinutes()).padStart(2, "0")
  ];
};

const App = () => {
  const [dateTime, setDateTime] = useState(parse_datetime());
  const [page, setPage] = useState(0);

  const dateTimeRef = useRef(dateTime);
  dateTimeRef.current = dateTime;

  function refreshDateTime() {
    const newDateTime = parse_datetime();
    if(newDateTime[4] !== dateTimeRef.current[4]) setDateTime(newDateTime);
  }

  function changePage(num) {
    setPage(num);
  }

  useEffect(() => {
    const timerId = setInterval(refreshDateTime, 1000);
    return () => clearInterval(timerId);
  }, []);

  return(
    <React.Fragment>
      <TopNav>
        <TButton isActive={page === 0} onClick={() => changePage(0)}>Home</TButton>
        <TButton isActive={page === 1} onClick={() => changePage(1)}>News</TButton>
        <TButton isActive={page === 2} onClick={() => changePage(2)}>Contact</TButton>
        <TButton isActive={page === 3} onClick={() => changePage(3)}>About</TButton>
        <DateTimeHeader date_time={dateTime}/>
      </TopNav>
      <MainWindow activePage={page}/>
    </React.Fragment>
  );
};

export default App;