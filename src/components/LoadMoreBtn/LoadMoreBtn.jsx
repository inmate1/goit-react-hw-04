
import style from "./LoadMoreBtn.module.css";

const LoadMoreBtn = ({ onClick}) => {

 
  const handleClick = (click) => {
    console.log(click);
    onClick();
  }
  ;
  return (
    <button
      className={style.button}
      onClick={handleClick}
    >
      Search more images
    </button>
  );
};

export default LoadMoreBtn;