import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header"; // default import
import { Title } from "./components/Header"; // named import
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

// Components: Functional And Class Based

const PizzaHut = {
  name: "Pizza Hut",
  image:
    "https://images.news18.com/ibnlive/uploads/2021/01/1610716314_untitled-design-2021-01-15t184025.049.jpg",
  rating: 4,
  cuisine: ["American", "Pizza"],
};

const RestaurantCard = () => {
  return (
    <div className="card">
      <img src={PizzaHut.image} alt="pizza hut image logo" />
      <h3>{PizzaHut.name}</h3>
      <p>{PizzaHut.rating}</p>
      <p>{PizzaHut.cuisine.join(",")}</p>
    </div>
  );
};

const Body = () => {
  return (
    <div className="restaurant-list">
      <RestaurantCard />
      <RestaurantCard />
      <RestaurantCard />
      <RestaurantCard />
      <RestaurantCard />
      <RestaurantCard />
      <RestaurantCard />
      <RestaurantCard />
    </div>
  );
};

const Footer = () => {
  return <h4>Footer</h4>;
};

const styleObj = {
  backgroundColor: "red",
};

const AppLayout = () => {
  return (
    <>
      <Header />
      <Body />
      <Footer />
      {/* </div> */}
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
