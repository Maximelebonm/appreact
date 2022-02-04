const LoadingSpinner = (props) => {
    let {size ="2rem", color="#123456", bscolor=""} = props;

    return (
        <div className="spinner">
            &nbsp;
            <div className={"spinner-border " + bscolor}
                style={{height : size, width : size, color}}
                role="status">
                    <span className="visually-hidden">Loading...</span>
            </div>
        </div>
    );
};
export default LoadingSpinner;