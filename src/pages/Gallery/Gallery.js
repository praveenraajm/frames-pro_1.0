import "./styles.css";

const wildlife_images = require.context("../../assets/wildlife", true);
const wildlife_imageList = wildlife_images
  .keys()
  .map((image) => wildlife_images(image));

const landscape_images = require.context("../../assets/Landscapes", true);
const landscape_imageList = landscape_images
  .keys()
  .map((image) => landscape_images(image));

const random_images = require.context("../../assets/Random", true);
const random_imageList = random_images
  .keys()
  .map((image) => random_images(image));

const Gallery = () => {
  return (
    <div className="gallary-main">
      <h3>Tour on Frames Pro</h3>
      {/* Wildlife */}
      <div className="container-1">
        <h4 style={{ textTransform: "uppercase" }}>Wildlife</h4>
        <div className="container-image">
          {wildlife_imageList.map((image, index) => (
            <div key={index} className="images-under-container">
              <img src={image} alt={`image-${index}`} />
            </div>
          ))}
        </div>
      </div>

      {/* Landscapes */}
      <div className="container-1">
        <h4 style={{ textTransform: "uppercase" }}>Landscapes</h4>
        <div className="container-image">
          {landscape_imageList.map((image, index) => (
            <div key={index} className="images-under-container">
              <img src={image} alt={`image-${index}`} />
            </div>
          ))}
        </div>
      </div>
      {/* Random */}
      <div className="container-1">
        <h4 style={{ textTransform: "uppercase" }}>Random</h4>
        <div className="container-image">
          {random_imageList.map((image, index) => (
            <div key={index} className="images-under-container">
              <img src={image} alt={`image-${index}`} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Gallery;
