import { NavLink } from 'react-router-dom';
import './AppHeader.scss'
import { WhiteLogo } from '../../assets';
import { useState,useEffect } from 'react';

const AppHeader = () => {

    const [openMenu, setOpenMenu] = useState(false);

    const toggleMenu = () => {
        setOpenMenu(!openMenu);
    }

    useEffect(() => {
		document.body.style.overflow = openMenu ? "hidden" : "";
	}, [openMenu]);

    return (
        <header className='header'>
            <div className="header__container">
                <NavLink to='/' className='header__logo'>
                    <img src={WhiteLogo} alt="coffee logo" className='header__logo-img' />
                </NavLink>
                <nav className={`header__menu menu ${openMenu ? '_active' : ''}`}>
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
                <div className={`header__burger ${openMenu ? '_active' : ''}`} onClick={() => toggleMenu()}>
                    <span></span>
                </div>
            </div>
        </header>
    )
}

export default AppHeader;