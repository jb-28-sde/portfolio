App.jsx
import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import { Toaster } from "./components/ui/toaster";


const router = createBrowserRouter([
  {
    path: "/",              
    element: <Home />,
  },
  {
    path: "*",               
    element: <NotFound />,
  },
]);

export default function App() {
  <Toaster />
  
  return <RouterProvider router={router} />;
}

