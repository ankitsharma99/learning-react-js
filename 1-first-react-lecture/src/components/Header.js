import { useState } from "react";
import { Link } from "react-router-dom";

const Title = () => (
  <a href="/">
    <img
      className="logo"
      alt="logo-food-villa"
      src="https://lh3.googleusercontent.com/p/AF1QipO_6cTc3QdC9L2vAOyCkUPG-G-9YeFxo3YiDu3R=w1080-h608-p-no-v0"
    />
  </a>
);

const Header = () => {
  const [isLoggedIn, setisLoggedIn] = useState(true);

  console.log("rendering Head");
  return (
    <div className="header">
      {/* {console.log("Any JS Code here")} */}
      <Title /> {/*Component Composition */}
      <div className="nav-items">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
      {isLoggedIn ? (
        <button onClick={() => setisLoggedIn(false)}>Logout</button>
      ) : (
        <button onClick={() => setisLoggedIn(true)}>Login</button>
      )}
    </div>
  );
};

export default Header;
