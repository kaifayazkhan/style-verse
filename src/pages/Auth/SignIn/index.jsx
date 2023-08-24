import { useState } from "react";
import { Link } from "react-router-dom";
import { style } from "../../../constant/globalStyle";
import Input from "../../../components/Input";
import Logo from "../../../assets/style-verse-logo.png";
import { ValidateSigInForm } from "../../../vallidateForm";
import { loginField } from "../../../constant";

const SignIn = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  
  const [errorMsg, setErrorMsg] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { username, password } = formData;
    const error = ValidateSigInForm(username, password);
    setErrorMsg(error);
  };

  return (
    <div
      className={`w-full h-screen bg-gray-100 ${style["flex-center"]} flex-col gap-8`}
    >
      <img src={Logo} className="w-44 mx-auto" />
      <form
        className="bg-white w-[90%] md:w-2/4 max-w-md p-4 flex flex-col gap-4"
        onSubmit={(e) => handleSubmit(e)}
      >
        {loginField?.map(({ id, type, title }) => (
          <Input
            key={id}
            type={type}
            title={title}
            name={id}
            value={formData[id]}
            onChange={(e) => handleChange(e)}
            error={errorMsg[id]}
          />
        ))}
        <button className={`${style["global-btn"]}`} type="submit">
          Login
        </button>
        <Link
          to="/signup"
          className="text-center hover:underline underline-offset-4 transition duration-100"
        >
          Not have an account?
        </Link>
      </form>
    </div>
  );
};

export default SignIn;
