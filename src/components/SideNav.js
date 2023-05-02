import React from "react";

import "../styles/SideNav.css";

const SideNav = (props) => {
    return (
        <React.Fragment>
            <nav className={props.isSideBarOpen ? "sideNav_open" : "sideNav"}>
                {props.children}
            </nav>
        </React.Fragment>
    );
};

export default SideNav;