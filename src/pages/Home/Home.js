import "./style.css";
import coverImage from "../../assets/cover/DSC02188_copy.jpg";

const Home = () => {
  return (
    <div>
      <div className="header-container">
        <h1>Welcome To Frames Pro</h1>
        <h2>Perception redefines the view!</h2>
      </div>
      <div className="cover-image-container">
        <img src={coverImage} alt="cover-image" />
      </div>
    </div>
  );
};

export default Home;
