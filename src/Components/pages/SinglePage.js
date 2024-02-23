import { Helmet } from "react-helmet";
import Intro from "../../layouts/Intro/Intro";
import { introOur } from "../../assets";
import SingleCoffeeItem from "../SingleCoffeeItem/SingleCoffeeItem";
import AppHeader from "../appHeader/AppHeader";


const SingleCoffeePage = () => {
    return (
        <>
            <Helmet>
                <meta
                    name="description"
                    content='About it coffee'
                />
                <title>Coffee</title>
            </Helmet>
            <AppHeader/>
            <Intro image={introOur} title="Our Coffee"/>
            <SingleCoffeeItem/>
        </>
    )
}

export default SingleCoffeePage;