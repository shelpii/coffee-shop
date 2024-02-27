import { Link } from "react-router-dom";
import BeansDecoration from "../../layouts/beansDecoration/BeansDecoration";
import "./SingleCoffeeItem.scss";

const SingleCoffeeItem = (props) => {

    const { coffee, onPreviousPage } = props

    const { name, country, price, img, description } = coffee;

    return (
        <div className="single__coffee">
            <div className="single__coffee_container">
                <div className="single__coffee_image">
                    <img src={process.env.PUBLIC_URL + `/images/Products/${img}-big.png`} alt=""/>
                </div>
                <div className="single__coffee_body">
                    <div className="single__coffee_header">
                        <h3 className="single__coffee_subtitle subtitle">About it</h3>
                        <BeansDecoration />
                    </div>
                    <p className="single__coffee_name">{name}</p>
                    <p className="single__coffee_country"><span>Country:</span>{country}</p>
                    <p className="single__coffee_description">{description}</p>
                    <p className="single__coffee_price"><span>Price:</span>{price}$</p>
                </div>
                <div className="single__coffee_buttons">
                    <Link className="single__coffee_button button-back" onClick={onPreviousPage}>Back</Link>
                </div>
            </div>
        </div>
    );
};

export default SingleCoffeeItem;
