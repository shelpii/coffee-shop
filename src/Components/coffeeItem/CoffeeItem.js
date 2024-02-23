import './CoffeeItem.scss';
import solimo from '../../assets/images/Products/solimo.png'

const CoffeeItem = () => {
    return (
        <li className="coffee__item">
            <a className="coffee__item-link">
                <img src={solimo} alt="solimo" className="coffee__item-img" />
                <h3 className="coffee__item-name">Solimo Coffee Beans 2 kg</h3>
                <p className="coffee__item-country">Kenya</p>
                <p className="coffee__item-price">10.73$</p>
            </a>
        </li>
    )
}

export default CoffeeItem;