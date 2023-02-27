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

const Body = () => {
  return <h4>Body</h4>;
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
    <div style={styleObj}>
      <HeaderComponent />
      <Body />
      <Footer />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
