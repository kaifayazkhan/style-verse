import propTypes from "prop-types";
const Input = ({ title, type,onChange,error,name,value }) => {

  return (
    <div className="w-full flex flex-col gap-2">
      <label htmlFor={title} className="">{title}</label>
      <input type={type}  onChange={onChange} name={name} value={value} className="border border-[#4C4E6438] outline-none rounded p-2"/>
      {error && <p className="text-rose-600">{error}</p>}
    </div>
  );
};

Input.propTypes = {
  title: propTypes.string.isRequired,
  type: propTypes.string.isRequired,
  onChange:propTypes.func.isRequired,
  error:propTypes.string,
  name:propTypes.string.isRequired,
  value:propTypes.string.isRequired
};

export default Input;
