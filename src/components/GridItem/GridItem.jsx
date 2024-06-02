import PropTypes from "prop-types"
import style from "./GridItem.module.css"

const GridItem = ({children}) => {
  return <li className={style.item}>{children}</li>;
};

GridItem.propTypes = {
  children: PropTypes.node.isRequired,
};
export default GridItem;
