import BeansDecoration from "../../layouts/beansDecoration/BeansDecoration";
import "./SingleCoffeeItem.scss";

const SingleCoffeeItem = () => {
    return (
        <div className="single__coffee">
            <div className="single__coffee_container">
                <div className="single__coffee_image">
                    <img src={process.env.PUBLIC_URL + `/images/Products/aromistico-big.png`} alt=""/>
                </div>
                <div className="single__coffee_body">
                    <div className="single__coffee_header">
                        <h3 className="single__coffee_subtitle subtitle">About it</h3>
                        <BeansDecoration />
                    </div>
                    <p className="single__coffee_name">AROMISTICO Coffee 1 kg</p>
                    <p className="single__coffee_country"><span>Country:</span> Brasil</p>
                    <p className="single__coffee_description">
                        <span>Description:</span> Lorem ipsum dolor sit amet, consectetur
                        adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua. Ut enim ad minim veniam,
                        quis nostrud exercitation ullamco laboris nisi ut
                        aliquip ex ea commodo consequat.
                    </p>
                    <p className="single__coffee_price"><span>Price:</span> 16.99$</p>
                </div>
                <div className="single__coffee_buttons">
                    <button className="single__coffee_button button-back">Back</button>
                </div>
            </div>
        </div>
    );
};

export default SingleCoffeeItem;
