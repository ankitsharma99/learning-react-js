import React from "react";
import ReactDOM from "react-dom/client";

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

const Title = () => (
  <a href="/">
    <img
      className="logo"
      alt="logo-food-villa"
      src="https://lh3.googleusercontent.com/p/AF1QipO_6cTc3QdC9L2vAOyCkUPG-G-9YeFxo3YiDu3R=w1080-h608-p-no-v0"
    />
  </a>
);

// Components: Functional And Class Based

const HeaderComponent = () => {
  return (
    <div className="header">
      {/* {console.log("Any JS Code here")} */}
      <Title /> {/*Component Composition */}
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const RestaurantCard = () => {
  return (
    <div className="card">
      <img
        src="https://images.news18.com/ibnlive/uploads/2021/01/1610716314_untitled-design-2021-01-15t184025.049.jpg"
        alt="Pizza"
      />
      <h2>Burger King Pixxa</h2>
      <h3>Pizza, American</h3>
      <h4>4 stars</h4>
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

// const JsxExample = (
//   <div style={styleObj}>
//     <h1>Hello</h1>
//     <h2>World</h2>
//   </div>
// );
const AppLayout = () => {
  return (
    // <div style={styleObj}>
    <>
      <HeaderComponent />
      <Body />
      <Footer />
      {/* </div> */}
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
