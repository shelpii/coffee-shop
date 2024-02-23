import { Helmet } from "react-helmet";
import About from "../../layouts/About/About";
import Intro from "../../layouts/Intro/Intro";
import { introOur } from "../../assets";
import { drinkCoffee } from "../../assets";
import AppHeader from "../appHeader/AppHeader";

const OurPage = () => {
    return (
        <>
            <Helmet>
                <meta
                    name="description"
                    content='Our Coffee and about our coffee'
                />
                <title>Our Coffee</title>
            </Helmet>
            <AppHeader/>
            <Intro image={introOur} title="Our Coffee"/>
            <About image={drinkCoffee} title="About our beans"/>
        </>
    )
}

export default OurPage;