import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import  { Appleyout } from "./components/layout/AppLayout";
import About from "./pages/About";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Country from "./pages/Country";
import Error from "./pages/Error";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",

      element: <Appleyout />,
      errorElement : <Error/>,
      children: [
        {
          path: "/",

          element: <Home />,
        },
        {
          path: "about",

          element: <About />,
        },
        {
          path: "country",

          element: <Country />,
        },

 
        {
          path: "contact",

          element: <Contact />,
        },
      ],
    },

   
  ]);

  return <RouterProvider router={router} />;
};

export default App;
