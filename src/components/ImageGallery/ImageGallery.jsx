import PropTypes from "prop-types";
import Grid from "../Grid/Grid";
import ImageCard from "../ImageCard/ImageCard";

const ImageGallery = ({ images, onImageClick }) => {
  return (
    <Grid>
      {images.map(
        ({
          id,
          alt_description,
          avg_color,
          likes,
          user,
          urls: { full, raw, regular, small, thumb },
        }) => (
          <ImageCard
            key={id}
            alt={alt_description}
            avg_color={avg_color}
            modal={regular}
            src={small}
            likes={likes}
            user={user}
            onImageClick={onImageClick}
          />
        )
      )}
    </Grid>
  );
};
ImageGallery.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      alt_description: PropTypes.string,
      avg_color: PropTypes.string,
      likes: PropTypes.number.isRequired,
      user: PropTypes.object.isRequired,
      urls: PropTypes.shape({
        full: PropTypes.string,
        raw: PropTypes.string,
        regular: PropTypes.string.isRequired,
        small: PropTypes.string.isRequired,
        thumb: PropTypes.string,
      }).isRequired,
    })
  ).isRequired,
  onImageClick: PropTypes.func.isRequired,
};
export default ImageGallery;
