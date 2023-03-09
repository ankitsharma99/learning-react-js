import { Outlet } from "react-router-dom";
const About = () => {
  return (
    <div>
      <h1>About Us page</h1>
      <p>Welcome to foodVilla</p>
      <Outlet />
    </div>
  );
};

export default About;
