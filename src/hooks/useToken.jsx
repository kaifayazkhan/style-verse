import { useState } from "react";

const useToken = () => {

  const getToken = () => {
    return localStorage.getItem("authToken");
  };

  const [token, setToken] = useState(getToken());

  const addToken = (token) => {
    localStorage.setItem("authToken", token);
    setToken(token);
  };

  const removeToken = () => {
    localStorage.removeItem("authToken");
    setToken(null);
  };

  return { token, addToken, removeToken };
};

export default useToken;
