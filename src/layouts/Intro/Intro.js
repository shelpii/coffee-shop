import './Intro.scss';

const Intro = ({title, image}) => {
    return (
        <section className="intro">
            <div className="intro_container">
                <h2 className="intro_title title">{title}</h2>
            </div>
            <div className="intro_image">
                <img src={image} alt={title}/>
            </div>
        </section>
    )
}

export default Intro;