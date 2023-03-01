export const Title = () => (
  <a href="/">
    <img
      className="logo"
      alt="logo-food-villa"
      src="https://lh3.googleusercontent.com/p/AF1QipO_6cTc3QdC9L2vAOyCkUPG-G-9YeFxo3YiDu3R=w1080-h608-p-no-v0"
    />
  </a>
);

const Header = () => {
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

export default Header;
