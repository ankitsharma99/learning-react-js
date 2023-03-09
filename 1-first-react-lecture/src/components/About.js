import { Outlet } from "react-router-dom";
import Profile from "./ProfileClass";
import ProfileFunctional from "./Profile";
const About = () => {
  return (
    <div>
      <h1>About Us page</h1>
      <p>Welcome to foodVilla</p>
      {/* <Outlet /> */}
      <ProfileFunctional name={"Ankit"} />
      <Profile />
    </div>
  );
};

export default About;
