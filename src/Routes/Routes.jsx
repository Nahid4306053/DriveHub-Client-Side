import { createBrowserRouter } from "react-router-dom";
import AuthnicationContext from "../Context/AuthnicationContext";
import TemplateMoodContext from "../Context/TemplateMoodContext";
import DashBoardLayout from "../layouts/DashBoardLayout";
import MainLayouts from "../layouts/MainLayouts";
import MyProfile from "../pages/Dashboard/MyProfile";
import Home from "../pages/Home";
import Notfound from "../pages/Notfound";
import Signup from "../pages/Signup";
import Login from "../pages/logIn";
import AuthHandler from "./AuthHandler";
import PrivateRouter from "./PrivateRouter";
import ContactUs from "../pages/ContactUs";
import AboutUs from "../pages/AboutUs";
import MyTask from "../pages/Dashboard/MyTask";

import OfferAnnouncements from "../pages/Dashboard/OfferAnnouncements";
import Setting from "../pages/Dashboard/Setting";
import TodayTask from "../pages/Dashboard/TodayTask";
const CreateDRouter = createBrowserRouter([
  {
    path: "/",
    element: (
      <AuthnicationContext>
        <TemplateMoodContext>
          <MainLayouts />
        </TemplateMoodContext>
      </AuthnicationContext>
    ),
    errorElement: (
      <TemplateMoodContext>
        <Notfound />
      </TemplateMoodContext>
    ),
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {   
        path: "/contact",
        element: <ContactUs />,
      },{
        path: "/about",
        element: <AboutUs />,
      },
    ],
  },
  {
    path: "/signup",
    element: (
      <AuthnicationContext>
        <AuthHandler>
          <Signup></Signup>
        </AuthHandler>
      </AuthnicationContext>
    ),
  },
  {
    path: "/login",
    element: (
      <AuthnicationContext>
        <AuthHandler>
          <Login></Login>
        </AuthHandler>
      </AuthnicationContext>
    ),
  },
  {
    path: "/dashboard",
    element: (
      <AuthnicationContext>
        <TemplateMoodContext>
          <PrivateRouter>
            <DashBoardLayout />
          </PrivateRouter>
        </TemplateMoodContext>
      </AuthnicationContext>
    ),
    errorElement: <Notfound></Notfound>,
    children: [
      { path: "profile", element: <MyProfile></MyProfile> },
      { path: "my-task", element: <MyTask></MyTask> },
      { path: "todays-task", element: <TodayTask></TodayTask> },
      { path: "announcements", element: <OfferAnnouncements></OfferAnnouncements> },
      { path: "settings", element: <Setting></Setting> },
    ],
  },
]);

export default CreateDRouter;
