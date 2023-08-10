import { style } from "../constant/globalStyle"
import PropTypes from "prop-types";

const FilterBox = ({type,title,onChange,check}) => {

  return (
    <div className={`${style["flex-row-start"]} `}>
        <input type={type} name="brand" value={title} id={title} checked={check} className="w-4 h-4 cursor-pointer" onChange={onChange}/>
        <label htmlFor={title} className="ml-2">{title.toUpperCase()}</label>
    </div>
  )
}

FilterBox.propTypes = {
  type: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  check: PropTypes.bool.isRequired,
};



export default FilterBox