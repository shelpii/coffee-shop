import { useParams, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import { useGetSingleCoffeeQuery } from '../../api/CoffeeApi';
import Intro from "../../layouts/Intro/Intro";
import { introOur } from "../../assets";
import NotFoundPage from './NotFoundPage/NotFoundPage';
import Spinner from '../../layouts/Spinner/Spinner';
import SingleCoffeeItem from "../SingleCoffeeItem/SingleCoffeeItem";
import AppHeader from "../appHeader/AppHeader";


const SingleCoffeePage = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const { data: coffee = [], isLoading, isError, isSuccess } = useGetSingleCoffeeQuery(id);
    
    const onPreviousPage = () => {
        navigate(-1);
    }

    if(isError) {
        return <NotFoundPage/>;
    }

    return (
        <>
            <Helmet>
                <meta
                    name="description"
                    content={`About ${coffee.name}`}
                />
                <title>{coffee.name}</title>
            </Helmet>
            <AppHeader/>
            <Intro image={introOur} title="Our Coffee"/>
            {isLoading ? <Spinner/> : ''}
            {isSuccess ? <SingleCoffeeItem coffee={coffee} onPreviousPage={onPreviousPage} /> : ''}
        </>
    )
}

export default SingleCoffeePage;