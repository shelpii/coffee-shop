import { NavLink } from "react-router-dom";
import { BlackLogo } from "../../assets";
import BeansDecoration from "../../layouts/beansDecoration/BeansDecoration";
import "./AppFooter.scss";

const AppFooter = () => {
    return (
        <footer className="footer">
            <div className="footer__top">
                <div className="footer__container">
                    <NavLink to='/' className="footer__logo">
                        <img
                            src={BlackLogo}
                            alt="coffee logo"
                            className="footer__logo-img"
                        />
                    </NavLink>
                    <nav className="footer__menu menu-footer">
                        <ul className="menu-footer__list">
                            <li className="menu-footer__item">
                                <NavLink to='/' className={({isActive}) => (isActive ? 'menu-footer__link menu-footer__link_active' : 'menu-footer__link')}>Coffee house</NavLink>
                            </li>
                            <li className="menu-footer__item">
                                <NavLink to='/coffee' className={({isActive}) => (isActive ? 'menu-footer__link menu-footer__link_active' : 'menu-footer__link')}>Our coffee</NavLink>
                            </li>
                            <li className="menu-footer__item">
                                <NavLink to='/pleasure' className={({isActive}) => (isActive ? 'menu-footer__link menu-footer__link_active' : 'menu-footer__link')}>For your pleasure</NavLink>
                            </li>
                        </ul>
                    </nav>
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
