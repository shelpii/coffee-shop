import { Helmet } from "react-helmet";
import Intro from "../../../layouts/Intro/Intro";
import { Pleasure } from "../../../assets";
import About from "../../../layouts/About/About";
import AppHeader from "../../appHeader/AppHeader";
import CoffeeList from '../../coffeeList/CoffeeList';
import './PleasurePage.scss';

const PleasurePage = () => {
    return (
        <>
            <Helmet>
                <meta
                    name="description"
                    content='About our goods'
                />
                <title>For your pleasure</title>
            </Helmet>
            <AppHeader/>
            <Intro title="For your pleasure" image={Pleasure}/>
            <About title="About our goods" image={process.env.PUBLIC_URL + `/images/About/Goods.png`}/>
            <section className="coffee">
                <CoffeeList />
            </section>
        </>
    )
}

export default PleasurePage;