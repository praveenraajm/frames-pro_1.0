import "./styles.css";

const ImageModal = ({ open, image, index }) => {
  return (
    <div>
      {open && (
        <div className="modal">
          <div className="modal-content">
            {/* <img src={image} alt={`selected-image-${index}`} /> */}
            hello world
          </div>
        </div>
      )}
    </div>
  );
};
export default ImageModal;
