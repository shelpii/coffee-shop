import { Link } from "react-router-dom";
import { intro } from "../../assets";
import BeansDecoration from "../../layouts/beansDecoration/BeansDecoration";
import "./HomeIntro.scss";



const HomeIntro = () => {

    return (        
        <>
            <section className="home__intro ">
                <div className="home__intro_container">
                    <div className="home__intro_body">
                        <h1 className="home__intro_title title">
                            Everything You Love About Coffee
                        </h1>
                        <BeansDecoration color="white" />
                        <h3 className="home__intro_subtitle subtitle">
                            We makes every day full of energy and taste
                        </h3>
                        <h3 className="home__intro_subtitle subtitle">
                            Want to try our beans?
                        </h3>
                        <Link className="home__intro_button button" to='/coffee'>
                            More
                        </Link>
                    </div>
                </div>
                <div className="home__intro_image">
                    <img src={intro} alt="intro" />
                </div>
            </section>
        </>
    );
};

export default HomeIntro;
