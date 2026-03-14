import "./styles.css";
import instagramSvg from "../../assets/instagram-1-svgrepo-com.svg";
import whatsappSvg from "../../assets/whatsapp-icon-logo-svgrepo-com.svg";
import { INSTAGRAM_URL } from "../constants";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();

  const handleServiceClick = (e) => {
    e.preventDefault();
    navigate("/about");
    setTimeout(() => {
      const element = document.getElementById("services-section");
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  };

  return (
    <footer className="footer-main-container">
      <div className="footer-content">
        <div className="footer-section brand-section">
          <h2>Frames Pro</h2>
          <p className="tagline">Capturing Moments, Creating Memories</p>
          <p className="location">📍 Coimbatore, Tamil Nadu</p>
        </div>

        <div className="footer-section">
          <h3>Services</h3>
          <ul>
            <li>
              <a href="#services" onClick={handleServiceClick}>
                Birthday Photography
              </a>
            </li>
            <li>
              <a href="#services" onClick={handleServiceClick}>
                Engagement Photography
              </a>
            </li>
            <li>
              <a href="#services" onClick={handleServiceClick}>
                Event Coverage
              </a>
            </li>
            <li>
              <a href="#services" onClick={handleServiceClick}>
                Portrait Sessions
              </a>
            </li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/gallery">Gallery</a>
            </li>
            <li>
              <a href="/about">About</a>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
          </ul>
        </div>

        <div className="footer-section contact-section">
          <h3>Get In Touch</h3>
          <p className="contact-info">
            📧{" "}
            <a href="mailto:praveenraajm@outlook.com">
              praveenraajm@outlook.com
            </a>
          </p>
          <p className="contact-info">
            📱 <a href="tel:+919600270188">+91 9600270188</a>
          </p>

          <div className="social-links">
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit our Instagram"
            >
              <img src={instagramSvg} alt="Instagram" />
            </a>
            <a
              href="https://wa.me/919600270188"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Chat on WhatsApp"
            >
              <img src={whatsappSvg} alt="WhatsApp" />
            </a>
          </div>
        </div>
      </div>

      <div className="footer-divider"></div>
      <div className="copyright">
        &copy; {new Date().getFullYear()} Frames Pro. All rights reserved.
      </div>
    </footer>
  );
};
export default Footer;
