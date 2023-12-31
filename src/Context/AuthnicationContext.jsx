/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendEmailVerification, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile, } from "firebase/auth";
import  { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import app from "../Firebase/Firebase.config";
import useAxiosPublicV1 from "../Hooks/useAxiosPublicV1"
import useAxiosSecureV1 from "../Hooks/useAxiosSecureV1";
const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}
export default function AuthnicationContext({ children }) {
  const [CurrentUser, SetCurrentUser] = useState();
  const [loading, setloading] = useState(true);
  const auth = getAuth(app);
  const googleprovider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();
  const navigate = useNavigate();
   const AxiosSecureV1 = useAxiosSecureV1()
  const AxiosPublicV1 = useAxiosPublicV1();

  const signout = async () => {
    await AxiosPublicV1.delete(`${import.meta.env.VITE_API_URL_V1}/logout`);
    await signOut(auth);
  }; 
  
  AxiosSecureV1.interceptors.response.use(
    function (response) {
      return response;
    },
    async function (error) {
      if (error?.response?.status === 401 || error?.response?.status === 403) {
        signout();
        navigate("/login");
      }
      return Promise.reject(error);
    }
  );

  useEffect(() => {
   const unsubcribe = onAuthStateChanged(auth, async (user) => {
      try {
        if (user) {
         const res  =  await AxiosPublicV1.post(`${import.meta.env.VITE_API_URL_V1}/user`, {
            uid: user.uid ,
            displayName: user.displayName ,
            email:  user.email,
            photoURL:user.photoURL ,
          });
          SetCurrentUser(res.data); 
          setloading(false);
        } else {
          SetCurrentUser();
          await AxiosPublicV1.delete(`${import.meta.env.VITE_API_URL_V1}/logout`);
          setloading(false);
        }
      } catch (err) {
        SetCurrentUser() 
        signout();
      }
    });
    
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const continueWithGoogle = async () => {
    await signInWithPopup(auth, googleprovider);
  };

  const continueWithGithub = async () => {
    await signInWithPopup(auth, githubProvider);
  };

  const Signup = async (username, email, password, avatar) => {
    console.log(username, email, password, avatar);
    await createUserWithEmailAndPassword(auth, email, password);
    await updateProfile(auth.currentUser, {
      displayName: username,
      photoURL: avatar,
    });
  };

  const SignIn = async (email, password) => {
    await signInWithEmailAndPassword(auth, email, password);
  };

  const sendeVerificationmail = async () => {
    await sendEmailVerification(auth.currentUser);
  };
  const forgetpassword = async (email) => {
    await sendPasswordResetEmail(auth, email);
  };

  return (
    <AuthContext.Provider
      value={{
        loading,
        forgetpassword,
        sendeVerificationmail,
        SignIn,
        signout,
        Signup,
        auth,
        setloading,
        continueWithGoogle,
        continueWithGithub,
        CurrentUser,
        SetCurrentUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
