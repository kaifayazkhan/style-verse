import { style } from "../constant/globalStyle"

const FilterBox = ({type,title,onChange,check}) => {

  return (
    <div className={`${style["flex-row-start"]} `}>
        <input type={type} name="brand" value={title} id={title} checked={check} className="w-4 h-4 cursor-pointer" onChange={onChange}/>
        <label htmlFor={title} className="ml-2">{title}</label>
    </div>
  )
}


export default FilterBox