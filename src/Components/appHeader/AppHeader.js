import './AppHeader.scss'
import Nav from '../../layouts/Nav/Nav';

const AppHeader = () => {

    return (
        <header className='header'>
            <div className="header__container">
                <Nav/>
            </div>
        </header>
    )
}

export default AppHeader;