import React, { useState } from "react";

import MainWindow, {Page1, Page2, Page3, Page4} from "./components/MainWindow";
import DateTimeHeader from "./components/DateTimeHeader";
import SideNav from "./components/SideNav";
import TButton from "./components/TButton";
import TopNav from "./components/TopNav";

const App = () => {
  const [page, setPage] = useState(0);
  const [sideNavOpen, setSideNavOpen] = useState(false);
  return(
    <React.Fragment>
      <TopNav>
        <TButton isActive={page === 0} onClick={() => setPage(0)}>Home</TButton>
        <TButton isActive={page === 1} onClick={() => setPage(1)}>News</TButton>
        <TButton isActive={page === 2} onClick={() => setPage(2)}>Contact</TButton>
        <TButton isActive={page === 3} onClick={() => setPage(3)}>About</TButton>
        <TButton isActive={sideNavOpen} onClick={() => setSideNavOpen(!sideNavOpen)}>Open Side Panel</TButton>
        <DateTimeHeader />
      </TopNav>
      <div>
        <SideNav isSideNavOpen={sideNavOpen}>
          <button className="closeBtn" onClick={() => setSideNavOpen(!sideNavOpen)}>&times;</button>
          <TButton>About</TButton>
          <TButton>Services</TButton>
          <TButton>Clients</TButton>
          <TButton>Contact</TButton>
        </SideNav>
        <MainWindow isSideNavOpen={sideNavOpen}>
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