import "../styles/TButton.css";

const TButton = (props) => {
    const {isActive, ...other} = props;
    if(isActive) {
        return <button {...other} className="active" />;
    } 
    else {
        return <button {...other} />;
    }
};

export default TButton;