import ImageModal from "../Modal/ImageModal";

const images = require.context("../../assets/images", true);
const imageList = images.keys().map((image) => images(image));

const Gallery = ({ setOpenModal, setImage }) => {
  const handleclickImage = (image, index) => {
    setOpenModal(true);
    setImage({
      image: image,
      sno: index,
    });
  };
  return (
    <div>
      <div className="container-image">
        {imageList.map((image, index) => (
          <div key={index} className="images-under-container">
            <img
              src={image}
              alt={`image-${index}`}
              onClick={() => handleclickImage(image, index)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
export default Gallery;
