import "./styles.css";
import svg from "../../assets/instagram-1-svgrepo-com.svg";
import { INSTAGRAM_URL } from "../constants";

const Footer = () => {
  return (
    <div className="footer-main-container">
      <div className="flex-space-between">
        <div className="address-container">
          <h2>Frames Pro</h2>
          <p>Coimbatore, TamilNadu</p>
        </div>
        <div className="enquiry-container">
          <h6>For Enquires, Contact</h6>
          <a href={INSTAGRAM_URL} target="_blank">
            <img src={svg} alt="instagram-svg" />
          </a>
        </div>
      </div>
      <div className="copyright">&copy; Copyright 2024</div>
    </div>
  );
};
export default Footer;
