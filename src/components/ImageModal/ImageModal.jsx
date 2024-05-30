import Modal from "react-modal";
import { useState, useEffect, useRef } from "react";
// import ImageCard from "../ImageCard/ImageCard";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    WebkitOverflowScrolling: "touch",
  },
};

// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement("#root");

const ImageModal = ({ imageSrc, onClose }) => {
  // let subtitle;
  let subtitle = useRef();
  
  useEffect(() => {
    if (imageSrc) {
      openModal();
    }
  }, [imageSrc]);
  const [modalIsOpen, setIsOpen] = useState(false);
  useEffect(() => {
    if (modalIsOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    // Cleanup function to restore the original overflow style
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [modalIsOpen]);
   const openModal = () => {
     setIsOpen(true);
  };
  
   const afterOpenModal = () => {
    // references are now sync'd and can be accessed.
        if (subtitle.current) {
          subtitle.current.style.color = "#f00";
        }
  }

  const closeModal = () => {
    setIsOpen(false);
    onClose();
  };

  return (
    // <div>
    //   <button onClick={openModal}>Open Modal</button>
    <Modal
      isOpen={modalIsOpen}
      onAfterOpen={afterOpenModal}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel='Example Modal'
      shouldCloseOnOverlayClick={true} // Close on click outside
      shouldCloseOnEsc={true} // Close on ESC key press
      preventScroll={false} // Prevents scrolling
    >
      <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Hello</h2>
      <button onClick={onClose}>close</button>
      <div>
        I am a modal
        <img
          src={imageSrc}
          alt='Full Size'
        />
      </div>
      {/* <form>
          <input />
          <button>tab navigation</button>
          <button>stays</button>
          <button>inside</button>
          <button>the modal</button>
        </form> */}
    </Modal>
    // </div>
  );
};

export default ImageModal;
