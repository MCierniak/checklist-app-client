import React from "react";

const SideNav = (props) => {
  const {isSideNavOpen, className, ...other} = props;
  return (
    <React.Fragment>
      <nav {...other} className={className + (isSideNavOpen ? " sideNav_open" : " sideNav")} />
    </React.Fragment>
  );
};

export default SideNav;