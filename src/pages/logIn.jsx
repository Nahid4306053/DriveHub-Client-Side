/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import { Divider, TextField } from "@mui/material";
import { useMutation } from "@tanstack/react-query";
import React, { useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { useAuth } from "../Context/AuthnicationContext";
import Pagetitle from "../Hooks/Pagetitle";
import ScrollTop from "../Hooks/ScrollTop";
import EntrypointDesc from "../components/Authparts/EntrypointDesc";
import logo from "/images/color-logo.png";
import log_bg from "/images/login_bg.jpg";
export default function Login() {
  ScrollTop();
  const toastId = useRef(null);
  const getemail = useRef();
  const [Errors, setErrors] = useState([]);
  const {
    continueWithGoogle,
    continueWithGithub,
    forgetpassword,
    auth,
    signout,
    SignIn,
  } = useAuth();
  const navigate = useNavigate();
  const { state } = useLocation();
  const { Vpath } = state || {};
  const handleWithGoogle = async () => {
    try {
      await continueWithGoogle();
      toast.success(`${auth.currentUser?.displayName} log in SuccessFully`);
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  //  const handleWithGithub = async () =>{
  //   try{
  //       await continueWithGithub()
  //       navigate("/")
  //   }
  //   catch(err){
  //    console.log(err);
  //   }
  //  }

  const mutation = useMutation({
    mutationFn: async ({ email, password }) => {
      await SignIn(email, password);
    },
    onSuccess: async () => {
      toast.success(`${auth.currentUser?.displayName} Log in Succsessfully`);
      navigate("/");
    },
    onError: (err) => {
      setErrors([err?.message.split("(")[1]]);
    },
  });

  const handelesubmit = async (form) => {
    form.preventDefault();
    let email = form.target.email.value;
    let password = form.target.password.value;
    const passwordPattern =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]).{6,}$/;

    const emailPattern = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;
    const err = [];

    if (password.trim() === "") {
      err.push("Password is required");
    } else if (!passwordPattern.test(password)) {
      err.push(
        "Password should include one uppercase , one lowercase , one special  character and length should 6 character"
      );
    }
    if (email.trim() === "") {
      err.push("Email is required");
    } else if (!emailPattern.test(email)) {
      err.push("Please provide verified email");
    }
    setErrors(err);

    if (err.length === 0) {
      mutation.mutate({ email, password });
    }
  };

  // const handleForget = async () =>{
  //   if(getemail.current.value.trim() === ""){
  //     setErrors((old)=>[...old , "First type your email in email field then click Forget password"])
  //   }
  //   else{
  //    try{
  //     await forgetpassword(getemail.current.value);
  //     alert("Please check you mail we give a link for forget password")
  //     setErrors([])
  //    }
  //    catch(err){
  //     setErrors((old)=>[...old , err.message.split("/")[1].replace(/-\)|-/g, " ").replace(").", " ") ])
  //    }
  //   }
  // }

  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <Pagetitle>log in || DriveHub</Pagetitle>
      {/* Same as */}

      <div
        style={{
          backgroundImage: `url(${log_bg})`,
        }}
        className="hero  min-h-screen "
      >
        <div className="overlay absolute h-full w-full   bg-black opacity-50"></div>
        <div className="hero-content relative z-10 container">
          <div
            className={` overflow-hidden bg-red-100 md:grid lg:grid-cols-5 md:grid-cols-6  items-center  shadow-black  shadow-2xl `}
          >
            <EntrypointDesc></EntrypointDesc>
            <div className=" bg-red-100  p-10 text-red-600  w-full md:col-span-3 lg:col-span-2 z-50">
              <div className="mb-10">
                <img className=" w-64 lg:w-xs mx-auto   " src={logo} alt="" />
                <h3 className="text-xl mt-3 text-center">
                  Log in to your account
                </h3>
              </div>
              {Errors.length > 0 && (
                <div className="erorrs  text-red-600  my-4 bg-red-200 p-4 rounded-lg">
                  <ul className="list-disc grid gap-2">
                    {Errors.map((ele, ind) => {
                      return (
                        <li key={ind} className="capitalize  ml-4">
                          {ele}
                        </li>
                      );
                    })}
                  </ul>
                </div>
              )}
              <form onSubmit={handelesubmit} className="mt-5 space-y-5">
                <TextField
                  name="email"
                  fullWidth
                  id="email"
                  label="Email"
                  variant="outlined"
                />
                <TextField
                  name="password"
                  fullWidth
                  id="password"
                  label="Password"
                  variant="outlined"
                />
                <button
                  type="submit"
                  className="btn text-white w-full hover:bg-red-600  bg-red-600  border-none "
                >
                  Log in
                </button>
              </form>
              <p className="mt-7 text-center">
                Dont't have an Account?
                <Link className="text-blue-950 ml-2 font-bold" to="/signup">
                  Sign Up
                </Link>
              </p>
              <Divider sx={{ mt: 3 }}>OR</Divider>
              <button
                onClick={handleWithGoogle}
                className="border border-red-600  flex items-center justify-center gap-3  p-3 mt-6 w-full rounded-lg font-bold"
              >
                <img
                  className="h-6"
                  src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-google-icon-logo-png-transparent-svg-vector-bie-supply-14.png"
                  alt=""
                />
                Continue with Google
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
