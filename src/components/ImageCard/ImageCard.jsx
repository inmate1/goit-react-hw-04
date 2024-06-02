import PropTypes from "prop-types";
import GridItem from "../GridItem/GridItem";
import styles from "./ImageCard.module.css";

const ImageCard = ({
  alt,
  avg_color,
  modal,
  src,
  onImageClick,
  user,
  likes,
}) => {
  return (
    <GridItem>
      <div className={styles.thumb}>
        <img
          src={src}
          alt={alt}
          onClick={() => onImageClick({ modal, user, likes, alt })}
          style={{ cursor: "pointer" }}
        />
      </div>
    </GridItem>
  );
};
ImageCard.propTypes = {
  alt: PropTypes.string.isRequired,
  avg_color: PropTypes.string,
  modal: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  onImageClick: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired,
  likes: PropTypes.number.isRequired,
};
export default ImageCard;
