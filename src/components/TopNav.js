import React from "react";

import "../styles/TopNav.css";

const TopNav = (props) => {
  return (
    <React.Fragment>
      <nav className="topNav">
        {props.children}
      </nav>
    </React.Fragment>
  );
};

export default TopNav;