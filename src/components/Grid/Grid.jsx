import PropTypes from "prop-types";
import style from "./Grid.module.css";

const Grid = ({ children }) => {
  return <ul className={style.list}>{children}</ul>;
};

Grid.propTypes = {
  children: PropTypes.node.isRequired,
};
export default Grid;
