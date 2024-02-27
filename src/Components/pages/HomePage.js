import { Helmet, HelmetProvider } from "react-helmet-async";
import HomeAbout from "../homeAbout/HomeAbout";
import HomeIntro from "../homeIntro/HomeIntro";
import HomeBest from "../homeBest/HomeBest";
import AppHeader from "../appHeader/AppHeader";

const HomePage = () => {
    return (
        
        <HelmetProvider>
            <Helmet>
                <meta
                    name="description"
                    content='Coffee beans shop "Everything You Love About Coffee'
                />
                <title>Coffee House</title>
            </Helmet>
            <AppHeader/>
            <HomeIntro />
            <HomeAbout />
            <HomeBest  />
        </HelmetProvider>
    );
};

export default HomePage;
