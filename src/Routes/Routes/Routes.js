import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import AboutNav from "../../Pages/AboutNav/AboutNav";
// import About from "../../Pages/AboutNav/AboutNav";
import Appointment from "../../Pages/Appointment/Appointment/Appointment";
import ContactUs from "../../Pages/Home/Home/ContactUs/ContactUs";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import Reviews from "../../Pages/Reviews/Reviews";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/home",
        element: <Home></Home>,
      },
      {
        path: "/appointment",
        element: <Appointment></Appointment>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/contact-us",
        element: <ContactUs></ContactUs>,
      },
      {
        path: "/about",
        element: <AboutNav></AboutNav>,
      },
      {
        path: "/reviews",
        element: <Reviews></Reviews>,
      },
    ],
  },
]);
export default router;
