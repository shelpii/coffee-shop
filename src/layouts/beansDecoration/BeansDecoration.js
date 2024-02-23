import './BeansDecoration.scss';
import { WhiteBeans, BlackBeans } from "../../assets";



const BeansDecoration = (props) => {

    const {color} = props

    const colorBeans = color ==='white' ? WhiteBeans : BlackBeans

    return (
        <div className="decoration">
            <img src={colorBeans} alt="decoration" className="decoration__img"/>
        </div>
    )

}

export default BeansDecoration;