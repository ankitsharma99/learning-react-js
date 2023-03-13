import React, { lazy, Suspense, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header"; // default import
// import { Title } from "./components/Header"; // named import
import Body from "./components/Body";
import Footer from "./components/Footer";
import About from "./components/About";
import Error from "./components/Error";
import Contact from "./components/Contact";
import Profile from "./components/Profile";

import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import RestaurantMenu from "./components/RestaurantMenu";
import Shimmer from "./components/Shimmer";
import UserContext from "./components/utils/UserContext";
// import Instamart from "./components/Instamart";    // lazy loading done below
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
const Instamart = lazy(() => import("./components/Instamart"));

const AppLayout = () => {
  const [user, setUser] = useState({
    name: "Ankit Sharma",
    email: "sharmankit9593@gmail.com",
  });
  return (
    <>
      <UserContext.Provider value={{ user: user }}>
        <Header />
        {/* Render all other components (Outlet) */}
        <Outlet />
        <Footer />
      </UserContext.Provider>
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
        children: [
          {
            path: "profile", // do not use /profile else react router dom will not understand that its relative to its parent
            element: <Profile />,
          },
        ],
      },

      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/instamart",
        element: (
          <Suspense fallback={<Shimmer />}>
            <Instamart />
          </Suspense>
        ),
      },
      {
        path: "/restaurant/:id",
        element: <RestaurantMenu />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<AppLayout />);

root.render(<RouterProvider router={appRouter} />);
