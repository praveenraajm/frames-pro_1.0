import "./style.css";
import coverImage from "../../assets/cover/DSC02188_copy.jpg";

const Home = () => {
  return (
    <div>
      <div className="header-container">
        <h1>Welcome To Frames Pro</h1>
        <h2>Perception redefines the view!</h2>
        <h4>
          In the realm of my lens, I believe that perception is the key that
          unlocks the boundless beauty hidden in every frame. "Perception
          redefines the view" is not just a statement; it's a guiding principle
          that propels me to explore the world with fresh eyes, to see beyond
          the obvious, and to capture moments that challenge and reshape
          conventional perspectives
        </h4>
      </div>
      <div className="cover-image-container">
        <img src={coverImage} alt="cover-image" />
      </div>
    </div>
  );
};

export default Home;
