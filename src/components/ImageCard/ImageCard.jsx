import  GridItem  from "../GridItem/GridItem";
import styles from "./ImageCard.module.css";

const ImageCard = ({ alt, avg_color, modal, src, onImageClick, user,likes }) => {
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

export default ImageCard;
