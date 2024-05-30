import  Grid  from "../Grid/Grid";
import  ImageCard  from "../ImageCard/ImageCard";

const ImageGallery = ({ images, onImageClick }) => {
  return (
    <Grid>
      {images.map(
        ({
          id,
          alt_description,
          avg_color,
          urls: { full, raw, regular, small, thumb },
        }) => (
          <ImageCard
            key={id}
            alt={alt_description}
            avg_color={avg_color}
            modal={regular}
            src={small}
            onImageClick={onImageClick}
          />
        )
      )}
    </Grid>
  );
};

export default ImageGallery;
