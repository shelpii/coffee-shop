import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { useGetAllCoffeeQuery } from '../../api/CoffeeApi';
import sortCoffee from '../../utils/sortCoffee';
import CoffeeItem from '../coffeeItem/CoffeeItem';
import Spinner from '../../layouts/Spinner/Spinner';
import ErrorMessage from '../../layouts/errorMessage/ErrorMessage'
import './CoffeeList.scss';



const CoffeeList = (props) => {

    const {data: coffee = [], isLoading, isError,} = useGetAllCoffeeQuery();
    const { selectFilter, searchValue } = useSelector(state => state.filters);
    const { best } = props;


    const filteredCoffee = useMemo(() => {
        return sortCoffee(coffee, best, searchValue, selectFilter);
    }, [selectFilter, searchValue, coffee]);
    
    const renderCoffees = (items) => {
        if (!items.length) {
            return (
                <p className='coffee__not-found'>Products not found :(</p>
            );
        }
        return items.map(({ id, ...props }) => {
            return (
                <CoffeeItem key={id} id={id} {...props}/>
            );
        });
    };

    if(isLoading) {
        return <Spinner/>
    }
    else if(isError) {
        return <ErrorMessage message={"Failed to load products"} />;
    }

    const elements = renderCoffees(filteredCoffee);

    return (
        <ul className="coffee__list">
            {elements}
        </ul>
    )
}

export default CoffeeList;