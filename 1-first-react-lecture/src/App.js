import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header"; // default import
// import { Title } from "./components/Header"; // named import
import Body from "./components/Body";
import Footer from "./components/Footer";
import About from "./components/About";
import Error from "./components/Error";
import Contact from "./components/Contact";

import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import RestaurantDetails from "./components/RestaurantDetails";
/*
    Header
      - Logo
      - Nav Items Right Side
      - Cart
    Body
      - Search Bar
      - Restaurant List
        - Restaurant Card
            - Image
            - Name
            - Rating
            - Cusines
      - Food Items
    Footer
   */

const AppLayout = () => {
  return (
    <>
      <Header />
      {/* Render all other components (Outlet) */}
      <Outlet />
      <Footer />
    </>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },

      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaurant/:id",
        element: <RestaurantDetails />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<AppLayout />);

root.render(<RouterProvider router={appRouter} />);
