import { NavLink } from 'react-router-dom';
import './Nav.scss'
import { WhiteLogo, BlackLogo } from '../../assets';
import { useState, useEffect } from 'react';

const Nav = (props) => {

    const { color } = props;
    const [openMenu, setOpenMenu] = useState(false);
    const logo = color === 'black' ? BlackLogo : WhiteLogo;

    const toggleMenu = () => {
        setOpenMenu(!openMenu);
    }

    useEffect(() => {
		document.body.style.overflow = openMenu ? "hidden" : "";
	}, [openMenu]);

    return (
        <>
            <NavLink to='/' className='nav__logo'>
                <img src={logo} alt="coffee logo" className='nav__logo-img' />
            </NavLink>
            <nav className={`nav__menu menu ${openMenu ? '_active' : ''}`}>
                <ul className='menu__list'>
                    <li className='menu__item'>
                        <NavLink to='/' className={({isActive}) => (isActive ? 'menu__link menu__link_active' : 'menu__link')}>Coffee house</NavLink>
                    </li>
                    <li className='menu__item'>
                        <NavLink to='/coffee' className={({isActive}) => (isActive ? 'menu__link menu__link_active' : 'menu__link')}>Our coffee</NavLink>
                    </li>
                    <li className='menu__item'>
                        <NavLink to='/pleasure' className={({isActive}) => (isActive ? 'menu__link menu__link_active' : 'menu__link')}>For your pleasure</NavLink>
                    </li>
                </ul>
            </nav>
            <div className={`nav__burger ${openMenu ? '_active' : ''}`} onClick={() => toggleMenu()}>
                <span></span>
            </div>
        </>
    )
}

export default Nav;