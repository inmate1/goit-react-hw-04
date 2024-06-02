import style from "./LoadMoreBtn.module.css";
import PropTypes from "prop-types";

const LoadMoreBtn = ({ onClick }) => {

  return (
    <button
      className={style.button}
      onClick={onClick}
    >
      Search more images
    </button>
  );
};
LoadMoreBtn.propTypes = {
  onClick: PropTypes.func.isRequired,
};

LoadMoreBtn.propTypes = {
  onClick: PropTypes.func.isRequired,
};
export default LoadMoreBtn;
