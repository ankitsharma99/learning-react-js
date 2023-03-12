import { useState } from "react";
import { Link } from "react-router-dom";
import useOnline from "../components/utils/useOnline";

const Title = () => (
  <Link to="/">
    <img
      className="h-28 p-4"
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
    <div className="flex justify-between bg-slate-100 shadow-lg">
      {/* {console.log("Any JS Code here")} */}
      <Title /> {/*Component Composition */}
      <div className="nav-items">
        <ul className="flex py-10">
          <li className=" px-5">
            <Link to="/">Home</Link>
          </li>
          <li className=" px-5">
            <Link to="/about">About</Link>
          </li>
          <li className=" px-5">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className=" px-5">Cart</li>
          <li className=" px-5">
            <Link to="/instamart">Instamart</Link>
          </li>
          <li className=" px-10">{isOnline ? "✅" : "🔴"}</li>
        </ul>
      </div>
      {isLoggedIn ? (
        <button className=" px-5" onClick={() => setisLoggedIn(false)}>
          Logout
        </button>
      ) : (
        <button className=" px-5" onClick={() => setisLoggedIn(true)}>
          Login
        </button>
      )}
    </div>
  );
};

export default Header;
