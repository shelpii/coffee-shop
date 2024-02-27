import './CoffeeItem.scss';

const CoffeeItem = (props) => {

    const { name, country, price, img } = props;

    return (
        <li className="coffee__item">
            <a className="coffee__item-link">
                <img src={process.env.PUBLIC_URL + `/images/Products/${img}.png`} alt={name} className="coffee__item-img" />
                <h3 className="coffee__item-name">{name}</h3>
                <p className="coffee__item-country">{country}</p>
                <p className="coffee__item-price">{`${price}$`}</p>
            </a>
        </li>
    )
}

export default CoffeeItem;