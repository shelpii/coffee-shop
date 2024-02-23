import "./ErrorMessage.scss";

const ErrorMessage = (props) => {
    const { message = "something went wrong" } = props;

    return (
        <div className="error__message">
            <div className="error__message_icon">
                <svg
                    version="1.1"
                    id="Layer_1"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 32 32"
                    width="52"
                    height="52"
                >
                    <circle fill="#FF3939" cx="16" cy="16" r="16" />
                    <polygon
                        fill="#E6E6E6"
                        points="24,10.1 21.9,8 16,13.9 10.1,8 8,10.1 13.9,16 8,21.9 10.1,24 16,18.1 21.9,24 24,21.9 18.1,16 "
                    />
                </svg>
            </div>
            <p className="error__message_text">404</p>
            <p className="error__message_text">{message}</p>
        </div>
    );
};

export default ErrorMessage;
