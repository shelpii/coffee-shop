import BeansDecoration from "../../layouts/beansDecoration/BeansDecoration";
import "./AppFooter.scss";
import Nav from "../../layouts/Nav/Nav";

const AppFooter = () => {
    return (
        <footer className="footer">
            <div className="footer__top">
                <div className="footer__container">
                    <Nav color='black'/>
                </div>
            </div>
            <div className="footer__bottom">
                <div className="footer__container">
                    <BeansDecoration/>
                </div>
            </div>
        </footer>
    );
};

export default AppFooter;
