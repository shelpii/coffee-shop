import CoffeeItem from '../coffeeItem/CoffeeItem';
import './CoffeeList.scss';



const CoffeeList = (props) => {
    
    return (
        <ul className="coffee__list">
            <CoffeeItem/>
            <CoffeeItem/>
            <CoffeeItem/>
        </ul>
    )
}

export default CoffeeList;