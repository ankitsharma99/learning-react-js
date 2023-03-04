import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header"; // default import
// import { Title } from "./components/Header"; // named import
import Body from "./components/Body";
import Footer from "./components/Footer";
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
      <Body />
      <Footer />
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
