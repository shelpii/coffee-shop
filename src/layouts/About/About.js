import './About.scss';
import BeansDecoration from "../../layouts/beansDecoration/BeansDecoration";

const About = ({title, image}) => {
  return (
    <section className="about">
    <div className="about_container">
      <div className="about_image">
        <img src={image} alt={title} />
      </div>
      <div className="about_body">
        <h3 className="about_subtitle subtitle">{title}</h3>
        <BeansDecoration />
        <p className="about_text">
          Extremity sweetness difficult behaviour he of. On disposal of as
          landlord horrible.
        </p>
        <p className="about_text">
          Afraid at highly months do things on at. Situation recommend
          objection do intention<br/> so questions.
        </p>
        <p className="about_text">
          As greatly removed calling pleased improve an. Last ask him cold
          feel<br/> met spot shy want. Children me laughing we prospect answered
          followed. At it went<br/> is song that held help face.
        </p>
      </div>
    </div>
  </section>
  )
}

export default About;