const TButton = (props) => {
    const {isActive, className, ...other} = props;
    if(isActive) {
        return <button {...other} className={className + " tButton active"} />;
    } 
    else {
        return <button {...other} className={className + " tButton"} />;
    }
};

export default TButton;