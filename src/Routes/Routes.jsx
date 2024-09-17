import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../Pages/Home/Home";
import About from "../Pages/About/About";
import ContactUs from "../Pages/ContactUs/ContactUs";
import Shop from "../Pages/Shop/Shop";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";

const router = createBrowserRouter([
    {
      path: "/",
      element: <App></App>,
      children: [
        {
          path: "/",
          element: <Home></Home>
        },
        {
          path: "/shop",
          element: <Shop></Shop>
        },
        {
          path: "/about",
          element: <About></About>
        },
        {
          path: "/contact-us",
          element: <ContactUs></ContactUs>
        },
        {
          path: "/login",
          element: <Login></Login>
        },
        {
          path: "/sign-up",
          element: <SignUp></SignUp>
        },
      ]
    },
  ]);

export default router;