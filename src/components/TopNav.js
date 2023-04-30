import React from "react";

import "./TopNav.css"

function TopNav() {
  return (
    <nav className="topnav">
        <button className="active">Home</button>
        <button>News</button>
        <button>Contact</button>
        <button>About</button>
    </nav>
  );
}

export default TopNav;