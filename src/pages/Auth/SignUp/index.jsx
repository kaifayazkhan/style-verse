import { useState } from "react";
import { Link } from "react-router-dom";
import { style } from "../../../constant/globalStyle";
import Input from "../../../components/Input";
import Logo from "../../../assets/style-verse-logo.png";
import { ValidateSigUpForm } from "../../../vallidateForm";
import {signUpField} from "../../../constant"
import useAuth from "../../../hooks/useAuth";
const SignUp = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [errorMsg, setErrorMsg] = useState({});
  const {createUser,loading} = useAuth();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name,email, password,confirmPassword } = formData;
    const error = ValidateSigUpForm(name,email, password,confirmPassword);
    setErrorMsg(error);

    if(Object.keys(error).length === 0){
      createUser(name,email,password);
    }
  };

  return (
    <div
      className={`w-full h-screen bg-gray-100 ${style["flex-center"]} flex-col gap-8`}
    >
      <img src={Logo} className="w-44 mx-auto" />
      <form
        onSubmit={(e) => handleSubmit(e)}
        className="bg-white w-[90%] md:w-2/4 max-w-md p-4 flex flex-col gap-4"
      >
        {signUpField?.map(({ id, type, title }) => (
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
        <button className={`${style["global-btn"]}`}>
          {loading ?"Loading..." :"Submit"}
        </button>
        <Link
          to="/signin"
          className="text-center hover:underline underline-offset-4 transition duration-100"
        >
          Have an account? Login
        </Link>
      </form>
    </div>
  );
};

export default SignUp;
