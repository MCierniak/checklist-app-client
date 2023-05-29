import React from "react";

const TopNav = (props) => {
  const {className, ...other} = props;
  return (
    <React.Fragment>
      <nav {...other} className={className + " topNav"} />
    </React.Fragment>
  );
};

export default TopNav;