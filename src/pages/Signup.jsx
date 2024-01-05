/* eslint-disable no-useless-escape */
/* eslint-disable no-unused-vars */
import { Divider, TextField } from "@mui/material";
import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { useAuth } from "../Context/AuthnicationContext";
import Pagetitle from "../Hooks/Pagetitle";
import ScrollTop from "../Hooks/ScrollTop";
import UploadIMG from "../Utils/UploadIMG";
import EntrypointDesc from "../components/Authparts/EntrypointDesc";
import logo from "/images/color-logo.png";
import log_bg from "/images/login_bg.jpg";

export default function Signup() {
  ScrollTop();
  const [Errors, setErrors] = useState([]);

  const { continueWithGoogle, continueWithGithub, sendeVerificationmail, auth, Signup, signout, } = useAuth();
  
  const navigate = useNavigate();
  const { state } = useLocation();
  const { Vpath } = state || {};
  const [Uploadimg, setUploadimg] = useState();
  const [loading, setloading] = useState(false);
  const handleWithGoogle = async () => {
    try {
      await continueWithGoogle();
      toast.success(
        `${auth.currentUser?.displayName} Registration SuccessFully`
      );
      navigate("/");
    } catch (err) {
      console.log(err)
    }
  };

  const mutation = useMutation({
    mutationFn: async ({ username, email, password, avatar }) => {
      console.log(username, email, password, avatar);
      await Signup(username, email, password, avatar);
    },
    onSuccess: async () => {
      await signout();
      toast.success(
        `${auth.currentUser?.displayName} Registration SuccessFully`
      );

      navigate("/login");
    },
    onError: (err) => {
      setErrors([err?.message.split("(")[1]]);
    },
  });

  const handelesubmit = async (form) => {
    form.preventDefault();
    let username = form.target.username.value;
    let email = form.target.email.value;
    let password = form.target.password.value;
    let avatar = form.target.avatar.files;

    const passwordPattern =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]).{6,}$/;
    const emailPattern = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;

    const err = [];

    if (username.trim() === "" || typeof username !== "string") {
      err.push("Username is requred");
    } else if (username.trim().length < 3 || username.trim().length > 25) {
      err.push("Username should max 25 and min 3 charecter");
    }

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
      err.push("Please provide a verified email");
    }

    if (avatar.length === 0) {
      err.push("Please Upload a profile Picture");
    }

    setErrors(err);

    if (err.length === 0) {
      try {
        setloading(true);
        const result = await UploadIMG(avatar[0]);
        if (result.data.data.display_url) {
          avatar = result.data.data.display_url;
          setloading(false);
          mutation.mutate({ username, email, password, avatar });
        }
      } catch (err) {
        console.log(err);
        setErrors(["There is a Problem Occured while Uploading Img"]);
      }
    }
  };

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
      <Pagetitle>Sign up || DriveHub</Pagetitle>
      <div
        style={{
          backgroundImage: `url(${log_bg})`,
        }}
        className="hero  min-h-screen "
      >
        <div className="overlay absolute h-full w-full   bg-black opacity-50"></div>
        <div className="hero-content relative z-10 container">
          <div
            className={` overflow-hidden  md:grid lg:grid-cols-5 md:grid-cols-6  items-center  shadow-black  shadow-2xl `}
          >
            <EntrypointDesc></EntrypointDesc>
            <div className=" bg-red-100  p-10 text-red-600 w-full md:col-span-3 lg:col-span-2 z-50">
              <div className="mb-10">
                <img className=" w-64 lg:w-xs mx-auto   " src={logo} alt="" />
                <h3 className="text-xl mt-3 text-center">Create an account</h3>
              </div>
              {Errors.length > 0 && (
                <div className="erorrs  text-red-600 my-4 bg-red-200 p-4 rounded-lg">
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
                  name="username"
                  fullWidth
                  id="username"
                  label="Username"
                  variant="outlined"
                />
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

                <div className="btn p-0 overflow-hidden flex justify-between w-full text-red-600 capitalize relative ">
                  <div className="ml-2">
                    <i className="fa-solid fa-arrow-up-from-bracket mr-2"></i>
                    Upload a profile picture
                  </div>
                  <img src={Uploadimg} className="h-full" alt="" />
                  <input
                    name="avatar"
                    type="file"
                    required
                    onChange={(e) =>
                      setUploadimg(URL.createObjectURL(e.target.files[0]))
                    }
                    className="absolute h-12 opacity-0  w-full"
                    accept=".jpg , .png , jpeg"
                  />
                </div>

                <button
                  type="submit"
                  className="btn text-white w-full hover:bg-red-600 bg-red-600 border-none "
                  disabled={mutation.isPending || loading}
                >
                  {mutation.isPending || loading ? (
                    <span className="loading loading-dots loading-md"></span>
                  ) : (
                    "Sign up"
                  )}
                </button>
              </form>

              <p className="mt-7 text-center">
                Already have an Account?
                <Link className="text-blue-950 ml-2  font-bold" to="/login">
                  Log In
                </Link>
              </p>
              <Divider sx={{ mt: 3 }}>OR</Divider>
              <button
                onClick={handleWithGoogle}
                className="border border-red-600 flex items-center justify-center gap-3  p-3 mt-6 w-full rounded-lg font-bold"
              >
                <img
                  className="h-6"
                  src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-google-icon-logo-png-transparent-svg-vector-bie-supply-14.png"
                  alt=""
                />
                Sign Up with Google
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
