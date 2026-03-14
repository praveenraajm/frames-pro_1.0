import portfolio_image from "../../assets/Portfolio/DSC00165_cropped.jpeg";
import OptimizedImage from "../../components/OptimizedImage";
import "./styles.css";

const About = () => {
  return (
    <div className="about-page">
      {/* Hero Section */}
      <div className="about-hero">
        <div className="about-hero-image">
          <OptimizedImage
            src={portfolio_image}
            alt="Praveen - Landscape and Portrait Photographer"
          />
        </div>
        <div className="about-hero-content">
          <h1>Hello, I'm Praveen</h1>
          <p className="tagline">Landscape & Portrait Photographer</p>
          <p className="sub-tagline">Aspiring Wildlife Photographer</p>
          <p className="intro">
            I specialize in capturing the serene beauty of landscapes and the
            authentic emotions in portrait photography. With a growing passion
            for wildlife, I'm constantly exploring new frontiers to expand my
            creative vision and technical expertise.
          </p>
        </div>
      </div>

      {/* Story Section */}
      <section className="about-section story-section">
        <h2>My Photography Journey</h2>
        <div className="story-content">
          <div className="story-item">
            <div className="story-year">2017</div>
            <div className="story-text">
              <h3>The Beginning - College Days</h3>
              <p>
                My photography journey began during my 3rd year of college in
                2017. With just my mobile phone and a lot of curiosity, I
                started capturing moments around campus and during college
                events. Those early days taught me the fundamentals of
                composition, lighting, and the power of freezing moments in
                time. Photography quickly became my passion.
              </p>
            </div>
          </div>

          <div className="story-item">
            <div className="story-year">2017-2020</div>
            <div className="story-text">
              <h3>Learning & Experimentation</h3>
              <p>
                For three years after college, I continued learning photography
                through practice and self-study. I experimented with different
                styles, attended workshops, and built my technical knowledge.
                During this period, I captured moments at various events and
                celebrations, gradually developing my eye for composition and
                storytelling.
              </p>
            </div>
          </div>

          <div className="story-item">
            <div className="story-year">2020</div>
            <div className="story-text">
              <h3>First Professional Camera</h3>
              <p>
                In 2020, I made the significant investment in my first
                professional camera. This marked a turning point in my
                photography journey. With better equipment, I could explore new
                techniques and push my creative boundaries. I started taking on
                more event photography assignments including birthdays,
                engagements, and celebrations.
              </p>
              \n{" "}
            </div>
          </div>

          <div className="story-item">
            <div className="story-year">2020-Present</div>
            <div className="story-text">
              <h3>Professional Growth & Exploration</h3>
              <p>
                Since acquiring my professional camera, I've been actively
                exploring and refining my craft. I've photographed numerous
                events—birthdays, engagements, celebrations, and trips—capturing
                authentic moments and emotions. Each project has taught me
                something new. I've also been developing my skills in landscape
                and portrait photography while nurturing my growing interest in
                wildlife photography.
              </p>
            </div>
          </div>

          <div className="story-item">
            <div className="story-year">Present</div>
            <div className="story-text">
              <h3>Frames Pro Today</h3>
              <p>
                Today, Frames Pro represents my journey from a curious college
                student to a dedicated photographer. With years of hands-on
                experience across events, landscapes, and portraits, I continue
                to grow and explore new genres. Every project—whether it's a
                birthday celebration, an engagement shoot, a landscape
                expedition, or an event—is an opportunity to tell a unique story
                and create lasting memories.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="about-section philosophy-section">
        <h2>My Philosophy</h2>
        <div className="philosophy-content">
          <blockquote>
            "Every landscape tells a story, every face holds a moment, and every
            creature in nature deserves to be seen. My mission is to reveal the
            extraordinary beauty in all three."
          </blockquote>
          <p>
            I approach landscape photography with patience, seeking the perfect
            light and composition. In portraits, I focus on capturing authentic
            emotion and connection. And as I venture into wildlife photography,
            I'm learning to combine all these skills—patience, technical
            expertise, and storytelling—to document the incredible diversity of
            nature.
          </p>
        </div>
      </section>

      {/* Services & Monetization Section */}
      <section className="about-section services-section" id="services-section">
        <h2>Services I Offer</h2>
        <p className="services-intro">
          I'm building my photography business by offering professional services
          tailored to your needs. Whether you're looking for event coverage,
          portrait sessions, or landscape photography, I'm here to help.
        </p>

        <div className="services-grid">
          <div className="service-card">
            <div className="service-icon">🏞️</div>
            <h3>Landscape Photography</h3>
            <p>
              Stunning landscape photography for your home, office, or
              commercial use. Perfect for wall art, prints, or digital
              collections.
            </p>
            <div className="service-price">Starting from ₹2,000</div>
          </div>

          <div className="service-card">
            <div className="service-icon">🖼️</div>
            <h3>Portrait Sessions</h3>
            <p>
              Professional portrait photography for personal, professional, or
              creative purposes. I create images that capture your personality
              and essence.
            </p>
            <div className="service-price">Starting from ₹3,000</div>
          </div>

          <div className="service-card">
            <div className="service-icon">🎂</div>
            <h3>Birthday Photography</h3>
            <p>
              Capture the joy and celebration of your special day. I document
              candid moments, group photos, and the emotions that make birthdays
              memorable.
            </p>
            <div className="service-price">Starting from ₹5,000</div>
          </div>

          <div className="service-card">
            <div className="service-icon">💍</div>
            <h3>Engagement Photography</h3>
            <p>
              Celebrate your engagement with beautiful, authentic photos. I
              capture the love, joy, and connection between you and your
              partner.
            </p>
            <div className="service-price">Starting from ₹8,000</div>
          </div>
        </div>
      </section>

      {/* Why Choose Me Section */}
      <section className="about-section why-choose-section">
        <h2>Why Choose Frames Pro?</h2>
        <div className="why-choose-list">
          <div className="why-choose-item">
            <span className="check-icon">✓</span>
            <div>
              <h4>Authentic Storytelling</h4>
              <p>
                I don't just take photos—I capture stories. Every image reflects
                genuine moments and authentic emotions that matter to you.
              </p>
            </div>
          </div>

          <div className="why-choose-item">
            <span className="check-icon">✓</span>
            <div>
              <h4>Professional Quality</h4>
              <p>
                With years of experience and professional equipment, I deliver
                high-quality images that exceed expectations.
              </p>
            </div>
          </div>

          <div className="why-choose-item">
            <span className="check-icon">✓</span>
            <div>
              <h4>Affordable Pricing</h4>
              <p>
                Professional photography doesn't have to be expensive. I offer
                competitive pricing without compromising on quality.
              </p>
            </div>
          </div>

          <div className="why-choose-item">
            <span className="check-icon">✓</span>
            <div>
              <h4>Quick Turnaround</h4>
              <p>
                I understand the importance of timely delivery. You'll receive
                edited photos promptly after your session.
              </p>
            </div>
          </div>

          <div className="why-choose-item">
            <span className="check-icon">✓</span>
            <div>
              <h4>Personalized Service</h4>
              <p>
                Your vision is my priority. I work closely with you to
                understand your needs and deliver exactly what you're looking
                for.
              </p>
            </div>
          </div>

          <div className="why-choose-item">
            <span className="check-icon">✓</span>
            <div>
              <h4>Flexible Packages</h4>
              <p>
                Whether you need a few hours of coverage or a full-day event, I
                offer flexible packages tailored to your budget and
                requirements.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="about-cta">
        <h2>Let's Create Something Beautiful Together</h2>
        <p>
          Ready to capture your special moments? Whether you need event
          coverage, portrait sessions, or landscape photography, I'm here to
          bring your vision to life with professionalism and creativity.
        </p>
        <div className="cta-buttons">
          <a href="/gallery" className="cta-button primary">
            View My Work
          </a>
          <a href="/contact" className="cta-button secondary">
            Book a Session
          </a>
        </div>
      </section>
    </div>
  );
};

export default About;
