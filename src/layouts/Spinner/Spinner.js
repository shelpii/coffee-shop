import { TailSpin } from "react-loader-spinner";
import "./Spinner.scss";

const Spinner = () => {
    return (
        <div className="spinner">
            <TailSpin
                visible={true}
                height="80"
                width="80"
                color="#000"
                ariaLabel="tail-spin-loading"
                radius="1"
                wrapperStyle={{}}
                wrapperClass=""
            />
        </div>
    );
};

export default Spinner;
