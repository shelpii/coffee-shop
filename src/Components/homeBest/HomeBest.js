import { paper } from '../../assets';
import CoffeeList from '../coffeeList/CoffeeList';
import './HomeBest.scss';


const  HomeBest = () => {
    return (
        <section className='home__best'>
            <div className='home__best_container'>
                <h3 className='home__best_subtitle subtitle'>Our best</h3>
                <CoffeeList best={true}/>
            </div>
            <div className='home__best_image'>
                <img src={paper} alt="intro" />
            </div>
        </section>
    )
}

export default HomeBest;