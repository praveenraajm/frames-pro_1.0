import { INSTAGRAM_URL } from "../constants";
import "./styles.css";
import svg from "../../assets/instagram-1-svgrepo-com.svg";

const Contact = () => {
  return (
    <div className="contact-container">
      <h3>Join the Journey:</h3>
      <h5>
        I invite you to explore my portfolio and join me on this visual
        expedition. Whether you're drawn to the untamed beauty of wildlife or
        the intimate stories within portraits, each photograph is a testament to
        my dedication to the craft and the incredible beauty that surrounds us.
      </h5>
      <h5>Thank you for being a part of my photographic journey.</h5>

      <h6>Please do DM for enquiries on</h6>
      <a href={INSTAGRAM_URL} target="_blank">
        <img src={svg} alt="instagram-svg" />
      </a>
    </div>
  );
};

export default Contact;
