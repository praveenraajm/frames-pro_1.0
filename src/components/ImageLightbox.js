import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';

const ImageLightbox = ({ images, currentIndex, isOpen, onClose }) => {
  return (
    <Lightbox
      open={isOpen}
      close={onClose}
      index={currentIndex}
      slides={images.map((img) => ({ src: img }))}
      carousel={{
        finite: false,
        preload: 2,
      }}
      animation={{
        fade: 300,
        swipe: 250,
      }}
      controller={{
        closeOnBackdropClick: true,
      }}
    />
  );
};

export default ImageLightbox;
