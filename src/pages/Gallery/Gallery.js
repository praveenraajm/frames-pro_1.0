import { useState } from "react";
import "./styles.css";
import OptimizedImage from "../../components/OptimizedImage";
import ImageLightbox from "../../components/ImageLightbox";

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
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [currentCategory, setCurrentCategory] = useState([]);

  const openLightbox = (images, index) => {
    setCurrentCategory(images);
    setCurrentImageIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  return (
    <div className="gallary-main">
      <h3>Tour on Frames Pro</h3>
      
      {/* Wildlife */}
      <div className="container-1">
        <h4 style={{ textTransform: "uppercase" }}>Wildlife</h4>
        <div className="container-image">
          {wildlife_imageList.map((image, index) => (
            <div 
              key={index} 
              className="images-under-container"
              onClick={() => openLightbox(wildlife_imageList, index)}
            >
              <OptimizedImage src={image} alt={`wildlife-${index}`} />
            </div>
          ))}
        </div>
      </div>

      {/* Landscapes */}
      <div className="container-1">
        <h4 style={{ textTransform: "uppercase" }}>Landscapes</h4>
        <div className="container-image">
          {landscape_imageList.map((image, index) => (
            <div 
              key={index} 
              className="images-under-container"
              onClick={() => openLightbox(landscape_imageList, index)}
            >
              <OptimizedImage src={image} alt={`landscape-${index}`} />
            </div>
          ))}
        </div>
      </div>
      
      {/* Random */}
      <div className="container-1">
        <h4 style={{ textTransform: "uppercase" }}>Random</h4>
        <div className="container-image">
          {random_imageList.map((image, index) => (
            <div 
              key={index} 
              className="images-under-container"
              onClick={() => openLightbox(random_imageList, index)}
            >
              <OptimizedImage src={image} alt={`random-${index}`} />
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <ImageLightbox
        images={currentCategory}
        currentIndex={currentImageIndex}
        isOpen={lightboxOpen}
        onClose={closeLightbox}
      />
    </div>
  );
};
export default Gallery;
