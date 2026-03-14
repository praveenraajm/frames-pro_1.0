import { useState } from "react";
import { INSTAGRAM_URL } from "../constants";
import "./styles.css";
import instagramSvg from "../../assets/instagram-1-svgrepo-com.svg";
import whatsappSvg from "../../assets/whatsapp-icon-logo-svgrepo-com.svg";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    serviceType: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    } else if (formData.name.trim().length < 2) {
      newErrors.name = "Name must be at least 2 characters";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (
      formData.phone &&
      !/^[0-9]{10}$/.test(formData.phone.replace(/[\s-]/g, ""))
    ) {
      newErrors.phone = "Please enter a valid 10-digit phone number";
    }

    if (!formData.serviceType) {
      newErrors.serviceType = "Please select a service type";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const encode = (data) => {
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({
          "form-name": "contact",
          ...formData
        })
      });

      if (response.ok) {
        setSubmitStatus("success");
        setFormData({
          name: "",
          email: "",
          phone: "",
          serviceType: "",
          message: "",
        });
      } else {
        throw new Error("Form submission failed");
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="contact-page">
      <div className="contact-header">
        <h1>Get In Touch</h1>
        <p>
          I invite you to explore my portfolio and join me on this visual
          expedition. Whether you're drawn to the untamed beauty of wildlife or
          the intimate stories within portraits, each photograph is a testament
          to my dedication to the craft.
        </p>
      </div>

      <div className="contact-content">
        <div className="contact-form-container">
          <h2>Send Me a Message</h2>
          <form onSubmit={handleSubmit} className="contact-form" name="contact">
            <div className="form-group">
              <label htmlFor="name">
                Name <span className="required">*</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={errors.name ? "error" : ""}
                placeholder="Your full name"
              />
              {errors.name && (
                <span className="error-message">{errors.name}</span>
              )}
            </div>

            <div className="form-group">
              <label htmlFor="email">
                Email <span className="required">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={errors.email ? "error" : ""}
                placeholder="your.email@example.com"
              />
              {errors.email && (
                <span className="error-message">{errors.email}</span>
              )}
            </div>

            <div className="form-group">
              <label htmlFor="phone">Phone (Optional)</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className={errors.phone ? "error" : ""}
                placeholder="1234567890"
              />
              {errors.phone && (
                <span className="error-message">{errors.phone}</span>
              )}
            </div>

            <div className="form-group">
              <label htmlFor="serviceType">
                Service Type <span className="required">*</span>
              </label>
              <select
                id="serviceType"
                name="serviceType"
                value={formData.serviceType}
                onChange={handleChange}
                className={errors.serviceType ? "error" : ""}
              >
                <option value="">Select a service</option>
                <option value="wedding">Wedding Photography</option>
                <option value="portrait">Portrait Session</option>
                <option value="wildlife">Wildlife Photography</option>
                <option value="landscape">Landscape Photography</option>
                <option value="event">Event Coverage</option>
                <option value="commercial">Commercial Work</option>
                <option value="other">Other</option>
              </select>
              {errors.serviceType && (
                <span className="error-message">{errors.serviceType}</span>
              )}
            </div>

            <div className="form-group">
              <label htmlFor="message">
                Message <span className="required">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className={errors.message ? "error" : ""}
                placeholder="Tell me about your project, event date, location, and any specific requirements..."
                rows="6"
              />
              {errors.message && (
                <span className="error-message">{errors.message}</span>
              )}
            </div>

            <button
              type="submit"
              className="submit-button"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>

            {submitStatus === "success" && (
              <div className="success-message">
                ✓ Thank you! Your message has been sent successfully. I'll get
                back to you soon.
              </div>
            )}

            {submitStatus === "error" && (
              <div className="error-message-box">
                ✗ Oops! Something went wrong. Please try again or contact me via
                Instagram.
              </div>
            )}
          </form>
        </div>

        <div className="contact-info-container">
          <h2>Other Ways to Reach Me</h2>

          <div className="contact-info-item">
            <h3>📧 Email</h3>
            <a href="mailto:praveenraajm@outlook.com">
              praveenraajm@outlook.com
            </a>
          </div>

          <div className="contact-info-item">
            <h3>📱 Phone</h3>
            <a href="tel:+919600270188">+91 9600270188</a>
          </div>

          <div className="contact-info-item">
            <h3>💬 WhatsApp</h3>
            <a
              href="https://wa.me/919600270188"
              target="_blank"
              rel="noopener noreferrer"
              className="whatsapp-link"
            >
              <img src={whatsappSvg} alt="WhatsApp" className="whatsapp-icon" />
              <span>Chat on WhatsApp</span>
            </a>
          </div>

          <div className="contact-info-item">
            <h3>📍 Location</h3>
            <p>Sulur, Coimbatore, Tamil Nadu</p>
          </div>

          <div className="contact-info-item">
            <h3>📸 Instagram</h3>
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="instagram-link"
            >
              <img src={instagramSvg} alt="Instagram" className="instagram-icon" />
              <span>Follow on Instagram</span>
            </a>
          </div>

          <div className="response-time">
            <p>
              <strong>Response Time:</strong> Usually within 24-48 hours
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
