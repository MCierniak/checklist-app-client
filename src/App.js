import React, { useState, useEffect, useRef } from "react";

import MainWindow, {Page1, Page2, Page3, Page4} from "./components/MainWindow";
import DateTimeHeader from "./components/DateTimeHeader";
import SideNav from "./components/SideNav";
import TButton from "./components/TButton";
import TopNav from "./components/TopNav";
import "./styles/App.css";

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
  const [sideBarOpen, setSideBarOpen] = useState(false);

  const dateTimeRef = useRef(dateTime);
  dateTimeRef.current = dateTime;

  function refreshDateTime() {
    const newDateTime = parse_datetime();
    if(newDateTime[4] !== dateTimeRef.current[4]) setDateTime(newDateTime);
  }

  function changePage(num) {
    setPage(num);
  }

  function openSideBar() {
    setSideBarOpen(true)
  }

  function closeSideBar() {
    setSideBarOpen(false)
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
        <TButton isActive={sideBarOpen} onClick={() => openSideBar()}>Open Side Panel</TButton>
        <DateTimeHeader date_time={dateTime}/>
      </TopNav>
      <div>
        <SideNav isSideBarOpen={sideBarOpen}>
          <button className="closeBtn" onClick={() => closeSideBar()}>&times;</button>
        </SideNav>
        <MainWindow isSideBarOpen={sideBarOpen}>
          {
            page === 0 ? <Page1 /> :
            page === 1 ? <Page2 /> :
            page === 2 ? <Page3 /> :
            page === 3 ? <Page4 /> :
            ""
          }
        </MainWindow>
      </div>
    </React.Fragment>
  );
};

export default App;