import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import PropTypes from "prop-types";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  sendEmailVerification,
} from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { auth, db } from "../firebase";
import useToken from "../hooks/useToken";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const { addToken, removeToken } = useToken();
  const navigate = useNavigate();

  const saveUser = async (uid, name, email) => {
    try {
      await setDoc(doc(db, "users", uid), {
        name: name,
        email: email,
        createdAt: new Date().toDateString(),
      });
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  const createUser = async (name, email, password) => {
    setLoading(true);
    try {
      const user = await createUserWithEmailAndPassword(auth, email, password);
      addToken(user?.user?.accessToken);
      saveUser(user?.user?.uid, name, email);
      const userCred = user.user;
      if (userCred) {
        sendEmailVerification(userCred); //send the email verification link on user email
        toast.success("Email verification link has been sent to your email.")
        toast.success("User created successfully!");
      }
      navigate("/signIn");
    } catch (error) {
      if (error.message === "Firebase: Error (auth/email-already-in-use).") {
        toast.warning("Email already exists.");
      }
    } finally {
      setLoading(false);
    }
  };
  const signIn = async (email, password) => {
    setLoading(true);
    try {
      const user = await signInWithEmailAndPassword(auth, email, password);
      const userCred = user.user;
      if (!userCred) return;
      if (!userCred.emailVerified) {
        toast.warning("Please verify your email first.");
        return;
      }
      addToken(user?.user?.accessToken);
      navigate("/shop");
    } catch (error) {
      console.log(error);
      if (error.message === "Firebase: Error (auth/user-not-found).") {
        toast.warning("Invalid email or password");
      }
      if (error.message === "Firebase: Error (auth/wrong-password).") {
        toast.warning("Invalid password.");
      }
    } finally {
      setLoading(false);
    }
  };

  const signOut = () => {
    removeToken();
    navigate("/")
  };

  const values = {
    signIn,
    createUser,
    loading,
    signOut,
  };
  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AuthProvider;
