import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "./components/Main";
import Contact from "./components/Contact/Contact";
import About from "./components/About/About";
import Services from "./components/Servics/Services";
import Pricing from "./components/Pricing/Pricing";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children : [
      {
        path : "/contact",
        element : <Contact></Contact>
      },
      {
        path : "/about",
        element : <About></About>
      },
      {
        path : "/services",
        element : <Services></Services>
      },
      {
        path : "/pricing",
        element : <Pricing></Pricing>
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
