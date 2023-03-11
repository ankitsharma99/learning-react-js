import { useState } from "react";
import { Link } from "react-router-dom";
import useOnline from "../components/utils/useOnline";

const Title = () => (
  <Link to="/">
    <img
      className="logo"
      alt="logo-food-villa"
      src="https://lh3.googleusercontent.com/p/AF1QipO_6cTc3QdC9L2vAOyCkUPG-G-9YeFxo3YiDu3R=w1080-h608-p-no-v0"
    />
  </Link>
);

const Header = () => {
  const [isLoggedIn, setisLoggedIn] = useState(true);
  const isOnline = useOnline();

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
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
          <li>Cart</li>
          <li>
            <Link to="/instamart">Instamart</Link>
          </li>
          <li>{isOnline ? "✅" : "🔴"}</li>
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
