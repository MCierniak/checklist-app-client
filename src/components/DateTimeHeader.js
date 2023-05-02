import "./DateTimeHeader.css";

const DateTimeHeader = (props) => {
    return (
        <h1>{props.date_time[0]}-{props.date_time[1]}-{props.date_time[2]} {props.date_time[3]}:{props.date_time[4]}</h1>
    );
};

export default DateTimeHeader;