import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import useOnline from "../components/utils/useOnline";
import UserContext from "./utils/UserContext";

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

  const { user } = useContext(UserContext);

  console.log("rendering Head");
  return (
    <div className="flex justify-between bg-slate-300 shadow-lg">
      {/* {console.log("Any JS Code here")} */}
      <Title /> {/*Component Composition */}
      <div className="nav-items">
        <ul className="flex py-10">
          <li className="hover:underline  px-5">
            <Link to="/">Home</Link>
          </li>
          <li className="hover:underline px-5">
            <Link to="/about">About</Link>
          </li>
          <li className="hover:underline px-5">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="hover:underline px-5">Cart</li>
          <li className=" hover:underline px-5">
            <Link to="/instamart">Instamart</Link>
          </li>
          <li className=" px-10">
            {isOnline ? `✅${user.name}` : `🔴Check Internet`}
          </li>
        </ul>
      </div>
      {isLoggedIn ? (
        <button
          className=" hover:text-red-700 px-5"
          onClick={() => setisLoggedIn(false)}
        >
          Logout
        </button>
      ) : (
        <button
          className=" hover:text-red-700 px-5"
          onClick={() => setisLoggedIn(true)}
        >
          Login
        </button>
      )}
    </div>
  );
};

export default Header;
