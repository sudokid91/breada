const MessageBox = (props) => {
    return (
        <div className={`alert alert-${props.variant || 'info'}`}>
            {props.message}
        </div>
    );
};

MessageBox.prototype = {
    message: String,
};

MessageBox.defaultProps = {
    message: '',
};
export default MessageBox;