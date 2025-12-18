import React from 'react';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from './component/layout/AppLayout';
import About from './pages/About';
import Contact from './pages/Contact';
import Country from './pages/Country';
import Error from './pages/Error';

const App = () => {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
      errorElement: <Error />,
      children: [  
        {
          path: "about",   
          element: <About />
        },
        {
          path: "contact",  
          element: <Contact />
        },
        {
          path: "country",  
          element: <Country />
        }
      ]
    }
  ]);

  return <RouterProvider router={router} />;
}

export default App;
