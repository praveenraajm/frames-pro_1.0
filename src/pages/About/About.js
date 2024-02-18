import portfolio_image from "../../assets/Portfolio/DSC00165_cropped.jpeg";
import "./styles.css";

const About = () => {
  return (
    <div className="about-container">
      <img src={portfolio_image} alt="portfolio-image" />
      <div className="about-text-container">
        <h5>
          Hello there! I'm Praveen, the lens behind the captivating moments you
          find here. I'm an avid wildlife and portrait photographer, dedicated
          to freezing fleeting moments in time and showcasing the beauty of both
          the untamed and the deeply personal.
        </h5>
      </div>
    </div>
  );
};

export default About;
