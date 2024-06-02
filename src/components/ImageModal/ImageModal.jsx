import PropTypes from "prop-types";
import Modal from "react-modal";
import { useState, useEffect, useRef } from "react";
import css from "./ImageModal.module.css";


const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    WebkitOverflowScrolling: "touch",
    maxHeight: "800px",
    width: "1200px",
    overlay: "hidden",
  },
  overlay: {
    backgroundColor: "rgba(44, 44, 50, 0.85)",
  },
};

// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement("#root");

const ImageModal = ({ imageSrc, onClose }) => {
  const [modalIsOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (imageSrc.modal) {
      openModal();
    }
  }, [imageSrc.modal]);

  const openModal = () => {
    setIsOpen(true);
  };

  const afterOpenModal = () => {
    document.body.style.overflow = "hidden";
    // references are now sync'd and can be accessed.
  };

  const closeModal = () => {
    setIsOpen(false);
    document.body.style.overflow = "unset";
    onClose();
  };

  return (
    <Modal
      isOpen={modalIsOpen}
      onAfterOpen={afterOpenModal}
      onRequestClose={closeModal}
      style={customStyles}
      className={css.modal}
      contentLabel='Example Modal'
      shouldCloseOnOverlayClick={true} // Close on click outside
      shouldCloseOnEsc={true} // Close on ESC key press
      preventScroll={false} // Prevents scrolling
    >
      <div>
        <img
          src={imageSrc.modal}
          alt='Full Size'
          style={{ width: "1200px", height: "700px" }}
        />
      </div>
      <p className={css.descModal}>Description: {imageSrc.alt}</p>
      <p className={css.descModal}>Author:{imageSrc.user.name}</p>
      <p className={css.descModal}>Likes: {imageSrc.likes}</p>
    </Modal>
  );
};

ImageModal.propTypes = {
  imageSrc: PropTypes.shape({
    modal: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    user: PropTypes.shape({
      name: PropTypes.string.isRequired,
    }).isRequired,
    likes: PropTypes.number.isRequired,
  }).isRequired,
  onClose: PropTypes.func.isRequired,
};

export default ImageModal;
