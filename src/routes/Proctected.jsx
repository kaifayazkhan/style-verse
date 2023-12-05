import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import useToken from "../hooks/useToken";
const Protected = () => {
  const { token } = useToken();
  const navigate = useNavigate();

  useEffect(() => {
    if (!token) {
      navigate("/signIn");
    }
  });

  return <Outlet/>
};

export default Protected;
