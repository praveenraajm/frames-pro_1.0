import Gallery from "../Gallery/Gallery";
import { useState, useEffect } from "react";
import "./style.css";
import ImageModal from "../Modal/ImageModal";

const Home = () => {
  const [openModal, setOpenModal] = useState(false);
  const [image, setImage] = useState({
    image: "",
    sno: null,
  });

  console.log("state", openModal, image);

  useEffect(() => {
    return () => {
      setOpenModal(false);
      setImage({
        image: "",
        sno: null,
      });
    };
  }, []);

  return (
    <div>
      <div className="header-container">
        <h1>Welcome To Frames Pro</h1>
        <h2>Perception redefines the view!</h2>
      </div>
      <div className="container-1">
        <h3>Tour on Frames Pro</h3>
        <Gallery setOpenModal={setOpenModal} setImage={setImage} />
      </div>
      {/* {openModal && ( */}
      <ImageModal open={openModal} image={image?.image} index={image?.sno} />
      {/* )} */}
    </div>
  );
};

export default Home;
