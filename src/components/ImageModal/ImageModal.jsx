import PropTypes from "prop-types";
import Modal from "react-modal";
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


Modal.setAppElement("#root");

const ImageModal = ({ imageSrc, onClose, isOpen }) => {

  const afterOpenModal = () => {
    document.body.style.overflow = "hidden";
  };

  return (
    <Modal
      isOpen={isOpen}
      onAfterOpen={afterOpenModal}
      onRequestClose={onClose}
      style={customStyles}
      className={css.modal}
      contentLabel='Example Modal'
      shouldCloseOnOverlayClick={true} // Close on click outside
      shouldCloseOnEsc={true} // Close on ESC key press
    >
      <div>
        <img
          src={imageSrc && imageSrc.modal}
          alt='Full Size'
          style={{ width: "1200px", height: "700px" }}
        />
      </div>
      <p className={css.descModal}>Description: {imageSrc && imageSrc.alt}</p>
      <p className={css.descModal}>Author:{imageSrc && imageSrc.user.name}</p>
      <p className={css.descModal}>Likes: {imageSrc && imageSrc.likes}</p>
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
  }),
  onClose: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
};

export default ImageModal;
