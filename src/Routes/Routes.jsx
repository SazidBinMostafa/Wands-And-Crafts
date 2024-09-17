import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../Pages/Home/Home";
import About from "../Pages/About/About";
import ContactUs from "../Pages/ContactUs/ContactUs";
import Shop from "../Pages/Shop/Shop";

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
      ]
    },
  ]);

export default router;