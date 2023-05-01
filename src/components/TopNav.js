import React from "react";

import "./TopNav.css"

function parse_datetime() {
  const raw_date = new Date();
  const TZoffset = raw_date.getTimezoneOffset() / 60;
  const timeArray = raw_date.toGMTString().split(" ")[4].split(":");
  return `${raw_date.getFullYear()}-${raw_date.getMonth() + 1}-${raw_date.getDate()} ${timeArray[0] - TZoffset}:${timeArray[1]}`
}

export class DateTimeHeader extends React.Component {

  constructor() {
    super();
    this.state = { date_time: parse_datetime() };
  }

  updateTime() {
    const new_date_time = parse_datetime();
    if (new_date_time !== this.state.date_time) {
      this.setState({ date_time: new_date_time });
    }
  }

  componentDidMount() {
    this.interval = setInterval(() => this.updateTime(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
        <h1 className="dateTime">{this.state.date_time}</h1>
    );
  }

}

class TopNav extends React.Component {

  render() {
    return (
      <React.Fragment>
        <nav className="topNav">
          <button className="active">Home</button>
          <button>News</button>
          <button>Contact</button>
          <button>About</button>
          <DateTimeHeader />
        </nav>
      </React.Fragment>
    );
  }

}

export default TopNav;