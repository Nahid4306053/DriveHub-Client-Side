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
import AddNewCar from "../pages/Dashboard/AddNewCar";
import ManageCars from "../pages/Dashboard/ManageCars";
import CarDetails from "../pages/CarDetails";
import MyBookings from "../pages/Dashboard/MyBookings";
import UpcomingBook from "../pages/Dashboard/UpcomingBookings";
import ManageBookings from "../pages/Dashboard/ManageBooking";
import MangeUser from "../pages/Dashboard/MangeUser";
import ProfileSetting from "../pages/Dashboard/ProfileSetting";
import Payment from "../pages/Dashboard/Payment";
import MyPaymentHistory from "../pages/Dashboard/MyPaymentHistory";
import Cars from "../pages/Cars";
import RatingForm from "../components/Dashboard/Rating/RatingForm";
import HandelJourneyPost from "../pages/Dashboard/HandelJourneyPost";
import HandelMyPosts from "../pages/Dashboard/HandelMyPosts";
import HandelUserPost from "../pages/Dashboard/HandelUserPost";
import CommunityHub from "../pages/CommunityHub";
import CommunityLayout from "../layouts/CommunityLayout";
import PostDetails from "../pages/PostDetails";

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
        path: "/cars",
        element: <Cars />,
      },     
       {
        path: "/community",
        element: <CommunityLayout />,
        children : [
          {
            path : "/community/",
            element : <CommunityHub/>
          },{
            path : "/community/post-details/:id",
            element : <PostDetails/>
          },
        ]
      },
      {
        path: "/contact",
        element: <ContactUs />,
      },
      {
        path: "/about",
        element: <AboutUs />,
      }
      ,
      { path: "/car-details/:id",
       element: <CarDetails></CarDetails> 
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
      { path: "add-car", element: <AddNewCar></AddNewCar> },
      { path: "manage-cars", element: <ManageCars></ManageCars> },
      { path: "my-bookings", element: <MyBookings></MyBookings> },
      { path: "upcoming-bookings", element: <UpcomingBook></UpcomingBook> },
      { path: "manage-bookings", element: <ManageBookings></ManageBookings> },
      { path: "manage-users", element: <MangeUser></MangeUser> },
      { path: "profile-settings", element: <ProfileSetting></ProfileSetting> },
      { path: "payment-history", element: <MyPaymentHistory></MyPaymentHistory> },
      { path: "/dashboard/payment/:id", element: <Payment></Payment> },
      { path: "/dashboard/review/:id", element: <RatingForm></RatingForm> },
      { path: "my-posts", element: <HandelMyPosts></HandelMyPosts> },      { path: "/dashboard/add-post/", element: <HandelJourneyPost></HandelJourneyPost> },
      { path: "handel-post", element: <HandelUserPost></HandelUserPost> },      { path: "/dashboard/add-post/", element: <HandelJourneyPost></HandelJourneyPost> },
    ],
  },
]);

export default CreateDRouter;
